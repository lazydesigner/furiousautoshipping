'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const FAQ = ({ 
  faqs, 
  title = "Frequently Asked Questions",
  subtitle = "Find answers to the most common questions about our services",
  className = "",
  itemClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  generateSchema = true 
}) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  // Generate FAQ Schema for SEO
  const generateFAQSchema = () => {
    if (!generateSchema || !faqs || faqs.length === 0) return null;

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

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    );
  };

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <>
      {generateFAQSchema()}
      <section className={`py-16 bg-white ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ${titleClassName}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${subtitleClassName}`}>
                {subtitle}
              </p>
            )}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md ${itemClassName}`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItems.has(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 ml-4">
                    {openItems.has(index) ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </span>
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.has(index) 
                      ? 'max-h-96 pb-5 opacity-100' 
                      : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <div className="text-gray-700 leading-relaxed">
                    {typeof faq.answer === 'string' ? (
                      <p>{faq.answer}</p>
                    ) : (
                      faq.answer
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div> 
        </div>
      </section>
    </>
  );
};

export default FAQ;