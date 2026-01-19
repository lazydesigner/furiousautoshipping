import React from 'react';
import Link from 'next/link';
import { FileText, Calendar, ClipboardCheck, Truck, MapPin, Shield, Star } from 'lucide-react';

const ProcessStep = ({ number, title, icon: Icon, children, proTip, isLast }) => (
  <div className="relative">
    <div className="flex gap-6">
      {/* Timeline */}
      <div className="hidden md:flex flex-col items-center">
        {/* Step Badge */}
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg border-4 border-white">
            <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
          </div>
          {/* Step Number */}
          <div className="absolute -top-2 -right-2 w-7 h-7 bg-brand-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow">
            {number}
          </div>
        </div>
        {/* Connector Line */}
        {!isLast && (
          <div className="w-1 flex-1 bg-gradient-to-b from-red-200 via-brand-100 to-transparent mt-4 min-h-[80px]" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-slate-50 to-brand-50 px-6 py-4 border-b border-gray-200 rounded-t-xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                STEP {number}
              </span>
              <p className="text-xl font-bold text-gray-900">{title}</p>
            </div>
          </div>

          {/* Card Body */}
          <div className="px-6 py-5">
            <div className="text-gray-700 leading-relaxed">
              {children}
            </div>

            {/* Pro Tip */}
            {proTip && (
              <div className="mt-4 bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">Pro Tip</p>
                    <p className="text-sm text-gray-700">{proTip}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MilitaryShippingProcess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-brand-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
            <Shield className="w-4 h-4" />
            <span>PCS Vehicle Transport</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Military Car Shipping Works:
           
            A Step-by-Step PCS Guide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto italic">
            We have refined our process to align with the military mindset: clear communication, 
            defined timelines, and mission accomplishment.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-2">
          <ProcessStep
            number={1}
            title="Orders and Quote Request"
            icon={FileText}
            proTip="Mention your service branch immediately so we can apply your Military Discount."
          >
            <p>
              As soon as you receive your soft or hard orders, contact us. We provide an instant, 
              transparent quote. We will ask for your origin zip code, destination zip code (or base), 
              and vehicle details.
            </p>
          </ProcessStep>

          <ProcessStep
            number={2}
            title="Scheduling the Pickup Window"
            icon={Calendar}
          >
            <p>
              We know reporting dates are not suggestions. We work backward from your required arrival 
              date to schedule a pickup window that aligns with your household goods packers and your 
              check-out procedures.
            </p>
          </ProcessStep>

          <ProcessStep
            number={3}
            title="Vehicle Inspection"
            icon={ClipboardCheck}
            proTip="Take your own photos for your records—redundancy is key in logistics."
          >
            <p>
              When the carrier arrives, a thorough inspection is conducted. This is documented on the 
              Bill of Lading. We encourage you to take your own photos for your records—redundancy is 
              key in logistics.
            </p>
          </ProcessStep>

          <ProcessStep
            number={4}
            title="Transit and Communication"
            icon={Truck}
          >
            <p>
              While you are clearing quarters or flying to your new station, your vehicle is in transit. 
              We provide updates so you aren't left guessing where your POV is.
            </p>
          </ProcessStep>

          <ProcessStep
            number={5}
            title="Delivery at Your New Duty Station"
            icon={MapPin}
            isLast={true}
          >
            <p>
              We coordinate delivery based on your arrival. If the car beats you there, we can arrange 
              storage. If you are already there, we deliver as close to your location as base security 
              allows.
            </p>
          </ProcessStep>
        </div> 

        {/* CTA Section */}
        <div className="mt-12 text-center bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-600">
          <p className="text-2xl font-bold text-gray-900 mb-3">
            Ready to Start Your PCS Vehicle Transport?
          </p>
          <p className="text-gray-600 mb-6">
            Get your military discount quote in under 2 minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href='/get-quote'><button className="bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold px-8 py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl">
              Claim Military Discount
            </button></Link>
            <Link href='tel:+1-888-706-8784'><button className="bg-brand-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-brand-700 transition-colors shadow-lg">
              Talk to a Specialist
            </button></Link>
          </div>
          <p className="text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-red-600" />
            <span>Proud to serve those who serve</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MilitaryShippingProcess;