import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PopularRoutes() {
  const routes = [
    { from: "Florida", to: "New Jersey", popular: false, url: "/locations/florida/new-jersey" },
    { from: "Florida", to: "New York", popular: false, url: "/locations/florida/new-york" },
    { from: "Arizona", to: "Oregon", popular: false, url: "/locations/arizona/oregon" },
    { from: "Arizona", to: "Illinois", popular: false, url: "/locations/arizona/illinois" },
    { from: "Texas", to: "Illinois", popular: false, url: "/locations/texas/illinois" },
    { from: "Texas", to: "Colorado", popular: false, url: "/locations/texas/colorado" },
    { from: "California", to: "New York", popular: false, url: "/locations/california/new-york" },
    { from: "California", to: "Illinois", popular: false, url: "/locations/california/illinois" }
  ]; 

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Popular Auto Shipping Routes
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Interactive Map */}
          <div className="relative bg-gradient-to-br from-brand-50 to-indigo-50 rounded-3xl shadow-lg">
            <div className="relative w-full aspect-[4/3] bg-white rounded-2xl shadow-inner overflow-hidden">
              <Image
                src="/images/Popular-Auto-Shipping-Routes.png"
                alt="Popular Auto Shipping Routes of the United States"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div> 
          </div>
          
          {/* Right: Top Lanes List */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900">Top Lanes</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {routes.map((route, index) => (
                <Link
                    href={route.url}
                  key={index}
                  className="group relative bg-gradient-to-r from-gray-50 to-white border-2 border-gray-100 rounded-xl p-5 hover:border-brand-300 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <ArrowRight className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-base font-semibold text-gray-900">
                            {route.from}
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                          <span className="text-base font-semibold text-gray-900">
                            {route.to}
                          </span>
                        </div>
                      </div>
                    </div> 
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-400 to-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Link>
              ))}
            </div>
            
            <Link href={'/locations'}><button className="w-full mt-8 bg-gradient-to-r from-brand-600 to-brand-800 text-white font-semibold py-4 px-6 rounded-xl hover:from-brand-700 hover:to-brand-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
              View All Routes
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button></Link>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              Get instant quotes for any route nationwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}