import Link from 'next/link'
import { MapPinIcon, TruckIcon, StarIcon } from '@heroicons/react/24/outline'
import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'Auto Transport by City | Car Shipping to Major Cities',
  description: 'Auto transport services to major cities across the USA. Door-to-door car shipping with frequent service to metropolitan areas.',
  keywords: 'auto transport cities, car shipping major cities, vehicle transport metropolitan areas, city to city auto shipping',
  alternates: {
      canonical: '/locations/cities',
    },
}

const faqs = [
                {
                  question: "Do you provide door-to-door service in major cities?",
                  answer: "Yes, we provide door-to-door service to most addresses in major metropolitan areas. Our carriers can typically access residential and business locations within city limits."
                },
                {
                  question: "How often do you have departures to major cities?",
                  answer: "Major cities like New York, Los Angeles, Chicago, and Miami have daily departures due to high demand. Smaller metropolitan areas typically have departures 3-5 times per week."
                },
                {
                  question: "Are there any additional fees for city delivery?",
                  answer: "Standard city delivery has no additional fees. However, some downtown areas with parking restrictions or difficult access may have small surcharges, which we'll discuss upfront."
                },
                {
                  question: "Can you deliver to apartments and condos in the city?",
                  answer: "Yes, we can deliver to apartments and condos. We'll need a accessible parking area for the carrier truck and someone present to receive the vehicle and complete paperwork."
                }
              ]

const majorCities = [
  // West Coast
  { name: 'Los Angeles', state: 'CA', population: '3.9M', routes: 45, region: 'West Coast', tier: 'Tier 1' },
  { name: 'San Francisco', state: 'CA', population: '873K', routes: 42, region: 'West Coast', tier: 'Tier 1' },
  { name: 'San Diego', state: 'CA', population: '1.4M', routes: 38, region: 'West Coast', tier: 'Tier 1' },
  { name: 'Seattle', state: 'WA', population: '750K', routes: 35, region: 'West Coast', tier: 'Tier 1' },
  { name: 'Portland', state: 'OR', population: '650K', routes: 28, region: 'West Coast', tier: 'Tier 2' },
  { name: 'Las Vegas', state: 'NV', population: '650K', routes: 32, region: 'West Coast', tier: 'Tier 2' },
  
  // East Coast
  { name: 'New York City', state: 'NY', population: '8.3M', routes: 48, region: 'East Coast', tier: 'Tier 1' },
  { name: 'Miami', state: 'FL', population: '470K', routes: 44, region: 'East Coast', tier: 'Tier 1' },
  { name: 'Philadelphia', state: 'PA', population: '1.6M', routes: 40, region: 'East Coast', tier: 'Tier 1' },
  { name: 'Boston', state: 'MA', population: '690K', routes: 36, region: 'East Coast', tier: 'Tier 1' },
  { name: 'Atlanta', state: 'GA', population: '500K', routes: 42, region: 'East Coast', tier: 'Tier 1' },
  { name: 'Washington DC', state: 'DC', population: '710K', routes: 38, region: 'East Coast', tier: 'Tier 1' },
  
  // Midwest
  { name: 'Chicago', state: 'IL', population: '2.7M', routes: 46, region: 'Midwest', tier: 'Tier 1' },
  { name: 'Detroit', state: 'MI', population: '670K', routes: 34, region: 'Midwest', tier: 'Tier 2' },
  { name: 'Cleveland', state: 'OH', population: '385K', routes: 28, region: 'Midwest', tier: 'Tier 2' },
  { name: 'Milwaukee', state: 'WI', population: '590K', routes: 26, region: 'Midwest', tier: 'Tier 2' },
  { name: 'Minneapolis', state: 'MN', population: '430K', routes: 30, region: 'Midwest', tier: 'Tier 2' },
  
  // South
  { name: 'Houston', state: 'TX', population: '2.3M', routes: 44, region: 'South', tier: 'Tier 1' },
  { name: 'Dallas', state: 'TX', population: '1.3M', routes: 42, region: 'South', tier: 'Tier 1' },
  { name: 'Austin', state: 'TX', population: '970K', routes: 36, region: 'South', tier: 'Tier 1' },
  { name: 'San Antonio', state: 'TX', population: '1.5M', routes: 34, region: 'South', tier: 'Tier 2' },
  { name: 'Phoenix', state: 'AZ', population: '1.7M', routes: 38, region: 'South', tier: 'Tier 1' },
  { name: 'Denver', state: 'CO', population: '720K', routes: 32, region: 'South', tier: 'Tier 2' },
]

