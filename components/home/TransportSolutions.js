import { Home, Building2, Shield, Palmtree, ArrowRight } from 'lucide-react';

export default function TransportSolutions() {
  const solutions = [
    {
      icon: Home,
      title: "Residential Moves",
      description: "Moving across the state or country? We handle the logistics.",
      link: "/services/residential-car-shipping",
      linkText: "Learn More",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building2,
      title: "Dealerships & Auctions",
      description: "Volume discounts for B2B inventory transfers.",
      link: "/services/dealer-auto-transport",
      linkText: "Business Accounts",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Military (PCS)",
      description: "Active duty discounts and base-to-base shipping.",
      link: "/services/military-car-shipping",
      linkText: "Military Shipping",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Palmtree,
      title: "Snowbirds",
      description: "Seasonal transport from North to South.",
      link: "/services/snowbird-auto-transport",
      linkText: "Snowbird Routes",
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Specialized Transport Solutions for Every Need
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="p-6 relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <a
                    href={solution.link}
                    className="inline-flex items-center text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors"
                  >
                    {solution.linkText}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}