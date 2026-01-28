import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import CommonHero from '@/components/CommonHero'
import FAQ from '@/components/FAQ';
import CommonCTA from '@/components/CommonCTA';
import { Truck, Clock, Shield, MapPin, DollarSign, TrendingUp, ExternalLink, Users, Sun, Droplet, Wind, CheckCircle, AlertCircle, FileText, CreditCard, CheckSquare } from 'lucide-react';
import { US_STATES } from '@/lib/utils'
import Script from "next/script";

export const metadata = {
    title: 'Florida Auto Transport Services | Fast & Insured',
    description: 'Need reliable Florida Auto Transport? We provide fully insured, door-to-door car shipping to and from Florida. Snowbirds & Military welcome. Get a free quote!',
    keywords: 'dealer auto transport, seasonal car shipping, winter migration, dealer vehicle transport, seasonal auto shipping',

    alternates: {
        canonical: '/locations/florida',
    },
}

const routes = [
    {
        from: "Miami, FL",
        to: "New York, NY",
        distance: "1,280 miles",
        price: "$750 - $950",
        transit: "3-5 Days"
    },
    {
        from: "Orlando, FL",
        to: "Los Angeles, CA",
        distance: "2,500 miles",
        price: "$1,300 - $1,600",
        transit: "7-9 Days"
    },
    {
        from: "Tampa, FL",
        to: "Chicago, IL",
        distance: "1,170 miles",
        price: "$700 - $900",
        transit: "3-5 Days"
    },
    {
        from: "Jacksonville, FL",
        to: "Dallas, TX",
        distance: "950 miles",
        price: "$650 - $850",
        transit: "2-4 Days"
    }
];

const cities = [
    { name: "Miami", color: "bg-brand-500" },
    { name: "Tampa", color: "bg-purple-500" },
    { name: "Orlando", color: "bg-pink-500" },
    { name: "Jacksonville", color: "bg-green-500" },
    { name: "St. Petersburg", color: "bg-cyan-500" },
    { name: "Hialeah", color: "bg-orange-500" },
    { name: "Tallahassee", color: "bg-red-500" },
    { name: "Port St. Lucie", color: "bg-teal-500" },
    { name: "Cape Coral", color: "bg-indigo-500" },
    { name: "Fort Lauderdale", color: "bg-violet-500" },
    { name: "Pembroke Pines", color: "bg-fuchsia-500" },
    { name: "Hollywood", color: "bg-rose-500" },
    { name: "Miramar", color: "bg-amber-500" },
    { name: "Gainesville", color: "bg-lime-500" },
    { name: "Coral Springs", color: "bg-emerald-500" },
    { name: "Clearwater", color: "bg-sky-500" },
    { name: "Lehigh Acres", color: "bg-yellow-500" },
    { name: "Brandon", color: "bg-brand-600" },
    { name: "Palm Bay", color: "bg-purple-600" },
    { name: "West Palm Beach", color: "bg-pink-600" }
];

const regions = [
    {
        name: "Northeast",
        states: [
            { name: "New York Auto Transport", link: "/locations/new-york" },
            { name: "New Jersey Auto Transport", link: "/locations/new-jersey" },
            { name: "Massachusetts Auto Transport", link: "/locations/massachusetts" },
            { name: "Pennsylvania Auto Transport", link: "/locations/pennsylvania" },
            { name: "Connecticut Auto Transport", link: "/locations/connecticut" }
        ]
    },
    {
        name: "Midwest",
        states: [
            { name: "Illinois Auto Transport", link: "/locations/illinois" },
            { name: "Ohio Auto Transport", link: "/locations/ohio" },
            { name: "Michigan Auto Transport", link: "/locations/michigan" },
            { name: "Missouri Auto Transport", link: "/locations/missouri" },
            { name: "Indiana Auto Transport", link: "/locations/indiana" }
        ]
    },
    {
        name: "South",
        states: [
            { name: "Texas Auto Transport", link: "/locations/texas" },
            { name: "Georgia Auto Transport", link: "/locations/georgia" },
            { name: "North Carolina Auto Transport", link: "/locations/north-carolina" },
            { name: "Tennessee Auto Transport", link: "/locations/tennessee" },
            { name: "Alabama Auto Transport", link: "/locations/alabama" }
        ]
    },
    {
        name: "West",
        states: [
            { name: "California Auto Transport", link: "/locations/california" },
            { name: "Arizona Auto Transport", link: "/locations/arizona" },
            { name: "Nevada Auto Transport", link: "/locations/nevada" },
            { name: "Washington Auto Transport", link: "/locations/washington" },
            { name: "Colorado Auto Transport", link: "/locations/colorado" }
        ]
    }
];

