# Furious Auto Shipping

A modern, high-performance auto transport website built with Next.js 15.5, featuring a comprehensive quote calculator, CMS integration, and admin dashboard.

## 🚀 Features

- **Multi-step Quote Calculator** with real-time distance and pricing
- **Google Maps Integration** for address autocomplete and distance calculation
- **Responsive Design** with mobile-first approach and accessibility compliance (WCAG AA)
- **SEO Optimized** with dynamic state-to-state pages and schema markup
- **Admin Dashboard** for managing leads and quotes
- **Email Confirmations** via SendGrid/Mailgun
- **Performance Optimized** with Next.js server components and image optimization
- **Comprehensive Testing** with Jest and Playwright

## 🛠 Tech Stack

- **Framework:** Next.js 15.5 (App Router)
- **Styling:** Tailwind CSS + Headless UI
- **Database:** PostgreSQL with Prisma ORM
- **Forms:** React Hook Form + Zod validation
- **Maps:** Google Maps JavaScript API
- **Email:** SendGrid/Mailgun integration
- **Testing:** Jest + React Testing Library + Playwright
- **Deployment:** Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd furious-auto-shipping
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables (see Environment Variables section below).

4. **Set up the database**
   ```bash
   npm run db:generate
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/furious_auto_shipping"

# Google Maps (get from Google Cloud Console)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your_frontend_maps_key"
GOOGLE_MAPS_SERVER_KEY="your_server_maps_key"

# Email Service (choose one)
SENDGRID_API_KEY="your_sendgrid_key"
SENDGRID_FROM_EMAIL="quotes@furiousautoshipping.com"

# Or use Mailgun
MAILGUN_API_KEY="your_mailgun_key"
MAILGUN_DOMAIN="your_mailgun_domain"

# Admin Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_random_secret_key"
ADMIN_EMAIL="admin@furiousautoshipping.com"
ADMIN_PASSWORD="secure_password"

# Optional
NEXT_PUBLIC_RECAPTCHA_SITE_KEY="your_recaptcha_site_key"
RECAPTCHA_SECRET_KEY="your_recaptcha_secret_key"
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

## 🗃 Database Setup

1. **Install PostgreSQL** locally or use a cloud provider (Railway, PlanetScale, Supabase)

2. **Run migrations**
   ```bash
   npm run db:migrate
   ```

3. **View database** (optional)
   ```bash
   npm run db:studio
   ```

## 🧪 Testing

- **Unit Tests:** `npm test`
- **Watch Mode:** `npm run test:watch`
- **E2E Tests:** `npm run test:e2e`

## 🚀 Deployment

### Vercel (Recommended)

1. **Deploy to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Set environment variables** in Vercel dashboard

3. **Configure domains** and SSL certificates

### GitHub Actions CI/CD

The repository includes GitHub Actions workflow that:
- Runs tests and linting
- Builds the application
- Deploys to Vercel on push to main

## 📊 Google Maps Setup

1. **Enable APIs** in Google Cloud Console:
   - Maps JavaScript API
   - Places API
   - Distance Matrix API
   - Geocoding API

2. **Create API Keys:**
   - Frontend key: Restrict to your domain(s)
   - Server key: Restrict to server IPs

3. **Set up billing** and quotas as needed

## 📧 Email Setup

### SendGrid
1. Create SendGrid account
2. Verify sender identity
3. Create API key with send permissions
4. Configure environment variables

### Mailgun
1. Create Mailgun account
2. Verify domain
3. Get API key and domain
4. Configure environment variables

## 🔒 Security Features

- **CSRF Protection:** Built into Next.js
- **Input Sanitization:** Zod validation on all inputs
- **Rate Limiting:** API routes protected with middleware
- **reCAPTCHA v3:** Optional form protection
- **Environment Variables:** Secure configuration management

## 📈 SEO & Analytics

- **Google Analytics 4** integration
- **Meta Pixel** support (optional)
- **JSON-LD Schema** for LocalBusiness
- **Dynamic Sitemaps** for state-to-state pages
- **Open Graph** and Twitter Cards

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for design tokens
- Update `src/styles/globals.css` for global styles
- Customize components in `src/components/`

### Pricing Logic
- Update pricing calculations in `src/lib/pricing.js`
- Configure surcharges and base rates
- Modify distance calculation logic

### Email Templates
- Customize templates in `src/lib/email-templates/`
- Update branding and messaging

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # Reusable UI components
├── lib/                 # Utility functions
├── prisma/             # Database schema and migrations
├── public/             # Static assets
├── styles/             # Global styles
├── __tests__/          # Test files
└── types/              # TypeScript definitions
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## 📝 License

This project is proprietary software for Furious Auto Shipping.

## 🆘 Support

For support, email dev@furiousautoshipping.com or create an issue in the repository.