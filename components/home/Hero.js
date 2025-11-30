'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon, TruckIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import WorkingQuoteForm from '@/components/quote/WorkingQuoteForm'

const stats = [
  { label: 'Vehicles Shipped', value: '50,000+', icon: TruckIcon },
  { label: 'Customer Rating', value: '4.9/5', icon: ShieldCheckIcon },
  { label: 'Average Delivery', value: '7-10 Days', icon: ClockIcon },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center bg-gradient-to-r from-brand-600 to-brand-800">
        <div className="container">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="heading-1 text-white">
                  Fast, Reliable Auto Transport Across America
                </h1>
                <p className="text-xl text-brand-100 max-w-2xl">
                  Get instant quotes for professional car shipping services. Door-to-door delivery, 
                  competitive rates, and exceptional customer service.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-quote"
                  className="btn-primary btn-lg group"
                >
                  Get Free Instant Quote
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                  className="btn-outline btn-lg border-white text-white hover:bg-white hover:text-brand-600"
                >
                  Call {process.env.NEXT_PUBLIC_COMPANY_PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center pt-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_image.png"
          alt="Professional car transport truck"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-800/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 overflow-hidden"
          >
            {/* Headline */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium"
              >
                🚚 #1 Rated Auto Transport Service
              </motion.div>
              
              <h1 className="heading-1 text-white text-balance">
                Fast, Reliable Auto Transport 
                <span className="text-gradient bg-gradient-to-r from-brand-200 to-accent-300 bg-clip-text text-transparent">
                  {" "}Across America
                </span>
              </h1>
              
              <p className="text-xl text-brand-100 max-w-2xl leading-relaxed">
                Get instant quotes for professional car shipping services. Door-to-door delivery, 
                competitive rates, and exceptional customer service guaranteed.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/get-quote"
                className="btn-primary btn-lg group shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Free Instant Quote
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                className="btn-outline btn-lg border-white  hover:bg-white hover:text-brand-600 transition-all duration-300"
              >
                Call {process.env.NEXT_PUBLIC_COMPANY_PHONE}
              </a>
            </motion.div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-brand-200" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-brand-200">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Quote Form Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative z-30"
          > 
               <WorkingQuoteForm /> 
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20" />
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/30 rounded-full hidden lg:block"
      />
      
      <motion.div
        animate={{ 
          x: [0, -20, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-white/20 rounded-full hidden lg:block"
      />
    </section>
  )
}