const resources = [
    {
        icon: FileText,
        title: "Florida Highway Safety and Motor Vehicles (FLHSMV)",
        description: "Visit their site to find the nearest service center for registering your vehicle and obtaining a Florida driver's license. You generally have 10 days to register your car after starting work or enrolling children in school.",
        color: "brand",
        link: "#"
    },
    {
        icon: CreditCard,
        title: "SunPass",
        description: "Florida has an extensive toll road network, particularly around Orlando and Miami. Purchasing a SunPass transponder immediately upon arrival will save you money and time compared to \"Pay-by-Plate\" billing.",
        color: "orange",
        link: "#"
    },
    {
        icon: CheckSquare,
        title: "Voter Registration",
        description: "You can register to vote when you get your driver's license or online through the Florida Department of State.",
        color: "green",
        link: "#"
    }
];

const colorClasses = {
    brand: {
        bg: "bg-brand-50",
        border: "border-brand-200",
        icon: "bg-brand-500",
        text: "text-brand-600",
        hover: "hover:border-brand-400"
    },
    orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        icon: "bg-orange-500",
        text: "text-orange-600",
        hover: "hover:border-orange-400"
    },
    green: {
        bg: "bg-green-50",
        border: "border-green-200",
        icon: "bg-green-500",
        text: "text-green-600",
        hover: "hover:border-green-400"
    }
};

