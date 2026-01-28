import Link from 'next/link'
import { US_STATES } from '@/lib/utils'
import { notFound } from 'next/navigation'
import CommonHero from '@/components/CommonHero'
import CommonWhy from '@/components/CommonWhy'
import TransportProcessSection from '@/components/TransportProcessSection'
import FAQSection from '@/components/FAQSection';
import ReviewsComponent from '@/components/ReviewsComponent';

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const { fromState, toState } = await params

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
    title: `Car Shipping From ${fromStateData.name} to ${toStateData.name} | Safe, Fast & Affordable Auto Transport`,
    description: `Moving across state lines? Save time and money with our expert car shipping services. We offer reliable auto shipping from ${fromStateData.name} to ${toStateData.name}. Get a free quote today!`,

    keywords: `Auto Transport ${fromStateData.name} to ${toStateData.name}, Shipping a car from ${fromStateData.name} to ${toStateData.name}, Car shipping ${fromStateData.name} to ${toStateData.name} cost, Door-to-door auto transport, Licensed and insured carriers, Enclosed car transport`,

    alternates: {
      canonical: canonicalUrl,
    }, 

  };

}

const a  = async ()=>{
  const b = await generateMetadata.other
  return b
}


console.log(a)

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

export default async function StateToStatePage({ params }) {
  const { fromState, toState } = await params

  const fromStateData = US_STATES.find(state => state.url.toLowerCase() === fromState.toLowerCase())
  const toStateData = US_STATES.find(state => state.url.toLowerCase() === toState.toLowerCase())

  if (!fromStateData || !toStateData) {
    notFound()
  }

   const canonicalUrl = `/locations/${fromState}/${toState}`;

   const myPageSchema = { 
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://furiousautoshipping.com/#localbusiness",
            "name": "Furious Auto Shipping",
            "url": `https://furiousautoshipping.com${canonicalUrl}`,
            "telephone": "+1-888-706-8784",
            "image": "https://furiousautoshipping.com/logo.png",
            "description": `Licensed and insured auto transport company offering professional car shipping from ${fromStateData.name} to ${toStateData.name}.`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": fromStateData.name, 
              "addressCountry": "US"
            }
          },

          {
            "@type": "Service",
            "@id": "https://furiousautoshipping.com/#service",
            "serviceType": `Car Shipping From ${fromStateData.name} to ${toStateData.name}`,
            "provider": { "@id": "https://furiousautoshipping.com/#localbusiness" },
            "areaServed": [
              { "@type": "State", "name": fromStateData.name },
              { "@type": "State", "name": toStateData.name }
            ],
            "description": `Fast, safe and insured auto transport service from ${fromStateData.name} to ${toStateData.name}. Door-to-door delivery, licensed drivers, and guaranteed vehicle safety.`,
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "900-1500",
              "url": `https://furiousautoshipping.com${canonicalUrl}`,
              "description": `Estimated cost range for shipping a car from ${fromStateData.name} to ${toStateData.name}.`
            },
          },

          {
            "@type": "BreadcrumbList",
            "@id": "https://furiousautoshipping.com/#breadcrumbs",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://furiousautoshipping.com" },
              { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://furiousautoshipping.com/locations" },
              { "@type": "ListItem", "position": 3, "name": fromStateData.name, "item": `https://furiousautoshipping.com/locations/${fromState}` },
              { "@type": "ListItem", "position": 4, "name": toStateData.name, "item": `https://furiousautoshipping.com${canonicalUrl}` }
            ]
          },

          {
            "@type": "AggregateRating",
            "@id": "https://furiousautoshipping.com/#reviews",
            "ratingValue": "4.9",
            "bestRating": "5",
            "ratingCount": "421",
            "reviewCount": "421",
            "itemReviewed": { "@id": "https://furiousautoshipping.com/#localbusiness" }
          }
        ] 
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
    <>
    <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(myPageSchema) }}
        /> 
      <CommonHero h1={`Expert Auto Transport Services: Shipping Your Vehicle from ${fromStateData.name} to ${toStateData.name}`} />
      <section className="section">
        <div className="container">
          <div className="my-5">
            {/* Page Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-brand-900 mb-3">Why Professional Car Shipping is Smarter Than Driving</h2>

              <p className="text-lg text-gray-600 my-2">
                Relocating can be a complex and stressful process, and when it involves moving your vehicle across state lines, the challenges can multiply. Whether you're a student heading to college, a family starting a new chapter, a military member on assignment, or a "snowbird" escaping the winter, the journey from {fromStateData.name} to {toStateData.name} is a common route for thousands of people each year. The distance, which can span over [Insert approximate mileage, e.g., 1,200 miles], requires a careful and well-planned approach. Driving your car yourself can be an option, but it comes with a significant cost—not just in terms of gas and potential wear and tear on your vehicle, but also in time, hotel stays, and the mental fatigue of a long-distance road trip. This is where <b><Link href={['/']}>professional auto transport services</Link></b> become an invaluable solution.
              </p>
              <p className="text-lg text-gray-600 my-2">At Furious Auto Shipping, we specialize in providing a smooth, safe, and efficient vehicle shipping experience. We have an extensive network of vetted carriers who are experts in the {fromStateData.name} to {toStateData.name} corridor. Our mission is to take the stress out of your move, ensuring your vehicle arrives at its destination on time and in perfect condition.</p>
            </div>
          </div>
        </div>
      </section>


      <ReviewsComponent />

      <section className="section">
        <div className="container">
          <div className="my-5">

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
              <CommonWhy from={fromStateData.name} to={toStateData.name} />

              <h2>The Furious Auto Shipping Difference: Our Commitment to Excellence</h2>
              <p className="text-lg text-gray-600 my-2">As a leader in the auto transport industry, our reputation is built on three core pillars: Expertise, Reliability, and Customer Trust. We have cultivated our expertise over years of experience, handling thousands of successful transports. Our reliability comes from our rigorous screening of carriers and our commitment to clear, consistent communication. Most importantly, we earn your trust by providing honest, transparent, and high-quality service from your first quote to the final delivery.</p>

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


              <TransportProcessSection fromStateData2={fromStateData.name} toStateData2={toStateData.name} />


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

            <FAQSection originState={fromStateData.name} destinationState={toStateData.name} />

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

    </>
  )
}