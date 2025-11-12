
import Link from 'next/link'
import Image from 'next/image'
import { 
  TruckIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  MapPinIcon,
  HomeIcon,
  BuildingOfficeIcon,
  BoltIcon,
  SunIcon
} from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Auto Transport Services | Door-to-Door Car Shipping & More',
  description: 'Comprehensive auto transport services including door-to-door shipping, enclosed transport, open carriers, expedited delivery, and seasonal snowbird service.',
  keywords: 'auto transport services, door-to-door car shipping, enclosed transport, open transport, expedited shipping, snowbird service',
}

const services = [
  {
    id: 'door-to-door-auto-transport',
    title: 'Door-to-Door Transport',
    description: 'Convenient pickup and delivery right at your location. No need to drive to terminals.',
    icon: HomeIcon,
    features: [
      'Pickup from your home or office',
      'Direct delivery to destination',
      'No terminal visits required',
      'Most popular service option',
    ],
    image: '/images/services/door-to-door.jpg',
    pricing: 'Standard rates apply',
    timeframe: '7-14 days typical',
  },
  {
    id: 'terminal-to-terminal-auto-transport',
    title: 'Terminal-to-Terminal',
    description: 'Cost-effective option where you drop off and pick up at designated terminals.',
    icon: BuildingOfficeIcon,
    features: [
      'Lower cost alternative',
      'Secure terminal facilities',
      'Flexible scheduling',
      'Available in major cities',
    ],
    image: '/images/services/terminal.jpg',
    pricing: 'Save $100-200',
    timeframe: '5-10 days typical',
  },
  {
    id: 'enclosed-auto-transport',
    title: 'Enclosed Transport',
    description: 'Premium protection for luxury, classic, or high-value vehicles in covered trailers.',
    icon: ShieldCheckIcon,
    features: [
      'Complete weather protection',
      'Protection from road debris',
      'Ideal for luxury vehicles',
      'Limited exposure handling',
    ],
    image: '/images/services/enclosed.jpg',
    pricing: '40-60% premium',
    timeframe: '7-14 days typical',
  },
  {
    id: 'open-auto-transport',
    title: 'Open Transport',
    description: 'Most economical option using standard open car carriers. Safe and reliable.',
    icon: TruckIcon,
    features: [
      'Most cost-effective option',
      'Widely available carriers',
      'Fastest booking times',
      'Same care and insurance',
    ],
    image: '/images/services/open-transport.jpg',
    pricing: 'Best value option',
    timeframe: '5-12 days typical',
  },
  {
    id: 'expedited-auto-transport',
    title: 'Expedited Shipping',
    description: 'Fast-track service for urgent deliveries with priority scheduling.',
    icon: BoltIcon,
    features: [
      'Priority carrier assignment',
      'Faster pickup times',
      'Express delivery service',
      'Dedicated support',
    ],
    image: '/images/services/expedited.jpg',
    pricing: '+$200-400 surcharge',
    timeframe: '2-7 days typical',
  },
  {
    id: 'snowbird-auto-transport',
    title: 'Snowbird Service',
    description: 'Seasonal auto transport for winter residents moving between states.',
    icon: SunIcon,
    features: [
      'Seasonal route optimization',
      'Flexible return scheduling',
      'Special snowbird pricing',
      'Popular route availability',
    ],
    image: '/images/services/snowbird.jpg',
    pricing: 'Seasonal discounts',
    timeframe: 'Seasonal scheduling',
  },
]

const benefits = [
  {
    icon: ShieldCheckIcon,
    title: 'Fully Insured',
    description: 'Every shipment is covered by comprehensive insurance for your peace of mind.',
  },
  {
    icon: ClockIcon,
    title: 'On-Time Delivery',
    description: 'We pride ourselves on reliable pickup and delivery times you can count on.',
  },
  {
    icon: MapPinIcon,
    title: 'Nationwide Coverage',
    description: 'We serve all 50 states with our extensive network of professional carriers.',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">
              Professional Auto Transport Services
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              Choose from our comprehensive range of vehicle shipping services designed 
              to meet your specific needs, timeline, and budget. From economy options 
              to premium enclosed transport.
            </p>
            <Link
              href="/get-quote"
              className="btn-secondary btn-lg"
            >
              Get Free Quote for All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <service.icon className="h-8 w-8 mb-2" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                </div>
                
                <div className="card-body">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm font-medium text-gray-500">Pricing</div>
                      <div className="text-brand-600 font-semibold">{service.pricing}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">Timeframe</div>
                      <div className="text-brand-600 font-semibold">{service.timeframe}</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Service Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-brand-600 rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link
                      href={`/services/${service.id}`}
                      className="btn-outline flex-1 text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/get-quote"
                      className="btn-primary flex-1 text-center"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service we offer is backed by our commitment to excellence, 
              safety, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-brand-100 rounded-full">
                    <benefit.icon className="h-8 w-8 text-brand-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Service Comparison</h2>
            <p className="text-xl text-gray-600">
              Compare our services to find the perfect fit for your needs.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cost Level
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transit Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">Open Transport</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-600">$ (Lowest)</td>
                  <td className="px-6 py-4 whitespace-nowrap">5-12 days</td>
                  <td className="px-6 py-4">Most vehicles, daily drivers</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">Enclosed Transport</td>
                  <td className="px-6 py-4 whitespace-nowrap text-orange-600">$$$ (Premium)</td>
                  <td className="px-6 py-4 whitespace-nowrap">7-14 days</td>
                  <td className="px-6 py-4">Luxury, classic, exotic cars</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">Expedited</td>
                  <td className="px-6 py-4 whitespace-nowrap text-red-600">$$$$ (Highest)</td>
                  <td className="px-6 py-4 whitespace-nowrap">2-7 days</td>
                  <td className="px-6 py-4">Urgent deliveries</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">Terminal Service</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-600">$ (Savings)</td>
                  <td className="px-6 py-4 whitespace-nowrap">5-10 days</td>
                  <td className="px-6 py-4">Budget-conscious customers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Service FAQs</h2>
            <p className="text-xl text-gray-600">
              Common questions about our auto transport services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What's the difference between open and enclosed transport?",
                answer: "Open transport uses standard car carriers (like you see on highways) and is the most economical option. Enclosed transport uses covered trailers that protect vehicles from weather and road debris, ideal for luxury or classic cars."
              },
              {
                question: "How much does expedited shipping cost?",
                answer: "Expedited service typically adds $200-400 to your shipping cost, depending on the route and distance. This service prioritizes your shipment for faster pickup and delivery."
              },
              {
                question: "Can I track my vehicle during transport?",
                answer: "Yes! We provide real-time tracking updates and you can contact your assigned driver directly. You'll receive regular updates on pickup, transit, and delivery status."
              },
              {
                question: "What is snowbird service?",
                answer: "Snowbird service is designed for seasonal residents who move between northern and southern states. We offer optimized routing and seasonal pricing for these popular migration routes."
              },
              {
                question: "Is my vehicle insured during transport?",
                answer: "Absolutely. All shipments are covered by comprehensive insurance. We work only with licensed, bonded, and insured carriers who meet our strict safety standards."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-600 text-white">
        <div className="container text-center">
          <h2 className="heading-2 mb-4">Ready to Ship Your Vehicle?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get an instant quote for any of our services. Our team will help you 
            choose the best option for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="btn-secondary btn-lg"
            >
              Get Instant Quote
            </Link>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
              className="btn-outline btn-lg border-white text-white hover:bg-white hover:text-brand-600"
            >
              Call {process.env.NEXT_PUBLIC_COMPANY_PHONE}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}