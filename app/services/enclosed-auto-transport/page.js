import Link from 'next/link'
import Image from 'next/image'
import { CheckCircleIcon, ShieldCheckIcon, StarIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Enclosed Auto Transport | Premium Car Shipping Protection',
  description: 'Protect your high-value vehicle with our enclosed auto transport services. Learn about the benefits of a covered trailer and why it\'s the premium choice for luxury, classic, and exotic car shipping.',
  keywords: 'enclosed auto transport, luxury car shipping, classic car transport, covered car shipping, premium auto transport',
  
  alternates: {
      canonical: '/services/enclosed-auto-transport',
    },
}

const benefits = [
  'Complete protection from weather and road debris',
  'Ideal for luxury, classic, and exotic vehicles',
  'Limited vehicle exposure during loading/unloading',
  'Professional handling by experienced drivers',
  'Enhanced security throughout transport',
  'Climate-controlled environment available'
]

const idealVehicles = [
  'Luxury vehicles (BMW, Mercedes, Audi, Lexus)',
  'Classic and vintage cars',
  'Exotic and high-performance vehicles',
  'Custom and modified vehicles',
  'Convertibles and low-clearance cars',
  'Vehicles worth $50,000 or more'
]

const comparison = [
  {
    feature: 'Weather Protection',
    open: 'Limited',
    enclosed: 'Complete',
    highlight: true
  },
  {
    feature: 'Debris Protection',
    open: 'Minimal',
    enclosed: 'Full Coverage',
    highlight: true
  },
  {
    feature: 'Security',
    open: 'Standard',
    enclosed: 'Enhanced',
    highlight: false
  },
  {
    feature: 'Vehicle Capacity',
    open: '8-10 cars',
    enclosed: '2-6 cars',
    highlight: false
  },
  {
    feature: 'Cost',
    open: 'Standard',
    enclosed: '+40-60%',
    highlight: false
  },
  {
    feature: 'Availability',
    open: 'High',
    enclosed: 'Moderate',
    highlight: false
  }
]

