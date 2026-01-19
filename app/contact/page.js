'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

// export const metadata = {
//   title: 'Contact Furious Auto Shipping | Get Help & Support',
//   description: 'Contact our auto transport experts for quotes, support, or questions. Phone, email, and live chat available. Get help with your car shipping needs.',
//   keywords: 'contact auto transport, car shipping support, auto transport help, vehicle shipping contact',
// }

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  preferredContact: z.enum(['email', 'phone']).default('email'),
})

const contactMethods = [
  {
    icon: PhoneIcon,
    title: 'Phone Support',
    description: 'Speak directly with our transport specialists',
    contact: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
    action: 'Send Email',
    href: `mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL}`,
    hours: 'Response within 2-4 hours',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Live Chat',
    description: 'Chat with our team for instant assistance',
    contact: 'Available on website',
    action: 'Start Chat',
    href: '#chat',
    hours: '8 AM - 8 PM EST, Mon-Fri',
  },
]

const offices = [
  {
    city: 'Headquarters',
    address: '123 Transport Way, Miami, FL 33101',
    phone: '(888) 706-8784',
    email: 'info@furiousautoshipping.com',
  },
  {
    city: 'West Coast Office',
    address: '456 Shipping Blvd, Los Angeles, CA 90210',
    phone: '(888) 706-8784',
    email: 'info@furiousautoshipping.com',
  },
  {
    city: 'East Coast Office',
    address: '789 Auto Lane, New York, NY 10001',
    phone: '(888) 706-8784',
    email: 'info@furiousautoshipping.com',
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      toast.success('Message sent successfully! We\'ll get back to you soon.')
      reset()
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Contact Us</h1>
            <p className="text-xl leading-relaxed">
              Have questions about auto transport? Need help with your shipment? 
              Our expert team is here to assist you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method) => (
              <div key={method.title} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-brand-100 rounded-full">
                    <method.icon className="h-8 w-8 text-brand-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="font-medium text-brand-600 mb-2">{method.contact}</div>
                <div className="text-sm text-gray-500 mb-4">{method.hours}</div>
                <a
                  href={method.href}
                  className="btn-primary inline-block"
                  onClick={method.href === '#chat' ? (e) => {
                    e.preventDefault()
                    // Implement chat widget opening logic
                    console.log('Open chat widget')
                  } : undefined}
                >
                  {method.action}
                </a>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-3 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Name *</label>
                    <input
                      type="text"
                      {...register('name')}
                      className="form-input"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="form-error">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="form-label">Phone *</label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="form-input"
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="form-error">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    {...register('email')}
                    className="form-input"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="form-error">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="form-label">Subject *</label>
                  <select {...register('subject')} className="form-select">
                    <option value="">Select a subject</option>
                    <option value="quote">Request Quote</option>
                    <option value="tracking">Track Shipment</option>
                    <option value="support">Customer Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="complaint">File Complaint</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="form-error">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="form-label">Message *</label>
                  <textarea
                    {...register('message')}
                    rows="5"
                    className="form-textarea"
                    placeholder="Tell us how we can help you..."
                  />
                  {errors.message && (
                    <p className="form-error">{errors.message.message}</p>
                  )}
                </div>

                <div>
                  <label className="form-label">Preferred Contact Method</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...register('preferredContact')}
                        value="email"
                        className="form-radio text-brand-600"
                      />
                      <span className="ml-2">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...register('preferredContact')}
                        value="phone"
                        className="form-radio text-brand-600"
                      />
                      <span className="ml-2">Phone</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary btn-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner h-5 w-5 mr-2" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="heading-3 mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-brand-100 rounded-lg">
                    <ClockIcon className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <div>Monday - Friday: 7:00 AM - 9:00 PM EST</div>
                      <div>Saturday: 8:00 AM - 6:00 PM EST</div>
                      <div>Sunday: 9:00 AM - 5:00 PM EST</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-brand-100 rounded-lg">
                    <MapPinIcon className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Service Area</h3>
                    <div className="text-gray-600">
                      We provide auto transport services to all 50 states across 
                      the United States, including Alaska and Hawaii.
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <h3 className="text-xl font-semibold mb-4">Our Locations</h3>
              <div className="space-y-4">
                {offices.map((office) => (
                  <div key={office.city} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">{office.city}</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>{office.address}</div>
                      <div>Phone: {office.phone}</div>
                      <div>Email: {office.email}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How quickly can I get a quote?",
                answer: "You can get an instant quote online in under 2 minutes using our quote calculator, or call us for a personalized quote over the phone."
              },
              {
                question: "How far in advance should I book?",
                answer: "We recommend booking 1-2 weeks in advance for standard service, though we can often accommodate last-minute requests with expedited service."
              },
              {
                question: "What information do I need to provide?",
                answer: "We'll need pickup and delivery locations, vehicle details (year, make, model), preferred dates, and your contact information."
              },
              {
                question: "Can I track my vehicle during transport?",
                answer: "Yes! We provide tracking information and regular updates throughout the transport process. You can also contact your driver directly."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept cash, certified checks, and money orders. Payment is typically split between booking deposit and delivery payment."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href="/faq"
              className="btn-outline"
            >
              View All FAQs
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section bg-red-50 border-l-4 border-red-400">
        <div className="container">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-red-100 rounded-full">
              <PhoneIcon className="h-8 w-8 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-800 mb-1">
                Emergency or Urgent Issues?
              </h3>
              <p className="text-red-700 mb-2">
                For urgent matters regarding active shipments, damage claims, or emergencies:
              </p>
              <a
                href="tel:+15551234567"
                className="text-lg font-bold text-red-800 hover:text-red-900"
              >
                Emergency Line: (888) 706-8784
              </a>
              <p className="text-sm text-red-600 mt-1">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 