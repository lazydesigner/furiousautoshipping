import { FileText, Calendar, ClipboardCheck, MapPin, Truck, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function TransportProcessSection({ fromStateData2, toStateData2 }) {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Get Your Free Quote",
      description: `Start by filling out our easy online quote form. Provide basic information about your vehicle, the pickup location in ${fromStateData2}, and the delivery location in ${toStateData2}. Our team will quickly provide a competitive and transparent quote with no hidden fees.`,
      color: "from-brand-500 to-brand-600"
    },
    {
      icon: Calendar,
      number: "02",
      title: "Schedule Your Shipment",
      description: "Once you accept the quote, a dedicated transport coordinator will work with you to schedule the pickup. We strive to provide flexible pickup windows that align with your schedule.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: ClipboardCheck,
      number: "03",
      title: "Vehicle Preparation",
      description: "Before pickup, we recommend a few simple steps to prepare your vehicle. We provide a detailed checklist to ensure a smooth transition, including checking fluid levels, removing personal items, and leaving a quarter tank of gas.",
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: MapPin,
      number: "04",
      title: "The Pickup",
      description: `A professional, fully insured driver will arrive at your designated location in ${fromStateData2}. Together, you will conduct a thorough inspection of the vehicle and document its current condition on a Bill of Lading. This document is your record and protection.`,
      color: "from-violet-500 to-violet-600"
    },
    {
      icon: Truck,
      number: "05",
      title: "Secure Transit",
      description: `Your vehicle is loaded onto the carrier and begins its journey to ${toStateData2}. We provide real-time tracking and updates, allowing you to monitor your vehicle's progress and stay informed throughout the transport.`,
      color: "from-fuchsia-500 to-fuchsia-600"
    },
    {
      icon: CheckCircle,
      number: "06",
      title: "The Delivery",
      description: `The driver will contact you as they approach the delivery location in ${toStateData2}. At the time of delivery, you will perform a final inspection of your vehicle and sign the Bill of Lading to confirm its condition upon arrival.`,
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="mt-3">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Seamless Auto Transport Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From {fromStateData2} to {toStateData2}
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-brand-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <p className="text-center text-lg text-gray-700 mb-10 max-w-4xl mx-auto">
          We have refined our process to be as simple and transparent as possible. Here's a step-by-step overview of how we handle your shipment:
        </p>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-200 via-accent-200 to-pink-200 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                      <div className={`block md:flex items-start gap-4 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                        <div className={`lg:hidden w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`text-3xl hidden md:block font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                              {step.number}
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Icon - Desktop only */}
                  <div className="hidden lg:flex relative z-10 flex-shrink-0">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="bg-gray-900 text-white rounded-lg mt-10 p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white mt-0">
            Ready to Ship Your Vehicle from {fromStateData2} to {toStateData2}?
          </h3>
          <p className="text-gray-300 mb-6">
            Get your free quote today and experience professional auto transport service
            with competitive rates and excellent customer support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="btn-secondary btn-lg no-underline"
            >
              Get Free Quote
            </Link>
            <Link
              href="/contact"
              className="btn-outline no-underline btn-lg border-white hover:bg-white hover:text-gray-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}