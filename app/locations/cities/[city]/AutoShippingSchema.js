import Script from 'next/script';

// Dynamic Schema Component for Auto Shipping
export default function AutoShippingSchema({ city, state, latitude, longitude, neighborhoods }) {
  // Dynamic schema data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Your Auto Shipping Company',
    description: `Reliable and affordable auto shipping services to ${city}, ${state}. Offering door-to-door car transport with open and enclosed options.`,
    url: `https://yourdomain.com/locations/cities/${city.toLowerCase().replace(/\s+/g, '-')}`,
    telephone: '+1-800-123-4567', // Replace with your actual phone number
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: state,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: latitude,
      longitude: longitude,
    },
    areaServed: [
      {
        '@type': 'City',
        name: city,
        address: {
          '@type': 'PostalAddress',
          addressLocality: city,
          addressRegion: state,
          addressCountry: 'US',
        },
      },
      ...neighborhoods.map((neighborhood) => ({
        '@type': 'Place',
        name: neighborhood,
      })),
    ],
    offers: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: `Auto Shipping to ${city}`,
        serviceType: 'Car Transport',
        description: `Professional auto shipping to ${city}, ${state} with door-to-door delivery, open and enclosed transport options, and real-time tracking.`,
        provider: {
          '@type': 'LocalBusiness',
          name: 'Your Auto Shipping Company',
        },
        areaServed: {
          '@type': 'City',
          name: city,
        },
        priceRange: '$$', // Adjust based on your pricing (e.g., $800–$1500)
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8', // Replace with your actual rating
      reviewCount: '500', // Replace with your actual review count
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://www.yourdomain.com', // Replace with your social profiles or website
      'https://www.bbb.org/your-profile', // Replace with BBB profile if applicable
    ],
  };

  return (
    <Script
      id={`schema-${city.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}