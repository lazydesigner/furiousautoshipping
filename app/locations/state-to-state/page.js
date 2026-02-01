import Link from 'next/link'
import { US_STATES } from '@/lib/utils'
import { MapPinIcon, TruckIcon, ClockIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'State-to-State Auto Transport | Car Shipping Routes',
  description: 'Auto transport services between all 50 states. Find your route, get pricing, and ship your car anywhere in the USA.',
  keywords: 'state to state auto transport, car shipping routes, interstate vehicle transport, auto shipping by state',
  alternates: {
    canonical: '/locations/state-to-state',
  },
}

// Popular routes with sample data
const popularRoutes = [
  { from: 'California', to: 'Texas', distance: 1200, price: '900-1300', time: '5-7 days', code: 'ca/tx', url: 'california/texas' },
  { from: 'Florida', to: 'New York', distance: 1100, price: '800-1200', time: '4-6 days', code: 'fl/ny', url: 'florida/new-york' },
  { from: 'California', to: 'Florida', distance: 2400, price: '1200-1800', time: '7-10 days', code: 'ca/fl', url: 'california/florida' },
  { from: 'Texas', to: 'California', distance: 1400, price: '900-1400', time: '5-8 days', code: 'tx/ca', url: 'texas/california' },
  { from: 'Illinois', to: 'Florida', distance: 1200, price: '800-1200', time: '5-7 days', code: 'il/fl', url: 'illinois/florida' },
  { from: 'New York', to: 'California', distance: 2800, price: '1400-2000', time: '8-12 days', code: 'ny/ca', url: 'new-york/california' },
  { from: 'Pennsylvania', to: 'Florida', distance: 1000, price: '700-1100', time: '4-6 days', code: 'pa/fl', url: 'pennsylvania/florida' },
  { from: 'Michigan', to: 'Florida', distance: 1100, price: '800-1200', time: '5-7 days', code: 'mi/fl', url: 'michigan/florida' },
]

// Regional groupings
const regions = [
  {
    name: 'West Coast',
    states: ['CA', 'OR', 'WA', 'NV', 'AZ'],
    description: 'Daily routes covering the Pacific Coast Highway (I-5) and inland connections. Frequent service to California, Oregon, and Washington with connections to Hawaii ports.'
  },
  {
    name: 'East Coast',
    states: ['NY', 'NJ', 'PA', 'CT', 'MA', 'FL', 'GA', 'NC', 'SC', 'VA', 'MD', 'DE'],
    description: 'High-volume transport along the Atlantic I-95 corridor. Serving snowbirds and professionals from New England down to Florida and the Keys.'
  },
  {
    name: 'Midwest',
    states: ['IL', 'IN', 'OH', 'MI', 'WI', 'MN', 'IA', 'MO', 'KS', 'NE'],
    description: 'The central hub of American auto manufacturing. connecting Chicago, Detroit, and Ohio to the Sunbelt states via I-35 and I-55.'
  },
  {
    name: 'South',
    states: ['TX', 'LA', 'AR', 'TN', 'AL', 'MS', 'OK', 'KY'],
    description: 'Rapidly growing relocation routes. Heavy volume into Texas, Tennessee, and Georgia. Specialized open and enclosed options for the Southern heat.'
  },
]

export default function StateToStatePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">State-to-State Auto Transport</h1>
            <p className="text-xl leading-relaxed mb-8">
              Professional car shipping services connecting all 50 states. Find your route,
              compare pricing, and get instant quotes for interstate vehicle transport.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-200">50</div>
                <div className="text-sm opacity-90">States Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-200">1,200+</div>
                <div className="text-sm opacity-90">Route Combinations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-200">Daily</div>
                <div className="text-sm opacity-90">Departures</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Most Popular Routes</h2>
            <p className="text-xl text-gray-600">
              These high-traffic routes offer the best availability and competitive pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRoutes.map((route, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">{route.from}</h3>
                  <span className="text-gray-400">→</span>
                  <h3 className="font-semibold text-lg">{route.to}</h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPinIcon className="h-4 w-4 text-brand-600" />
                      <span className="text-gray-600">Distance:</span>
                    </div>
                    <span className="font-medium">{route.distance} miles</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <ClockIcon className="h-4 w-4 text-brand-600" />
                      <span className="text-gray-600">Transit Time:</span>
                    </div>
                    <span className="font-medium">{route.time}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <TruckIcon className="h-4 w-4 text-brand-600" />
                      <span className="text-gray-600">Price Range:</span>
                    </div>
                    <span className="font-medium text-brand-600">${route.price}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/locations/${route.url}`}
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

      {/* State Selection Grid */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Select Your States</h2>
            <p className="text-xl text-gray-600">
              Choose your origin and destination states to explore routes and pricing.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {US_STATES.map((state) => (
                <Link
                  aria-label={`Car Shipping ${state.name}`}
                  key={state.code}
                  href={`/locations/${state.url.toLowerCase()}`}
                  className="bg-white rounded-lg p-4 text-center hover:shadow-md hover:bg-brand-50 transition-all group border border-gray-200"
                >
                  <div className="text-xl font-bold text-brand-600 group-hover:text-brand-700 mb-1">
                    {state.code}
                  </div>
                  <div className="text-xs text-gray-600 group-hover:text-gray-700">
                    {state.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Regional Coverage</h2>
            <p className="text-xl text-gray-600">
              Comprehensive auto transport coverage across all US regions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {regions.map((region) => (
              <div key={region.name} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">{region.name}</h3>
                <p className="text-gray-600 mb-4">{region.description}</p>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">States Covered:</div>
                  <div className="flex flex-wrap gap-2">
                    {region.states.map((stateCode) => {
                      const state = US_STATES.find(s => s.code === stateCode)
                      return (
                        <Link
                          key={stateCode}
                          href={`/locations/${state?.url.toLowerCase()}`}
                          className="bg-brand-100 hover:bg-brand-200 text-brand-700 px-2 py-1 rounded text-sm transition-colors"
                        >
                          {state?.name}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Route Finder */}
      <section className="section bg-brand-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Find Your Exact Route</h2>
            <p className="text-xl mb-8">
              Get instant pricing and availability for your specific state-to-state route.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-4 items-end">
                <div>
                  <label className="block text-sm font-medium mb-2">From State</label>
                  <select className="w-full px-3 py-2 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-300">
                    <option value="">Select origin state</option>
                    {US_STATES.map((state) => (
                      <option key={state.code} value={state.code}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">To State</label>
                  <select className="w-full px-3 py-2 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-300">
                    <option value="">Select destination state</option>
                    {US_STATES.map((state) => (
                      <option key={state.code} value={state.code}>
                        {state.name}
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
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">



          <div class="px-6 sm:px-8">
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How Interstate Car Shipping Works
            </h2>
            <div class="h-1 w-24 bg-blue-600 rounded"></div>
          </div>

          <div class="mt-3 px-6 sm:px-8">
            <p class="text-lg text-gray-700 leading-relaxed">
              Moving a vehicle across state lines doesn't have to be complicated. Whether you're relocating for work, sending a car to a family member, or buying a vehicle from another state, understanding how <strong class="text-gray-900">cross country car shipping</strong> works helps you plan ahead and avoid surprises.
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 sm:p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span class="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
              What Affects State to State Auto Transport Cost
            </h3>

            <p class="text-gray-700 leading-relaxed mb-4">
              Several factors influence how much you'll pay to ship your vehicle between states. Distance is the most obvious one—the farther your car needs to travel, the higher the base cost. However, <strong class="text-gray-900">state to state auto transport cost</strong> isn't determined by mileage alone.
            </p>

            <p class="text-gray-700 leading-relaxed mb-4">
              Vehicle size and weight play a major role. Larger vehicles like trucks and SUVs take up more space on the carrier and add weight, which increases fuel consumption. The type of transport you choose matters too. Open carriers cost less than enclosed trailers, but enclosed options provide extra protection from weather and road debris.
            </p>

            <div class="bg-blue-50 border-l-4 border-blue-600 p-5 my-6">
              <h4 class="font-semibold text-gray-900 mb-3">Key Cost Factors:</h4>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span><strong>Route popularity</strong> — High-traffic corridors like California to Texas or Florida to New York tend to cost less per mile</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span><strong>Seasonal demand</strong> — Summer months and college moving seasons create higher prices</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span><strong>Pickup/delivery locations</strong> — City center to city center costs less than rural areas</span>
                </li>
              </ul>
            </div>

            <p class="text-gray-700 leading-relaxed">
              Timing affects pricing as well. Demand spikes during summer months when families move and college students transport vehicles. Winter can bring higher costs for routes through northern states due to weather delays. Pickup and delivery locations also matter—shipping from city center to city center usually costs less than rural pickup or delivery, where carriers may need to make special trips.
            </p>
          </div>

          <div class=" bg-white rounded-lg p-6 sm:p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span class="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
              Regional vs. Cross-Country Shipping
            </h3>

            <p class="text-gray-700 leading-relaxed mb-4">
              Not all interstate moves cover the same distance. Regional shipping typically means moving a vehicle between neighboring states or within the same geographic area—think Pennsylvania to New Jersey or Arizona to Nevada. These shorter hauls often take 2-4 days and cost significantly less than longer routes.
            </p>

            <div class="grid sm:grid-cols-2 gap-6 my-6">
              <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-5 border border-green-200">
                <div class="flex items-center mb-3">
                  <svg class="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h4 class="font-bold text-green-900">Regional Shipping</h4>
                </div>
                <ul class="text-sm text-green-800 space-y-1">
                  <li>• Neighboring or nearby states</li>
                  <li>• 2-4 day delivery</li>
                  <li>• Lower cost per mile</li>
                  <li>• Simpler logistics</li>
                </ul>
              </div>

              <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5 border border-purple-200">
                <div class="flex items-center mb-3">
                  <svg class="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 class="font-bold text-purple-900">Cross-Country</h4>
                </div>
                <ul class="text-sm text-purple-800 space-y-1">
                  <li>• Coast to coast routes</li>
                  <li>• 7-10+ day delivery</li>
                  <li>• Higher total cost</li>
                  <li>• More planning needed</li>
                </ul>
              </div>
            </div>

            <p class="text-gray-700 leading-relaxed mb-4">
              <strong class="text-gray-900">Cross country car shipping</strong> involves hauling vehicles across multiple time zones, often from coast to coast. A shipment from Maine to California or Washington to Florida can take 7-10 days or more, depending on the route and number of stops. These longer trips require more planning and coordination, especially if you need specific pickup or delivery dates.
            </p>

            <p class="text-gray-700 leading-relaxed">
              The logistics get more complex with longer distances. Carriers may transfer your vehicle between trucks to optimize their routes. Weather conditions across different regions can cause delays. That's why booking cross-country transport a few weeks in advance gives carriers time to schedule your vehicle efficiently and keeps costs more predictable.
            </p>
          </div>

          <div class="mb-12 bg-white rounded-lg p-6 sm:p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span class="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
              Preparing Your Vehicle for Long Distance Vehicle Hauling
            </h3>

            <p class="text-gray-700 leading-relaxed mb-6">
              Taking a few simple steps before your vehicle ships protects both you and the carrier. Start with a thorough inspection. Document any existing scratches, dents, or damage with photos from multiple angles. This creates a clear record in case you need to file an insurance claim.
            </p>

            <div class="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <h4 class="font-bold text-amber-900 mb-4 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
                Essential Preparation Checklist
              </h4>
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <p class="font-semibold text-gray-900 mb-2">Before Pickup:</p>
                  <ul class="text-sm text-gray-700 space-y-1.5">
                    <li class="flex items-start">
                      <span class="text-amber-600 mr-2">✓</span>
                      <span>Remove all personal items</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-amber-600 mr-2">✓</span>
                      <span>Keep gas tank at ¼ full</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-amber-600 mr-2">✓</span>
                      <span>Check fluid levels and tire pressure</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-amber-600 mr-2">✓</span>
                      <span>Ensure battery is charged</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p class="font-semibold text-gray-900 mb-2">Documentation:</p>
                  <ul class="text-sm text-gray-700 space-y-1.5">
                    <li class="flex items-start">
                      <span class="text-amber-600 mr-2">✓</span>
                      <span>Take photos from all angles</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-amber-600 mr-2">✓</span>
                      <span>Document existing damage</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-amber-600 mr-2">✓</span>
                      <span>Remove or note toll transponders</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-amber-600 mr-2">✓</span>
                      <span>Disable alarm systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p class="text-gray-700 leading-relaxed mb-4">
              Remove all personal items from inside the vehicle. <strong class="text-gray-900">Long distance vehicle hauling</strong> contracts typically don't cover belongings left in the car, and extra weight can lead to additional fees. Make sure your gas tank is no more than a quarter full—enough to load and unload but not so much that it adds unnecessary weight.
            </p>

            <p class="text-gray-700 leading-relaxed mb-4">
              Check fluid levels and tire pressure. Ensure the battery is charged and there are no leaks. Disable or document any alarm systems so they don't activate during transport. If you have a toll transponder, remove it or document it in your inspection report.
            </p>

            <div class="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600 mb-4">
              <h4 class="font-semibold text-gray-900 mb-2">Insurance Considerations</h4>
              <p class="text-gray-700 text-sm leading-relaxed">
                Consider your insurance options carefully. Most reputable carriers provide liability coverage, but you may want additional protection for high-value vehicles. Review what your personal auto insurance covers during transport and ask your carrier about supplemental options.
              </p>
            </div>

            <p class="text-gray-700 leading-relaxed">
              <strong class="text-gray-900">Door-to-door car shipping</strong> is the most convenient option for most customers, though it may cost slightly more than terminal-to-terminal service. With door-to-door delivery, the carrier picks up and drops off as close to your specified addresses as safely possible, saving you the hassle of traveling to a terminal facility.
            </p>
          </div>
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Choose Our Network</h2>
            <p className="text-xl text-gray-600">
              Nationwide coverage with local expertise and reliable service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-brand-100 rounded-full">
                  <TruckIcon className="h-8 w-8 text-brand-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Extensive Network</h3>
              <p className="text-gray-600">
                Our nationwide network ensures reliable service to every state 
                with frequent departures and competitive rates.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-brand-100 rounded-full">
                  <ClockIcon className="h-8 w-8 text-brand-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Multiple departure times and flexible pickup windows to 
                accommodate your schedule on any route.
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
                Convenient pickup and delivery at your preferred locations 
                in any state, with no terminal visits required.
              </p>
            </div>
          </div>

          <div class="bg-gradient-to-r mt-10 from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white shadow-lg">
            <h3 class="text-2xl font-bold mb-3">Ready to Ship Your Vehicle?</h3>
            <p class="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get a free, no-obligation quote for your interstate car shipping needs. Our network of trusted carriers is ready to help.
            </p>
            <button class="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-md">
              Get Your Free Quote
            </button>
          </div>

        </div>
      </section>
    </div>
  )
}