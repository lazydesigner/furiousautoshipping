import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { MapPinIcon, TruckIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { US_STATES } from '@/lib/utils'
import FAQ from '@/components/FAQ';

// Popular destinations from each state
const stateDestinations = {
  california: [
    { state: 'TX', name: 'Texas', distance: 1200, price: '900-1300', time: '5-7 days', popularity: 'High' },
    { state: 'FL', name: 'Florida', distance: 2400, price: '1200-1800', time: '7-10 days', popularity: 'High' },
    { state: 'NY', name: 'New York', distance: 2800, price: '1400-2000', time: '8-12 days', popularity: 'High' },
    { state: 'IL', name: 'Illinois', distance: 2000, price: '1100-1600', time: '6-9 days', popularity: 'Medium' },
    { state: 'AZ', name: 'Arizona', distance: 400, price: '400-700', time: '2-4 days', popularity: 'High' },
  ],
  florida: [
    { state: 'NY', name: 'New York', distance: 1100, price: '800-1200', time: '4-6 days', popularity: 'High' },
    { state: 'CA', name: 'California', distance: 2400, price: '1200-1800', time: '7-10 days', popularity: 'High' },
    { state: 'TX', name: 'Texas', distance: 1000, price: '700-1100', time: '4-6 days', popularity: 'High' },
    { state: 'IL', name: 'Illinois', distance: 1200, price: '800-1200', time: '5-7 days', popularity: 'Medium' },
    { state: 'PA', name: 'Pennsylvania', distance: 1000, price: '700-1100', time: '4-6 days', popularity: 'Medium' },
  ],
  texas: [
    { state: 'CA', name: 'California', distance: 1400, price: '900-1400', time: '5-8 days', popularity: 'High' },
    { state: 'FL', name: 'Florida', distance: 1000, price: '700-1100', time: '4-6 days', popularity: 'High' },
    { state: 'NY', name: 'New York', distance: 1600, price: '1000-1500', time: '6-9 days', popularity: 'High' },
    { state: 'IL', name: 'Illinois', distance: 900, price: '600-1000', time: '4-6 days', popularity: 'Medium' },
    { state: 'CO', name: 'Colorado', distance: 600, price: '500-800', time: '3-5 days', popularity: 'Medium' },
  ],
  'new-york': [
    { state: 'FL', name: 'Florida', distance: 1100, price: '800-1200', time: '4-6 days', popularity: 'High' },
    { state: 'CA', name: 'California', distance: 2800, price: '1400-2000', time: '8-12 days', popularity: 'High' },
    { state: 'TX', name: 'Texas', distance: 1600, price: '1000-1500', time: '6-9 days', popularity: 'High' },
    { state: 'IL', name: 'Illinois', distance: 800, price: '600-1000', time: '3-5 days', popularity: 'Medium' },
    { state: 'NC', name: 'North Carolina', distance: 500, price: '400-700', time: '2-4 days', popularity: 'Medium' },
  ]
}

// Major cities by state
const stateCities = {
  alabama:        ['Montgomery', 'Birmingham', 'Mobile', 'Huntsville', 'Tuscaloosa'],
  alaska:         ['Juneau', 'Anchorage', 'Fairbanks', 'Juneau', 'Sitka'],  // note: capital & major spread
  arizona:        ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Glendale'],
  arkansas:       ['Little Rock', 'Fort Smith', 'Fayetteville', 'Springdale', 'Jonesboro'],
  california:     ['Sacramento', 'Los Angeles', 'San Diego', 'San Jose', 'San Francisco'],
  colorado:       ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood'],
  connecticut:    ['Hartford', 'Bridgeport', 'New Haven', 'Stamford', 'Waterbury'],
  delaware:       ['Dover', 'Wilmington', 'Newark', 'Middletown', 'Milford'],
  florida:        ['Tallahassee', 'Jacksonville', 'Miami', 'Tampa', 'Orlando'],
  georgia:        ['Atlanta', 'Augusta', 'Columbus', 'Savannah', 'Macon'],
  hawaii:         ['Honolulu', 'Hilo', 'Kailua', 'Kapolei', 'Kaneohe'],
  idaho:          ['Boise', 'Nampa', 'Meridian', 'Idaho Falls', 'Pocatello'],
  illinois:       ['Springfield', 'Chicago', 'Aurora', 'Naperville', 'Joliet'],
  indiana:        ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel'],
  iowa:           ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City', 'Waterloo'],
  kansas:         ['Topeka', 'Wichita', 'Overland Park', 'Kansas City (KS)', 'Olathe'],
  kentucky:       ['Frankfort', 'Louisville', 'Lexington', 'Bowling Green', 'Owensboro'],
  louisiana:      ['Baton Rouge', 'New Orleans', 'Shreveport', 'Lafayette', 'Lake Charles'],
  maine:          ['Augusta', 'Portland', 'Bangor', 'Lewiston', 'South Portland'],
  maryland:       ['Annapolis', 'Baltimore', 'Columbia', 'Germantown', 'Silver Spring'],
  massachusetts:  ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge'],
  michigan:       ['Lansing', 'Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights'],
  minnesota:      ['St. Paul', 'Minneapolis', 'Rochester', 'Duluth', 'Bloomington'],
  mississippi:    ['Jackson', 'Gulfport', 'Biloxi', 'Hattiesburg', 'Southaven'],
  missouri:       ['Jefferson City', 'Kansas City', 'St. Louis', 'Springfield (MO)', 'Columbia (MO)'],
  montana:        ['Helena', 'Billings', 'Missoula', 'Great Falls', 'Bozeman'],
  nebraska:       ['Lincoln', 'Omaha', 'Bellevue', 'Grand Island', 'Kearney'],
  nevada:         ['Carson City', 'Las Vegas', 'Henderson', 'Reno', 'North Las Vegas'],
  'new-hampshire':  ['Concord', 'Manchester', 'Nashua', 'Dover', 'Rochester'],
  'new-jersey':     ['Trenton', 'Newark', 'Jersey City', 'Paterson', 'Elizabeth'],
  'new-mexico':     ['Santa Fe', 'Albuquerque', 'Las Cruces', 'Rio Rancho', 'Roswell'],
  'new-york':       ['Albany', 'New York City', 'Buffalo', 'Rochester', 'Syracuse'],
  'north-carolina': ['Raleigh', 'Charlotte', 'Greensboro', 'Durham', 'Winston-Salem'],
  'north-dakota':   ['Bismarck', 'Fargo', 'Grand Forks', 'Minot', 'West Fargo'],
  ohio:           ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron'],
  oklahoma:       ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Lawton'],
  oregon:         ['Salem', 'Portland', 'Eugene', 'Gresham', 'Hillsboro'],
  pennsylvania:   ['Harrisburg', 'Philadelphia', 'Pittsburgh', 'Allentown', 'Erie'],
  'rhode-island':   ['Providence', 'Warwick', 'Cranston', 'Pawtucket', 'East Providence'],
  'south-carolina': ['Columbia', 'Charleston', 'North Charleston', 'Mount Pleasant', 'Rock Hill'],
  'south-dakota':   ['Pierre', 'Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings'],
  tennessee:      ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville'],
  texas:          ['Austin', 'Houston', 'Dallas', 'San Antonio', 'Fort Worth'],
  utah:           ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem'],
  vermont:        ['Montpelier', 'Burlington', 'South Burlington', 'Rutland', 'Barre'],
  virginia:       ['Richmond', 'Virginia Beach', 'Norfolk', 'Chesapeake', 'Arlington'],
  washington:     ['Olympia', 'Seattle', 'Spokane', 'Tacoma', 'Vancouver (WA)'],
  'west-virginia':  ['Charleston', 'Huntington', 'Morgantown', 'Parkersburg', 'Wheeling'],
  wisconsin:      ['Madison', 'Milwaukee', 'Green Bay', 'Kenosha', 'Racine'],
  wyoming:        ['Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs'],
}

const autoTransportFAQs = [
    {
      question: (<>{`How far in advance should I book my shipment?`}</>),
      answer: (<>We recommend booking your shipment at least 1-2 weeks in advance. This provides enough time to find the best carrier and secure your preferred pickup dates. For peak seasons, booking even earlier is a good idea.</>)
    },
    {
      question: (<>Can I put personal items in my car?</>),
      answer: (<>The standard rule is to not have any personal items in your vehicle. However, some carriers may allow a small amount of personal belongings, typically up to 100 lbs., in the trunk or a single piece of luggage, as long as it's not visible and does not contain any valuables or illegal items. Be sure to discuss this with your transport advisor.</>)
    },
    {
      question: "Is my vehicle insured during transport?",
      answer: "Yes, every shipment is covered by our carrier's cargo insurance, which protects your vehicle against damage during transit. The specifics of the coverage are detailed in the Bill of Lading (BOL)."
    },
    {
      question: (<>How do I prepare my car for shipping?</>),
      answer: (<>To ensure a smooth transport, we recommend the following:
      <ul>
        <li className='my-2'>Wash the exterior of your car to make any pre-existing damage visible.</li>
        <li className='my-2'>Remove all personal items and valuables.</li>
        <li className='my-2'>Disable any alarms or security systems.</li>
        <li className='my-2'>Check that the gas tank is no more than a quarter full.</li>
        <li className='my-2'>Ensure the battery is fully charged and all tires are properly inflated.</li>
      </ul>
      </>)
    } 
  ];

export async function generateMetadata({ params }) {
 const awaitedParams = await params;
  const stateCode = awaitedParams.fromState;
  const state = US_STATES.find(s => s.url === stateCode)
  
  if (!state) {
    return {
      title: 'State Not Found',
    }
  }

  // Construct the canonical URL using the dynamic parameter
  const canonicalUrl = `/locations/${stateCode}`;

  return {
    title: `Car Shipping to & From ${state.name} | Furious Auto Shipping`,
    description: `Need to ship a car to or from ${state.name}? Get a free quote for reliable and insured auto transport services. We offer door-to-door car shipping with professional carriers for every type of vehicle. Contact us today!`,
    keywords: `auto transport from ${state.name}, car shipping ${state.name}, vehicle transport ${state.code}`,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function FromStatePage({ params }) {
  // Await the params object before accessing its properties
  const awaitedParams = await params;
  const stateCode = awaitedParams.fromState;
  const state = US_STATES.find(s => s.url === stateCode)
 
  if (!state) {
    notFound()
  }

  const destinations = stateDestinations[params.fromState] || []
  const cities = stateCities[params.fromState] || []

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">
              Car Shipping Services to and from {state.name}
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              Professional car shipping services from {state.name} to anywhere in the United States. 
              Get instant quotes, door-to-door service, and reliable transport for your vehicle.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-200">50</div>
                <div className="text-sm opacity-90">Destination States</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-200">Daily</div>
                <div className="text-sm opacity-90">Departures</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-200">24/7</div>
                <div className="text-sm opacity-90">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      {destinations.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Popular Destinations from {state.name}</h2>
              <p className="text-xl text-gray-600">
                Most requested auto transport routes from {state.name} with competitive pricing.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((destination) => (
                <div key={destination.state} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">{state.name}</h3>
                    <span className="text-gray-400">→</span>
                    <h3 className="font-semibold text-lg">{destination.name}</h3>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <TruckIcon className="h-4 w-4 text-brand-600" />
                        <span className="text-gray-600">Popularity:</span>
                      </div>
                      <span className={`font-medium ${
                        destination.popularity === 'High' ? 'text-green-600' : 'text-yellow-600'
                      }`}>
                        {destination.popularity}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link
                      href={`/locations/${params.fromState}/${destination.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="btn-outline text-sm flex-1 text-center"
                    >
                      View Route
                    </Link>
                    <Link
                      href="/get-quote"
                      className="btn-primary text-sm flex-1 text-center"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Major Cities */}
      {cities.length > 0 && (
        <section className="section bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Major Cities in {state.name}</h2>
              <p className="text-xl text-gray-600">
                We provide door-to-door service to all major metropolitan areas in {state.name}.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {cities.map((city) => (
                <div key={city} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-medium text-gray-900">{city}</h3>
                  <p className="text-sm text-gray-600 mt-1">{state.code}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All States Grid */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Ship to Any State</h2>
            <p className="text-xl text-gray-600">
              Select your destination state for detailed route information and pricing.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {US_STATES.filter(s => s.url !== stateCode).map((destState) => (
              <Link
                key={destState.code}
                href={`/locations/${params.fromState}/${destState.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md hover:bg-brand-50 transition-all group border border-gray-200"
              >
                <div className="text-lg font-bold text-brand-600 group-hover:text-brand-700 mb-1">
                  {destState.code}
                </div>
                <div className="text-xs text-gray-600 group-hover:text-gray-700">
                  {destState.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Ship from {state.name} with Us?</h2>
            <p className="text-xl text-gray-600">
              Local expertise with nationwide reach for all your auto transport needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-brand-100 rounded-full">
                  <TruckIcon className="h-8 w-8 text-brand-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                We understand {state.name}'s regulations, routes, and best pickup locations 
                for efficient service.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-brand-100 rounded-full">
                  <ClockIcon className="h-8 w-8 text-brand-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Frequent Departures</h3>
              <p className="text-gray-600">
                Regular carrier routes from {state.name} ensure flexible scheduling 
                and competitive pricing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-brand-100 rounded-full">
                  <MapPinIcon className="h-8 w-8 text-brand-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Door-to-Door Service</h3>
              <p className="text-gray-600">
                Convenient pickup from your location in {state.name} with delivery 
                anywhere in the United States.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* State-Specific Information */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Shipping from {state.name}</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <h3 className="font-semibold mb-2">Pickup Locations</h3>
                  <p className="text-sm text-gray-600">
                    We provide pickup service throughout {state.name}, including major cities, 
                    suburbs, and most rural areas accessible by carrier trucks.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <h3 className="font-semibold mb-2">Transit Times</h3>
                  <p className="text-sm text-gray-600">
                    Typical transit times from {state.name} range from 2-4 days for regional 
                    shipping to 7-12 days for cross-country transport.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <h3 className="font-semibold mb-2">Pricing Factors</h3>
                  <p className="text-sm text-gray-600">
                    Costs depend on destination distance, vehicle size, transport type, 
                    and seasonal demand. We provide transparent, competitive pricing.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={`/images/states/${params.fromState}-transport.jpg`}
                alt={`Auto transport from ${state.name}`}
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
      
      <h2 className="heading-2 mb-6">Your Trusted Partner for Auto Transport in {state.name}</h2>
      <p className='my-2'><b><Link href={''}>Relocating to or from {state.name}</Link></b>? Buying a vehicle online from another state? Or perhaps you're a dealership needing to move a fleet of cars? Whatever your reason, navigating the logistics of vehicle transport can be a complex and daunting task. This is where a reliable auto shipping service becomes your most valuable asset.</p>
      <p className='my-2'>At Furious Auto Shipping, we specialize in providing seamless and stress-free car shipping services for individuals and businesses. With years of experience and a nationwide network of vetted carriers, we are your go-to experts for all your auto transport needs in and around {state.name}. Our commitment to transparency, safety, and customer satisfaction has earned us a reputation as a leading authority in the auto transport industry.</p>
      <p className='my-2'>This comprehensive guide is designed to provide you with all the essential information about <b><Link href={''}>shipping a car to or from {state.name}</Link></b>. We'll cover everything from the basic process to the factors that affect cost and the types of services available, ensuring you're fully prepared and confident in your decision.</p>

      <h2 className="heading-2 mb-6">Why Choose Professional Auto Shipping for {state.name}?</h2>
      <p className='my-2'>Shipping a vehicle professionally is often a more logical and cost-effective choice than driving it yourself, especially for long distances. Consider the hidden costs of a DIY road trip: fuel, lodging, food, potential vehicle wear and tear, and the invaluable time you'll lose.</p>
      <p className='my-2'>When you entrust your vehicle to <b><Link href={'/'}>Furious Auto Shipping</Link></b>, you're not just booking a ride; you're securing a comprehensive, insured, and expert-handled transport solution. Here are some key benefits of our services:</p>

      <ul>
        <li className='my-2'><b>Convenience and Time-Saving:</b> Our door-to-door service means your vehicle is picked up from and delivered to your specified locations, as close as legally and safely possible. This saves you from the hassle of drop-offs and pickups at distant terminals.</li>
        <li className='my-2'><b>Safety and Security:</b> Our carriers are fully licensed, bonded, and insured, providing peace of mind that your vehicle is protected against damage, theft, and loss during transit. Every shipment is covered by cargo insurance, and we provide you with all the necessary documentation for your records.</li>
        <li className='my-2'><b>Reduced Wear and Tear:</b> Keeping your car off the road for a long journey preserves its mileage, reduces the need for maintenance, and maintains its overall condition and resale value.</li>
        <li className='my-2'><b>Expert Handling:</b> Our network of drivers are professionals with years of experience navigating the specific challenges of transporting vehicles, including interstate regulations and challenging road conditions, ensuring your vehicle arrives safely and on time.</li>
      </ul>

      <h2 className="heading-2 mb-6">The Auto Shipping Process: A Step-by-Step Guide</h2>
      <p className='my-2'>Shipping a vehicle may seem complicated, but our process is streamlined and easy to follow. We believe in keeping you informed at every step.</p>

      <h3 className="heading-4 mb-6">1. Get an Instant Quote</h3>
      <p className='my-2'>The first step is to get a free, no-obligation quote. Our online quote calculator or a quick call to our team will provide you with a transparent estimate. We'll need a few key details:</p>
      <ul>
        <li className='my-2'><b>Vehicle Information:</b> Year, make, and model of your vehicle.</li>
        <li className='my-2'><b>Pickup and Delivery Locations:</b> The zip codes for both the origin and destination.</li>
        <li className='my-2'><b>Transport Type:</b> Whether you prefer open or enclosed transport.</li>
        <li className='my-2'><b>Condition of the Vehicle:</b> Is it running or inoperable? This affects the type of equipment needed for loading.</li>
        <li className='my-2'><b>Desired Shipping Dates:</b> Your preferred timeline for pickup.</li>
      </ul>
      
      <h3 className="heading-4 mb-6">2. Book Your Shipment</h3>
      <p className='my-2'>Once you're satisfied with your quote, you can book your shipment with one of our experienced advisors. We'll work with you to confirm the pickup window and finalize all the details.</p>

      <h3 className="heading-4 mb-6">3. Vehicle Pickup</h3>
      <p className='my-2'>On the day of pickup, our professional carrier will contact you to confirm the arrival time. A detailed Bill of Lading (BOL) will be completed, documenting the vehicle's condition, including any pre-existing damage. We encourage you to be present and take your own photos for your records.</p>

      <h3 className="heading-4 mb-6">4. In-Transit Tracking</h3>
      <p className='my-2'>We understand you want to know where your vehicle is. While in transit, you can stay informed with regular updates on your vehicle's location. Our team is always available to provide you with real-time tracking information and answer any questions.</p>

      <h3 className="heading-4 mb-6">5. Final Delivery and Inspection</h3>
      <p className='my-2'>Upon arrival at the destination in {state.name}, you'll perform a final inspection of your vehicle with the driver, using the BOL from pickup as a reference. Once you're satisfied, you'll sign the BOL and receive your keys. The process is complete!</p>

      <h2 className="heading-2 mb-6">Exploring Your Auto Transport Options</h2>
      <p className='my-2'>We offer a range of services to meet the specific needs of our clients in {state.name}. The two primary transport types are open and enclosed, each with distinct advantages.</p>

      <h3 className="heading-4 mb-6">Open Auto Transport</h3>
      <p className='my-2'>This is the most common and most affordable method of car shipping. Your vehicle will be loaded onto an open-air carrier, similar to the ones you see delivering cars to dealerships.</p>
      <ul>
        <li className='my-2'><b>Pros:</b> Cost-effective, widely available, and ideal for most standard vehicles.</li>
        <li className='my-2'><b>Cons:</b> The vehicle is exposed to the elements and road debris.</li>
      </ul>

      <h3 className="heading-4 mb-6">Enclosed Auto Transport</h3>
      <p className='my-2'>For luxury, classic, or high-value vehicles, enclosed transport offers a premium level of protection. Your vehicle is transported within a sealed, covered trailer, shielded from weather and road hazards.</p>

      <ul>
        <li className='my-2'><b>Pros:</b> Maximum protection for your vehicle, peace of mind for high-value assets.</li>
        <li className='my-2'><b>Cons:</b> Higher cost due to specialized equipment and limited availability.</li>
      </ul>

      <h2 className="heading-2 mb-6">Factors Influencing the Cost of Shipping a Car to/from {state.name}</h2>
      <p className='my-2'>The final price of your auto transport service is determined by several key factors. Understanding these elements can help you make a more informed decision and manage your budget.</p>

      <ul>
        <li className='my-2'><b>Distance:</b> The mileage between the pickup and delivery locations is the most significant cost factor.</li>
        <li className='my-2'><b>Vehicle Size and Weight:</b> Larger vehicles, like SUVs or trucks, require more space and fuel, increasing the cost.</li>
        <li className='my-2'><b>Transport Type:</b> As mentioned, enclosed transport is a premium service and costs more than open transport.</li>
        <li className='my-2'><b>Seasonality:</b> The demand for auto transport services fluctuates throughout the year. Peak seasons, such as summer and the end of the year, often see higher prices.</li>
        <li className='my-2'><b>Route Popularity:</b> Shipping a vehicle on a common route, like between major cities, is typically more affordable than shipping to a remote or less-traveled area.</li>
        <li className='my-2'><b>Vehicle Condition:</b> Inoperable vehicles require special equipment, such as a winch, for loading, which adds to the total cost.</li>
      </ul>

      <h2 className="heading-2 mb-6">Why {state.name} Is a Key Hub for Auto Transport</h2>
      <p className='my-2'>{state.name} is a major hub for auto transport due to its strategic geographic location, bustling economy, and a significant volume of vehicle relocations. The state's extensive highway system and a constant flow of residents and businesses make it a central point for both interstate and long-distance shipping.</p>
      <p className='my-2'>Whether you're moving to the vibrant urban centers or shipping a classic car to a quieter town, our network of carriers covers all corners of {state.name}. We are familiar with the specific routes, traffic patterns, and logistics of transporting vehicles within the state, ensuring a smooth and efficient process.</p>
      
        </div>
      </section>

      <FAQ
        title={`Common Questions About Car Shipping in ${state.name}`}
        faqs={autoTransportFAQs} />

      {/* Quote CTA */}
      <section className="section bg-brand-600 text-white">
        <div className="container">
          
          <div className="max-w-4xl mx-auto text-center"> 
            <h2 className="heading-2 mb-6">Ready to Ship Your Car to or from {state.name}?</h2>
          <p className="text-xl mb-8">Choosing the right auto transport company is crucial for a successful and worry-free experience. At Furious Auto Shipping, we combine years of industry expertise with a genuine commitment to customer service, making us the top choice for vehicle shipping to and from {state.name}.</p>
          <p className='my-2'>Our team is dedicated to providing you with a seamless experience from your first quote to the moment your vehicle arrives. Don't let the logistics of car transport add stress to your life. <br />

Contact us today to get your free quote and learn how we can make your next vehicle move a breeze.</p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-4 mb-8">
              <div className="grid md:grid-cols-3 gap-4 items-end">
                <div>
                  <label className="block text-sm font-medium mb-2">From</label>
                  <input
                    type="text"
                    value={`${state.name} (${state.code})`}
                    readOnly
                    className="w-full px-3 py-2 bg-white/20 text-white rounded-md border border-white/30"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">To State</label>
                  <select className="w-full px-3 py-2 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-300">
                    <option value="">Select destination state</option>
                    {US_STATES.filter(s => s.code !== stateCode).map((destState) => (
                      <option key={destState.code} value={destState.code}>
                        {destState.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <Link
                    href="/get-quote"
                    className="btn-secondary w-full"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
            
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
        </div>
      </section>
    </div>
  )
}


