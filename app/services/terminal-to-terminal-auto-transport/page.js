import Link from 'next/link'
import Image from 'next/image'
import {
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  MapPinIcon,
  ShieldCheckIcon,
  TruckIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Terminal-to-Terminal Auto Transport | Budget Car Shipping Service',
  description: 'Save money on car shipping with terminal-to-terminal service. Learn how this cost-effective option works and if it\'s the right choice for your vehicle relocation. Get a quote from Furious Auto Shipping today.',
  keywords: 'terminal-to-terminal auto transport, budget car shipping, terminal car transport, cheap auto shipping, terminal vehicle transport',
  alternates: {
      canonical: '/services/terminal-to-terminal-auto-transport',
    },
}

const terminalLocations = [
  {
    city: 'Los Angeles',
    state: 'CA',
    address: '2450 E Olympic Blvd, Los Angeles, CA 90023',
    hours: 'Mon-Fri: 7AM-6PM, Sat: 8AM-4PM',
    contact: '(323) 555-0101',
    routes: 45
  },
  {
    city: 'Miami',
    state: 'FL',
    address: '8901 NW 13th Terrace, Miami, FL 33172',
    hours: 'Mon-Fri: 7AM-6PM, Sat: 8AM-4PM',
    contact: '(305) 555-0102',
    routes: 38
  },
  {
    city: 'Chicago',
    state: 'IL',
    address: '4521 W Grand Ave, Chicago, IL 60651',
    hours: 'Mon-Fri: 6AM-7PM, Sat: 7AM-5PM',
    contact: '(312) 555-0103',
    routes: 35
  },
  {
    city: 'Atlanta',
    state: 'GA',
    address: '1205 Metropolitan Pkwy SW, Atlanta, GA 30315',
    hours: 'Mon-Fri: 7AM-6PM, Sat: 8AM-4PM',
    contact: '(404) 555-0104',
    routes: 32
  },
  {
    city: 'Phoenix',
    state: 'AZ',
    address: '3847 W McDowell Rd, Phoenix, AZ 85009',
    hours: 'Mon-Fri: 7AM-6PM, Sat: 8AM-4PM',
    contact: '(602) 555-0105',
    routes: 31
  },
  {
    city: 'Houston',
    state: 'TX',
    address: '7890 Airline Dr, Houston, TX 77037',
    hours: 'Mon-Fri: 7AM-6PM, Sat: 8AM-4PM',
    contact: '(713) 555-0106',
    routes: 33
  }
]

const benefits = [
  {
    icon: CurrencyDollarIcon,
    title: 'Significant Cost Savings',
    description: 'Save $100-$200 compared to door-to-door service while maintaining the same quality and insurance coverage.',
    savings: 'Save $100-200'
  },
  {
    icon: ClockIcon,
    title: 'Faster Transit Times',
    description: 'Terminal locations on main routes often result in faster pickup and delivery compared to residential addresses.',
    benefit: 'Faster Service'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure Facilities',
    description: 'Professional terminals with security systems, surveillance, and staff supervision for vehicle safety.',
    feature: 'Secure Storage'
  },
  {
    icon: TruckIcon,
    title: 'Easy Carrier Access',
    description: 'Large terminals accommodate all carrier sizes without restrictions common in residential areas.',
    advantage: 'No Access Issues'
  }
]

const process2 = [
  {
    step: '1',
    title: 'Book Your Shipment',
    description: 'Choose terminal-to-terminal service and select your pickup and delivery terminals',
    icon: CalendarIcon
  },
  {
    step: '2',
    title: 'Drop Off Vehicle',
    description: 'Bring your vehicle to the origin terminal during business hours for inspection and paperwork',
    icon: MapPinIcon
  },
  {
    step: '3',
    title: 'Vehicle Transport',
    description: 'Your vehicle is loaded onto the carrier and transported safely to the destination terminal',
    icon: TruckIcon
  },
  {
    step: '4',
    title: 'Terminal Pickup',
    description: 'Pick up your vehicle at the destination terminal and complete final inspection',
    icon: BuildingOfficeIcon
  }
]

