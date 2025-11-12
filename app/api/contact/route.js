import { NextResponse } from 'next/server'
import { z } from 'zod'
import { ContactForm, SystemLog, RateLimit } from '@/lib/models'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  preferredContact: z.enum(['email', 'phone']).default('email'),
})

export async function POST(request) {
  try {
    // Rate limiting
    const identifier = request.headers.get('x-forwarded-for') || 'anonymous'
    const rateCheck = await RateLimit.check(identifier, '/api/contact', 10, 60) // 10 requests per hour
    
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Create contact form entry in database
    const contactForm = await ContactForm.create({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      subject: validatedData.subject,
      message: validatedData.message,
      ipAddress: request.headers.get('x-forwarded-for'),
      userAgent: request.headers.get('user-agent'),
      referrer: request.headers.get('referer'),
    })

    // Log the contact form submission
    await SystemLog.create({
      level: 'INFO',
      message: 'New contact form submission',
      data: {
        contactFormId: contactForm.id,
        subject: contactForm.subject,
        email: contactForm.email,
        preferredContact: validatedData.preferredContact,
      },
      ipAddress: request.headers.get('x-forwarded-for'),
      userAgent: request.headers.get('user-agent'),
    })

    // Send notification email to admin (optional)
    try {
      if (process.env.SENDGRID_API_KEY) {
        // Import here to avoid issues if SendGrid is not configured
        const { sendAdminContactNotification } = await import('@/lib/email')
        await sendAdminContactNotification({
          contactForm: {
            ...contactForm,
            preferredContact: validatedData.preferredContact,
          },
        })
      }
    } catch (emailError) {
      console.error('Failed to send admin notification:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      contactId: contactForm.id,
    })

  } catch (error) {
    console.error('Error processing contact form:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Invalid data provided',
          details: error.errors,
        },
        { status: 400 }
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
    // This could be used for admin panel to fetch contact forms
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')

    const filters = status ? { status: status.toUpperCase() } : {}
    const contactForms = await ContactForm.getAll(filters, page, limit)

    return NextResponse.json({
      contactForms,
      page,
      limit,
    })

  } catch (error) {
    console.error('Error fetching contact forms:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}