'use client'
import React, { useState } from 'react';
import { Star, Shield, Zap, Home, DollarSign, Package, Flag, Sun, HeartHandshake, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ServicesGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    // Row 1: Shipping Methods
    {
      id: 'open-transport',
      badge: { icon: Star, label: 'Most Popular', color: 'bg-green-100 text-green-700 border-green-200' },
      title: 'Open Auto Transport',
      headline: 'The Industry Standard',
      hook: 'Safe, affordable shipping for 95% of daily drivers. The smartest way to ship standard vehicles.',
      link: '/services/open-auto-transport',
      accent: 'border-green-200 hover:border-green-400'
    },
    {
      id: 'enclosed-transport',
      badge: { icon: Shield, label: 'Ultimate Protection', color: 'bg-amber-100 text-amber-800 border-amber-200' },
      title: 'Enclosed Auto Transport',
      headline: 'White-Glove Service',
      hook: 'Hard-sided trailers with hydraulic lift gates. Essential for exotics, classics, and vehicles worth $100k+.',
      link: '/services/enclosed-auto-transport',
      accent: 'border-amber-200 hover:border-amber-400'
    },
    {
      id: 'expedited-transport',
      badge: { icon: Zap, label: 'Priority Dispatch', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
      title: 'Expedited Auto Transport',
      headline: 'Guaranteed Pickup',
      hook: 'In a rush? Skip the line with guaranteed 24-48 hour pickup and team drivers for non-stop transit.',
      link: '/services/expedited-auto-transport',
      accent: 'border-yellow-200 hover:border-yellow-400'
    },
    // Row 2: Delivery Options
    {
      id: 'door-to-door',
      badge: { icon: Home, label: 'Ultimate Convenience', color: 'bg-brand-100 text-brand-700 border-brand-200' },
      title: 'Door-to-Door Transport',
      headline: 'From Driveway to Driveway',
      hook: 'We pick up and deliver as close to your front door as legally possible. No driving to terminals.',
      link: '/services/door-to-door-auto-transport',
      accent: 'border-brand-200 hover:border-brand-400'
    },
    {
      id: 'terminal-to-terminal',
      badge: { icon: DollarSign, label: 'Budget Saver', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
      title: 'Terminal-to-Terminal',
      headline: 'The Flexible Choice',
      hook: 'Drop off and pick up your car at a secure regional facility to save money on carrier fees.',
      link: '/services/terminal-to-terminal-auto-transport',
      accent: 'border-emerald-200 hover:border-emerald-400'
    },
    {
      id: 'residential-shipping',
      badge: { icon: Package, label: 'Moving Specialist', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
      title: 'Residential Car Shipping',
      headline: 'Relocation Made Easy',
      hook: 'Moving out of state? We coordinate with your moving dates to ensure your car arrives when you do.',
      link: '/services/residential-car-shipping',
      accent: 'border-indigo-200 hover:border-indigo-400'
    },
    // Row 3: Specialized Customers
    {
      id: 'military-shipping',
      badge: { icon: Flag, label: 'Active Duty Discount', color: 'bg-sky-100 text-sky-700 border-sky-200' },
      title: 'Military Car Shipping',
      headline: 'PCS Vehicle Logistics',
      hook: 'We know the drill. Base-to-base transport with full DITY reimbursement support for service members.',
      link: '/services/military-car-shipping',
      accent: 'border-sky-200 hover:border-sky-400'
    },
    {
      id: 'snowbird-transport',
      badge: { icon: Sun, label: 'Seasonal Routes', color: 'bg-orange-100 text-orange-700 border-orange-200' },
      title: 'Snowbird Auto Transport',
      headline: 'Winter Relocation',
      hook: 'Dedicated routes from the North (NY/Midwest) to the South (FL/AZ). Pack up to 100lbs of personal items.',
      link: '/services/snowbird-auto-transport',
      accent: 'border-orange-200 hover:border-orange-400'
    },
    {
      id: 'dealer-transport',
      badge: { icon: HeartHandshake, label: 'B2B Solutions', color: 'bg-slate-100 text-slate-700 border-slate-200' },
      title: 'Dealer Auto Transport',
      headline: 'High-Volume Logistics',
      hook: 'Bulk pricing and fast turn-rates for dealerships and auctions (Manheim, Copart, Adesa).',
      link: '/services/dealer-auto-transport',
      accent: 'border-slate-200 hover:border-slate-400'
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Auto Shipping Services Built for Every Situation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the service that matches your vehicle, timeline, and budget.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const BadgeIcon = service.badge.icon;
            const isHovered = hoveredCard === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                id={service.id}
                className={`
                  bg-white rounded-2xl p-8 border-2
                  transition-all duration-300 ease-out
                  ${service.accent}
                  ${isHovered 
                    ? 'transform -translate-y-2 shadow-2xl' 
                    : 'shadow-lg hover:shadow-xl'
                  }
                `}
              >
                {/* Badge */}
                <div className="mb-6">
                  <span className={`
                    inline-flex items-center gap-2 px-4 py-2 rounded-full
                    text-sm font-semibold border
                    ${service.badge.color}
                  `}>
                    <BadgeIcon className="w-4 h-4" />
                    {service.badge.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>

                {/* Headline */}
                <p className="text-lg font-semibold text-gray-700 mb-4">
                  {service.headline}
                </p>

                {/* Hook */}
                <p className="text-gray-600 leading-relaxed mb-6 min-h-[4rem]">
                  {service.hook}
                </p>

                {/* CTA Button */}
                <Link
                  href={service.link}
                  className={`
                    inline-flex items-center gap-2 text-red-600 font-semibold
                    transition-all duration-200
                    ${isHovered ? 'gap-3' : 'gap-2'}
                  `}
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Optional Footer CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-brand-50 to-brand-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still not sure which service is right for you?
          </h3>
          <p className="text-gray-600 mb-6">
            Talk to our shipping experts — we'll match you with the perfect solution.
          </p>
          <Link href='/get-quote'><button className="bg-brand-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Get Free Quote
          </button></Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;