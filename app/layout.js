import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Toaster } from 'react-hot-toast'
import Analytics from '@/components/Analytics'
import FloatingQuoteButton from '@/components/ui/FloatingQuoteButton'
import ChristmasDecoration from '@/components/ChristmasDecoration'
import Script from "next/script";
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const metadata = {
  title: {
    default: 'Nationwide Auto Transport & Car Shipping Services | Furious',
    template: '%s | Furious Auto Shipping',
  },
  description: 'Get instant quotes for auto transport services across the USA. Door-to-door car shipping with competitive rates and excellent customer service.',
  keywords: 'auto transport, car shipping, vehicle transport, door-to-door, enclosed transport, open transport',
  authors: [{ name: 'Furious Auto Shipping' }],
  creator: 'Furious Auto Shipping',
  publisher: 'Furious Auto Shipping',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: 'Nationwide Auto Transport & Car Shipping Services | Furious',
    description: 'Get instant quotes for auto transport services across the USA. Professional car shipping with competitive rates.',
    siteName: 'Furious Auto Shipping',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Furious Auto Shipping - Professional Auto Transport',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nationwide Auto Transport & Car Shipping Services | Furious',
    description: 'Get instant quotes for auto transport services across the USA.',
    images: ['/images/twitter-image.jpg'],
    creator: '@furiousauto',
  },
  verification: {
    google: '-ShjacAdTI3jgfrHX7tIZLHcljK_-ADg6Md5rSmBH68',
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
  other: {
    "preconnect-google-maps": "https://maps.googleapis.com",
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

const business = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Furious Auto Shipping',
  description: 'Professional auto transport services across the USA',
  url: process.env.NEXT_PUBLIC_SITE_URL,
  telephone: process.env.NEXT_PUBLIC_COMPANY_PHONE,
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  serviceArea: {
    '@type': 'Country',
    name: 'United States',
  },
  priceRange: '$$',
  openingHours: 'Mo-Fr 08:00-18:00',
  sameAs: [
    'https://www.facebook.com/furiousautoshipping',
    'https://www.instagram.com/furiousautoshipping',
    'https://twitter.com/furiousauto',
  ],
}

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Furious Auto Shipping",
  "url": "https://furiousautoshipping.com",
  "logo": "https://furiousautoshipping.com/logo.png",
  "foundingDate": "2015",
  "description": "A nationwide auto transport logistics network specializing in door-to-door vehicle shipping.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-555-0199",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com/furiousautoshipping",
    "https://www.linkedin.com/company/furiousautoshipping",
    "https://www.bbb.org/us/tx/furious-auto-shipping",
    "https://www.transportreviews.com/company/furious-auto-shipping"
  ]
}

const autodealer = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "name": "Furious Auto Shipping",
  "description": "Nationwide auto transport broker serving all 50 United States.",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "National Shipping Routes",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cross-Country Auto Transport",
          "description": "Coast-to-coast vehicle shipping."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "State-to-State Shipping",
          "description": "Direct routes between any two US states."
        }
      }
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <Script
        id="schema-localbusiness"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />

      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />

      <Script
        id="schema-autodealer"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(autodealer) }}
      />

      <body className={`${inter.className} antialiased bg-white text-gray-900`} suppressHydrationWarnings={true}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {/* <ChristmasDecoration /> */}
              {children}
            </main>
            <Footer />
          </div>

          {/* Floating Quote Button */}
          <FloatingQuoteButton />

          {/* Toast notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                theme: {
                  primary: '#22c55e',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 4000,
                theme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />

          {/* Analytics */}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}