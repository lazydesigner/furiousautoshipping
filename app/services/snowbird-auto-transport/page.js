import Link from 'next/link'
import Image from 'next/image'
import { 
  SunIcon, 
  Cog6ToothIcon, 
  CalendarIcon, 
  MapPinIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

export const metadata = {
  title: 'The Ultimate Guide to Snowbird Auto Transport: Your Stress-Free Seasonal Move',
  description: 'Planning your winter migration? Our comprehensive guide to snowbird auto transport covers everything from cost factors and choosing a carrier to preparing your car for a seamless, stress-free move. Get your free quote today!',
  keywords: 'snowbird auto transport, seasonal car shipping, winter migration, snowbird vehicle transport, seasonal auto shipping',
  
  alternates: {
      canonical: '/services/snowbird-auto-transport',
    },
}

const popularRoutes = [
  {
    from: 'New York',
    to: 'Florida',
    fromState: 'NY',
    toState: 'FL',
    distance: '1,100 miles',
    timeframe: '5-7 days',
    season: 'Winter',
    savings: '15%'
  },
  {
    from: 'Michigan',
    to: 'Arizona',
    fromState: 'MI',
    toState: 'AZ',
    distance: '1,600 miles',
    timeframe: '6-8 days',
    season: 'Winter',
    savings: '12%'
  },
  {
    from: 'Illinois',
    to: 'Florida',
    fromState: 'IL',
    toState: 'FL',
    distance: '1,200 miles',
    timeframe: '5-7 days',
    season: 'Winter',
    savings: '18%'
  },
  {
    from: 'Pennsylvania',
    to: 'Texas',
    fromState: 'PA',
    toState: 'TX',
    distance: '1,400 miles',
    timeframe: '6-8 days',
    season: 'Winter',
    savings: '10%'
  },
  {
    from: 'Ohio',
    to: 'California',
    fromState: 'OH',
    toState: 'CA',
    distance: '2,200 miles',
    timeframe: '8-10 days',
    season: 'Winter',
    savings: '14%'
  },
  {
    from: 'Minnesota',
    to: 'Nevada',
    fromState: 'MN',
    toState: 'NV',
    distance: '1,500 miles',
    timeframe: '6-8 days',
    season: 'Winter',
    savings: '16%'
  }
]

const benefits = [
  {
    icon: CurrencyDollarIcon,
    title: 'Seasonal Discounts',
    description: 'Save 10-20% on popular snowbird routes during peak migration seasons'
  },
  {
    icon: CalendarIcon,
    title: 'Flexible Scheduling',
    description: 'Round-trip planning with flexible return dates to match your seasonal needs'
  },
  {
    icon: MapPinIcon,
    title: 'Optimized Routes',
    description: 'We know the most popular snowbird destinations and optimize carrier routes'
  },
  {
    icon: ClockIcon,
    title: 'Priority Booking',
    description: 'Seasonal customers get priority booking during high-demand periods'
  },
  {
    icon: ArrowPathIcon,
    title: 'Return Service',
    description: 'Easy booking for your return trip with customer history and preferences'
  },
  {
    icon: CheckCircleIcon,
    title: 'Experienced Team',
    description: 'Our team understands snowbird migration patterns and timing needs'
  }
]

const seasonalTips = [
  {
    season: 'Fall Migration (Oct-Nov)',
    icon: Cog6ToothIcon,
    tips: [
      'Book 2-3 weeks in advance for best rates',
      'Popular routes: Northeast to Florida/Arizona',
      'Weather can affect northern pickups',
      'Peak season pricing starts mid-October'
    ],
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-200'
  },
  {
    season: 'Spring Return (Mar-Apr)',
    icon: SunIcon,
    tips: [
      'Return trips typically more affordable',
      'Book early for Memorial Day delivery',
      'Popular routes: Florida/Arizona to Northeast',
      'Weather conditions generally favorable'
    ],
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    borderColor: 'border-green-200'
  }
]

const faqs = [
  {
    question: 'What is snowbird auto transport?',
    answer: 'Snowbird auto transport is specialized seasonal car shipping for people who migrate between northern and southern states for winter. We offer optimized routes, seasonal pricing, and flexible scheduling for these popular migration patterns.'
  },
  {
    question: 'When should I book my snowbird transport?',
    answer: 'Book 2-4 weeks in advance during peak seasons (October-November and March-April). Early booking ensures better rates and availability on popular snowbird routes.'
  },
  {
    question: 'Do you offer round-trip discounts?',
    answer: 'Yes! We offer special pricing for customers who book both directions of their seasonal migration. Return customers also receive loyalty discounts and priority booking.'
  },
  {
    question: 'What are the most popular snowbird routes?',
    answer: 'Popular routes include Northeast to Florida, Midwest to Arizona/Texas, and Great Lakes region to California. We have extensive experience with these seasonal migration patterns.'
  },
  {
    question: 'Can I schedule my return trip in advance?',
    answer: 'Absolutely! We can schedule both directions of your trip and provide flexible return dates. Many customers prefer to book their return when scheduling their initial transport.'
  }
]

export default function SnowbirdPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden relative">
        <div className="absolute inset-0">
          <Image
            src="/images/services/snowbird-hero-bg.jpg"
            alt="Snowbird migration route"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <SunIcon className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Seasonal Migration Specialists</span>
              </div>
              
              <h1 className="heading-1 mb-6">
                Your Ultimate Guide to Snowbird Auto Transport
              </h1>
              <p className="text-xl leading-relaxed mb-8">
                As the leaves change and the first chill of autumn arrives, thousands of Americans and Canadians, affectionately known as "snowbirds," begin their annual migration to warmer climates. Whether your destination is the sun-drenched beaches of Florida, the serene deserts of Arizona, or the vibrant cities of Texas, having your personal vehicle with you is essential for a comfortable and independent lifestyle. While the idea of a long-distance road trip might seem appealing, the reality of driving thousands of miles through unpredictable weather, icy roads, and heavy traffic can be a source of significant stress, cost, and risk.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-quote" className="btn-secondary btn-lg">
                  Get Snowbird Quote
                </Link>
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                  className="btn-outline btn-lg border-white hover:bg-white hover:text-blue-600"
                >
                  Call {process.env.NEXT_PUBLIC_COMPANY_PHONE}
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Seasonal Savings
                  </h3>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">15%</div>
                      <div className="text-sm text-gray-600">Average Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">50+</div>
                      <div className="text-sm text-gray-600">Popular Routes</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Save on seasonal migration with our specialized snowbird service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Popular Snowbird Routes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in the most popular seasonal migration routes with 
              optimized pricing and scheduling.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRoutes.map((route, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">{route.from}</span>
                  </div>
                  <div className="text-gray-400">→</div>
                  <div className="flex items-center space-x-2">
                    <SunIcon className="h-5 w-5 text-orange-500" />
                    <span className="font-semibold text-gray-900">{route.to}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Distance:</span>
                    <span className="font-medium">{route.distance}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Transit Time:</span>
                    <span className="font-medium">{route.timeframe}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Season:</span>
                    <span className="font-medium">{route.season}</span>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-center">
                    <span className="text-green-700 font-medium">
                      Save up to {route.savings} with snowbird pricing
                    </span>
                  </div>
                </div>
                
                <Link
                  href={`/locations/${route.from.toLowerCase().replace(/\s+/g, '-')}/${route.to.toLowerCase().replace(/\s+/g, '-')}`}
                  className="btn-outline w-full text-center"
                >
                  Get Quote for This Route
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Choose Our Snowbird Service?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique needs of seasonal residents and provide 
              specialized services tailored to your migration patterns.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Migration Guide */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Seasonal Migration Guide</h2>
            <p className="text-xl text-gray-600">
              Plan your seasonal moves with our migration timing guide and tips.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {seasonalTips.map((season, index) => (
              <div key={index} className={`${season.bgColor} ${season.borderColor} border rounded-xl p-8`}>
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-white rounded-full ${season.borderColor} border`}>
                    <season.icon className={`h-8 w-8 ${season.iconColor}`} />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">
                    {season.season}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {season.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start space-x-3">
                      <CheckCircleIcon className={`h-5 w-5 ${season.iconColor} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

        <section className="section">
            <div className="container">
            
                <p className='my-2'>This is where professional <b><Link href={''}>snowbird auto transport</Link></b> comes in. It’s a specialized service designed to provide a safe, convenient, and cost-effective alternative to driving. At Furious Auto Shipping, we understand the unique needs of seasonal movers and have built our reputation on providing a reliable, hassle-free service that allows you to fly to your destination and have your car waiting for you when you arrive.</p>

                <h2 className="heading-2 mb-6">Why Do Snowbirds Ship Their Vehicles?</h2>
                <p className='my-2'>The decision to ship your car instead of driving is a practical one rooted in convenience, safety, and financial sense.</p>
                <ul>
                    <li className='my-2'><b>Safety and Peace of Mind:</b> Winter driving conditions can be treacherous. By shipping your vehicle, you avoid the risks of black ice, snowstorms, and dangerous road conditions. Our professional drivers are experienced in long-haul transport and are equipped to handle any challenges on the road, ensuring your vehicle's safety from pickup to delivery.</li>
                    <li className='my-2'><b>Time and Freedom:</b> A cross-country drive can take days, or even weeks, of exhausting travel. By choosing to ship, you can save valuable time that can be better spent on other aspects of your move or, more importantly, enjoying the start of your winter retreat. You have the freedom to travel by air, train, or any other method you prefer, without being tied to a demanding driving schedule.</li>
                    <li className='my-2'><b>Cost-Effectiveness:</b> When you tally up the expenses of a long road trip—gas, food, hotel stays, and potential vehicle maintenance or repairs—professional shipping can often be the more affordable option. Our quotes are transparent and all-inclusive, helping you budget accurately and avoid unexpected costs.</li>
                    <li className='my-2'><b>Reduced Wear and Tear:</b> Every mile you drive adds wear and tear to your vehicle, depreciating its value and bringing you closer to costly maintenance. Shipping your car preserves its mileage and condition, protecting your investment for years to come.</li>
                </ul>

                <h2 className="heading-2 mb-6">Understanding Snowbird Auto Transport: The Key Factors</h2>
                <p className='my-2'>The cost and process of shipping your car as a snowbird are influenced by several key factors. We believe in transparency, and understanding these factors will help you make an informed decision.</p>
                <ul>
                    <li className='my-2'><b>Distance and Route:</b> The most popular snowbird routes are from the Northeast and Midwest to states like Florida, Arizona, and California. These established routes are well-traveled by carriers, which can make the process more efficient and often more affordable. The longer the distance, the lower the cost per mile, but the higher the overall total.</li>
                    <li className='my-2'><b>Time of Year (Seasonality):</b> Snowbird season is the busiest time for auto transport. The peak season for southbound transport is from October to December, while northbound transport peaks from March to May. Demand during these times is high, which can lead to increased rates. Booking well in advance is highly recommended to secure the best price and a timely spot on a carrier.</li>
                    <li className='my-2'><b>Vehicle Type:</b> The size, weight, and operability of your vehicle will impact the final cost. Standard sedans are typically the most affordable to ship, while larger vehicles like SUVs, trucks, or vans may cost more due to the space and weight they occupy on the transport.</li>
                    <li className='my-2'><b>Transport Method:</b> Open vs. Enclosed: We offer two primary shipping options to meet your needs:
                    
                    
                    <ul>
                        <li className='my-2'><b><Link href={'/services/open-auto-transport'}>Open Auto Transport</Link>:</b> This is the most common and economical choice. Your vehicle is transported on an open-air carrier with other cars. It is a safe and reliable option for most standard vehicles.</li>
                        <li className='my-2'><b><Link href={'/services/enclosed-auto-transport'}>Enclosed Auto Transport</Link>:</b> For luxury, classic, or high-value vehicles, enclosed transport offers maximum protection from the elements, road debris, and potential theft. The vehicle is shipped in a covered trailer, providing an extra layer of security and peace of mind.</li>
                        
                        </ul></li>
                </ul>

                <h2 className="heading-2 mb-6">The Furious Auto Shipping Snowbird Shipping Process</h2>
                <p className='my-2'>Our process is designed to be as simple and stress-free as possible. We handle the logistics so you can focus on your destination.</p>
                <ul className='list-decimal ml-5'>
                    <li className='my-2'><b>Get a Free, No-Obligation Quote:</b> Start by using our online quote tool or calling one of our transport specialists. Provide us with your pickup and delivery locations, vehicle details, and desired shipping dates. You'll receive a transparent, competitive quote with no hidden fees.</li>
                    <li className='my-2'><b>Schedule Your Shipment:</b> Once you're ready to book, we'll confirm the details and schedule your vehicle's pickup. We recommend booking at least [Insert suggested lead time, e.g., 2-4 weeks] in advance, especially during peak snowbird season.</li>
                    <li className='my-2'><b>Prepare Your Vehicle:</b> To ensure a smooth process, we'll provide a simple checklist to prepare your vehicle. This includes removing personal belongings, ensuring the gas tank is no more than a quarter full, and noting any pre-existing damage.</li>
                    <li className='my-2'><b>Pickup and Transit:</b> A professional, fully insured driver will arrive at your specified location for pickup. Together, you will complete a detailed inspection and sign the Bill of Lading, which serves as your receipt and condition report. Your vehicle is then securely loaded and begins its journey.</li>
                    <li className='my-2'><b>Real-Time Communication:</b> We provide updates throughout the transport process, allowing you to track your vehicle's progress. We believe in proactive communication, and our team is always available to answer any questions you may have.</li>
                    <li className='my-2'><b>Delivery and Final Inspection:</b> The driver will contact you prior to arrival at your destination. Upon delivery, you'll perform a final inspection of your vehicle to ensure its condition meets your expectations before signing the final paperwork.</li> 
                </ul>

                <h2 className="heading-2 mb-6">Essential Tips for a Successful Snowbird Transport</h2>
                <p className='my-2'>As experts in the field, we've gathered a few key tips to help you have the best possible experience:</p>
                <ul>
                    <li className='my-2'><b>Book Early:</b> As mentioned, demand is high during peak season. Booking early not only gives you peace of mind but can also secure a better rate.</li>
                    <li className='my-2'><b>Be Flexible:</b> If your schedule allows for a flexible pickup window (e.g., a few days instead of a specific date), carriers can often offer a more competitive price.</li>
                    <li className='my-2'><b>Check Credentials:</b> Always choose a reputable and fully licensed auto transport company. Look for a company with positive reviews, a strong track record, and a commitment to customer service.</li>
                    <li className='my-2'><b>Understand Insurance:</b> Confirm that the carrier's insurance is comprehensive and covers your vehicle for the full duration of the transport. A reliable company will be happy to provide proof of insurance.</li>
                </ul>

                <h2 className="heading-2 mb-6">Start Your Journey to the Sun Today!</h2>
                <p className='my-2'>Don't let the logistics of moving your vehicle detract from the excitement of your seasonal escape. Our specialized <b><Link href={''}>snowbird auto transport</Link></b> services are designed to make your journey to a warmer climate as smooth and effortless as possible. We are dedicated to providing you with the highest level of service, ensuring your vehicle arrives safely and on time, ready for you to enjoy your time away from the cold.</p>
                <p className='my-2'>Get your free, instant quote today and discover the peace of mind that comes with professional <b>snowbird auto transport</b> from <b><Link href={'/'}>Furious Auto Shipping</Link></b></p>
            
            </div>
        </section>

      {/* How It Works */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">How Snowbird Service Works</h2>
            <p className="text-xl text-gray-600">
              Simple process designed for seasonal residents.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Plan Your Migration',
                description: 'Tell us your seasonal schedule and preferred dates'
              },
              {
                step: '2',
                title: 'Get Snowbird Pricing',
                description: 'Receive specialized rates for your seasonal route'
              },
              {
                step: '3',
                title: 'Schedule Both Ways',
                description: 'Book your departure and return trips together'
              },
              {
                step: '4',
                title: 'Enjoy the Season',
                description: 'Relax knowing your return trip is already planned'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200" />
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Snowbird Service FAQ</h2>
            <p className="text-xl text-gray-600">
              Common questions about our seasonal auto transport service.
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

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">Ready for Your Seasonal Migration?</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Join thousands of snowbirds who trust us with their seasonal auto transport. 
              Get specialized pricing and service designed for your migration needs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200 mb-2">10+</div>
                <div className="text-blue-100">Years of snowbird experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200 mb-2">15%</div>
                <div className="text-blue-100">Average seasonal savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200 mb-2">98%</div>
                <div className="text-blue-100">Customer satisfaction rate</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-quote"
                className="btn-secondary btn-lg"
              >
                Get Snowbird Quote
              </Link>
              <a
                href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                className="btn-outline btn-lg border-white text-white hover:bg-white hover:text-blue-600"
              >
                Speak with Snowbird Specialist
              </a>
            </div>
            
            <p className="text-blue-200 text-sm mt-6">
              ✓ Seasonal discounts available ✓ Flexible return scheduling ✓ Priority booking
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}