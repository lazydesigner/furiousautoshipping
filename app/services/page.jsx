import React from 'react'
import Link from 'next/link'
import CommonHero from '@/components/CommonHero';
import FAQ from '@/components/FAQ';
import CommonCTA from '@/components/CommonCTA';
import { CreditCard, Shield, MapPin, Headphones } from 'lucide-react';
import Script from "next/script";

import AutoShippingChooser from './AutoShippingChooser'
import ServicesGrid from './ServicesGrid'

export const metadata = {
  title: 'Auto Transport Services | Compare Open, Enclosed & Expedited Shipping',
  description: 'Compare our full range of car shipping services. From budget-friendly Open Transport to premium Enclosed shipping. Get the right protection for your vehicle.',
  keywords: 'Furious auto shipping Services, auto transport services',

  alternates: {
    canonical: '/services',
  },
}

export default function page() {

  const features = [
    {
      id: 1,
      icon: CreditCard,
      iconColor: 'text-green-600',
      title: '$0 Upfront Deposit',
      description: 'You pay nothing today. We only charge a deposit after we have assigned a carrier and confirmed your pickup date. Your quote is risk-free.'
    },
    {
      id: 2,
      icon: Shield,
      iconColor: 'text-blue-600',
      title: '100% Insured Transit',
      description: 'Every carrier in our network is vetted for cargo insurance. Your vehicle is covered bumper-to-bumper from pickup to delivery.'
    },
    {
      id: 3,
      icon: MapPin,
      iconColor: 'text-red-600',
      title: 'Door-to-Door Service',
      description: 'We don\'t make you drive to a depot. Unless you specifically request a terminal, our drivers come directly to your address (or the nearest safe parking lot).'
    },
    {
      id: 4,
      icon: Headphones,
      iconColor: 'text-purple-600',
      title: 'Personal Support Agent',
      description: 'No call centers. You are assigned a dedicated logistics expert who provides their direct line and manages your order from start to finish.'
    }
  ];


  const faqs = [
    {
      "question": "How do I know if I need Enclosed transport?",
      "answer": "We recommend Enclosed transport if your vehicle is worth over $100,000, is a classic/antique, or has a very low ground clearance (less than 5 inches). For standard daily drivers (Toyota, Ford, Honda), Open transport is perfectly safe and saves you money."
    },
    {
      "question": "What is the difference between Door-to-Door and Terminal shipping?",
      "answer": "Door-to-Door means the driver meets you at your home (or the nearest large parking lot). Terminal-to-Terminal requires you to drive your car to a storage depot. Terminal is cheaper, but Door-to-Door is far more convenient and safer for the vehicle."
    },
    {
      "question": "Does Expedited shipping make the truck drive faster?",
      "answer": "No. By law, trucks must follow speed limits. \"Expedited\" means we pay a premium to dispatch your car immediately (skipping the line) or assign a Team Driver (two drivers who switch shifts) to keep the truck moving 22 hours a day."
    },
    {
      question: "What's the difference between open and enclosed transport?",
      answer: "Open transport uses standard car carriers (like you see on highways) and is the most economical option. Enclosed transport uses covered trailers that protect vehicles from weather and road debris, ideal for luxury or classic cars."
    },
    {
      question: "How much does expedited shipping cost?",
      answer: "Expedited service typically adds $200-400 to your shipping cost, depending on the route and distance. This service prioritizes your shipment for faster pickup and delivery."
    },
    {
      question: "Can I track my vehicle during transport?",
      answer: "Yes! We provide real-time tracking updates and you can contact your assigned driver directly. You'll receive regular updates on pickup, transit, and delivery status."
    },
    {
      question: "What is snowbird service?",
      answer: "Snowbird service is designed for seasonal residents who move between northern and southern states. We offer optimized routing and seasonal pricing for these popular migration routes."
    },
    {
      question: "Is my vehicle insured during transport?",
      answer: "Absolutely. All shipments are covered by comprehensive insurance. We work only with licensed, bonded, and insured carriers who meet our strict safety standards."
    }
  ]

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Auto Transport Brokerage",
    "provider": {
      "@type": "Organization",
      "name": "Furious Auto Shipping",
      "url": "https://furiousautoshipping.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Shipping Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Open Auto Transport",
            "description": "Standard affordable vehicle shipping on an open car carrier."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enclosed Auto Transport",
            "description": "Premium hard-sided transport for luxury and classic vehicles."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Expedited Car Shipping",
            "description": "Guaranteed 24-48 hour pickup for urgent vehicle relocation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Door-to-Door Delivery",
            "description": "Direct vehicle pickup and delivery to your residence."
          }
        }
      ]
    }
  }

  return (
    <>
      <Script
        id="schema-service"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <CommonHero
        h1="Auto Transport Solutions Tailored to Your Vehicle & Budget"
        subheading={"From standard open carriers to white-glove enclosed transport. Compare our services and choose the perfect fit for your move."}
        img="/images/furious-auto-shipping-services.png"
      />

      <AutoShippingChooser />
      <ServicesGrid />

      <CommonCTA />
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Compare Shipping Methods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right service based on your budget, timeline, and vehicle value.
            </p>
          </div>

          {/* Responsive Table Container */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800">
                    <th className="text-left p-4 sm:p-6 text-white font-semibold text-base sm:text-lg">
                      Feature
                    </th>
                    <th className="p-4 sm:p-6 text-white font-bold text-base sm:text-lg text-center border-l border-gray-700">
                      Open Transport
                    </th>
                    <th className="p-4 sm:p-6 text-white font-bold text-base sm:text-lg text-center border-l border-gray-700">
                      Enclosed Transport
                    </th>
                    <th className="p-4 sm:p-6 text-white font-bold text-base sm:text-lg text-center border-l border-gray-700">
                      Expedited Shipping
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50 hover:bg-blue-50 transition-colors">
                    <td className="p-4 sm:p-6 font-semibold text-gray-900 border-b border-gray-200">
                      Cost Level
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-b border-gray-200">
                      <div className="font-semibold text-gray-900">💲 Most Affordable</div>
                      <div className="text-sm text-gray-500 mt-1">Best value option</div>
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-b border-gray-200">
                      <div className="font-semibold text-gray-900">💲💲💲 Premium</div>
                      <div className="text-sm text-gray-500 mt-1">+40-60%</div>
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-b border-gray-200">
                      <div className="font-semibold text-gray-900">💲💲💲💲 Urgent</div>
                      <div className="text-sm text-gray-500 mt-1">+30-50%</div>
                    </td>
                  </tr>

                  <tr className="bg-white hover:bg-blue-50 transition-colors">
                    <td className="p-4 sm:p-6 font-semibold text-gray-900 border-b border-gray-200">
                      Protection
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-b border-gray-200">
                      <div className="font-semibold text-gray-900">Standard</div>
                      <div className="text-sm text-gray-500 mt-1">Exposed to road</div>
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-b border-gray-200">
                      <div className="font-semibold text-gray-900">Ultimate</div>
                      <div className="text-sm text-gray-500 mt-1">Fully Covered</div>
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-b border-gray-200">
                      <div className="font-semibold text-gray-900">Standard or Enclosed</div>
                      <div className="text-sm text-gray-500 mt-1">Your choice</div>
                    </td>
                  </tr>

                  <tr className="bg-gray-50 hover:bg-blue-50 transition-colors">
                    <td className="p-4 sm:p-6 font-semibold text-gray-900 border-b border-gray-200">
                      Pickup Speed
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-b border-gray-200">
                      <div className="font-semibold text-gray-900">1-5 Days</div>
                      <div className="text-sm text-gray-500 mt-1">Standard</div>
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-b border-gray-200">
                      <div className="font-semibold text-gray-900">3-7 Days</div>
                      <div className="text-sm text-gray-500 mt-1">Specialized</div>
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-b border-gray-200">
                      <div className="font-semibold text-gray-900">24-48 Hours</div>
                      <div className="text-sm text-gray-500 mt-1">Guaranteed</div>
                    </td>
                  </tr>

                  <tr className="bg-white hover:bg-blue-50 transition-colors">
                    <td className="p-4 sm:p-6 font-semibold text-gray-900 border-b border-gray-200">
                      Insurance
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-b border-gray-200">
                      <div className="font-semibold text-gray-900">$250k Cargo Limit</div>
                      <div className="text-sm text-gray-500 mt-1">Industry standard</div>
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-b border-gray-200">
                      <div className="font-semibold text-gray-900">$1 Million+</div>
                      <div className="text-sm text-gray-500 mt-1">Cargo Limit</div>
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-b border-gray-200">
                      <div className="font-semibold text-gray-900">$250k - $1M</div>
                      <div className="text-sm text-gray-500 mt-1">Flexible coverage</div>
                    </td>
                  </tr>

                  <tr className="bg-gray-50 hover:bg-blue-50 transition-colors">
                    <td className="p-4 sm:p-6 font-semibold text-gray-900 border-b border-gray-200">
                      Vehicle Type
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-b border-gray-200">
                      <div className="font-semibold text-gray-900">Daily Drivers, SUVs, Trucks</div>
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-b border-gray-200">
                      <div className="font-semibold text-gray-900">Exotics, Classics</div>
                      <div className="text-sm text-gray-500 mt-1">Low-Clearance</div>
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-b border-gray-200">
                      <div className="font-semibold text-gray-900">Any Urgent Vehicle</div>
                    </td>
                  </tr>

                  <tr className="bg-white hover:bg-blue-50 transition-colors">
                    <td className="p-4 sm:p-6 font-semibold text-gray-900 border-b border-gray-200">
                      Availability
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-b border-gray-200">
                      <div className="font-semibold text-gray-900">High</div>
                      <div className="text-sm text-gray-500 mt-1">95% of Trucks</div>
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-b border-gray-200">
                      <div className="font-semibold text-gray-900">Limited</div>
                      <div className="text-sm text-gray-500 mt-1">Book Early</div>
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-b border-gray-200">
                      <div className="font-semibold text-gray-900">Priority Dispatch</div>
                    </td>
                  </tr>
                </tbody>

                {/* CTA Footer */}
                <tfoot>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800">
                    <td className="p-4 sm:p-6"></td>
                    <td className="p-4 sm:p-6 text-center border-l border-gray-700">
                      <Link href='/get-quote'><button className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base">
                        Get Quote
                      </button></Link>
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-gray-700">
                      <Link href='/get-quote'><button className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base">
                        Get Quote
                      </button></Link>
                    </td>
                    <td className="p-4 sm:p-6 text-center border-l border-gray-700">
                      <Link href='/get-quote'><button className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base">
                        Get Quote
                      </button></Link>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>



        </div>
      </section>

      <section className="w-full bg-[#F9FAFB] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              The Furious Standard: What's Included in Every Quote
            </h2>
            <p className="text-slate-600 mt-3 text-base md:text-lg max-w-3xl mx-auto">
              Regardless of the service you choose, we never compromise on safety or service.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon;

              return (
                <div
                  key={feature.id}
                  className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-5">
                    <IconComponent className={`w-12 h-12 ${feature.iconColor}`} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FAQ
        title="Service FAQ"
        subtitle="Common questions about services"
        faqs={faqs} />

      <CommonCTA />

    </>
  )
}