const comparison = [
  {
    feature: 'Cost',
    terminal: '$100-200 Less',
    doorToDoor: 'Standard Rate',
    advantage: 'terminal'
  },
  {
    feature: 'Convenience',
    terminal: 'Drive to Terminal',
    doorToDoor: 'At Your Location',
    advantage: 'door'
  },
  {
    feature: 'Transit Time',
    terminal: 'Often Faster',
    doorToDoor: 'Standard',
    advantage: 'terminal'
  },
  {
    feature: 'Security',
    terminal: 'Professional Facility',
    doorToDoor: 'Standard',
    advantage: 'terminal'
  },
  {
    feature: 'Flexibility',
    terminal: 'Terminal Hours',
    doorToDoor: 'Your Schedule',
    advantage: 'door'
  },
  {
    feature: 'Insurance',
    terminal: 'Same Coverage',
    doorToDoor: 'Same Coverage',
    advantage: 'equal'
  }
]

const faqs = [
  {
    question: 'How much can I save with terminal-to-terminal service?',
    answer: 'Terminal-to-terminal service typically saves $100-200 compared to door-to-door service. The exact savings depend on your specific route and distance, but you maintain the same insurance coverage and professional service quality.'
  },
  {
    question: 'What are terminal business hours?',
    answer: 'Most terminals operate Monday-Friday 7AM-6PM and Saturday 8AM-4PM. Hours may vary by location and season. We provide specific terminal hours and contact information when you book your shipment.'
  },
  {
    question: 'How long can I store my vehicle at the terminal?',
    answer: 'Standard service includes 1-2 days of free storage at each terminal. Extended storage may incur additional fees of $25-50 per day. We coordinate timing to minimize any storage fees.'
  },
  {
    question: 'Are terminals secure?',
    answer: 'Yes, all our partner terminals feature professional security including fenced perimeters, surveillance cameras, security lighting, and on-site staff supervision. Your vehicle is safe throughout the process.'
  },
  {
    question: 'What should I bring to the terminal?',
    answer: 'Bring valid photo ID, vehicle registration, insurance information, and any keys/remotes. Remove all personal items and ensure your vehicle has 1/4 tank of gas or less.'
  },
  {
    question: 'Can I inspect my vehicle at pickup?',
    answer: 'Absolutely! Both drop-off and pickup include thorough vehicle inspections. You\'ll receive detailed inspection reports and have time to review your vehicle\'s condition before signing off.'
  }
]

