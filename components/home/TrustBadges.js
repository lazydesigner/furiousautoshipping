import Image from 'next/image'

const badges = [
  {
    name: 'BBB A+ Rating',
    image: '/images/badges/bbb-logo.png',
    description: 'Better Business Bureau A+ Accredited'
  },
  {
    name: 'DOT Licensed',
    image: '/images/badges/dot-logo.png',
    description: 'Department of Transportation Licensed'
  },
  {
    name: 'FMCSA Registered',
    image: '/images/badges/fmcsa-logo.png',
    description: 'Federal Motor Carrier Safety Administration'
  },
  {
    name: '$1M Insurance',
    image: '/images/badges/insurance-badge.png',
    description: 'Comprehensive Insurance Coverage'
  },
]

const stats = [
  { value: '50,000+', label: 'Vehicles Shipped' },
  { value: '4.9/5', label: 'Customer Rating' },
  { value: '10+', label: 'Years Experience' },
  { value: '24/7', label: 'Customer Support' },
]

export default function TrustBadges() {
  return (
    <section className="section bg-white border-t border-gray-100 hidden">
      <div className="container">
        {/* Trust Badges */}
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Trusted & Certified
            </h2>
            <p className="text-gray-600">
              Licensed, bonded, and insured for your peace of mind
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {badges.map((badge) => (
              <div key={badge.name} className="text-center group">
                <div className="relative h-16 mb-3 flex items-center justify-center">
                  <Image
                    src={badge.image}
                    alt={badge.name}
                    width={120}
                    height={60}
                    className="max-h-full w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="text-sm font-medium text-gray-900 mb-1">
                  {badge.name}
                </div>
                <div className="text-xs text-gray-500">
                  {badge.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
        