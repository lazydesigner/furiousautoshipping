import React from 'react';
import { MapPin, Truck, Info, ArrowRight } from 'lucide-react';

const TerminalNetwork = () => {
  const westCoastTerminals = [
    {
      state: "California",
      stateSlug: "/locations/california",
      location: "Los Angeles / Long Beach",
      routes: "from Dallas, TX; New York, NY; Miami, FL; Chicago, IL"
    },
    {
      state: "California",
      stateSlug: "/locations/california",
      location: "San Francisco / Oakland",
      routes: "from Seattle, WA; Denver, CO; Austin, TX; Boston, MA"
    },
    {
      state: "California",
      stateSlug: "/locations/california",
      location: "San Diego",
      routes: "from Phoenix, AZ; San Antonio, TX; Atlanta, GA"
    },
    {
      state: "Washington",
      stateSlug: "/locations/washington",
      location: "Seattle / Tacoma",
      routes: "from Los Angeles, CA; Chicago, IL; Houston, TX"
    },
    {
      state: "Oregon",
      stateSlug: "/locations/oregon",
      location: "Portland",
      routes: "from San Francisco, CA; Salt Lake City, UT; Phoenix, AZ"
    }
  ];

  const centralSouthTerminals = [
    {
      state: "Texas",
      stateSlug: "/locations/texas",
      location: "Dallas / Fort Worth",
      routes: "from Los Angeles, CA; Atlanta, GA; Chicago, IL; Miami, FL"
    },
    {
      state: "Texas",
      stateSlug: "/locations/texas",
      location: "Houston",
      routes: "from Seattle, WA; Orlando, FL; Denver, CO"
    },
    {
      state: "Illinois",
      stateSlug: "/locations/illinois",
      location: "Chicago (Joliet/Naperville)",
      routes: "from Los Angeles, CA; Miami, FL; Phoenix, AZ; Newark, NJ"
    },
    {
      state: "Colorado",
      stateSlug: "/locations/colorado",
      location: "Denver",
      routes: "from San Francisco, CA; Chicago, IL; Dallas, TX"
    },
    {
      state: "Arizona",
      stateSlug: "/locations/arizona",
      location: "Phoenix",
      routes: "from Seattle, WA; Chicago, IL; Boston, MA"
    }
  ];

  const eastCoastTerminals = [
    {
      state: "New Jersey",
      stateSlug: "/locations/new-jersey",
      location: "Newark / Kearny (Serving NYC)",
      routes: "from Los Angeles, CA; Miami, FL; Houston, TX; San Francisco, CA"
    },
    {
      state: "Florida",
      stateSlug: "/locations/florida",
      location: "Miami / Fort Lauderdale",
      routes: "from New York, NY; Chicago, IL; Los Angeles, CA; Philadelphia, PA"
    },
    {
      state: "Florida",
      stateSlug: "/locations/florida",
      location: "Orlando",
      routes: "from Boston, MA; Dallas, TX; Washington D.C."
    },
    {
      state: "Georgia",
      stateSlug: "/locations/georgia",
      location: "Atlanta",
      routes: "from Los Angeles, CA; Seattle, WA; New York, NY"
    },
    {
      state: "Massachusetts",
      stateSlug: "/locations/massachusetts",
      location: "Boston",
      routes: "from Miami, FL; San Francisco, CA; Dallas, TX"
    }
  ];

  const TerminalTable = ({ terminals, title, iconColor }) => (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <MapPin className={`w-7 h-7 ${iconColor}`} />
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">{title}</h3>
      </div>
      
      <div className="overflow-x-auto rounded-xl shadow-xl border border-gray-200">
        <table className="w-full min-w-full">
          <thead className="bg-gradient-to-r from-brand-600 to-indigo-600">
            <tr>
              <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                State
              </th>
              <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                Metro Hub Location
              </th>
              <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                Popular Routes TO This Terminal
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {terminals.map((terminal, index) => (
              <tr key={index} className="hover:bg-brand-50 transition-colors duration-200">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <a 
                    href={terminal.stateSlug}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-800 hover:underline transition-colors group"
                  >
                    {terminal.state}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </td>
                <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-800">
                  {terminal.location}
                </td>
                <td className="px-4 sm:px-6 py-4 text-sm text-gray-600">
                  {terminal.routes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-900 to-indigo-800 rounded-2xl shadow-2xl overflow-hidden mb-8 sm:mb-12">
          <div className="px-6 sm:px-8 py-10 sm:py-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Truck className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center">
                Our Nationwide Terminal Network
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-brand-100 text-center max-w-4xl mx-auto mb-6 leading-relaxed">
              At Furious Auto Shipping, we have established relationships with secure storage facilities in major metropolitan hubs across the United States. These strategic locations allow us to offer rock-bottom pricing on our most popular cross-country lanes.
            </p>

            <div className="bg-brand-800/50 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-4 max-w-3xl mx-auto border border-brand-700">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-brand-300 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm sm:text-base text-brand-100">
                    <span className="font-semibold">Please Note:</span> Exact terminal addresses are provided upon booking for security reasons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <TerminalTable 
            terminals={westCoastTerminals} 
            title="Major West Coast Terminals"
            iconColor="text-brand-600"
          />
          
          <TerminalTable 
            terminals={centralSouthTerminals} 
            title="Major Central & South Terminals"
            iconColor="text-indigo-600"
          />
          
          <TerminalTable 
            terminals={eastCoastTerminals} 
            title="Major East Coast Terminals"
            iconColor="text-purple-600"
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalNetwork;