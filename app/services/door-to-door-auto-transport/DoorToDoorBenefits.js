import React from 'react';
import { Snowflake, ShoppingCart, Home, Car } from 'lucide-react';
import Link from 'next/link';

export default function DoorToDoorBenefits() {
  const benefits = [
    {
      icon: Snowflake,
      title: "Snowbirds",
      description: "Heading south for the winter? We pick up from your northern driveway and deliver to your Florida condo. No airport rentals needed.",
      color: "from-cyan-400 to-blue-500",
      bgAccent: "bg-cyan-50",
      borderColor: "border-cyan-200",
      iconBg: "bg-gradient-to-br from-cyan-400 to-blue-500",
      link: "/services/snowbird-auto-transport"
    },
    {
      icon: ShoppingCart,
      title: "Online Car Buyers",
      description: "Bought a car on eBay or Bring A Trailer? We pick it up from the seller's driveway and bring it to yours.",
      color: "from-emerald-400 to-teal-500",
      bgAccent: "bg-emerald-50",
      borderColor: "border-emerald-200",
      iconBg: "bg-gradient-to-br from-emerald-400 to-teal-500",
      link: "/services/dealer-auto-transport"
    },
    {
      icon: Home,
      title: "Families Relocating",
      description: "Moving houses is stressful enough. Let us handle the car so you can focus on the moving van and the kids.",
      color: "from-orange-400 to-red-500",
      bgAccent: "bg-orange-50",
      borderColor: "border-orange-200",
      iconBg: "bg-gradient-to-br from-orange-400 to-red-500",
      link: "/services/residential-car-shipping"
    },
    {
      icon: Car,
      title: "Classic Car Collectors",
      description: "We minimize the time your vintage beauty spends on the road or in storage lots.",
      color: "from-purple-400 to-pink-500",
      bgAccent: "bg-purple-50",
      borderColor: "border-purple-200",
      iconBg: "bg-gradient-to-br from-purple-400 to-pink-500",
      link: "/services/enclosed-auto-transport"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
            Who is Door-to-Door Best For?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Our service is perfect for a variety of situations. Find out which one fits you best.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <a
                key={index}
                href={benefit.link}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${benefit.borderColor} hover:scale-105 cursor-pointer`}
              >
                {/* Decorative Background Pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${benefit.bgAccent} rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
                
                {/* Content Container */}
                <div className="relative p-6 md:p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 md:w-20 md:h-20 ${benefit.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 transition-all duration-300">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Arrow Indicator */}
                  <div className="mt-6 flex items-center text-sm font-semibold text-slate-400 group-hover:text-slate-600 transition-colors duration-300">
                    <span>Learn More</span>
                    <svg 
                      className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Hover Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
              </a>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-800 to-brand-600 rounded-2xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Experience the Relief of Door-to-Door Delivery
            </h3>
            <p className="text-slate-200 text-lg mb-6 max-w-2xl mx-auto">
              Skip the terminals. Skip the stress. Let us bring your vehicle home.
            </p>
            <Link href='/get-quote'><button className="bg-white text-slate-800 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Your Door-to-Door Quote
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}