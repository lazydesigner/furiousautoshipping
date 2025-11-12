import sgMail from '@sendgrid/mail'
import { formatCurrency, formatDate } from './utils'

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'quotes@furiousautoshipping.com'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@furiousautoshipping.com'

/**
 * Send quote confirmation email to customer
 */
export async function sendQuoteConfirmation({ to, quote }) {
  try {
    const subject = `Your Furious Auto Shipping Quote #${quote.trackingId}`
    
    const html = generateQuoteConfirmationHTML(quote)
    const text = generateQuoteConfirmationText(quote)

    const msg = {
      to,
      from: {
        email: FROM_EMAIL,
        name: 'Furious Auto Shipping',
      },
      subject,
      text,
      html,
    }

    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send(msg)
    } else {
      console.log('Email would be sent:', { to, subject })
      console.log('HTML:', html)
    }

    return { success: true }
  } catch (error) {
    console.error('Error sending quote confirmation:', error)
    throw error
  }
}

/**
 * Send admin notification email
 */
export async function sendAdminNotification({ quote }) {
  try {
    const subject = `New Quote Request #${quote.trackingId}`
    
    const html = generateAdminNotificationHTML(quote)
    const text = generateAdminNotificationText(quote)

    const msg = {
      to: ADMIN_EMAIL,
      from: {
        email: FROM_EMAIL,
        name: 'Furious Auto Shipping System',
      },
      subject,
      text,
      html,
    }

    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send(msg)
    } else {
      console.log('Admin email would be sent:', { subject })
      console.log('HTML:', html)
    }

    return { success: true }
  } catch (error) {
    console.error('Error sending admin notification:', error)
    throw error
  }
}

/**
 * Generate quote confirmation HTML
 */
