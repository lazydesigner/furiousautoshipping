// lib/nodemailer.js
import nodemailer from 'nodemailer'

/**
 * Create email transporter based on environment configuration
 */
export function createTransporter() {
  // Gmail configuration
  if (process.env.EMAIL_PROVIDER === 'gmail' || !process.env.EMAIL_PROVIDER) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
      },
    })
  }

  // Custom SMTP configuration
  if (process.env.EMAIL_PROVIDER === 'smtp') {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })
  }

  // SendGrid configuration
  if (process.env.EMAIL_PROVIDER === 'sendgrid') {
    return nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
      },
    })
  }

  // Outlook/Hotmail configuration
  if (process.env.EMAIL_PROVIDER === 'outlook') {
    return nodemailer.createTransport({
      service: 'outlook',
      auth: {
        user: process.env.OUTLOOK_USER,
        pass: process.env.OUTLOOK_PASSWORD,
      },
    })
  }

  // Default fallback to Gmail
  console.warn('No valid EMAIL_PROVIDER configured, falling back to Gmail')
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
}

/**
 * Send quote confirmation email to customer
 */
export async function sendQuoteConfirmation({ to, quote }) {
  try {
    const transporter = createTransporter()

    // Custom sender name and email
    const fromName = process.env.FROM_NAME || 'Furious Auto Shipping'
    const fromEmail = process.env.FROM_EMAIL || process.env.GMAIL_USER
    const customFromField = 'Furious Auto Shipping' || `"${fromName}" <${fromEmail}>`

    const mailOptions = {
      from: customFromField,
      to: to,
      subject: `Quote Request Confirmed - Tracking ID: ${quote.tracking_id}`,
      html: generateQuoteConfirmationHTML(quote),
      text: generateQuoteConfirmationText(quote),
    }

    const result = await transporter.sendMail(mailOptions)
    console.log('Quote confirmation email sent successfully:', result.messageId)
    return result
  } catch (error) {
    console.error('Error sending quote confirmation email:', error)
    throw error
  }
}

/**
 * Send admin notification email
 */
export async function sendAdminNotification({ quote }) {
  try {
    const transporter = createTransporter()

    const adminEmail = process.env.ADMIN_EMAIL || process.env.GMAIL_USER
    const fromName = process.env.FROM_NAME || 'Furious Auto Shipping System'
    const fromEmail = process.env.FROM_EMAIL || process.env.GMAIL_USER
    const customFromField = 'Furious Auto Shipping' || `"${fromName}" <${fromEmail}>`
 

    const mailOptions = {
      from: customFromField,
      to: adminEmail,
      subject: `New Quote Request - ${quote.tracking_id}`,
      html: generateAdminNotificationHTML(quote),
      text: generateAdminNotificationText(quote),
    }

    const result = await transporter.sendMail(mailOptions)
    console.log('Admin notification email sent successfully:', result.messageId)
    return result
  } catch (error) {
    console.error('Error sending admin notification email:', error)
    throw error
  }
}

/**
 * Generate HTML email for quote confirmation
 */
