'use client'
import React, { useState } from 'react';
import { Tag, Shield, Home, Zap } from 'lucide-react';
import Link from 'next/link';

const AutoShippingChooser = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const options = [
    {
      id: 'best-price',
      icon: Tag,
      title: 'I need the Best Price',
      subtext: 'Save money with standard shipping.',
      target: '/services/open-auto-transport',
      accentColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      id: 'luxury-car',
      icon: Shield,
      title: 'I have a Luxury Car',
      subtext: 'Maximum protection & insurance.',
      target: '/services/enclosed-auto-transport',
      accentColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'moving-house',
      icon: Home,
      title: "I'm Moving House",
      subtext: 'Door-to-door relocation services.',
      target: '/services/residential-car-shipping',
      accentColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      id: 'fast-pickup',
      icon: Zap,
      title: 'I need it FAST',
      subtext: 'Guaranteed 24-48hr pickup.',
      target: '/services/expedited-auto-transport',
      accentColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    }
  ];

  const handleCardClick = (target) => {
    // In a real implementation, this would scroll to the section or navigate
    window.location.href = target
    // console.log(`Navigating to: ${target}`);
    // alert(`In production, this would navigate to: ${target}`);
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Choose What You Need
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pick the option that matches your situation — we'll guide you to the right service.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleCardClick(option.target)}
              onMouseEnter={() => setHoveredCard(option.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`
                bg-white rounded-xl p-6 border border-gray-200
                transition-all duration-300 ease-in-out
                cursor-pointer text-center
                ${hoveredCard === option.id 
                  ? 'transform -translate-y-2 shadow-2xl shadow-red-100' 
                  : 'shadow-md hover:shadow-xl'
                }
              `}
            >
              {/* Icon */}
              <div className={`
                w-20 h-20 mx-auto mb-4 rounded-full ${option.accentColor}
                flex items-center justify-center
                transition-transform duration-300
                ${hoveredCard === option.id ? 'transform scale-110' : ''}
              `}>
                <option.icon className={`w-10 h-10 ${option.iconColor}`} strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {option.title}
              </h3>

              {/* Subtext */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {option.subtext}
              </p> 
            </button>
          ))}
        </div>

        {/* Optional CTA Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Not sure? <Link href='tel:1-888-706-8784'><span className="text-red-600 font-semibold cursor-pointer hover:underline">Talk to an expert</span></Link> — we're here to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutoShippingChooser;