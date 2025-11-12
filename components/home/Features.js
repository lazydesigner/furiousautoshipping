import { 
  ShieldCheckIcon, 
  TruckIcon, 
  ClockIcon, 
  PhoneIcon,
  MapPinIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'Fully Insured',
    description: 'Every shipment is covered by comprehensive insurance with up to $1M coverage for your peace of mind.'
  },
  {
    icon: TruckIcon,
    title: 'Licensed Carriers',
    description: 'We work only with DOT licensed and FMCSA registered carriers who meet our strict safety standards.'
  },
  {
    icon: ClockIcon,
    title: 'On-Time Delivery',
    description: 'Reliable pickup and delivery times with 98% on-time performance across all our routes.'
  },
  {
    icon: MapPinIcon,
    title: 'Door-to-Door Service',
    description: 'Convenient pickup and delivery at your preferred locations without terminal visits.'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprise charges. Get honest, upfront pricing with detailed cost breakdowns.'
  },
  {
    icon: PhoneIcon,
    title: '24/7 Support',
    description: 'Our customer service team is available around the clock to answer questions and provide updates.'
  },
]

export default function Features() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Why Choose Furious Auto Shipping?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine industry expertise with modern technology to deliver 
            exceptional auto transport services you can trust.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-brand-100 rounded-lg">
                  <feature.icon className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">
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
  )
}