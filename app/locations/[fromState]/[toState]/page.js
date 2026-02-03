import React from 'react'
import Link from 'next/link'
import CommonHero from '@/components/CommonHero'
import FAQ from '@/components/FAQ';
import CommonCTA from '@/components/CommonCTA';
import Script from 'next/script';
import Image from 'next/image';
import { notFound } from "next/navigation";
import { getRouteData } from "@/lib/routeData";
import TransportProcessSection from '@/components/TransportProcessSection'


import QuoteForm from '@/components/quote/QuoteForm'

import { Truck, MapPin, Clock, DollarSign, AlertCircle, TrendingUp, Calendar, Shield, Info, ArrowRight, CheckCircle, Navigation, Phone, CloudRain, ClipboardCheck, Lock, Award, Star, Route, Plane } from 'lucide-react';


export const revalidate = 1296000; // 15 Days

export async function generateMetadata({ params }) {
  const { fromState, toState } = await params;

  const routeId = `${fromState}-to-${toState}`;
  const routeData = await getRouteData(routeId);

  const baseUrl = "https://furiousautoshipping.com";
  const canonicalUrl = `${baseUrl}/locations/${fromState}/${toState}`;

  // If route not found
  if (!routeData) {
    return {
      metadataBase: new URL(baseUrl),
      // title: "Route Not Found | Furious Auto Shipping",
      // description: "This route does not exist.",

      title: 'Car Shipping Cost Calculator (2026) | Instant Quote',
      description: 'Calculate car shipping rates instantly with our transparent cost estimator. Get real-time 2026 quotes for open & enclosed transport. No deposit required.',
      keywords: 'auto transport quote, car shipping calculator, vehicle transport cost, auto shipping estimate',
      openGraph: {
        title: 'Car Shipping Cost Calculator (2026) | Instant Quote',
        description: 'Get instant quotes for professional car shipping services across the USA.',
      },

      alternates: {
        canonical: canonicalUrl,
      },

      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-snippet": -1,
          "max-image-preview": "large",
          "max-video-preview": -1,
        },
      },
    };
  }

  return {
    metadataBase: new URL(baseUrl),

    title: routeData.meta.title,
    description: routeData.meta.description,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },

    // Optional (if you have keywords)
    keywords: routeData.meta.keywords || [
      `car shipping from ${fromState} to ${toState}`,
      `${fromState} to ${toState} car shipping`,
      `${fromState} to ${toState} auto transport`,
      `vehicle transport ${fromState} to ${toState}`,
      `car shipping from ${fromState} to ${toState}`,
      `auto transport ${fromState} to ${toState}`,
      `auto transport from ${fromState} to ${toState}`,
      `${fromState} to ${toState} auto transport `,
      `ship car to ${toState} from ${fromState}`,
      `vehicle transport ${fromState} to ${toState}`,
      `ship car to from ${fromState} to ${toState}`,

    ],

    openGraph: {
      title: routeData.meta.title,
      description: routeData.meta.description,
      url: canonicalUrl,
      siteName: "Furious Auto Shipping",
      type: "website",
      locale: "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title: routeData.meta.title,
      description: routeData.meta.description,
    },
  };
}


