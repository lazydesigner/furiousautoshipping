import Link from 'next/link'
import Image from 'next/image'
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { formatCurrency } from '@/lib/utils'

export default function ServicePageTemplate({ 
  serviceData, 
  metadata,
  showPricingTable = true,
  showFAQ = true,
  showCTA = true 
}) {
  const {
    // Hero Section
    title,
    subtitle,
    description,
    heroImage,
    heroImageAlt,
    
    // Service Details
    benefits,
    features,
    process2,
    
    // Content Section
    mainContent, // This is where your 1000+ words go
    
    // Pricing (optional)
    pricing,
    
    // FAQ (optional)
    faqs,
    
    // Additional sections
    beforeAfter,
    testimonial,
    relatedServices,
    
    // CTA
    ctaTitle,
    ctaDescription,
    
    // Schema data
    serviceType,
    areaServed,
    provider
  } = serviceData 


  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-1 mb-6">{title}</h1>
              {subtitle && (
                <h2 className="text-xl text-brand-100 mb-6">{subtitle}</h2>
              )}
              <p className="text-xl leading-relaxed mb-8 text-brand-50">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-quote" className="btn-secondary btn-lg">
                  Get Free Quote
                </Link>
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                  className="btn-outline btn-lg border-white   hover:bg-white hover:text-brand-600"
                >
                  Call {process.env.NEXT_PUBLIC_COMPANY_PHONE}
                </a>
              </div>
            </div>
            {heroImage && (
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={heroImage}
                  alt={heroImageAlt || title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl "
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {benefits && benefits.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 mb-6">Why Choose This Service?</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {benefits[0]?.image && (
                <div className="relative">
                  {/* <Image
                    src={benefits[0].image}
                    alt="Service benefits"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  /> */}
                   <Image
                    src='/images/final-logo.webp'
                    alt="Service benefits"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Main Content Section - Your 1000+ Words Content */}
       
        <section className="section bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-brand max-w-none">
                <h2>The Ultimate in Auto Transport Convenience</h2>
    
    <p>Door-to-door auto transport represents the pinnacle of convenience in vehicle shipping services. Unlike traditional <b><Link href={'/services/terminal-to-terminal-auto-transport'}>terminal-to-terminal shipping</Link></b>, our <b><Link href={''}>door-to-door service</Link></b> eliminates the need for you to travel to shipping facilities, drop-off points, or terminals. We bring our professional auto transport service directly to you, making the entire process seamless and stress-free.</p>

    <h3>What Makes Door-to-Door Service Special</h3>
    
    <p><b><Link href={''}>Door-to-door auto transport</Link></b> is designed with busy customers in mind. Whether you're relocating for work, purchasing a vehicle from another state, or sending a car to a family member, our service adapts to your schedule and location preferences. This premium service option has become increasingly popular among customers who value their time and prefer maximum convenience.</p>

    <p>The service begins with scheduling a pickup at your preferred location - whether that's your home, office, or any other convenient spot. Our experienced drivers coordinate with you to arrange a pickup time that works with your schedule. Similarly, delivery happens at your destination address, eliminating the need for additional transportation arrangements.</p>

    <h3>How Door-to-Door Transport Works</h3>
    
    <p>The door-to-door process is straightforward and customer-focused. After booking your shipment and providing pickup and delivery addresses, we assign a qualified carrier to handle your vehicle. The carrier contacts you 24-48 hours before pickup to confirm the appointment and provide arrival estimates.</p>

    <p>On pickup day, the driver arrives at your location with the appropriate transport equipment. They conduct a thorough inspection of your vehicle, documenting its current condition with detailed notes and photographs. This inspection process protects both you and our company by establishing the vehicle's pre-transport condition.</p>

    <p>During transport, your vehicle receives the same professional care as any other shipping method. Our carriers are experienced professionals who understand the importance of safe vehicle handling. Throughout the journey, you can track your shipment's progress and receive updates on its location and expected delivery time.</p>

    <h3>Benefits of Choosing Door-to-Door Service</h3>
    
    <p>The primary advantage of door-to-door service is convenience. You save time by avoiding trips to terminals or depot locations, which can sometimes be far from your home or office. This is particularly valuable for customers with busy schedules, mobility limitations, or those living in areas distant from shipping terminals.</p>

    <p>Door-to-door service also provides greater security for your vehicle. With fewer handling points and transitions, there's reduced risk of damage or complications. Your vehicle goes directly from your location to the destination, minimizing exposure to potential issues that can arise during terminal transfers.</p>

    <p>Additionally, this service offers superior scheduling flexibility. Rather than working around terminal operating hours, you can coordinate pickup and delivery times that align with your availability. This flexibility is especially beneficial for customers with non-standard work schedules or specific timing requirements.</p>

    <h3>Cost Considerations and Value</h3>
    
    <p>While door-to-door service represents premium convenience, it's often included in standard auto transport pricing. Many customers are surprised to learn that the convenience upgrade doesn't always come with additional fees. The value proposition becomes even stronger when you consider the time and money saved by avoiding terminal visits.</p>

    <p>When comparing costs, factor in the expenses associated with terminal-to-terminal service: fuel costs for driving to terminals, parking fees, potential overnight accommodations if terminals are distant, and the value of your time. These hidden costs often make door-to-door service more economical than initially apparent.</p>

    <p>For customers shipping luxury or high-value vehicles, door-to-door service provides additional peace of mind. The reduced handling and direct transport minimize exposure risks, potentially saving money on insurance considerations and damage prevention.</p>

    <h3>Planning for Door-to-Door Pickup and Delivery</h3>
    
    <p>Successful door-to-door transport requires some planning on your part. Ensure that your pickup and delivery locations can accommodate a large truck. <b><Link href={'/'}>Auto transport carriers</Link></b> typically use trucks that are 75-80 feet long and require adequate space for maneuvering and loading operations.</p>

    <p>Consider factors like narrow streets, low-hanging branches, steep driveways, or neighborhood restrictions that might affect carrier access. If your location presents challenges, discuss alternatives with your transport coordinator. Often, meeting at a nearby location with better access provides a workable solution while maintaining most of the service's convenience benefits.</p>

    <p>Residential areas with parking restrictions or HOA limitations may require advance notification or permits. Some locations might necessitate scheduling during specific hours to comply with local regulations. Planning ahead helps ensure smooth pickup and delivery operations.</p>

    <h3>What to Expect During Service</h3>
    
    <p><b> <Link href={''}>Professional door-to-door service </Link></b> includes clear communication throughout the process. You'll receive advance notice before pickup, regular updates during transport, and delivery scheduling coordination. Our carriers understand that this service is about convenience and customer satisfaction.</p>

    <p>During vehicle inspection, take time to review the documentation carefully. This is your opportunity to note any existing damage and ensure accuracy in the condition report. Professional drivers appreciate customers who are thorough during this process, as it protects everyone involved.</p>

    <p>Be prepared to be available during scheduled pickup and delivery windows. While we strive for punctuality, factors like traffic, weather, or previous stops can affect exact timing. Maintaining flexibility within the agreed timeframes helps ensure smooth service execution.</p>

    <h3>Ideal Candidates for Door-to-Door Service</h3>
    
    <p>Door-to-door service benefits virtually all auto transport customers, but it's particularly valuable for specific situations. Business professionals with demanding schedules appreciate the time savings and convenience. Families with multiple vehicles or children find the service eliminates logistical complications.</p>

    <p>Customers with mobility limitations or disabilities particularly benefit from door-to-door service. The elimination of additional travel requirements makes auto transport accessible for customers who might otherwise find terminal-based services challenging. Senior citizens often prefer this service for similar convenience and accessibility reasons.</p>

    <p>Military personnel and their families find door-to-door service invaluable during PCS moves or deployments. The service accommodates the unique timing and logistical challenges associated with military relocations, providing one less stress factor during already complex transitions.</p>

    <h3>Seasonal Considerations and Planning</h3>
    
    <p>Door-to-door service availability and pricing can vary seasonally. Summer months typically see higher demand, particularly for popular vacation and relocation routes. Planning ahead during peak seasons ensures better availability and potentially more favorable pricing.</p>

    <p>Winter weather can affect door-to-door service in certain regions. Snow, ice, or severe weather conditions might require temporary adjustments to pickup or delivery locations for safety reasons. Our team works with customers to find suitable alternatives that maintain service quality while ensuring safety.</p>

    <p>Spring and fall often provide optimal conditions for door-to-door service. Moderate weather, good road conditions, and balanced demand levels frequently result in excellent service experiences during these seasons.</p>

    <h3>Technology and Communication</h3>
    
    <p>Modern door-to-door auto transport leverages technology to enhance customer experience. GPS tracking systems allow real-time monitoring of your vehicle's location during transport. Automated notification systems keep you informed of important milestones and updates.</p>

    <p>Mobile communication ensures that drivers and dispatch teams can coordinate effectively with customers. This technology integration helps maintain the reliability and convenience that door-to-door service promises.</p>

    <p>Digital documentation and photography streamline the inspection process while providing comprehensive records for your protection. These technological advances make door-to-door service more efficient and transparent than ever before.</p>

    <h3>Environmental and Economic Impact</h3>
    
    <p><b><Link href={''}>Door-to-door auto transport</Link></b> contributes to environmental sustainability by reducing the number of individual trips customers must make to terminals. This consolidation of transportation activities helps minimize overall carbon emissions associated with vehicle shipping.</p>

    <p>From an economic perspective, door-to-door service supports local economies by utilizing local drivers and reducing the need for additional transportation infrastructure. The efficiency gains benefit both customers and service providers.</p>

    <h3>Making the Most of Your Door-to-Door Experience</h3>
    
    <p>To maximize the benefits of door-to-door service, prepare your vehicle according to our guidelines. Remove personal items, ensure the fuel level is appropriate, and have all necessary documentation ready. Clear communication with your transport coordinator helps ensure smooth operations.</p>

    <p>Consider scheduling flexibility when possible. While we strive to meet exact timing preferences, some flexibility in pickup and delivery windows can improve service reliability and potentially reduce costs.</p>

    <p>Take advantage of the convenience factor by planning other activities around your transport schedule. Since you don't need to travel to terminals, you can maintain your normal routine while your vehicle is being professionally transported.</p>

    <h3>Quality Assurance and Customer Satisfaction</h3>
    
    <p>Our door-to-door service commitment extends beyond basic transportation. We maintain rigorous quality standards for all carriers in our network, ensuring that convenience doesn't come at the expense of quality or safety.</p>

    <p>Customer feedback drives continuous improvement in our door-to-door service offerings. We regularly evaluate and enhance our processes based on customer experiences and changing needs in the auto transport industry.</p>

    <p><b><Link href={''}>Professional door-to-door auto transport</Link></b> represents the evolution of vehicle shipping services toward greater customer focus and convenience. By choosing this service, you're selecting a solution that prioritizes your time, comfort, and peace of mind while maintaining the highest standards of vehicle care and transportation safety.</p>
                {/* <div dangerouslySetInnerHTML={{ __html: mainContent }} /> */}
              </div>
            </div>
          </div>
        </section> 

      {/* Process Section */}
      {process2 && process2.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our streamlined process makes it simple and convenient.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {process2.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-brand-100 rounded-full">
                        {step.icon && <step.icon className="h-8 w-8 text-brand-600" />}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-brand-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Grid */}
      {features && features.length > 0 && (
        <section className="section bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Service Features</h2>
              <p className="text-xl text-gray-600">
                Everything included in our professional service.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    {feature.icon && (
                      <div className="p-2 bg-brand-100 rounded-lg mr-3">
                        <feature.icon className="h-6 w-6 text-brand-600" />
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Table */}
      {showPricingTable && pricing && (
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Transparent Pricing</h2>
              <p className="text-xl text-gray-600">
                Clear, upfront pricing with no hidden fees.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      {pricing.included?.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-600 mb-2">
                        {pricing.startingPrice ? `Starting at ${formatCurrency(pricing.startingPrice)}` : 'Custom Quote'}
                      </div>
                      <div className="text-gray-600 mb-4">{pricing.priceNote}</div>
                      <Link
                        href="/get-quote"
                        className="btn-primary w-full"
                      >
                        Get Exact Quote
                      </Link>
                    </div>
                    
                    {pricing.factors && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-3">Price Factors:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {pricing.factors.map((factor, index) => (
                            <li key={index}>• {factor}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Before/After or Comparison */}
      {beforeAfter && (
        <section className="section bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">{beforeAfter.title}</h2>
              <p className="text-xl text-gray-600">{beforeAfter.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-red-600">
                  {beforeAfter.before.title}
                </h3>
                <ul className="space-y-2">
                  {beforeAfter.before.points.map((point, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border-2 border-green-200">
                <h3 className="text-lg font-semibold mb-4 text-green-600">
                  {beforeAfter.after.title}
                </h3>
                <ul className="space-y-2">
                  {beforeAfter.after.points.map((point, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {testimonial && (
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl font-medium text-gray-900 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                {testimonial.avatar && (
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                )}
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.title}</div>
                  {testimonial.rating && (
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {showFAQ && faqs && faqs.length > 0 && (
        <section className="section bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Common questions about this service.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Related Services</h2>
              <p className="text-xl text-gray-600">
                Other services you might be interested in.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  {service.image && (
                    <div className="relative h-48">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium"
                    >
                      Learn More
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {showCTA && (
        <section className="section bg-brand-600 text-white">
          <div className="container text-center">
            <h2 className="heading-2 mb-4">
              {ctaTitle || 'Ready to Get Started?'}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {ctaDescription || 'Get your free quote today and experience our professional service.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-quote"
                className="btn-secondary btn-lg"
              >
                Get Free Quote
              </Link>
              <a
                href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                className="btn-outline btn-lg border-white   hover:bg-white hover:text-brand-600"
              >
                Call {process.env.NEXT_PUBLIC_COMPANY_PHONE}
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: title,
            description: description,
            provider: {
              '@type': 'Organization',
              name: provider?.name || 'Furious Auto Shipping',
              url: provider?.url || process.env.NEXT_PUBLIC_SITE_URL,
              telephone: provider?.phone || process.env.NEXT_PUBLIC_COMPANY_PHONE,
            },
            serviceType: serviceType || 'Auto Transport Service',
            areaServed: areaServed || {
              '@type': 'Country',
              name: 'United States',
            },
            ...(pricing?.startingPrice && {
              offers: {
                '@type': 'Offer',
                priceRange: `Starting at $${pricing.startingPrice}`,
                priceCurrency: 'USD',
              },
            }),
          }),
        }}
      />
    </div>
  )
}