export default function TerminalToTerminalPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden relative">
        <div className="absolute inset-0">
          <Image
            src="/images/services/terminal-hero-bg.jpg"
            alt="Auto transport terminal facility"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Save $100-200 on Transport</span>
              </div>

              <h1 className="heading-1 mb-6">
                Terminal-to-Terminal Auto Shipping: A Smart Choice for the Savvy Shipper
              </h1>
              <p className="text-xl leading-relaxed mb-8">
                Save money without sacrificing quality. Drop off and pick up your vehicle
                at secure professional terminals. Same insurance, same care, better price.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/get-quote" className="btn-secondary btn-lg">
                  Get Terminal Quote
                </Link>
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                  className="btn-outline btn-lg border-white   hover:bg-white hover:text-blue-600"
                >
                  Find Nearest Terminal
                </a>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-200">$100-200</div>
                  <div className="text-sm text-blue-100">Average Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-200">50+</div>
                  <div className="text-sm text-blue-100">Terminal Locations</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Terminal Service Savings
                  </h3>
                  <p className="text-gray-600">Compared to door-to-door service</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">500 mile transport:</span>
                    <span className="font-bold text-blue-600">Save $150</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">1000 mile transport:</span>
                    <span className="font-bold text-blue-600">Save $200</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Cross-country:</span>
                    <span className="font-bold text-blue-600">Save $250</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Choose Terminal-to-Terminal?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the same professional auto transport service with significant cost savings
              by using our secure terminal network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{benefit.description}</p>
                <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {benefit.savings || benefit.benefit || benefit.feature || benefit.advantage}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Locations */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Terminal Locations</h2>
            <p className="text-xl text-gray-600">
              Professional terminals in major metropolitan areas across the United States.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {terminalLocations.map((terminal, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {terminal.city}, {terminal.state}
                    </h3>
                    <div className="text-sm text-blue-600 font-medium">
                      {terminal.routes} Routes Available
                    </div>
                  </div>
                  <BuildingOfficeIcon className="h-8 w-8 text-blue-600" />
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <MapPinIcon className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{terminal.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ClockIcon className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-600">{terminal.hours}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">📞</span>
                    <a href={`tel:${terminal.contact}`} className="text-blue-600 hover:text-blue-700 font-medium">
                      {terminal.contact}
                    </a>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="btn-outline w-full text-center text-sm">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Don't see a terminal near you? We're constantly expanding our network.
            </p>
            <a
              href="/contact"
              className="btn-primary"
            >
              Request New Terminal Location
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">How Terminal Service Works</h2>
            <p className="text-xl font-bold text-gray-600">
              Simple 4-step process to save money on your auto transport.
            </p>
            <p className="my-2 text-gray-600">Instead of having a carrier come directly to your home, you drop off your vehicle at a designated <b><Link href={''}>auto transport terminal</Link></b> near your origin. Your car will be stored securely at this facility until it is loaded onto a carrier with other vehicles heading in the same general direction. The carrier will then travel to a terminal near your destination, where you will pick up your vehicle at your convenience.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process2.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <step.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  {index < process2.length - 1 && (
                    <div className="hidden lg:block absolute -z-10 top-8 left-1/2 w-full h-0.5 bg-blue-200 z-0" />
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Terminal vs Door-to-Door Comparison</h2>
            <p className="text-xl text-gray-600">
              See how terminal service compares to door-to-door transport.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-0">
                <div className="bg-gray-50 p-4 font-semibold text-gray-900 border-r border-gray-200">
                  Feature
                </div>
                <div className="bg-blue-50 p-4 font-semibold text-blue-800 text-center border-r border-gray-200">
                  Terminal Service
                </div>
                <div className="bg-blue-50 p-4 font-semibold text-blue-800 text-center border-r border-gray-200">
                  Door-to-Door
                </div>
                <div className="bg-gray-50 p-4 font-semibold text-gray-900 text-center">
                  Advantage
                </div>
              </div>

              {comparison.map((item, index) => (
                <div key={index} className="grid grid-cols-4 gap-0 border-t border-gray-200">
                  <div className="p-4 font-medium text-gray-900 border-r border-gray-200">
                    {item.feature}
                  </div>
                  <div className="p-4 text-center border-r border-gray-200">
                    {item.terminal}
                  </div>
                  <div className="p-4 text-center border-r border-gray-200">
                    {item.doorToDoor}
                  </div>
                  <div className="p-4 text-center">
                    {item.advantage === 'terminal' && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                        Terminal
                      </span>
                    )}
                    {item.advantage === 'door' && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                        Door-to-Door
                      </span>
                    )}
                    {item.advantage === 'equal' && (
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm font-medium">
                        Equal
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-3 mb-6">What You Need to Know</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Same Insurance Coverage</h4>
                    <p className="text-gray-600 text-sm">
                      Terminal service includes the same comprehensive insurance as door-to-door transport.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Professional Inspection</h4>
                    <p className="text-gray-600 text-sm">
                      Thorough vehicle inspections at both drop-off and pickup with detailed reports.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Flexible Scheduling</h4>
                    <p className="text-gray-600 text-sm">
                      Multiple pickup and drop-off times throughout business hours for your convenience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="heading-3 mb-6">Important Considerations</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <ExclamationTriangleIcon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Transportation Required</h4>
                    <p className="text-gray-600 text-sm">
                      You'll need transportation to/from terminals. Plan for this when scheduling.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <ExclamationTriangleIcon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Business Hours Only</h4>
                    <p className="text-gray-600 text-sm">
                      Drop-off and pickup limited to terminal business hours (typically 7AM-6PM).
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <ExclamationTriangleIcon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Terminal Availability</h4>
                    <p className="text-gray-600 text-sm">
                      Service limited to routes with terminal coverage. Not available in all areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p>When your primary concern is cost-savings and you have a flexible schedule, <b><Link href={''}>terminal-to-terminal shipping</Link></b> offers a compelling alternative to traditional <b><Link href={'/services/door-to-door-auto-transport'}>door-to-door auto transport</Link></b>. This service is designed to be highly efficient and economical by streamlining the pickup and delivery process. At Furious Auto Shipping, we provide reliable <b>terminal-to-terminal</b> services through our network of secure, strategically located terminals across the United 
          States.</p>

              <h2 className="heading-3 mb-4">Key Benefits of Choosing Terminal-to-Terminal</h2>
              <p>This service model offers a unique set of advantages that make it an attractive option for many customers:</p>
              <ul className='list-disc ml-6'>
                <li className='my-2'><b>Significant Cost Savings:</b> This is the biggest advantage of terminal-to-terminal shipping. Carriers can save a great deal of time and fuel by avoiding residential areas, traffic, and complex navigation. These savings are passed on directly to you, resulting in a much lower final price.</li>
                <li className='my-2'><b>Convenient for Difficult Locations:</b> If you live on a narrow street, in a gated community, or in a busy downtown area where large car carriers cannot safely maneuver, terminal-to-terminal is a perfect solution. You can simply drop off and pick up your vehicle at a location that is easily accessible.</li>
                <li className='my-2'><b>Flexibility in Scheduling:</b> You are not required to be present during a specific pickup or delivery window. You can drop off or pick up your vehicle at your convenience during the terminal's hours of operation, giving you more control over your schedule.</li>
                <li className='my-2'><b>Security:</b> Your vehicle is stored in a secure, fenced-in facility at the terminal, giving you peace of mind that it is protected from theft and vandalism while it awaits transport or pickup.</li>
              </ul>

              <h2 className="heading-3 mb-4">Considerations Before Booking</h2>
              <p>While <b><Link href={''}>terminal-to-terminal shipping</Link></b> is a great option, it's important to be aware of a few key points:</p>
              <ul className='list-disc ml-6'>
                <li className='my-2'><b>Added Legwork:</b> You are responsible for dropping off your vehicle at the origin terminal and picking it up at the destination terminal. This means you will need to arrange your own transportation to and from these locations.</li>
                <li className='my-2'><b>Potential for Delay:</b> Your vehicle may sit at the terminal for a few days before a carrier with a full load is ready to depart. This can increase the overall transit time.</li>
                <li className='my-2'><b>Storage Time:</b> While a car is typically only at a terminal for a short period, it is exposed to the elements during its time in storage.</li>
              </ul>

              <h2 className="heading-3 mb-4">Is Terminal-to-Terminal the Right Choice for You?</h2>
              <p>This service is perfect for customers who are relocating and want to save money, those with flexible timelines, or those who live in locations that are not easily accessible for large transport trucks. It's an excellent way to get your car shipped safely and affordably.</p>

        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Terminal Service FAQ</h2>
            <p className="text-xl text-gray-600">
              Common questions about terminal-to-terminal auto transport.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <h3 className="font-semibold text-lg mb-3 text-blue-900">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">Save Money with Terminal Service</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Get the same professional auto transport service with significant savings.
              Same insurance, same care, better price.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200 mb-2">$200</div>
                <div className="text-blue-100">Average savings per shipment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200 mb-2">50+</div>
                <div className="text-blue-100">Secure terminal locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200 mb-2">100%</div>
                <div className="text-blue-100">Same insurance coverage</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-quote"
                className="btn-secondary btn-lg"
              >
                Get Terminal Quote
              </Link>
              <a
                href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                className="btn-outline btn-lg border-white  hover:bg-white hover:text-blue-600"
              >
                Find Your Terminal
              </a>
            </div>

            <p className="text-blue-200 text-sm mt-6">
              ✓ Save $100-200 ✓ Professional terminals ✓ Same insurance coverage
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}