import React from 'react';
import { TrendingDown, ArrowRightLeft, DollarSign, Zap, Award } from 'lucide-react';

const SuperSaverRoutes = () => {
  const routes = [
    {
      id: 1,
      title: 'The "Snowbird Special"',
      route: 'New York (Newark) ↔ Miami',
      why: 'Massive volume of seasonal travelers. Carriers run this route daily.',
      savings: '$150 - $200',
      gradient: 'from-brand-500 to-brand-500'
    },
    {
      id: 2,
      title: 'The "Cross-Country King"',
      route: 'Los Angeles ↔ New York (Newark)',
      why: 'The backbone of US logistics. I-80 and I-40 are constantly moving.',
      savings: '$300+',
      gradient: 'from-brand-500 to-brand-600'
    },
    {
      id: 3,
      title: 'The "Tech Relocation"',
      route: 'San Francisco ↔ Austin/Dallas',
      why: 'High volume of job relocations allows for easy consolidation.',
      savings: '$200',
      gradient: 'from-brand-500 to-brand-500'
    },
    {
      id: 4,
      title: 'The "Midwest Connection"',
      route: 'Chicago ↔ Los Angeles',
      why: 'Utilizing the famous Route 66 corridor (I-55/I-40).',
      savings: '$250',
      gradient: 'from-brand-500 to-brand-500'
    },
    {
      id: 5,
      title: 'The "Southern Belt"',
      route: 'Atlanta ↔ Dallas',
      why: 'A short, straight shot along I-20. Very fast terminal turnaround.',
      savings: '$100 - $150',
      gradient: 'from-brand-500 to-brand-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-brand-50 to-indigo-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Award className="w-10 h-10 sm:w-12 sm:h-12 text-brand-500" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Top 5 "Super-Saver" Terminal Routes
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            These are the specific lanes where Terminal-to-Terminal shipping offers the <span className="font-bold text-brand-600">massive savings</span> compabrand to Door-to-Door.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {routes.map((route, index) => (
            <div
              key={route.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-200"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${route.gradient} p-6 sm:p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 text-8xl opacity-10 -mt-4 -mr-4">
                  {route.icon}
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-5xl sm:text-6xl">{route.icon}</span>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                      #{route.id}
                    </div>
                  </div>
                  
                  <p className="text-2xl sm:text-3xl font-bold mb-3">
                    {route.title}
                  </p>
                  
                  <div className="flex items-center gap-2 text-lg sm:text-xl font-semibold bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-flex">
                    <ArrowRightLeft className="w-5 h-5" />
                    {route.route}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Why This Route Saves You Money
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {route.why}
                  </p>
                </div>

                {/* Savings Badge */}
                <div className="bg-gradient-to-r from-brand-50 to-emerald-50 border-2 border-brand-200 rounded-xl p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-brand-500 rounded-full p-3">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">Estimated Savings</p>
                        <p className="text-2xl sm:text-3xl font-bold text-brand-600">
                          {route.savings}
                        </p>
                      </div>
                    </div>
                    <TrendingDown className="w-8 h-8 text-brand-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
 
      </div>
    </div>
  );
};

export default SuperSaverRoutes;