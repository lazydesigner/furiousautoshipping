import Image from 'next/image'

const badges = [
  
  {
    name: 'FMCSA Licensed',
    image: '/images/fmcsa-logo-400x-102.webp',
    description: ''
  },{
    name: 'Trustpilot A+ Rating',
    image: '/images/588-5885660_adding-trustpilot-image-next-to-logo-on-supply.webp',
    description: ''
  },
  {
  name: 'Happy Customers',
  image: '/images/happy-customers.webp',
  description: ''
  },
  {
    name: 'Damage-Free Guarantee',
    image: '/images/insurance.webp',
    description: ''
  },
]
 
export default function CommonTrustBadges() {
  return (
    <section className="py-5 bg-gray-200">
      <div className="container"> 
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {badges.map((badge, i) => (
              <div key={badge.name} className={`text-center group ${
      i > 0 ? "border-l-0 md:border-l-2  border-cyan-900" : ""
    }`}>
                <div className="relative h-16 mb-3 flex items-center justify-center">
                  <Image
                    src={badge.image}
                    alt={badge.name}
                    width={100}
                    height={30}
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
    </section>
  )
}
        