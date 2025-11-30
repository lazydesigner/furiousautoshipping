import { Shield, Clock, DollarSign, Wrench } from 'lucide-react';

export default function CommonWhy({from, to}) {
  const benefits = [
    {
      icon: Shield,
      title: "Safety and Security",
      description: `Our carriers are fully insured, and our drivers are seasoned professionals who know the ${from} to ${to} route inside and out. Your vehicle is protected from road hazards, unpredictable weather, and potential accidents.`
    },
    {
      icon: Clock,
      title: "Time and Efficiency",
      description: "A professional driver can cover a significant distance much faster and more consistently than an individual. While a long-distance drive can take 2-3 days of constant driving, our services ensure your vehicle is on its way while you focus on other aspects of your move."
    },
    {
      icon: DollarSign,
      title: "Cost-Effectiveness",
      description: "When you factor in the cost of gas, meals, lodging, and potential time off from work, the total expense of driving yourself can quickly exceed the cost of professional transport. Our services provide a transparent, all-inclusive quote, helping you budget for your move more effectively."
    },
    {
      icon: Wrench,
      title: "Reduced Wear and Tear",
      description: "Shipping your vehicle saves it from the thousands of miles of wear on the engine, tires, and other components, helping to preserve its value and longevity."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Professional Auto Transport for Your {from} to {to} Relocation?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Shipping your vehicle with a professional company offers a multitude of benefits that often outweigh the perceived savings of a DIY drive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mt-0 ">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Your Free Quote Today
          </button>
        </div>
      </div>
    </section>
  );
}