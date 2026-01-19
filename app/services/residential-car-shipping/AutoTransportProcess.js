import React from 'react';
import { Car, FileCheck, MapPin, Package } from 'lucide-react';

const ProcessStep = ({ number, title, icon: Icon, children, isLast }) => (
  <div className="relative">
    <div className="flex gap-6">
      {/* Timeline connector */}
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-600 to-brand-700 flex items-center justify-center shadow-lg">
          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-gradient-to-b from-brand-200 to-transparent mt-4" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-sm font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
              Step {number}
            </span>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          </div>
          <div className="text-gray-700 leading-relaxed space-y-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HighlightBox = ({ title, children }) => (
  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-4">
    <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
    <div className="text-gray-700 text-sm">{children}</div>
  </div>
);

const AutoTransportProcess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-brand-50 py-16 px-4">
      <div className="max-w-7xl mx-auto px-2 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How Auto Transport Works
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A transparent, step-by-step guide to shipping your vehicle across state lines
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-2">
          <ProcessStep
            number={1}
            title="The Quote and Booking"
            icon={FileCheck}
          >
            <p>
              It starts with transparency. You provide us with your pickup and delivery zip codes, 
              vehicle make and model, and your desired dates. We provide a competitive, market-driven price. 
              Once you book, our dispatch team goes to work securing a spot on a carrier that matches your route.
            </p>
          </ProcessStep>

          <ProcessStep
            number={2}
            title="The Carrier Assignment & Inspection"
            icon={Package}
          >
            <p>
              Once a carrier is assigned, you will receive their details. On pickup day, the driver will 
              perform a comprehensive vehicle inspection. You and the driver will walk around the car, 
              noting any existing scratches or dents on the Bill of Lading.
            </p>
            <p className="text-sm italic text-gray-600 mt-3 pt-3 border-t border-gray-200">
              This is your insurance policy—it documents the exact condition of the car before it leaves your possession.
            </p>
          </ProcessStep>

          <ProcessStep
            number={3}
            title="Solving the 'Residential' Challenge"
            icon={MapPin}
          >
            <p>
              This is where my 20 years of experience comes in handy. "Door-to-door" is the industry standard, 
              but residential car shipping has a specific logistical nuance: <strong>Accessibility</strong>.
            </p>
            
            <HighlightBox title="The Reality">
              Most auto transport trucks are massive, 80-foot long carriers. They cannot physically fit down 
              narrow suburban cul-de-sacs, and they certainly cannot navigate tight apartment complexes with 
              low-hanging oak trees or speed bumps. Furthermore, many Homeowners Associations (HOAs) and city 
              ordinances strictly prohibit heavy commercial trucks from entering residential streets.
            </HighlightBox>

            <div className="mt-5">
              <h4 className="font-semibold text-gray-900 mb-3">How We Handle This</h4>
              <p className="mb-3">
                If the trucker cannot get to your front door safely, we coordinate a nearby meet-up spot. 
                This is standard procedure and ensures the safety of your vehicle and the driver.
              </p>
              
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-medium text-gray-900 mb-2">Common meet-up locations:</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-600 mt-1">•</span>
                    <span>Large grocery store parking lots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-600 mt-1">•</span>
                    <span>Shopping malls or strip centers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-600 mt-1">•</span>
                    <span>Schools or churches with ample open lots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-600 mt-1">•</span>
                    <span>Rest stops just off the main highway</span>
                  </li>
                </ul>
              </div>

              <p className="mt-4 text-sm text-gray-600 italic">
                Our drivers are professionals. They will communicate with you in advance to agree on a 
                location that is safe, well-lit, and convenient for you to hand over the vehicle.
              </p>
            </div>
          </ProcessStep>

          <ProcessStep
            number={4}
            title="Transit and Delivery"
            icon={Car}
            isLast={true}
          >
            <p>
              Your vehicle travels securely to your new state. Upon arrival, the driver will call you to 
              arrange the final drop-off (again, potentially at a nearby large lot if your new street is narrow).
            </p>
            <p className="mt-3">
              You perform the final inspection, sign off, and you are reunited with your car.
            </p>
            <div className="mt-5 bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-900 font-medium text-center">
                ✓ Process Complete — Your Vehicle Has Arrived Safely
              </p>
            </div>
          </ProcessStep>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Ready to Ship Your Vehicle?</h3>
          <p className="text-brand-100 mb-6">Get a transparent quote in minutes</p>
          <button className="bg-white text-brand-700 font-semibold px-8 py-3 rounded-lg hover:bg-brand-50 transition-colors shadow-md">
            Get Your Free Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoTransportProcess;