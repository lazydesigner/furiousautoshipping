import React from 'react'
import Link from 'next/link'
import CommonHero from '@/components/CommonHero';
import FAQ from '@/components/FAQ';
import CommonCTA from '@/components/CommonCTA';
import { KeyRound, Truck, Home, DollarSign, AlertTriangle, MapPin } from 'lucide-react';
import HandoverProcess from './HandoverProcess'
import DoorToDoorBenefits from './DoorToDoorBenefits'

export const metadata = {
  title: 'Door-to-Door Auto Transport | Home Delivery Car Shipping | Furious Auto Shipping',
  description: 'The easiest way to ship a car. Our Door-to-Door Auto Transport picks up and delivers directly to your address. No terminals, no hidden fees. Get a quote.',
  keywords: 'Door-to-Door auto transport, Door-to-Door car shipping, winter migration, Door-to-Door vehicle transport, seasonal auto shipping',

  alternates: {
    canonical: '/services/door-to-door-auto-transport',
  },
}

export default function page() {
  const steps = [
    {
      icon: KeyRound,
      title: "Pickup",
      description: "You hand the keys to the driver at your home or office."
    },
    {
      icon: Truck,
      title: "Transit",
      description: "The car stays on the truck."
    },
    {
      icon: Home,
      title: "Delivery",
      description: "The driver unloads the car as close to your front door as legally and safely possible."
    }
  ];
  const costs = [
    {
      icon: DollarSign,
      title: "Storage Fees",
      description: "If you can't pick up your car the moment it arrives at the terminal, they start charging daily storage fees (often $35-$50/day).",
      color: "red"
    },
    {
      icon: AlertTriangle,
      title: "Damage Risk",
      description: "At a terminal, your car is often moved multiple times by yard workers to make space. More movement = higher risk of door dings and scratches.",
      color: "orange"
    },
    {
      icon: MapPin,
      title: "The Inconvenience",
      description: "You have to pay for an Uber or find a ride to the terminal, which might be an hour away from your actual destination.",
      color: "yellow"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: {
        bg: 'bg-red-100',
        text: 'text-red-600',
        border: 'border-red-500'
      },
      orange: {
        bg: 'bg-orange-100',
        text: 'text-orange-600',
        border: 'border-orange-500'
      },
      yellow: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-600',
        border: 'border-yellow-500'
      }
    };
    return colors[color];
  };

const faqs = [
    {
      "question": "Do I have to be present for pickup and delivery?",
      "answer": "Yes, someone must be present. It doesn't have to be you; it can be a spouse, a neighbor, or a trusted friend over the age of 18. They will need to sign the Bill of Lading on your behalf and hand over/accept the keys."
    },
    {
      "question": "Does Door-to-Door cost extra?",
      "answer": "At Furious Auto Shipping, Door-to-Door is our standard service. We do not charge a \"convenience fee\" for it. The price we quote includes pickup and delivery as close to your address as possible."
    },
    {
      "question": "CWhat if I live in a gated community?",
      "answer": "Most carriers cannot enter gated communities due to code entry systems or narrow roads. In this case, we simply ask you to meet the driver at the entrance gate or the leasing office."
    },
    {
      "question": "Can the driver drop the car off without me there?",
      "answer": "Generally, no. For liability reasons, we need a signature to confirm the car was delivered without damage. If you absolutely cannot be there, you can authorize a \"drop-off without signature\" in rare cases, but this voids much of your insurance protection if you find damage later. We strongly advise against it."
    },
  
  ]

  return (
    <>
      <CommonHero
        h1="Door-to-Door Auto Transport: From Our Truck to Your Driveway"
        subheading={"The Ultimate Convenience. No Terminals. No Hassle."}
        img="/images/door-to-door-auto-transport.png"
      />

      <section className="section">
        <div className="container">
          <h2 className="heading-2 mb-6 mt-2">The Ultimate Convenience. No Terminals. No Hassle.</h2>
          <p className='my-2'>Imagine this: You have just moved into your new home. Boxes are everywhere, you are exhausted, and the last thing you want to do is figure out how to get to a shipping terminal 40 miles away to pick up your car. Instead, you sip your morning coffee, look out the window, and see a carrier pulling up to your street. You walk out, inspect your vehicle, take the keys, and park it in your own driveway.</p>
          <p className='my-2'>This isn't a premium upgrade; at <b>Furious Auto Shipping</b>, this is our standard.</p>
          <p className='my-2'><Link className='font-bold text-brand-500' href=''>Door-to-Door Auto Transport</Link> is exactly what it sounds like: we pick up the vehicle from your specific address and deliver it to your specific destination. As a logistics veteran with over 7+ years in the industry, I can tell you that this is the service 90% of customers want, and it is the service we have perfected.</p>

          <h2 className="heading-2 mb-6 mt-2">What Is Door-to-Door Car Shipping?</h2>
          <p className='my-2'>In the past, auto shipping often meant "Terminal-to-Terminal." You had to drop your car off at a giant storage lot in an industrial district and pick it up from another lot in a different state. It was inconvenient, time-consuming, and often involved hidden storage fees.</p>
          <p className='my-2'><Link className='font-bold text-brand-500' href=''>Door-to-Door Auto Transport</Link> changed the game. It means the truck driver comes directly to you.</p>

          <p className='my-2'>It removes the middleman (terminals) and ensures you are the only person handling your vehicle besides the driver.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-3">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>


          <h2 className="heading-2 mb-6 mt-2">The "Big Truck" Reality Check: How It Really Works</h2>
          <p className='my-2'>I believe in setting honest expectations. This builds trust. While we call it "Door-to-Door," we must respect physics and city ordinances. The carriers we use are often <b>80-foot long, double-decker 18-wheelers</b>. They are massive.</p>

          <h3 className="text-2xl font-bold text-gray-900 mb-3">When "Door-to-Door" Becomes "Street-to-Street"</h3>
          <p className='my-2'>There are certain situations where a truck simply cannot physically fit on your street:</p>
          <ul className='ml-4 list-decimal'>
            <li className='my-2'><b>Narrow Cul-de-Sacs:</b> An 18-wheeler requires a massive turning radius. If they drive in, they might not be able to back out.</li>
            <li className='my-2'><b>Low Hanging Trees/Wires:</b> Residential streets often have low branches that can damage the cars on the top deck of the trailer.</li>
            <li className='my-2'><b>City Weight Limits:</b> Many HOAs and municipal streets strictly ban vehicles over a certain weight.</li>
          </ul>
          <p className='my-2'><b>The Solution:</b> If your street is inaccessible, the driver will call you beforehand. You will agree on a nearby, safe location with a large parking lot to meet—usually a grocery store, a shopping mall, or a wide main street just a block or two away.</p>
          <ul className='ml-4 list-disc'>
            <li className='my-2'><b>It’s still convenient.</b></li>
            <li className='my-2'><b>It’s safer for your car.</b></li>
            <li className='my-2'><b>It’s faster for everyone.</b></li>
          </ul>

          <h2 className="heading-2 mb-6 mt-2">Why Choose Door-to-Door Over Terminal Shipping?</h2>
          <p className='my-2'>You might see other companies offering "Terminal Shipping" for a slightly lower price. Before you take the bait, look at the real cost.</p>

          {/* Header */}
          <div className="bg-white rounded-lg py-4">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              The Hidden Costs of Terminal Shipping
            </h3>
            <p className="text-lg text-gray-700">
              <Link className='font-bold text-brand-500' href='/services/expedited-auto-transport'>Terminal shipping</Link> seems cheaper upfront, but it often ends up costing more in time and money.
            </p>
          </div>

          {/* Three Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {costs.map((cost, index) => {
              const IconComponent = cost.icon;
              const colors = getColorClasses(cost.color);

              return (
                <div key={index} className={`bg-white rounded-lg shadow-md p-6 border-t-4 ${colors.border} hover:shadow-lg transition-shadow`}>
                  <div className={`${colors.bg} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <p className="text-xl font-bold text-gray-900 mb-3">
                    {cost.title}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {cost.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="block bg-white rounded-lg shadow-lg my-6 overflow-auto">
            <p className="text-xl font-bold text-gray-900 mb-1">The Value Comparison</p>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="py-4 px-6 text-left font-semibold">Feature</th>
                  <th className="py-4 px-6 text-left font-semibold bg-green-600">Door-to-Door (Most Popular ⭐)</th>
                  <th className="py-4 px-6 text-left font-semibold">Terminal-to-Terminal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900">Convenience</td>
                  <td className="py-4 px-6 text-gray-700 bg-green-50">Maximum. We come to you.</td>
                  <td className="py-4 px-6 text-gray-700">Low. You travel to them.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900">Handling</td>
                  <td className="py-4 px-6 text-gray-700 bg-green-50">Minimal. Loaded once, unloaded once.</td>
                  <td className="py-4 px-6 text-gray-700">High. Moved frequently in the yard.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900">Speed</td>
                  <td className="py-4 px-6 text-gray-700 bg-green-50">Faster. Car leaves immediately.</td>
                  <td className="py-4 px-6 text-gray-700">Slower. Waits for a full load at the lot.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900">Security</td>
                  <td className="py-4 px-6 text-gray-700 bg-green-50">You oversee the handover personally.</td>
                  <td className="py-4 px-6 text-gray-700">Car sits in a lot (security varies).</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900">Best For</td>
                  <td className="py-4 px-6 text-gray-700 bg-green-50">Homeowners, Relocations, Snowbirds</td>
                  <td className="py-4 px-6 text-gray-700">Budget shippers with flexible schedules</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      <HandoverProcess />
      <DoorToDoorBenefits />

      
      <FAQ
        title="Door-to-Door Car Shipping FAQ"
        subtitle="Common questions about Door-to-Door Car Shipping services"
        faqs={faqs} />



    </>
  )
}
