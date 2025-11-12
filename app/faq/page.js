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
        answer: 'Auto transport involves picking up your vehicle from a specified location and delivering it to your destination using professional car carriers. We handle all logistics, from coordinating with certified drivers to providing tracking and insurance coverage throughout the journey.'
      },
      {
        question: 'How much does it cost to ship a car?',
        answer: 'Car shipping costs typically range from $500-$1,500 depending on distance, vehicle size, transport type, and season. Factors affecting price include route popularity, fuel costs, vehicle condition, and service options like expedited delivery or enclosed transport.'
      },
      {
        question: 'How long does car shipping take?',
        answer: 'Transit times vary by distance: local/regional routes take 1-3 days, cross-country shipments take 7-14 days. Factors affecting timing include weather conditions, route traffic, pickup/delivery scheduling, and whether you choose standard or expedited service.'
      },
      {
        question: 'Is my car insured during transport?',
        answer: 'Yes, all shipments are covered by comprehensive insurance. Our carriers maintain cargo insurance that covers your vehicle during loading, transport, and unloading. Coverage typically ranges from $100,000 to $1,000,000 depending on the carrier and your vehicle\'s value.'
      }
    ]
  },
  {
    id: 'booking',
    name: 'Booking & Scheduling',
    faqs: [
      {
        question: 'How far in advance should I book?',
        answer: 'We recommend booking 1-2 weeks in advance for standard service. For expedited shipping, we can often accommodate requests with 2-7 days notice. Peak seasons (summer months) and popular routes may require earlier booking for best availability.'
      },
      {
        question: 'Can I choose specific pickup and delivery dates?',
        answer: 'We provide pickup and delivery windows rather than exact dates. Standard windows are 1-7 days for pickup and similar for delivery. Expedited service offers narrower windows. Weather, traffic, and carrier schedules can affect exact timing.'
      },
      {
        question: 'What if I need to change my dates?',
        answer: 'Date changes are possible but depend on carrier availability and timing. Changes made more than 48 hours before pickup usually have no fees. Last-minute changes may incur fees or require rebooking. Contact us as soon as possible for any schedule changes.'
      },
      {
        question: 'Do you offer same-day or rush shipping?',
        answer: 'We offer expedited service that can arrange pickup within 24-48 hours and faster delivery. This premium service costs more but provides priority scheduling. Availability depends on your route and current carrier capacity.'
      }
    ]
  },
  {
    id: 'preparation',
    name: 'Vehicle Preparation',
    faqs: [
      {
        question: 'How should I prepare my car for shipping?',
        answer: 'Clean your vehicle inside and out, remove all personal items, ensure the gas tank is 1/4 full or less, disable car alarms, remove or secure loose parts, and document existing damage with photos. Provide us with all necessary keys and documentation.'
      },
      {
        question: 'Can I leave personal items in my car?',
        answer: 'We strongly recommend removing all personal items. Carriers typically don\'t allow personal belongings due to insurance and weight restrictions. If you must leave something, limit it to 100 lbs in the trunk, but these items won\'t be covered by insurance.'
      },
      {
        question: 'What if my car doesn\'t run?',
        answer: 'Non-running vehicles can be shipped but require special equipment and handling, which increases the cost by $150-300. The car must roll, steer, and brake for loading/unloading. Completely inoperable vehicles may require special arrangements.'
      },
      {
        question: 'Do I need to be present for pickup and delivery?',
        answer: 'Yes, you or an authorized representative (18+) must be present for both pickup and delivery to sign paperwork, hand over keys, and conduct vehicle inspections. The representative should be familiar with the vehicle\'s condition.'
      }
    ]
  },
  {
    id: 'services',
    name: 'Services & Options',
    faqs: [
      {
        question: 'What\'s the difference between open and enclosed transport?',
        answer: 'Open transport uses standard car carriers (like those you see on highways) and is more economical. Enclosed transport uses covered trailers that protect from weather and road debris, ideal for luxury, classic, or high-value vehicles. Enclosed costs 40-60% more.'
      },
      {
        question: 'What is door-to-door vs terminal-to-terminal service?',
        answer: 'Door-to-door picks up and delivers at your specified addresses (most popular). Terminal-to-terminal requires you to drop off and pick up at designated locations, but costs $100-200 less. Door-to-door offers maximum convenience.'
      },
      {
        question: 'Do you ship to Alaska or Hawaii?',
        answer: 'Yes, we provide shipping to Alaska and Hawaii, but it requires special arrangements and takes longer (7-14+ days). Alaska shipments often go through Seattle, while Hawaii requires port-to-port ocean freight. Costs are higher due to logistics complexity.'
      },
      {
        question: 'Can you ship motorcycles, boats, or RVs?',
        answer: 'We specialize in standard passenger vehicles. For motorcycles, boats, RVs, or oversized vehicles, we can connect you with specialized carriers. These shipments require custom quotes due to size, weight, and handling requirements.'
      }
    ]
  },
  {
    id: 'payment',
    name: 'Payment & Pricing',
    faqs: [
      {
        question: 'How do I pay for auto transport?',
        answer: 'Payment is typically split: a deposit (usually $100-300) to secure booking, with the balance paid to the driver upon delivery. We accept cash, certified checks, and money orders. Some carriers accept credit cards for the final payment.'
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'No, we provide transparent pricing. Our quotes include all standard fees. Additional costs only apply if you request extra services (expedited shipping, enclosed transport) or if special circumstances arise (ferry fees, residential delivery challenges).'
      },
      {
        question: 'What factors affect the shipping cost?',
        answer: 'Key factors include distance, route popularity, vehicle size/weight, transport type (open vs enclosed), season, fuel costs, pickup/delivery locations, and timeline. Rural locations or less popular routes may cost more due to limited carrier availability.'
      },
      {
        question: 'Do you offer military discounts?',
        answer: 'Yes, we offer military discounts for active duty, veterans, and their families. The discount varies by route and season but typically ranges from $50-200. Valid military ID or documentation is required to qualify for the discount.'
      }
    ]
  },
  {
    id: 'tracking',
    name: 'Tracking & Communication',
    faqs: [
      {
        question: 'Can I track my vehicle during transport?',
        answer: 'Yes, we provide tracking updates and driver contact information once your vehicle is assigned to a carrier. You\'ll receive pickup confirmation, in-transit updates, and delivery scheduling. You can also call our customer service for status updates anytime.'
      },
      {
        question: 'What if there are delays?',
        answer: 'Weather, traffic, mechanical issues, or regulatory delays can occur. We monitor all shipments and communicate any delays immediately. If delays are significant, we may offer compensation or help expedite alternative arrangements.'
      },
      {
        question: 'How will I know when my car will be delivered?',
        answer: 'The driver will contact you 24-48 hours before delivery to schedule an appointment. You\'ll receive advance notice and can coordinate a convenient delivery time within the scheduled window. Emergency contact information is always provided.'
      },
      {
        question: 'What if I can\'t be reached for delivery?',
        answer: 'It\'s crucial to maintain communication during transport. If unreachable, drivers may charge storage fees or return the vehicle to a terminal. Always provide current contact information and alternative contacts to avoid complications and additional fees.'
      }
    ]
  }
]

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