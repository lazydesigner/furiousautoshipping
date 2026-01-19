import React from 'react';
import { Car, FileText, Shield, Package, MapPin, CheckCircle } from 'lucide-react';

export default function AutoShippingProcess() {
  const steps = [
    {
      number: 1,
      title: "Get Your Quote",
      badge: "Authority",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500",
      description: "Provide us with the pickup/delivery locations, vehicle details (make, model, year, modifications), and preferred transport type (Open or Enclosed). We use current market data to provide a competitive and accurate rate."
    },
    {
      number: 2,
      title: "Book Your Shipment",
      badge: "Expertise",
      icon: CheckCircle,
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500",
      description: "Once you accept the quote, a representative will confirm your details and reserve your vehicle on a carrier’s schedule. Your order is then dispatched to our carrier network, with no upfront payment required—you only pay when your vehicle is assigned or delivered, depending on the carrier."
    },
    {
      number: 3,
      title: "Carrier Assignment",
      badge: "Trustworthiness",
      icon: Shield,
      color: "from-emerald-500 to-emerald-600",
      borderColor: "border-emerald-500",
      description: "We match your shipment with a fully vetted, insured carrier that specializes in your route. You receive the carrier's name, contact information, and estimated pickup window. This typically takes 1–5 business days, though priority scheduling can be arranged."
    },
    {
      number: 4,
      title: "Vehicle Pickup",
      badge: "Experience",
      icon: Package,
      color: "from-orange-500 to-orange-600",
      borderColor: "border-orange-500",
      description: "The driver calls ahead to confirm the exact time. You and the driver perform a thorough inspection, noting any existing damage on the Bill of Lading (BOL). You both sign the BOL, and the vehicle is loaded."
    },
    {
      number: 5,
      title: "Transit and Tracking",
      badge: "Transparency",
      icon: MapPin,
      color: "from-cyan-500 to-cyan-600",
      borderColor: "border-cyan-500",
      description: "Your vehicle is en route. Transit times vary based on distance, weather, and traffic (e.g., coast-to-coast is typically 7–14 days). We provide continuous updates and clear communication."
    },
    {
      number: 6,
      title: "Final Delivery & Inspection",
      badge: "Trust",
      icon: Car,
      color: "from-pink-500 to-pink-600",
      borderColor: "border-pink-500",
      description: "The driver contacts you 24 hours prior to arrival. Upon delivery, you and the driver inspect the vehicle again, referencing the BOL. The final payment (typically cash or certified check) is made directly to the driver, and you sign the BOL to confirm safe receipt."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How Auto Shipping Works
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our process is designed for clarity and ease, demonstrating the experience and trustworthiness required for quality vehicle transport.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            
            return (
              <div 
                key={step.number} 
                className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${step.borderColor} hover:shadow-xl transition-shadow`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center text-white shadow-md flex-shrink-0`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-gray-900">{step.number}</span>
                      <span className={`px-3 py-1 bg-gradient-to-r ${step.color} text-white text-xs font-semibold rounded-full`}>
                        {step.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
 
      </div>
    </div>
  );
}