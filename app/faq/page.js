'use client'

import { useState } from 'react'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

// export const metadata = {
//   title: 'Frequently Asked Questions | Auto Transport FAQ',
//   description: 'Get answers to common questions about auto transport, car shipping costs, insurance, and more. Expert answers to help you ship your vehicle.',
//   keywords: 'auto transport FAQ, car shipping questions, vehicle transport answers, auto shipping help',
// }

const faqCategories = [
  {
    id: 'general',
    name: 'General Questions',
    faqs: [
      {
        question: 'How does auto transport work?',
        answer: 'Auto transport works by dispatching a professional carrier to pick up your vehicle from a specified location and deliver it to your destination. We handle the entire logistics chain, including carrier vetting, insurance verification, and driver coordination, ensuring a seamless door-to-door experience.'
      },
      {
        question: 'How much does it cost to ship a car cross-country?',
        answer: 'The average cost to ship a car cross-country (approx. 2,000 miles) is between $1,100 and $1,500 for open transport. Prices vary based on vehicle size, fuel costs, and seasonal demand. Enclosed transport typically costs 40% to 60% more than standard open shipping.'
      },
      {
        question: 'How long does auto transport take?',
        answer: 'Auto transport transit times depend on distance. 0-500 miles takes 1-2 days, 500-1,500 miles takes 3-5 days, and coast-to-coast (2,500+ miles) takes 7-10 days. These estimates assume standard weather and traffic conditions.'
      },
      {
        question: 'Is my vehicle insured during transport?',
        answer: 'Yes, your vehicle is fully insured. All carriers in the Furious Auto Shipping network are required by the FMCSA to maintain active cargo insurance. This coverage protects your vehicle from external damage, fire, and theft from the moment of pickup until delivery.'
      }
    ]
  },
  {
    id: 'booking',
    name: 'Booking & Scheduling',
    faqs: [
      {
        question: 'How far in advance should I book?',
        answer: 'Booking 1 to 2 weeks in advance guarantees the best rates and carrier availability. While we can accommodate last-minute requests (2-5 days notice), expedited shipping often carries a premium. Peak seasons, such as summer and snowbird season (Oct-Jan), may require earlier booking.'
      },
      {
        question: 'Can I choose specific pickup and delivery dates?',
        answer: 'Auto transport operates on "pickup windows" rather than exact appointments due to traffic and weather variables. The standard window is 1-3 days for pickup. However, the driver will call you 12-24 hours in advance to schedule a specific meeting time for both pickup and delivery.'
      },
      {
        question: 'What if I need to change my dates?',
        answer: 'Date changes can be made without penalty if requested at least 48 hours before the scheduled dispatch. Changes made after a carrier has been assigned may incur a rescheduling fee or require a new quote based on current market rates.'
      },
      {
        question: 'Do you offer same-day or rush shipping?',
        answer: 'Yes, we offer Expedited Shipping which prioritizes your vehicle for pickup within 24-48 hours. This premium service moves your vehicle to the top of the dispatch board but typically costs 20-30% more than standard shipping due to the urgent routing required.'
      }
    ]
  },
  {
    id: 'preparation',
    name: 'Vehicle Preparation',
    faqs: [
      {
        question: 'How should I prepare my car for shipping?',
        answer: 'To prepare your car, ensure the gas tank is roughly 1/4 full (to reduce weight) and remove all toll tags (EZ-Pass) to avoid accidental charges. You must also disable any alarm systems and provide a clean set of keys to the driver. A clean exterior allows for a more accurate inspection.'
      },
      {
        question: 'Can I pack personal items in my car?',
        answer: 'You can typically pack up to 100 lbs of personal items in the trunk or cargo area. These items must be secured below the window line to ensure driver visibility. Note that personal items are NOT covered by the carrier\'s cargo insurance policy and are shipped at your own risk.'
      },
      {
        question: 'What if my car doesn\'t run?',
        answer: 'Inoperable vehicles can be shipped but require a carrier equipped with a winch. This service typically adds $150 to the total cost. You must notify us in advance if the vehicle cannot roll, brake, or steer, as this may require a specialized forklift for loading.'
      },
      {
        question: 'Do I need to be present for pickup and delivery?',
        answer: 'Yes, you or a designated agent (over 18) must be present at both pickup and delivery. This person is required to sign the Bill of Lading (inspection report), which documents the vehicle\'s condition before and after transport. Without a signature, insurance claims cannot be processed.'
      }
    ]
  },
  {
    id: 'services',
    name: 'Services & Options',
    faqs: [
      {
        question: 'What is the difference between open and enclosed transport?',
        answer: 'Open transport places your vehicle on a standard open trailer (exposed to road elements) and is the most cost-effective option. Enclosed transport uses a hard-sided trailer to protect vehicles from weather, dust, and debris, making it the recommended choice for luxury, classic, and high-value cars.'
      },
      {
        question: 'What is door-to-door vs. terminal-to-terminal service?',
        answer: 'Door-to-door service means the truck picks up and delivers as close to your specified address as legally possible. Terminal-to-terminal requires you to drop off and retrieve the car at a storage depot. We primarily specialize in door-to-door shipping for maximum convenience and security.'
      },
      {
        question: 'Do you ship to Alaska or Hawaii?',
        answer: 'Yes, we facilitate shipping to Alaska and Hawaii via port-to-port logistics. Vehicles going to Hawaii are shipped via ocean freight from West Coast ports (Long Beach, Oakland, Seattle), while Alaska shipments often depart from Tacoma, WA. Transit times for these routes range from 7 to 14 days.'
      },
      {
        question: 'Can you ship motorcycles, boats, or RVs?',
        answer: 'Yes, we ship motorcycles, boats, and RVs using specialized equipment. Motorcycles are typically shipped in enclosed crates, while boats and RVs may require flatbed or lowboy trailers depending on their dimensions. Custom quotes are required for these oversized items.'
      }
    ]
  },
  {
    id: 'payment',
    name: 'Payment & Pricing',
    faqs: [
      {
        question: 'How do I pay for auto transport?',
        answer: 'Payment is split into two parts: a small reservation deposit (Credit Card) charged only after a carrier is assigned, and the remaining balance paid directly to the driver at delivery via Cash, Money Order, or Cashier\'s Check. We do not require any upfront payment to start the search.'
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'No, our "Price Lock Promise" means the quote you accept is the price you pay. The only potential extra costs are for undeclared items in the vehicle (over 100 lbs) or if the vehicle condition is misrepresented (e.g., listed as running but is actually inoperable).'
      },
      {
        question: 'What factors affect the shipping cost?',
        answer: 'Shipping costs are primarily determined by total mileage, vehicle size (weight/dimensions), and seasonal demand. Routes moving "against the flow" of traffic (backhaul) are cheaper, while shipping during peak snowbird season or to rural locations may increase the rate.'
      },
      {
        question: 'Do you offer military discounts?',
        answer: 'Yes, we offer discounts for Active Duty military and Veterans (PCS moves). The discount amount varies by route but typically saves $50-$100 off the standard rate. Please mention your military status when booking to have this applied.'
      }
    ]
  },
  {
    id: 'tracking',
    name: 'Tracking & Communication',
    faqs: [
      {
        question: 'Can I track my vehicle during transport?',
        answer: 'Yes, once your vehicle is dispatched, you will receive the driver\'s direct cell phone number for real-time updates. Additionally, our support team monitors the route and can provide GPS location updates upon request throughout the journey.'
      },
      {
        question: 'What if there are delays?',
        answer: 'Delays can occur due to weather, traffic, or mandatory DOT rest breaks. If a delay exceeds 24 hours, we will notify you immediately. Safety is our priority, so we do not pressure drivers to violate federal safety regulations to meet a deadline.'
      },
      {
        question: 'How will I know when my car will be delivered?',
        answer: 'The driver will contact you 12 to 24 hours prior to arrival to confirm the delivery window. About an hour before arriving at your specific location, they will call again to ensure you are ready to meet them.'
      },
      {
        question: 'What if I cannot be reached for delivery?',
        answer: 'If you are unavailable, you must assign a backup person (friend/neighbor) to accept the vehicle. If no one can accept delivery, the vehicle may be placed in a local storage facility at your expense. Communication is key to avoiding these storage fees.'
      }
    ]
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('general')
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (categoryId, index) => {
    const key = `${categoryId}-${index}`
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(key)) {
      newOpenItems.delete(key)
    } else {
      newOpenItems.add(key)
    }
    setOpenItems(newOpenItems)
  }

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(
      faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl leading-relaxed mb-8">
              Find answers to common questions about auto transport services, 
              pricing, preparation, and more. Can't find what you're looking for? 
              Contact our support team.
            </p>
            
            {/* Search */}
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search FAQs..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <nav className="space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      'w-full text-left px-3 py-2 rounded-md transition-colors',
                      activeCategory === category.id
                        ? 'bg-brand-100 text-brand-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    )}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 p-4 bg-brand-50 rounded-lg">
                <h4 className="font-semibold mb-2">Still Need Help?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Can't find the answer you're looking for?
                </p>
                <a
                  href="/contact"
                  className="btn-primary w-full text-center text-sm"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            {searchTerm ? (
              /* Search Results */
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Search Results for "{searchTerm}"
                </h2>
                {filteredFAQs.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">
                      No results found for your search term.
                    </p>
                    <button
                      onClick={() => setSearchTerm('')}
                      className="btn-outline"
                    >
                      Clear Search
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredFAQs.map((category) => (
                      <div key={category.id}>
                        <h3 className="text-lg font-semibold mb-4 text-brand-600">
                          {category.name}
                        </h3>
                        <div className="space-y-4">
                          {category.faqs.map((faq, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg shadow-md border border-gray-200"
                            >
                              <button
                                onClick={() => toggleItem(category.id, index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                              >
                                <span className="font-medium pr-4">{faq.question}</span>
                                <ChevronDownIcon
                                  className={cn(
                                    'h-5 w-5 text-gray-400 transition-transform',
                                    openItems.has(`${category.id}-${index}`) && 'transform rotate-180'
                                  )}
                                />
                              </button>
                              {openItems.has(`${category.id}-${index}`) && (
                                <div className="px-6 pb-4">
                                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* Category View */
              <div>
                {faqCategories
                  .filter((category) => category.id === activeCategory)
                  .map((category) => (
                    <div key={category.id}>
                      <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
                      <div className="space-y-4">
                        {category.faqs.map((faq, index) => (
                          <div
                            key={index}
                            className="bg-white rounded-lg shadow-md border border-gray-200"
                          >
                            <button
                              onClick={() => toggleItem(category.id, index)}
                              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                              <span className="font-medium pr-4">{faq.question}</span>
                              <ChevronDownIcon
                                className={cn(
                                  'h-5 w-5 text-gray-400 transition-transform',
                                  openItems.has(`${category.id}-${index}`) && 'transform rotate-180'
                                )}
                              />
                            </button>
                            {openItems.has(`${category.id}-${index}`) && (
                              <div className="px-6 pb-4">
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="section bg-gray-50">
        <div className="container text-center">
          <h2 className="heading-2 mb-4">Ready to Ship Your Vehicle?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Now that you have the answers, get your free instant quote and 
            experience our professional auto transport service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-quote"
              className="btn-primary btn-lg"
            >
              Get Free Quote
            </a>
            <a
              href="/contact"
              className="btn-outline btn-lg"
            >
              Ask a Question
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}