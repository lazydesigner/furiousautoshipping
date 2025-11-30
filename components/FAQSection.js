'use client'
import { useState } from 'react';
import { ChevronDown, Phone, Calculator, Clock, Shield, Package, Car, DollarSign, MapPin, Wrench, Truck, CreditCard, FileText, Calendar } from 'lucide-react';
import Head from 'next/head';

export default function FAQSection({ originState = "California", destinationState = "Texas" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      icon: DollarSign,
      question: `How much does it cost to ship a car from ${originState} to ${destinationState}?`,
      answer: `The cost to ship a car depends on four main factors: distance, vehicle size, transport type, and season. For example, larger SUVs cost more than sedans because they take up more space on the trailer. While we can't give a flat rate without details, Open Transport is generally the cheapest way to ship a car. For an exact price that includes all taxes and insurance, use our instant quote calculator or call 1-888-706-8784.`
    },
    {
      icon: Clock,
      question: `How long does it take to ship a car from ${originState} to ${destinationState}?`,
      answer: `Transit time is based on mileage. A driver typically covers about 400-500 miles per day.\n\nShort routes (0-500 miles): 1-2 Days\nMedium routes (500-1,500 miles): 3-5 Days\nCross-country (Coast-to-Coast): 7-10 Days\n\nNote: Weather, traffic, and Department of Transportation (DOT) mandatory rest periods for drivers can slightly affect these times.`
    },
    {
      icon: Calculator,
      question: "Are there any hidden costs I should worry about?",
      answer: `At Furious Auto Shipping, we pride ourselves on transparency. However, in the industry, "hidden fees" often come from inoperable vehicles (if your car doesn't start, it requires a winch) or rural locations (drivers may charge extra to go far off the main highway). To avoid surprises, please be honest about your vehicle's condition and location when booking.`
    },
    {
      icon: Shield,
      question: `Is my car insured during transport? What about "Acts of God"?`,
      answer: `Yes, your vehicle is fully insured by the carrier's cargo insurance policy against negligence (scratches, dents, accidents) from pickup to delivery. However, most carrier policies do not cover "Acts of God" (hail, floods, earthquakes) or damage caused by road debris (like a rock hitting a windshield). We recommend checking with your personal auto insurance provider to see if they offer supplemental coverage for transit.`
    },
    {
      icon: Package,
      question: "Can I pack personal items in my car to save money on moving?",
      answer: `You can usually pack up to 100 lbs of personal items in the trunk or cargo area at no extra charge. However, these items must be secured below the window line.\n\nWarning: The carrier's insurance does not cover personal items. If they are damaged or stolen, you cannot claim them. Also, overloading the car can result in fines for the driver at weigh stations, which may be passed on to you.`
    },
    {
      icon: Car,
      question: "How should I prepare my car for transport?",
      answer: `To ensure a smooth pickup, please follow this checklist:\n\n• Fuel: Keep gas at about 1/4 tank. This is enough to drive on/off the truck but keeps the weight low.\n• Cleanliness: Wash the exterior so you and the driver can easily spot and mark existing scratches on the Bill of Lading.\n• Accessories: Remove loose items like bike racks, luggage carriers, and retract antennas.\n• Toll Tags: Remove or deactivate E-ZPass/SunPass tags to avoid being charged tolls as the truck drives through them.`
    },
    {
      icon: MapPin,
      question: "Does the driver come directly to my front door (Door-to-Door)?",
      answer: `Yes, we offer door-to-door service as standard. However, huge transport trucks (often 80 feet long) cannot fit down narrow residential streets or tight cul-de-sacs. If your street is inaccessible, the driver will ask to meet you at the nearest large parking lot (like a grocery store or school) to load or unload your vehicle safely.`
    },
    {
      icon: Wrench,
      question: "Can you ship a car that doesn't run (Inoperable)?",
      answer: `Yes, we can ship non-running vehicles. You must let us know at the time of booking so we can dispatch a truck equipped with a winch to pull your car onto the trailer. There is typically an additional fee (usually $150-$200) for this service due to the extra labor and equipment required.`
    },
    {
      icon: Truck,
      question: "What is the difference between Open vs. Enclosed transport?",
      answer: `Open Transport: Your car is on an open trailer (like you see on highways). It is the most affordable and popular option but is exposed to rain, dust, and sun.\n\nEnclosed Transport: Your car is inside a hard-sided trailer. It is protected from all weather and road debris. This costs 30-50% more and is recommended for classic cars, luxury vehicles, or convertibles.`
    },
    {
      icon: CreditCard,
      question: "How do I pay for my shipment?",
      answer: `We use a two-step payment system that protects you:\n\nDeposit: A small reservation fee is charged only after we have assigned a driver to your route.\n\nBalance: The remaining balance is paid cash-on-delivery (COD) or via certified funds (Money Order/Cashier's Check) directly to the driver when they drop off your car. This ensures you only pay the full amount once the job is done.`
    },
    {
      icon: FileText,
      question: "Do I need to be present for pickup and delivery?",
      answer: `Yes, you or a designated representative (anyone over 18) must be present to sign the Bill of Lading. This document records the condition of your car before it leaves and when it arrives. It is your official contract and proof of condition for insurance purposes.`
    },
    {
      icon: Calendar,
      question: "When should I book my auto transport?",
      answer: `For the best rates and guaranteed availability, we recommend booking 2 to 3 weeks in advance. If you are shipping during "Snowbird Season" (shipping out of NY in winter or out of FL in spring), try to book 4 weeks ahead, as trucks fill up very quickly.`
    }
  ];

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })) 
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <> 
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        /> 

      {/* <section className="pb-10 px-4 bg-gradient-to-b from-white to-gray-50"> */}
        <div className="pb-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              About Shipping from {originState} to {destinationState}
            </p>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-start gap-4 text-left hover:bg-gray-50 transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                        isOpen ? 'bg-blue-600' : 'bg-blue-100'
                      }`}>
                        <Icon className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-blue-600'}`} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 pr-8">
                        {faq.question}
                      </h3>
                    </div>

                    <div className="flex-shrink-0">
                      <ChevronDown
                        className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                          isOpen ? 'transform rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="px-6 pb-6 pl-20">
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> 
        </div>
      {/* </section> */}
    </>
  );
}