// Content structure interface for service pages
// Use this as a reference when creating your service content

export const serviceContentStructure = {
  // REQUIRED - Hero Section
  title: "Service Title", // Main H1 title
  subtitle: "Optional subtitle", // H2 subtitle (optional)
  description: "Hero description paragraph", // Main description
  heroImage: "/images/services/service-hero.jpg", // Hero image path
  heroImageAlt: "Alt text for hero image", // Image alt text
  
  // REQUIRED - Main Content (Your 1000+ words content)
  mainContent: `
    <h2>Main Content Title</h2>
    <p>Your detailed 1000+ word content goes here. This can include:</p>
    <ul>
      <li>Detailed service explanations</li>
      <li>Benefits and features</li>
      <li>Process descriptions</li>
      <li>Tips and best practices</li>
      <li>Industry insights</li>
    </ul>
    <h3>Subheadings</h3>
    <p>More detailed content...</p>
    <!-- Add as much content as needed -->
  `,
  
  // OPTIONAL - Benefits Section
  benefits: [
    {
      title: "Benefit Title",
      description: "Detailed benefit description",
      image: "/images/services/benefit-image.jpg" // Optional image
    }
    // Add more benefits...
  ],
  
  // OPTIONAL - Features Grid
  features: [
    {
      title: "Feature Title",
      description: "Feature description",
      icon: "HeroIcon" // Import from @heroicons/react/24/outline
    }
    // Add more features...
  ],
  
  // OPTIONAL - Process Steps
  process: [
    {
      title: "Step Title",
      description: "Step description",
      icon: "HeroIcon" // Import from @heroicons/react/24/outline
    }
    // Add more steps...
  ],
  
  // OPTIONAL - Pricing Information
  pricing: {
    startingPrice: 500, // Starting price in dollars
    priceNote: "For standard vehicles",
    included: [
      "Feature 1 included",
      "Feature 2 included",
      "Feature 3 included"
    ],
    factors: [
      "Distance affects pricing",
      "Vehicle size matters",
      "Season variations"
    ]
  },
  
  // OPTIONAL - Before/After Comparison
  beforeAfter: {
    title: "Why Choose Professional Service",
    description: "See the difference professional service makes",
    before: {
      title: "Without Our Service",
      points: [
        "Problem 1",
        "Problem 2",
        "Problem 3"
      ]
    },
    after: {
      title: "With Our Service",
      points: [
        "Solution 1",
        "Solution 2", 
        "Solution 3"
      ]
    }
  },
  
  // OPTIONAL - Customer Testimonial
  testimonial: {
    quote: "Customer testimonial quote",
    name: "Customer Name",
    title: "Customer Title/Location",
    rating: 5, // 1-5 stars
    avatar: "/images/testimonials/customer.jpg" // Optional
  },
  
  // OPTIONAL - FAQ Section
  faqs: [
    {
      question: "Frequently asked question?",
      answer: "Detailed answer to the question."
    }
    // Add more FAQs...
  ],
  
  // OPTIONAL - Related Services
  relatedServices: [
    {
      title: "Related Service Title",
      description: "Brief description",
      href: "/services/related-service",
      image: "/images/services/related.jpg"
    }
    // Add more related services...
  ],
  
  // OPTIONAL - Custom CTA
  ctaTitle: "Custom CTA Title",
  ctaDescription: "Custom CTA description",
  
  // OPTIONAL - SEO/Schema Data
  serviceType: "Auto Transport Service",
  areaServed: {
    '@type': 'Country',
    name: 'United States'
  },
  provider: {
    name: "Furious Auto Shipping",
    url: "https://furiousautoshipping.com",
    phone: "(555) 123-4567"
  }
}

// Metadata structure for Next.js
export const serviceMetadata = {
  title: "Service Title | Furious Auto Shipping",
  description: "SEO description for the service page",
  keywords: "keyword1, keyword2, keyword3",
  openGraph: {
    title: "Service Title",
    description: "OG description",
    images: ["/images/services/og-image.jpg"]
  }
}