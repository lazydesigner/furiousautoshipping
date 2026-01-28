import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Services from '@/components/home/Services'
import HowItWorks from '@/components/home/HowItWorks'
import Testimonials from '@/components/home/Testimonials'
import TrustBadges from '@/components/home/TrustBadges'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'
import TransportSolutions from '@/components/home/TransportSolutions'
import PopularRoutes from '@/components/home/PopularRoutes'
import Link from 'next/link'
import Script from "next/script";

import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Nationwide Auto Transport & Car Shipping Services | Furious',
  description: 'Rated #1 for nationwide auto transport. We ship any vehicle door-to-door in all 50 states. FMCSA Licensed & Bonded. Get your free instant quote today!',
  keywords: 'Nationwide auto transport, car shipping Services, vehicle transport, door-to-door car shipping, enclosed transport, open transport, auto shipping quotes',
  openGraph: {
    title: 'Nationwide Auto Transport & Car Shipping Services | Furious',
    description: 'Rated #1 for nationwide auto transport. We ship any vehicle door-to-door in all 50 states. FMCSA Licensed & Bonded. Get your free instant quote today!.',
    images: ['/images/hero-bg.webp'],
  },
}

const routes = [
  {
    origin: "Texas",
    destination: "California",
    distance: "~1,400 mi",
    transit: "3 - 5 Days",
    openCarrier: "$950 - $1,200",
    enclosedCarrier: "$1,450 - $1,750"
  },
  {
    origin: "Florida",
    destination: "New York",
    distance: "~1,150 mi",
    transit: "3 - 4 Days",
    openCarrier: "$900 - $1,150",
    enclosedCarrier: "$1,300 - $1,600"
  },
  {
    origin: "California",
    destination: "Texas",
    distance: "~1,400 mi",
    transit: "3 - 5 Days",
    openCarrier: "$1,050 - $1,300",
    enclosedCarrier: "$1,550 - $1,850"
  },
  {
    origin: "New York",
    destination: "Florida",
    distance: "~1,150 mi",
    transit: "3 - 4 Days",
    openCarrier: "$950 - $1,250",
    enclosedCarrier: "$1,400 - $1,700"
  },
  {
    origin: "Texas",
    destination: "Florida",
    distance: "~1,100 mi",
    transit: "2 - 4 Days",
    openCarrier: "$850 - $1,100",
    enclosedCarrier: "$1,250 - $1,550"
  },
  {
    origin: "California",
    destination: "New York",
    distance: "~2,800 mi",
    transit: "7 - 10 Days",
    openCarrier: "$1,400 - $1,800",
    enclosedCarrier: "$2,100 - $2,600"
  },
  {
    origin: "Chicago",
    destination: "Los Angeles",
    distance: "~2,000 mi",
    transit: "5 - 7 Days",
    openCarrier: "$1,200 - $1,500",
    enclosedCarrier: "$1,700 - $2,100"
  }
];



const business = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Furious Auto Shipping',
  description: 'Professional auto transport services across the USA',
  url: process.env.NEXT_PUBLIC_SITE_URL,
  telephone: process.env.NEXT_PUBLIC_COMPANY_PHONE,
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  serviceArea: {
    '@type': 'Country',
    name: 'United States',
  },
  priceRange: '$$',
  openingHours: 'Mo-Fr 08:00-18:00',
  sameAs: [
    'https://www.facebook.com/furiousautoshipping',
    'https://www.instagram.com/furiousautoshipping',
    'https://twitter.com/furiousauto',
  ],
}

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Furious Auto Shipping",
  "url": "https://furiousautoshipping.com",
  "logo": "https://furiousautoshipping.com/logo.png",
  "foundingDate": "2015",
  "description": "A nationwide auto transport logistics network specializing in door-to-door vehicle shipping.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-555-0199",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com/furiousautoshipping",
    "https://www.linkedin.com/company/furiousautoshipping",
    "https://www.bbb.org/us/tx/furious-auto-shipping",
    "https://www.transportreviews.com/company/furious-auto-shipping"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250",
    "bestRating": "5",
    "worstRating": "1"
  }
} 

