import Link from 'next/link'
import Image from 'next/image'
import {
  SunIcon,
  Cog6ToothIcon,
  CalendarIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'
import CommonHero from '@/components/CommonHero'
import FAQ from '@/components/FAQ';
import SnowbirdShippingProcess from './SnowbirdShippingProcess'
import CommonCTA from '@/components/CommonCTA';


export const metadata = {
  title: 'Snowbird Auto Transport Services | Seasonal Car Shipping NY to FL',
  description: 'Reliable snowbird car shipping from North to South. Daily routes from NY, NJ & Midwest to Florida & Arizona. Door-to-door service for seasonal residents.',
  keywords: 'snowbird auto transport, seasonal car shipping, winter migration, snowbird vehicle transport, seasonal auto shipping',

  alternates: {
    canonical: '/services/snowbird-auto-transport',
  },
}


export default function SnowbirdPage() {

  const faqs = [
    {
      "question": "How much does it cost to ship a car for snowbirds?",
      "answer": "Snowbird auto transport rates fluctuate based on seasonal demand, distance, and vehicle size. During peak migration (October–December southbound and April–May northbound), prices are higher due to limited carrier space. On average, shipping a sedan from New York to Florida ranges from $900 to $1,300, but booking 3–4 weeks early can help lock in a better rate."
    },
    {
      "question": "Can I pack personal items in my car when shipping it?",
      "answer": "Yes, you can pack up to 100 lbs of personal items in the trunk or cargo area at no extra charge. Popular items include golf clubs, seasonal clothing, and linens. For safety reasons, all items must be secured and positioned below the window line. The driver's seat and front passenger seat must remain completely empty."
    },
    {
      "question": "How far in advance should I book my snowbird car transport?",
      "answer": "We strongly recommend booking at least 3 to 4 weeks in advance. The snowbird season creates a massive spike in demand, and carrier spots fill up quickly. Booking early ensures you get your preferred pickup dates and avoids the price premiums often associated with last-minute bookings."
    },
    {
      "question": "How long does it take to ship a car from New York to Florida?",
      "answer": "Transit time for the East Coast corridor (e.g., New York, New Jersey, or Boston to Florida) is typically 3 to 5 days. For Midwest routes (e.g., Chicago to Phoenix), transit usually takes 4 to 6 days. These times are estimates and can be affected by weather or traffic conditions."
    },
    {
      "question": "Do I need to be present for the pickup and delivery of my vehicle?",
      "answer": "Yes, you or a designated agent must be present. A thorough inspection of the vehicle is performed at both pickup and delivery to record its condition on the Bill of Lading. If you are already at your destination or haven't left yet, a friend, neighbor, or family member over the age of 18 can sign on your behalf."
    },
    {
      "question": "Is my vehicle insured during transport?",
      "answer": "Yes, your vehicle is fully insured during transit. We strictly vet our carriers to ensure they maintain valid cargo insurance policies. This coverage protects your vehicle against damage caused by carrier negligence or equipment failure from the moment it is loaded until it is delivered."
    }
  ]

  return (
    <>

      <CommonHero
        h1='Snowbird Car Shipping: Safe, Reliable Seasonal Transport for Your Winter Retreat'
        subHeading='Skip the exhausting 1,500-mile drive on I-95. Arrive at your winter home fresh and relaxed while we deliver your vehicle safely to your driveway.'
        img='/images/snowbird-auto-transport.png' />

      <section className="section">
        <div className="container">
          <h2 className="heading-2 mb-6 mt-2">Skip the I-95 traffic. Start your winter in comfort.</h2>
          <p className='my-2'>For over 7+ years, we have watched the seasonal migration patterns change. There was a time when the drive south was part of the adventure. But let’s be honest: battling aggressive drivers on I-95, navigating construction zones in the Carolinas, or facing unexpected snowstorms in the Midwest is not how you want to start your retirement season.</p>

          <p className='my-2'>You’ve worked hard to enjoy your winters in the sun. You shouldn’t have to start your relaxation with a grueling 1,200-mile road trip that puts unnecessary wear on your vehicle—and on you.</p>

          <p className='my-2'>At Furious Auto Shipping, we specialize in <Link href=''>Snowbird Car Shipping</Link>. We understand that for our seasonal residents, your vehicle is your lifeline to independence while you are at your winter home. We offer a safer, stress-free alternative to driving, allowing you to fly comfortably to your destination while we handle the logistics of getting your car to your driveway.</p>
          <p className='my-2'>Whether you are heading to the beaches of Florida or the deserts of Arizona, our team provides the peace of mind that comes from two decades of experience serving the senior and retiree community.</p>

          <h2 className="heading-2 mb-6 mt-2">What Is Snowbird Auto Transport?</h2>
          <p className='my-2'>In the logistics world, we often refer to "seasonal auto transport" as a specific service designed for the unique migration patterns of retirees. Unlike standard car shipping, which happens randomly throughout the year, <Link href=''>Snowbird Car Shipping</Link> is a synchronized event. It aligns with the seasons—moving vehicles from the freezing North to the warm South in the fall, and returning them in the spring.</p>
          <p className='my-2'>For our clients, this isn't just about moving metal; it’s about lifestyle continuity. It means having your own trusted vehicle—with its familiar seats, controls, and comfort—waiting for you in Naples, Scottsdale, or Palm Springs.</p>
          <p className='my-2'>Why do so many seasonal residents choose professional transport over driving? It comes down to safety and mathematics. When you calculate the cost of fuel, multiple nights in hotels, meals on the road, potential mechanical issues, and the physical toll of multi-day driving, professional shipping is often the more economical and certainly the safer choice.</p>


          <div className="my-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Base Access & Delivery Options</h3>

            <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-gradient-to-r from-brand-600 to-brand-700">
                    <th className="px-6 py-4 text-left font-semibold text-white text-base">
                      Benefit
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-white text-base">
                      Why It Matters
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-brand-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-bold text-gray-900">No long-distance driving</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Safer for older adults; eliminates driver fatigue and highway risks.
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 hover:bg-brand-50 transition-colors bg-brand-25">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                        <span className="font-bold text-gray-900">Door-to-door delivery</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      <div className="flex items-start gap-2">
                        <span>Minimal physical effort required; we pick up and drop off as close to your home as possible.</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 hover:bg-brand-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="font-bold text-gray-900">Predictable seasonal lanes</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Established routes mean reliable transit times and experienced drivers.
                    </td>
                  </tr>

                  <tr className="hover:bg-brand-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="font-bold text-gray-900">Faster transit</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Carriers drive in shifts or dedicated lanes, often arriving faster than a leisure drive.
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 hover:bg-brand-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                        <span className="font-bold text-gray-900">Cost control</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Eliminates the variable costs of hotels, fuel, and vehicle wear-and-tear.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


          <h2 className="heading-2 mb-6 mt-2">When to Book: Seasonality Matters</h2>
          <p className='my-2'>If there is one piece of advice we give after 7+ years in this business, it is this: <b>Timing is everything</b>.</p>
          <p className='my-2'>The snowbird migration is a massive logistical event. Between October and December, hundreds of thousands of vehicles move south simultaneously. Conversely, in April and May, that tide reverses. Because carrier space on trucks is limited, this creates a supply and demand curve that directly impacts <Link href=''>Snowbird vehicle transport rates</Link>.</p>
          <p className='my-2'>Waiting until the week before your flight to book your car transport is a recipe for stress and higher prices. As demand spikes, the remaining spots on carriers become more expensive.</p>
          <p className='my-2'>To secure the best rate and your preferred dates, we strongly recommend booking at least 3 to 4 weeks in advance. However, for the absolute best experience, look at the table below for our recommended booking windows.</p>

          <div className="my-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Best Time to Book Snowbird Transport</h3>

            <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-gradient-to-r from-brand-600 to-brand-700">
                    <th className="px-6 py-4 text-left font-semibold text-white text-base">
                      Direction
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-white text-base">
                      Best Booking Window
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-white text-base">
                      What Happens If You Wait
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-brand-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-bold text-gray-900">Going South</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      September – October
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Higher rates and tighter schedules in Nov–Dec due to holiday rush.
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 hover:bg-brand-50 transition-colors bg-brand-25">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                        <span className="font-bold text-gray-900">Going North</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      <span>April – May</span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      <span>Limited carrier availability as everyone tries to leave at once; prices peak.</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className='my-2'>By booking early, you lock in your spot on a carrier before the "rush hour" pricing takes effect. It allows us to pair your vehicle with the most experienced drivers on your specific route.</p>

          <h2 className="heading-2 mb-6 mt-2">Famous Snowbird Transport Corridors</h2>
          <p className='my-2'>Over the last two decades, we have established deep relationships with carriers who operate exclusively on specific <b>"Snowbird Runs."</b> These drivers know these routes inside and out—they know the safe rest stops, the weather patterns, and the best ways to bypass city traffic.</p>

          <div className="space-y-12 my-12">
            <div className="bg-gradient-to-br from-brand-50 to-cyan-50 rounded-2xl overflow-hidden shadow-lg border border-brand-100">
              <div className="bg-gradient-to-r from-brand-600 to-cyan-600 px-6 md:px-8 py-5">
                <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  East Coast Snowbird Car Shipping Routes
                </h3>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The most heavily traveled corridor in the United States during the fall is the route from the Northeast to Florida.
                  If you are looking to ship a car from New York to Florida, you are joining a massive movement of seasonal residents
                  escaping the cold.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-500">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">Origin Cities</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">We service clients originating from:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-brand-600 font-bold mt-1">•</span>
                        <span>New York (Long Island, Upstate, and NYC)</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-brand-600 font-bold mt-1">•</span>
                        <span>New Jersey</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-brand-600 font-bold mt-1">•</span>
                        <span>Boston and wider New England</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-brand-600 font-bold mt-1">•</span>
                        <span>Pennsylvania</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">Florida Destinations</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Warm coastal hubs include:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-orange-600 font-bold mt-1">•</span>
                        <span>Miami and Fort Lauderdale</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-orange-600 font-bold mt-1">•</span>
                        <span>West Palm Beach and Boca Raton</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-orange-600 font-bold mt-1">•</span>
                        <span>Naples and Fort Myers</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-amber-900">💡 Why Ship Instead of Drive:</span>
                    The I-95 corridor is notorious for unpredictable traffic and high accident rates. By handing your keys to us,
                    you avoid the stress of the Washington D.C. beltway and the monotony of the long drive through the Carolinas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl overflow-hidden shadow-lg border border-orange-100">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 md:px-8 py-5">
                <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Midwest to Arizona Snowbird Routes
                </h3>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  While the East Coast heads to Florida, our Midwestern clients prefer the dry heat of the Southwest. We specialize
                  in transporting cars to Arizona for winter, servicing a massive influx of residents from the "Rust Belt" and upper Midwest.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">Midwest Origins</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Primary origins include:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-purple-600 font-bold mt-1">•</span>
                        <span>Chicago and the Illinois suburbs</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-purple-600 font-bold mt-1">•</span>
                        <span>Minnesota (Twin Cities)</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-purple-600 font-bold mt-1">•</span>
                        <span>Michigan and Wisconsin</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-500">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">Valley of the Sun</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Almost always destined for:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-yellow-600 font-bold mt-1">•</span>
                        <span>Phoenix</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-yellow-600 font-bold mt-1">•</span>
                        <span>Scottsdale</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-yellow-600 font-bold mt-1">•</span>
                        <span>Mesa and Sun City</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 mt-3 p-5 rounded-r-xl">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-amber-900">💡 Why Ship Instead of Drive:</span>
                    The drive from Chicago to Phoenix is roughly 1,750 miles. That is a grueling 26-hour drive without stops. In winter conditions, crossing the plains can be treacherous due to ice and wind. Our carriers are equipped to handle these cross-country hauls safely, ensuring your vehicle arrives ready for golf season.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Best Time to Book Snowbird Transport</h3>

            <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-gradient-to-r from-brand-600 to-brand-700">
                    <th className="px-6 py-4 text-left font-semibold text-white text-base">
                      Route
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-white text-base">
                      Why It’s Popular
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-brand-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-gray-900"><Link className='font-bold text-brand-500' href='/locations/new-york/florida'>New York → Florida</Link></span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      The largest Snowbird corridor in the country; high carrier availability.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-brand-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-gray-900"><Link className='font-bold text-brand-500' href='/locations/new-jersey/florida'>New Jersey → Florida</Link></span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Extremely high retiree population relocating for 4–6 months.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-brand-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-gray-900"><Link className='font-bold text-brand-500' href='/locations/boston/florida'>Boston → Florida</Link></span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      A classic seasonal East Coast migration route to escape Nor'easters.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-brand-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-gray-900"><Link className='font-bold text-brand-500' href='/locations/chicago/phoenix'>Chicago → Phoenix</Link></span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      The standard Midwest escape route to a warm, dry climate.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-brand-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-gray-900"><Link className='font-bold text-brand-500' href='/locations/michigan/scottsdale'>Michigan → Scottsdale</Link></span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Residents fleeing harsh lake-effect winters for the mild desert.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-brand-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-gray-900"><Link className='font-bold text-brand-500' href='/locations/minnesota/arizona'>Minnesota → Arizona</Link></span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Extreme cold avoidance; a very popular route for RV owners shipping secondary cars.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="heading-2 mb-6 mt-2">Personal Items Policy: Pack Your Golf Clubs</h2>
          <p className='my-2'>One of the most common questions we get from our seasonal clients is: "Can I pack my things in the car?"</p>
          <p className='my-2'>We know that flying is a hassle, and baggage fees are skyrocketing. We want to make your transition as easy as possible. Unlike many strict freight brokers, we allow you to pack personal items in your vehicle, provided you follow a few safety rules.</p>
          <p className='my-2'>The <b>"100 lbs in the Trunk"</b> Rule: You may pack up to <b>100 pounds of personal items</b> in the trunk or cargo area of your vehicle at no extra charge.</p>

          <h3 className="text-4xl my-4 font-semibold text-gray-900">What to Pack:</h3>
          <ul>
            <li className='my-2'><b>Golf Clubs:</b> This is the #1 item our Snowbirds ship. Save the risk of the airline damaging your clubs.</li>
            <li className='my-2'><b>Seasonal Clothing:</b> Pack your summer wardrobe so you don't have to carry heavy suitcases through the airport.</li>
            <li className='my-2'><b>Linens and household goods:</b> Small boxes of necessities for your winter condo.</li>
          </ul>

          <h3 className="text-4xl my-4 font-semibold text-gray-900">Important Safety Requirements:</h3>
          <ul>
            <li className='my-2'><b>Below the Window Line:</b> All items must be secured in the trunk or cargo area and must not be visible above the window line. This is crucial for the driver’s visibility and to prevent theft.</li>
            <li className='my-2'><b>No Heavy Equipment:</b> Do not pack heavy tools or furniture, as this can put the truck over its legal weight limit.</li>
            <li className='my-2'><b>Driver Discretion:</b> The driver has the final say on safety. If the car is overloaded, they may ask you to remove items.</li>
          </ul>
          <p className='my-2'>By utilizing your trunk space effectively, you can fly with just a carry-on and meet your belongings at your destination.</p>

        </div>
      </section>

      <SnowbirdShippingProcess />





      <section className="section">
        <div className="container">

          <div className="bg-gradient-to-br from-slate-50 to-brand-50 rounded-2xl p-8 md:p-10 shadow-xl border border-gray-200 my-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Transparent Pricing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Snowbird Vehicle Transport Rates
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                You will likely see different prices depending on when and where you are shipping.
                Snowbird vehicle transport rates are dynamic, much like airline tickets.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Factors Influencing Your Rate:</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-500 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Distance</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The base cost is calculated per mile traveled.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Seasonality</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Shipping South in October costs more than July due to higher demand.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Vehicle Size</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      SUVs and trucks cost slightly more than sedans due to space.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Lead Time</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Last-minute bookings often incur "expedited" fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-600 to-cyan-600 rounded-xl p-6 md:p-8 text-white">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-brand-100 leading-relaxed">
                    We believe in transparent pricing. When you get a quote from Furious Auto Shipping, it is comprehensive.
                    We don't believe in bait-and-switch tactics. We provide a rate that reflects a quality carrier who carries
                    proper insurance and treats your vehicle with respect.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="heading-2 mb-6 mt-2">Who Snowbird Auto Transport Is Best For</h2>
          <p className='my-2'>Our services are tailored specifically for:</p>
          <ul>
            <li className='my-2'><b>Retirees and Seniors:</b> Those who want the freedom of their own car without the physical strain of a multi-day drive.</li>
            <li className='my-2'><b>Seasonal Residents:</b> People who split their time 50/50 between two homes and need a reliable schedule.</li>
            <li className='my-2'><b>RV Travelers:</b> If you drive a large Motorhome but want your smaller daily-driver vehicle available for errands, we can ship the car to meet you at your RV park.</li>
            <li className='my-2'><b>Family Members:</b> If you are an adult child helping your aging parents relocate for the winter, we can coordinate with you to ensure their car arrives safely, taking one worry off your plate.</li>
          </ul>

          <h2 className="heading-2 mb-6 mt-2">Secure Your Seasonal Route Today</h2>
          <p className='my-2'>Don’t let the stress of logistics ruin the excitement of your winter getaway. You’ve earned your time in the sun—let us help you get there.</p>
          <p className='my-2'>At <Link href='/'>Furious Auto Shipping</Link>, we treat every vehicle as if it belongs to our own parents. We combine twenty years of logistics expertise with a commitment to old-fashioned customer care.</p>

          <div className="space-y-16 my-12">
            {/* <!-- Section 1: Snowbird Routes --> */}
            <div className="  rounded-2xl p-6 md:p-8  ">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full font-semibold text-sm mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>SEASONAL ROUTES</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  The "Snowbird" Routes (Seasonal: North ↔ South)
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl shadow-lg">
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-gradient-to-r from-orange-600 to-red-600">
                      <th className="px-6 py-4 text-left font-bold text-white text-base">Route Name</th>
                      <th className="px-6 py-4 text-left font-bold text-white text-base">Origin State & Cities (North)</th>
                      <th className="px-6 py-4 text-left font-bold text-white text-base">Destination State & Cities (South)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-orange-50 transition-colors">
                      <td className="px-6 py-5">
                        <div className="font-bold text-gray-900 text-lg mb-1">The East Coast Run</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div className="space-y-2">
                          <div><span className="font-semibold">New York:</span> NYC, Long Island, Albany</div>
                          <div><span className="font-semibold">New Jersey:</span> Newark, Jersey City, Trenton</div>
                          <div><span className="font-semibold">Connecticut:</span> Hartford, Stamford</div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div><span className="font-semibold">Florida:</span> Miami, Ft. Lauderdale, West Palm Beach, Boca Raton, Naples, Fort Myers, Tampa, Orlando</div>
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200 hover:bg-orange-50 transition-colors bg-orange-25">
                      <td className="px-6 py-5">
                        <div className="font-bold text-gray-900 text-lg mb-1">The Midwest Escape</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div className="space-y-2">
                          <div><span className="font-semibold">Illinois:</span> Chicago, Naperville, Aurora</div>
                          <div><span className="font-semibold">Michigan:</span> Detroit, Grand Rapids, Ann Arbor</div>
                          <div><span className="font-semibold">Wisconsin:</span> Milwaukee, Madison</div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div className="space-y-2">
                          <div><span className="font-semibold">Arizona:</span> Phoenix, Scottsdale, Mesa, Tucson</div>
                          <div><span className="font-semibold">Florida:</span> Tampa, Orlando, Sarasota, Ft. Myers, Miami</div>
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200 hover:bg-orange-50 transition-colors">
                      <td className="px-6 py-5">
                        <div className="font-bold text-gray-900 text-lg mb-1">The Northeast Corridor</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div className="space-y-2">
                          <div><span className="font-semibold">Massachusetts:</span> Boston, Worcester</div>
                          <div><span className="font-semibold">Pennsylvania:</span> Philadelphia, Pittsburgh</div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div className="space-y-2">
                          <div><span className="font-semibold">Florida:</span> Miami, Ft. Lauderdale, Hollywood</div>
                          <div><span className="font-semibold">South Carolina:</span> Myrtle Beach, Charleston, Hilton Head</div>
                        </div>
                      </td>
                    </tr>

                    <tr className="hover:bg-orange-50 transition-colors">
                      <td className="px-6 py-5">
                        <div className="font-bold text-gray-900 text-lg mb-1">The Northwest Migration</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div className="space-y-2">
                          <div><span className="font-semibold">Washington:</span> Seattle, Tacoma</div>
                          <div><span className="font-semibold">Oregon:</span> Portland, Salem</div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div className="space-y-2">
                          <div><span className="font-semibold">Arizona:</span> Phoenix, Scottsdale, Tucson</div>
                          <div><span className="font-semibold">California:</span> Palm Springs, San Diego, Los Angeles</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* <!-- Section 2: Cross-Country Routes --> */}
            <div className=" rounded-2xl p-6 md:p-8  ">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-brand-600 text-white px-4 py-2 rounded-full font-semibold text-sm mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>CROSS-COUNTRY</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Cross-Country Routes (East ↔ West)
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl shadow-lg">
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-gradient-to-r from-brand-600 to-cyan-600">
                      <th className="px-6 py-4 text-left font-bold text-white text-base">Route Name</th>
                      <th className="px-6 py-4 text-left font-bold text-white text-base">Origin State & Cities</th>
                      <th className="px-6 py-4 text-left font-bold text-white text-base">Destination State & Cities</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-brand-50 transition-colors">
                      <td className="px-6 py-5">
                        <div className="font-bold text-gray-900 text-lg mb-1">The Transcontinental</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div><span className="font-semibold">California:</span> Los Angeles, San Francisco, San Diego</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div className="space-y-2">
                          <div><span className="font-semibold">New York:</span> NYC, Long Island</div>
                          <div><span className="font-semibold">New Jersey:</span> Newark, Jersey City</div>
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200 hover:bg-brand-50 transition-colors bg-brand-25">
                      <td className="px-6 py-5">
                        <div className="font-bold text-gray-900 text-lg mb-1">The Southern Cross</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div><span className="font-semibold">California:</span> Los Angeles, San Diego, Riverside</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div><span className="font-semibold">Florida:</span> Miami, Orlando, Jacksonville, Tampa</div>
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200 hover:bg-brand-50 transition-colors">
                      <td className="px-6 py-5">
                        <div className="font-bold text-gray-900 text-lg mb-1">The Tech Corridor</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div className="space-y-2">
                          <div><span className="font-semibold">Washington:</span> Seattle, Redmond</div>
                          <div><span className="font-semibold">California:</span> San Francisco, San Jose, Palo Alto</div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div className="space-y-2">
                          <div><span className="font-semibold">Texas:</span> Austin, Dallas</div>
                          <div><span className="font-semibold">New York:</span> NYC</div>
                        </div>
                      </td>
                    </tr>

                    <tr className="hover:bg-brand-50 transition-colors">
                      <td className="px-6 py-5">
                        <div className="font-bold text-gray-900 text-lg mb-1">The Sun Belt</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div><span className="font-semibold">California:</span> Los Angeles, Riverside, Orange County</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div><span className="font-semibold">Texas:</span> Dallas, Houston, San Antonio, Austin</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* <!-- Section 3: Emerging Routes --> */}
            <div className=" rounded-2xl p-6 md:p-8 ">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-sm mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>GROWTH MARKETS</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Emerging & Relocation Routes (Growth Markets)
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl shadow-lg">
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-600 to-emerald-600">
                      <th className="px-6 py-4 text-left font-bold text-white text-base">Route Name</th>
                      <th className="px-6 py-4 text-left font-bold text-white text-base">Origin State & Cities</th>
                      <th className="px-6 py-4 text-left font-bold text-white text-base">Destination State & Cities</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-green-50 transition-colors">
                      <td className="px-6 py-5">
                        <div className="font-bold text-gray-900 text-lg mb-1">Cal-Exodus (East)</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div><span className="font-semibold">California:</span> Los Angeles, SF Bay Area, San Diego</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div className="space-y-2">
                          <div><span className="font-semibold">Texas:</span> Austin, Dallas, Houston</div>
                          <div><span className="font-semibold">Tennessee:</span> Nashville, Knoxville</div>
                          <div><span className="font-semibold">Nevada:</span> Las Vegas, Reno</div>
                          <div><span className="font-semibold">Arizona:</span> Phoenix, Tucson</div>
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200 hover:bg-green-50 transition-colors bg-green-25">
                      <td className="px-6 py-5">
                        <div className="font-bold text-gray-900 text-lg mb-1">Northeast Flight</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div className="space-y-2">
                          <div><span className="font-semibold">New York:</span> NYC, Buffalo</div>
                          <div><span className="font-semibold">New Jersey:</span> Newark</div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div className="space-y-2">
                          <div><span className="font-semibold">North Carolina:</span> Charlotte, Raleigh, Asheville</div>
                          <div><span className="font-semibold">Tennessee:</span> Nashville</div>
                          <div><span className="font-semibold">Texas:</span> Austin, Dallas</div>
                        </div>
                      </td>
                    </tr>

                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="px-6 py-5">
                        <div className="font-bold text-gray-900 text-lg mb-1">Midwest to South</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div><span className="font-semibold">Illinois:</span> Chicago</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div className="space-y-2">
                          <div><span className="font-semibold">Tennessee:</span> Nashville</div>
                          <div><span className="font-semibold">Georgia:</span> Atlanta</div>
                          <div><span className="font-semibold">Texas:</span> Dallas, Houston</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* <!-- Section 4: Hub-to-Hub Routes --> */}
            <div className=" rounded-2xl p-6 md:p-8 ">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full font-semibold text-sm mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>REGIONAL ROUTES</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Major Hub-to-Hub Routes (Regional)
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl shadow-lg">
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-600 to-pink-600">
                      <th className="px-6 py-4 text-left font-bold text-white text-base">Route Name</th>
                      <th className="px-6 py-4 text-left font-bold text-white text-base">Origin State & Cities</th>
                      <th className="px-6 py-4 text-left font-bold text-white text-base">Destination State & Cities</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-purple-50 transition-colors">
                      <td className="px-6 py-5">
                        <div className="font-bold text-gray-900 text-lg mb-1">West Coast I-5</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div><span className="font-semibold">California:</span> San Diego, Los Angeles</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div className="space-y-2">
                          <div><span className="font-semibold">Washington:</span> Seattle, Tacoma</div>
                          <div><span className="font-semibold">Oregon:</span> Portland, Eugene</div>
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200 hover:bg-purple-50 transition-colors bg-purple-25">
                      <td className="px-6 py-5">
                        <div className="font-bold text-gray-900 text-lg mb-1">Texas Triangle</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div><span className="font-semibold">Texas:</span> Dallas/Fort Worth</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div><span className="font-semibold">Texas:</span> Houston, Austin, San Antonio</div>
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200 hover:bg-purple-50 transition-colors">
                      <td className="px-6 py-5">
                        <div className="font-bold text-gray-900 text-lg mb-1">East Coast I-95</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div className="space-y-2">
                          <div><span className="font-semibold">Florida:</span> Miami, Jacksonville</div>
                          <div><span className="font-semibold">Georgia:</span> Atlanta, Savannah</div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div><span className="font-semibold">North Carolina:</span> Charlotte, Raleigh</div>
                      </td>
                    </tr>

                    <tr className="hover:bg-purple-50 transition-colors">
                      <td className="px-6 py-5">
                        <div className="font-bold text-gray-900 text-lg mb-1">The Plains Run</div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div className="space-y-2">
                          <div><span className="font-semibold">Colorado:</span> Denver, Colorado Springs</div>
                          <div><span className="font-semibold">Texas:</span> Dallas, Houston</div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-gray-700">
                        <div><span className="font-semibold">Illinois:</span> Chicago</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>


        </div>
      </section>

      <CommonCTA b='Get Your Free Snowbird Transport Quote' />
      <FAQ
                title="Snowbird Car Shipping FAQ"
                subtitle="Common questions about Snowbird Car Shipping services"
                faqs={faqs} />

    </>
  )
}