import Link from 'next/link'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { 
  HomeIcon, 
  TruckIcon, 
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Door-to-Door Auto Transport Service | Convenient Car Shipping',
  description: 'Professional door-to-door auto transport service. We pick up and deliver your vehicle at your preferred locations. No terminal visits required. Get instant quotes.',
  keywords: 'door-to-door auto transport, car shipping pickup delivery, convenient auto transport, home pickup car shipping',
  openGraph: {
    title: 'Door-to-Door Auto Transport Service | Furious Auto Shipping',
    description: 'Convenient door-to-door car shipping with pickup and delivery at your location.',
    images: ['/images/services/door-to-door-og.jpg'],
  },
  alternates: {
      canonical: '/services/door-to-door-auto-transport',
    },
}

const serviceData = {
  // Hero Section
  title: "Door-to-Door Auto Transport",
  subtitle: "Ultimate Convenience in Vehicle Shipping",
  description: "Experience hassle-free auto transport with our premium door-to-door service. We pick up your vehicle from your location and deliver it directly to your destination.",
  heroImage: "/images/Door-to-Door.png",
  heroImageAlt: "Professional door-to-door auto transport service",
  
  // Main Content - Your 1000+ Words Content
  mainContent: `
    
  `,
  
  // Benefits Section
  benefits: [
    {
      title: "Maximum Convenience",
      description: "No need to drive to terminals or arrange additional transportation. We come directly to your location.",
      image: "/images/services/convenience-benefit.jpg"
    },
    {
      title: "Time Savings",
      description: "Eliminate travel time to and from terminals. Focus on other important tasks while we handle your vehicle transport.",
      image: "/images/services/time-savings.jpg"
    },
    { 
      title: "Flexible Scheduling",
      description: "Coordinate pickup and delivery times that work with your schedule, not terminal operating hours.",
      image: "/images/services/flexible-schedule.jpg"
    },
    {
      title: "Enhanced Security",
      description: "Direct transport with fewer handling points reduces risk and provides better security for your vehicle.",
      image: "/images/services/security-benefit.jpg"
    }
  ],
  
  // Process Steps
  process: [
    {
      title: "Schedule Pickup",
      description: "We arrange pickup at your convenient location and time within the agreed window.",
      icon: MapPinIcon
    },
    {
      title: "Professional Loading",
      description: "Our experienced driver inspects and safely loads your vehicle onto the carrier.",
      icon: TruckIcon
    },
    {
      title: "Direct Delivery",
      description: "Your vehicle is delivered directly to your destination address with final inspection.",
      icon: HomeIcon
    }
  ],
  
  // Features
  features: [
    {
      title: "No Terminal Visits",
      description: "Complete service without requiring trips to shipping facilities or depots.",
      icon: HomeIcon
    },
    {
      title: "Professional Drivers",
      description: "Experienced, licensed drivers handle pickup and delivery operations.",
      icon: TruckIcon
    },
    {
      title: "Flexible Timing",
      description: "Coordinate around your schedule rather than terminal operating hours.",
      icon: ClockIcon
    },
    {
      title: "Full Insurance",
      description: "Comprehensive coverage protects your vehicle throughout the transport process.",
      icon: ShieldCheckIcon
    },
    {
      title: "Real-time Updates",
      description: "Stay informed with tracking updates and communication throughout transport.",
      icon: MapPinIcon
    },
    {
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden fees or surprise charges.",
      icon: CurrencyDollarIcon
    }
  ],
  
  // Pricing Information
  pricing: {
    startingPrice: null, // No additional cost for door-to-door
    priceNote: "Included in standard pricing",
    included: [
      "Pickup at your location",
      "Direct delivery to destination", 
      "Professional vehicle inspection",
      "Comprehensive insurance coverage",
      "Real-time tracking updates",
      "24/7 customer support"
    ],
    factors: [
      "Distance between pickup and delivery",
      "Vehicle size and weight",
      "Transport type (open vs enclosed)",
      "Seasonal demand variations",
      "Location accessibility"
    ]
  },
  
  // Before/After Comparison
  beforeAfter: {
    title: "Door-to-Door vs Terminal Service",
    description: "See why customers prefer the convenience of door-to-door service",
    before: {
      title: "Terminal-to-Terminal Service",
      points: [
        "Drive to shipping terminal for drop-off",
        "Work around terminal operating hours",
        "Additional fuel and parking costs",
        "Pick up vehicle at destination terminal",
        "Potential overnight stays if terminals are distant"
      ]
    },
    after: {
      title: "Door-to-Door Service",
      points: [
        "Pickup at your home or office",
        "Flexible scheduling around your availability",
        "No additional travel expenses",
        "Delivery directly to your destination",
        "Maximum convenience and time savings"
      ]
    }
  },
  
  // Customer Testimonial
  testimonial: {
    quote: "The door-to-door service was incredibly convenient. They picked up my car right from my driveway and delivered it to my new home across the country. I didn't have to take time off work or drive anywhere. Absolutely worth it!",
    name: "Sarah Johnson",
    title: "Denver, CO to Miami, FL",
    rating: 5
  },
  
  // FAQ Section
  faqs: [
    {
      question: "Is door-to-door service more expensive than terminal service?",
      answer: "Door-to-door service is typically included in our standard pricing at no additional cost. When you factor in the time and money saved by not traveling to terminals, it often provides better value than terminal-to-terminal service."
    },
    {
      question: "Can the truck access my residential street?",
      answer: "Our carriers can navigate most residential areas. However, very narrow streets, low-hanging branches, or steep driveways may require meeting at a nearby accessible location. We'll discuss any access concerns when booking your shipment."
    },
    {
      question: "What if I'm not available during the pickup window?",
      answer: "You or an authorized representative (18+) must be present for pickup and delivery. We recommend arranging for someone to be available during the agreed timeframe to ensure smooth operations."
    },
    {
      question: "How much space does the carrier truck need?",
      answer: "Transport trucks are typically 75-80 feet long and need adequate space for maneuvering. A standard residential street with normal parking usually provides sufficient access."
    },
    {
      question: "Can you deliver to apartment complexes or condos?",
      answer: "Yes, we regularly deliver to apartments and condos. Some complexes may have specific delivery requirements or time restrictions that we'll coordinate with you in advance."
    }
  ],
  
  // Related Services
  relatedServices: [
    {
      title: "Enclosed Transport",
      description: "Premium protection for luxury and classic vehicles with covered trailers.",
      href: "/services/enclosed-auto-transport",
      image: "/images/Enclosed-Transport.png"
    },
    {
      title: "Expedited Shipping",
      description: "Fast-track service for urgent deliveries with priority scheduling.",
      href: "/services/expedited-auto-transport", 
      image: "/images/Expedited-shipping.png"
    },
    {
      title: "Open Transport",
      description: "Cost-effective standard transport using open car carriers.",
      href: "/services/open-auto-transport",
      image: "/images/Open-Transport.png"
    }
  ],
  
  // Custom CTA
  ctaTitle: "Experience Door-to-Door Convenience",
  ctaDescription: "Join thousands of satisfied customers who choose our convenient door-to-door auto transport service. Get your free quote today and see why convenience matters.",
  
  // Schema Data
  serviceType: "Door-to-Door Auto Transport Service",
  areaServed: {
    '@type': 'Country',
    name: 'United States'
  }
}

export default function DoorToDoorPage() {
  return <ServicePageTemplate serviceData={serviceData} />
}