export default function HomePage() {


  return (
    <>
    <Script
            id="schema-localbusiness"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
          />
    
          <Script
            id="schema-organization"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
          /> 
      <Hero />
      <TrustBadges />
      <TransportSolutions />
      <PopularRoutes />
      <section className="py-8 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-blue-900">Note:</span> All prices and transit times shown are estimates based on current market conditions. 
            Final quotes may vary depending on vehicle specifications, seasonal demand, fuel costs, and specific pickup/delivery locations. 
            Contact us for an accurate, personalized quote.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Route (Origin → Destination)
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Distance
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Est. Transit
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Open Carrier
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Enclosed Carrier
                </th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{route.origin}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                      <span className="font-medium text-gray-900">{route.destination}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">{route.distance}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{route.transit}</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{route.openCarrier}</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{route.enclosedCarrier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </section>
      <Services />
      <HowItWorks />
      <Testimonials />
      <section className="py-16 px-4 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-left md:text-center text-gray-900 mb-12">
            The Mechanics of Nationwide Vehicle Shipping: How We Move America
          </h2>

          <h3 className="text-xl font-semibold mb-4">A Logistics Network Built for Reliability</h3>
          <p className="text-gray-600 mb-8">
            Shipping a vehicle across state lines requires more than just a truck and a trailer; it demands a sophisticated logistics network capable of navigating the complexities of America's highways. At Furious Auto Shipping, we have moved beyond the standard broker model to build a data-driven dispatch system. By vetting over 15,000 carriers against strict FMCSA (Federal Motor Carrier Safety Administration) safety standards, we ensure that every vehicle—from a family sedan to a rare exotic—is handled by a driver with a proven track record of safety and punctuality. Our network covers all 50 states, ensuring consistent capacity on high-volume routes like <Link href="/locations/texas/california" className='font-bold text-brand-700'>Texas to California</Link> as well as difficult-to-reach rural corridors.
          </p>

          <h3 className="text-xl font-semibold mb-4">Transparent Pricing Without the Guesswork</h3>
          <p className="text-gray-600 mb-8">
            One of the biggest frustrations in the auto transport industry is the "bait-and-switch" quote. We operate differently. Our pricing model utilizes real-time market data, analyzing fuel costs (diesel averages), lane demand, and seasonal carrier availability to generate accurate, transparent quotes. Whether you are shipping a standard SUV via <Link href="/services/open-auto-transport" className='font-bold text-brand-700'>Open Transport</Link> or a luxury vehicle via <Link href="/services/enclosed-auto-transport" className='font-bold text-brand-700'>Enclosed Carrier</Link>, the price you receive reflects the reality of the road. This commitment to honest pricing eliminates surprise surcharges and ensures your vehicle moves on schedule, not sitting at a terminal waiting for a lower bidder.
          </p>


          <h3 className="text-xl font-semibold mb-4">Door-to-Door Service: The Industry Standard</h3>
          <p className="text-gray-600 mb-8">We specialize in true <Link href="/services/door-to-door-auto-transport" className='font-bold text-brand-700'>Door-to-Door Auto Transport</Link>. Unlike terminal-to-terminal shipping, which requires you to drop off your car at a remote storage lot, our carriers get as close to your specified address as legally and physically possible. We navigate local restrictions—from the narrow streets of New York City to the gated communities of Florida—to make the handover process seamless. If a 75-foot transport truck cannot fit on your street, our dispatch team coordinates safe, nearby meetup points (such as large retail parking lots) to ensure convenience without compromising safety.</p>




          <h3 className="text-xl font-semibold mb-4">Uncompromising Safety and Insurance Standards</h3>
          <p className="text-gray-600 mb-8">Your vehicle is a significant asset, and we treat it as such. Every shipment booked through <Link href='' className='font-bold text-brand-700'>Furious Auto Shipping</Link> is protected by the carrier’s cargo insurance policy, which we verify prior to dispatch. From the moment your vehicle is inspected and loaded onto the trailer until it is signed for at delivery, it is covered against external damage. Our "Damage-Free Guarantee" protocol requires a detailed Bill of Lading (inspection report) at both pickup and delivery, providing you with a documented chain of custody and total peace of mind.</p>




          <h3 className="text-xl font-semibold mb-4">Serving Every Customer Profile</h3>
          <p className="text-gray-600 mb-8">Our logistics solutions are tailored to meet diverse needs. We manage Corporate Relocations for professionals moving for work, ensuring their vehicles arrive before their first day in the office. We support Military PCS moves with logistics planning that aligns with strict government timelines. For Dealerships and Auctions, we offer bulk transport capabilities that streamline inventory management. No matter the vehicle, the route, or the timeline, Furious Auto Shipping delivers a professional, stress-free logistics experience.</p>



        </div>
      </section>
      <FAQ />
      <CTA />
    </>
  )
}