import Link from 'next/link'
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function CTA() {
  return (
    <section className="section relative bg-gradient-to-r from-brand-600 -z-10 to-brand-800 text-white" style={{backgroundImage:'url("/images/cta.webp")'}}>
      <div className='absolute bg-gradient-to-r top-0 w-full h-full from-brand-600/60 to-brand-800/90 z-10'></div>
      <div className="container relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6">
            Ready to Ship Your Vehicle?
          </h2>
          
          <p className="text-xl leading-relaxed mb-8">
            Join thousands of satisfied customers who trust Furious Auto Shipping 
            for safe, reliable, and affordable auto transport services across America.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-200 mb-2">
                2 Minutes
              </div>
              <div className="text-brand-100">
                Get instant quote
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-200 mb-2">
                24-48 Hours
              </div>
              <div className="text-brand-100">
                Carrier assignment
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-200 mb-2">
                7-14 Days
              </div>
              <div className="text-brand-100">
                Safe delivery
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/get-quote"
              className="btn-secondary btn-lg group"
            >
              Get Free Instant Quote
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
              className="btn-outline btn-lg border-white  hover:bg-white hover:text-brand-600 flex items-center justify-center"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Call {process.env.NEXT_PUBLIC_COMPANY_PHONE}
            </a>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center space-x-6 text-sm text-brand-200">
              <span className="flex items-center">
                ✓ No hidden fees
              </span>
              <span className="flex items-center">
                ✓ Instant quotes
              </span>
              <span className="flex items-center">
                ✓ Licensed & insured
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}