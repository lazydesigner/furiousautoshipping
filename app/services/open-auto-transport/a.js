import Link from 'next/link'
import Image from 'next/image'
import { CheckCircleIcon, TruckIcon, CurrencyDollarIcon  } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'The Most Popular Car Shipping Method: Open Auto Transport Services',
  description: 'Discover why open auto transport is the most popular and cost-effective way to ship a car in the U.S. Learn about the process, benefits, and how to get a transparent quote from Furious Auto Shipping.',
  keywords: 'open auto transport, affordable car shipping, open carrier transport, economical auto shipping, standard car transport',
  
  alternates: {
      canonical: '/services/open-auto-transport',
    },
}

const benefits = [
  'Most cost-effective auto transport option',
  'Fastest carrier availability and booking',
  'Same comprehensive insurance coverage',
  'Trusted by millions of car owners annually',
  'Professional drivers and modern equipment',
  'Nationwide network with frequent departures'
]

const whyChoose = [
  {
    icon: CurrencyDollarIcon ,
    title: 'Best Value',
    description: 'Get professional auto transport at the most competitive rates without compromising on safety or service quality.'
  },
  {
    icon: TruckIcon,
    title: 'High Availability',
    description: 'With the largest network of carriers, open transport offers the most frequent departures and flexible scheduling.'
  },
  {
    icon: CheckCircleIcon,
    title: 'Proven Safety',
    description: 'Millions of vehicles are safely transported via open carriers annually - it\'s the industry standard for good reason.'
  }
]

const idealFor = [
  'Daily driver vehicles',
  'Recently purchased cars',
  'Student car transport',
  'Military PCS moves',
  'Corporate relocations',
  'Vehicles under $50,000 value'
]

