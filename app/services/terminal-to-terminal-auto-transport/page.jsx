import React from 'react'
import Link from 'next/link'
import CommonHero from '@/components/CommonHero';
import FAQ from '@/components/FAQ';
import CommonCTA from '@/components/CommonCTA';
import { CheckCircle, Shield, User, AlertTriangle, Warehouse, Navigation, Clock, DollarSign, Lightbulb, Zap, Gauge } from 'lucide-react';
import TerminalShippingUsers from './TerminalShippingUsers'
import TerminalNetwork from './TerminalNetwork'
import SuperSaverRoutes from './SuperSaverRoutes'


export const metadata = {
  title: 'Terminal-to-Terminal Auto Transport | Cheap Car Shipping | Furious Auto Shipping',
  description: 'The most affordable way to ship a car. Save money by dropping off and picking up your vehicle at our secure nationwide terminals. Get a low-cost quote today.',
  keywords: 'Terminal-to-Terminal auto transport, Terminal-to-Terminal car shipping, winter migration, Terminal-to-Terminal vehicle transport, seasonal auto shipping',

  alternates: {
    canonical: '/services/terminal-to-terminal-auto-transport',
  },
}

export default function page() {
  const features = [
    {
      icon: CheckCircle,
      title: "Paved & Clean",
      description: "No mud, no grass, no gravel that kicks up dust.",
      color: "from-emerald-400 to-emerald-600",
      iconColor: "text-emerald-500"
    },
    {
      icon: Shield,
      title: "Secure Perimeters",
      description: "High-fencing, 24/7 security cameras, and gated entry.",
      color: "from-brand-400 to-brand-600",
      iconColor: "text-brand-500"
    },
    {
      icon: User,
      title: "Manned Stations",
      description: "There is always a yard master on duty to check vehicles in and out.",
      color: "from-purple-400 to-purple-600",
      iconColor: "text-purple-500"
    }
  ];
  const costs = [
    {
      number: 1,
      icon: Warehouse,
      title: "Terminal Storage Fees",
      subtitle: "Terminals are not free parking lots.",
      details: [
        {
          icon: Clock,
          label: "The Grace Period",
          text: "Usually, our terminals offer a 48-hour grace period for pickup once the vehicle arrives."
        },
        {
          icon: DollarSign,
          label: "The Fees",
          text: "If you leave the car there past the grace period, storage fees kick in (typically $25-$50 per day)."
        },
        {
          icon: Lightbulb,
          label: "The Pro Tip",
          text: "Only book this service if you are sure you can pick up the vehicle promptly upon arrival. If you leave it there for a week, you wipe out your savings.",
          highlight: true
        }
      ],
      color: "from-pink-500 to-orange-600",
      borderColor: "border-pink-300"
    },
    {
      number: 2,
      icon: Navigation,
      title: "Travel Costs",
      subtitle: "Remember to factor in the cost of getting yourself to and from the terminal. If the terminal is a $60 Uber ride away, are you still saving money?",
      color: "from-brand-500 to-indigo-600",
      borderColor: "border-brand-300"
    }
  ];
  const comparisons = [
    {
      feature: "Price",
      icon: DollarSign,
      terminal: "Lowest ($$)",
      doorToDoor: "Standard ($$$)",
      terminalBetter: true
    },
    {
      feature: "Your Effort",
      icon: Zap,
      terminal: "High (Drive to/from hub)",
      doorToDoor: "Low (Wait at home)",
      terminalBetter: false
    },
    {
      feature: "Timing",
      icon: Clock,
      terminal: "Flexible (Drop off anytime)",
      doorToDoor: "Rigid (Must meet driver window)",
      terminalBetter: true
    },
    {
      feature: "Speed",
      icon: Gauge,
      terminal: "Slower (Waits for full load)",
      doorToDoor: "Faster (Car moves immediately)",
      terminalBetter: false
    },
    {
      feature: "Storage",
      icon: Warehouse,
      terminal: "Available (Fees may apply)",
      doorToDoor: "N/A",
      terminalBetter: null
    }
  ];
  const faqs = [
    {
      "question": "Are terminals open on weekends?",
      "answer": "Most major terminals operate Monday through Friday, 9:00 AM to 5:00 PM. Some offer Saturday hours by appointment. We will provide the specific operating hours of your assigned terminal when you book."
    },
    {
      "question": "Is my car insured while sitting at the terminal?",
      "answer": "Yes. While the car is in the custody of the terminal, it is covered by the terminal’s keeper’s insurance policy. Once it is on the truck, it is covered by the carrier’s cargo insurance. You have continuous coverage."
    },
    {
      "question": "How long will my car wait at the terminal?",
      "answer": "This depends on the route. On popular routes (e.g., LA to NYC), cars typically wait 1-3 days for a truck. On less common routes, a car might wait 5-7 days for a full load to accumulate. Terminal shipping is generally slower than door-to-door."
    },
    {
      "question": "Can I leave personal items in the car at the terminal?",
      "answer": "No. unlike door-to-door shipping where drivers might allow 100 lbs of luggage, terminals have strict \"Empty Car\" policies to prevent theft and liability issues. You must remove all personal items before dropping the vehicle off."
    }
  ]
  return (
    <>
      <CommonHero
        h1="Terminal-to-Terminal Auto Transport: The Most Economical Way to Ship"
        subheading={"Maximum Savings. Flexible Timing. Secure Storage."}
        img="/images/Terminal-to-Terminal-auto-transport.png"
      />

      <section className="section">
        <div className="container">
          <h2 className="heading-2 mb-6 mt-2">Maximum Savings. Flexible Timing. Secure Storage.</h2>
          <p className='my-2'>Not everyone needs a truck to pull up to their front door. For the savvy, budget-conscious shipper who doesn't mind a little extra driving, <Link className='font-bold text-brand-500' href=''>Terminal-to-Terminal Auto Transport</Link> offers the lowest possible rates in the industry.</p>

          <p className='my-2'>Think of it like air travel. A private jet picks you up at your local airfield (<Link className='font-bold text-brand-500' href='/services/door-to-door-auto-transport'>Door-to-Door</Link>). A commercial flight requires you to drive to the main airport (Terminal-to-Terminal). The commercial flight is significantly cheaper because it relies on consolidation.</p>

          <p className='my-2'>At <Link className='font-bold text-brand-500' href='/'>Furious Auto Shipping</Link>, we have partnepink with a nationwide network of secure, paved, and gated storage facilities. If you are willing to bring your vehicle to one of our regional hubs, we pass the logistics savings directly to you.</p>
          <p className='my-2'>As a 7+ year industry veteran, I often recommend this service to college students, budget shoppers, and customers living in remote rural areas. It is the smart way to ship if you prioritize price over convenience.</p>

          <h2 className="heading-2 mb-6 mt-2">What Is Terminal-to-Terminal Shipping?</h2>
          <p className='my-2'>In this model, the carrier does not come to your house. Instead, the shipping process happens between two major regional hubs (terminals).</p>
          <ul className='ml-4 list-decimal'>
            <li><b>Drop-Off:</b> You drive your vehicle to a designated secure terminal in your nearest major city (e.g., a depot in Dallas). You check the car in, hand over the keys, and leave it in a secure lot.</li>
            <li><b>The Long Haul:</b> A carrier arrives at the terminal, loads your car along with 9 others, and transports it to a terminal in the destination city (e.g., a depot in Chicago).</li>
            <li><b>Pick-Up:</b> You (or your designated contact) travel to the destination terminal to pick up the vehicle.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-3">Why Is It Cheaper?</h3>
          <p className='my-2'>It comes down to Carrier Efficiency. For a truck driver, navigating residential neighborhoods, dodging low trees, and fighting city traffic to pick up one single car takes hours and burns massive amounts of fuel. By picking up a full load at a single location (the terminal), the driver saves time and diesel. We pass those operational savings on to you.</p>

          <div className="text-center mt-8 mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold">
                Our Promise to You
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              The "Secure Lot" Guarantee
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-4">
              One common fear is that "terminal" means a muddy field in the middle of nowhere. <span className="font-semibold text-slate-700">That is the old way.</span>
            </p>
            <p className="text-lg md:text-xl text-slate-700 font-semibold">
              At Furious Auto Shipping, we only utilize Class-A Terminals.
            </p>
          </div>

          {/* Three Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group hover:scale-105"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-2xl font-bold text-slate-800 mb-4">
                      {feature.title}
                    </p>
                    <p className="text-slate-600 text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Statement */}
          <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl shadow-xl p-8 md:p-10 text-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
              We treat these terminals as <span className="text-brand-200">"Safe Havens"</span> for your vehicle.
            </p>
          </div>

        </div>
      </section>
      <TerminalNetwork />

      <TerminalShippingUsers />

      <section className="section">
        <div className="container">
      <div className="text-center mb-12"> 
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Important: The "Hidden" Costs to Watch For
          </h2>
          
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
            I believe in transparency. While the base price is lower, you must be aware of potential extra costs if you are not organized.
          </p>
        </div>

        {/* Costs Section */}
        <div className="space-y-8">
          {costs.map((cost) => {
            const MainIcon = cost.icon;
            return (
              <div
                key={cost.number}
                className={`bg-white rounded-2xl shadow-xl border-2 ${cost.borderColor} overflow-hidden`}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${cost.color} p-6 md:p-8`}>
                  <div className="flex items-start gap-4"> 

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <MainIcon className="w-8 h-8 text-white" strokeWidth={2.5} />
                        <p className="text-2xl md:text-3xl font-bold text-white">
                          {cost.title}
                        </p>
                      </div>
                      <p className="text-white text-opacity-95 text-base md:text-lg">
                        {cost.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Details */}
                {cost.details && (
                  <div className="p-6 md:p-8 space-y-6">
                    {cost.details.map((detail, idx) => {
                      const DetailIcon = detail.icon;
                      return (
                        <div
                          key={idx}
                          className={`flex gap-4 p-5 rounded-xl transition-all duration-300 ${
                            detail.highlight
                              ? 'bg-amber-50 border-2 border-amber-300 shadow-md'
                              : 'bg-slate-50 hover:bg-slate-100'
                          }`}
                        >
                          {/* Icon */}
                          <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                            detail.highlight
                              ? 'bg-amber-200'
                              : 'bg-slate-200'
                          }`}>
                            <DetailIcon className={`w-6 h-6 ${
                              detail.highlight ? 'text-amber-700' : 'text-slate-600'
                            }`} strokeWidth={2.5} />
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <h3 className={`text-lg md:text-xl font-bold mb-2 ${
                              detail.highlight ? 'text-amber-900' : 'text-slate-800'
                            }`}>
                              {detail.label}
                            </h3>
                            <p className={`text-base md:text-lg ${
                              detail.highlight ? 'text-amber-800' : 'text-slate-600'
                            }`}>
                              {detail.text}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mb-1">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-6">
            Comparison: Terminal vs. Door-to-Door
          </h2> 
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-slate-700 to-slate-600">
                <th className="p-6 text-center text-lg md:text-xl font-bold text-white">
                  Feature
                </th>
                <th className="p-6 text-center border-l-2 border-slate-500 bg-blue-600 bg-opacity-20 text-lg md:text-xl font-bold text-white">
                  Terminal-to-Terminal
                </th>
                <th className="p-6 text-center border-l-2 border-slate-500 bg-purple-600 bg-opacity-20 text-lg md:text-xl font-bold text-white">
                  Door-to-Door
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <tr
                    key={index}
                    className="border-t border-slate-200 hover:bg-slate-50 transition-colors duration-200"
                  >
                    {/* Feature Column */}
                    <td className="p-6 bg-slate-50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-slate-600" strokeWidth={2.5} />
                        </div>
                        <span className="text-base md:text-lg font-bold text-slate-800">
                          {item.feature}
                        </span>
                      </div>
                    </td>

                    {/* Terminal Column */}
                    <td className={`p-6 text-center border-l-2 border-slate-200 ${
                      item.terminalBetter === true ? 'bg-green-50' : ''
                    }`}>
                      <p className="text-sm md:text-base text-slate-700">
                        {item.terminal}
                      </p>
                      {item.terminalBetter === true && (
                        <span className="inline-block mt-2 px-3 py-1 bg-green-200 text-green-800 text-xs font-semibold rounded-full">
                          Better Value
                        </span>
                      )}
                    </td>

                    {/* Door-to-Door Column */}
                    <td className={`p-6 text-center border-l-2 border-slate-200 ${
                      item.terminalBetter === false ? 'bg-purple-50' : ''
                    }`}>
                      <p className="text-sm md:text-base text-slate-700">
                        {item.doorToDoor}
                      </p>
                      {item.terminalBetter === false && (
                        <span className="inline-block mt-2 px-3 py-1 bg-purple-200 text-purple-800 text-xs font-semibold rounded-full">
                          More Convenient
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        </div>
      </section>

      <SuperSaverRoutes />
        <CommonCTA p='Ready to Save on Your Shipment?' b='Get Your Terminal-to-Terminal Quote'/>
      <FAQ
        title="Terminal-to-Terminal Car Shipping FAQ"
        subtitle="Common questions about Terminal-to-Terminal Car Shipping services"
        faqs={faqs} />

    </>
  )
}
