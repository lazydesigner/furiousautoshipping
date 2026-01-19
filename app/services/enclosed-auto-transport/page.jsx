import React from 'react'
import Link from 'next/link'
import CommonHero from '@/components/CommonHero'
import FAQ from '@/components/FAQ';
import CommonCTA from '@/components/CommonCTA';
import LiftGateSection from './LiftGateSection'
import EnclosedProtectionSection from './EnclosedProtectionSection'
import WhiteGloveProcess from './WhiteGloveProcess'
import { CheckSquare, TrendingUp, AlertCircle } from 'lucide-react';


export const metadata = {
  title: 'Enclosed Car Shipping | Exotic & Classic Auto Transport | Furious Auto Shipping',
  description: 'The ultimate protection for your vehicle. Our Enclosed Auto Transport features hydraulic lift gates, $1M insurance coverage, and white-glove service.',
  keywords: 'Enclosed auto transport, Enclosed car shipping, winter migration, Enclosed vehicle transport, seasonal auto shipping',

  alternates: {
    canonical: '/services/enclosed-auto-transport',
  },
}


export default function page() {
  const checklistItems = [
    {
      title: "The Exotic",
      description: "Ferrari, Lamborghini, Aston Martin, McLaren, etc."
    },
    {
      title: "The Classic / Antique",
      description: "Vehicles where original paint is irreplaceable."
    },
    {
      title: "The Low-Clearance Sport",
      description: "Any car lowered with aftermarket suspension or factory track kits."
    },
    {
      title: "The Investment",
      description: "Any vehicle valued over $100,000."
    },
    {
      title: "The Sentiment",
      description: "A car with deep sentimental value (e.g., a grandfather's restored truck)."
    },
    {
      title: "The Convertible",
      description: "Especially older models with brittle soft tops that shouldn't be exposed to 600 miles of highway wind."
    },
    {
      title: "The Fresh Paint",
      description: "Restoration projects that have been freshly painted (paint needs time to cure without exposure to debris)."
    }
  ];
  const routes = [
    {
      route: "Miami to New York",
      vehicle: "Porsche 911",
      openPrice: "$950",
      enclosedPrice: "$1,450",
      difference: "+$500"
    },
    {
      route: "Los Angeles to Dallas",
      vehicle: "Bentley Continental",
      openPrice: "$1,050",
      enclosedPrice: "$1,600",
      difference: "+$550"
    },
    {
      route: "Chicago to Phoenix",
      vehicle: "'69 Mustang",
      openPrice: "$1,200",
      enclosedPrice: "$1,850",
      difference: "+$650"
    },
    {
      route: "Seattle to Atlanta",
      vehicle: "McLaren 720S",
      openPrice: "$1,500",
      enclosedPrice: "$2,400",
      difference: "+$900"
    }
  ];
  const faqs = [
    {
      "question": "What is the difference between \"Soft-Side\" and \"Hard-Side\" enclosed?",
      "answer": "Hard-Side: These trailers have solid metal walls. They offer the maximum possible protection and security. This is what we recommend for the highest-value vehicles. Soft-Side: These trailers have heavy canvas curtains on the sides (curtain-siders). They prevent road debris and weather exposure but are slightly less secure than hard sides. They are often a bit cheaper and allow for easier loading of wider vehicles."
    },
    {
      "question": "Can I track my exotic car during transport?",
      "answer": "Yes. Communication is key for premium moves. You will have the driver's direct number and our priority support line. Many of our enclosed carriers also offer GPS tracking links so you can watch the progress in real-time."
    },
    {
      "question": "Do you offer \"Top Loading\" for enclosed trailers?",
      "answer": "In an enclosed trailer, every spot is safe. Unlike open carriers where the top deck is safer from rocks than the bottom, an enclosed trailer protects all vehicles equally. However, if you prefer your car to be on the floor (single level) rather than on a rack, we can request a \"hotshot\" enclosed trailer (holds only 1 or 2 cars)."
    },
    {
      "question": "How much notice do you need to book an enclosed carrier?",
      "answer": "Because there are fewer enclosed carriers on the road (about 1 for every 10 open carriers), availability is tighter. We recommend booking at least 2 weeks in advance to secure your preferred dates, though we can often accommodate rush orders for a premium fee."
    }
  ]
  return (
    <>
      <CommonHero
        h1="Enclosed Car Shipping: White-Glove Protection for Your Most Valued Asset"
        subheading="Ultimate Security, Privacy, and Protection for Exotics, Classics, and High-Value Vehicles."
        img="/images/enclosed-bg.png"
      />

      <section className="section">
        <div className="container">

          <p className='my-2'>For most people, a car is just a way to get from Point A to Point B. But for you, your vehicle is different. It’s a passion project, a rare collectible, or a significant financial investment. You wouldn't toss a Rembrandt painting in the back of a pickup truck; you shouldn't ship your high-performance vehicle on a standard carrier, either.</p>
          <p className='my-2'>At <Link className='font-bold text-brand-500' href='/'>Furious Auto Shipping</Link>, we understand the nuances of transporting high-value automobiles. With over 20 years in the industry, I have overseen the transport of everything from vintage Shelbys to brand-new McLarens. I know that for these cars, "safe" isn't enough. You need pristine.</p>
          <p className='my-2'><Link className='font-bold text-brand-500' href=''>Enclosed Auto Transport</Link> is our "White Glove" service. It provides a mobile vault for your vehicle, shielding it completely from weather, road debris, and prying eyes.</p>

          <h2 className="heading-2 mb-6 mt-2">What Is Enclosed Auto Transport?</h2>
          <p className='my-2'>Enclosed car shipping involves transporting your vehicle inside a fully enclosed trailer with four walls and a roof. Unlike open transport, where vehicles are exposed to the elements, an enclosed trailer creates a sealed environment.</p>

          <p className='my-2'><b>Think of it as a clean room on wheels.</b></p>
          <p className='my-2'>While <Link className='font-bold text-brand-500' href='/services/open-auto-transport'>open transport</Link> is the standard for daily drivers (Hondas, Toyotas, Fords), <b>Enclosed Transport</b> is the specialized solution designed for vehicles where even a single rock chip or layer of road dust is unacceptable.</p>
 


        </div>
      </section>

      <LiftGateSection />

      <EnclosedProtectionSection />


      <section className="section">
        <div className="container">

          <div className="py-4">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Checklist: Who Needs Enclosed Transport?
              </h2>

              {/* Intro Text */}
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                We are honest with our customers. If you are shipping a 2015 Camry, you probably don't need this service. Save your money and use our Open Transport.
              </p>

              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                However, Enclosed Car Shipping is virtually mandatory if your vehicle fits any of these descriptions:
              </p>

              {/* Checklist */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
                <div className="space-y-4">
                  {checklistItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 pb-1 border-b border-slate-100 last:border-b-0 last:pb-0">
                      <CheckSquare className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-semibold text-slate-900">{item.title}:</span>
                        <span className="text-slate-700"> {item.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <h2 className="heading-2 mb-6 mt-2">Cost Analysis: The Premium Difference</h2>
          <p className='my-2'>Yes, <Link className='font-bold text-brand-500' href=''>Enclosed Auto Transport</Link> costs more—typically 30% to 50% more than standard open shipping. But when you break down the numbers relative to the value of your vehicle, the cost is justified.</p>

          <h3 className="text-4xl my-4 font-semibold text-gray-900">The "Paint Chip" Calculation</h3>
          <p className='my-2'>Consider this: Repainting the hood and bumper of a <b>Porsche 911</b> to factory standards can easily <b>cost $2,000 to $4,000</b>, and it diminishes the resale value because it's no longer "original paint." Paying an extra <b>$400-$600</b> for enclosed shipping is effectively an insurance policy against that depreciation.</p>

          <div className="bg-white py-6">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Estimated Pricing Examples (Premium Service)
                </h2>
              </div>

              {/* Desktop Table */}
              <div className="block overflow-x-auto bg-white rounded-xl shadow-lg border border-slate-200">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-900">
                      <th className="px-6 py-4 text-left text-sm font-bold text-white">Route</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-white">Vehicle Type</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-white">Est. Open Price</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-white">Est. Enclosed Price</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-white">Difference</th>
                    </tr>
                  </thead>
                  <tbody>
                    {routes.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-slate-200 hover:bg-slate-50"
                      >
                        <td className="px-6 py-4 font-semibold text-slate-900">{row.route}</td>
                        <td className="px-6 py-4 text-slate-700">{row.vehicle}</td>
                        <td className="px-6 py-4 text-slate-600">{row.openPrice}</td>
                        <td className="px-6 py-4">
                          <span className="font-bold text-slate-900 text-lg">{row.enclosedPrice}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                            <TrendingUp className="w-4 h-4" />
                            {row.difference}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> 

              {/* Note */}
              <div className="mt-6 bg-brand-50 border-l-4 border-brand-500 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">
                    <span className="font-semibold">Note:</span> Enclosed capacity is lower (fewer trucks on the road), so we recommend booking 1-2 weeks in advance.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <WhiteGloveProcess />

      <FAQ
        title="Enclosed Car Shipping FAQ"
        subtitle="Common questions about Enclosed Car Shipping services"
        faqs={faqs} />

    </>
  )
}
