import Link from 'next/link'
import Image from 'next/image'
import { CheckCircleIcon, BoltIcon, ClockIcon, TruckIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Urgent & Fast: The Guide to Expedited Auto Transport',
  description: 'Need your car shipped in a hurry? Our expedited auto transport service provides priority pickup, guaranteed timelines, and direct routing. Learn how to get your vehicle on the road quickly and safely with our expert services.',
  keywords: 'expedited auto transport, fast car shipping, urgent vehicle transport, priority auto shipping, express car delivery',
  
  alternates: {
      canonical: '/services/expedited-auto-transport',
    },
}

const benefits = [
  'Priority carrier assignment within 24 hours',
  'Faster pickup times (typically 1-2 days)',
  'Express delivery in 2-7 days nationwide',
  'Dedicated customer support team',
  'Real-time tracking and frequent updates',
  'Same comprehensive insurance coverage'
]

const scenarios = [
  {
    icon: BoltIcon,
    title: 'Job Relocation',
    description: 'Started a new job and need your car quickly? Expedited service gets you mobile fast.',
    timeframe: '2-5 days'
  },
  {
    icon: ClockIcon,
    title: 'Emergency Situations',
    description: 'Family emergencies or unexpected events requiring immediate vehicle transport.',
    timeframe: '1-4 days'
  },
  {
    icon: TruckIcon,
    title: 'Military Deployment',
    description: 'Short-notice PCS moves or deployment schedules requiring rapid vehicle shipping.',
    timeframe: '2-6 days'
  }
]

const comparison = [
  {
    feature: 'Carrier Assignment',
    standard: '2-7 days',
    expedited: '24-48 hours',
    highlight: true
  },
  {
    feature: 'Pickup Time',
    standard: '3-10 days',
    expedited: '1-3 days',
    highlight: true
  },
  {
    feature: 'Transit Time',
    standard: '7-14 days',
    expedited: '2-7 days',
    highlight: true
  },
  {
    feature: 'Cost Premium',
    standard: 'Standard Rate',
    expedited: '+$200-400',
    highlight: false
  },
  {
    feature: 'Tracking Updates',
    standard: 'Regular',
    expedited: 'Frequent',
    highlight: false
  },
  {
    feature: 'Support Level',
    standard: 'Standard',
    expedited: 'Priority',
    highlight: false
  }
]