export default function page() {
    const faqs = [
        {
            question: "How much does it cost to ship car from Florida?",
            answer: "The cost to ship car from Florida varies based on distance, vehicle size, and season. For example, a standard sedan shipped from Orlando to New York during the off-peak season might cost around $750. However, during \"Snowbird season\" (spring), prices for outbound shipments increase due to high demand. Contact us for a real-time, data-backed quote."
        }, {
            question: "How does Florida weather affect my pickup date?",
            answer: "During summer afternoons, severe thunderstorms are a daily occurrence. While these rarely cause multi-day delays, they can shift a pickup window by a few hours. During hurricane season, we prioritize safety; if a storm is named, we may pause routes in the affected cone. We communicate proactively if weather impacts your schedule."
        }, {
            question: "Do you ship to rural Florida towns?",
            answer: "Yes. While most carriers prefer the major interstates, we service the entire state. If you are in a remote area of the Panhandle or the central agricultural belt, we can arrange pickup. In some extremely remote cases, meeting a driver at a nearby major highway junction or big-box store parking lot can speed up the process and lower your cost."
        }
    ]

    const script = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://furiousautoshipping.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Locations",
                        "item": "https://furiousautoshipping.com/locations"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Florida Auto Transport",
                        "item": "https://furiousautoshipping.com/locations/florida"
                    }
                ]
            },
            {
                "@type": "Service",
                "name": "Florida Auto Transport Services",
                "serviceType": "Vehicle Shipping",
                "provider": {
                    "@type": "Organization",
                    "name": "Furious Auto Shipping",
                    "url": "https://furiousautoshipping.com",
                    "logo": "https://furiousautoshipping.com/logo.png",
                    "telephone": "+1-800-555-0199"
                },
                "areaServed": {
                    "@type": "State",
                    "name": "Florida",
                    "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "US",
                        "addressRegion": "Florida"
                    }
                },
                "description": "Reliable door-to-door auto transport services to and from Florida. Fully insured carriers serving Miami, Orlando, and all Florida counties.",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Florida Shipping Options",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Open Carrier Shipping in Florida"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Enclosed Auto Transport in Florida"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Military PCS Vehicle Shipping to Florida"
                            }
                        }
                    ]
                }
            }
        ]
    }



    return (
        <>
            <Script
                id="schema-BreadcrumbList"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(script) }}
            />
            <CommonHero
                h1="Florida Auto Transport Services: Reliable Door-to-Door Shipping Along I-95, I-75 & Beyond"
                subheading="Skip the stress of I-95. We provide secure, fully insured door-to-door logistics for your vehicle, so you can fly to your destination with peace of mind."
                img="/images/states/Florida-Auto-Transport-Services.png"
            />


            <section className="section">
                <div className="container">
                    <p className='my-2'>Moving vehicles in and out of the Sunshine State requires more than just a truck and a trailer; it demands a logistics partner who understands the unique flow of the I-95 corridor and the seasonal demands of the "Snowbird" migration. Whether you are relocating for a job in Miami, moving military personnel to Pensacola, or heading north for the summer, <b>Furious Auto Shipping</b> provides the expertise you need. Securing reliable <Link className='font-bold text-brand-500' href=''>Florida Auto Transport</Link> is the first step toward a stress-free move, and we are here to handle the heavy lifting while you focus on settling in.</p>
                    <p className='my-2'>Florida is a logistics powerhouse, but it presents unique challenges, from the dense traffic of the I-4 corridor to the distinct humidity that affects vehicle storage. We don't just book your shipment; we plan the route to avoid hurricane-season delays and utilize our network of FMCSA-licensed carriers to ensure your vehicle arrives on time. Trust <Link className='font-bold text-brand-500' href='/'>Furious Auto Shipping</Link> to navigate the complexities of vehicle relocation so you don't have to.</p>

                    <div className="py-6 text-center">
                        <h2 className="text-3xl font-bold text-slate-800 mb-2">Florida Logistics Snapshot</h2>
                        <p className="text-slate-600">At a glance, here is what you can expect when shipping with us in this region</p>
                    </div>

                    <div className="">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Major Hubs */}
                            <div className="bg-gradient-to-br from-brand-50 to-white p-6 rounded-lg border border-brand-100 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-100 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-brand-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Major Hubs Served</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-center text-gray-700">
                                                <span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>
                                                Miami-Fort Lauderdale
                                            </li>
                                            <li className="flex items-center text-gray-700">
                                                <span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>
                                                Tampa-St. Petersburg
                                            </li>
                                            <li className="flex items-center text-gray-700">
                                                <span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>
                                                Orlando
                                            </li>
                                            <li className="flex items-center text-gray-700">
                                                <span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>
                                                Jacksonville
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Pickup Speed */}
                            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg border border-green-100 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-3 rounded-lg">
                                        <Clock className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Average Pickup Speed</h3>
                                        <div className="text-gray-700">
                                            <p className="text-2xl font-bold text-green-600 mb-1">24-72 Hours</p>
                                            <p className="text-sm text-gray-600">for standard routes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Signal */}
                            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg border border-amber-100 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="bg-amber-100 p-3 rounded-lg">
                                        <Shield className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Trust Signal</h3>
                                        <div className="space-y-2">
                                            <div className="flex items-center text-gray-700">
                                                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                Fully Insured
                                            </div>
                                            <div className="flex items-center text-gray-700">
                                                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                FMCSA Licensed Carriers
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Primary Routes */}
                            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border border-purple-100 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-100 p-3 rounded-lg">
                                        <Truck className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Primary Routes</h3>
                                        <ul className="space-y-2">
                                            <li className="text-gray-700">
                                                <span className="font-semibold text-purple-600">I-95</span>
                                                <span className="text-sm text-gray-600 ml-2">(East Coast)</span>
                                            </li>
                                            <li className="text-gray-700">
                                                <span className="font-semibold text-purple-600">I-75</span>
                                                <span className="text-sm text-gray-600 ml-2">(Gulf Coast/Midwest)</span>
                                            </li>
                                            <li className="text-gray-700">
                                                <span className="font-semibold text-purple-600">I-10</span>
                                                <span className="text-sm text-gray-600 ml-2">(Cross-Country West)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="py-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-brand-500 bg-opacity-20 p-3 rounded-lg">
                                <MapPin className="w-8 h-8 text-slate-700" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-600 mb-2">
                                    Popular Car Shipping Routes from Florida
                                </h2>
                                <p className="text-slate-600 text-sm md:text-base">
                                    Florida is a primary origin point for vehicle shipments, particularly during the spring when seasonal residents return north. Below are the most frequent routes we service, with estimated pricing and transit times based on current market data.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gradient-to-r from-slate-100 to-slate-50">
                                        <th className="text-left p-4 font-semibold text-gray-700 border-b-2 border-brand-600">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4 text-brand-600" />
                                                <span className="text-sm md:text-base">Route Pair</span>
                                            </div>
                                        </th>
                                        <th className="text-left p-4 font-semibold text-gray-700 border-b-2 border-brand-600">
                                            <div className="flex items-center gap-2">
                                                <TrendingUp className="w-4 h-4 text-brand-600" />
                                                <span className="text-sm md:text-base">Distance</span>
                                            </div>
                                        </th>
                                        <th className="text-left p-4 font-semibold text-gray-700 border-b-2 border-brand-600">
                                            <div className="flex items-center gap-2">
                                                <DollarSign className="w-4 h-4 text-brand-600" />
                                                <span className="text-sm md:text-base">Est. Open Price</span>
                                            </div>
                                        </th>
                                        <th className="text-left p-4 font-semibold text-gray-700 border-b-2 border-brand-600">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-brand-600" />
                                                <span className="text-sm md:text-base">Transit Time</span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {routes.map((route, index) => (
                                        <tr
                                            key={index}
                                            className="border-b border-brand-200 hover:bg-brand-50 transition-colors"
                                        >
                                            <td className="p-4">
                                                <div className="flex flex-col">
                                                    <span className="font-semibold text-gray-900 text-sm md:text-base">{route.from}</span>
                                                    <span className="text-gray-500 text-xs md:text-sm flex items-center mt-1">
                                                        <span className="mr-1">→</span>
                                                        {route.to}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <span className="text-gray-700 text-sm md:text-base">{route.distance}</span>
                                            </td>
                                            <td className="p-4">
                                                <span className="font-semibold text-green-600 text-sm md:text-base">{route.price}</span>
                                            </td>
                                            <td className="p-4">
                                                <span className="inline-block bg-brand-100 text-brand-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                                                    {route.transit}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Note Section */}
                        <div className="my-6 bg-amber-50 border-l-4 border-amber-500 p-4 md:p-6 rounded-r-lg">
                            <div className="flex items-start gap-3">
                                <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                                    <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-amber-900 mb-1 text-sm md:text-base">Important Pricing Information</h4>
                                    <p className="text-amber-800 text-xs md:text-sm">
                                        Prices fluctuate based on <span className="font-semibold">fuel costs</span>, <span className="font-semibold">seasonal demand</span> (especially Snowbird season), and <span className="font-semibold">vehicle size</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="heading-2 mb-6">We Ship from Florida to All 50 States</h2>
                    <p className='my-2'>While local moves are common, <Link className='font-bold text-brand-500' href='/'>Furious Auto Shipping</Link> specializes in long-haul logistics. We ship from Florida to every corner of the United States. Our network isn't limited to the East Coast; we have established lanes running deep into the Pacific Northwest and the rural Midwest.</p>
                    <p className='my-2'>When you need to <Link className='font-bold text-brand-500' href=''>ship car to Florida</Link> or move one out, we utilize a hub-and-spoke model that connects local Florida terminals with national carriers. This ensures that whether you are in a major metro area or a more remote part of the Panhandle, we can dispatch a carrier to your door.</p>

                    <div className="text-center py-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-2">
                            Our National Coverage Includes
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="my-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {regions.map((region, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-brand-300 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                >
                                    {/* Region Header */}
                                    <div className="bg-gray-700 p-4 text-center">
                                        <div className="flex justify-center mb-2">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{region.name}</h3>
                                    </div>

                                    {/* States List */}
                                    <div className="p-5 bg-gray-50">
                                        <ul className="space-y-2">
                                            {region.states.map((state, stateIndex) => (
                                                <li key={stateIndex}>
                                                    <a
                                                        href={state.link}
                                                        className="flex items-center justify-between text-gray-700 text-sm hover:text-gray-900 hover:bg-gray-100 p-2 rounded transition-colors group"
                                                    >
                                                        <div className="flex items-center">
                                                            <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></span>
                                                            <span className="group-hover:font-medium">{state.name}</span>
                                                        </div>
                                                        <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <CommonCTA />


                    <h2 className="heading-2 mb-6 mt-5">Auto Transport Solutions Tailored for Florida</h2>
                    <p className='my-2'>Florida’s environment is unlike anywhere else in the continental US. The combination of intense UV exposure, salt air in coastal regions, and sudden torrential rains dictates how we handle your vehicle. We don't offer a one-size-fits-all solution; we offer <Link className='font-bold text-brand-500' href=''>auto transport companies Florida</Link> residents can rely on for specific protection.</p>

                    {/* Open Transport Section */}
                    <div className="overflow-hidden">
                        <div className="py-6 md:py-8">
                            <div className="flex items-center gap-4">
                                <div className="bg-gray-700 p-4 rounded-lg">
                                    <Truck className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-700 mb-2">
                                        Open Transport in Florida
                                    </h3>
                                    <p className="text-gray-600">
                                        For daily drivers, sedans, and SUVs, open trailer transport is the most cost-effective and common method.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-brand-700">
                                    <div className="flex items-center gap-2 mb-4">
                                        <CheckCircle className="w-5 h-5 text-gray-700" />
                                        <h3 className="text-lg font-bold text-gray-900">Why it works here</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Florida's highway system is vast and generally flat. Open carriers can move efficiently along I-75 and I-95.
                                    </p>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-brand-700">
                                    <div className="flex items-center gap-2 mb-4">
                                        <AlertCircle className="w-5 h-5 text-gray-700" />
                                        <h3 className="text-lg font-bold text-gray-900">The Reality</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Your car will be exposed to the elements. In Florida, this means potential rain and sun. However, for a standard vehicle relocation, the cost savings of open transport usually outweigh the need for aesthetic perfection upon arrival. It is the standard for <span className="font-semibold">car shipping Florida residents use for college moves or corporate relocations</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enclosed Transport Section */}
                    <div className="overflow-hidden">
                        <div className="py-6 md:py-8">
                            <div className="flex items-center gap-4">
                                <div className="bg-gray-700 p-4 rounded-lg">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-700 mb-2">
                                        Enclosed Transport for Florida Climate
                                    </h3>
                                    <p className="text-gray-600">
                                        If you own a luxury vehicle, a classic car, or a high-end sports car, the Florida climate poses a genuine threat.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pb-5 space-y-6">
                            <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-xl border-l-4 border-brand-700">
                                <div className="flex items-start gap-4">
                                    <div className="bg-gray-100 p-3 rounded-lg flex-shrink-0">
                                        <Droplet className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Salt Air & Humidity</h3>
                                        <p className="text-gray-700">
                                            If you are shipping to or from coastal cities like <span className="font-semibold">Miami, West Palm Beach, or Key West</span>, salt air can accelerate corrosion. Enclosed transport completely seals your vehicle off from the environment.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-xl border-l-4 border-brand-700">
                                <div className="flex items-start gap-4">
                                    <div className="bg-gray-100 p-3 rounded-lg flex-shrink-0">
                                        <Sun className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">UV Protection</h3>
                                        <p className="text-gray-700">
                                            The "Sunshine State" lives up to its name. Prolonged exposure on a carrier during a cross-country trip can damage interior leather and fade paint. Enclosed carriers provide hard-sided protection against the sun and road debris.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Specialty Services Section */}
                    <div className="overflow-hidden ">
                        <div className="py-6 md:py-8">
                            <div className="flex items-center gap-4">
                                <div className="bg-gray-700 p-4 rounded-lg">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-700 mb-2">
                                        Specialty Services: Snowbirds & Military
                                    </h3>
                                    <p className="text-gray-600">
                                        Florida is the capital of seasonal migration and a major hub for military personnel.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pb-5">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white border-2 border-gray-300 rounded-xl overflow-hidden">
                                    <div className="bg-gray-700 text-white p-4">
                                        <div className="flex items-center gap-3">
                                            <Wind className="w-6 h-6" />
                                            <h3 className="text-xl font-bold">Snowbird Services</h3>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-700 mb-4">
                                            We specialize in the seasonal "Snowbird" routes. Every spring, thousands of retirees move from Florida back to the Northeast and Midwest.
                                        </p>
                                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-brand-600">
                                            <p className="text-sm text-gray-700">
                                                <span className="font-semibold">We pre-book these slots</span> to ensure capacity during these high-demand months.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-2 border-gray-300 rounded-xl overflow-hidden">
                                    <div className="bg-gray-700 text-white p-4">
                                        <div className="flex items-center gap-3">
                                            <MapPin className="w-6 h-6" />
                                            <h3 className="text-xl font-bold">Military PCS</h3>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-700 mb-4">
                                            With bases like <span className="font-semibold">NAS Pensacola, Eglin AFB, and MacDill AFB</span>, we handle frequent Permanent Change of Station (PCS) orders.
                                        </p>
                                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-brand-600">
                                            <p className="text-sm text-gray-700">
                                                We understand the <span className="font-semibold">strict timelines and documentation</span> required for military vehicle relocation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="heading-2 mb-6">Serving All Major Florida Cities</h2>
                    <p className='my-2'>We provide <Link className='font-bold text-brand-500' href='/services/door-to-door-auto-transport'>door-to-door auto transport Florida</Link> residents trust across the entire peninsula and panhandle. We don't just serve the big cities; we access the suburbs and surrounding counties as well.</p>

                    <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                        Major Service Areas
                    </p>

                    <div className="flex flex-wrap gap-3 justify-start">
                        {cities.map((city, index) => (
                            <div
                                key={index}
                                className={`${city.color} text-white px-5 py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer`}
                            >
                                <span className="font-semibold text-sm md:text-base whitespace-nowrap">
                                    {city.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    <h2 className="heading-2 mb-6 mt-5">Navigating Florida's Unique Terrain & Traffic</h2>
                    <p className='my-2'>Successfully managing <Link className='font-bold text-brand-500' href=''>Florida Auto Transport</Link> requires an intimate knowledge of the state's infrastructure. Florida is unique because it is a peninsula; logistics naturally flow North-South, creating distinct bottlenecks that inexperienced carriers often mishandle.</p>

                    <p className='my-2'><b>The I-95 and I-75 Arteries:</b> I-95 is the lifeline of the East Coast. It is the primary route for shipments entering Miami, Fort Lauderdale, and Jacksonville. However, it is also prone to massive congestion in South Florida. We instruct our drivers to schedule pickups in these urban centers outside of peak rush hours to ensure timely service. Conversely, I-75 serves the Gulf Coast and is the main artery for the Midwest connection. Understanding the flow of these two highways allows us to predict transit times with high accuracy.</p>

                    <p className='my-2'><b>The I-4 Corridor Challenge:</b> The stretch of Interstate 4 connecting Tampa to Orlando and Daytona Beach is notoriously difficult. It is currently undergoing massive construction and sees heavy tourist traffic. Delays here are common. <b>Furious Auto Shipping</b> accounts for these delays in our logistical planning, ensuring that when we give you a pickup window, it is realistic based on current road conditions.</p>

                    <p className='my-2'><b>Weather Impacts:</b> Florida's weather is volatile. Hurricane season <b>(June through November)</b> can disrupt supply chains instantly. We monitor the National Hurricane Center data constantly. If a storm is approaching the coast, we reroute carriers or delay pickups to ensure your vehicle is not caught in flood-prone zones.</p>

                    <div className="relative w-full h-28 md:h-96 my-5">
                        <Image

                            src='/images/states/florida-logestic-map.png'
                            alt='Florida Logestic routes map'
                            fill
                            className=' md:object-contain'

                        />
                    </div>

                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Moving to Florida? Helpful Resources
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Relocating your vehicle is just one part of the process. Here are essential resources for new Florida residents to get legal and mobile.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {resources.map((resource, index) => {
                            const colors = colorClasses[resource.color];
                            const Icon = resource.icon;

                            return (
                                <div
                                    key={index}
                                    className={`${colors.bg} border-2 ${colors.border} ${colors.hover} rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg`}
                                >
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex-shrink-0">
                                            <div className={`${colors.icon} w-16 h-16 rounded-lg flex items-center justify-center shadow-md`}>
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                                {resource.title}
                                            </p>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                {resource.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                    <div className="text-center mb-12 mt-8">
                        <h2 className="heading-2 mb-4">Florida Covering All 50 States</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 my-6">
                        {US_STATES.filter((state) => state.name !== "Florida").map((state) => (
                            <Link
                                key={state.code}
                                href={`/locations/florida/${state.url.toLowerCase()}`}
                                title={`Ship Car from Florida to ${state.name}`}
                                className="bg-brand-50 rounded-lg p-4 text-center hover:shadow-md hover:bg-brand-100 transition-all group"
                            >
                                <div className="text-sm font-bold text-brand-600 group-hover:text-brand-700">
                                    Florida {'->'}  {state.name}
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>

            <FAQ
                title="Frequently Asked Questions about Shipping in Florida"
                subtitle="Common questions about Florida auto transport services"
                faqs={faqs} />

            <CommonCTA b='Get your no-obligation quote today' />
        </>
    )
}
