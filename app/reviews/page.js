import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Customer Reviews | Furious Auto Shipping Testimonials',
  description: 'Read real customer reviews and testimonials for Furious Auto Shipping. See why thousands of customers trust us for their auto transport needs.',
  keywords: 'auto transport reviews, car shipping testimonials, customer feedback, auto transport ratings',
    alternates: {
      canonical: `/reviews`,
    },
}

const overallRating = {
  average: 4.9,
  totalReviews: 2847,
  distribution: [
    { stars: 5, count: 2456, percentage: 86.3 },
    { stars: 4, count: 298, percentage: 10.5 },
    { stars: 3, count: 67, percentage: 2.4 },
    { stars: 2, count: 15, percentage: 0.5 },
    { stars: 1, count: 11, percentage: 0.4 },
  ]
}

const featuredReviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Denver, CO to Miami, FL',
    rating: 5,
    date: '2024-01-15',
    title: 'Exceptional service from start to finish',
    review: 'I was nervous about shipping my car across the country, but Furious Auto Shipping made the process incredibly smooth. The quote was competitive, pickup was on time, and my car arrived in perfect condition. The driver was professional and kept me updated throughout the journey. Highly recommended!',
    vehicle: '2021 Honda Accord',
    service: 'Open Transport',
    verified: true,
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Los Angeles, CA to Austin, TX',
    rating: 5,
    date: '2024-01-10',
    title: 'Fast and reliable enclosed transport',
    review: 'Shipped my classic Mustang with their enclosed service. The extra cost was worth every penny for the peace of mind. The car was picked up and delivered exactly when promised, and arrived without a single scratch. The team was professional and clearly experienced with valuable vehicles.',
    vehicle: '1967 Ford Mustang',
    service: 'Enclosed Transport',
    verified: true,
  },
  {
    id: 3,
    name: 'Jennifer Davis',
    location: 'Chicago, IL to Phoenix, AZ',
    rating: 5,
    date: '2024-01-08',
    title: 'Great communication and fair pricing',
    review: 'What impressed me most was the constant communication. I always knew where my car was and when to expect delivery. The price was very reasonable compared to other companies, and there were no hidden fees. The whole experience was stress-free.',
    vehicle: '2020 Toyota Camry',
    service: 'Door-to-Door',
    verified: true,
  },
  {
    id: 4,
    name: 'Robert Martinez',
    location: 'New York, NY to Tampa, FL',
    rating: 5,
    date: '2024-01-05',
    title: 'Expedited service when I needed it most',
    review: 'I had to relocate for work on short notice and needed my car shipped quickly. Their expedited service was a lifesaver! Even with the rush, they handled everything professionally and my car arrived 2 days early. Worth every penny for the peace of mind.',
    vehicle: '2022 BMW X5',
    service: 'Expedited',
    verified: true,
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    location: 'Seattle, WA to Orlando, FL',
    rating: 4,
    date: '2024-01-03',
    title: 'Good service with minor delay',
    review: 'Overall very satisfied with the service. There was a slight delay in pickup due to weather, but they kept me informed and compensated with a small discount. The car arrived in excellent condition and the driver was very courteous.',
    vehicle: '2019 Subaru Outback',
    service: 'Open Transport',
    verified: true,
  },
  {
    id: 6,
    name: 'David Wilson',
    location: 'Boston, MA to San Diego, CA',
    rating: 5,
    date: '2023-12-28',
    title: 'Snowbird service was perfect',
    review: 'We use Furious Auto Shipping every year for our snowbird migration, and they never disappoint. They understand our seasonal needs and always provide competitive rates for the popular routes. This was our 3rd year with them and we\'ll definitely be back.',
    vehicle: '2020 Lexus RX',
    service: 'Snowbird Service',
    verified: true,
  },
]

