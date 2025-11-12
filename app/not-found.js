import Link from 'next/link'
import { HomeIcon, MagnifyingGlassIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          {/* 404 Error */}
          <div className="text-8xl font-bold text-brand-600 mb-4">404</div>
          
          {/* Error Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, 
            deleted, or the URL might be incorrect.
          </p>
          
          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="btn-primary btn-lg flex items-center justify-center"
              >
                <HomeIcon className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
              
              <Link
                href="/get-quote"
                className="btn-outline btn-lg flex items-center justify-center"
              >
                <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                Get Quote
              </Link>
            </div>
            
            <div className="text-center">
              <span className="text-gray-500">Need help? </span>
              <a
                href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center"
              >
                <PhoneIcon className="h-4 w-4 mr-1" />
                Call {process.env.NEXT_PUBLIC_COMPANY_PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Popular Links */}
      <div className="mt-16 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-center mb-6">Popular Pages</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/services/door-to-door" 
                    className="text-brand-600 hover:text-brand-700 text-sm"
                  >
                    Door-to-Door Transport
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/enclosed" 
                    className="text-brand-600 hover:text-brand-700 text-sm"
                  >
                    Enclosed Transport
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/expedited" 
                    className="text-brand-600 hover:text-brand-700 text-sm"
                  >
                    Expedited Shipping
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">Information</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/about" 
                    className="text-brand-600 hover:text-brand-700 text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/faq" 
                    className="text-brand-600 hover:text-brand-700 text-sm"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-brand-600 hover:text-brand-700 text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}