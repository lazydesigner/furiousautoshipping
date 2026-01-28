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
  preload: true,
})

export const metadata = {
  title: {
    default: 'Nationwide Auto Transport & Car Shipping Services | Furious Auto Shipping',
    template: '%s',
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      

      <body className={`${inter.className} antialiased bg-white text-gray-900`} suppressHydrationWarnings={true}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {/* <ChristmasDecoration /> */}
            {children}
          </main>
          <Footer />
        </div>
        <Providers>

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