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
    description: 'Pacific Coast and Southwest routes with frequent service'
  },
  {
    name: 'East Coast',
    states: ['NY', 'NJ', 'PA', 'CT', 'MA', 'FL', 'GA', 'NC', 'SC', 'VA', 'MD', 'DE'],
    description: 'Atlantic corridor with high-frequency departures'
  },
  {
    name: 'Midwest',
    states: ['IL', 'IN', 'OH', 'MI', 'WI', 'MN', 'IA', 'MO', 'KS', 'NE'],
    description: 'Central hub connecting all major routes'
  },
  {
    name: 'South',
    states: ['TX', 'LA', 'AR', 'TN', 'AL', 'MS', 'OK', 'KY'],
    description: 'Southern corridor with competitive pricing'
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
        </div>
      </section>
    </div>
  )
}