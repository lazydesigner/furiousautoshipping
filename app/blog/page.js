import Link from 'next/link'
import Image from 'next/image'
import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Auto Transport Blog | Car Shipping Tips & Industry News',
  description: 'Expert advice on auto transport, car shipping tips, industry news, and guides to help you ship your vehicle safely and affordably.',
  keywords: 'auto transport blog, car shipping tips, vehicle transport guides, auto shipping news',
}

// In a real app, this would come from your CMS or database
const featuredPost = {
  id: 1,
  title: 'Complete Guide to Auto Transport: Everything You Need to Know',
  excerpt: 'Planning to ship your car? This comprehensive guide covers everything from choosing the right service to preparing your vehicle for transport.',
  content: 'Auto transport can seem overwhelming, but with the right information...',
  author: 'Sarah Williams',
  publishedAt: '2024-01-15',
  readTime: '8 min read',
  category: 'Guides',
  tags: ['Auto Transport', 'Car Shipping', 'Beginner Guide'],
  featuredImage: '/images/blog/complete-guide-auto-transport.jpg',
  slug: 'complete-guide-auto-transport',
}

const blogPosts = [
  {
    id: 2,
    title: 'Open vs Enclosed Auto Transport: Which Should You Choose?',
    excerpt: 'Deciding between open and enclosed transport? Learn the pros and cons of each option to make the best choice for your vehicle.',
    author: 'Mike Johnson',
    publishedAt: '2024-01-12',
    readTime: '5 min read',
    category: 'Comparison',
    tags: ['Open Transport', 'Enclosed Transport', 'Vehicle Safety'],
    featuredImage: '/images/blog/open-vs-enclosed.jpg',
    slug: 'open-vs-enclosed-auto-transport',
  },
  {
    id: 3,
    title: 'How to Prepare Your Car for Auto Transport',
    excerpt: 'Essential steps to prepare your vehicle for shipping, including what to remove, cleaning tips, and documentation needed.',
    author: 'David Chen',
    publishedAt: '2024-01-10',
    readTime: '6 min read',
    category: 'Tips',
    tags: ['Car Preparation', 'Shipping Tips', 'Vehicle Care'],
    featuredImage: '/images/blog/prepare-car-transport.jpg',
    slug: 'prepare-car-for-transport',
  },
  {
    id: 4,
    title: 'Auto Transport Insurance: What You Need to Know',
    excerpt: 'Understanding insurance coverage during auto transport, what\'s included, and when you might need additional protection.',
    author: 'Jennifer Davis',
    publishedAt: '2024-01-08',
    readTime: '7 min read',
    category: 'Insurance',
    tags: ['Insurance', 'Protection', 'Coverage'],
    featuredImage: '/images/blog/auto-transport-insurance.jpg',
    slug: 'auto-transport-insurance-guide',
  },
  {
    id: 5,
    title: 'Best Times to Ship Your Car: Seasonal Considerations',
    excerpt: 'Learn about seasonal factors that affect auto transport pricing and availability, plus tips for optimal shipping times.',
    author: 'Robert Martinez',
    publishedAt: '2024-01-05',
    readTime: '4 min read',
    category: 'Seasonal',
    tags: ['Seasonal Shipping', 'Pricing', 'Timing'],
    featuredImage: '/images/blog/best-times-ship-car.jpg',
    slug: 'best-times-ship-car',
  },
  {
    id: 6,
    title: 'Military Auto Transport: Special Discounts and Services',
    excerpt: 'Comprehensive guide for military personnel shipping vehicles, including available discounts and specialized services.',
    author: 'Lisa Thompson',
    publishedAt: '2024-01-03',
    readTime: '6 min read',
    category: 'Military',
    tags: ['Military Discount', 'Special Services', 'PCS Moves'],
    featuredImage: '/images/blog/military-auto-transport.jpg',
    slug: 'military-auto-transport-guide',
  },
  {
    id: 7,
    title: 'Classic Car Transport: Protecting Your Investment',
    excerpt: 'Special considerations for shipping classic and vintage vehicles, including enclosed transport and handling requirements.',
    author: 'Sarah Williams',
    publishedAt: '2024-01-01',
    readTime: '8 min read',
    category: 'Classic Cars',
    tags: ['Classic Cars', 'Vintage Vehicles', 'Enclosed Transport'],
    featuredImage: '/images/blog/classic-car-transport.jpg',
    slug: 'classic-car-transport-guide',
  },
]

const categories = [
  { name: 'All Posts', count: 24, slug: 'all' },
  { name: 'Guides', count: 8, slug: 'guides' },
  { name: 'Tips', count: 6, slug: 'tips' },
  { name: 'Industry News', count: 4, slug: 'news' },
  { name: 'Comparison', count: 3, slug: 'comparison' },
  { name: 'Insurance', count: 2, slug: 'insurance' },
  { name: 'Military', count: 1, slug: 'military' },
]

const popularTags = [
  'Auto Transport', 'Car Shipping', 'Vehicle Safety', 'Enclosed Transport',
  'Open Transport', 'Insurance', 'Military Discount', 'Classic Cars',
  'Shipping Tips', 'Seasonal Shipping', 'Preparation'
]

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Auto Transport Blog</h1>
            <p className="text-xl leading-relaxed">
              Expert advice, industry insights, and helpful guides to make your 
              auto transport experience smooth and informed.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64 md:h-80">
                  <Image
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ClockIcon className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <span>By {featuredPost.author}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 hover:text-brand-600 transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="btn-primary"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* Recent Posts */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center space-x-3 text-xs text-gray-500 mb-2">
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2 hover:text-brand-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">By {post.author}</span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-brand-600 hover:text-brand-700 text-sm font-medium"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="btn-outline btn-lg">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/blog/category/${category.slug}`}
                        className="flex items-center justify-between py-2 px-3 rounded hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-gray-700">{category.name}</span>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
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

              {/* Newsletter Signup */}
              <div className="bg-brand-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest auto transport tips and industry news delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  />
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Recent Comments or Related Posts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/get-quote"
                      className="text-brand-600 hover:text-brand-700 font-medium"
                    >
                      Get Free Quote →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-brand-600 hover:text-brand-700 font-medium"
                    >
                      Our Services →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-brand-600 hover:text-brand-700 font-medium"
                    >
                      FAQ →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-brand-600 hover:text-brand-700 font-medium"
                    >
                      Contact Us →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}