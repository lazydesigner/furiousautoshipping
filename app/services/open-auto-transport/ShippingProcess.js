import React from 'react';
import { DollarSign, Shield, ClipboardCheck, Truck, Home, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function ShippingProcess() {
  const steps = [
    {
      number: 1,
      title: "The Quote & Booking",
      icon: DollarSign,
      color: "brand",
      description: "You provide your vehicle details and route. We use real-time market data to give you a 'Fair Market Price.'",
      highlight: "We don't lowball you with a fake price just to get your deposit; we give you a price that actually gets your car moved."
    },
    {
      number: 2,
      title: "Dispatch & Carrier Vetting",
      icon: Shield,
      color: "purple",
      description: "This is where our expertise shines. We don't just put your car on any truck. We vet every carrier for:",
      checklist: [
        {
          label: "Insurance",
          detail: "We verify their cargo insurance policy is active and sufficient."
        },
        {
          label: "Ratings",
          detail: "We check their safety rating with the <a class='font-bold' href='https://www.fmcsa.dot.gov/'>FMCSA (Federal Motor Carrier Safety Administration)</a>."
        },
        {
          label: "History",
          detail: "We prefer drivers we have worked with before who have a track record of on-time delivery."
        }
      ]
    },
    {
      number: 3,
      title: "The Inspection (Bill of Lading)",
      icon: ClipboardCheck,
      color: "emerald",
      description: "When the driver arrives, they will perform a detailed inspection of your vehicle with you. You will mark down any pre-existing scratches or dents on the Bill of Lading.",
      highlight: "This is your contract and your insurance protection. Snap a few photos with your phone for peace of mind."
    },
    {
      number: 4,
      title: "Transit & Updates",
      icon: Truck,
      color: "orange",
      description: "Your car hits the road. While the driver is focused on the highway, our support team is available to give you updates on the driver's progress."
    },
    {
      number: 5,
      title: "Door-to-Door Delivery",
      icon: Home,
      color: "rose",
      description: "The driver will get as close to your front door as legally and safely possible.",
      note: "Remember, these trucks are massive; if you live in a tight cul-de-sac, they might ask you to meet them at a nearby grocery store parking lot.",
      highlight: "You do a final inspection, sign the Bill of Lading, and drive away."
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      brand: {
        bg: "bg-brand-100",
        text: "text-brand-600",
        border: "border-brand-200",
        gradient: "from-brand-600 to-brand-700"
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-200",
        gradient: "from-purple-600 to-purple-700"
      },
      emerald: {
        bg: "bg-emerald-100",
        text: "text-emerald-600",
        border: "border-emerald-200",
        gradient: "from-emerald-600 to-emerald-700"
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        border: "border-orange-200",
        gradient: "from-orange-600 to-orange-700"
      },
      rose: {
        bg: "bg-rose-100",
        text: "text-rose-600",
        border: "border-rose-200",
        gradient: "from-rose-600 to-rose-700"
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            The Furious Auto Shipping Process
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We have streamlined standard auto transport to be as stress-free as possible. 
            Here is what happens when you book with us.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color);
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={step.number} className="relative">
                  {/* Step Number Circle - Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-2xl">{step.number}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pr-16' : 'lg:ml-auto lg:pl-16'}`}>
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300">
                      {/* Mobile Step Number */}
                      <div className="lg:hidden flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <span className="text-white font-bold text-xl">{step.number}</span>
                        </div>
                        <div className={`flex-1 h-1 bg-gradient-to-r ${colors.gradient} rounded-full`}></div>
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`${colors.bg} rounded-xl p-3 flex-shrink-0`}>
                          <Icon className={`w-7 h-7 ${colors.text}`} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Checklist (for Step 2) */}
                      {step.checklist && (
                        <div className="space-y-3 mb-4">
                          {step.checklist.map((item, i) => (
                            <div key={i} className={`border-l-4 ${colors.border} bg-slate-50 rounded-r-lg p-4`}>
                              <div className="flex items-start gap-3">
                                <CheckCircle2 className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                                <div>
                                  <div className="font-semibold text-slate-900 mb-1">{item.label}</div>
                                  <div className="text-sm text-slate-600" dangerouslySetInnerHTML={{ __html: item.detail }} />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Note (for Step 5) */}
                      {step.note && (
                        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4 mb-4">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-amber-900">
                              <span className="font-semibold">Note:</span> {step.note}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Highlight */}
                      {step.highlight && (
                        <div className={`bg-gradient-to-r ${colors.gradient} rounded-xl p-4 text-white`}>
                          <p className="font-medium leading-relaxed">
                            {step.highlight}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div> 
      </div>
    </div>
  );
}