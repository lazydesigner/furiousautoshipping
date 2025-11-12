'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Logo from '@/components/ui/Logo'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Door-to-Door Transport', href: '/services/door-to-door-auto-transport' },
      { name: 'Terminal-to-Terminal', href: '/services/terminal-to-terminal-auto-transport' },
      { name: 'Enclosed Shipping', href: '/services/enclosed-auto-transport' },
      { name: 'Open Transport', href: '/services/open-auto-transport' },
      { name: 'Expedited Shipping', href: '/services/expedited-auto-transport' },
      { name: 'Snowbird Service', href: '/services/snowbird-auto-transport' },
    ],
  },
  {
    name: 'Locations',
    href: '/locations',
    children: [
      { name: 'State-to-State', href: '/locations/state-to-state' },
      { name: 'Popular Cities', href: '/locations/cities' },
      { name: 'All Routes', href: '/locations' },
    ],
  },
  { name: 'About', href: '/about' }, 
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Disclosure as="nav" className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300 ',
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    )}>
      {({ open }) => (
        <>
          <div className="container">
            <div className="flex justify-between items-center h-16 lg:h-20">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Logo className="h-8 w-auto lg:h-10" />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {navigation.map((item) => (
                    <NavItem
                      key={item.name}
                      item={item}
                      pathname={pathname}
                      isScrolled={isScrolled}
                    />
                  ))}
                </div>
              </div>

              {/* Right Side Actions */}
              <div className="hidden lg:flex items-center space-x-4">
                {/* Phone Number */}
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                  className={cn(
                    'flex items-center space-x-2 text-sm font-medium transition-colors',
                    isScrolled ? 'text-gray-700 hover:text-brand-600' : 'text-white hover:text-brand-600'
                  )}
                >
                  <PhoneIcon className="h-4 w-4" />
                  <span>{process.env.NEXT_PUBLIC_COMPANY_PHONE}</span>
                </a>

                {/* Get Quote Button */}
                <Link
                  href="/get-quote"
                  className="btn-primary text-sm text-nowrap btn-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Get Free Quote
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <Disclosure.Button className={cn(
                  'inline-flex items-center justify-center p-2 rounded-md transition-colors',
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                    : 'text-white hover:text-gray-200 hover:bg-white/10'
                )}>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Disclosure.Panel className="lg:hidden">
            <div className="bg-white border-t border-gray-200 shadow-lg">
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <MobileNavItem
                    key={item.name}
                    item={item}
                    pathname={pathname}
                  />
                ))}
              </div>
              
              {/* Mobile CTA */}
              <div className="px-4 py-4 border-t border-gray-200 bg-gray-50">
                <div className="space-y-3">
                  <a
                    href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                    className="flex items-center space-x-2 text-gray-700 hover:text-brand-600 font-medium"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    <span>{process.env.NEXT_PUBLIC_COMPANY_PHONE}</span>
                  </a>
                  <Link
                    href="/get-quote"
                    className="block w-full btn-primary text-center"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

function NavItem({ item, pathname, isScrolled }) {
  const [isOpen, setIsOpen] = useState(false)
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/')

  if (item.children) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          className={cn(
            'flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors',
            isActive
              ? isScrolled ? 'text-brand-600' : 'text-brand-400 drop-shadow-sm'
              : isScrolled 
                ? 'text-gray-700 hover:text-brand-600' 
                : 'text-gray-400 hover:text-brand-200 drop-shadow-sm'
          )}
        >
          <span>{item.name}</span>
          <ChevronDownIcon className={cn(
            'h-4 w-4 transition-transform',
            isOpen ? 'rotate-180' : ''
          )} />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0  w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-600 transition-colors"
              >
                {child.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={item.href}
      className={cn(
        'px-3 py-2 rounded-md text-sm font-medium transition-colors',
        isActive
          ? isScrolled ? 'text-brand-600' : 'text-brand-200 drop-shadow-sm'
          : isScrolled 
            ? 'text-gray-700 hover:text-brand-600' 
            : 'text-gray-400 hover:text-brand-200 drop-shadow-sm'
      )}
    >
      {item.name}
    </Link>
  )
}

function MobileNavItem({ item, pathname }) {
  const [isOpen, setIsOpen] = useState(false)
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/')

  if (item.children) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors',
            isActive ? 'text-brand-600 bg-brand-50' : 'text-gray-700 hover:text-brand-600 hover:bg-gray-100'
          )}
        >
          <span>{item.name}</span>
          <ChevronDownIcon className={cn(
            'h-5 w-5 transition-transform',
            isOpen ? 'rotate-180' : ''
          )} />
        </button>
        
        {isOpen && (
          <div className="pl-4 mt-2 space-y-1">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-brand-600 hover:bg-gray-100 transition-colors"
              >
                {child.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={item.href}
      className={cn(
        'block px-3 py-2 rounded-md text-base font-medium transition-colors',
        isActive ? 'text-brand-600 bg-brand-50' : 'text-gray-700 hover:text-brand-600 hover:bg-gray-100'
      )}
    >
      {item.name}
    </Link>
  )
}