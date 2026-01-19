import React from 'react';
import { Phone, MapPin, ClipboardCheck, FileCheck, Key } from 'lucide-react';
import Link from 'next/link';

export default function HandoverProcess() {
  const steps = [
    {
      number: 1,
      icon: Phone,
      title: "The 24-Hour Notice",
      description: "Our driver will call you roughly 12 to 24 hours before arrival to give you a delivery window. This allows you to plan your day.",
      color: "bg-brand-500"
    },
    {
      number: 2,
      icon: MapPin,
      title: "The 'One Hour Out' Call",
      description: "As the driver gets close, they will call again. \"I'm 20 miles away. Is your street clear, or should we meet at the Home Depot nearby?\"",
      color: "bg-indigo-500"
    },
    {
      number: 3,
      icon: ClipboardCheck,
      title: "The Unloading & Inspection",
      description: "This is the most critical step. The driver will carefully unload your vehicle. Do not rush. Take your time to walk around the vehicle.",
      color: "bg-purple-500",
      highlight: true,
      details: [
        "Compare with the BOL: Look at the Bill of Lading (inspection report) from pickup. Ensure the car is in the exact same condition.",
        "Check the Odometer: You should see negligible mileage added (only for loading/unloading)."
      ]
    },
    {
      number: 4,
      icon: FileCheck,
      title: "The Sign-Off",
      description: "Once you are happy, you sign the final Bill of Lading. This releases the driver and confirms you received the car in good condition.",
      color: "bg-pink-500"
    },
    {
      number: 5,
      icon: Key,
      title: "The Keys",
      description: "The driver hands over your keys. You drive your car into your garage. Simple as that.",
      color: "bg-rose-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            The Step-by-Step Handover Process
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Here is exactly what happens on delivery day. We make it smooth and celebratory—after all, being reunited with your car is a great feeling!
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  step.highlight ? 'ring-2 ring-purple-300' : ''
                }`}
              >
                {/* Decorative gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${step.color}`} />
                
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon and Number */}
                    <div className="flex-shrink-0">
                      <div className={`relative w-16 h-16 md:w-20 md:h-20 ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                          <span className="text-sm font-bold text-slate-700">{step.number}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Additional details for critical step */}
                      {step.details && (
                        <div className="mt-4 space-y-3 bg-purple-50 rounded-xl p-4 border border-purple-100">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex gap-3">
                              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-purple-500" />
                              <p className="text-slate-700 text-sm md:text-base">
                                <strong className="text-purple-700">{detail.split(':')[0]}:</strong>
                                {detail.split(':')[1]}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Connector line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-10 -bottom-6 w-0.5 h-6 bg-gradient-to-b from-slate-300 to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready for a Smooth Delivery?
          </h3>
          <p className="text-brand-50 text-lg mb-6">
            Your vehicle handover will be seamless and stress-free
          </p>
          <Link href='/get-quote'><button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full hover:bg-slate-50 transition-colors duration-300 shadow-lg">
            Get Started Today
          </button></Link>
        </div>
      </div>
    </div>
  );
}