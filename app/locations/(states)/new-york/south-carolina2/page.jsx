import React from 'react'
import Link from 'next/link'
import CommonHero from '@/components/CommonHero'
import FAQ from '@/components/FAQ';
import CommonCTA from '@/components/CommonCTA';
import Image from 'next/image';
import Script from 'next/script';

export const metadata = {
    title: 'Car Shipping from New York to South Carolina | Expert Guide',
    description: 'Need Car Shipping from New York to South Carolina? Stop guessing. Get accurate auto transport costs, direct driver service, and scam-free quotes today.',

    alternates: {
        canonical: '/locations/new-york/south-carolina',
    },
}

export default function page() {
    const faqs = [
        {
            question: "How quickly can you move inventory from an auction to my dealership?",
            answer: "We prioritize speed for dealers; most regional auction lanes (under 500 miles) are completed within 24 to 48 hours of dispatch. For cross-country moves, we typically average 3–5 days. We understand that \"days to lot\" affects your holding costs, so we pre-stage carriers at major hubs like Manheim and Adesa to ensure your vehicles move as soon as the gate pass is released."
        },
    ]



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
                "@id": "https://furiousautoshipping.com/locations/new-york/south-carolina#service",
                "name": "Car Shipping from New York to South Carolina",
                "serviceType": "Auto Transport Service",
                "provider": {
                    "@id": "https://furiousautoshipping.com/#localbusiness"
                },
                "areaServed": [
                    {
                        "@type": "AdministrativeArea",
                        "name": "New York"
                    },
                    {
                        "@type": "AdministrativeArea",
                        "name": "South Carolina"
                    }
                ],
                "description": "Secure, direct, and fully insured auto transport from New York to South Carolina. Expert logistics handling the I-95 corridor using open and enclosed carriers.",
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "url": "https://furiousautoshipping.com/locations/new-york/south-carolina"
                }
            },
            {
                "@type": "WebPage",
                "@id": "https://furiousautoshipping.com/locations/new-york/south-carolina#webpage",
                "url": "https://furiousautoshipping.com/locations/new-york/south-carolina",
                "name": "Car Shipping from New York to South Carolina: Expert Guide & Rates (2026)",
                "description": "Need Car Shipping from New York to South Carolina? Stop guessing. Get accurate auto transport costs, direct driver service, and scam-free quotes today.",
                "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://furiousautoshipping.com/#website",
                    "name": "Furious Auto Shipping",
                    "url": "https://furiousautoshipping.com/"
                },
                "about": {
                    "@id": "https://furiousautoshipping.com/locations/new-york/south-carolina#service"
                },
                "publisher": {
                    "@id": "https://furiousautoshipping.com/#organization"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://furiousautoshipping.com/locations/new-york/south-carolina#breadcrumbs",
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
                        "name": "New York",
                        "item": "https://furiousautoshipping.com/locations/new-york/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": "South Carolina",
                        "item": "https://furiousautoshipping.com/locations/new-york/south-carolina"
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
                h1="Dealer Auto Transport Services: High-Velocity Logistics for Dealerships & Auctions"
                subheading="Turn Inventory Faster. Reliable, High-Volume Shipping from Auction to Lot in 3 Days."
                img="/images/dealer-auto-transport.png"
            />


            <section className="section">
                <div className="container">

                </div>
            </section>
        </>
    )
}
