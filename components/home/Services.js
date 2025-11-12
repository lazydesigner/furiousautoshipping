import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Open Transport',
    description: 'Most popular and economical option for shipping your vehicle safely across the country.',
    image: '/images/services/open-transport-home.jpg',
    features: ['Most cost-effective', 'Fast availability', 'Same insurance coverage'],
    href: '/services/open',
    popular: true,
  },
  {
    title: 'Enclosed Transport',
    description: 'Premium protection for luxury, classic, or high-value vehicles with covered trailers.',
    image: '/images/services/enclosed-transport-home.jpg',
    features: ['Weather protection', 'Luxury vehicle specialty', 'Extra security'],
    href: '/services/enclosed',
  },
  {
    title: 'Door-to-Door',
    description: 'Ultimate convenience with pickup and delivery right at your preferred locations.',
    image: '/images/services/door-to-door-home.jpg',
    features: ['Maximum convenience', 'No terminal visits', 'Flexible scheduling'],
    href: '/services/door-to-door',
  },
  {
    title: 'Expedited Shipping',
    description: 'Fast-track service for urgent deliveries with priority carrier assignment.',
    image: '/images/services/expedited-home.jpg',
    features: ['Priority scheduling', '2-7 day delivery', 'Dedicated support'],
    href: '/services/expedited',
  },
]

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Our Auto Transport Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of professional vehicle shipping services 
            designed to meet your specific needs and budget.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              {service.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-brand-600 rounded-full mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-3">
                  <Link
                    href={service.href}
                    className="btn-outline flex-1 text-center group-hover:border-brand-600 group-hover:text-brand-600 transition-colors"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/get-quote"
                    className="btn-primary flex-1 text-center flex items-center justify-center"
                  >
                    Get Quote
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="btn-outline btn-lg"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}