export default function ExpeditedServicePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-1 mb-6">When Time Is Everything: Expedited Auto Transport Services</h1>
              <p className="text-xl leading-relaxed mb-8">
                When time is critical, our expedited auto transport service provides 
                priority carrier assignment and express delivery. Get your vehicle 
                shipped fast with guaranteed timeline commitments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-quote" className="btn-secondary btn-lg">
                  Get Expedited Quote
                </Link>
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                  className="btn-outline btn-lg border-white hover:bg-white hover:text-brand-600"
                >
                  Call for Rush Service
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/expedited-hero.jpg"
                alt="Expedited auto transport service"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* When You Need Expedited */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">When You Need Expedited Service</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Life doesn't always give you weeks to plan. Our expedited service 
              is designed for situations when you need your vehicle fast.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {scenarios.map((scenario) => (
              <div key={scenario.title} className="bg-white rounded-lg p-6 shadow-md text-center border border-gray-200">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-brand-100 rounded-full">
                    <scenario.icon className="h-8 w-8 text-brand-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{scenario.title}</h3>
                <p className="text-gray-600 mb-4">{scenario.description}</p>
                <div className="bg-brand-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-brand-700">Typical Timeline</div>
                  <div className="text-lg font-bold text-brand-600">{scenario.timeframe}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Expedited Service Benefits</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our expedited service isn't just faster - it includes priority 
                handling, dedicated support, and enhanced communication throughout 
                the entire process.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/images/services/expedited-benefits.jpg"
                alt="Expedited service benefits"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Standard vs Expedited Comparison */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Standard vs Expedited Comparison</h2>
            <p className="text-xl text-gray-600">
              See how expedited service speeds up every step of the process.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-brand-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">Standard Service</th>
                    <th className="px-6 py-4 text-center font-semibold">Expedited Service</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparison.map((item, index) => (
                    <tr key={index} className={item.highlight ? 'bg-green-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{item.feature}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{item.standard}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={item.highlight ? 'text-green-600 font-semibold' : 'text-gray-600'}>
                          {item.expedited}
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
                src="/images/services/expedited-pricing.jpg"
                alt="Expedited service pricing"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="heading-2 mb-6">Expedited Service Investment</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Expedited service typically adds $200-400 to your shipping cost, 
                depending on distance and urgency level. Consider the value of 
                having your vehicle when you need it most.
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                <h3 className="font-semibold text-lg mb-4">Expedited Surcharges:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Standard Expedited (3-5 days)</span>
                    <span className="font-medium text-brand-600">+$200-300</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Express Service (1-3 days)</span>
                    <span className="font-medium text-brand-600">+$300-400</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency Rush (24-48 hours)</span>
                    <span className="font-medium text-brand-600">+$400-600</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-brand-800 mb-2">Worth the Investment When:</h4>
                <ul className="text-sm text-brand-700 space-y-1">
                  <li className='my-2'>• Starting a new job immediately</li>
                  <li className='my-2'>• Handling family emergencies</li>
                  <li className='my-2'>• Managing tight military schedules</li>
                  <li className='my-2'>• Avoiding rental car costs</li>
                </ul>
              </div>
              
              <Link href="/get-quote" className="btn-primary btn-lg">
                Get Expedited Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Expedited Service Timeline</h2>
            <p className="text-xl text-gray-600">
              From quote to delivery - see how we accelerate every step.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-brand-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Quote & Book</h3>
                <p className="text-sm text-gray-600">Get instant quote and book expedited service</p>
                <div className="text-xs text-brand-600 font-medium mt-2">Same Day</div>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Carrier Assignment</h3>
                <p className="text-sm text-gray-600">Priority assignment to available carrier</p>
                <div className="text-xs text-brand-600 font-medium mt-2">24-48 Hours</div>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Fast Pickup</h3>
                <p className="text-sm text-gray-600">Quick vehicle pickup and inspection</p>
                <div className="text-xs text-brand-600 font-medium mt-2">1-3 Days</div>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Express Delivery</h3>
                <p className="text-sm text-gray-600">Priority transport and delivery</p>
                <div className="text-xs text-brand-600 font-medium mt-2">2-7 Days Total</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
                  <p className='my-2'>In a world that moves at a breakneck pace, sometimes a standard auto transport timeline just won't cut it. Whether you've just been assigned a last-minute job relocation, bought a dream car at an auction and need it delivered for a show, or are facing an unexpected emergency, a delay of even a few days can be a significant problem. In these situations, "standard" shipping won't do; you need a solution that prioritizes speed and efficiency above all else. This is where <b><Link href={''}>expedited auto transport</Link></b> comes in.</p>
                  <p className='my-2'>At <b><Link href={'/'}>Furious Auto Shipping</Link></b>, we specialize in providing fast, reliable, and priority-driven vehicle shipping services. Our expedited transport option is designed for those critical moments when you need your vehicle moved as quickly as humanly and logistically possible. We understand that time is a valuable commodity, and our goal is to deliver not just your car, but also the peace of mind that comes with knowing your urgent timeline will be met.</p>

                  <h2 className="heading-2 mb-6">What is Expedited Auto Transport?</h2>
                  <p className='my-2'>Expedited auto transport is a premium service that places your vehicle at the top of the priority list. While standard auto transport typically operates on a flexible 3-5 day pickup window, expedited service dramatically shrinks that window. In most cases, we can arrange for a pickup within 24 to 48 hours of your request. This service is not just about a faster pickup; it's about a commitment to a direct, streamlined process from start to finish.</p>

                  <h3  className="heading-4 mb-6">Key features of our expedited service include:</h3>
                  <ul>
                    <li className='my-2'>Priority Dispatch: Your order is flagged for immediate attention, and our logistics team works tirelessly to find the fastest available carrier.</li>
                    <li className='my-2'>Reduced Pickup Window: Instead of a multi-day window, we work to get a driver to your location for pickup in a minimal timeframe.</li>
                    <li className='my-2'>Minimal Stops: Expedited shipments are often routed for the most direct path, with fewer stops along the way. This is especially true for hotshot or enclosed carriers that may be moving fewer vehicles at a time.</li>
                    <li className='my-2'>Dedicated Communication: Your shipment receives priority status with our customer service team, ensuring you get real-time updates and direct communication throughout the journey.</li>
                  </ul>

                  <h2 className="heading-2 mb-6">When Is Expedited Auto Transport the Right Choice?</h2>
                  <p className='my-2'>While expedited shipping is a powerful tool, it's not always necessary. It's a premium service that comes with a higher cost due to the prioritization of your shipment. It's the ideal solution in several specific scenarios:</p>
                  <ul>
                    <li className='my-2'><b>Last-Minute Relocations:</b> A sudden job transfer, military deployment, or personal emergency requires you to move your vehicle on a tight schedule.</li>
                    <li className='my-2'><b>Vehicle Auctions or Dealerships:</b> If you’ve just won a bid or purchased a car and need it delivered to a specific location by a strict deadline.</li>
                    <li className='my-2'><b>Time-Sensitive Events:</b> Transporting a classic, luxury, or race car to an upcoming show, exhibition, or track day.</li>
                    <li className='my-2'><b>Emergency Situations:</b> In the event of a natural disaster, personal crisis, or other unforeseen event that necessitates immediate vehicle movement.</li>
                    <li className='my-2'><b>Seasonal Deadlines:</b> For snowbirds or frequent travelers who need their vehicle moved by a specific date to align with travel plans.</li>
                  </ul>

                  <h2 className="heading-2 mb-6">How Expedited Transport Differs from Standard Shipping</h2>
                  <p className='my-2'>The primary difference between expedited and standard shipping is the <b>speed of the pickup and the commitment to a timeline</b>. In standard shipping, carriers fill their trailers with vehicles based on proximity and route efficiency. Your car is one of many on a long-haul truck, and the pickup date can be flexible.</p>
                  <p className='my-2'>With expedited service, your vehicle is a top priority. Our dispatch team actively searches for a carrier who can accommodate your urgent timeline, even if it means re-routing or using a smaller, more nimble truck. This personalized attention and guaranteed speed come at a premium, as the carrier may be forgoing other, less urgent jobs to handle your shipment.</p>

                  <h3  className="heading-4 mb-6">The Cost of Expedited Service: What to Expect</h3>
                  <p className='my-2'><b><Link href={''}>Expedited auto transport</Link></b> is a premium service, and as such, it typically costs more than a standard shipment. The price is determined by several factors, including:</p>
                  <ul>
                    <li className='my-2'><b>Urgency:</b> The more immediate your need for a pickup, the higher the cost. A same-day or next-day pickup will be priced accordingly.</li>
                    <li className='my-2'><b>Route and Distance:</b> Long-distance, cross-country expedited shipments will naturally cost more than a short-distance, interstate move.</li>
                    <li className='my-2'><b>Vehicle Type:</b> Larger or inoperable vehicles require specialized equipment and may increase the expedited fee.</li>
                    <li className='my-2'><b>Market Conditions:</b> Supply and demand in the auto transport market can influence the cost. If a route is already heavily saturated with carriers, the expedited fee may be lower than a less-traveled route.</li>
                  </ul>
                  <p className='my-2'>While the cost is higher, the value lies in the speed, reliability, and guaranteed timeline. It’s an investment in meeting your critical deadlines and reducing stress.</p>

                  <h2 className="heading-2 mb-6">The Furious Auto Shipping Expedited Transport Process</h2>
                  <p className='my-2'>Our streamlined process is designed to get your vehicle on the road with minimal fuss:</p>
                  <ul className='list-decimal ml-5'>
                    <li className='my-2'><b>Get Your Expedited Quote:</b> Contact us by phone or fill out our online form and specify your need for expedited service. Our specialists will provide you with a detailed quote that reflects the priority nature of your request.</li>
                    <li className='my-2'><b>Confirm and Book:</b> Once you accept the quote, your order is immediately prioritized. We'll work with you to confirm the fastest possible pickup date and time.</li>
                    <li className='my-2'><b>Expedited Pickup:</b> A professional, vetted carrier will arrive at your designated location within the agreed-upon expedited timeframe (typically 24-48 hours). A thorough inspection and Bill of Lading are completed.</li>
                    <li className='my-2'><b>Direct Transit:</b> Your vehicle is loaded and sent on a direct route to its destination. Our team provides consistent updates, and you can always reach us for the latest information.</li>
                    <li className='my-2'><b>Prompt Delivery:</b> The driver will contact you before arrival. You’ll have the opportunity to inspect your vehicle one last time before signing the final delivery paperwork.</li>
                  </ul>

                  <h2 className="heading-2 mb-6">Trust the Experts for Your Urgent Transport Needs</h2>
                  <p className='my-2'>Expedited auto transport is a niche service that requires a high level of expertise and a reliable network of carriers. Choosing an experienced company is crucial to ensuring your urgent shipment goes off without a hitch. At <b>Furious Auto Shipping</b>, we have a proven track record of handling time-sensitive shipments with professionalism and precision. Our commitment to transparent communication and a seamless process means you can trust us to get your vehicle where it needs to be, when it needs to be there.</p>
                  <p className='my-2'>Don’t let a tight deadline cause you unnecessary stress. Contact us today for an expedited <b><Link href={'/get-quote'}>auto transport quote</Link></b> and experience the fastest, most reliable way to ship your vehicle.</p>



        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-600 text-white">
        <div className="container text-center">
          <h2 className="heading-2 mb-4">Need Your Vehicle Fast?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let time constraints stress you out. Our expedited service 
            gets your vehicle where you need it, when you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote" className="btn-secondary btn-lg">
              Get Expedited Quote
            </Link>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
              className="btn-outline btn-lg border-white   hover:bg-white hover:text-brand-600"
            >
              Call for Rush Service
            </a>
          </div>
          <p className="text-sm text-brand-200 mt-4">
            Available 24/7 for emergency and expedited requests
          </p>
        </div>
      </section>
    </div>
  )
}