const platforms = [
  { name: 'Google Reviews', rating: 4.9, reviews: 1847, logo: '/images/reviews/google.png' },
  { name: 'Trustpilot', rating: 4.8, reviews: 623, logo: '/images/reviews/trustpilot.png' },
  { name: 'BBB', rating: 'A+', reviews: 234, logo: '/images/reviews/bbb.png' },
  { name: 'Yelp', rating: 4.7, reviews: 143, logo: '/images/reviews/yelp.png' },
]

function StarRating({ rating, size = 'w-5 h-5' }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star}>
          {star <= rating ? (
            <StarIcon className={`${size} text-yellow-400`} />
          ) : (
            <StarOutlineIcon className={`${size} text-gray-300`} />
          )}
        </div>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Customer Reviews & Testimonials</h1>
            <p className="text-xl leading-relaxed mb-8">
              See what our customers say about their auto transport experience. 
              Real reviews from real customers who trust us with their vehicles.
            </p>
            
            {/* Overall Rating */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center space-x-6">
                <div className="text-center">
                  <div className="text-4xl font-bold">{overallRating.average}</div>
                  <StarRating rating={Math.floor(overallRating.average)} size="w-6 h-6" />
                  <div className="text-sm opacity-90 mt-1">
                    Based on {overallRating.totalReviews.toLocaleString()} reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Distribution */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-8">Rating Breakdown</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-4">
                {overallRating.distribution.map((item) => (
                  <div key={item.stars} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 w-16">
                      <span className="text-sm font-medium">{item.stars}</span>
                      <StarIcon className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-yellow-400 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <div className="text-sm text-gray-600 w-16 text-right">
                      {item.percentage}%
                    </div>
                    <div className="text-sm text-gray-500 w-16 text-right">
                      ({item.count})
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Trusted Across Platforms</h2>
            <p className="text-xl text-gray-600">
              Our excellent ratings span across multiple review platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <div key={platform.name} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="mb-4">
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="h-12 mx-auto"
                  />
                </div>
                <h3 className="font-semibold mb-2">{platform.name}</h3>
                <div className="text-2xl font-bold text-brand-600 mb-1">
                  {platform.rating}
                </div>
                <div className="text-sm text-gray-500">
                  {platform.reviews.toLocaleString()} reviews
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">
              Real experiences from customers who chose Furious Auto Shipping.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-lg">{review.name}</h3>
                      {review.verified && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500 mb-2">{review.location}</div>
                    <StarRating rating={review.rating} />
                  </div>
                  <div className="text-sm text-gray-400">
                    {new Date(review.date).toLocaleDateString()}
                  </div>
                </div>
                
                <h4 className="font-semibold mb-3">{review.title}</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">{review.review}</p>
                
                <div className="border-t pt-4 text-sm text-gray-500">
                  <div className="flex justify-between">
                    <span>Vehicle: {review.vehicle}</span>
                    <span>Service: {review.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="#all-reviews"
              className="btn-outline btn-lg"
            >
              View All Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Review Stats */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Customers Choose Us</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-600 mb-2">98%</div>
              <div className="font-medium mb-1">On-Time Delivery</div>
              <div className="text-sm text-gray-600">Vehicles delivered as promised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-600 mb-2">99.2%</div>
              <div className="font-medium mb-1">Damage-Free Transport</div>
              <div className="text-sm text-gray-600">Vehicles arrive in perfect condition</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-600 mb-2">4.9/5</div>
              <div className="font-medium mb-1">Customer Satisfaction</div>
              <div className="text-sm text-gray-600">Average rating across all platforms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-600 mb-2">94%</div>
              <div className="font-medium mb-1">Repeat Customers</div>
              <div className="text-sm text-gray-600">Would use our service again</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="section bg-brand-600 text-white">
        <div className="container text-center">
          <h2 className="heading-2 mb-4">Share Your Experience</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have you shipped with us? We'd love to hear about your experience. 
            Your feedback helps us improve and helps other customers make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://g.page/r/CfuriousautoshippingReview"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-lg"
            >
              Leave Google Review
            </a>
            <a
              href="/get-quote"
              className="btn-outline btn-lg border-white text-white hover:bg-white hover:text-brand-600"
            >
              Get Your Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}