import { NextResponse } from 'next/server'
import { z } from 'zod'
import db from '@/lib/database.js'
import { generateId } from '@/lib/utils'
import { rateLimit } from '@/lib/rate-limit'

// Function to get the next tracking ID
async function getNextTrackingId() {
  try {
    // Get the highest tracking_id from the database
    const result = await db.query(`
      SELECT tracking_id 
      FROM quotes 
      WHERE tracking_id ~ '^[0-9]+$'  -- Only numeric tracking IDs
      ORDER BY CAST(tracking_id AS INTEGER) DESC 
      LIMIT 1
    `)
    
    if (result.rows.length === 0) {
      // If no quotes exist, start with 8707 (or your preferred starting number)
      return '8707'
    }
    
    const lastTrackingId = parseInt(result.rows[0].tracking_id)
    const nextTrackingId = lastTrackingId + 1
    
    return nextTrackingId.toString()
  } catch (error) {
    console.error('Error getting next tracking ID:', error)
    // Fallback to random number if there's an issue
    return Math.floor(Math.random() * 900000 + 100000).toString()
  }
}

// Validation schema (same as before but tracking_id will be generated)
const createQuoteSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(10),
  email: z.string().email(),
  originAddress: z.string().min(1),
  destinationAddress: z.string().min(1),
  originCity: z.string().optional(),
  originState: z.string().optional(),
  destinationCity: z.string().optional(),
  destinationState: z.string().optional(),
  moveDate: z.string().optional(),
  flexible: z.boolean().optional(),
  vehicles: z.array(z.object({
    year: z.number(),
    make: z.string(),
    model: z.string(),
    condition: z.enum(['running', 'notRunning']),
    isOversized: z.boolean().optional(),
    specialInstructions: z.string().nullable().optional(),
  })),
  transportType: z.enum(['open', 'enclosed']),
  pickupType: z.enum(['doorToDoor', 'terminalToTerminal']),
  expedited: z.boolean().optional(),
  seasonalService: z.boolean().optional(),
  seasonalStartDate: z.string().optional(),
  seasonalReturnDate: z.string().optional(),
  promoCode: z.string().nullable().optional(),
  distance: z.number().optional(),
  pricing: z.object({
    estimatedPrice: z.number(),
    priceRange: z.object({
      min: z.number(),
      max: z.number(),
    }),
    breakdown: z.object({}).passthrough().optional().default({}),
    transitTime: z.object({
      min: z.number(),
      max: z.number(),
    }).optional(),
  }).optional(),
})