export default function OpenTransportPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-1 mb-6">Open Auto Transport: The Backbone of U.S. Vehicle Shipping</h1>
              <p className="text-xl leading-relaxed mb-8">
                The most popular and economical way to ship your vehicle. Open transport 
                offers the perfect combination of affordability, availability, and safety 
                that has made it the choice of millions of customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-quote" className="btn-secondary btn-lg">
                  Get Instant Quote
                </Link>
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                  className="btn-outline btn-lg border-white  hover:bg-white hover:text-brand-600"
                >
                  Call {process.env.NEXT_PUBLIC_COMPANY_PHONE}
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/step-5-transport.png"
                alt="Open auto transport carrier"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Open Transport is the Smart Choice</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Open transport is the industry standard, trusted by dealerships, rental companies, 
              and individual car owners for safe and affordable vehicle shipping.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/images/Open-Transport.png"
                alt="Open transport benefits"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Three Key Advantages</h2>
            <p className="text-xl text-gray-600">
              Open transport excels in the areas that matter most to customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-brand-100 rounded-full">
                    <item.icon className="h-8 w-8 text-brand-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/step-4-pickup.png"
                alt="Vehicles perfect for open transport"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="heading-2 mb-6">Perfect for Most Vehicles</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Open transport is ideal for the vast majority of vehicles and shipping needs. 
                If you're shipping a standard passenger vehicle, open transport provides 
                excellent value and reliability.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {idealFor.map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Insurance */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Safety & Insurance</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Don't let the lower cost fool you - open transport maintains the same high 
                safety standards and comprehensive insurance coverage as enclosed transport.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold mb-2">Professional Standards</h3>
                  <p className="text-sm text-gray-600">
                    All carriers are DOT licensed, FMCSA registered, and maintain excellent safety records.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold mb-2">Comprehensive Insurance</h3>
                  <p className="text-sm text-gray-600">
                    Full cargo insurance coverage up to $1M protects your vehicle throughout transport.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold mb-2">Experienced Drivers</h3>
                  <p className="text-sm text-gray-600">
                    Professional drivers with years of experience safely handling thousands of vehicles.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/safety-insurance.jpg"
                alt="Safety and insurance coverage"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">
              No hidden fees, no surprises - just honest, competitive pricing.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-600 mb-2">$600-$900</div>
                  <div className="font-medium mb-2">Short Distance</div>
                  <div className="text-sm text-gray-600">Under 500 miles</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-600 mb-2">$800-$1,300</div>
                  <div className="font-medium mb-2">Medium Distance</div>
                  <div className="text-sm text-gray-600">500-1,500 miles</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-600 mb-2">$1,200-$1,800</div>
                  <div className="font-medium mb-2">Cross Country</div>
                  <div className="text-sm text-gray-600">Over 1,500 miles</div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  *Prices vary based on route, season, vehicle size, and current market conditions
                </p>
                <Link href="/get-quote" className="btn-primary btn-lg">
                  Get Your Exact Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p>If you've ever seen a large truck on an American highway hauling multiple cars, you've witnessed <b><Link href={''}>open auto transport</Link></b> in action. This is, without a doubt, the most common and widely used method for shipping vehicles across the United States. It's the go-to choice for individuals, dealerships, and corporations alike, thanks to its efficiency, affordability, and extensive availability. At Furious Auto Shipping, we specialize in providing secure and reliable <b>open auto transport</b> services, ensuring your vehicle arrives at its destination safely and on time.</p>

          <h2 className="heading-3 mb-4">How Open Auto Transport Works</h2>
          <p>The process is straightforward and built for scale. Your vehicle is loaded onto an open-air, multi-car carrier, which can typically hold between 5 to 10 vehicles. The cars are positioned strategically and secured with a series of sturdy straps and chains to prevent any movement during transit. Our network of professional, licensed, and insured drivers are experts at navigating the open roads, and their extensive experience ensures your vehicle is in good hands.</p>

          <h2 className="heading-3 mb-4">The Advantages of Choosing Open Auto Transport</h2>
          <p>Opting for <b><Link href={''}>open car transport</Link></b> offers a number of key benefits that make it the preferred choice for the majority of vehicle owners:</p>
          <ul className='list-disc ml-6'>
            <li className='my-2'> <b>Exceptional Affordability:</b> Open carriers can transport multiple vehicles at once, which significantly lowers the cost per car. This makes open auto transport the most budget-friendly option for shipping your vehicle, whether it’s across a few states or the entire country.</li>
            <li className='my-2'> <b>Widespread Availability and Speed:</b> The vast network of open car carriers operating across the U.S. means there is almost always a truck heading in your direction. This leads to shorter pickup windows, faster transit times, and greater flexibility in scheduling your shipment.</li>
            <li className='my-2'> <b>Reliability and Safety:</b> While exposed to the elements, an open carrier provides a level of protection far superior to driving the car yourself. It avoids the risk of accidents, road hazards, and wear and tear that come with a long-distance road trip. Our drivers are trained to handle all road conditions, and every shipment is covered by our comprehensive cargo insurance.</li>
            <li className='my-2'> <b>Ideal for Standard Vehicles:</b> For everyday cars, trucks, SUVs, and minivans, open auto transport is the perfect solution. These vehicles are built to withstand open-road conditions, and the cost-savings of this method make it an unbeatable value.</li>
          </ul>

          <h2 className="heading-3 mb-4">The Open Transport Process: A Step-by-Step Guide</h2>
          <p>Our process is designed for simplicity and transparency.</p>
          <ul className='list-decimal ml-6'>
            <li className='my-2'> <b>Get a Free Quote:</b> Start by filling out our easy online form with your pickup and delivery locations, vehicle information, and desired shipping dates. You'll receive a competitive, all-inclusive quote for your open auto transport service.</li>
            <li className='my-2'> <b>Schedule Your Shipment:</b> Once you accept the quote, a dedicated transport specialist will work with you to finalize a pickup window that fits your schedule.</li>
            <li className='my-2'> <b>Vehicle Pickup:</b> A professional driver will arrive at your designated location. Together, you will perform a thorough inspection of the vehicle, documenting its condition on the Bill of Lading.</li>
            <li className='my-2'> <b>Secure Transit:</b> Your vehicle is loaded and begins its journey. We provide real-time tracking and regular updates, so you always know your vehicle's location.</li>
            <li className='my-2'> <b>Final Delivery:</b> The driver will contact you prior to arrival at your destination. You'll perform a final inspection of your vehicle before signing the delivery paperwork.</li>
          </ul>

          <h2 className="heading-3 mb-4">Is Open Auto Transport Right for You?</h2>
          <p>For most car owners, the answer is a resounding yes. It’s the most economical, efficient, and widely used method for shipping a vehicle within the United States. If you're looking for a reliable, no-frills, and affordable way to move your daily driver, then <b><Link href={''}>open auto transport</Link></b> is the perfect choice.</p>

          </div>
          </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Open Transport FAQ</h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "Is open transport safe for my car?",
                  answer: "Absolutely. Open transport is used to ship millions of vehicles annually, including new cars from manufacturers to dealerships. The safety record is excellent, and your vehicle is fully insured."
                },
                {
                  question: "Will my car get dirty during open transport?",
                  answer: "Your vehicle may collect some dust or road film during transport, which is normal and easily washed off. This doesn't affect the vehicle's condition or value."
                },
                {
                  question: "What if it rains during transport?",
                  answer: "Cars are designed to handle weather conditions. A little rain won't damage your vehicle - modern cars are built to withstand the elements during normal driving."
                },
                {
                  question: "How many cars fit on an open carrier?",
                  answer: "Open carriers typically transport 8-10 vehicles at once, which helps keep costs low while maintaining safety and efficiency."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-600 text-white">
        <div className="container text-center">
          <h2 className="heading-2 mb-4">Ready to Ship with Open Transport?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join millions of satisfied customers who choose open transport for 
            reliable, affordable auto shipping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote" className="btn-secondary btn-lg">
              Get Free Quote
            </Link>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
              className="btn-outline btn-lg border-white  hover:bg-white hover:text-brand-600"
            >
              Call {process.env.NEXT_PUBLIC_COMPANY_PHONE}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}