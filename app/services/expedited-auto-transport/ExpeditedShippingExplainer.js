import React from 'react';
import { Truck, Clock, Zap, CheckCircle, Shield, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ExpeditedShippingExplainer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-brand-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-600 rounded-full mb-6">
            <Truck className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            What Does "Expedited" Actually Mean?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Understanding the difference between speed of logistics and speed of driving
          </p>
        </div>

        {/* Misconception Alert */}
        <div className="bg-red-50 border-l-4 border-pink-500 p-6 mb-12 rounded-r-lg">
          <div className="flex items-start">
            <Clock className="w-6 h-6 text-pink-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <p className="text-lg font-semibold text-pink-900 mb-2">
                Common Misconception
              </p>
              <p className="text-pink-800">
                "Expedited" does not mean the truck drives 100 MPH down the highway. 
                That is illegal and unsafe. Expedited auto transport is about speed of 
                logistics, not speed of driving.
              </p>
            </div>
          </div>
        </div>

        {/* Regulations Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Clock className="w-8 h-8 text-brand-600 mr-3" />
            <p className="text-2xl font-bold text-slate-900">
              Federal Regulations
            </p>
          </div>
          <p className="text-slate-700 mb-4">
            Federal law strictly regulates commercial trucking operations. The <Link  className='font-bold text-brand-500' href='https://www.transportation.gov/'>Department 
            of Transportation (DOT)</Link> mandates:
          </p>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
              <span>Maximum driving hours: 11 hours per day</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
              <span>Speed limits must be strictly observed</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
              <span>Mandatory rest periods for driver safety</span>
            </li>
          </ul>
          <p className="text-slate-600 mt-4 italic">
            We cannot change the laws of physics or DOT regulations. However, we can 
            change the dispatch timeline.
          </p>
        </div>

        {/* Line Jumping Effect */}
        <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl shadow-lg p-8 mb-12 text-white">
          <div className="flex items-center mb-6">
            <Zap className="w-8 h-8 text-yellow-300 mr-3" />
            <h3 className="text-2xl font-bold">
              The "Line Jumping" Effect
            </h3>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-lg font-semibold mb-2 text-brand-100">
                Standard Shipping
              </p>
              <p className="text-brand-50">
                Your vehicle is placed on a load board where drivers view available 
                shipments, calculate route compatibility, and pick up vehicles within 
                a 1-5 day window. This process is efficient but passive.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold mb-2 text-yellow-300">
                Expedited Shipping is Aggressive
              </p>
              <p className="text-brand-50">
                When you book expedited service, we attach a premium to your order. 
                In industry terms, we make your car the "Golden Ticket."
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl shadow-lg p-2 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            How Expedited Service Works
          </h2>
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-600 text-white rounded-full hidden md:flex items-center justify-center font-bold text-lg mr-6">
                1
              </div>
              <div>
                <p className="text-xl font-semibold text-slate-900 mb-2">
                  Priority Listing
                </p>
                <p className="text-slate-700">
                  Your vehicle moves to the absolute top of national dispatch boards, 
                  ensuring maximum visibility among available carriers.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-600 text-white rounded-full hidden md:flex items-center justify-center font-bold text-lg mr-6">
                2
              </div>
              <div>
                <p className="text-xl font-semibold text-slate-900 mb-2">
                  The "Detour" Incentive
                </p>
                <p className="text-slate-700">
                  The higher price motivates drivers to modify their planned routes 
                  specifically to transport your vehicle, even if it requires a detour.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-600 text-white rounded-full hidden md:flex items-center justify-center font-bold text-lg mr-6">
                3
              </div>
              <div>
                <p className="text-xl font-semibold text-slate-900 mb-2">
                  Dedicated Team
                </p>
                <p className="text-slate-700">
                  Our dispatchers actively hunt for the closest available truck with 
                  capacity, proactively contacting carriers instead of waiting for 
                  responses.
                </p>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}