function generateQuoteConfirmationHTML(quote) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Auto Transport Quote - Furious Auto Shipping</title>
</head>
<body style="margin: 0; padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #2c3e50; background-color: #f8fafc;">
    
    <div style="max-width: 650px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); border-radius: 12px; overflow: hidden;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center;">
            <h1 style="font-size: 28px; font-weight: 700; margin: 0 0 8px 0; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Quote Request Confirmed</h1>
            <p style="margin: 0 0 15px 0; font-size: 16px; opacity: 0.9;">We're excited to help with your auto transport needs</p>
            <div style="background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); padding: 10px 20px; border-radius: 25px; font-weight: 600; font-size: 14px; letter-spacing: 1px; display: inline-block; border: 1px solid rgba(255, 255, 255, 0.3);">
                Tracking ID: ${quote.tracking_id}
            </div>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
            
            <div style="font-size: 18px; margin-bottom: 25px; color: #2c3e50;">
                Dear ${quote.name},
            </div>
            
            <div style="font-size: 16px; margin-bottom: 30px; color: #5a6c7d; line-height: 1.7;">
                Thank you for choosing Furious Auto Shipping for your vehicle transport needs. We have successfully received your quote request and our experienced team is already working on preparing your personalized quote.
            </div>
            
            <div style="background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
                <div style="font-weight: 600; color: #1e40af; margin-bottom: 8px;">📞 What's Next?</div>
                <div style="color: #1e40af; font-size: 14px;">Our transport specialists will contact you within <strong>24 hours</strong> with your detailed quote and available transport options.</div>
            </div>
            
            <!-- Quote Details Card -->
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 30px; margin: 30px 0; position: relative;">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #667eea, #764ba2); border-radius: 12px 12px 0 0;"></div>
                
                <h3 style="color: #2c3e50; font-size: 20px; font-weight: 600; margin: 0 0 25px 0;">
                    📋 Your Quote Details
                </h3>
                
                <div style="margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px; padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                        <span style="font-weight: 600; color: #4a5568; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; min-width: 120px;">📍 From:</span>
                        <span style="color: #2c3e50; font-weight: 500; text-align: right; flex: 1;">${quote.origin_address}</span>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px; padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                        <span style="font-weight: 600; color: #4a5568; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; min-width: 120px;">🎯 To:</span>
                        <span style="color: #2c3e50; font-weight: 500; text-align: right; flex: 1;">${quote.destination_address}</span>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px; padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                        <span style="font-weight: 600; color: #4a5568; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; min-width: 120px;">🚛 Transport:</span>
                        <span style="color: #2c3e50; font-weight: 500; text-align: right; flex: 1;">${quote.transport_type}</span>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px; padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                        <span style="font-weight: 600; color: #4a5568; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; min-width: 120px;">⚡ Service:</span>
                        <span style="color: #2c3e50; font-weight: 500; text-align: right; flex: 1;">${quote.pickup_type.replace('_', ' ')}</span>
                    </div>
                </div>
                
                ${quote.vehicles ? `
                <div style="margin-top: 25px; padding-top: 20px; border-top: 2px solid #e2e8f0;">
                    <h4 style="color: #2c3e50; font-size: 16px; font-weight: 600; margin: 0 0 15px 0;">
                        🚗 Vehicle(s) to Transport:
                    </h4>
                    ${quote.vehicles.map(v => `
                        <div style="background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; align-items: center;">
                            <span style="background: #667eea; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 15px;">🚙</span>
                            <span style="color: #2c3e50; font-weight: 500;">${v.year} ${v.make} ${v.model}</span>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
            </div>
            
            <!-- Important Information -->
            <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 25px 0;">
                <div style="font-weight: 600; color: #92400e; margin-bottom: 10px;">💡 Important Information</div>
                <ul style="color: #92400e; font-size: 14px; margin: 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;">Keep your tracking ID safe: <strong>${quote.tracking_id}</strong></li>
                    <li style="margin-bottom: 5px;">Our team operates Monday-Sunday, 8 AM - 8 PM EST</li>
                    <li>Quotes are valid for 14 days from the date of issue</li>
                </ul>
            </div>
            
            <!-- Contact Information -->
            <div style="text-align: center; margin: 30px 0;">
                <div style="font-size: 16px; color: #5a6c7d; margin-bottom: 15px;">
                    Questions? We're here to help!
                </div>
                <div style="display: inline-flex; align-items: center; background: #667eea; color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600;">
                    📞 Call us: (555) 123-4567
                </div>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
            <div style="color: #2c3e50; font-size: 18px; font-weight: 600; margin-bottom: 8px;">
                Furious Auto Shipping
            </div>
            <div style="color: #5a6c7d; font-size: 14px; margin-bottom: 15px;">
                Professional Auto Transport Services | Licensed & Insured
            </div>
            <div style="color: #9ca3af; font-size: 12px; line-height: 1.5;">
                This email was sent regarding your auto transport quote request.<br>
                © 2024 Furious Auto Shipping. All rights reserved.
            </div>
        </div>
        
    </div>
    
</body>
</html>
  `
}

/**
 * Generate text email for quote confirmation
 */
function generateQuoteConfirmationText(quote) {
  return `
Quote Request Confirmed - Tracking ID: ${quote.tracking_id}

Dear ${quote.name},

Thank you for your auto transport quote request. We have received your information and will contact you within 24 hours with a detailed quote.

Quote Details:
From: ${quote.origin_address}
To: ${quote.destination_address}
Transport Type: ${quote.transport_type}
Service: ${quote.pickup_type.replace('_', ' ')}

${quote.vehicles ? `
Vehicles:
${quote.vehicles.map(v => `• ${v.year} ${v.make} ${v.model}`).join('\n')}
` : ''}

Please keep this tracking ID for your records: ${quote.tracking_id}

Furious Auto Shipping
Professional Auto Transport Services
  `
}

/**
 * Generate HTML email for admin notification
 */
function generateAdminNotificationHTML(quote) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Quote Request</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #dc2626; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .quote-details { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Quote Request</h1>
          <p>Tracking ID: ${quote.tracking_id}</p>
        </div>
        
        <div class="content">
          <div class="quote-details">
            <h3>Customer Information:</h3>
            <p><strong>Name:</strong> ${quote.name}</p>
            <p><strong>Email:</strong> ${quote.email}</p>
            <p><strong>Phone:</strong> ${quote.phone}</p>
          </div>
          
          <div class="quote-details">
            <h3>Route Information:</h3>
            <p><strong>From:</strong> ${quote.origin_address}</p>
            <p><strong>To:</strong> ${quote.destination_address}</p>
            <p><strong>Distance:</strong> ${quote.distance ? Math.round(quote.distance) + ' miles' : 'N/A'}</p>
          </div>
          
          <div class="quote-details">
            <h3>Service Options:</h3>
            <p><strong>Transport Type:</strong> ${quote.transport_type}</p>
            <p><strong>Service:</strong> ${quote.pickup_type.replace('_', ' ')}</p>
            <p><strong>Expedited:</strong> ${quote.expedited ? 'Yes' : 'No'}</p>
          </div>
          
          ${quote.vehicles ? `
            <div class="quote-details">
              <h3>Vehicles:</h3>
              ${quote.vehicles.map(v => `
                <p><strong>${v.year} ${v.make} ${v.model}</strong><br>
                Condition: ${v.condition}<br>
                ${v.is_oversized ? 'Oversized: Yes<br>' : ''}
                ${v.special_instructions ? `Notes: ${v.special_instructions}` : ''}
                </p>
              `).join('')}
            </div>
          ` : ''}
          
          <p><strong>Action Required:</strong> Follow up with this customer within 24 hours.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

/**
 * Generate text email for admin notification
 */
function generateAdminNotificationText(quote) {
  return `
New Quote Request - Tracking ID: ${quote.tracking_id}

Customer Information:
Name: ${quote.name}
Email: ${quote.email}
Phone: ${quote.phone}

Route Information:
From: ${quote.origin_address}
To: ${quote.destination_address}
Distance: ${quote.distance ? Math.round(quote.distance) + ' miles' : 'N/A'}

Service Options:
Transport Type: ${quote.transport_type}
Service: ${quote.pickup_type.replace('_', ' ')}
Expedited: ${quote.expedited ? 'Yes' : 'No'}

${quote.vehicles ? `
Vehicles:
${quote.vehicles.map(v => `• ${v.year} ${v.make} ${v.model} (${v.condition})`).join('\n')}
` : ''}

Action Required: Follow up with this customer within 24 hours.
  `
}