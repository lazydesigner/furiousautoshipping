import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon
} from '@heroicons/react/24/outline'

const navigation = {
  services: [
    { name: 'Door-to-Door Transport', href: '/services/door-to-door-auto-transport' },
    { name: 'Enclosed Shipping', href: '/services/enclosed-auto-transport' },
    { name: 'Open Transport', href: '/services/open-auto-transport' },
    { name: 'Expedited Shipping', href: '/services/expedited-auto-transport' },
    { name: 'Terminal Service', href: '/services/terminal-to-terminal-auto-transport' },
    { name: 'Snowbird Service', href: '/services/snowbird-auto-transport' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Blog', href: '/blog' },
    // { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  locations: [
    { name: 'State-to-State', href: '/locations/state-to-state' },
    { name: 'Popular Cities', href: '/locations/cities' },
    { name: 'California Auto Transport', href: '/locations/california' },
    { name: 'Florida Auto Transport', href: '/locations/florida' },
    { name: 'Texas Auto Transport', href: '/locations/texas' },
    { name: 'New York Auto Transport', href: '/locations/new-york' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Shipping Policy', href: '/shipping-policy' },
    { name: 'Refund Policy', href: '/refund-policy' },
  ],
}

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/furiousautoshipping',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/furiousautoshipping',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.248 7.053 7.758 8.449 7.758s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.413 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297c-.897-.875-1.387-2.026-1.387-3.323s.49-2.448 1.297-3.323C13.651 8.248 14.802 7.758 16.098 7.758s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.413 1.387z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/furiousauto',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Logo showText={true} className="text-white mb-6" />
              <p className="text-gray-300 mb-6 max-w-md">
                Professional auto transport services across the United States. 
                Fast, reliable, and affordable car shipping with exceptional customer service.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-brand-400" />
                  <a 
                    href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {process.env.NEXT_PUBLIC_COMPANY_PHONE}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-brand-400" />
                  <a 
                    href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="h-5 w-5 text-brand-400 mt-0.5" />
                  <span className="text-gray-300">
                    Nationwide Service<br />
                    United States
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Locations</h3>
              <ul className="space-y-3">
                {navigation.locations.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">
                Get auto transport tips, industry news, and exclusive offers.
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Furious Auto Shipping. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-1">Licensed & Bonded</div>
              <div className="text-sm font-medium text-white">USDOT Carrier</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-1">Insured</div>
              <div className="text-sm font-medium text-white">$1M Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-1">BBB Rating</div>
              <div className="text-sm font-medium text-white">A+ Accredited</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-1">Customer Rating</div>
              <div className="text-sm font-medium text-white">4.9/5 Stars</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}