import React from 'react';
import { DollarSign, Mountain, Clock } from 'lucide-react';

export default function TerminalShippingUsers() {
  const users = [
    {
      number: 1,
      icon: DollarSign,
      title: "The Budget Hunter",
      description: "If your primary goal is to get the absolute lowest price, this is it. You can save $150 to $300 compared to door-to-door shipping on long routes.",
      color: "from-green-400 to-emerald-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      number: 2,
      icon: Mountain,
      title: "The Remote Dweller",
      description: "Do you live 50 miles down a dirt road in the mountains? Big 18-wheelers cannot get to you, and \"Door-to-Door\" drivers will charge a fortune for the detour. Driving your car to a terminal in the nearest city is often the only viable option.",
      color: "from-blue-400 to-indigo-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      number: 3,
      icon: Clock,
      title: "The Busy Professional (Flexible Timing)",
      description: "With Door-to-Door, you have to wait for the driver. \"Be home between 2 PM and 6 PM.\" With Terminal shipping, you set the schedule. You can drop the car off at the terminal on your lunch break or on a Saturday morning. There is no waiting around for a truck.",
      color: "from-purple-400 to-pink-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Who Should Choose Terminal Shipping?
          </h2>
          <div className="bg-amber-50   p-6 rounded-r-xl max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-slate-700">
              Terminal shipping isn't for everyone. It requires effort on your part. However, it is the perfect solution for:
            </p>
          </div>
        </div>

        {/* Users List */}
        <div className="space-y-8">
          {users.map((user, index) => {
            const Icon = user.icon;
            return (
              <div
                key={user.number}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${user.borderColor} group`}
              >  

                <div className="relative p-8 md:p-10">
                  {/* Icon */}
                  <div className="mb-6 flex items-center gap-4">
                    <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${user.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <p className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                    {user.title}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    {user.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className={`h-2 bg-gradient-to-r ${user.color}`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 md:p-10 shadow-2xl text-center">
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            Does This Sound Like You?
          </p>
          <p className="text-slate-200 text-lg mb-6 max-w-2xl mx-auto">
            Terminal shipping could be your perfect solution. Get a quote today and see how much you can save.
          </p>
          <button className="bg-white text-slate-800 font-semibold px-8 py-3 rounded-full hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Terminal Shipping Quote
          </button>
        </div>
      </div>
    </div>
  );
}