// Configuration constants for the application
export const config = {
  company: {
    name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Furious Auto Shipping',
    phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '1-888-706-8784',
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'info@furiousautoshipping.com',
  },
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://furiousautoshipping.com',
  },
  apis: {
    googleMaps: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    googleMapsServer: process.env.GOOGLE_MAPS_SERVER_KEY,
    sendgrid: process.env.SENDGRID_API_KEY,
    recaptchaSite: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    recaptchaSecret: process.env.RECAPTCHA_SECRET_KEY,
  },
  analytics: {
    ga: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    metaPixel: process.env.NEXT_PUBLIC_META_PIXEL_ID,
  },
  admin: {
    email: process.env.ADMIN_EMAIL || 'admin@furiousautoshipping.com',
    password: process.env.ADMIN_PASSWORD,
  },
  database: {
    url: process.env.DATABASE_URL,
  },
}