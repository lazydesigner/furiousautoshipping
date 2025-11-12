import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Toaster } from 'react-hot-toast'
import Analytics from '@/components/Analytics'
import FloatingQuoteButton from '@/components/ui/FloatingQuoteButton'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    default: 'Furious Auto Shipping - Fast, Reliable Car Transport Services',
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
    title: 'Furious Auto Shipping - Fast, Reliable Car Transport Services',
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
    title: 'Furious Auto Shipping - Fast, Reliable Car Transport Services',
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
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarnings>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
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