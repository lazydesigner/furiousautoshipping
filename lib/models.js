import db, { dbHelpers } from './database.js'

// Quote Model
export class Quote {
  static async create(quoteData) {
    const {
      trackingId,
      name,
      phone,
      email,
      originAddress,
      destinationAddress,
      originCity = '',
      originState = '',
      destinationCity = '',
      destinationState = '',
      transportType = 'OPEN',
      pickupType = 'DOOR_TO_DOOR',
      expedited = false,
      seasonalService = false,
      seasonalStartDate,
      seasonalReturnDate,
      moveDate,
      flexibleDates = false,
      distance,
      baseCost,
      totalCost,
      costBreakdown = {},
      promoCode,
      vehicles = []
    } = quoteData

    return await db.transaction(async (client) => {
      // Insert quote
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
        trackingId, name, phone, email, originAddress, destinationAddress,
        originCity, originState, destinationCity, destinationState,
        transportType, pickupType, expedited, seasonalService,
        seasonalStartDate, seasonalReturnDate, moveDate, flexibleDates,
        distance, baseCost, totalCost, JSON.stringify(costBreakdown), promoCode
      ])

      const quote = quoteResult.rows[0]

      // Insert vehicles
      const vehiclePromises = vehicles.map(vehicle => 
        client.query(`
          INSERT INTO vehicles (quote_id, year, make, model, condition, is_oversized, special_instructions)
          VALUES ($1, $2, $3, $4, $5, $6, $7)
          RETURNING *
        `, [
          quote.id,
          vehicle.year,
          vehicle.make,
          vehicle.model,
          vehicle.condition || 'RUNNING',
          vehicle.isOversized || false,
          vehicle.specialInstructions
        ])
      )

      const vehicleResults = await Promise.all(vehiclePromises)
      const insertedVehicles = vehicleResults.map(result => result.rows[0])

      return {
        ...dbHelpers.convertKeysToCamelCase(quote),
        vehicles: dbHelpers.convertKeysToCamelCase(insertedVehicles)
      }
    })
  }

  static async findByTrackingId(trackingId) {
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
               )
             ) as vehicles
      FROM quotes q
      LEFT JOIN vehicles v ON q.id = v.quote_id
      WHERE q.tracking_id = $1
      GROUP BY q.id
    `, [trackingId])

    if (result.rows.length === 0) return null

    const quote = result.rows[0]
    return dbHelpers.convertKeysToCamelCase({
      ...quote,
      vehicles: quote.vehicles.filter(v => v.id !== null)
    })
  }

  static async findByEmail(email, limit = 10) {
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
               )
             ) as vehicles
      FROM quotes q
      LEFT JOIN vehicles v ON q.id = v.quote_id
      WHERE q.email = $1
      GROUP BY q.id
      ORDER BY q.created_at DESC
      LIMIT $2
    `, [email, limit])

    return result.rows.map(quote => dbHelpers.convertKeysToCamelCase({
      ...quote,
      vehicles: quote.vehicles.filter(v => v.id !== null)
    }))
  }

  static async updateStatus(id, status, notes = null) {
    const result = await db.query(`
      UPDATE quotes 
      SET status = $2, notes = $3, updated_at = CURRENT_TIMESTAMP
      WHERE id = $1
      RETURNING *
    `, [id, status, notes])

    return result.rows.length > 0 ? dbHelpers.convertKeysToCamelCase(result.rows[0]) : null
  }

  static async getAll(filters = {}, page = 1, limit = 50) {
    const { limit: paginationLimit, offset } = dbHelpers.paginate(page, limit)
    const { whereClause, values } = dbHelpers.buildWhereClause(filters)

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
               )
             ) as vehicles
      FROM quotes q
      LEFT JOIN vehicles v ON q.id = v.quote_id
      ${whereClause}
      GROUP BY q.id
      ORDER BY q.created_at DESC
      LIMIT $${values.length + 1} OFFSET $${values.length + 2}
    `, [...values, paginationLimit, offset])

    return result.rows.map(quote => dbHelpers.convertKeysToCamelCase({
      ...quote,
      vehicles: quote.vehicles.filter(v => v.id !== null)
    }))
  }
}

// Contact Form Model
export class ContactForm {
  static async create(formData) {
    const {
      name,
      email,
      phone,
      subject,
      message,
      ipAddress,
      userAgent,
      referrer
    } = formData

    const result = await db.query(`
      INSERT INTO contact_forms (name, email, phone, subject, message, ip_address, user_agent, referrer)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
    `, [name, email, phone, subject, message, ipAddress, userAgent, referrer])

    return dbHelpers.convertKeysToCamelCase(result.rows[0])
  }

  static async getAll(filters = {}, page = 1, limit = 50) {
    const { limit: paginationLimit, offset } = dbHelpers.paginate(page, limit)
    const { whereClause, values } = dbHelpers.buildWhereClause(filters)

    const result = await db.query(`
      SELECT * FROM contact_forms
      ${whereClause}
      ORDER BY created_at DESC
      LIMIT $${values.length + 1} OFFSET $${values.length + 2}
    `, [...values, paginationLimit, offset])

    return dbHelpers.convertKeysToCamelCase(result.rows)
  }

  static async updateStatus(id, status, respondedBy = null, notes = null) {
    const result = await db.query(`
      UPDATE contact_forms 
      SET status = $2, responded_at = CURRENT_TIMESTAMP, responded_by = $3, notes = $4
      WHERE id = $1
      RETURNING *
    `, [id, status, respondedBy, notes])

    return result.rows.length > 0 ? dbHelpers.convertKeysToCamelCase(result.rows[0]) : null
  }
}

// Blog Post Model
export class BlogPost {
  static async create(postData) {
    const {
      title,
      slug,
      excerpt,
      content,
      published = false,
      category,
      tags = [],
      authorName,
      authorEmail,
      metaTitle,
      metaDescription,
      featuredImage
    } = postData

    const result = await db.query(`
      INSERT INTO blog_posts (
        title, slug, excerpt, content, published, published_at, category, tags,
        author_name, author_email, meta_title, meta_description, featured_image
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      RETURNING *
    `, [
      title, slug, excerpt, content, published,
      published ? new Date() : null,
      category, tags, authorName, authorEmail,
      metaTitle, metaDescription, featuredImage
    ])

    return dbHelpers.convertKeysToCamelCase(result.rows[0])
  }

  static async findBySlug(slug) {
    const result = await db.query(`
      SELECT * FROM blog_posts WHERE slug = $1 AND published = true
    `, [slug])

    return result.rows.length > 0 ? dbHelpers.convertKeysToCamelCase(result.rows[0]) : null
  }

  static async getPublished(filters = {}, page = 1, limit = 10) {
    const { limit: paginationLimit, offset } = dbHelpers.paginate(page, limit)
    
    // Add published filter
    const extendedFilters = { ...filters, published: true }
    const { whereClause, values } = dbHelpers.buildWhereClause(extendedFilters)

    const result = await db.query(`
      SELECT * FROM blog_posts
      ${whereClause}
      ORDER BY published_at DESC
      LIMIT $${values.length + 1} OFFSET $${values.length + 2}
    `, [...values, paginationLimit, offset])

    return dbHelpers.convertKeysToCamelCase(result.rows)
  }

  static async getByCategory(category, page = 1, limit = 10) {
    return await this.getPublished({ category }, page, limit)
  }

  static async getByTag(tag, page = 1, limit = 10) {
    const { limit: paginationLimit, offset } = dbHelpers.paginate(page, limit)

    const result = await db.query(`
      SELECT * FROM blog_posts
      WHERE published = true AND $1 = ANY(tags)
      ORDER BY published_at DESC
      LIMIT $2 OFFSET $3
    `, [tag, paginationLimit, offset])

    return dbHelpers.convertKeysToCamelCase(result.rows)
  }
}

// User Model
export class User {
  static async create(userData) {
    const { email, name, passwordHash, role = 'USER' } = userData

    const result = await db.query(`
      INSERT INTO users (email, name, password_hash, role)
      VALUES ($1, $2, $3, $4)
      RETURNING id, email, name, role, created_at, updated_at
    `, [email, name, passwordHash, role])

    return dbHelpers.convertKeysToCamelCase(result.rows[0])
  }

  static async findByEmail(email) {
    const result = await db.query(`
      SELECT * FROM users WHERE email = $1
    `, [email])

    return result.rows.length > 0 ? dbHelpers.convertKeysToCamelCase(result.rows[0]) : null
  }

  static async findById(id) {
    const result = await db.query(`
      SELECT id, email, name, role, created_at, updated_at FROM users WHERE id = $1
    `, [id])

    return result.rows.length > 0 ? dbHelpers.convertKeysToCamelCase(result.rows[0]) : null
  }
}

// System Log Model
export class SystemLog {
  static async create(logData) {
    const {
      level,
      message,
      data = {},
      userId,
      quoteId,
      ipAddress,
      userAgent
    } = logData

    const result = await db.query(`
      INSERT INTO system_logs (level, message, data, user_id, quote_id, ip_address, user_agent)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `, [level, message, JSON.stringify(data), userId, quoteId, ipAddress, userAgent])

    return dbHelpers.convertKeysToCamelCase(result.rows[0])
  }

  static async getLogs(filters = {}, page = 1, limit = 100) {
    const { limit: paginationLimit, offset } = dbHelpers.paginate(page, limit)
    const { whereClause, values } = dbHelpers.buildWhereClause(filters)

    const result = await db.query(`
      SELECT * FROM system_logs
      ${whereClause}
      ORDER BY created_at DESC
      LIMIT $${values.length + 1} OFFSET $${values.length + 2}
    `, [...values, paginationLimit, offset])

    return dbHelpers.convertKeysToCamelCase(result.rows)
  }
}

// Settings Model
export class Settings {
  static async get(key) {
    const result = await db.query(`
      SELECT * FROM settings WHERE key = $1
    `, [key])

    return result.rows.length > 0 ? dbHelpers.convertKeysToCamelCase(result.rows[0]) : null
  }

  static async set(key, value, description = null, category = null) {
    const result = await db.query(`
      INSERT INTO settings (key, value, description, category)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (key) DO UPDATE SET
        value = EXCLUDED.value,
        description = EXCLUDED.description,
        category = EXCLUDED.category,
        updated_at = CURRENT_TIMESTAMP
      RETURNING *
    `, [key, JSON.stringify(value), description, category])

    return dbHelpers.convertKeysToCamelCase(result.rows[0])
  }

  static async getByCategory(category) {
    const result = await db.query(`
      SELECT * FROM settings WHERE category = $1 ORDER BY key
    `, [category])

    return dbHelpers.convertKeysToCamelCase(result.rows)
  }

  static async getAll() {
    const result = await db.query(`
      SELECT * FROM settings ORDER BY category, key
    `)

    return dbHelpers.convertKeysToCamelCase(result.rows)
  }
}

// Rate Limit Model
export class RateLimit {
  static async check(identifier, endpoint, limit = 100, windowMinutes = 60) {
    const windowStart = new Date(Date.now() - windowMinutes * 60 * 1000)

    return await db.transaction(async (client) => {
      // Clean up old entries
      await client.query(`
        DELETE FROM rate_limits 
        WHERE window_start < $1
      `, [windowStart])

      // Get current count for this identifier and endpoint
      const countResult = await client.query(`
        SELECT COALESCE(SUM(requests), 0) as total_requests
        FROM rate_limits 
        WHERE identifier = $1 AND endpoint = $2 AND window_start >= $3
      `, [identifier, endpoint, windowStart])

      const currentRequests = parseInt(countResult.rows[0].total_requests)

      if (currentRequests >= limit) {
        return {
          allowed: false,
          remaining: 0,
          resetTime: new Date(Date.now() + windowMinutes * 60 * 1000)
        }
      }

      // Add or update the current window
      const currentWindow = new Date()
      currentWindow.setMinutes(Math.floor(currentWindow.getMinutes() / windowMinutes) * windowMinutes, 0, 0)

      await client.query(`
        INSERT INTO rate_limits (identifier, endpoint, requests, window_start)
        VALUES ($1, $2, 1, $3)
        ON CONFLICT (identifier, endpoint, window_start) 
        DO UPDATE SET requests = rate_limits.requests + 1
      `, [identifier, endpoint, currentWindow])

      return {
        allowed: true,
        remaining: limit - currentRequests - 1,
        resetTime: new Date(currentWindow.getTime() + windowMinutes * 60 * 1000)
      }
    })
  }
}