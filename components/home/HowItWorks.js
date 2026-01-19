import { CheckCircleIcon } from '@heroicons/react/24/solid'

const steps = [
  {
    number: '01',
    title: 'Get Your Quote',
    description: 'Use our instant quote calculator or call us for a personalized estimate. No hidden fees, transparent pricing.',
    details: ['Enter pickup and delivery locations', 'Provide vehicle details', 'Choose service options', 'Get instant pricing']
  },
  {
    number: '02',
    title: 'Book Your Shipment',
    description: 'Secure your booking with a small deposit. We assign a licensed carrier and schedule your pickup.',
    details: ['Reserve with $0 Upfront', 'Carrier assignment within 24-48 hours', 'Receive pickup scheduling', 'Get driver contact information']
  },
  {
    number: '03',
    title: 'Vehicle Pickup',
    description: 'Our professional driver arrives at your location, inspects your vehicle, and loads it safely onto the carrier.',
    details: ['Driver arrives at scheduled time', 'Vehicle inspection and documentation', 'Secure loading process', 'Receive bill of lading']
  },
  {
    number: '04',
    title: 'Safe Transport',
    description: 'Your vehicle is transported safely with real-time tracking and regular updates throughout the journey.',
    details: ['Professional drivers and equipment', 'Real-time tracking updates', 'Comprehensive insurance coverage', 'Regular communication']
  },
  {
    number: '05',
    title: 'Delivery',
    description: 'Your vehicle arrives safely at the destination. Final inspection, payment to driver, and you get your keys back.',
    details: ['Delivery scheduling confirmation', 'Final vehicle inspection', 'Payment to driver', 'Receive your vehicle keys']
  }
]

export default function HowItWorks() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">How Auto Transport Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes shipping your vehicle simple and stress-free. 
            Here's how we get your car from point A to point B safely.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-[8.25rem] top-3/4 w-0.5 h-16 bg-brand-200" />
              )}
              
              <div className="grid md:grid-cols-12 gap-6 items-start">
                {/* Step Number */}
                <div className="md:col-span-2 flex md:justify-end">
                  <div className="flex items-center justify-center w-24 h-24 bg-brand-600 text-white rounded-full text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="md:col-span-10">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to ship your vehicle? Get started with a free quote.
          </p>
          <a
            href="/get-quote"
            className="btn-primary btn-lg"
          >
            Get Free Quote Now
          </a>
        </div>
      </div>
    </section>
  )
}