export default async function RoutePage({ params }) {
  const { fromState, toState } = await params
  const routeId = `${fromState}-to-${toState}`
  const routeData = await getRouteData(routeId);

  const ICONS = {
    success: (
      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    warning: (
      <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    danger: (
      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  };

  const STYLES = {
    success: {
      box: "bg-green-200/50 border-green-500/10 hover:bg-green-500/10",
      iconWrap: "bg-green-500/20 border-green-500/30",
    },
    warning: {
      box: "bg-yellow-200/50 border-yellow-500/10 hover:bg-yellow-500/10",
      iconWrap: "bg-yellow-500/20 border-yellow-500/30",
    },
    danger: {
      box: "bg-red-200/50 border-red-500/10 hover:bg-red-500/10",
      iconWrap: "bg-red-500/20 border-red-500/30",
    },
  };
  
  if (!routeData) {
    return (<>

      <Script
        id="calculator-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "name": "Furious Auto Shipping Cost Calculator",
                "operatingSystem": "All",
                "applicationCategory": "BusinessApplication",
                "url": "https://furiousautoshipping.com/car-shipping-cost-calculator",
                "description": "Instant auto transport cost estimator. Calculate shipping rates for open and enclosed transport based on real-time 2026 fuel indexes and route data.",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "ratingCount": "156",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "author": {
                  "@type": "Organization",
                  "name": "Furious Auto Shipping",
                  "url": "https://furiousautoshipping.com"
                }
              },
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
                    "name": "Car Shipping Cost Calculator",
                    "item": "https://furiousautoshipping.com/car-shipping-cost-calculator"
                  }
                ]
              }
            ]
          })
        }}
      />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="heading-2 text-gray-900 mb-4">
                How Our Car Shipping Cost Calculator Works
              </h1>
            </div>

            {/* Quote Form */}
            <QuoteForm />
          </div>
        </div>
      </div>
    </>)
  }

  const parseContent = (content) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
  };

  const maxIndex = Math.max(...routeData.seasonal_trends.monthly_data.map(d => d.index));

  const faqs = routeData.faqs

  function capitalizeFirstLetter(str) {
    if (!str) return "";

    return str
      .split("-") // split by dash
      .filter(Boolean) // remove empty parts (optional safety)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" "); // join with space
  }

  const nextYear = new Date();
  nextYear.setFullYear(nextYear.getFullYear() + 1);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://furiousautoshipping.com/#organization",
        "name": "Furious Auto Shipping",
        "url": "https://furiousautoshipping.com/",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://furiousautoshipping.com/#logo",
          "url": "https://furiousautoshipping.com/logo.png"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-888-706-8784",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": ["English"]
          }
        ]
      },
      {
        "@type": "AutoTransport",
        "@id": "https://furiousautoshipping.com/#localbusiness",
        "name": "Furious Auto Shipping",
        "url": "https://furiousautoshipping.com/",
        "telephone": "+1-888-706-8784",
        "priceRange": "$$",
        "image": routeData.images.header_url,
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Transport Way",
          "addressLocality": "Miami",
          "addressRegion": "FL",
          "postalCode": "33101",
          "addressCountry": "US"
        },
        "parentOrganization": {
          "@id": "https://furiousautoshipping.com/#organization"
        }
      },
      {
        "@type": "Service",
        "@id": `https://furiousautoshipping.com/locations/${fromState}/${toState}#service`,
        "name": routeData.hero_section.h1_title,
        "serviceType": "Auto Transport Service",
        "provider": {
          "@id": "https://furiousautoshipping.com/#localbusiness"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": `${capitalizeFirstLetter(fromState)}`
          },
          {
            "@type": "AdministrativeArea",
            "name": `${capitalizeFirstLetter(toState)}`
          }
        ],
        "description": routeData.meta.description,
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `${capitalizeFirstLetter(toState)} Shipping Options`, // e.g. "Florida Shipping Options"
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": `Open Carrier Shipping to ${capitalizeFirstLetter(toState)}` // "to Florida"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": `Enclosed Auto Transport to ${capitalizeFirstLetter(toState)}` // "to Florida"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": `Military PCS Vehicle Shipping from ${capitalizeFirstLetter(fromState)}` // "from New York"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": `Snowbird Transport to ${capitalizeFirstLetter(toState)}` // Explicitly targets your niche!
                    }
                }
            ]
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": `https://furiousautoshipping.com/locations/${fromState}/${toState}`,
          "priceValidUntil": nextYear.toISOString().split('T')[0],
          "description": routeData.tables.cost_ranges.note
        }
      },
      {
        "@type": "WebPage",
        "@id": `https://furiousautoshipping.com/locations/${fromState}/${toState}#webpage`,
        "url": `https://furiousautoshipping.com/locations/${fromState}/${toState}`,
        "name": routeData.meta.title,
        "description": routeData.meta.description,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://furiousautoshipping.com/#website",
          "name": "Furious Auto Shipping",
          "url": "https://furiousautoshipping.com/"
        },
        "about": {
          "@id": `https://furiousautoshipping.com/locations/${fromState}/${toState}#service`
        },
        "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": routeData.images.header_url
        },
        "publisher": {
          "@id": "https://furiousautoshipping.com/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://furiousautoshipping.com/locations/${fromState}/${toState}#breadcrumbs`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://furiousautoshipping.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://furiousautoshipping.com/locations/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${capitalizeFirstLetter(fromState)}`,
            "item": `https://furiousautoshipping.com/locations/${fromState}/`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": `${capitalizeFirstLetter(toState)}`,
            "item": `https://furiousautoshipping.com/locations/${fromState}/${toState}`
          }
        ]
      }
    ]
  }

  return (
    <>
      <Script
        id="MasterSchema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CommonHero
        h1={routeData.hero_section.h1_title}
        subheading={routeData.hero_section.sub_headline}
        img={routeData.images.header_url || "/images/usa.png"}
      />
      <section className="section">
        <div className="container">

          <div className="p-0 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {routeData.intro_section.heading}
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: parseContent(routeData.intro_section.content) }} />

            <div className="bg-gradient-to-br from-brand-50 to-indigo-100 border-l-4 border-brand-600 rounded-r-xl p-3 md:p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <TrendingUp className="w-8 h-8 text-brand-600 hidden md:block mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{routeData.market_drivers.primary_driver}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: parseContent(routeData.market_drivers.context) }} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 mb-4 lg:grid-cols-4 gap-4 sm:gap-6 px-10">
            {/* Aerial Distance Card */}
            <div className="bg-brand-500/10 backdrop-brand-md rounded-2xl p-6 border border-brand-500/20 hover:bg--brand-500/15 transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <Plane className="w-10 h-10 text-slat-700" />
              </div>
              <h3 className="text-slat-500 text-sm font-medium mb-2">Aerial Distance</h3>
              <p className="text-brand-500 text-xl sm:text-2xl font-bold mb-1">
                {routeData.hero_section?.quick_facts?.aerial_distance}
              </p>
              <p className="text-slat-700 text-sm">Miles</p>
              <p className="text-slat-500/70 text-xs mt-2">(depending on city pairs)</p>
            </div>

            {/* Transit Time Card */}
            <div className="bg-brand-500/10 backdrop-brand-md rounded-2xl p-6 border border-brand-500/20 hover:bg-brand-500/15 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4"> <Truck className="w-10 h-10 text-slat-700" /></div>
              <h3 className="text-slat-500 text-sm font-medium mb-2">Estimated Transit Time</h3>
              <p className="text-brand-500 text-xl sm:text-2xl font-bold mb-1">
                {routeData.hero_section?.quick_facts?.est_transit}
              </p>
              <p className="text-slat-700 text-sm">Days</p>
            </div>

            {/* Primary Route Card */}
            <div className="bg-brand-500/10 backdrop-brand-md rounded-2xl p-6 border border-brand-500/20 hover:bg-brand-500/15 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4"> <Route className="w-10 h-10 text-slat-700" /></div>
              <h3 className="text-slat-500 text-sm font-medium mb-2">Common Route</h3>
              <p className="text-brand-500 text-xl sm:text-2xl font-bold mb-1">
                {routeData.hero_section?.quick_facts?.primary_highway}
              </p>
            </div>

            {/* Driver Availability Card */}
            <div className="bg-brand-500/10 backdrop-brand-md rounded-2xl p-6 border border-brand-500/20 hover:bg-brand-500/15 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4"> <Star className="w-10 h-10 text-slat-700" /></div>
              <h3 className="text-slat-500 text-sm font-medium mb-2">Driver Availability</h3>
              <p className="text-brand-500 text-xl sm:text-2xl font-bold mb-1">
                {routeData.hero_section?.quick_facts?.driver_availability}
              </p>
              <p className="text-slat-700 text-sm">Daily Dispatches</p>
            </div>
          </div>

          <div className="p-0 md:px-10 mb-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 my-8">{routeData.route_analysis.heading}</h2>

            <div className="grid lg:grid-cols-1 gap-8 mb-8">
              <div>
                <div className="flex items-center mb-4">
                  <MapPin className="w-7 h-7 text-brand-600 mr-3" />
                  <span className="font-bold text-2xl text-gray-900">Distance: ~{routeData.route_analysis.distance_miles}</span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: parseContent(routeData.route_analysis.highway_infrastructure) }} />



                <div className="space-y-6">
                  {routeData.route_analysis?.drive_segments?.map((item, index) => {
                    const theme = STYLES[item.type] || STYLES.success;

                    return (
                      <div
                        key={index}
                        className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${theme.box}`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center border ${theme.iconWrap}`}
                          >
                            {ICONS[item.type]}
                          </div>

                          <div className="flex-1">
                            <p className="text-slate-700 font-semibold text-xl mb-2">{item.title}</p>
                            <p className="text-slate-500 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full h-full min-h-[500px]  rounded-xl flex items-center justify-center   relative">
                  {/* <div className="text-center p-8">
                    <MapPin className="w-20 h-20 text-brand-600 mx-auto mb-4" />
                    <p className="text-gray-600 font-semibold">Route Map</p>
                    <p className="text-sm text-gray-500 mt-2">Ohio → Colorado</p>
                  </div> */}
                  <Image

                    src={routeData.images.mid_content_url}
                    alt={routeData.images.mid_content_alt}
                    fill
                    className=' md:object-contain'

                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-rp-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-600/60 bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-700">{routeData.industry_insider_warning.heading}</h2>
              </div>
            </div>

            <div className="py-6">
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-orange-500 mb-6">
                <p className="text-gray-800 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: parseContent(routeData.industry_insider_warning.content) }} />
              </div>

              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-white rounded-full p-3">
                      <AlertCircle className="w-8 h-8 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                      <span className="inline-block px-3 py-1 bg-yellow-400 text-red-900 rounded-lg text-sm font-black uppercase tracking-wide">Red Flag</span>
                    </h3>
                    <p className="text-white text-lg leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: parseContent(routeData.industry_insider_warning.red_flag_text) }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{routeData.pickup_delivery.heading}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-brand-50 border-l-4 border-brand-500 p-3 md:p-6 rounded-r-lg">
                  <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: parseContent(routeData.pickup_delivery.pickup_content) }} />
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-3 md:p-6 rounded-r-lg">
                  <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: parseContent(routeData.pickup_delivery.delivery_content) }} />
                </div>
              </div>
            </div>
          </div>

          {/* How Our Shipping Process Works */}
          <TransportProcessSection fromStateData2={capitalizeFirstLetter(fromState)} toStateData2={capitalizeFirstLetter(toState)} />


          <div className="p-0 md:px-10 md:py-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 my-6">{routeData.transport_costs.heading}</h2>
            <div className="text-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: parseContent(routeData.transport_costs.content) }} />
          </div>

          <div className="p-0 md:px-10 md:py-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 my-6 flex items-center">
              <Clock className="w-8 h-8 text-brand-600 mr-3" />
              {routeData.tables.transit_times.title}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-600 text-white">
                    {routeData.tables.transit_times.headers.map((header, idx) => (
                      <th key={idx} className="px-6 py-4 text-left font-bold border border-brand-700 text-sm md:text-base">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {routeData.tables.transit_times.rows.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50 hover:bg-brand-50' : 'bg-white hover:bg-brand-50'}>
                      <td className="px-6 py-4 border border-gray-300 font-medium">{row.origin}</td>
                      <td className="px-6 py-4 border border-gray-300 font-medium">{row.dest}</td>
                      <td className="px-6 py-4 border border-gray-300">{row.miles}</td>
                      <td className="px-6 py-4 border border-gray-300 font-bold text-brand-600">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="bg-gradient-to-r from-indigo-50 to-brand-50 px-6 py-4 border-t-2 border-indigo-200">
                <p className="text-sm text-gray-700 font-medium">
                  <span className="font-bold">Note:</span> {routeData.tables.transit_times.note}
                </p>
              </div>
            </div>
          </div>

          <div className="p-0 md:p-10 mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <DollarSign className="w-8 h-8 text-green-600 mr-3" />
              {routeData.tables.cost_ranges.title}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-green-600 text-white">
                    {routeData.tables.cost_ranges.headers.map((header, idx) => (
                      <th key={idx} className="px-6 py-4 text-left font-bold border border-green-700 text-sm md:text-base">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {routeData.tables.cost_ranges.rows.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50 hover:bg-green-50' : 'bg-white hover:bg-green-50'}>
                      <td className="px-6 py-4 border border-gray-300 font-bold text-gray-900">{row.vehicle}</td>
                      <td className="px-6 py-4 border border-gray-300 font-bold text-green-700">{row.open}</td>
                      <td className="px-6 py-4 border border-gray-300 font-bold text-brand-700">{row.enclosed}</td>
                      <td className="px-6 py-4 border border-gray-300 text-sm text-gray-600">{row.variance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="bg-gradient-to-r from-indigo-50 to-brand-50 px-6 py-4 border-t-2 border-indigo-200">
                <p className="text-sm text-gray-700 font-medium">
                  <span className="font-bold">Note:</span> {routeData.tables.cost_ranges.note}
                </p>
              </div>
            </div>
          </div>

          <div className="p-0 md:px-10 md:py-5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="w-8 h-8 text-purple-600 mr-3" />
              Seasonal Pricing Trends
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border-2 border-green-500 p-6 rounded-xl shadow-md">
                <p className="text-sm font-semibold text-gray-600 mb-2">Best Time to Ship (Cheapest)</p>
                <p className="text-3xl font-bold text-green-700">{routeData.seasonal_trends.cheapest_month}</p>
              </div>
              <div className="bg-white border-2 border-red-500 p-6 rounded-xl shadow-md">
                <p className="text-sm font-semibold text-gray-600 mb-2">Peak Season (Most Expensive)</p>
                <p className="text-3xl font-bold text-red-700">{routeData.seasonal_trends.most_expensive_month}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">{routeData.seasonal_trends.seasonality_reason}</p>

            <div className="bg-white py-6">
              <div className="grid grid-cols-12 gap-2">
                {routeData.seasonal_trends.monthly_data.map((data, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-full bg-gray-200 rounded-t h-40 flex items-end overflow-hidden">
                      <div
                        className={`w-full ${data.index === maxIndex ? 'bg-red-500' : data.index === Math.min(...routeData.seasonal_trends.monthly_data.map(d => d.index)) ? 'bg-green-500' : 'bg-brand-500'} rounded-t transition-all hover:opacity-80`}
                        style={{ height: `${(data.index / maxIndex) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs font-bold mt-2 text-gray-800">{data.month}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-0 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{routeData.weather_challenges.heading}</h2>
            <div className="text-lg text-gray-700 leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: parseContent(routeData.weather_challenges.climate_overview) }} />

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-xl">
                <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                  <CloudRain className="w-6 h-6 text-yellow-600 mr-2" />
                  Weather Risk Factors:
                </h4>
                <ul className="space-y-3">
                  {routeData.weather_challenges.risk_factors.map((risk, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 border-2 border-green-400 p-6 rounded-xl">
                <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-green-600 mr-2" />
                  Our Recommendation:
                </h4>
                <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: parseContent(routeData.weather_challenges.transport_recommendation) }} />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-brand-600 to-brand-800 rounded-2xl shadow-2xl p-10 mb-8 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Shield className="w-14 h-14 text-brand-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">100% Insured & Protected</h3>
              <p className="text-xl text-brand-100 mb-6">Every carrier in our network maintains a minimum of $100,000 in cargo insurance. We verify safety ratings and insurance certificates before every dispatch.</p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                  <Lock className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Fully Licensed</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">DOT Certified</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                  <Star className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">A+ Rated</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl shadow-xl p-3 md:p-10 mb-8 border-2 border-orange-200">
            <div className="flex items-start mb-6">
              <div className="bg-orange-500 text-white hidden md:block p-4 rounded-full mr-4 flex-shrink-0">
                <Info className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{routeData.driver_insight.heading}</h2>
                <div className="text-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: parseContent(routeData.driver_insight.content) }} />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-xl p-3 md:p-12  mb-8 border-2 border-purple-200">
            <div className="flex items-start">
              <div className="bg-purple-500 text-white hidden md:block p-4 rounded-full mr-4 flex-shrink-0">
                <Info className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{routeData.route_trivia.heading}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{routeData.route_trivia.fact}</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 text-center">Preparing Your Vehicle for Transport</h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-1">
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Truck className="w-7 h-7 hidden md:block text-brand-600 mr-3" />
                Open vs. Enclosed Transport
              </h3>

              <div className="mb-6">
                <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 hidden md:block text-green-600 mr-2" />
                  Open Transport (Most Popular)
                </h4>
                <ul className="space-y-2  md:ml-7">
                  <li className="text-gray-700">• More affordable option</li>
                  <li className="text-gray-700">• Faster pickup times</li>
                  <li className="text-gray-700">• Perfect for daily drivers</li>
                  <li className="text-gray-700">• Exposed to weather elements</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                  <Shield className="w-5 h-5 hidden md:block text-brand-600 mr-2" />
                  Enclosed Transport (Premium)
                </h4>
                <ul className="space-y-2 md:ml-7">
                  <li className="text-gray-700">• Complete weather protection</li>
                  <li className="text-gray-700">• Ideal for luxury & classic cars</li>
                  <li className="text-gray-700">• Enhanced security</li>
                  <li className="text-gray-700">• Premium white-glove service</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ClipboardCheck className="w-7 h-7 hidden md:block text-green-600 mr-3" />
                Vehicle Preparation Checklist
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Clean Your Vehicle</p>
                    <p className="text-sm text-gray-600">Makes inspection easier and protects the paint</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Remove Personal Items</p>
                    <p className="text-sm text-gray-600">Not covered by carrier insurance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Check Fluid Levels</p>
                    <p className="text-sm text-gray-600">Ensure no leaks and proper levels</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Document Condition</p>
                    <p className="text-sm text-gray-600">Take photos of all sides before pickup</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Leave ¼ Tank of Gas</p>
                    <p className="text-sm text-gray-600">Reduces weight while ensuring drivability</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Disable Alarms</p>
                    <p className="text-sm text-gray-600">Prevents issues during transport</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
      <FAQ
        title={`Frequently Asked Questions: Shipping to ${capitalizeFirstLetter(toState)}`}
        subtitle={`Common questions about ${capitalizeFirstLetter(fromState)} to ${capitalizeFirstLetter(toState)} Car Shipping`}
        faqs={faqs} />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Explore Related Shipping Routes</h2>
          <p className="text-xl text-gray-600 text-center mb-12">We serve major corridors across the United States</p>

          <div className="grid md:grid-cols-3 gap-6">
            {routeData.corridor_states.map((state, idx) => (
              <a
                key={idx}
                href={state.slug}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 border-2 border-transparent hover:border-brand-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-brand-100 p-3 rounded-full group-hover:bg-brand-500 transition-colors">
                    <MapPin className="w-6 h-6 text-brand-600 group-hover:text-white" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-brand-600 group-hover:translate-x-2 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors">{state.anchor_text}</h3>
                <p className="text-sm text-gray-600 mt-2">View route details →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CommonCTA p={routeData.CTA.Cta_heading} s={routeData.CTA.Cta_paragraph} b={routeData.CTA.Btn_text} />
    </>
  );
}