function generateQuoteConfirmationHTML(quote) {
  const vehicles = quote.vehicles || []
  const pricing = quote.pricing || {}
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Auto Transport Quote</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0ea5e9, #0369a1); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: white; padding: 30px 20px; border: 1px solid #e5e7eb; }
    .footer { background: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none; }
    .quote-details { background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .vehicle-item { background: white; padding: 15px; border-radius: 6px; margin: 10px 0; border: 1px solid #e5e7eb; }
    .price-highlight { background: #22c55e; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0; }
    .button { display: inline-block; background: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
    .small-text { font-size: 14px; color: #6b7280; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Your Quote Request!</h1>
      <p>Quote #${quote.trackingId}</p>
    </div>
    
    <div class="content">
      <p>Hi ${quote.name},</p>
      
      <p>Thank you for choosing Furious Auto Shipping! We've received your quote request and our team will review it shortly.</p>
      
      <div class="quote-details">
        <h3>Quote Details</h3>
        <p><strong>From:</strong> ${quote.originAddress}</p>
        <p><strong>To:</strong> ${quote.destinationAddress}</p>
        <p><strong>Transport Type:</strong> ${quote.transportType === 'OPEN' ? 'Open Transport' : 'Enclosed Transport'}</p>
        <p><strong>Service:</strong> ${quote.pickupType === 'DOOR_TO_DOOR' ? 'Door-to-Door' : 'Terminal-to-Terminal'}</p>
        ${quote.expedited ? '<p><strong>Expedited Service:</strong> Yes</p>' : ''}
        ${quote.distance ? `<p><strong>Distance:</strong> ${Math.round(quote.distance)} miles</p>` : ''}
      </div>

      <h3>Vehicles</h3>
      ${vehicles.map(vehicle => `
        <div class="vehicle-item">
          <strong>${vehicle.year} ${vehicle.make} ${vehicle.model}</strong><br>
          <span class="small-text">Condition: ${vehicle.condition === 'RUNNING' ? 'Running' : 'Not Running'}</span>
          ${vehicle.specialInstructions ? `<br><span class="small-text">Notes: ${vehicle.specialInstructions}</span>` : ''}
        </div>
      `).join('')}

      ${pricing.estimatedPrice ? `
        <div class="price-highlight">
          <h3 style="margin: 0;">Estimated Cost</h3>
          <h2 style="margin: 10px 0;">${formatCurrency(pricing.priceRange?.min || pricing.estimatedPrice)} - ${formatCurrency(pricing.priceRange?.max || pricing.estimatedPrice)}</h2>
          <p style="margin: 0; opacity: 0.9;">*Final price may vary based on specific requirements</p>
        </div>
      ` : ''}

      <h3>What's Next?</h3>
      <ol>
        <li>Our team will review your quote within 2-4 hours</li>
        <li>We'll contact you to confirm details and provide final pricing</li>
        <li>Once confirmed, we'll schedule your pickup</li>
      </ol>

      <p>
        <a href="${process.env.NEXT_PUBLIC_SITE_URL}/track/${quote.trackingId}" class="button">
          Track Your Quote
        </a>
      </p>

      <p>Questions? Contact us:</p>
      <ul>
        <li>Phone: ${process.env.NEXT_PUBLIC_COMPANY_PHONE}</li>
        <li>Email: ${process.env.NEXT_PUBLIC_COMPANY_EMAIL}</li>
      </ul>
    </div>
    
    <div class="footer">
      <p class="small-text">
        Furious Auto Shipping<br>
        Professional Auto Transport Services<br>
        <a href="${process.env.NEXT_PUBLIC_SITE_URL}">www.furiousautoshipping.com</a>
      </p>
    </div>
  </div>
</body>
</html>
  `
}

/**
 * Generate quote confirmation text version
 */
function generateQuoteConfirmationText(quote) {
  const vehicles = quote.vehicles || []
  const pricing = quote.pricing || {}
  
  return `
Thank You for Your Quote Request!
Quote #${quote.trackingId}

Hi ${quote.name},

Thank you for choosing Furious Auto Shipping! We've received your quote request and our team will review it shortly.

QUOTE DETAILS:
From: ${quote.originAddress}
To: ${quote.destinationAddress}
Transport Type: ${quote.transportType === 'OPEN' ? 'Open Transport' : 'Enclosed Transport'}
Service: ${quote.pickupType === 'DOOR_TO_DOOR' ? 'Door-to-Door' : 'Terminal-to-Terminal'}
${quote.expedited ? 'Expedited Service: Yes' : ''}
${quote.distance ? `Distance: ${Math.round(quote.distance)} miles` : ''}

VEHICLES:
${vehicles.map(vehicle => `- ${vehicle.year} ${vehicle.make} ${vehicle.model} (${vehicle.condition === 'RUNNING' ? 'Running' : 'Not Running'})`).join('\n')}

${pricing.estimatedPrice ? `
ESTIMATED COST: ${formatCurrency(pricing.priceRange?.min || pricing.estimatedPrice)} - ${formatCurrency(pricing.priceRange?.max || pricing.estimatedPrice)}
*Final price may vary based on specific requirements
` : ''}

WHAT'S NEXT:
1. Our team will review your quote within 2-4 hours
2. We'll contact you to confirm details and provide final pricing
3. Once confirmed, we'll schedule your pickup

Track your quote: ${process.env.NEXT_PUBLIC_SITE_URL}/track/${quote.trackingId}

Questions? Contact us:
Phone: ${process.env.NEXT_PUBLIC_COMPANY_PHONE}
Email: ${process.env.NEXT_PUBLIC_COMPANY_EMAIL}

Furious Auto Shipping
Professional Auto Transport Services
${process.env.NEXT_PUBLIC_SITE_URL}
  `
}

/**
 * Generate admin notification HTML
 */
function generateAdminNotificationHTML(quote) {
  const vehicles = quote.vehicles || []
  const pricing = quote.pricing || {}
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Quote Request</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .alert { background: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 6px; margin-bottom: 20px; }
    .details { background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .vehicle { background: white; padding: 10px; margin: 5px 0; border: 1px solid #e5e7eb; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="alert">
      <h2>🚨 New Quote Request #${quote.trackingId}</h2>
      <p>Received: ${formatDate(quote.createdAt || new Date())}</p>
    </div>
    
    <div class="details">
      <h3>Customer Information</h3>
      <p><strong>Name:</strong> ${quote.name}</p>
      <p><strong>Email:</strong> ${quote.email}</p>
      <p><strong>Phone:</strong> ${quote.phone}</p>
      ${quote.promoCode ? `<p><strong>Promo Code:</strong> ${quote.promoCode}</p>` : ''}
    </div>

    <div class="details">
      <h3>Shipping Details</h3>
      <p><strong>From:</strong> ${quote.originAddress}</p>
      <p><strong>To:</strong> ${quote.destinationAddress}</p>
      <p><strong>Transport:</strong> ${quote.transportType === 'OPEN' ? 'Open' : 'Enclosed'}</p>
      <p><strong>Service:</strong> ${quote.pickupType === 'DOOR_TO_DOOR' ? 'Door-to-Door' : 'Terminal-to-Terminal'}</p>
      ${quote.expedited ? '<p><strong>Expedited:</strong> Yes</p>' : ''}
      ${quote.distance ? `<p><strong>Distance:</strong> ${Math.round(quote.distance)} miles</p>` : ''}
    </div>

    <div class="details">
      <h3>Vehicles</h3>
      ${vehicles.map(vehicle => `
        <div class="vehicle">
          <strong>${vehicle.year} ${vehicle.make} ${vehicle.model}</strong><br>
          Condition: ${vehicle.condition === 'RUNNING' ? 'Running' : 'Not Running'}<br>
          ${vehicle.isOversized ? 'Oversized: Yes<br>' : ''}
          ${vehicle.specialInstructions ? `Notes: ${vehicle.specialInstructions}` : ''}
        </div>
      `).join('')}
    </div>

    ${pricing.estimatedPrice ? `
      <div class="details">
        <h3>Pricing Estimate</h3>
        <p><strong>Estimated Total:</strong> ${formatCurrency(pricing.estimatedPrice)}</p>
        <p><strong>Price Range:</strong> ${formatCurrency(pricing.priceRange?.min || pricing.estimatedPrice)} - ${formatCurrency(pricing.priceRange?.max || pricing.estimatedPrice)}</p>
      </div>
    ` : ''}

    <p><strong>Action Required:</strong> Please follow up with this customer within 2-4 hours.</p>
  </div>
</body>
</html>
  `
}

/**
 * Generate admin notification text version
 */
function generateAdminNotificationText(quote) {
  const vehicles = quote.vehicles || []
  const pricing = quote.pricing || {}
  
  return `
NEW QUOTE REQUEST #${quote.trackingId}
Received: ${formatDate(quote.createdAt || new Date())}

CUSTOMER:
Name: ${quote.name}
Email: ${quote.email}
Phone: ${quote.phone}
${quote.promoCode ? `Promo Code: ${quote.promoCode}` : ''}

SHIPPING DETAILS:
From: ${quote.originAddress}
To: ${quote.destinationAddress}
Transport: ${quote.transportType === 'OPEN' ? 'Open' : 'Enclosed'}
Service: ${quote.pickupType === 'DOOR_TO_DOOR' ? 'Door-to-Door' : 'Terminal-to-Terminal'}
${quote.expedited ? 'Expedited: Yes' : ''}
${quote.distance ? `Distance: ${Math.round(quote.distance)} miles` : ''}

VEHICLES:
${vehicles.map(vehicle => `- ${vehicle.year} ${vehicle.make} ${vehicle.model} (${vehicle.condition === 'RUNNING' ? 'Running' : 'Not Running'})`).join('\n')}

${pricing.estimatedPrice ? `
PRICING ESTIMATE:
Total: ${formatCurrency(pricing.estimatedPrice)}
Range: ${formatCurrency(pricing.priceRange?.min || pricing.estimatedPrice)} - ${formatCurrency(pricing.priceRange?.max || pricing.estimatedPrice)}
` : ''}

ACTION REQUIRED: Please follow up with this customer within 2-4 hours.
  `
}