'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const faqs = [
  {
    question: 'How much does auto transport cost?',
    answer: 'Auto transport costs typically range from $500-$1,500 depending on distance, vehicle size, transport type, and season. We provide instant quotes with transparent pricing and no hidden fees.'
  },
  {
    question: 'How long does car shipping take?',
    answer: 'Transit times vary by distance: local routes take 1-3 days, while cross-country shipments take 7-14 days. We provide estimated delivery windows and keep you updated throughout the process.'
  },
  {
    question: 'Is my car insured during transport?',
    answer: 'Yes, all shipments are covered by comprehensive insurance. Our carriers maintain cargo insurance ranging from $100,000 to $1,000,000 depending on your vehicle\'s value.'
  },
  {
    question: 'What\'s the difference between open and enclosed transport?',
    answer: 'Open transport uses standard car carriers and is more economical. Enclosed transport uses covered trailers for protection from weather and debris, ideal for luxury or classic vehicles.'
  },
  {
    question: 'Do I need to be present for pickup and delivery?',
    answer: 'Yes, you or an authorized representative (18+) must be present for both pickup and delivery to sign paperwork, hand over keys, and conduct vehicle inspections.'
  },
  {
    question: 'Can I track my vehicle during transport?',
    answer: 'Absolutely! We provide tracking updates and direct driver contact information once your vehicle is assigned to a carrier. You\'ll receive regular updates throughout the journey.'
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set([0])) // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our auto transport services. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-inset"
                >
                  <span className="font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={cn(
                      'h-5 w-5 text-gray-400 transition-transform flex-shrink-0',
                      openItems.has(index) && 'transform rotate-180'
                    )}
                  />
                </button>
                
                {openItems.has(index) && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Have more questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/faq"
                className="btn-outline btn-lg"
              >
                View All FAQs
              </Link>
              <Link
                href="/contact"
                className="btn-primary btn-lg"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}