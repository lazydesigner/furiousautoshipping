import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function CarShippingPricing() {
  const pricingFactors = [
    {
      factor: "Distance",
      description: "Longer distances generally mean lower price per mile but higher total cost.",
      impact: "↑ with distance",
      trend: "up"
    },
    {
      factor: "Route Popularity",
      description: "Major, high-volume routes (e.g., I-95, I-40) are cheaper due to carrier competition.",
      impact: "↓ with popularity",
      trend: "down"
    },
    {
      factor: "Vehicle Size/Weight",
      description: "Larger vehicles (trucks, SUVs, RVs) take up more space and require more fuel.",
      impact: "↑ with size",
      trend: "up"
    },
    {
      factor: "Transport Type",
      description: "Open Carrier is standard and cheapest. Enclosed Carrier protects classic/luxury cars from road debris.",
      impact: "Enclosed ↑",
      trend: "up"
    },
    {
      factor: "Seasonality",
      description: "Summer is peak season. Snowbird routes are expensive in their high-demand direction.",
      impact: "↑ in peak season",
      trend: "up"
    },
    {
      factor: "Fuel Prices",
      description: "Carrier operating costs are directly affected by the national average diesel price.",
      impact: "↑ with fuel price",
      trend: "up"
    }
  ];

  

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cost to Ship a Car in the USA: Transparent Pricing Factors
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            The cost of auto shipping in USA is dynamic and determined by several transparent factors. There is no fixed price, but understanding these variables allows you to plan your budget effectively.
          </p>
        </div>

        {/* Responsive Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="bg-gradient-to-r from-brand-600 to-accent-600 text-white">
                  <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Factor
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Cost Impact
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {pricingFactors.map((item, index) => (
                  <tr 
                    key={index} 
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 sm:px-6 py-4 font-semibold text-gray-900 text-sm sm:text-base whitespace-nowrap">
                      {item.factor}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-gray-600 text-sm sm:text-base">
                      {item.description}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                        item.trend === 'up' 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {item.trend === 'up' ? (
                          <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                        ) : (
                          <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />
                        )}
                        <span className="hidden sm:inline">{item.impact}</span>
                        <span className="sm:hidden">{item.trend === 'up' ? '↑' : '↓'}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}