import React from 'react';
import { Shield, Clock, DollarSign, Car } from 'lucide-react';
import Link from 'next/link';

const AdvantageCard = ({ icon: Icon, number, title, description, accentColor }) => (
  <div className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4" style={{ borderLeftColor: accentColor }}>
    <div className="flex items-start gap-4">
      {/* Number Badge */}
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: accentColor }}>
            {number}
          </div>
          <div className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center" style={{ color: accentColor }}>
            <Icon className="w-5 h-5" strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const MilitaryShippingAdvantage = () => {
  const advantages = [
    {
      icon: Shield,
      number: 1,
      title: "Safety and Fatigue",
      description: "Driving from Fort Bragg, NC to Fort Hood, TX is a 1,200+ mile journey. Doing that solo or with a caravan of family cars is exhausting and risky.",
      accentColor: "#DC2626"
    },
    {
      icon: Clock,
      number: 2,
      title: "Time Management",
      description: "Your leave time is precious. Do you want to spend it staring at asphalt for three days, or spending time with family before you report for duty?",
      accentColor: "#2563EB"
    },
    {
      icon: DollarSign,
      number: 3,
      title: "Cost Efficiency",
      description: "When you factor in gas, hotels, food, and the wear and tear on your vehicle, driving is often more expensive than shipping—especially when utilized as part of a DITY move.",
      accentColor: "#059669"
    },
    {
      icon: Car,
      number: 4,
      title: "Multi-Vehicle Families",
      description: "Most military families have two cars. Driving two cars cross-country is a logistical nightmare. Shipping one (or both) solves the problem instantly.",
      accentColor: "#7C3AED"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-brand-50 to-slate-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
            <Shield className="w-4 h-4" />
            <span>Military PCS Vehicle Transport</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Strategic Advantage of Shipping
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Why do so many seasoned service members choose Military Car Shipping (PCS Vehicle Transport) over driving?
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              icon={advantage.icon}
              number={advantage.number}
              title={advantage.title}
              description={advantage.description}
              accentColor={advantage.accentColor}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-brand-600 via-brand-700 to-brand-800 rounded-2xl p-8 md:p-10 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to Ship Your Vehicle?</h3>
              <p className="text-brand-100">Serving our military families with pride and precision</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href='/get-quote'><button className="bg-white text-brand-700 font-semibold px-6 py-3 rounded-lg hover:bg-brand-50 transition-colors shadow-lg whitespace-nowrap">
                Get PCS Quote
              </button></Link> 
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-red-600" />
            <span>Trusted by thousands of military families nationwide</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MilitaryShippingAdvantage;