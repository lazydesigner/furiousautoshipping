import React from 'react';
import { ArrowDown, Shield, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function LiftGateSection() {
    return (
        <div className="bg-gradient-to-b from-slate-50 to-slate-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                        The "Lift Gate" Advantage: Zero-Angle Loading
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        One of the critical differences in our enclosed fleet is the equipment we use to load your car.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        {/* Problem Statement */}
                        <div className="bg-[#F3F4F6] text-slate-700 border-l-4 border-red-500 rounded-lg p-6">
                            <p className="text-slate-700 leading-relaxed">
                                Standard open carriers use steep ramps. For a sedan, that's fine. But for a Lamborghini Aventador or a Corvette C8 with only inches of ground clearance, a standard ramp is a recipe for disaster—specifically, scraping the front splitter or undercarriage.
                            </p>
                        </div>

                        {/* Solution */}
                        <div className="bg-white rounded-xl p-8 shadow-2xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-brand-100 rounded-full p-3">
                                    <Shield className="w-8 h-8 text-brand-600" />
                                </div>
                                <p className="text-2xl font-bold text-slate-900">
                                    We Utilize Hydraulic Lift Gates
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* How it works */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                                            <ArrowDown className="w-5 h-5 text-brand-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">How it works:</h4>
                                        <p className="text-slate-600">
                                            The lift gate lowers flat to the ground, like an elevator platform.
                                        </p>
                                    </div>
                                </div>

                                {/* The Benefit */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Benefit:</h4>
                                        <p className="text-slate-600">
                                            Your car is driven onto the platform while it is completely level. The hydraulic system then lifts the car vertically to the trailer height, and it is rolled inside.
                                        </p>
                                    </div>
                                </div>

                                {/* The Result */}
                                <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg p-6 text-white">
                                    <h4 className="font-bold text-lg mb-2">✨ The Result:</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                            <span>Zero incline</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                            <span>Zero risk of scraping the bumper</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                            <span>Zero risk of damaging exhaust or oil pan</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-full">
                        <div className="relative min-h-[350px] md:h-full rounded-2xl overflow-hidden shadow-2xl bg-amber-800">
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/images/enclosed-auto-transport.png"
                                    alt="Low-profile exotic car on hydraulic lift gate being loaded into enclosed trailer"
                                    fill
                                    sizes="100vw"

                                    className="object-cover object-right"
                                /></div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <p className="text-white text-sm md:text-base">
                                    Hydraulic lift gate ensures zero-angle loading for low-clearance vehicles
                                </p>
                            </div>
                        </div>

                        {/* Decorative Badge */}
                        <div className="absolute -top-4 right-3 md:-right-4 bg-emerald-500 text-white rounded-full w-24 h-24 flex items-center justify-center shadow-xl transform rotate-12">
                            <div className="text-center">
                                <div className="text-2xl font-bold">0°</div>
                                <div className="text-xs">Angle</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}