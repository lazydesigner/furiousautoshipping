import QuoteForm from '@/components/quote/QuoteForm'

export const metadata = {
  title: 'Get Free Auto Transport Quote | Instant Car Shipping Calculator',
  description: 'Calculate your auto transport cost instantly. Get free quotes for car shipping with real-time pricing and professional service.',
  keywords: 'auto transport quote, car shipping calculator, vehicle transport cost, auto shipping estimate',
  openGraph: {
    title: 'Free Auto Transport Quote | Furious Auto Shipping',
    description: 'Get instant quotes for professional car shipping services across the USA.',
  },
  alternates: {
      canonical: '/get-quote',
    },
}

export default function GetQuotePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="heading-2 text-gray-900 mb-4">
              Get Your Free Auto Transport Quote
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate your car shipping cost instantly with our professional quote calculator. 
              Get accurate pricing for door-to-door auto transport services.
            </p>
          </div>

          {/* Quote Form */}
          <QuoteForm />
        </div>
      </div>
    </div>
  )
}