export async function POST(request) {
  try {
    const body = await request.json() 

    const A1 = convertLeadForExternalDB(body)
    console.log(A1)


    const validatedData = createQuoteSchema.parse(body)

    // Create quote in database using transaction to ensure tracking ID uniqueness
    const result = await db.transaction(async (client) => {
      // Get the next tracking ID within the transaction to avoid race conditions
      const trackingIdResult = await client.query(`
        SELECT COALESCE(
          (SELECT MAX(CAST(tracking_id AS INTEGER)) + 1 
           FROM quotes 
           WHERE tracking_id ~ '^[0-9]+$'), 
          8707
        ) as next_id
      `)
      
      const trackingId = trackingIdResult.rows[0].next_id.toString()

      // Insert quote with the new tracking ID
      const quoteResult = await client.query(`
        INSERT INTO quotes (
          tracking_id, name, phone, email, origin_address, destination_address,
          origin_city, origin_state, destination_city, destination_state,
          transport_type, pickup_type, expedited, seasonal_service,
          seasonal_start_date, seasonal_return_date, move_date, flexible_dates,
          distance, base_cost, total_cost, cost_breakdown, promo_code
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)
        RETURNING *
      `, [
        trackingId,
        validatedData.name,
        validatedData.phone,
        validatedData.email,
        validatedData.originAddress,
        validatedData.destinationAddress,
        validatedData.originCity || '',
        validatedData.originState || '',
        validatedData.destinationCity || '',
        validatedData.destinationState || '',
        validatedData.transportType.toUpperCase(),
        validatedData.pickupType === 'doorToDoor' ? 'DOOR_TO_DOOR' : 'TERMINAL_TO_TERMINAL',
        validatedData.expedited || false,
        validatedData.seasonalService || false,
        validatedData.seasonalStartDate ? new Date(validatedData.seasonalStartDate) : null,
        validatedData.seasonalReturnDate ? new Date(validatedData.seasonalReturnDate) : null,
        validatedData.moveDate ? new Date(validatedData.moveDate) : null,
        validatedData.flexible || false,
        validatedData.distance || 0,
        validatedData.pricing?.estimatedPrice || 0,
        validatedData.pricing?.estimatedPrice || 0,
        JSON.stringify(validatedData.pricing?.breakdown || {}),
        validatedData.promoCode || null
      ])

      const quote = quoteResult.rows[0]

      // Insert vehicles
      const vehiclePromises = validatedData.vehicles.map(vehicle => 
        client.query(`
          INSERT INTO vehicles (quote_id, year, make, model, condition, is_oversized, special_instructions)
          VALUES ($1, $2, $3, $4, $5, $6, $7)
          RETURNING *
        `, [
          quote.id,
          vehicle.year,
          vehicle.make,
          vehicle.model,
          vehicle.condition === 'running' ? 'RUNNING' : 'NOT_RUNNING',
          vehicle.isOversized || false,
          vehicle.specialInstructions || null
        ])
      )

      const vehicleResults = await Promise.all(vehiclePromises)
      const insertedVehicles = vehicleResults.map(result => result.rows[0])

      return {
        quote,
        vehicles: insertedVehicles
      }
    })

    // Log the quote creation
    try {
      await db.query(`
        INSERT INTO system_logs (level, message, data, quote_id, ip_address, user_agent)
        VALUES ($1, $2, $3, $4, $5, $6)
      `, [
        'INFO',
        'New quote created',
        JSON.stringify({
          quoteId: result.quote.id,
          trackingId: result.quote.tracking_id,
          email: result.quote.email,
        }),
        result.quote.id,
        request.headers.get('x-forwarded-for'),
        request.headers.get('user-agent')
      ])
    } catch (logError) {
      console.warn('Could not log to system_logs table:', logError.message)
    }

    // Send confirmation email (implement if needed) 
    try {
      // Import email functions with error handling
      const { sendQuoteConfirmation, sendAdminNotification } = await import('../../../lib/nodemailer.js')
      
      if (sendQuoteConfirmation) {
        await sendQuoteConfirmation({
          to: result.quote.email,
          quote: {
            ...result.quote,
            vehicles: result.vehicles, 
            pricing: validatedData.pricing,
          },
        })
        console.log('Quote confirmation email sent successfully')
      }

      if (sendAdminNotification) {
        await sendAdminNotification({
          quote: {
            ...result.quote,
            vehicles: result.vehicles,
            pricing: validatedData.pricing,
          },
        })
        console.log('Admin notification email sent successfully')
      }
    } catch (emailError) {
      console.error('Failed to send emails:', emailError)
      // Don't fail the request if email fails - just log the error
    }

    return NextResponse.json({
      success: true,
      quoteId: result.quote.id,
      trackingId: result.quote.tracking_id,
      message: 'Quote created successfully',
    })

  } catch (error) {
    console.error('Error creating quote:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Invalid data provided',
          details: error.errors,
        },
        { status: 400 }
      )
    }

    if (error.code === '42P01') {
      return NextResponse.json(
        { 
          error: 'Database not properly initialized. Please run: npm run db:init',
          details: 'Database tables do not exist'
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request) { 
  try {
    const { searchParams } = new URL(request.url)
    const trackingId = searchParams.get('tracking')
    const email = searchParams.get('email')
    const quoteId = searchParams.get('id')
    const status = searchParams.get('status')
    const limit = parseInt(searchParams.get('limit')) || 10
    const page = parseInt(searchParams.get('page')) || 1
    const offset = (page - 1) * limit

 

    // Get single quote by tracking ID
    if (trackingId) {
      const result = await db.query(`
        SELECT q.*, 
               json_agg(
                 json_build_object(
                   'id', v.id,
                   'year', v.year,
                   'make', v.make,
                   'model', v.model,
                   'condition', v.condition,
                   'is_oversized', v.is_oversized,
                   'special_instructions', v.special_instructions,
                   'created_at', v.created_at
                 ) ORDER BY v.created_at
               ) FILTER (WHERE v.id IS NOT NULL) as vehicles
        FROM quotes q
        LEFT JOIN vehicles v ON q.id = v.quote_id
        WHERE q.tracking_id = $1
        GROUP BY q.id
      `, [trackingId].toString())

      if (result.rows.length === 0) {
        return NextResponse.json(
          { error: 'Quote not found', message: 'No quote found with this tracking ID' },
          { status: 404 }
        )
      }

      const quote = result.rows[0]
      return NextResponse.json({ 
        success: true,
        quote: {
          ...quote,
          vehicles: quote.vehicles || [],
          cost_breakdown: typeof quote.cost_breakdown === 'string' 
            ? JSON.parse(quote.cost_breakdown) 
            : quote.cost_breakdown
        }
      })
    }

    // Get single quote by internal ID
    if (quoteId) {
      const result = await db.query(`
        SELECT q.*, 
               json_agg(
                 json_build_object(
                   'id', v.id,
                   'year', v.year,
                   'make', v.make,
                   'model', v.model,
                   'condition', v.condition,
                   'is_oversized', v.is_oversized,
                   'special_instructions', v.special_instructions,
                   'created_at', v.created_at
                 ) ORDER BY v.created_at
               ) FILTER (WHERE v.id IS NOT NULL) as vehicles
        FROM quotes q
        LEFT JOIN vehicles v ON q.id = v.quote_id
        WHERE q.id = $1
        GROUP BY q.id
      `, [quoteId])

      if (result.rows.length === 0) {
        return NextResponse.json(
          { error: 'Quote not found', message: 'No quote found with this ID' },
          { status: 404 }
        )
      }

      const quote = result.rows[0]
      return NextResponse.json({ 
        success: true,
        quote: {
          ...quote,
          vehicles: quote.vehicles || [],
          cost_breakdown: typeof quote.cost_breakdown === 'string' 
            ? JSON.parse(quote.cost_breakdown) 
            : quote.cost_breakdown
        }
      })
    }

    // Get quotes by email
    if (email) {
      let query = `
        SELECT q.*, 
               json_agg(
                 json_build_object(
                   'id', v.id,
                   'year', v.year,
                   'make', v.make,
                   'model', v.model,
                   'condition', v.condition,
                   'is_oversized', v.is_oversized,
                   'special_instructions', v.special_instructions,
                   'created_at', v.created_at
                 ) ORDER BY v.created_at
               ) FILTER (WHERE v.id IS NOT NULL) as vehicles,
               COUNT(*) OVER() as total_count
        FROM quotes q
        LEFT JOIN vehicles v ON q.id = v.quote_id
        WHERE q.email = $1
      `
      
      let params = [email]
      let paramCount = 2

      // Add status filter if provided
      if (status) {
        query += ` AND q.status = $${paramCount}`
        params.push(status.toUpperCase())
        paramCount++
      }

      query += ` GROUP BY q.id ORDER BY q.created_at DESC LIMIT $${paramCount} OFFSET $${paramCount + 1}`
      params.push(limit, offset)

      const result = await db.query(query, params)

      const quotes = result.rows.map(quote => ({
        ...quote,
        vehicles: quote.vehicles || [],
        cost_breakdown: typeof quote.cost_breakdown === 'string' 
          ? JSON.parse(quote.cost_breakdown) 
          : quote.cost_breakdown
      }))

      const totalCount = result.rows.length > 0 ? parseInt(result.rows[0].total_count) : 0
      const totalPages = Math.ceil(totalCount / limit)

      return NextResponse.json({ 
        success: true,
        quotes,
        pagination: {
          page,
          limit,
          total: totalCount,
          totalPages,
          hasNext: page < totalPages,
          hasPrev: page > 1
        }
      })
    }

    // Get all quotes (admin functionality with filters)
    let query = `
      SELECT q.*, 
             json_agg(
               json_build_object(
                 'id', v.id,
                 'year', v.year,
                 'make', v.make,
                 'model', v.model,
                 'condition', v.condition,
                 'is_oversized', v.is_oversized,
                 'special_instructions', v.special_instructions,
                 'created_at', v.created_at
               ) ORDER BY v.created_at
             ) FILTER (WHERE v.id IS NOT NULL) as vehicles,
             COUNT(*) OVER() as total_count
      FROM quotes q
      LEFT JOIN vehicles v ON q.id = v.quote_id
    `
    
    let params = []
    let paramCount = 1
    let whereConditions = []

    // Add status filter
    if (status) {
      whereConditions.push(`q.status = $${paramCount}`)
      params.push(status.toUpperCase())
      paramCount++
    }

    // Add date filters if provided
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    
    if (startDate) {
      whereConditions.push(`q.created_at >= $${paramCount}`)
      params.push(startDate)
      paramCount++
    }
    
    if (endDate) {
      whereConditions.push(`q.created_at <= $${paramCount}`)
      params.push(endDate + ' 23:59:59')
      paramCount++
    }

    // Add search filter
    const search = searchParams.get('search')
    if (search) {
      whereConditions.push(`(
        q.name ILIKE $${paramCount} OR 
        q.email ILIKE $${paramCount} OR 
        q.tracking_id ILIKE $${paramCount} OR
        q.phone ILIKE $${paramCount}
      )`)
      params.push(`%${search}%`)
      paramCount++
    }

    // Add WHERE clause if there are conditions
    if (whereConditions.length > 0) {
      query += ` WHERE ${whereConditions.join(' AND ')}`
    }

    // Add GROUP BY and ORDER BY
    query += ` GROUP BY q.id ORDER BY q.created_at DESC LIMIT $${paramCount} OFFSET $${paramCount + 1}`
    params.push(limit, offset)

    const result = await db.query(query, params)

    const quotes = result.rows.map(quote => ({
      ...quote,
      vehicles: quote.vehicles || [],
      cost_breakdown: typeof quote.cost_breakdown === 'string' 
        ? JSON.parse(quote.cost_breakdown) 
        : quote.cost_breakdown
    }))

    const totalCount = result.rows.length > 0 ? parseInt(result.rows[0].total_count) : 0
    const totalPages = Math.ceil(totalCount / limit)

    return NextResponse.json({ 
      success: true,
      quotes,
      pagination: {
        page,
        limit,
        total: totalCount,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      },
      filters: {
        status,
        startDate,
        endDate,
        search
      }
    })

  } catch (error) {
    console.error('Error fetching quotes:', error)
    
    // Handle database not initialized error
    if (error.code === '42P01') {
      return NextResponse.json(
        { 
          error: 'Database not properly initialized',
          message: 'Please run: npm run db:init',
          details: 'Database tables do not exist'
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        error: 'Failed to fetch quotes',
        message: 'An error occurred while retrieving quotes'
      },
      { status: 500 }
    )
  }
}

function convertLeadForExternalDB(lead) {
  if (!lead) return null;

  // Extract vehicle details (assuming only 1 vehicle per lead)
  const vehicle = lead.vehicles?.[0] || {};

  // Basic name split (handles single names gracefully)
  const nameParts = lead.name ? lead.name.trim().split(" ") : [];
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  // Construct new object for external DB
  const externalData = {
    lp_campaign_id: "TEST12345",
    lp_campaign_key: "KEY98765",
    first_name: firstName,
    last_name: lastName,
    phone_home: lead.phone || "",
    city: lead.origin_city || "",
    state: lead.origin_state || "",
    zip_code: lead.origin_zip || "",
    country: "USA",
    email_address: lead.email || "",
    ip_address: lead.ip_address || "", // optional if you have it
    to_city: lead.destination_city || "",
    to_state: lead.destination_state || "",
    to_zip_code: lead.destination_zip || "",
    to_country: "USA",
    move_date: lead.move_date
      ? new Date(lead.move_date).toISOString().split("T")[0]
      : "",
    vehicle_year: vehicle.year || "",
    vehicle_make: vehicle.make || "",
    vehicle_model: vehicle.model || "",
    vehicle_type: vehicle.type || "",
    comments: lead.notes || "",

    // Optional Lead Provider fields
    lp_s1: "",
    lp_s2: "",
    lp_s3: "",
    lp_s4: "",
    lp_s5: "",
    lp_test: "1",
    lp_response: "JSON",
    referer: lead.referer || "",
    tcpa_consent: "Yes",
    tcpa_text: "I consent to receive calls and messages.",
    user_agent: lead.user_agent || "Mozilla/5.0",
    url: lead.url || "",
  };

  return externalData;
}
