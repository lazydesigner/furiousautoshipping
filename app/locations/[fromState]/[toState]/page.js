import Link from 'next/link'
import { US_STATES } from '@/lib/utils'
import { notFound } from 'next/navigation'

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const { fromState, toState } = params
  
  const fromStateData = US_STATES.find(state => state.url.toLowerCase() === fromState.toLowerCase())
  const toStateData = US_STATES.find(state => state.url.toLowerCase() === toState.toLowerCase())
  
  if (!fromStateData || !toStateData) {
    return {
      title: 'Route Not Found',
    }
  }

  // Construct the canonical URL using the dynamic parameter
  const canonicalUrl = `/locations/${fromState}/${toState}`;

  return {
    title: `Your Ultimate Guide to Seamless Auto Transport from ${fromStateData.name} to ${toStateData.name}`,
    description: `Planning to ship your car from ${fromStateData.name} to ${toStateData.name}? Get expert advice, transparent pricing, and reliable service. Our guide covers everything you need to know about ${fromStateData.name} to ${toStateData.name} auto transport, from cost factors to the shipping process.`,
    keywords: `Auto Transport ${fromStateData.name} to ${toStateData.name}, Shipping a car from ${fromStateData.name} to ${toStateData.name}, Car shipping ${fromStateData.name} to ${toStateData.name} cost, Door-to-door auto transport, Licensed and insured carriers, Enclosed car transport`,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// Generate static params for popular routes
export async function generateStaticParams() {
  const popularRoutes = [
    { fromState: 'ca', toState: 'tx' },
    { fromState: 'ca', toState: 'fl' },
    { fromState: 'ca', toState: 'ny' },
    { fromState: 'fl', toState: 'ny' },
    { fromState: 'fl', toState: 'ca' },
    { fromState: 'tx', toState: 'fl' },
    { fromState: 'tx', toState: 'ny' },
    { fromState: 'ny', toState: 'fl' },
    { fromState: 'ny', toState: 'ca' },
    { fromState: 'il', toState: 'fl' },
    { fromState: 'il', toState: 'ca' },
    { fromState: 'pa', toState: 'fl' },
    { fromState: 'oh', toState: 'fl' },
    { fromState: 'mi', toState: 'fl' },
    { fromState: 'nj', toState: 'fl' },
    { fromState: 'ma', toState: 'fl' },
    { fromState: 'ct', toState: 'fl' },
    { fromState: 'va', toState: 'fl' },
    { fromState: 'nc', toState: 'fl' },
    { fromState: 'ga', toState: 'fl' },
  ]
  
  return popularRoutes
}

export default function StateToStatePage({ params }) {
  const { fromState, toState } = params
  
  const fromStateData = US_STATES.find(state => state.url.toLowerCase() === fromState.toLowerCase())
  const toStateData = US_STATES.find(state => state.url.toLowerCase() === toState.toLowerCase())
  
  if (!fromStateData || !toStateData) {
    notFound()
  }

  // Generate related routes for internal linking
  const relatedFromRoutes = [
    'florida', 'california', 'texas', 'new-york', 'illinois', 'pennsylvania', 'ohio', 'michigan', 'new-jersey', 'georgia'
  ]
  .filter(state => state !== fromState.toLowerCase() && state !== toState.toLowerCase())
  .slice(0, 5)
  .map(state => ({
    code: state,
    name: US_STATES.find(s => s.url === state)?.name,
    url: `/locations/${fromState.toLowerCase()}/${state.toLowerCase()}`
  }))

  const relatedToRoutes = [
    'florida', 'california', 'texas', 'new-york', 'illinois', 'pennsylvania', 'ohio', 'michigan', 'new-jersey', 'georgia'
  ]
  .filter(state => state !== fromState.toUpperCase() && state !== toState.toUpperCase())
  .slice(0, 5)
  .map(state => ({
    code: state,
    name: US_STATES.find(s => s.url === state)?.name,
    url: `/locations/${state.toLowerCase()}/${toState.toLowerCase()}`
  }))

  // Common routes for reference
  const commonRoutes = [
    { from: 'california', to: 'florida', label: 'California to Florida' },
    { from: 'new-york', to: 'florida', label: 'New York to Florida' },
    { from: 'california', to: 'texas', label: 'California to Texas' },
    { from: 'illinois', to: 'florida', label: 'Illinois to Florida' },
    { from: 'texas', to: 'california', label: 'Texas to California' },
    { from: 'pennsylvania', to: 'florida', label: 'Pennsylvania to Florida' },
    { from: 'ohio', to: 'florida', label: 'Ohio to Florida' },
    { from: 'michigan', to: 'florida', label: 'Michigan to Florida' },
  ]
  .filter(route => 
    !(route.from === fromState.toUpperCase() && route.to === toState.toUpperCase())
  )
  .slice(0, 6)

  return (
    <section className="section">
        <div className="container">
        <div className="my-5">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Expert Auto Transport Services: Shipping Your Vehicle from {fromStateData.name} to {toStateData.name}
            </h1>
            <p className="text-lg text-gray-600 my-2">
              Relocating can be a complex and stressful process, and when it involves moving your vehicle across state lines, the challenges can multiply. Whether you're a student heading to college, a family starting a new chapter, a military member on assignment, or a "snowbird" escaping the winter, the journey from {fromStateData.name} to {toStateData.name} is a common route for thousands of people each year. The distance, which can span over [Insert approximate mileage, e.g., 1,200 miles], requires a careful and well-planned approach. Driving your car yourself can be an option, but it comes with a significant cost—not just in terms of gas and potential wear and tear on your vehicle, but also in time, hotel stays, and the mental fatigue of a long-distance road trip. This is where <b><Link href={['/']}>professional auto transport services</Link></b> become an invaluable solution.
            </p>
            <p className="text-lg text-gray-600 my-2">At Furious Auto Shipping, we specialize in providing a smooth, safe, and efficient vehicle shipping experience. We have an extensive network of vetted carriers who are experts in the {fromStateData.name} to {toStateData.name} corridor. Our mission is to take the stress out of your move, ensuring your vehicle arrives at its destination on time and in perfect condition.</p>
          </div>

          {/* CTA Section */}
          <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-brand-900 mb-3">
                Get Your Free Quote Now
              </h2>
              <p className="text-brand-700 mb-4">
                Instant pricing for auto transport from {fromStateData.name} to {toStateData.name}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/get-quote"
                  className="btn-primary btn-lg"
                >
                  Get Free Instant Quote
                </Link>
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                  className="btn-outline btn-lg"
                >
                  Call {process.env.NEXT_PUBLIC_COMPANY_PHONE}
                </a>
              </div>
            </div>
          </div>

          {/* Service Information */}
          <div className="prose prose-lg max-w-none mb-8">
            <h2>Why Choose Professional Auto Transport for Your {fromStateData.name} to {toStateData.name} Relocation?</h2>
            <p className="text-lg text-gray-600 my-2">
              Shipping your vehicle with a professional company offers a multitude of benefits that often outweigh the perceived savings of a DIY drive.
            </p> 
            <ul>
              <li><b>Safety and Security:</b> Our carriers are fully insured, and our drivers are seasoned professionals who know the {fromStateData.name} to {toStateData.name} route inside and out. Your vehicle is protected from road hazards, unpredictable weather, and potential accidents.</li>
              <li><b>Time and Efficiency:</b> A professional driver can cover a significant distance much faster and more consistently than an individual. While a long-distance drive can take [Insert estimated driving time, e.g., 2-3 days] of constant driving, our services ensure your vehicle is on its way while you focus on other aspects of your move.</li>
              <li><b>Cost-Effectiveness:</b> When you factor in the cost of gas, meals, lodging, and potential time off from work, the total expense of driving yourself can quickly exceed the cost of professional transport. Our services provide a transparent, all-inclusive quote, helping you budget for your move more effectively.</li>
              <li><b>Reduced Wear and Tear:</b> Shipping your vehicle saves it from the thousands of miles of wear on the engine, tires, and other components, helping to preserve its value and longevity.</li>
            </ul>

            <h2>The Furious Auto Shipping Difference: Our Commitment to Excellence</h2>
            <p  className="text-lg text-gray-600 my-2">As a leader in the auto transport industry, our reputation is built on three core pillars: Expertise, Reliability, and Customer Trust. We have cultivated our expertise over years of experience, handling thousands of successful transports. Our reliability comes from our rigorous screening of carriers and our commitment to clear, consistent communication. Most importantly, we earn your trust by providing honest, transparent, and high-quality service from your first quote to the final delivery.</p>

            <h3>Understanding the Cost to Ship a Car from {fromStateData.name} to {toStateData.name}</h3>
            <p>One of the first questions on every customer's mind is, "How much will it cost?" The price of <b><Link href={''}>auto transport from {fromStateData.name} to {toStateData.name}</Link></b> is not a fixed number. It is influenced by several key factors:</p>

            <ul>
              <li><b>Distance:</b> The approximately [Insert approximate mileage, e.g., 1,200-mile] route from {fromStateData.name} to {toStateData.name} is a major factor in determining the base cost.</li>
              <li><b>Vehicle Specifications:</b> The make, model, year, and condition of your vehicle all play a role. Larger or heavier vehicles, like trucks or SUVs, require more space on the carrier and may incur a higher fee.</li>
              <li><b>Transport Type (Open vs. Enclosed):</b> We offer two primary types of transport to suit your needs and budget:
                <ul>
                  <li><b><Link href={'/services/open-auto-transport'}>Open Auto Transport</Link>:</b> This is the most common and cost-effective method. Your vehicle is loaded onto an open-air carrier, similar to the ones you see on highways. It's a reliable option for standard vehicles and is generally the quickest to book.</li>
                  <li><b><Link href={'/services/enclosed-auto-transport'}>Enclosed Auto Transport</Link>:</b> For luxury, classic, or high-value vehicles, enclosed transport provides maximum protection from road debris and weather. The vehicle is transported in a covered trailer, offering a higher level of security, albeit at a higher cost.</li>
                </ul>
              </li>
              <li><b>Timing and Seasonality:</b> The auto transport industry is highly seasonal. The route from {fromStateData.name} to {toStateData.name} is especially popular during [Insert peak seasons, e.g., fall and spring], often referred to as "snowbird season." Booking in advance during these times is crucial to securing the best rate and a timely pickup.</li>
              <li><b>Pickup and Delivery Locations:</b> While we offer convenient door-to-door service, accessibility to major highways and urban centers can affect the cost and transit time. Remote or difficult-to-access locations may require a bit more coordination.</li>
            </ul>

            <h3>The Seamless Auto Transport Process: From {fromStateData.name} to {toStateData.name}</h3>
            <p className="text-lg text-gray-600 my-2">We have refined our process to be as simple and transparent as possible. Here’s a step-by-step overview of how we handle your shipment:</p>
            <ul>
              <li><b>Get Your Free Quote:</b> Start by filling out our easy online quote form. Provide basic information about your vehicle, the pickup location in {fromStateData.name}, and the delivery location in {toStateData.name}. Our team will quickly provide a competitive and transparent quote with no hidden fees.</li>
              <li><b>Schedule Your Shipment:</b> Once you accept the quote, a dedicated transport coordinator will work with you to schedule the pickup. We strive to provide flexible pickup windows that align with your schedule.</li>
              <li><b>Vehicle Preparation:</b> Before pickup, we recommend a few simple steps to prepare your vehicle. We provide a detailed checklist to ensure a smooth transition, including checking fluid levels, removing personal items, and leaving a quarter tank of gas.</li>
              <li><b>The Pickup:</b> A professional, fully insured driver will arrive at your designated location in {fromStateData.name}. Together, you will conduct a thorough inspection of the vehicle and document its current condition on a Bill of Lading. This document is your record and protection.</li>
              <li><b>Secure Transit:</b> Your vehicle is loaded onto the carrier and begins its journey to {toStateData.name}. We provide real-time tracking and updates, allowing you to monitor your vehicle's progress and stay informed throughout the transport.</li>
              <li><b>The Delivery:</b> The driver will contact you as they approach the delivery location in {toStateData.name}. At the time of delivery, you will perform a final inspection of your vehicle and sign the Bill of Lading to confirm its condition upon arrival.</li>
            </ul>

            <h2>Expert Tips for Your {fromStateData.name} to {toStateData.name} Vehicle Shipment</h2>
            <p className="text-lg text-gray-600 my-2">We believe in empowering our customers with knowledge. Here are a few expert tips to help you ensure a successful transport:</p>

            <ul>
              <li>Book in Advance: For the best rates and scheduling flexibility, we recommend booking your transport at least [Insert suggested lead time, e.g., 2-3 weeks] in advance.</li>
              <li>Read Reviews and Check Credentials: Before choosing a company, verify their credentials and read reviews. Look for companies with a strong track record, positive testimonials, and proper licensing.</li>
              <li>Communicate Clearly: Provide your transport coordinator with as much detail as possible about your vehicle and any specific location challenges. This ensures a smoother pickup and delivery.</li> 
            </ul>


          </div>

          {/* Related Routes */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Routes from same origin */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">
                Other Routes from {fromStateData.name}
              </h3>
              <div className="space-y-2">
                {relatedFromRoutes.map((route) => (
                  <Link
                    key={route.url}
                    href={route.url}
                    className="block text-brand-600 hover:text-brand-800 hover:underline"
                  >
                    {fromStateData.name} to {route.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Routes to same destination */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">
                Other Routes to {toStateData.name}
              </h3>
              <div className="space-y-2">
                {relatedToRoutes.map((route) => (
                  <Link
                    key={route.url}
                    href={route.url}
                    className="block text-brand-600 hover:text-brand-800 hover:underline"
                  >
                    {route.name} to {toStateData.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Popular Routes */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">Popular Auto Transport Routes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {commonRoutes.map((route) => (
                <Link
                  key={`${route.from}-${route.to}`}
                  href={`/locations/${route.from.toLowerCase()}/${route.to.toLowerCase()}`}
                  className="block text-brand-600 hover:text-brand-800 hover:underline text-sm"
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            <h2>Our Commitment to {fromStateData.name} and {toStateData.name}</h2>
            <p className="text-lg text-gray-600 my-2">While our services span the entire continental United States, we have a special focus on the popular and vital corridor between {fromStateData.name} and {toStateData.name}. We understand the unique logistics of this route, from the busy metropolitan areas of [Insert a major city in State A, e.g., New York City] to the sprawling landscapes of [Insert a major city in State B, e.g., Orlando or Miami]. Our experience and local knowledge in both states allow us to provide a level of service that is unmatched. We are not just moving cars; we are helping individuals and families make a successful transition to their new home.</p>

            <p className="text-lg text-gray-600 my-2">When you're ready to make your move, trust the experts who have handled thousands of successful transports just like yours. Get your free, no-obligation quote today and discover the peace of mind that comes with professional auto transport.</p>


          </div>

           

          {/* Bottom CTA */}
          <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Ship Your Vehicle from {fromStateData.name} to {toStateData.name}?
            </h3>
            <p className="text-gray-300 mb-6">
              Get your free quote today and experience professional auto transport service 
              with competitive rates and excellent customer support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-quote"
                className="btn-secondary btn-lg"
              >
                Get Free Quote
              </Link>
              <Link
                href="/contact"
                className="btn-outline btn-lg border-white hover:bg-white hover:text-gray-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}