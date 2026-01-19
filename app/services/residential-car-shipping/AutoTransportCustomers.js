import React from 'react';
import Link from 'next/link';
import { Users, Briefcase, Shield, Palmtree } from 'lucide-react';

const CustomerCard = ({ icon: Icon, title, description, gradient }) => (
  <div className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-300 h-full flex flex-col">
    {/* Gradient accent line */}
    <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${gradient}`} />
    
    {/* Icon container */}
    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
    </div>

    {/* Content */}
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>

    {/* Hover effect overlay */}
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`} />
  </div>
);

const AutoTransportCustomers = () => {
  const customerTypes = [
    {
      icon: Users,
      title: "Multi-Car Families",
      description: "Usually, the family drives the SUV with the kids and the dog, while we ship the sedan or the sports car. It keeps the family together on the road without the need for a convoy.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Briefcase,
      title: "Corporate Relocations",
      description: "If you are being transferred for work, time is money. You need to be in the office on Monday, not stuck on Interstate 40. We work with corporate budgets to ensure seamless transfers.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Military Families",
      description: "We are proud to support our troops during PCS (Permanent Change of Station) moves. We understand the strict timelines military families face.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Palmtree,
      title: "Seniors and Snowbirds",
      description: "Driving 1,500 miles is exhausting. We help retirees get their vehicles to their seasonal homes without the physical toll of a long-distance drive.",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
           Who is Residential Car Shipping Best For?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           While anyone can ship a car, our residential services are specifically tailored for
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerTypes.map((customer, index) => (
            <CustomerCard
              key={index}
              icon={customer.icon}
              title={customer.title}
              description={customer.description}
              gradient={customer.gradient}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Not sure if we can help with your situation?
          </p>
          <Link href="tel:1-888-706-8784"><button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">
            Talk to an Expert
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default AutoTransportCustomers;