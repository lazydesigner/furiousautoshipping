import Link from 'next/link'
import { MapPinIcon, TruckIcon, StarIcon   } from '@heroicons/react/24/outline'

import {ShoppingCart , Medal , Waypoints , Sun, GraduationCap, Car, Users, Building2, Network, Truck, Timer, TrendingDown, Route, DoorOpen , ShieldCheck  } from 'lucide-react';
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

      
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our National Auto Transport Network
            </h2>
            <div className="h-1 w-32 bg-blue-600 rounded mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Connecting every corner of the country with reliable, professional auto transport services
            </p>
        </div>
 
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
             
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
                <div className="flex items-center mb-6">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                        <MapPinIcon className="w-7 h-7 text-blue-600"/>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Connecting Every Corner of the Country</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                    When you need to <strong className="text-gray-900">ship car across country</strong>, having access to a true nationwide carrier network makes all the difference. Our <strong className="text-gray-900">nationwide auto transport</strong> service covers all 50 states, from major metropolitan areas to smaller cities and suburban communities.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                    Whether you're moving from Seattle to Miami or sending a vehicle from Boston to Phoenix, our network of professional carriers handles thousands of routes across the United States every week.
                </p>

                <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
                    <p className="text-gray-700 text-sm leading-relaxed">
                        A national car shipping network isn't just about having carriers in different states. It's about coordinating logistics across time zones, matching your vehicle with the right carrier at the right time, and ensuring smooth pickups and deliveries regardless of where you're located.
                    </p>
                </div>
            </div>
 
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
                <div className="flex items-center mb-6">
                    <div className="bg-purple-100 rounded-full p-3 mr-4">
                        <Building2 className="w-7 h-7 text-purple-600"/>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Why Major City Routes Work Faster</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-gray-900">Major city car shipping</strong> offers some distinct advantages. Large metro areas like New York City, Los Angeles, Chicago, Dallas, Houston, Atlanta, and Miami serve as natural hubs for auto transport.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                    Carriers run these routes constantly because demand stays high year-round. When you ship between major cities, your vehicle typically gets picked up faster and delivered more quickly than less common routes.
                </p>

                <div className="space-y-3">
                    <div className="flex items-start">
                        <i data-lucide="zap" className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0"></i>
                        <p className="text-sm text-gray-700">Carriers fill trucks more efficiently on popular corridors</p>
                    </div>
                    <div className="flex items-start">
                        <i data-lucide="dollar-sign" className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0"></i>
                        <p className="text-sm text-gray-700">Competitive pricing due to high carrier availability</p>
                    </div>
                    <div className="flex items-start">
                        <i data-lucide="calendar-check" className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0"></i>
                        <p className="text-sm text-gray-700">More scheduling flexibility for your timeline</p>
                    </div>
                </div>
            </div>
        </div>
 
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl p-8 sm:p-10 mb-10 text-white">
            <div className="flex items-center mb-6">
                <div className="bg-white/10 rounded-full p-3 mr-4">
                    <Network  className="w-7 h-7 text-white"/>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">How a National Network Improves Speed & Pricing</h3>
            </div>

            <p className="text-gray-200 leading-relaxed mb-6">
                Routes connecting major metropolitan areas have more carrier options available. This competition naturally works in your favor, both in terms of price and service quality. <strong className="text-white">City-to-city car shipping</strong> along established routes means your vehicle rarely sits waiting for a carrier.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-white/5 backdrop-blur rounded-lg p-5 border border-white/10">
                    <div className="bg-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                        <Truck  className="w-6 h-6 text-blue-300"/>
                    </div>
                    <h4 className="font-semibold text-white mb-2">More Carriers</h4>
                    <p className="text-sm text-gray-300">Higher availability on popular routes</p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-lg p-5 border border-white/10">
                    <div className="bg-green-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                        <Timer className="w-6 h-6 text-green-300"/>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Faster Pickup</h4>
                    <p className="text-sm text-gray-300">Reduced wait times for scheduling</p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-lg p-5 border border-white/10">
                    <div className="bg-purple-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                        <TrendingDown className="w-6 h-6 text-purple-300"/>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Better Rates</h4>
                    <p className="text-sm text-gray-300">Competitive pricing through volume</p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-lg p-5 border border-white/10">
                    <div className="bg-orange-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                        <Route className="w-6 h-6 text-orange-300"/>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Optimized Routes</h4>
                    <p className="text-sm text-gray-300">Efficient coast-to-coast coverage</p>
                </div>
            </div>

            <p className="text-gray-200 leading-relaxed mt-6">
                For <strong className="text-white">coast-to-coast auto transport</strong>, our network ensures your vehicle moves efficiently across the country. Carriers coordinate transfers and handoffs seamlessly, which means fewer delays and more predictable delivery windows.
            </p>
        </div>
 
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-md border border-gray-200 p-8">
                <div className="flex items-center mb-5">
                    <div className="bg-green-100 rounded-full p-3 mr-4">
                        <DoorOpen  className="w-6 h-6 text-green-600"/>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Door-to-Door Shipping Across the Country</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-gray-900">Door-to-door vehicle transport</strong> works the same way whether you're shipping locally or across the nation. Our carriers pick up your vehicle as close to your address as safely accessible and deliver it directly to your destination.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                    This applies to city centers, suburban neighborhoods, and even many rural areas. In dense urban environments, carriers work around parking restrictions and narrow streets to get as close as possible. For suburban and residential areas, most pickups and deliveries happen right at your driveway.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    The convenience of door-to-door service becomes especially valuable for <strong className="text-gray-900">interstate auto transport</strong>. You don't need to coordinate dropping off or picking up your vehicle at a terminal, which saves time and eliminates the hassle of arranging additional transportation.
                </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white flex flex-col justify-center">
                <div className="text-center">
                    <ShieldCheck className="w-16 h-16 text-white mx-auto mb-4 opacity-90"/>
                    <h4 className="text-xl font-bold mb-3">Nationwide Coverage</h4>
                    <p className="text-blue-100 text-sm mb-4">
                        All 50 states, thousands of routes, one reliable network
                    </p>
                    <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                        <p className="text-xs text-blue-100">
                            Fully insured carriers • Licensed & bonded • Real-time tracking
                        </p>
                    </div>
                </div>
            </div>
        </div>
 
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 sm:p-10">
            <div className="flex items-center mb-6">
                <div className="bg-indigo-100 rounded-full p-3 mr-4">
                    <Users  className="w-7 h-7 text-indigo-600"/>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Who Benefits Most from a National Auto Transport Network</h3>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
                Our nationwide coverage serves a wide range of customers with different shipping needs. The flexibility and reliability of a national network make vehicle transport simpler for everyone from individuals to businesses.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <Waypoints  className="w-5 h-5 text-indigo-600 mr-2"/>
                        <h4 className="font-semibold text-gray-900">Relocating Families</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                        Moving across states for work or personal reasons without the stress of a long drive
                    </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <Sun  className="w-5 h-5 text-indigo-600 mr-2"/>
                        <h4 className="font-semibold text-gray-900">Snowbirds</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                        Seasonal residents shipping vehicles between northern and southern states twice a year
                    </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <Medal  className="w-5 h-5 text-indigo-600 mr-2"/>
                        <h4 className="font-semibold text-gray-900">Military Personnel</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                        Service members relocating due to PCS orders or deployment assignments
                    </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <ShoppingCart  className="w-5 h-5 text-indigo-600 mr-2"/>
                        <h4 className="font-semibold text-gray-900">Online Car Buyers</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                        Purchasing vehicles from out-of-state sellers and dealerships
                    </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <Car  className="w-5 h-5 text-indigo-600 mr-2"/>
                        <h4 className="font-semibold text-gray-900">Auto Dealerships</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                        Moving inventory between locations or delivering sold vehicles to customers
                    </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <GraduationCap  className="w-5 h-5 text-indigo-600 mr-2"/>
                        <h4 className="font-semibold text-gray-900">College Students</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                        Shipping vehicles to and from campus at the start and end of semesters
                    </p>
                </div>
            </div>

            <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                    No matter your reason for shipping, a reliable <strong className="text-gray-900">national car shipping network</strong> gives you the peace of mind that comes with proven logistics, transparent pricing, and professional service from pickup to delivery. Our carriers handle everything, so you can focus on your move, your purchase, or your next adventure.
                </p>
            </div>
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