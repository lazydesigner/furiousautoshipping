import React from 'react';
import { Phone, UserCheck, Truck, Navigation, Home } from 'lucide-react';
import Link from 'next/link';

export default function WhiteGloveProcess() {
  const steps = [
    {
      number: 1,
      title: "Consultation",
      icon: Phone,
      description: "We discuss the specific modifications and dimensions of your vehicle. Is it lowered? Does it have a wide body kit? We ensure we send the right truck type (Hard-side vs. Soft-side)."
    },
    {
      number: 2,
      title: "The Vetting",
      icon: UserCheck,
      description: "We hand-pick a driver experienced with your specific car make. We don't send a rookie to move a Rolls Royce."
    },
    {
      number: 3,
      title: "The Pickup",
      icon: Truck,
      description: "The driver uses the hydraulic lift gate and white-glove protocols (seat covers, floor mats, and steering wheel covers) to load the vehicle."
    },
    {
      number: 4,
      title: "The Journey",
      icon: Navigation,
      description: "Your car travels in a climate-controlled, sealed environment."
    },
    {
      number: 5,
      title: "The Delivery",
      icon: Home,
      description: "The driver unloads the vehicle right at your driveway (or the nearest safe wide street), ready for the showroom floor."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-100 to-white py-9 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold mb-4">
            ⭐ VIP Treatment
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            The "White Glove" Process
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            When you book Enclosed Shipping with Furious Auto Shipping, you are getting our VIP treatment.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="block md:flex gap-6 items-start">
                {/* Number Circle */}
                <div className="hidden md:block flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white rounded-xl shadow-md p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-slate-100 rounded-lg p-2">
                      <Icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-brand-500 to-brand-500 rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Experience Premium Service
          </h3>
          <p className="text-amber-50 text-lg mb-6">
            Your luxury vehicle deserves luxury treatment
          </p>
          <Link href='/get-quote'><button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors duration-300">
            Book White Glove Service
          </button></Link>
        </div>
      </div>
    </div>
  );
}