const regions = ['All Cities', 'West Coast', 'East Coast', 'Midwest', 'South']
const tiers = ['All Tiers', 'Tier 1', 'Tier 2']

const popularCityPairs = [
  { from: 'Los Angeles, CA', to: 'New York, NY', price: '$1,400-2,000', time: '8-12 days' },
  { from: 'Miami, FL', to: 'Seattle, WA', price: '$1,800-2,400', time: '10-14 days' },
  { from: 'Chicago, IL', to: 'Los Angeles, CA', price: '$1,200-1,700', time: '7-10 days' },
  { from: 'New York, NY', to: 'Miami, FL', price: '$800-1,300', time: '5-8 days' },
  { from: 'Houston, TX', to: 'Denver, CO', price: '$700-1,100', time: '4-6 days' },
  { from: 'Phoenix, AZ', to: 'Detroit, MI', price: '$1,100-1,600', time: '6-9 days' },
]

export default function CitiesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Auto Transport to Major Cities</h1>
            <p className="text-xl leading-relaxed mb-8">
              Professional car shipping services to major metropolitan areas across the United States. 
              Door-to-door delivery to your city with frequent departures and competitive rates.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-200">100+</div>
                <div className="text-sm opacity-90">Cities Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-200">Daily</div>
                <div className="text-sm opacity-90">Departures</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-200">50+</div>
                <div className="text-sm opacity-90">Metro Areas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular City Pairs */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Popular City-to-City Routes</h2>
            <p className="text-xl text-gray-600">
              High-frequency routes between major metropolitan areas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCityPairs.map((pair, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-sm text-gray-600 mb-2">{pair.from}</h3>
                  <div className="text-2xl text-gray-400 mb-2">↓</div>
                  <h3 className="font-semibold text-sm text-gray-600">{pair.to}</h3>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Price Range:</span>
                    <span className="font-medium text-brand-600">{pair.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Transit Time:</span>
                    <span className="font-medium">{pair.time}</span>
                  </div>
                </div>
                
                <Link
                  href="/get-quote"
                  className="btn-primary w-full text-center"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Major Cities We Serve</h2>
            <p className="text-xl text-gray-600">
              Professional auto transport services to metropolitan areas nationwide.
            </p>
          </div>
          
          {/* Filter Options */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {regions.map((region) => (
              <button
                key={region}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-brand-50 hover:border-brand-300 transition-colors text-sm"
              >
                {region}
              </button>
            ))}
          </div>
          
          {/* Cities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {majorCities.map((city) => (
              <Link
                key={`${city.name}-${city.state}`}
                href={`/locations/cities/${city.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all border border-gray-200 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-brand-600 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-sm text-gray-600">{city.state}</p>
                  </div>
                  <div className="flex items-center">
                    <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-xs font-medium text-gray-600">{city.tier}</span>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Population:</span>
                    <span className="font-medium">{city.population}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Routes:</span>
                    <span className="font-medium text-brand-600">{city.routes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Region:</span>
                    <span className="font-medium">{city.region}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">City Transport Advantages</h2>
            <p className="text-xl text-gray-600">
              Benefits of shipping to major metropolitan areas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-brand-100 rounded-full">
                  <TruckIcon className="h-8 w-8 text-brand-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Frequent Service</h3>
              <p className="text-gray-600">
                Major cities have daily departures and arrivals, providing 
                maximum flexibility for your shipping schedule.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-brand-100 rounded-full">
                  <MapPinIcon className="h-8 w-8 text-brand-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Access</h3>
              <p className="text-gray-600">
                Metropolitan areas offer better carrier access and 
                door-to-door service availability.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-brand-100 rounded-full">
                  <StarIcon className="h-8 w-8 text-brand-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Competitive Rates</h3>
              <p className="text-gray-600">
                High-volume routes to major cities often provide 
                the most competitive pricing options.
              </p>
            </div>
          </div>
        </div>
      </section>
  {/* CTA Section */}
      <section className="section bg-brand-600 text-white">
        <div className="container text-center">
          <h2 className="heading-2 mb-4">Ready to Ship Your Vehicle?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Furious Auto Shipping 
            for their vehicle transport needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-quote"
              className="btn-secondary btn-lg"
            >
              Get Free Quote
            </a>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
              className="btn-outline btn-lg border-white   hover:bg-white hover:text-brand-600"
            >
              Call {process.env.NEXT_PUBLIC_COMPANY_PHONE}
            </a>
          </div>
        </div>
      </section>
 
      <FAQ
        title={`City Transport FAQ`}
        faqs={faqs} />
    </div>
  )
}