export default function EnclosedTransportPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-1 mb-6">The Premium Standard: Secure Your Vehicle with Enclosed Auto Transport</h1>
              <p className="text-xl leading-relaxed mb-8">
                Premium protection for your valuable vehicles. Our enclosed transport service 
                provides complete coverage from weather, debris, and road conditions - perfect 
                for luxury, classic, and high-value cars.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-quote" className="btn-secondary btn-lg">
                  Get Enclosed Quote
                </Link>
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                  className="btn-outline btn-lg border-white   hover:bg-white hover:text-brand-600"
                >
                  Call for Expert Advice
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/enclosed-bg.png"
                alt="Enclosed auto transport trailer"
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
            <h2 className="heading-2 mb-4">Why Choose Enclosed Transport?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When your vehicle deserves the highest level of protection, enclosed transport 
              provides peace of mind with premium coverage and professional handling.
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
                src="/images/Enclosed-Transport.png"
                alt="Enclosed transport benefits"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Vehicles */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Perfect for These Vehicles</h2>
            <p className="text-xl text-gray-600">
              Enclosed transport is recommended for vehicles that require extra protection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {idealVehicles.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-brand-100 rounded-full">
                    <ShieldCheckIcon className="h-8 w-8 text-brand-600" />
                  </div>
                </div>
                <p className="font-medium text-gray-900">{vehicle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Open vs Enclosed Comparison</h2>
            <p className="text-xl text-gray-600">
              See how enclosed transport compares to open transport.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-brand-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">Open Transport</th>
                    <th className="px-6 py-4 text-center font-semibold">Enclosed Transport</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparison.map((item, index) => (
                    <tr key={index} className={item.highlight ? 'bg-brand-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{item.feature}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{item.open}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={item.highlight ? 'text-brand-600 font-semibold' : 'text-gray-600'}>
                          {item.enclosed}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/Enclosed-Transport.png"
                alt="Enclosed transport pricing"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="heading-2 mb-6">Investment in Protection</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Enclosed transport typically costs 40-60% more than open transport, but provides 
                unmatched protection for your valuable vehicle. Consider it insurance for your investment.
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                <h3 className="font-semibold text-lg mb-4">Typical Cost Breakdown:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Standard Route (1,000 miles)</span>
                    <span className="font-medium">$1,400 - $1,800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cross-Country (2,500+ miles)</span>
                    <span className="font-medium">$2,200 - $3,000</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Premium over open transport</span>
                    <span>+40% to +60%</span>
                  </div>
                </div>
              </div>
              
              <Link href="/get-quote" className="btn-primary btn-lg">
                Get Enclosed Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p>When a car is more than just transportation, it deserves a premium level of care. For owners of luxury, classic, exotic, or collectible vehicles, <b><Link  href={''}>enclosed auto transport</Link></b> is the only logical choice. This service is specifically designed to provide the highest level of protection from the elements, road debris, and potential damage during its journey. At Furious Auto Shipping, we are the trusted experts in providing secure and professional <b><Link  href={''}>enclosed car transport</Link></b> services.</p>

                  <h2 className="heading-3 mb-4">How Enclosed Auto Transport Provides Superior Protection</h2>
                  <p>Unlike open carriers, your vehicle is loaded into a fully covered, enclosed trailer. This creates a secure, controlled environment that shields your car from every external factor it might face on the open road. Our specialized enclosed carriers are equipped with advanced features designed to handle high-end vehicles:</p>
                  <ul>
                    <li className='my-2'><b>Hydraulic Liftgates:</b> These systems ensure a safe and level entry and exit for vehicles with very low ground clearance, eliminating the risk of scraping or damage.</li>
                    <li className='my-2'><b>Soft-Tie Straps:</b> Instead of traditional chains or hard-fasteners, soft-tie straps secure the vehicle by its tires, preventing any stress on the suspension or chassis.</li>
                    <li className='my-2'><b>Hard-Sided Protection:</b> The trailer's sealed, solid walls provide a robust barrier against road dust, rain, snow, hail, and flying rocks.</li>
                  </ul>

                  <h2 className="heading-3 mb-4">Key Benefits of Choosing Enclosed Auto Transport</h2>
                  <p>While it comes at a higher cost, the peace of mind and protection offered by enclosed car transport are invaluable for certain vehicles:</p>
                  <ul>
                    <li className='my-2'><b>Absolute Protection:</b> Your vehicle remains in pristine condition from pickup to delivery, protected from all weather conditions and road debris. This is crucial for maintaining the show-quality finish of a classic or the showroom shine of a luxury car.</li>
                    <li className='my-2'><b>Enhanced Security:</b> An enclosed trailer adds a layer of security by making your vehicle invisible to potential thieves or vandals. It protects the car from the curious eyes of the public and ensures it arrives discreetly.</li>
                    <li className='my-2'><b>Expert Handling:</b> Enclosed auto transport carriers are typically run by experienced drivers who specialize in handling high-end and unique vehicles. They are meticulous in their handling and loading procedures, understanding the value and care required for your car.</li>
                    <li className='my-2'><b>Ideal for Specific Vehicles:</b> This service is highly recommended for:
                      <ul>
                        <li className='my-2'><b>Classic and Vintage Cars:</b> To preserve their original condition and value.</li>
                        <li className='my-2'><b>Luxury and Exotic Cars:</b> Such as Ferraris, Lamborghinis, and Porsches.</li>
                        <li className='my-2'><b>Show Cars and Race Cars:</b> To ensure they arrive ready for their event without a scratch.</li>
                        <li className='my-2'><b>Vehicles with Custom Paint or Finishes:</b> To protect delicate surfaces.</li>
                      </ul>
                    </li>
                  </ul>

                  <h2 className="heading-3 mb-4">The Enclosed Transport Process</h2>
                  <p>Our premium process is tailored to the needs of our most discerning clients.</p>
                  <ul className='list-disc'>
                    <li className='my-2'><b>Get a Specialized Quote:</b> Contact our team directly to discuss your specific vehicle and transport needs. We'll provide a transparent quote for your enclosed auto transport service.</li>
                    <li className='my-2'><b>Schedule Your Priority Shipment:</b> Our logistics team will work to schedule a pickup that aligns with your timeline, prioritizing your shipment to find the right specialized carrier.</li>
                    <li className='my-2'><b>Meticulous Pickup:</b> The driver will conduct a thorough, detailed inspection of your vehicle, documenting its condition with high-resolution photos and notes on the Bill of Lading.</li>
                    <li className='my-2'><b>Secure Transit:</b> Your vehicle is loaded and securely fastened inside the enclosed trailer. You'll receive updates on its journey, with direct access to our team for any questions.</li>
                    <li className='my-2'><b>Protected Delivery:</b> The driver will deliver your vehicle to your chosen destination. You'll perform a final inspection to confirm its pristine condition before signing the delivery paperwork.</li>
                  </ul>

                  <h2 className="heading-3 mb-4">An Investment in Your Vehicle's Value</h2>
                  <p>Choosing <b><Link href={''}>enclosed auto transport</Link></b> is not just a service; it's an investment in your vehicle’s preservation. It’s the peace of mind that comes with knowing your cherished car is in the best possible hands. When standard shipping isn't enough, trust our expertise to deliver your valuable vehicle with the care it deserves.</p>


          </div>
          </section>

      {/* Customer Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">What Enclosed Customers Say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "My 1967 Mustang needed the best protection available. The enclosed service 
                was worth every penny - my car arrived in perfect condition without a single 
                scratch or speck of dust."
              </p>
              <div className="text-sm">
                <span className="font-medium">Michael Chen</span>
                <span className="text-gray-500"> - Classic Car Owner</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Shipped my Porsche 911 with enclosed transport. The peace of mind was 
                incredible - knowing my car was completely protected from weather and 
                debris during the cross-country journey."
              </p>
              <div className="text-sm">
                <span className="font-medium">Sarah Johnson</span>
                <span className="text-gray-500"> - Luxury Vehicle Owner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Enclosed Transport FAQ</h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "Is enclosed transport worth the extra cost?",
                  answer: "For luxury, classic, or high-value vehicles, enclosed transport provides essential protection that often exceeds the premium cost. Consider it insurance for your investment."
                },
                {
                  question: "How much longer does enclosed transport take?",
                  answer: "Enclosed transport typically takes the same time as open transport, though there may be slightly less availability on some routes, potentially adding 1-2 days."
                },
                {
                  question: "What's included with enclosed transport?",
                  answer: "Complete weather protection, debris shielding, enhanced security, professional handling, and the same comprehensive insurance coverage as open transport."
                },
                {
                  question: "Can I track my vehicle during enclosed transport?",
                  answer: "Yes, you'll receive the same tracking capabilities and driver contact information as with open transport, plus additional check-ins due to the premium service level."
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
          <h2 className="heading-2 mb-4">Protect Your Investment</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Give your valuable vehicle the premium protection it deserves with our 
            enclosed auto transport service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote" className="btn-secondary btn-lg">
              Get Enclosed Quote
            </Link>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
              className="btn-outline btn-lg border-white hover:bg-white hover:text-brand-600"
            >
              Speak to Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}