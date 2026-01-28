import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import CommonHero from '@/components/CommonHero'
import FAQ from '@/components/FAQ';
import CommonCTA from '@/components/CommonCTA';
import { MapPin, DollarSign, Clock, Navigation, TrendingUp, Map, Truck, Shield, Award, Sun } from 'lucide-react';
import { US_STATES } from '@/lib/utils'
import Script from "next/script";


export const metadata = {
    title: 'Car Shipping New York | Fast & Reliable New York Auto Transport',
    description: 'Ship your car to New York with Furious Auto Shipping. We offer daily routes to NYC, Fort Drum, & Upstate. Get a free, instant quote for safe vehicle transport.',
    keywords: 'New York auto transport, seasonal car shipping, winter migration, Car Shipping New York, New York auto shipping,ship a car to New York',

    alternates: {
        canonical: '/locations/new-york',
    },
}

export default function page() {
    const routes = [
        { from: "New York, NY", to: "Miami, FL", distance: "~1,280 miles", price: "$800 - $1,100", time: "3-5 Days" },
        { from: "New York, NY", to: "Los Angeles, CA", distance: "~2,800 miles", price: "$1,350 - $1,650", time: "7-10 Days" },
        { from: "New York, NY", to: "Dallas, TX", distance: "~1,550 miles", price: "$1,000 - $1,300", time: "4-6 Days" },
        { from: "New York, NY", to: "Chicago, IL", distance: "~800 miles", price: "$600 - $850", time: "2-4 Days" },
        { from: "New York, NY", to: "Atlanta, GA", distance: "~870 miles", price: "$650 - $900", time: "2-4 Days" },
        { from: "New York, NY", to: "Denver, CO", distance: "~1,780 miles", price: "$1,100 - $1,400", time: "5-7 Days" },
        { from: "New York, NY", to: "Boston, MA", distance: "~220 miles", price: "$350 - $550", time: "1-2 Days" }
    ];

    const cities = [
        { name: "New York City", color: "bg-brand-500" },
        { name: "Buffalo", color: "bg-purple-500" },
        { name: "Rochester", color: "bg-pink-500" },
        { name: "Yonkers", color: "bg-green-500" },
        { name: "Syracuse", color: "bg-cyan-500" },
        { name: "Albany", color: "bg-orange-500" },
        { name: "New Rochelle", color: "bg-red-500" },
        { name: "Mount Vernon", color: "bg-teal-500" },
        { name: "Schenectady", color: "bg-indigo-500" },
        { name: "Utica", color: "bg-violet-500" },
        { name: "White Plains", color: "bg-fuchsia-500" },
        { name: "Hempstead", color: "bg-rose-500" },
        { name: "Brookhaven", color: "bg-amber-500" },
        { name: "Islip", color: "bg-lime-500" },
        { name: "Oyster Bay", color: "bg-emerald-500" },
        { name: "North Hempstead", color: "bg-sky-500" },
        { name: "Babylon", color: "bg-yellow-500" },
        { name: "Huntington", color: "bg-brand-600" },
        { name: "Ramapo", color: "bg-purple-600" },
        { name: "Amherst", color: "bg-pink-600" },
    ];


    const regions = [
        {
            name: "The South",
            icon: Navigation,
            description: "We run daily routes to Florida, Georgia, the Carolinas, and Texas—perfect for seasonal relocations.",
            color: "red",
            gradient: "from-red-500 to-red-600",
            bgColor: "bg-red-50",
            borderColor: "border-red-200",
            iconBg: "bg-red-500"
        },
        {
            name: "The West Coast",
            icon: Map,
            description: "Regular auto transport lanes to California, Washington, and Arizona.",
            color: "orange",
            gradient: "from-orange-500 to-orange-600",
            bgColor: "bg-orange-50",
            borderColor: "border-orange-200",
            iconBg: "bg-orange-500"
        },
        {
            name: "The Midwest",
            icon: TrendingUp,
            description: "Direct connections via I-90 and I-80 to Illinois, Ohio, and Michigan.",
            color: "brand",
            gradient: "from-brand-500 to-brand-600",
            bgColor: "bg-brand-50",
            borderColor: "border-brand-200",
            iconBg: "bg-brand-500"
        },
        {
            name: "The Northeast",
            icon: MapPin,
            description: "Quick, short-haul transit to Massachusetts, Pennsylvania, and New Jersey.",
            color: "green",
            gradient: "from-green-500 to-green-600",
            bgColor: "bg-green-50",
            borderColor: "border-green-200",
            iconBg: "bg-green-500"
        }
    ];
    const faqs = [
        {
            question: "How much does car shipping to New York cost?",
            answer: "The cost typically ranges from $0.60 to $0.90 per mile. For a shorter trip (e.g., Boston to NY), the cost per mile is higher, but the total is lower. For cross-country trips (e.g., LA to NY), the cost per mile is lower. The final price depends on vehicle size, fuel prices, and seasonal demand."
        },
        {
            question: "Can I pack personal items in my car?",
            answer: "Generally, carriers allow up to 100 lbs of personal items in the trunk, but this is at your own risk. The items are not covered by the carrier's cargo insurance. For Snowbirds, this is a common request, but please keep the driver's seat and windows clear."
        },
        {
            question: "How long does it take to ship a car from New York?",
            answer: "Transit time depends on distance. A coast-to-coast move (NY to CA) takes 7-10 days. A move down the coast (NY to FL) takes 3-5 days. We provide tracking updates so you always know where your vehicle is."
        },
        {
            question: "Do you ship to military bases like Fort Drum?",
            answer: "Yes, we ship to all military bases in New York, including Fort Drum and West Point. We are familiar with gate entry procedures and can coordinate directly with you or a designated contact on base."
        },
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
                        "name": "New York Car shipping",
                        "item": "https://furiousautoshipping.com/locations/new-york"
                    }
                ]
            },
            {
                "@type": "Service",
                "name": "New York Car shipping Services",
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
                    "name": "New York",
                    "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "US",
                        "addressRegion": "New York"
                    }
                },
                "description": "Reliable door-to-door Car shipping services to and from New York. Fully insured carriers serving New York City, Buffalo, Rochester, and all New York counties.",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "New York Shipping Options",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Open Carrier Shipping in New York"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Enclosed Car shipping in New York"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Military PCS Vehicle Shipping to New York"
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
                h1="New York Car Shipping Services: Safe, Reliable, & Direct"
                subheading="Safe, reliable, and affordable auto transport to and from New York. Get a free quote in seconds."
                img="/images/states/New-York-Car-Shipping-Services.png"
            />


            <section className="section">
                <div className="container">

                    <h2 className="heading-2 mb-6">Safe, reliable, and affordable auto transport to and from New York. Get a free quote in seconds.</h2>
                    <p className='my-2'>Looking for the best way to <Link className='font-bold text-brand-500' href=''>ship a car to New York</Link>? Whether you are relocating to the city, moving upstate for a quieter life, or heading south for the winter as a snowbird, driving the vehicle yourself isn't always the smart choice. Between the tolls on the I-95 corridor, the unpredictable weather on the I-90 Thruway, and the sheer wear and tear on your vehicle, driving can end up costing you more than shipping.</p>
                    <p className='my-2'>At <b>Furious Auto Shipping</b>, we specialize in <Link className='font-bold text-brand-500' href=''>Car Shipping New York</Link> routes. We understand the unique logistics of the Empire State—from navigating tight deliveries in the Five Boroughs to handling winter transport near Buffalo. We save you time, mileage, and stress by handling the logistics while you focus on your move.</p>

                    <div className="py-6 md:py-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-2">
                            New York Car Shipping at a Glance
                        </h2>
                        <p className="text-gray-700 text-lg">
                            Before you book, here is the snapshot of what to expect when you <b>ship a car to New York</b>
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="">
                        <div className="grid md:grid-cols-2 gap-6">

                            {/* Top Shipping Hubs */}
                            <div className="bg-gradient-to-br from-brand-50 to-white p-6 rounded-xl border-2 border-brand-200 hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-500 p-3 rounded-lg flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xl font-bold text-gray-900 mb-3">Top Shipping Hubs</p>
                                        <p className="text-gray-700 leading-relaxed">
                                            New York City (Five Boroughs), Buffalo, Rochester, Albany, Syracuse, and Yonkers.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Average Cost */}
                            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-green-200 hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-500 p-3 rounded-lg flex-shrink-0">
                                        <DollarSign className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xl font-bold text-gray-900 mb-3">Average Cost</p>
                                        <p className="text-gray-700 leading-relaxed">
                                            <span className="text-2xl font-bold text-green-600">$0.60 - $0.90</span> per mile
                                            <br />
                                            <span className="text-sm text-gray-600">(Varies by season and vehicle type)</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Timeframe */}
                            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border-2 border-orange-200 hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xl font-bold text-gray-900 mb-3">Timeframe</p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Pickup typically within <span className="font-semibold">24-72 hours</span> of booking.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Primary Corridors */}
                            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-500 p-3 rounded-lg flex-shrink-0">
                                        <Navigation className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xl font-bold text-gray-900 mb-3">Primary Corridors</p>
                                        <p className="text-gray-700 leading-relaxed">
                                            I-95, I-87 (The Thruway), I-90, and I-80.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="py-6 md:py-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-3">
                            Cost to Ship a Car to/from New York
                        </h2>
                        <p className="text-brand-700 text-sm md:text-base leading-relaxed">
                            The price to ship a car to New York depends heavily on distance and route popularity. Below are estimated rates for <Link href="/services/open-auto-transport" className="text-brand-500 font-semibold hover:text-brand-800">Open Carrier Car Shipping</Link> on our most frequent routes.
                        </p>
                    </div>

                    {/* Table */}
                    <div className="">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse min-w-full">
                                <thead>
                                    <tr className="bg-gradient-to-r from-slate-100 to-slate-50 border-b-2 border-brand-600">
                                        <th className="text-left p-3 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0" />
                                                <span>Route Pair</span>
                                            </div>
                                        </th>
                                        <th className="text-left p-3 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
                                            <div className="flex items-center gap-2">
                                                <TrendingUp className="w-4 h-4 text-brand-600 flex-shrink-0" />
                                                <span>Distance</span>
                                            </div>
                                        </th>
                                        <th className="text-left p-3 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
                                            <div className="flex items-center gap-2">
                                                <DollarSign className="w-4 h-4 text-brand-600 flex-shrink-0" />
                                                <span>Est. Price (Open)</span>
                                            </div>
                                        </th>
                                        <th className="text-left p-3 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-brand-600 flex-shrink-0" />
                                                <span>Transit Time</span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {routes.map((route, index) => (
                                        <tr
                                            key={index}
                                            className="border-b border-gray-200 my-5 hover:bg-brand-50 transition-colors"
                                        >
                                            <td className="p-3 md:p-4">
                                                <div className="flex flex-col">
                                                    <span className="font-semibold text-gray-900 text-sm md:text-base whitespace-nowrap">{route.from}</span>
                                                    <span className="text-gray-500 text-xs md:text-sm flex items-center mt-1 whitespace-nowrap">
                                                        <span className="mr-1">↔</span>
                                                        {route.to}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-3 md:p-4">
                                                <span className="text-gray-700 text-sm md:text-base whitespace-nowrap">{route.distance}</span>
                                            </td>
                                            <td className="p-3 md:p-4">
                                                <span className="font-semibold text-green-600 text-sm md:text-base whitespace-nowrap">{route.price}</span>
                                            </td>
                                            <td className="p-3 md:p-4">
                                                <span className="inline-block bg-brand-100 text-brand-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">
                                                    {route.time}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Note Section */}
                    <div className="bg-amber-50 border-t-2 mt-3 border-amber-400 p-4 md:p-6">
                        <div className="flex items-start gap-3">
                            <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-amber-900 mb-1 text-sm md:text-base">Important Pricing Information</h4>
                                <p className="text-amber-800 text-xs md:text-sm leading-relaxed">
                                    Prices are estimates for standard sedans. SUVs and trucks may incur additional fees. Check our <Link href="/car-shipping-cost-calculator" className="text-amber-900 underline font-semibold hover:text-amber-700">Car Shipping Calculator</Link> for real-time rates.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="py-6 md:py-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-3">
                            Nationwide Car Shipping from New York
                        </h2>
                        <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                            Whether you are moving to the East Coast or the West Coast, our carrier network covers all 50 states. We don't just serve the local area; we connect New York to the rest of the nation.
                        </p>
                    </div>

                    {/* Regions Grid */}
                    <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {regions.map((region, index) => {
                                const Icon = region.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`${region.bgColor} border-2 ${region.borderColor} rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                                    >
                                        {/* Region Header */}
                                        <div className={`bg-gradient-to-r ${region.gradient} p-5 flex items-center gap-4`}>
                                            <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white">{region.name}</h3>
                                        </div>

                                        {/* Region Content */}
                                        <div className="p-6">
                                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                                {region.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <div className="py-6 md:py-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-3">
                                Auto Transport Solutions Tailored for New York
                            </h2>
                            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                                New York presents a diverse set of challenges for vehicle hauling, from congested urban streets to snowy rural roads. We offer tailored services to meet these specific needs.
                            </p>
                        </div>
                    </div>

                    {/* Open Carrier Section */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 my-5">
                        <div className="bg-gradient-to-r from-brand-600 to-brand-700 p-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
                                    <Truck className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">Open Carrier (Best Value)</h3>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 md:p-8">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For 90% of our customers, Open Carrier shipping is the standard choice. It is the most affordable way to ship a car to New York. Your vehicle will be loaded onto a double-decker trailer (like the ones you see delivering cars to dealerships). It is safe, efficient, and FMCSA licensed.
                            </p>
                            <div className="bg-brand-50 border-l-4 border-brand-600 p-4 rounded-r-lg">
                                <p className="text-gray-700 text-sm md:text-base">
                                    While your car is exposed to the elements, this method is perfect for <span className="font-semibold">daily drivers, sedans, and SUVs</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Enclosed Carrier Section */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 my-5">
                        <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">Enclosed Carrier (Max Protection)</h3>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 md:p-8">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you are shipping a luxury vehicle, classic car, or high-end sports car, we highly recommend <Link href="/services/enclosed-auto-transport" className="text-green-600 underline font-semibold hover:text-green-700">Enclosed Auto Transport</Link>. New York weather is notorious for road salt in the winter and intense sun in the summer.
                            </p>
                            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
                                <p className="text-gray-700 text-sm md:text-base">
                                    An enclosed carrier protects your investment from <span className="font-semibold">road debris, salt spray, and weather events</span>. This is the preferred vehicle transport method for high-value assets.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Military PCS Section */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 my-5">
                        <div className="bg-gradient-to-r from-red-600 to-red-700 p-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">Military PCS Vehicle Shipping</h3>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 md:p-8">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                New York is home to several critical military installations, and we are proud to serve the men and women of our armed forces. If you have received PCS orders to Fort Drum, West Point, or Fort Hamilton, we offer specialized military vehicle transport.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg">
                                    <p className="font-bold text-gray-900 mb-2 text-lg">Fort Drum (Watertown)</p>
                                    <p className="text-gray-700 text-sm md:text-base">
                                        We regularly service the "North Country" via I-81, ensuring your POV arrives before your report date.
                                    </p>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg">
                                    <p className="font-bold text-gray-900 mb-2 text-lg">West Point (US Military Academy)</p>
                                    <p className="text-gray-700 text-sm md:text-base">
                                        We understand the strict gate access protocols required for delivery to the academy grounds.
                                    </p>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg">
                                    <p className="font-bold text-gray-900 mb-2 text-lg">Fort Hamilton (Brooklyn)</p>
                                    <p className="text-gray-700 text-sm md:text-base">
                                        We navigate the complex NYC bridge and tunnel systems to deliver safely to this key urban base.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                                <p className="text-amber-900 text-sm md:text-base">
                                    <span className="font-bold">Tip:</span> Ask your logistics agent about our <Link href="/services/military-car-shipping" className="text-amber-900 underline font-semibold hover:text-amber-700">Military Car Shipping Discounts</Link>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Snowbird Services Section */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 my-5">
                        <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
                                    <Sun className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">Snowbird Services</h3>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 md:p-8">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                New York has one of the highest populations of "Snowbirds"—residents who move south to Florida or Arizona for the winter. We specialize in <Link href="/services/snowbird-auto-transport" className="text-orange-600 underline font-semibold hover:text-orange-700">Snowbird Car Shipping</Link>.
                            </p>
                            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded-r-lg">
                                <p className="text-gray-700 text-sm md:text-base">
                                    We can coordinate your vehicle pickup to align with your flight schedule, ensuring <span className="font-semibold">your car is waiting for you when you arrive at your winter home</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="heading-2 mb-6">We Pick Up in All Major New York Cities</h2>
                    <p className='my-2'>We don't just serve NYC. Our network of carriers extends across the entire state, ensuring we can pick up or deliver your vehicle right to your door (or the nearest safe parking lot if you live on a narrow street).</p>


                    <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                        Major Service Areas
                    </p>

                    <div className="flex flex-wrap gap-3 justify-start mb-4">
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

                    <div className="relative w-full h-28 md:h-96 my-5">
                        <Image

                            src='/images/states/new-york-logestic-map.png'
                            alt='New York Logestic routes map'
                            fill
                            className=' md:object-contain'

                        />
                    </div>

                    <h2 className="heading-2 mb-6">Tips for Shipping a Car in New York</h2>
                    <p className='my-2'>As a local logistics expert, we know that shipping in New York requires specific knowledge of the roads and regulations.</p>
                    <p className='my-2'><b>Understanding the I-95 Corridor</b> The I-95 corridor leading into NYC is one of the busiest in the country. Carriers often face delays here due to traffic volume. When booking Car Shipping New York, we always buffer our transit times slightly to account for the George Washington Bridge and Cross Bronx Expressway traffic.</p>
                    <p className='my-2'><b>Winter Weather & The Thruway (I-90)</b> If you are shipping to Upstate New York (Buffalo, Syracuse, Rochester) between November and March, be aware that lake-effect snow can delay vehicle transport trucks. Safety is our priority. If I-90 is closed due to a snowstorm, our drivers will wait until it is safe to proceed.</p>
                    <p className='my-2'><b>Narrow Streets & Truck Restrictions</b> Many streets in NYC and older suburbs prohibit large 18-wheelers. If you live in a dense residential area, we may arrange a "shuttle service" or ask you to meet the driver at a nearby large parking lot (like a shopping center) to safely load or unload your vehicle.</p>

                    <h2 className="heading-2 mb-6">Moving to New York? New Resident Resources</h2>
                    <p className='my-2'>If you are permanently relocating, here are a few resources to help you get settled once your car arrives:</p>
                    <ul className='list-disc ml-4'>
                        <li className='my-2'>NY DMV: Register your vehicle and transfer your license at the <Link className='font-bold text-brand-500' href='https://dmv.ny.gov/'>New York State DMV</Link>.</li>
                        <li className='my-2'>E-ZPass: You will need this for the tolls. Get your <Link className='font-bold text-brand-500' href='https://www.e-zpassny.com/'>E-ZPass New York here</Link>.</li>
                        <li className='my-2'>Voter Registration: Update your voting address at the <Link className='font-bold text-brand-500' href='https://www.elections.ny.gov/'>NY Board of Elections</Link>.</li>
                    </ul>


                    <div className="text-center mb-12 mt-8">
                                <h2 className="heading-2 mb-4">New York Covering All 50 States</h2> 
                              </div>
                    
                                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 my-6">
                                {US_STATES.filter((state) => state.name !== "New York").map((state) => (
                                  <Link
                                    key={state.code}
                                    href={`/locations/new-york/${state.url.toLowerCase()}`}
                                    title={`Ship Car from New York to ${state.name}`}
                                    className="bg-brand-50 rounded-lg p-4 text-center hover:shadow-md hover:bg-brand-100 transition-all group"
                                  > 
                                    <div className="text-sm font-bold text-brand-600 group-hover:text-brand-700">
                                     New York {'->'}  {state.name}
                                    </div>
                                  </Link>
                                ))}
                              </div>

                </div>
            </section>

            <FAQ
                title="Frequently Asked Questions about Car Shipping in New York"
                subtitle="Common questions about  New York auto transport services"
                faqs={faqs} />

            <CommonCTA b='Get your free New York car shipping quote now' />
        </>
    )
}
