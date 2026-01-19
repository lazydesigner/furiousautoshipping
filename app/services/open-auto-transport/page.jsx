import React from 'react'
import Link from 'next/link'
import CommonHero from '@/components/CommonHero'
import FAQ from '@/components/FAQ';
import CommonCTA from '@/components/CommonCTA';
import ShippingProcess from './ShippingProcess'
import { Truck, Shield, Route, TrendingDown, MapPin, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Open Car Shipping Services | Safe, Fast & Affordable | Furious Auto Shipping',
  description: 'Save money with the industry standard for vehicle transport. Our Open Car Shipping is safe, fully insured, and 40% cheaper than enclosed. Get a free quote today!',
  keywords: 'Military auto transport, Military car shipping, winter migration, Military vehicle transport, seasonal auto shipping',

  alternates: {
    canonical: '/services/open-auto-transport',
  },
}


export default function page() {
  const routes = [
    {
      route: "Los Angeles, CA to Dallas, TX",
      distance: "1,400 miles",
      openTransport: "$1,050",
      enclosedTransport: "$1,550",
      savings: "$500"
    },
    {
      route: "Miami, FL to New York, NY",
      distance: "1,300 miles",
      openTransport: "$950",
      enclosedTransport: "$1,450",
      savings: "$500"
    },
    {
      route: "Chicago, IL to Phoenix, AZ",
      distance: "1,750 miles",
      openTransport: "$1,200",
      enclosedTransport: "$1,750",
      savings: "$550"
    },
    {
      route: "Seattle, WA to Atlanta, GA",
      distance: "2,600 miles",
      openTransport: "$1,500",
      enclosedTransport: "$2,200",
      savings: "$700"
    }
  ];

  const faqs = [
    {
      "question": "Will my car get dirty on an open carrier?",
      "answer": "Yes, likely a little bit. Think of it like a long road trip without the mileage on your odometer. Your car is exposed to the air, so it may arrive with some road dust or perhaps a few bug splatters, exactly as if you had driven it yourself. We recommend a quick car wash upon delivery, and it will look good as new."
    },
    {
      "question": "Can I put personal items in the car?",
      "answer": "The Department of Transportation (DOT) strictly regulates this. Generally, auto haulers are not licensed to carry household goods. However, most drivers will allow up to 100 lbs of personal items locked in the trunk. Please keep the front seats and floorboards clear so the driver can safely load and unload the vehicle. Note: Personal items inside the car are not covered by the carrier's insurance."
    },
    {
      "question": "How long does open auto transport take?",
      "answer": `It depends on the distance.

0-500 miles: 1 to 2 days || 

500-1500 miles: 3 to 5 days || 

1500-2500 miles: 6 to 8 days ||

Coast-to-Coast: 7 to 10 days Drivers are limited by law to driving roughly 500 miles per day to ensure safety.`
    },
    {
      "question": "Is my car insured during transport?",
      "answer": "Absolutely. Every carrier in our network is required by federal law to carry Cargo Insurance. In the unlikely event of damage caused by driver negligence or equipment failure during transit, the carrier’s insurance covers the repairs."
    },
    {
      "question": "Ready to Move Your Car?",
      "answer": "Don't overpay for shipping, and don't settle for unverified carriers. Choose the Industry Standard."
    }
  ];

  return (
    <>
      <CommonHero
        h1="Open Car Shipping: The Smart, Standard Way to Move Your Vehicle"
        subheading="The Industry Standard trusted by Dealerships, Manufacturers, and Everyday Drivers."
        img="/images/Open-Transport.png"
      />

      <section className="section">
        <div className="container">
          <p className='my-2'>When you see a brand-new car gleaming on a dealership lot, looking pristine and ready for a test drive, have you ever wondered how it got there? It didn’t teleport. It was likely shipped on an open carrier—the exact same type of truck <b>Furious Auto Shipping</b> uses to move your vehicle.</p>

          <p className='my-2'>At <Link className='font-bold text-brand-500' href='/'>Furious Auto Shipping</Link>, we believe in transparency. In my 7+ years in the auto logistics industry, I’ve seen the market shift, but one thing remains constant: <Link className='font-bold text-brand-500' href=''>Open Auto Transport</Link> is the backbone of vehicle shipping in the United States. It accounts for roughly 95% of all commercial vehicle moves. Why? Because it is efficient, safe, and cost-effective.</p>
          <p className='my-2'>If you are looking for the perfect balance of speed, affordability, and reliability, <b>open car shipping</b> is your answer.</p>

          <h2 className="heading-2 mb-6 mt-2">What Is Open Auto Transport?</h2>
          <p className='my-2'><Link className='font-bold text-brand-500' href=''>Open auto transport</Link> (<b>often called Standard Auto Transport</b>) is the service where your vehicle is shipped on an open-air trailer, typically a two-level carrier capable of hauling 7 to 10 vehicles at once. These are the long trucks you see on the interstate every day.</p>
          <p className='my-2'>Because these trailers carry more vehicles per trip than <Link className='font-bold text-brand-500' href='/services/enclosed-auto-transport'>enclosed carriers</Link> (which usually only hold 2 to 6), the cost per vehicle is significantly lower. It is the most economical way to ship a car across state lines or cross-country without sacrificing professional handling</p>
        </div>
      </section>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How It Works: The Logistics
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Unlike a tow truck that drags a car, open transport trailers use high-tech
              hydraulic systems to stack and arrange vehicles securely.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Step 1: Loading */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-brand-100 rounded-full mb-6">
                <Truck className="w-8 h-8 text-brand-600" />
              </div>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold text-brand-600 mr-2">1</span>
                <h3 className="text-2xl font-bold text-slate-900">Loading</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Your vehicle is driven onto the trailer via secure ramps.
              </p>
            </div>

            {/* Step 2: Securement */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold text-emerald-600 mr-2">2</span>
                <h3 className="text-2xl font-bold text-slate-900">Securement</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use soft-strap tie-downs over the tires—never the chassis—to secure the car.
              </p>
              <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">Why it matters:</span> This allows the car's
                  own suspension to absorb the bumps of the road, preventing alignment issues.
                </p>
              </div>
            </div>

            {/* Step 3: Transit */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                <Route className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold text-purple-600 mr-2">3</span>
                <h3 className="text-2xl font-bold text-slate-900">Transit</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                The driver manages a specific route, picking up and dropping off vehicles along the way.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">Shared transport:</span> This efficient method
                  keeps costs lower while maintaining professional service.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Feature */}
          <div className="bg-gradient-to-r from-brand-800 to-brand-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Professional Transport, Every Time
                </h3>
                <p className="text-slate-300 text-lg">
                  Our experienced drivers ensure your vehicle arrives safely and on schedule.
                </p>
              </div>
              <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-colors duration-300 shadow-lg whitespace-nowrap">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>


      <section className="section">
        <div className="container">

          <h2 className="heading-2 mb-6 mt-2">Addressing the Fear: Is Open Transport Safe?</h2>
          <p className='my-2'>This is the number one question I hear from customers: <b>"If it's open, won't my car get damaged by rocks or weather?"</b></p>
          <p className='my-2'>It is a valid concern, but let’s look at the reality of the road.</p>
          <h3 className="text-4xl my-4 font-semibold text-gray-900">The "Road Debris" Myth</h3>
          <p className='my-2'>There is a misconception that cars on open trailers are constantly pelted by rocks. In reality, your car is actually safer on a trailer than it is being driven.</p>
          <ul className='list-disc ml-4'>
            <li className='my-2'><b>Elevation:</b> On a trailer, your vehicle is elevated 6 to 10 feet off the ground, well above the "spray zone" where rocks usually fly.</li>
            <li className='my-2'><b>Structural Protection:</b> The trailer itself acts as a cage. The beams and ramps shield the vehicles. Furthermore, the cars are strategically stacked. The angled decks often act as a roof for the cars below, and the cars on top are too high for standard road kick-up to reach.</li>
            <li className='my-2'><b>Stationary Safety:</b> When you drive your car on the highway, you are hitting bugs and debris at 70 MPH. When your car is on a trailer, it is stationary. It isn't impacting anything; the truck is taking the impact.</li>
          </ul>

          <p className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-4">In two decades of managing logistics, I can tell you that damage claims on open transport are incredibly rare—less than 1%. Most vehicles arrive exactly as they left, perhaps with a little road dust that washes right off.</p>

          <h2 className="heading-2 mb-6 mt-2">The Speed Advantage: Why Open is Faster</h2>
          <p className='my-2'>If you are in a rush, <Link href=''>open auto transport</Link> is almost always the superior choice over enclosed shipping. This comes down to simple supply and demand metrics.</p>
          <p className='my-2'>In the US auto transport market, there are roughly <b>10 open carriers for every 1 enclosed carrier</b>.</p>
          <h3 className="text-4xl my-4 font-semibold text-gray-900">High Availability = Faster Pickup</h3>
          <p className='my-2'>Because there are so many open carriers constantly running routes across major interstates (<b>like I-10, I-95, and I-80</b>), we can usually dispatch a driver to pick up your vehicle within 1 to 3 days of your order.</p>
          <p className='my-2'>With enclosed shipping, you might wait a week or more just for a specialized truck to be in your area. If you need to move a car for a job relocation, a college move, or a standard purchase, the open carrier network is designed for speed and efficiency.</p>

          <h2 className="heading-2 mb-6 mt-2">Cost Comparison: Open vs. Enclosed</h2>
          <p className='my-2'>We want you to make the financial decision that makes sense for you. Because open carriers split the fuel and driver costs across up to 10 vehicles, the savings are passed directly to you.</p>
          <p className='my-2'>Here is a realistic look at the price gap for a standard sedan on popular routes.</p>


        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-br from-brand-50 via-blue-50 to-brand-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4">
              Price Gap Analysis
            </h3>
          </div>

          {/* Desktop Table */}
          <div className="block bg-white rounded-2xl shadow-2xl overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-brand-800 to-brand-900 text-white">
                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Route
                    </div>
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">
                    Distance (Approx)
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">
                    Open Transport Cost
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">
                    Enclosed Transport Cost
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      Your Savings
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {routes.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-brand-200 hover:bg-blue-50 transition-colors duration-200 ${index === routes.length - 1 ? 'border-b-0' : ''
                      }`}
                  >
                    <td className="px-6 py-5">
                      <div className="font-semibold text-brand-900">{row.route}</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-brand-700 font-medium">{row.distance}</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-bold text-lg">
                        {row.openTransport}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-brand-600 font-semibold text-lg line-through">
                        {row.enclosedTransport}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg font-bold text-xl">
                        <TrendingDown className="w-5 h-5" />
                        {row.savings}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          {/* Bottom Note */}
          <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-blue-200">
            <p className="text-brand-700 text-center">
              <span className="font-semibold text-brand-900">Note:</span> Prices fluctuate based on fuel costs, seasonality, and vehicle size. Contact Furious Auto Shipping for a live, accurate quote.
            </p>
          </div>
        </div>
      </div>



      <section className="section">
        <div className="container">
          <h3 className="text-4xl my-4 font-semibold text-gray-900">When Should You Pay Extra for Enclosed?</h3> 
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <h3 className="text-xl font-bold text-red-900">
              ⚠️ Upgrade to Enclosed Transport If:
            </h3>
          </div>
          <ul className="space-y-2 ml-9 text-slate-700">
            <li>• Your car is worth over $100,000</li>
            <li>• The vehicle is a classic antique (where original paint is irreplaceable)</li>
            <li>• The vehicle is a high-end exotic (Ferrari, Lamborghini) with very low ground clearance</li>
            <li>• You're shipping a convertible with a soft top that is old or brittle</li>
          </ul>
        </div>

        {/* Success Box - Open Transport */}
        <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
            <h3 className="text-xl font-bold text-emerald-900">
              ✅ Open Transport Is Perfect For Everything Else
            </h3>
          </div>
          <p className="ml-9 text-slate-700 mb-3">
            Your daily driver, your SUV, your kid's college car—Open Transport is the financial winner.
          </p>
          <div className="ml-9 bg-emerald-600 text-white rounded-lg px-4 py-3 inline-block font-semibold">
            💰 Save $500-$700 per shipment
          </div>
        </div>
        </div>
      </section>
      <ShippingProcess />
      <CommonCTA b='Get Your Free Open Transport Quote Now' />

      <FAQ
        title="Open Car Shipping FAQ"
        subtitle="We know you have questions. Here are the answers to the most common queries we receive about open car shipping."
        faqs={faqs} />

    </>
  )
}
