'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { MapPin, Anchor, Building2, Factory, ChevronDown, ChevronUp } from 'lucide-react';



const LinkPage = () => {
    const [expandedRegion, setExpandedRegion] = useState(null);

    const regions = [
        {
            name: "West Region",
            icon: MapPin,
            color: "blue",
            states: [
                {
                    name: "California",
                    link: "/locations/california",
                    cities: [
                        { name: "Los Angeles", link: "/locations/los-angeles", tag: "Major Port & Luxury Market", icon: Anchor },
                        { name: "San Francisco", link: "/locations/san-francisco", tag: null, icon: MapPin },
                        { name: "San Diego", link: "/locations/san-diego", tag: null, icon: MapPin }
                    ]
                },
                {
                    name: "Arizona",
                    link: "/locations/arizona",
                    cities: [
                        { name: "Phoenix", link: "/locations/phoenix", tag: "Major Auction Hub", icon: Building2 },
                        { name: "Tucson", link: "/locations/tucson", tag: null, icon: MapPin }
                    ]
                },
                {
                    name: "Nevada",
                    link: "/locations/nevada",
                    cities: [
                        { name: "Las Vegas", link: "/locations/las-vegas", tag: "Manheim Nevada", icon: Building2 }
                    ]
                },
                {
                    name: "Washington",
                    link: "/locations/washington",
                    cities: [
                        { name: "Seattle", link: "/locations/seattle", tag: null, icon: MapPin }
                    ]
                }
            ]
        },
        {
            name: "South Region",
            icon: MapPin,
            color: "orange",
            states: [
                {
                    name: "Texas",
                    link: "/locations/texas",
                    cities: [
                        { name: "Dallas", link: "/locations/dallas", tag: "Massive Auction/Dealer Hub", icon: Building2 },
                        { name: "Houston", link: "/locations/houston", tag: "Port & Export", icon: Anchor },
                        { name: "Austin", link: "/locations/austin", tag: null, icon: MapPin },
                        { name: "San Antonio", link: "/locations/san-antonio", tag: null, icon: MapPin }
                    ]
                },
                {
                    name: "Florida",
                    link: "/locations/florida",
                    cities: [
                        { name: "Orlando", link: "/locations/orlando", tag: "Manheim Orlando - Huge Volume", icon: Building2 },
                        { name: "Miami", link: "/locations/miami", tag: null, icon: MapPin },
                        { name: "Tampa", link: "/locations/tampa", tag: null, icon: MapPin },
                        { name: "Jacksonville", link: "/locations/jacksonville", tag: null, icon: MapPin }
                    ]
                },
                {
                    name: "Georgia",
                    link: "/locations/georgia",
                    cities: [
                        { name: "Atlanta", link: "/locations/atlanta", tag: "Manheim Atlanta", icon: Building2 }
                    ]
                }
            ]
        },
        {
            name: "Midwest Region",
            icon: MapPin,
            color: "green",
            states: [
                {
                    name: "Illinois",
                    link: "/locations/illinois",
                    cities: [
                        { name: "Chicago", link: "/locations/chicago", tag: "Central Logistics Hub", icon: Building2 }
                    ]
                },
                {
                    name: "Michigan",
                    link: "/locations/michigan",
                    cities: [
                        { name: "Detroit", link: "/locations/detroit", tag: "OEM & Manufacturer Transport", icon: Factory }
                    ]
                },
                {
                    name: "Ohio",
                    link: "/locations/ohio",
                    cities: [
                        { name: "Columbus", link: "/locations/columbus", tag: null, icon: MapPin }
                    ]
                }
            ]
        },
        {
            name: "Northeast Region",
            icon: MapPin,
            color: "purple",
            states: [
                {
                    name: "New York",
                    link: "/locations/new-york",
                    cities: [
                        { name: "New York City", link: "/locations/new-york-city", tag: null, icon: MapPin }
                    ]
                },
                {
                    name: "New Jersey",
                    link: "/locations/new-jersey",
                    cities: [
                        { name: "Newark", link: "/locations/newark", tag: "Port & Auction Access", icon: Anchor }
                    ]
                },
                {
                    name: "Pennsylvania",
                    link: "/locations/pennsylvania",
                    cities: [
                        { name: "Philadelphia", link: "/locations/philadelphia", tag: null, icon: MapPin },
                        { name: "Manheim", link: "/locations/manheim", tag: "Home of Manheim Auto Auction", icon: Building2 }
                    ]
                }
            ]
        }
    ];

    const colorClasses = {
        blue: {
            bg: "bg-blue-50",
            border: "border-blue-300",
            text: "text-blue-700",
            iconBg: "bg-blue-600",
            hover: "hover:bg-blue-100 hover:border-blue-400"
        },
        orange: {
            bg: "bg-orange-50",
            border: "border-orange-300",
            text: "text-orange-700",
            iconBg: "bg-orange-600",
            hover: "hover:bg-orange-100 hover:border-orange-400"
        },
        green: {
            bg: "bg-green-50",
            border: "border-green-300",
            text: "text-green-700",
            iconBg: "bg-green-600",
            hover: "hover:bg-green-100 hover:border-green-400"
        },
        purple: {
            bg: "bg-purple-50",
            border: "border-purple-300",
            text: "text-purple-700",
            iconBg: "bg-purple-600",
            hover: "hover:bg-purple-100 hover:border-purple-400"
        }
    };
    return (
        <>
            <div className="min-h-auto bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
                            Major Logistics Hubs
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Specialized car shipping services to major auction centers, ports, and dealer hubs across the United States
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {regions.map((region, regionIndex) => {
                            const isExpanded = expandedRegion === regionIndex;
                            const colors = colorClasses[region.color];

                            return (
                                <div key={regionIndex} className="bg-white rounded-xl shadow-xl overflow-hidden">
                                    <button
                                        onClick={() => setExpandedRegion(isExpanded ? null : regionIndex)}
                                        className={`w-full px-6 py-5 flex items-center justify-between ${colors.hover} transition-colors duration-200`}
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center`}>
                                                <region.icon className="w-6 h-6 text-slate-800" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900">
                                                {region.name}
                                            </h3>
                                        </div>
                                        {isExpanded ? (
                                            <ChevronUp className="w-6 h-6 text-slate-600" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-slate-600" />
                                        )}
                                    </button>

                                    {isExpanded && (
                                        <div className="p-6 bg-slate-50">
                                            {region.states.map((state, stateIndex) => (
                                                <div key={stateIndex} className="mb-6 last:mb-0">
                                                    <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                                                        <span className={`w-2 h-2 ${colors.iconBg} rounded-full mr-3`}></span>
                                                        Car Shipping to {state.name}
                                                    </h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-5">
                                                        {state.cities.map((city, cityIndex) => {
                                                            const CityIcon = city.icon;
                                                            return (
                                                                <a
                                                                    key={cityIndex}
                                                                    href="#"
                                                                    className={`block ${colors.bg} ${colors.border} border-2 rounded-lg p-4 ${colors.hover} transition-all duration-200 hover:shadow-md group`}
                                                                >
                                                                    <div className="flex items-start space-x-3">
                                                                        <CityIcon className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                                                                        <div className="flex-1 min-w-0">
                                                                            <div className={`font-semibold ${colors.text} group-hover:underline`}>
                                                                                {city.name}
                                                                            </div>
                                                                            {city.tag && (
                                                                                <div className="text-xs text-slate-600 mt-1 flex items-center">
                                                                                    <span className="inline-block w-1 h-1 bg-slate-400 rounded-full mr-2"></span>
                                                                                    {city.tag}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LinkPage;

