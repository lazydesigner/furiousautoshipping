import React from 'react'
import Link from 'next/link'
import CommonHero from '@/components/CommonHero';
import FAQ from '@/components/FAQ';
import CommonCTA from '@/components/CommonCTA';
import ExpeditedShippingExplainer from './ExpeditedShippingExplainer'
import ExpeditedProcess from './ExpeditedProcess'
import { Gavel, PackageOpen, Shield, Store, ArrowRight, DollarSign, Users, Headphones } from 'lucide-react';

export const metadata = {
  title: 'Expedited Auto Transport | Fast Car Shipping & Guaranteed Pickup | Furious Auto Shipping',
  description: 'Need your car moved fast? Our Expedited Auto Transport guarantees 24-hour pickup windows. We use Team Drivers for rapid delivery. Get your priority quote now.',
  keywords: 'Expedited auto transport, Expedited car shipping, winter migration, Expedited vehicle transport, seasonal auto shipping',

  alternates: {
    canonical: '/services/expedited-auto-transport',
  },
}

export default function page() {

  const cards = [
    {
      id: 1,
      title: "The Auction Buyer",
      description: "You bought a car on Copart or Manheim. These auctions charge massive storage fees (often $50+ per day) if the car isn't removed within 3 days. Expedited shipping gets the car out before those storage fees stack up.",
      Icon: Gavel,
      link: "/services/dealer-auto-transport"
    },
    {
      id: 2,
      title: "The Last-Minute Relocation",
      description: "You got a job offer in another state on Friday, and you start on Monday. You can't wait a week for a truck. You need the car gone so you can hand over the keys to your house.",
      Icon: PackageOpen,
      link: "/services/residential-car-shipping"
    },
    {
      id: 3,
      title: "The Military Transfer (PCS)",
      description: "Deployments often happen with zero notice. If you have strict orders to report to a base by a certain date, you cannot rely on a \"maybe\" pickup window.",
      Icon: Shield,
      link: "/services/military-car-shipping"
    },
    {
      id: 4,
      title: "The Dealership Trade",
      description: "Dealers often need a specific car on the lot this weekend to close a sale. If the car doesn't arrive, the buyer walks. In this case, speed is profit.",
      Icon: Store,
      link: "/services/dealer-auto-transport"
    }
  ];

  const factors = [
    {
      icon: DollarSign,
      title: "Driver Incentive",
      description: "The majority goes directly to the driver to convince them to rearrange their load and detour to you."
    },
    {
      icon: Users,
      title: "Team Driver Pay",
      description: "Team drivers earn more because they work harder and faster."
    },
    {
      icon: Headphones,
      title: "Dedicated Dispatch",
      description: "You get a dedicated logistics agent monitoring your shipment 24/7 to ensure no delays."
    }
  ];

  const faqs = [
    {
      "question": "Can you guarantee a specific delivery date?",
      "answer": "In the trucking industry, guaranteeing a delivery date is very difficult due to traffic, weather, and DOT checks. However, with Expedited Shipping, we can guarantee a pickup date. Once the car is on the truck, we can give you a very precise delivery window (usually within 12 hours)."
    }, {
      "question": "Does expedited shipping cover enclosed transport?",
      "answer": "Yes! You can combine services. You can order Expedited Enclosed Transport if you need a luxury car moved fast. Be aware that this is the most exclusive service in the industry and availability is strictly limited, so the premium is higher."
    }, {
      "question": "What if you miss the pickup window?",
      "answer": "It is extremely rare, but if we fail to pick up your vehicle within the guaranteed expedited window (due to a truck breakdown, for example), we will immediately downgrade your charge to the Standard rate. You only pay for the speed if we deliver the speed."
    }, {
      "question": "Do you offer \"Hot Shot\" trucking?",
      "answer": "Yes. Hot Shot trucking typically involves a smaller pickup truck (like a Ford F-350) hauling a single-car trailer. This is often the fastest method for short-distance moves (under 500 miles) because these drivers can move quicker than massive 10-car haulers. We utilize Hot Shots frequently for expedited orders."
    }

  ]

  return (
    <>
      <CommonHero
        h1="Expedited Auto Transport: The Fastest Way to Ship Your Car"
        subheading={"Guaranteed Pickup. Priority Dispatch. When \"As Soon As Possible\" Isn't Soon Enough."}
        img="/images/enclosed-bg.png"
      />

      <section className="section">
        <div className="container">
          <h2 className="heading-2 mb-6 mt-2">Guaranteed Pickup. Priority Dispatch. When "As Soon As Possible" Isn't Soon Enough.</h2>
          <p className='my-2'>In the auto transport world, timing is everything. Usually, we tell customers to plan two weeks ahead. But life doesn't always stick to a schedule. Maybe a house closing date changed overnight, you <Link  className='font-bold text-brand-500' href='/services/dealer-auto-transport'>bought a car at auction</Link> with a strict pickup deadline, or you received sudden military deployment orders.</p>
          <p className='my-2'>You don't need a truck "sometime next week." You need a truck <b>tomorrow</b>.</p>
          <p className='my-2'>At <Link  className='font-bold text-brand-500' href='/'>Furious Auto Shipping</Link>, we understand the pressure of a deadline. That is why we offer <Link  className='font-bold text-brand-500' href=''>Expedited Auto Transport</Link>—our premium service designed to bypass the standard waiting list and get your vehicle moving immediately.</p>
          <p className='my-2'>I have spent over 7+ years managing logistics, and I will be honest with you: Fast shipping is not magic. It is simple economics. By offering a higher rate to carriers, we incentivize them to detour from their route, prioritize your vehicle, and pick it up <b>within 24 hours</b>.</p>
          <p className='my-2'>If you are in a rush, stop reading and call us now. If you want to understand how we make it happen, read on.</p>
        </div>
      </section>
      <ExpeditedShippingExplainer />

      <CommonCTA b='Get Expedited  Quote free' />

      <section className="section">
        <div className="container">
          <div className="min-h-screen px-0 md:px-4">
            {/* Header Section */}
            <div className="bg-white rounded-lg p-2 md:p-0 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Secret Weapon: Team Drivers
              </h2>
              <p className="text-lg text-gray-700">
                You might ask, "If drivers have speed limits, how do you get the car there faster after pickup?"
              </p>
              <p className="text-lg text-gray-700 mt-4">
                For our most critical rush jobs, we utilize <span className="font-semibold text-brand-600">Team Drivers</span>.
              </p>
            </div>

            {/* Two Column Comparison */}
            <div className="bg-white rounded-lg p-2 md:p-0 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Solo vs. Team Drivers
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Solo Driver Column */}
                <div className="border-2 border-gray-200 rounded-lg p-6 bg-gray-50">
                  <p className="text-xl font-bold text-gray-800 mb-4 text-center">
                    Solo Driver
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-brand-600 mr-2">•</span>
                      <span>Can legally drive for 11 hours, then must rest for 10 hours.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-600 mr-2">•</span>
                      <span>The truck sits idle for half the day.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-600 mr-2">•</span>
                      <span>They cover about <strong>500 miles per day</strong>.</span>
                    </li>
                  </ul>
                </div>

                {/* Team Drivers Column */}
                <div className="border-2 border-brand-500 rounded-lg p-6 bg-brand-50">
                  <p className="text-xl font-bold text-gray-800 mb-4 text-center">
                    Team Drivers
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-brand-600 mr-2">•</span>
                      <span>Two drivers in one truck.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-600 mr-2">•</span>
                      <span>While one sleeps, the other drives.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-600 mr-2">•</span>
                      <span>The truck rarely stops moving, except for fuel and showers.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-600 mr-2">•</span>
                      <span>They can cover <strong>1,000+ miles per day</strong>.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg text-gray-700 mb-1">
                While Team Drivers are more expensive and harder to find, they are the only way to cut coast-to-coast transit times in half.
              </p>
              <p className="text-lg text-gray-700">
                If you need a car from New York to Los Angeles in <span className="font-semibold text-brand-600">3-4 days</span> instead of <span className="text-gray-500">7-8</span>, you need Team Drivers.
              </p>
            </div>
          </div>

          <div className="py-6">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Standard vs. Expedited: The Timeline Comparison
              </h2>
              <p className="text-gray-700 mb-2">
                Visualizing the difference helps you decide if the extra cost is worth it for your specific situation.
              </p>
              <p className="text-xl font-semibold text-gray-800 mt-6">
                The Race Against Time
              </p>
            </div>

            {/* Desktop Table */}
            <div className="block w-full bg-white rounded-lg shadow overflow-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="py-4 px-6 text-left font-semibold">Feature</th>
                    <th className="py-4 px-6 text-left font-semibold">Standard Shipping</th>
                    <th className="py-4 px-6 text-left font-semibold">Expedited Shipping</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">Pickup Window</td>
                    <td className="py-4 px-6 text-gray-700">1 to 5 Business Days</td>
                    <td className="py-4 px-6 text-gray-700">24 to 48 Hours (Guaranteed)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">Route Priority</td>
                    <td className="py-4 px-6 text-gray-700">Driver picks up when convenient</td>
                    <td className="py-4 px-6 text-gray-700">Driver detours for you</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">Driver Type</td>
                    <td className="py-4 px-6 text-gray-700">Typically Solo Drivers</td>
                    <td className="py-4 px-6 text-gray-700">Priority access to Team Drivers</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">Transit Speed</td>
                    <td className="py-4 px-6 text-gray-700">~450-500 miles/day</td>
                    <td className="py-4 px-6 text-gray-700">~500-900+ miles/day (with Team)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">Weekend Pickup</td>
                    <td className="py-4 px-6 text-gray-700">Rare</td>
                    <td className="py-4 px-6 text-gray-700">Available</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">Cost</td>
                    <td className="py-4 px-6 text-gray-700">Market Average</td>
                    <td className="py-4 px-6 text-gray-700">Premium (+30-40%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          
      <CommonCTA  />


          <div className="py-6 px-2 md:px-4">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who Needs Fast Car Shipping?
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Expedited shipping isn't for everyone. It comes with a premium price tag, so we usually recommend it only when the cost of waiting is higher than the cost of shipping.
              </p>
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cards.map((card) => {
                const IconComponent = card.Icon;
                return (
                  <a
                    key={card.id}
                    href={card.link}
                    className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="p-6">
                      {/* Icon and Number */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="bg-brand-100 p-3 rounded-lg">
                          <IconComponent className="w-8 h-8 text-brand-600" />
                        </div>
                        <span className="text-4xl font-bold text-gray-200">
                          {card.id}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed">
                        {card.description}
                      </p>

                      {/* Arrow Indicator */}
                      <div className={`mt-4 flex items-center text-brand-600 font-semibold transition-transform duration-300 `}>
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="py-6 px-2">
            {/* Header Section */}
            <div className="bg-white rounded-lg mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Cost of Urgency: Pricing Factors
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                We believe in transparency. Expedited shipping will cost more—typically 30% to 50% higher than standard shipping.
              </p>
              <p className="text-lg font-semibold text-gray-800">
                Here is exactly where that extra money goes:
              </p>
            </div>

            {/* Three Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {factors.map((factor, index) => {
                const IconComponent = factor.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-xl font-bold text-gray-900 mb-3">
                      {factor.title}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Question Section */}
            <div className="bg-white rounded-lg p-2">
              <p className="text-2xl font-bold text-gray-900 mb-4">
                Is it worth it?
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Ask yourself: What happens if the car doesn't arrive on time?
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded">
                  <p className="text-gray-700">
                    If the answer is <span className="font-semibold">"It's just inconvenient,"</span> stick with Standard Shipping and save money.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50 rounded">
                  <p className="text-gray-700">
                    If the answer is <span className="font-semibold">"I lose a sale," "I pay storage fees," or "I miss a flight,"</span> then Expedited is the only choice.
                  </p>
                </div>
              </div>
            </div>
          </div>



        </div>
      </section>

      <ExpeditedProcess />



      <FAQ
        title="Expedited Car Shipping FAQ"
        subtitle="Common questions about Expedited Car Shipping services"
        faqs={faqs} />

    </>
  )
}
