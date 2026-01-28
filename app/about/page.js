import Image from 'next/image'
import { CheckCircleIcon, TruckIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'About Furious Auto Shipping - Professional Car Transport Company',
  description: 'Learn about Furious Auto Shipping, a trusted auto transport company with over 10 years of experience shipping vehicles across the USA.',
  keywords: 'about furious auto shipping, auto transport company, car shipping experience, vehicle transport history',
    alternates: {
      canonical: `/about`,
    },
}

const stats = [
  { label: 'Vehicles Shipped', value: '50,000+' },
  { label: 'Years in Business', value: '7+' },
  { label: 'Customer Satisfaction', value: '4.9/5' },
  { label: 'States Covered', value: '50' },
]

const values = [
  {
    icon: TruckIcon,
    title: 'Reliability',
    description: 'We deliver on our promises with on-time pickup and delivery services you can count on.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Safety',
    description: 'Your vehicle is protected with comprehensive insurance and handled by professional drivers.',
  },
  {
    icon: UserGroupIcon,
    title: 'Customer Service',
    description: 'Our dedicated team provides exceptional support throughout your entire shipping experience.',
  },
]

const team = [
  {
    name: 'Christopher Whitman',
    role: 'CEO & Founder',
    image: '/images/team/mike-johnson.jpg',
    bio: 'Mike founded Furious Auto Shipping with a vision to revolutionize the auto transport industry through technology and exceptional service.',
  },
  {
    name: 'Sarah Williams',
    role: 'VP of Operations',
    image: '/images/team/sarah-williams.jpg',
    bio: 'Sarah oversees our nationwide operations, ensuring every vehicle shipment meets our high standards for safety and timeliness.',
  },
  {
    name: 'David Chen',
    role: 'Head of Customer Success',
    image: '/images/team/david-chen.jpg',
    bio: 'David leads our customer service team, dedicated to providing transparent communication and support throughout the shipping process.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">
              About Furious Auto Shipping
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              We're a leading auto transport company dedicated to providing safe, reliable, 
              and affordable vehicle shipping services across the United States. With over 
              a decade of experience, we've earned the trust of thousands of customers.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-brand-200">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2018, Furious Auto Shipping began with a simple mission: to make 
                  auto transport more transparent, reliable, and customer-focused. We saw an 
                  industry that was often confusing and unpredictable for customers, and we 
                  knew we could do better.
                </p>
                <p>
                  Starting with just a small team and a handful of trusted carrier partners, 
                  we've grown into one of the most respected auto transport companies in the 
                  country. Our success comes from our unwavering commitment to putting 
                  customers first and constantly improving our services.
                </p>
                <p>
                  Today, we ship thousands of vehicles every month across all 50 states, 
                  working with a carefully vetted network of professional drivers and carriers. 
                  Every shipment is backed by comprehensive insurance and our 24/7 customer 
                  support team.
                </p>
              </div>
            </div>
            <div className="relative w-full h-96">
              <Image
                src="/images/about-1.png"
                alt="Furious Auto Shipping team and trucks"
                fill
                className="rounded-lg shadow-xl absolute object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape the experience we 
              deliver to every customer.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-brand-100 rounded-full">
                    <value.icon className="h-8 w-8 text-brand-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings decades of combined experience 
              in logistics, technology, and customer service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative mb-4 ">
                  <Image
                    src='/images/final-logo.webp'
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-brand-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Certifications & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to be recognized by industry organizations and 
              maintain the highest standards for safety and service.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <div className="text-2xl font-bold text-brand-600">DOT</div>
                <div className="text-sm text-gray-600">Licensed Carrier</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <div className="text-2xl font-bold text-brand-600">BBB</div>
                <div className="text-sm text-gray-600">A+ Rating</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <div className="text-2xl font-bold text-brand-600">$1M</div>
                <div className="text-sm text-gray-600">Insurance Coverage</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <div className="text-2xl font-bold text-brand-600">FMCSA</div>
                <div className="text-sm text-gray-600">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-96 ">
              <Image
                src="/images/about-2.png"
                alt="Professional auto transport service"
                fill
                className="rounded-lg shadow-xl object-cover absolute"
              />
            </div>
            <div>
              <h2 className="heading-2 mb-6">Why Choose Furious Auto Shipping?</h2>
              <div className="space-y-4">
                {[
                  'Transparent pricing with no hidden fees',
                  'Fully licensed and insured carriers',
                  'Real-time tracking and updates',
                  'Dedicated customer support team',
                  'Flexible pickup and delivery options',
                  'Competitive rates and fast quotes',
                  '24/7 customer service availability',
                  'Satisfaction guarantee on all shipments',
                ].map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-600 text-white">
        <div className="container text-center">
          <h2 className="heading-2 mb-4">Ready to Ship Your Vehicle?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Furious Auto Shipping 
            for their vehicle transport needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-quote"
              className="btn-secondary btn-lg"
            >
              Get Free Quote
            </a>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
              className="btn-outline btn-lg border-white   hover:bg-white hover:text-brand-600"
            >
              Call {process.env.NEXT_PUBLIC_COMPANY_PHONE}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}