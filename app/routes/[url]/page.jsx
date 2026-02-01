import React from 'react';
import { Truck, Clock, MapPin, DollarSign, AlertTriangle, CheckCircle, Calendar, Shield, TrendingUp, Navigation, Cloud, FileText } from 'lucide-react';

// Mock CommonHero component for demo

import CommonHero from '@/components/CommonHero'
import FAQ from '@/components/FAQ';
import CommonCTA from '@/components/CommonCTA';
import Script from 'next/script';
import Image from 'next/image';
import { getRouteData } from "@/lib/cityRoute";
import QuoteForm from '@/components/quote/QuoteForm'



// Function to parse text with **bold** and convert to JSX
const parseTextWithBold = (text) => {
  if (!text) return text;
  
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

// Function to parse text with links and make them clickable
const parseContent = (text) => {
  if (!text) return text;
  
  // First handle anchor tags
  const anchorRegex = /<a href="([^"]*)">(.*?)<\/a>/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  
  while ((match = anchorRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(parseTextWithBold(text.slice(lastIndex, match.index)));
    }
    // Add the link
    parts.push(
      <a 
        key={match.index} 
        href={match[1]} 
        className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
      >
        {match[2]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(parseTextWithBold(text.slice(lastIndex)));
  }
  
  return parts.length > 0 ? parts : parseTextWithBold(text);
};

export const revalidate = 1296000; // 15 Days

export async function generateMetadata({ params }) {
  const {url} = await params;
 
  const routeData = await getRouteData(url);

  const baseUrl = "https://furiousautoshipping.com";
  const canonicalUrl = `${baseUrl}/routes/${url}`;

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
    keywords: routeData.meta?.keywords,

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

const RoutePageDesign = async ({params}) => {
    const {url} = await params 
    const routeData = await getRouteData(url);
  

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

  
  const faqs = routeData.faqs_extended

  
  const nextYear = new Date();
  nextYear.setFullYear(nextYear.getFullYear() + 1);

  function capitalizeFirstLetter(str) {
    if (!str) return "";

    return str
      .split("-") // split by dash
      .filter(Boolean) // remove empty parts (optional safety)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" "); // join with space
  }

  function toUrlSlug(str) {
  if (!str) return "";

  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // remove special chars
    .replace(/\s+/g, "-")        // spaces → dash
    .replace(/-+/g, "-");        // collapse multiple dashes
}

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
      "@type": "AutomotiveBusiness", // More standard than 'AutoTransport' for Google Validation
      "@id": "https://furiousautoshipping.com/#localbusiness",
      "name": "Furious Auto Shipping",
      "url": "https://furiousautoshipping.com/",
      "telephone": "+1-888-706-8784",
      "priceRange": "$$",
      "image": routeData?.images?.header_image?.url, // Updated to match new Prompt 2 JSON structure
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
      "@id": `https://furiousautoshipping.com/routes/${url}#service`,
      "name": `Car Shipping from ${capitalizeFirstLetter(routeData.origin_city)} to ${capitalizeFirstLetter(routeData.dest_city)}`,
      "serviceType": "Auto Transport Service",
      "provider": {
        "@id": "https://furiousautoshipping.com/#localbusiness"
      },
      "areaServed": [
        {
          "@type": "City", // UPDATED: Targets the City, not just the State
          "name": `${capitalizeFirstLetter(routeData.origin_city)}, ${capitalizeFirstLetter(routeData.origin_state)}`
        },
        {
          "@type": "City", // UPDATED: Targets the Destination City
          "name": `${capitalizeFirstLetter(routeData.dest_city)}, ${capitalizeFirstLetter(routeData.dest_state)}`
        }
      ],
      "description": routeData.meta.description,
      "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${capitalizeFirstLetter(routeData.dest_city)} Shipping Options`, 
          "itemListElement": [
              {
                  "@type": "Offer",
                  "itemOffered": {
                      "@type": "Service",
                      "name": `Door-to-Door Shipping to ${capitalizeFirstLetter(routeData.dest_city)}`
                  }
              },
              {
                  "@type": "Offer",
                  "itemOffered": {
                      "@type": "Service",
                      "name": `Enclosed Transport for ${capitalizeFirstLetter(routeData.dest_city)} Routes`
                  }
              },
              {
                  "@type": "Offer",
                  "itemOffered": {
                      "@type": "Service",
                      "name": `Snowbird Transport: ${capitalizeFirstLetter(routeData.origin_city)} to ${capitalizeFirstLetter(routeData.dest_city)}`
                  }
              }
          ]
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": `https://furiousautoshipping.com/routes/${url}`,
        "priceValidUntil": nextYear.toISOString().split('T')[0],
        "description": "Estimated starting price for standard sedan." 
      }
    },
    {
      "@type": "WebPage",
      "@id": `https://furiousautoshipping.com/routes/${url}#webpage`,
      "url": `https://furiousautoshipping.com/routes/${url}`,
      "name": routeData.meta.title,
      "description": routeData.meta.description,
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://furiousautoshipping.com/#website",
        "name": "Furious Auto Shipping",
        "url": "https://furiousautoshipping.com/"
      },
      "about": {
        "@id": `https://furiousautoshipping.com/routes/${url}#service`
      },
      "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": routeData?.images?.header_image?.url // Updated to match new JSON key
      },
      "publisher": {
        "@id": "https://furiousautoshipping.com/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `https://furiousautoshipping.com/routes/${url}#breadcrumbs`,
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
          "name": `${capitalizeFirstLetter(routeData.origin_state)}`, // STATE NAME (e.g. Florida)
          "item": `https://furiousautoshipping.com/locations/${toUrlSlug(routeData.origin_state)}` // Links to STATE HUB
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": `${capitalizeFirstLetter(routeData.origin_city)} to ${capitalizeFirstLetter(routeData.dest_city)}`, // ROUTE NAME
          "item": `https://furiousautoshipping.com/routes/${url}` // Links to THIS PAGE
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
      
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <CommonHero
        h1={routeData.hero_section.h1_title}
        subheading={routeData.hero_section.sub_headline}
        img= {routeData.images.header_image.url || "/images/usa.png"}
      />

      {/* Quick Stats Cards - Boxed Design */}
      <div className="bg-gradient-to-b from-gray-100 to-white py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-full p-4">
                  <MapPin className="text-blue-600 w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Distance</p>
                  <p className="font-bold text-2xl text-gray-900">{routeData.hero_section.quick_stats.distance}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-600 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 rounded-full p-4">
                  <Clock className="text-green-600 w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Transit Time</p>
                  <p className="font-bold text-2xl text-gray-900">{routeData.hero_section.quick_stats.transit_time}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-yellow-600 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 rounded-full p-4">
                  <DollarSign className="text-yellow-600 w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Starting Price</p>
                  <p className="font-bold text-2xl text-gray-900">{routeData.hero_section.quick_stats.avg_price_open}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-600 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 rounded-full p-4">
                  <TrendingUp className="text-purple-600 w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Route Popularity</p>
                  <p className="font-bold text-2xl text-gray-900">{routeData.hero_section.quick_stats.route_popularity}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction with Image */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{routeData.intro_section.heading}</h2>
              <p className="text-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{__html:parseContent(routeData.intro_section.content)}} />
            </div>
            <div className="rounded-xl relative overflow-hidden shadow-2xl min-h-48 md:h-full">
              <Image 
                src={routeData.images.mid_section_road.url} 
                alt={routeData.images.mid_section_road.alt_text}
                className="w-full h-full object-cover"
                fill
              />
            </div>
          </div>
        </section>

        {/* Market Drivers */}
        <section className="mb-16 bg-white rounded-lg shadow-lg p-1 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{routeData.market_drivers_detailed.heading}</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">{routeData.market_drivers_detailed.intro_content}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {routeData.market_drivers_detailed.mover_types.map((mover, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{mover.type}</h3>
                <p className="text-gray-700">{mover.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Route Logistics with Image */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Navigation className="text-blue-600 w-8 h-8" />
            {routeData.route_logistics_deep_dive.heading}
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">{routeData.route_logistics_deep_dive.intro_content}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {routeData.route_logistics_deep_dive.key_checkpoints.map((checkpoint, idx) => (
                <div key={idx} className="bg-white border-l-4 border-blue-600 rounded-r-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="md:flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{checkpoint.name}</h3>
                      <p className="text-gray-700">{checkpoint.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl relative overflow-hidden shadow-2xl  min-h-48 md:h-full">
              {/* <div className="absolute"> */}
                <Image 
                src={routeData.images.mid_section_map.url} 
                alt={routeData.images.mid_section_map.alt_text}
                className="w-full h-full object-cover"
                fill
              />
              {/* </div> */}
            </div>
          </div>
        </section>

        {/* Weather & Seasonality */}
        <section className="mb-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Cloud className="text-blue-600 w-8 h-8 hidden md:block" />
            {routeData.weather_impact_seasonal.heading}
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">{routeData.weather_impact_seasonal.intro_content}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {routeData.weather_impact_seasonal.seasonal_breakdown.map((season, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-blue-600 w-6 h-6" />
                  <h3 className="text-xl font-bold text-gray-900">{season.season}</h3>
                </div>
                <p className="text-gray-700">{season.impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Table with Image */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <DollarSign className="text-blue-600 w-8 h-8 hidden md:block" />
            {routeData.cost_analysis_comprehensive.heading}
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">{routeData.cost_analysis_comprehensive.intro_content}</p>
          
          <div className="block ">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Vehicle Type</th>
                        <th className="px-6 py-4 text-left font-semibold">Open Transport</th>
                        <th className="px-6 py-4 text-left font-semibold">Enclosed Transport</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {routeData.cost_analysis_comprehensive.pricing_table.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-900">{row.vehicle}</td>
                          <td className="px-6 py-4 text-blue-600 font-semibold">{row.open}</td>
                          <td className="px-6 py-4 text-blue-600 font-semibold">{row.enclosed}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-gray-50 px-6 py-4 border-t">
                  <p className="text-sm text-gray-600 italic">{routeData.cost_analysis_comprehensive.pricing_table.note}</p>
                </div>
              </div>
            </div> 
          </div>
        </section>

        {/* Scam Warning */}
        <section className="mb-16">
          <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="text-red-600 w-8 h-8 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-3">{routeData.scam_warning.heading}</h2>
                <p className="text-gray-800 font-medium mb-6">{routeData.scam_warning.hook}</p>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              {routeData.scam_warning.details.map((detail, idx) => (
                <p key={idx} className="text-gray-800">{parseContent(detail)}</p>
              ))}
            </div>
            
            <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-4">
              <p className="text-gray-900 font-medium">
                <span className="font-bold">Pro Tip:</span> {routeData.scam_warning.pro_tip}
              </p>
            </div>
          </div>
        </section>

        {/* DMV Guide */}
        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <FileText className="text-blue-600 w-8 h-8" />
            {routeData.dmv_relocation_guide.heading}
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">{routeData.dmv_relocation_guide.intro_content}</p>
          
          <div className="space-y-4 mb-6">
            {routeData.dmv_relocation_guide.checklist.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{parseContent(item)}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Shield className="text-blue-600 w-6 h-6 flex-shrink-0" />
              <p className="text-gray-900">
                <span className="font-bold">Pro Tip:</span> {routeData.dmv_relocation_guide.pro_tip}
              </p>
            </div>
          </div>
        </section>

        {/* Statewide Coverage */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{routeData.statewide_coverage_table.heading}</h2>
          <p className="text-gray-700 mb-6">{routeData.statewide_coverage_table.intro}</p>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <tr>
                    {routeData.statewide_coverage_table.table_data.headers.map((header, idx) => (
                      <th key={idx} className="px-6 py-4 text-left font-semibold">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {routeData.statewide_coverage_table.table_data.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.city}</td>
                      <td className="px-6 py-4 text-gray-700">{row.distance}</td>
                      <td className="px-6 py-4 text-blue-600 font-semibold">{row.cost}</td>
                      <td className="px-6 py-4 text-gray-700">{row.time}</td>
                      <td className="px-6 py-4 text-gray-700">{row.service}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section> 
      </div>
    </div>

    <FAQ
        title={`Frequently Asked Questions: Shipping to ${capitalizeFirstLetter(routeData.origin_city)}`}
        subtitle={`Common questions about ${capitalizeFirstLetter(routeData.origin_city)} to ${capitalizeFirstLetter(routeData.dest_city)} Car Shipping`}
        faqs={faqs} />

    <CommonCTA b={routeData.closing_cta.cta_button_text} s={parseContent(routeData.closing_cta.content)} p={routeData.closing_cta.heading} /></>
  )
}

export default RoutePageDesign