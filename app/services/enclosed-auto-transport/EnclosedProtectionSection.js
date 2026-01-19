import React from 'react';
import { Cloud, Lock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function EnclosedProtectionSection() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Enclosed? The Protection Factor
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            The premium price of enclosed shipping buys you three specific things: Weather Protection, Road Security, and Privacy.
          </p>
        </div>

        {/* Three Protection Cards */}
        <div className="space-y-8">
          {/* 1. Weather & Debris Shield */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-600 rounded-xl p-4 flex-shrink-0">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 mb-2">
                  1. Total Weather & Debris Shield
                </div>
                <p className="text-slate-700 leading-relaxed">
                  When a truck drives down the highway at 65 MPH, it kicks up stones, kicks up oil, and drives through rain, snow, and hail. On an open carrier, your car faces that head-on.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 ml-0 md:ml-20 border-l-4 border-blue-600">
              <p className="text-slate-900 font-semibold mb-3">✓ Enclosed Protection:</p>
              <p className="text-slate-700 leading-relaxed">
                Your vehicle arrives in the exact same condition it left your garage. No bug splatters to scrub off, no water spots, and absolutely no rock chips. If you are shipping a car to a Concours d'Elegance or a showroom, this is non-negotiable.
              </p>
            </div>
          </div>

          {/* 2. Privacy and Security */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-600 rounded-xl p-4 flex-shrink-0">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 mb-2">
                  2. Privacy and Security
                </div>
                <p className="text-slate-700 leading-relaxed">
                  High-end vehicles attract attention. A Ferrari on an open trailer invites people to drive too close to take photos, or worse, it attracts potential thieves at rest stops.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 ml-0 md:ml-20 border-l-4 border-purple-600">
              <p className="text-slate-900 font-semibold mb-3">✓ Enclosed Protection:</p>
              <p className="text-slate-700 leading-relaxed">
                Our hard-sided trailers look like standard freight trucks. No one knows what is inside. It is essentially "Incognito Mode" for your vehicle transport.
              </p>
            </div>
          </div>

          {/* 3. Higher Insurance Limits */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-emerald-600 rounded-xl p-4 flex-shrink-0">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 mb-2">
                  3. Higher Insurance Limits ($1 Million Policy)
                </div>
                <p className="text-slate-700 leading-relaxed">
                  This is a detail many competitors glaze over, but it is critical.
                </p>
              </div>
            </div>
            
            <div className="ml-0 md:ml-20 space-y-4">
              <div className="bg-red-100 rounded-xl p-5 border-l-4 border-red-500">
                <p className="text-slate-900 font-semibold mb-2">Standard Open Carrier Insurance:</p>
                <p className="text-slate-700">Typically covers up to $250,000 per load.</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 border-l-4 border-emerald-600">
                <p className="text-slate-900 font-semibold mb-2">✓ Furious Enclosed Carrier Insurance:</p>
                <p className="text-slate-700 leading-relaxed">
                  Our specialized enclosed network carriers typically carry $1,000,000 in cargo insurance. If you are moving a vehicle worth $150k+, you need that higher ceiling of protection. We verify every certificate before dispatch.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="mt-12 bg-slate-900 rounded-2xl p-8 text-center">
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            Premium Protection for Premium Vehicles
          </p>
          <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
            When your vehicle deserves the absolute best protection, enclosed transport delivers peace of mind from pickup to delivery.
          </p>
          <Link href='/get-quote'><button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors duration-300">
            Request Enclosed Transport Quote
          </button></Link>
        </div>
      </div>
    </div>
  );
}