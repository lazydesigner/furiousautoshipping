import Link from 'next/link'
import { MapPinIcon, TruckIcon, ClockIcon } from '@heroicons/react/24/outline'
import { US_STATES } from '@/lib/utils'

export const metadata = {
  title: 'Auto Transport Locations | State-to-State Car Shipping Routes',
  description: 'Ship your car anywhere in the USA. View popular auto transport routes, state-to-state shipping options, and major city connections.',
  keywords: 'auto transport locations, state to state car shipping, auto transport routes, city to city vehicle shipping',
  alternates: {
      canonical: '/locations',
    },
}

const popularRoutes = [
  {
    from: 'California',
    to: 'Texas',
    fromCode: 'CA',
    toCode: 'TX',
    distance: '1,200 miles',
    timeframe: '5-7 days',
    avgPrice: '$800-1,200',
    description: 'Popular route for relocations and snowbird migrations'
  },
  {
    from: 'Florida',
    to: 'New York',
    fromCode: 'FL',
    toCode: 'NY',
    distance: '1,100 miles',
    timeframe: '4-6 days',
    avgPrice: '$700-1,100',
    description: 'Heavy traffic route with frequent departures'
  },
  {
    from: 'California',
    to: 'Florida',
    fromCode: 'CA',
    toCode: 'FL',
    distance: '2,400 miles',
    timeframe: '7-10 days',
    avgPrice: '$1,200-1,800',
    description: 'Coast-to-coast shipping with scenic southern route'
  },
  {
    from: 'Texas',
    to: 'California',
    fromCode: 'TX',
    toCode: 'CA',
    distance: '1,400 miles',
    timeframe: '5-8 days',
    avgPrice: '$900-1,300',
    description: 'Major business corridor with reliable service'
  },
  {
    from: 'Illinois',
    to: 'Florida',
    fromCode: 'IL',
    toCode: 'FL',
    distance: '1,200 miles',
    timeframe: '5-7 days',
    avgPrice: '$800-1,200',
    description: 'Midwest to Southeast popular for retirees'
  },
  {
    from: 'New York',
    to: 'California',
    fromCode: 'NY',
    toCode: 'CA',
    distance: '2,800 miles',
    timeframe: '8-12 days',
    avgPrice: '$1,400-2,000',
    description: 'Classic cross-country route'
  },
]

function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, '-')
}

const majorCities = [
  { name: 'Los Angeles', state: 'CA', routes: 45 },
  { name: 'New York City', state: 'NY', routes: 42 },
  { name: 'Miami', state: 'FL', routes: 38 },
  { name: 'Chicago', state: 'IL', routes: 35 },
  { name: 'Houston', state: 'TX', routes: 33 },
  { name: 'Phoenix', state: 'AZ', routes: 31 },
  { name: 'Philadelphia', state: 'PA', routes: 29 },
  { name: 'San Antonio', state: 'TX', routes: 27 },
  { name: 'San Diego', state: 'CA', routes: 26 },
  { name: 'Dallas', state: 'TX', routes: 25 },
  { name: 'San Jose', state: 'CA', routes: 24 },
  { name: 'Austin', state: 'TX', routes: 23 },
]

const serviceAreas = [
  {
    region: 'West Coast',
    states: ['CA', 'OR', 'WA', 'NV', 'AZ'],
    description: 'Dense network covering the Pacific Coast and Southwest',
    features: ['Daily departures', 'Tech hub connections', 'Snowbird routes']
  },
  {
    region: 'East Coast',
    states: ['NY', 'NJ', 'PA', 'MA', 'CT', 'FL', 'GA', 'NC', 'SC', 'VA'],
    description: 'Comprehensive coverage from Maine to Florida',
    features: ['High frequency routes', 'Business corridors', 'Seasonal service']
  },
  {
    region: 'Midwest',
    states: ['IL', 'IN', 'OH', 'MI', 'WI', 'MN', 'IA', 'MO', 'KS'],
    description: 'Central hub connecting East and West Coast routes',
    features: ['Hub connectivity', 'Manufacturing centers', 'Agricultural regions']
  },
  {
    region: 'South',
    states: ['TX', 'LA', 'AR', 'TN', 'AL', 'MS', 'OK'],
    description: 'Strategic southern routes with oil and energy connections',
    features: ['Energy sector', 'Lower costs', 'Mild weather routes']
  },
]

export default function LocationsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Auto Transport Locations</h1>
            <p className="text-xl leading-relaxed mb-8">
              We provide car shipping services to all 50 states. Explore popular 
              routes, find your state-to-state options, and discover our nationwide 
              coverage areas.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-200">50</div>
                <div className="text-sm opacity-90">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-200">500+</div>
                <div className="text-sm opacity-90">Cities Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-200">1000+</div>
                <div className="text-sm opacity-90">Routes Available</div>
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
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="h-5 w-5 text-brand-600" />
                    <span className="font-semibold">{route.from}</span>
                  </div>
                  <div className="text-gray-400">→</div>
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="h-5 w-5 text-brand-600" />
                    <span className="font-semibold">{route.to}</span>
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
                    <span className="text-gray-600">Price Range:</span>
                    <span className="font-medium text-brand-600">{route.avgPrice}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{route.description}</p>
                
                <div className="flex gap-2">
                  <Link
                    href={`/locations/${slugify(route.from)}/${slugify(route.to)}`}
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

      {/* State-to-State Grid */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">All 50 States Covered</h2>
            <p className="text-xl text-gray-600">
              Select your origin and destination states to view available routes.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {US_STATES.map((state) => (
              <Link
                key={state.code}
                href={`/locations/${state.url.toLowerCase()}`}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md hover:bg-brand-50 transition-all group"
              >
                <div className="text-lg font-bold text-brand-600 group-hover:text-brand-700">
                  {state.code}
                </div>
                <div className="text-xs text-gray-600 group-hover:text-gray-700">
                  {state.name}
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/locations/state-to-state"
              className="btn-primary btn-lg"
            >
              View State-to-State Options
            </Link>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Major Cities We Serve</h2>
            <p className="text-xl text-gray-600">
              Frequent service to and from these major metropolitan areas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {majorCities.map((city) => (
              <Link
                key={`${city.name}-${city.state}`}
                href={`/locations/cities/${city.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-200 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold group-hover:text-brand-600 transition-colors">
                      {city.name}
                    </div>
                    <div className="text-sm text-gray-600">{city.state}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-brand-600">
                      {city.routes}
                    </div>
                    <div className="text-xs text-gray-500">routes</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/locations/cities"
              className="btn-outline btn-lg"
            >
              View All Cities
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Regional Service Areas</h2>
            <p className="text-xl text-gray-600">
              Comprehensive coverage across all regions of the United States.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {serviceAreas.map((area) => (
              <div key={area.region} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">{area.region}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">States Covered:</div>
                  <div className="flex flex-wrap gap-2">
                    {area.states.map((state) => (
                      <span
                        key={state}
                        className="bg-brand-100 text-brand-700 px-2 py-1 rounded text-sm"
                      >
                        {state}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">Key Features:</div>
                  <ul className="space-y-1">
                    {area.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-brand-600 rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Route Finder */}
      <section className="section bg-brand-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Find Your Route</h2>
            <p className="text-xl mb-8">
              Get instant pricing and availability for your specific route.
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

      {/* Service Features */}
      <section className="section">
        <div className="container">
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
                Our nationwide network of certified carriers ensures reliable 
                service to every corner of the United States.
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
                accommodate your schedule and timeline.
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
                Convenient pickup and delivery at your preferred locations, 
                with no need to visit terminals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}