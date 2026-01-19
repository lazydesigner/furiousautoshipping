import React from 'react';
import { FileText, Calendar, Truck, ClipboardCheck, Plane, Home, Star } from 'lucide-react';
import Link from 'next/link';

const ProcessStep = ({ number, title, icon: Icon, children, proTip, iconColor, isLast }) => (
    <div className="relative">
        <div className="flex gap-6">
            {/* Timeline */}
            <div className="hidden md:flex flex-col items-center">
                {/* Step Badge */}
                <div className="relative z-10">
                    <div
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
                        style={{ background: `linear-gradient(135deg, ${iconColor}, ${iconColor}dd)` }}
                    >
                        <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white shadow-md">
                        {number}
                    </div>
                </div>
                {/* Connector Line */}
                {!isLast && (
                    <div
                        className="w-1 flex-1 mt-4 min-h-[100px]"
                        style={{
                            background: `linear-gradient(to bottom, ${iconColor}40, transparent)`
                        }}
                    />
                )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-12">
                <div className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
                    {/* Card Header */}
                    <div
                        className="px-6 py-4 border-b border-gray-200 rounded-t-xl"
                        style={{ background: `linear-gradient(to right, ${iconColor}15, ${iconColor}05)` }}
                    >
                        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                    </div>

                    {/* Card Body */}
                    <div className="px-6 py-5">
                        <div className="text-gray-700 leading-relaxed">
                            {children}
                        </div>

                        {/* Pro Tip */}
                        {proTip && (
                            <div className="mt-4 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                                <div className="flex items-start gap-3">
                                    <Star className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" />
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm mb-1">Pro-tip</p>
                                        <p className="text-sm text-gray-700">{proTip}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const SnowbirdShippingProcess = () => {
    const steps = [
        {
            number: 1,
            title: "Request a Seasonal Quote",
            icon: FileText,
            iconColor: "#3B82F6",
            content: "Call us or use our online form. Tell us you are a Snowbird—we will look for specific seasonal lanes to get you the best price."
        },
        {
            number: 2,
            title: "Flexible Pickup Window",
            icon: Calendar,
            iconColor: "#8B5CF6",
            content: "Because trucks can be delayed by weather or traffic, we work with a pickup window (usually 1-3 days). We coordinate this around your flight schedule.",
            proTip: "We recommend having the car picked up a day or two before you fly."
        },
        {
            number: 3,
            title: "Carrier Dispatch",
            icon: Truck,
            iconColor: "#EC4899",
            content: "We assign a trusted carrier from our vetted network who specializes in your specific route."
        },
        {
            number: 4,
            title: "Vehicle Inspection",
            icon: ClipboardCheck,
            iconColor: "#10B981",
            content: "When the driver arrives, you (or a neighbor/relative) will walk around the vehicle with the driver to note its current condition."
        },
        {
            number: 5,
            title: "Transit",
            icon: Plane,
            iconColor: "#F59E0B",
            content: "You fly to your destination. Meanwhile, your car travels safely on a hauler."
        },
        {
            number: 6,
            title: "Delivery",
            icon: Home,
            iconColor: "#EF4444",
            content: "The driver calls you as they near your winter residence. You meet them at your driveway (or the nearest large parking lot if your street is narrow) to accept the vehicle.",
            isLast: true
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span>Seasonal Car Transport</span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        How Snowbird Car Shipping Works
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We have refined our process to be as simple and transparent as possible. We know you have
                        flights to catch and condos to open, so we handle the heavy lifting.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="space-y-2">
                    {steps.map((step) => (
                        <ProcessStep
                            key={step.number}
                            number={step.number}
                            title={step.title}
                            icon={step.icon}
                            iconColor={step.iconColor}
                            proTip={step.proTip}
                            isLast={step.isLast}
                        >
                            <p>{step.content}</p>
                        </ProcessStep>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-12 text-center bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-500">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Ready to Book Your Seasonal Transport?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Get your Snowbird discount quote today
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href='/get-quote'> <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl">
                            Get Snowbird Quote
                        </button></Link>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
                        <span className="text-orange-500">☀️</span>
                        <span>Special seasonal rates available</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SnowbirdShippingProcess;