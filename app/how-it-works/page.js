import Link from 'next/link'
import Image from 'next/image'
import { 
  CheckCircleIcon, 
  ClipboardDocumentListIcon,
  TruckIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export const metadata = {
  title: 'How Auto Transport Works | Step-by-Step Car Shipping Process',
  description: 'Learn how auto transport works from quote to delivery. Simple step-by-step process for shipping your car safely and affordably.',
  keywords: 'how auto transport works, car shipping process, vehicle transport steps, auto shipping guide',
}

const steps = [
  {
    number: '01',
    title: 'Get Your Quote',
    description: 'Use our instant calculator or speak with a specialist to get transparent pricing.',
    icon: ClipboardDocumentListIcon,
    details: [
      'Instant online quote calculator',
      'No hidden fees or surprises',
      'Multiple service options',
      'Transparent pricing breakdown'
    ],
    timeframe: '2 minutes',
    image: '/images/step-1-quote.png'
  },
  {
    number: '02',
    title: 'Book Your Shipment',
    description: 'Secure your booking with a small deposit and we handle the rest.',
    icon: CheckCircleIcon,
    details: [
      'Small deposit to secure booking',
      'Carrier assignment within 24-48 hours',
      'Pickup scheduling coordination',
      'Driver contact information provided'
    ],
    timeframe: '24-48 hours',
    image: '/images/step-2-book.png'
  },
  {
    number: '03',
    title: 'Vehicle Preparation',
    description: 'Prepare your vehicle following our simple checklist for safe transport.',
    icon: ShieldCheckIcon,
    details: [
      'Remove personal items',
      'Clean vehicle inside and out',
      'Ensure 1/4 tank of gas or less',
      'Disable car alarms',
      'Document existing damage'
    ],
    timeframe: '30 minutes',
    image: '/images/step-3-prepare.png'
  },
  {
    number: '04',
    title: 'Vehicle Pickup',
    description: 'Professional driver arrives, inspects your vehicle, and loads it safely.',
    icon: TruckIcon,
    details: [
      'Driver arrives within scheduled window',
      'Thorough vehicle inspection',
      'Bill of lading documentation',
      'Secure loading onto carrier',
      'Photos taken for records'
    ],
    timeframe: '30-60 minutes',
    image: '/images/step-4-pickup.png'
  },
  {
    number: '05',
    title: 'Safe Transport',
    description: 'Your vehicle travels safely with real-time tracking and regular updates.',
    icon: MapPinIcon,
    details: [
      'Professional drivers and equipment',
      'Real-time GPS tracking',
      'Regular progress updates',
      'Comprehensive insurance coverage',
      'Direct driver contact available'
    ],
    timeframe: '5-14 days',
    image: '/images/step-5-transport.png'
  },
  {
    number: '06',
    title: 'Vehicle Delivery',
    description: 'Your vehicle arrives safely, final inspection, and you receive your keys.',
    icon: CheckCircleIcon,
    details: [
      'Delivery confirmation call',
      'Final vehicle inspection',
      'Payment to driver (balance due)',
      'Receive vehicle keys and documents',
      'Rate your experience'
    ],
    timeframe: '30-60 minutes',
    image: '/images/step-6-delivery.png'
  }
]

const faqs = [
  {
    question: 'How long does the entire process take?',
    answer: 'From booking to delivery, the process typically takes 7-14 days for most routes. Regional shipments may be faster (3-7 days), while cross-country transport may take up to 14 days.'
  },
  {
    question: 'Do I need to be present for pickup and delivery?',
    answer: 'Yes, you or an authorized representative (18+) must be present for both pickup and delivery to sign paperwork, hand over keys, and conduct vehicle inspections.'
  },
  {
    question: 'What if my vehicle gets damaged during transport?',
    answer: 'All shipments are covered by comprehensive insurance. If damage occurs, document it immediately upon delivery, take photos, and contact us within 24 hours to file a claim.'
  },
  {
    question: 'Can I track my vehicle during transport?',
    answer: 'Yes! Once your vehicle is picked up, you\'ll receive driver contact information and can get real-time updates on your shipment\'s progress.'
  }
]

export default function HowItWorksPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">How Auto Transport Works</h1>
            <p className="text-xl leading-relaxed mb-8">
              Our streamlined process makes shipping your vehicle simple and stress-free. 
              From instant quotes to safe delivery, here's exactly how we handle your car transport.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-200">6</div>
                <div className="text-sm opacity-90">Simple Steps</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-200">Safe</div>
                <div className="text-sm opacity-90">& Secure</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-200">24/7</div>
                <div className="text-sm opacity-90">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">The Complete Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From your first quote to final delivery, every step is designed for 
              your convenience and peace of mind.
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-brand-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-brand-600 font-medium">Typical time: {step.timeframe}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={500}
                      height={400}
                      className="rounded-lg shadow-xl"
                    />
                    <div className="absolute top-4 left-4 bg-brand-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Timeline Overview</h2>
            <p className="text-xl text-gray-600">
              Here's what to expect in terms of timing for each phase.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-6 gap-4">
              {steps.map((step, index) => (
                <div key={step.number} className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-md mb-4">
                    <step.icon className="h-8 w-8 mx-auto text-brand-600 mb-2" />
                    <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                    <p className="text-xs text-brand-600 font-medium">{step.timeframe}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-brand-300"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">What Makes Our Process Different</h2>
            <p className="text-xl text-gray-600">
              We've refined our process to eliminate common pain points in auto transport.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-brand-100 rounded-full">
                  <PhoneIcon className="h-8 w-8 text-brand-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Constant Communication</h3>
              <p className="text-gray-600">
                Unlike other companies, we keep you informed at every step with 
                proactive updates and direct driver contact.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-brand-100 rounded-full">
                  <CheckCircleIcon className="h-8 w-8 text-brand-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">No Surprises</h3>
              <p className="text-gray-600">
                Transparent pricing from day one. No hidden fees, no last-minute 
                charges, no surprises at delivery.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-brand-100 rounded-full">
                  <TruckIcon className="h-8 w-8 text-brand-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Vetted Carriers</h3>
              <p className="text-gray-600">
                We work only with licensed, insured, and highly-rated carriers 
                who meet our strict safety and service standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process FAQ */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Process Questions & Answers</h2>
              <p className="text-xl text-gray-600">
                Common questions about how our auto transport process works.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start */}
      <section className="section bg-brand-600 text-white">
        <div className="container text-center">
          <h2 className="heading-2 mb-4">Ready to Start the Process?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Now that you understand how it works, get your free quote and 
            experience our streamlined auto transport process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="btn-secondary btn-lg"
            >
              Get Free Quote Now
            </Link>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
              className="btn-outline btn-lg border-white text-brand-400 hover:bg-white hover:text-brand-600"
            >
              Speak to Specialist
            </a>
          </div>
          <p className="text-sm text-brand-200 mt-4">
            Get instant pricing • No obligation • Professional service guaranteed
          </p>
        </div>
      </section>
    </div>
  )
}