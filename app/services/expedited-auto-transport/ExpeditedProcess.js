import { Phone, Zap, Bell, PhoneIcon } from 'lucide-react';
import Link from 'next/link';

export default function ExpeditedProcess() {
  const steps = [
    {
      number: 1,
      icon: Phone,
      title: 'The "911" Quote',
      description: 'Call us or use the quote form and select "Expedited." This flags your order in our system immediately. We will give you a "Buy It Now" price—a rate calculated to secure a driver instantly.',
      color: 'brand'
    },
    {
      number: 2,
      icon: Zap,
      title: 'Immediate Dispatch',
      description: 'Once you sign, we don\'t wait. We broadcast your load to our preferred network of "Hot Shot" carriers and Team Drivers. In many cases, we have a driver assigned within hours.',
      color: 'orange'
    },
    {
      number: 3,
      icon: Bell,
      title: 'Rapid Updates',
      description: 'When you are in a rush, silence is stressful. We provide text or email updates at every major milestone: Dispatched, Picked Up, In Transit, and Near Delivery. You will never have to guess where your car is.',
      color: 'green'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      brand: {
        bg: 'bg-brand-500',
        light: 'bg-brand-100',
        text: 'text-brand-600',
        border: 'border-brand-500'
      },
      orange: {
        bg: 'bg-orange-500',
        light: 'bg-orange-100',
        text: 'text-orange-600',
        border: 'border-orange-500'
      },
      green: {
        bg: 'bg-green-500',
        light: 'bg-green-100',
        text: 'text-green-600',
        border: 'border-green-500'
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Expedited Process: 3 Steps to Fast Shipping
          </h1>
          <p className="text-xl text-gray-700 font-semibold">
            We have stripped away the paperwork and the waiting.
          </p>
        </div>

        {/* Steps Container */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const colors = getColorClasses(step.color);
            
            return (
              <div key={index} className="relative">
                {/* Connector Line - Hidden on last item */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-16 top-32 w-1 h-16 bg-gray-300 z-0"></div>
                )}
                
                {/* Step Card */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 md:p-8 relative z-10">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <div className={`${colors.light} w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center relative`}>
                        <IconComponent className={`w-10 h-10 md:w-12 md:h-12 ${colors.text}`} />
                        <div className={`absolute -top-2 -right-2 ${colors.bg} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md`}>
                          {step.number}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <p className="text-2xl md:text-3xl font-bold text-gray-900">
                          Step {step.number}
                        </p>
                        <div className={`h-1 flex-1 ${colors.bg} rounded hidden md:block max-w-xs`}></div>
                      </div>
                      
                      <h3 className={`text-xl md:text-2xl font-bold ${colors.text} mb-4`}>
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-brand-600 to-brand-700 rounded-xl shadow-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">
            Need It There Yesterday?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            We can't time travel, but we can do the next best thing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href='/get-quote'><button className="bg-white text-brand-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-md">
            Get Your Expedited Rate Now
          </button></Link>
          <a
              href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
              className="btn-outline btn-lg border-white  hover:bg-white hover:text-brand-600 flex items-center justify-center"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Call {process.env.NEXT_PUBLIC_COMPANY_PHONE}
            </a></div>
        </div>
      </div>
    </div>
  );
}