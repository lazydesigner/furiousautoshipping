import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { CalendarIcon, ClockIcon, TagIcon, UserIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

// In a real app, this would come from your CMS or database
const blogPosts = {
  'complete-guide-auto-transport': {
    title: 'Complete Guide to Auto Transport: Everything You Need to Know',
    excerpt: 'Planning to ship your car? This comprehensive guide covers everything from choosing the right service to preparing your vehicle for transport.',
    content: `
      <p>Auto transport can seem overwhelming when you're doing it for the first time. With so many options, companies, and considerations, it's easy to feel lost. This comprehensive guide will walk you through everything you need to know about shipping your vehicle safely and affordably.</p>

      <h2>Understanding Auto Transport Services</h2>
      <p>Auto transport is the process of shipping vehicles from one location to another using specialized car carriers. Whether you're relocating, buying a car from another state, or sending a vehicle to a family member, auto transport provides a safe and convenient solution.</p>

      <h3>Types of Auto Transport</h3>
      <p>There are several types of auto transport services available, each suited for different needs and budgets:</p>
      
      <h4>Open Transport</h4>
      <p>Open transport is the most popular and economical option. Your vehicle is loaded onto an open-air trailer along with other cars. This method is used to ship millions of vehicles annually, including new cars from manufacturers to dealerships.</p>
      
      <h4>Enclosed Transport</h4>
      <p>Enclosed transport provides premium protection by shipping your vehicle in a covered trailer. This option is ideal for luxury, classic, or high-value vehicles that need protection from weather and road debris.</p>
      
      <h4>Door-to-Door vs Terminal-to-Terminal</h4>
      <p>Door-to-door service offers maximum convenience by picking up and delivering your vehicle at your specified locations. Terminal-to-terminal service requires you to drop off and pick up your vehicle at designated locations but costs less.</p>

      <h2>How to Choose the Right Service</h2>
      <p>Selecting the right auto transport service depends on several factors:</p>
      
      <ul>
        <li><strong>Vehicle Value:</strong> High-value vehicles typically benefit from enclosed transport</li>
        <li><strong>Budget:</strong> Open transport offers the best value for most situations</li>
        <li><strong>Timeline:</strong> Expedited services are available for urgent needs</li>
        <li><strong>Convenience:</strong> Door-to-door provides maximum convenience</li>
      </ul>

      <h2>Preparing Your Vehicle for Transport</h2>
      <p>Proper preparation ensures a smooth transport experience:</p>
      
      <h3>Before Pickup</h3>
      <ul>
        <li>Clean your vehicle inside and out</li>
        <li>Remove all personal items</li>
        <li>Ensure the gas tank is 1/4 full or less</li>
        <li>Disable car alarms</li>
        <li>Document existing damage with photos</li>
        <li>Remove or secure loose parts</li>
      </ul>

      <h3>Required Documentation</h3>
      <p>Have these documents ready for pickup:</p>
      <ul>
        <li>Vehicle registration</li>
        <li>Proof of insurance</li>
        <li>Driver's license</li>
        <li>Any financing documents if applicable</li>
      </ul>

      <h2>Understanding Pricing</h2>
      <p>Auto transport pricing depends on several factors:</p>
      
      <h3>Distance and Route</h3>
      <p>Longer distances cost more, but the per-mile rate decreases for longer trips. Popular routes often have better pricing due to higher carrier availability.</p>
      
      <h3>Vehicle Size and Weight</h3>
      <p>Larger and heavier vehicles take up more space and weight on the carrier, resulting in higher costs.</p>
      
      <h3>Seasonal Factors</h3>
      <p>Summer months typically see higher demand and prices. Winter weather can also affect pricing and timing in certain regions.</p>
      
      <h3>Service Type</h3>
      <p>Enclosed transport costs 40-60% more than open transport. Expedited services add $200-400 to the base price.</p>

      <h2>What to Expect During Transport</h2>
      <h3>Pickup Process</h3>
      <p>The driver will arrive within the scheduled window, inspect your vehicle, and provide a bill of lading detailing the vehicle's condition. You'll receive contact information for tracking purposes.</p>
      
      <h3>During Transit</h3>
      <p>Your vehicle will be secured on the carrier and transported according to the agreed timeline. Most carriers provide tracking updates, and you can contact the driver for status updates.</p>
      
      <h3>Delivery</h3>
      <p>Upon delivery, inspect your vehicle carefully before signing the bill of lading. Note any damage immediately and take photos if necessary.</p>

      <h2>Insurance and Protection</h2>
      <p>All legitimate auto transport companies are required to carry cargo insurance. This insurance covers your vehicle during loading, transport, and unloading. Coverage typically ranges from $100,000 to $1,000,000 depending on the carrier.</p>
      
      <h3>Filing a Claim</h3>
      <p>If damage occurs during transport:</p>
      <ul>
        <li>Document the damage immediately upon delivery</li>
        <li>Take detailed photos</li>
        <li>Note the damage on the bill of lading</li>
        <li>Contact the transport company within 24 hours</li>
        <li>File a formal claim with supporting documentation</li>
      </ul>

      <h2>Tips for a Successful Transport</h2>
      <h3>Book in Advance</h3>
      <p>Booking 1-2 weeks ahead ensures better availability and pricing, especially during peak seasons.</p>
      
      <h3>Be Flexible with Dates</h3>
      <p>Providing flexible pickup and delivery windows can reduce costs and improve carrier availability.</p>
      
      <h3>Research Your Company</h3>
      <p>Verify the company is properly licensed, insured, and has good customer reviews. Check their USDOT number and safety record.</p>
      
      <h3>Read the Contract</h3>
      <p>Understand all terms, including cancellation policies, insurance coverage, and payment requirements before signing.</p>

      <h2>Red Flags to Avoid</h2>
      <p>Be cautious of companies that:</p>
      <ul>
        <li>Require large upfront payments</li>
        <li>Don't have proper licensing</li>
        <li>Provide quotes significantly lower than others</li>
        <li>Lack physical address or phone number</li>
        <li>Have numerous negative reviews</li>
        <li>Pressure you to sign immediately</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Auto transport is a safe and reliable way to ship your vehicle when you choose a reputable company and understand the process. By following this guide, you'll be well-prepared to make informed decisions and ensure a successful transport experience.</p>
      
      <p>Remember, the cheapest option isn't always the best. Focus on value, reliability, and customer service when selecting your auto transport provider. With proper preparation and the right company, your vehicle will arrive safely at its destination.</p>
    `,
    author: 'Sarah Williams',
    authorBio: 'Sarah is a logistics expert with over 10 years of experience in the auto transport industry.',
    publishedAt: '2024-01-15',
    readTime: '12 min read',
    category: 'Guides',
    tags: ['Auto Transport', 'Car Shipping', 'Beginner Guide', 'Vehicle Preparation'],
    featuredImage: '/images/blog/complete-guide-hero.jpg',
    relatedPosts: ['open-vs-enclosed-auto-transport', 'prepare-car-for-transport', 'auto-transport-insurance-guide']
  },
  'open-vs-enclosed-auto-transport': {
    title: 'Open vs Enclosed Auto Transport: Which Should You Choose?',
    excerpt: 'Deciding between open and enclosed transport? Learn the pros and cons of each option to make the best choice for your vehicle.',
    content: `
      <p>One of the most important decisions when shipping your vehicle is choosing between open and enclosed auto transport. Each option has distinct advantages and is suited for different types of vehicles and situations.</p>

      <h2>Open Auto Transport</h2>
      <p>Open transport is the most common method of vehicle shipping, accounting for about 90% of all auto transport. Your car is loaded onto an open-air trailer along with other vehicles.</p>

      <h3>Advantages of Open Transport</h3>
      <ul>
        <li><strong>Cost-Effective:</strong> Significantly less expensive than enclosed transport</li>
        <li><strong>Wide Availability:</strong> More carriers and frequent departures</li>
        <li><strong>Faster Booking:</strong> Easier to find available carriers</li>
        <li><strong>Proven Safety:</strong> Used for millions of vehicles annually</li>
      </ul>

      <h3>Disadvantages of Open Transport</h3>
      <ul>
        <li><strong>Weather Exposure:</strong> Vehicle exposed to rain, snow, and sun</li>
        <li><strong>Road Debris:</strong> Potential exposure to dust, dirt, and small debris</li>
        <li><strong>Visibility:</strong> Your vehicle is visible to other drivers</li>
      </ul>

      <h2>Enclosed Auto Transport</h2>
      <p>Enclosed transport provides premium protection by shipping your vehicle inside a covered trailer, protecting it from weather and road conditions.</p>

      <h3>Advantages of Enclosed Transport</h3>
      <ul>
        <li><strong>Complete Protection:</strong> Full coverage from weather and debris</li>
        <li><strong>Enhanced Security:</strong> Vehicles are not visible from outside</li>
        <li><strong>Climate Control:</strong> Some trailers offer temperature control</li>
        <li><strong>Lower Capacity:</strong> Fewer vehicles per trailer means more careful handling</li>
      </ul>

      <h3>Disadvantages of Enclosed Transport</h3>
      <ul>
        <li><strong>Higher Cost:</strong> 40-60% more expensive than open transport</li>
        <li><strong>Limited Availability:</strong> Fewer carriers offer this service</li>
        <li><strong>Longer Booking Time:</strong> May take longer to find available carriers</li>
      </ul>

      <h2>Which Option Should You Choose?</h2>

      <h3>Choose Open Transport If:</h3>
      <ul>
        <li>Your vehicle is worth less than $50,000</li>
        <li>You want the most cost-effective option</li>
        <li>You need faster booking and availability</li>
        <li>Your vehicle is a daily driver in good condition</li>
        <li>You're shipping during favorable weather conditions</li>
      </ul>

      <h3>Choose Enclosed Transport If:</h3>
      <ul>
        <li>Your vehicle is worth more than $50,000</li>
        <li>You own a classic, vintage, or exotic car</li>
        <li>Your vehicle has custom modifications</li>
        <li>You want maximum protection regardless of cost</li>
        <li>Your vehicle has sentimental value beyond its monetary worth</li>
      </ul>

      <h2>Cost Comparison</h2>
      <p>To help you understand the cost difference, here are typical price ranges:</p>

      <h3>Coast-to-Coast (2,500+ miles)</h3>
      <ul>
        <li>Open Transport: $1,200 - $1,800</li>
        <li>Enclosed Transport: $1,800 - $2,800</li>
      </ul>

      <h3>Regional (1,000 miles)</h3>
      <ul>
        <li>Open Transport: $700 - $1,200</li>
        <li>Enclosed Transport: $1,100 - $1,800</li>
      </ul>

      <h2>Making Your Decision</h2>
      <p>Consider these factors when making your choice:</p>

      <h3>Vehicle Value and Type</h3>
      <p>The value and type of your vehicle should be the primary factor. Expensive, rare, or sentimental vehicles warrant the extra protection of enclosed transport.</p>

      <h3>Budget Considerations</h3>
      <p>If budget is a primary concern and your vehicle doesn't require special protection, open transport provides excellent value and safety.</p>

      <h3>Peace of Mind</h3>
      <p>Sometimes the peace of mind that comes with enclosed transport is worth the additional cost, regardless of your vehicle's value.</p>

      <h2>Conclusion</h2>
      <p>Both open and enclosed transport are safe, reliable options. Your choice should depend on your vehicle's value, your budget, and your personal preferences. Remember that millions of vehicles are safely transported via open carriers every year, but enclosed transport provides that extra layer of protection for special vehicles.</p>
    `,
    author: 'Mike Johnson',
    authorBio: 'Mike has been in the auto transport industry for 15 years and specializes in luxury vehicle shipping.',
    publishedAt: '2024-01-12',
    readTime: '8 min read',
    category: 'Comparison',
    tags: ['Open Transport', 'Enclosed Transport', 'Vehicle Safety', 'Transport Options'],
    featuredImage: '/images/blog/open-vs-enclosed.jpg',
    relatedPosts: ['complete-guide-auto-transport', 'classic-car-transport-guide', 'auto-transport-insurance-guide']
  }
}

export async function generateMetadata({ params }) {
  const post = blogPosts[params.slug]
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: `${post.title} | Furious Auto Shipping Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  }
}

export default function BlogPostPage({ params }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="pt-20">
      <article className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="heading-1 mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <UserIcon className="h-4 w-4" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-4 w-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="relative h-64 md:h-96 mb-8">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-2 mb-4">
              <TagIcon className="h-5 w-5 text-gray-400" />
              <span className="font-medium text-gray-700">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-gray-100 hover:bg-brand-100 text-gray-700 hover:text-brand-700 px-3 py-1 rounded-full text-sm transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">About the Author</h3>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">{post.author}</h4>
                  <p className="text-gray-600 text-sm">{post.authorBio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {post.relatedPosts.slice(0, 2).map((relatedSlug) => {
                  const relatedPost = blogPosts[relatedSlug]
                  if (!relatedPost) return null
                  
                  return (
                    <Link
                      key={relatedSlug}
                      href={`/blog/${relatedSlug}`}
                      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold mb-2 hover:text-brand-600 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{relatedPost.excerpt}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-brand-50 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Ready to Ship Your Vehicle?</h3>
              <p className="text-gray-600 mb-6">
                Get an instant quote for professional auto transport services.
              </p>
              <Link
                href="/get-quote"
                className="btn-primary btn-lg"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}