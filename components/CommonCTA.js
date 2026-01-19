import Link from 'next/link'
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function CTA({p, b}) {
  return (
    <section className="section relative bg-gradient-to-r from-brand-600 -z-10 to-brand-800 text-white" style={{backgroundImage:'url("/images/cta.png")'}}>
      <div className='absolute bg-gradient-to-r top-0 w-full h-full from-brand-600/60 to-brand-800/90 z-10'></div>
      <div className="container relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="heading-2 mb-6">
            {p || 'Ready to Ship Your Vehicle?'}
          </p> 
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/get-quote"
              className="btn-secondary btn-lg group"
            >
              {b || 'Get Free Instant Quote'}
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
        </div>
      </div>
    </section>
  )
}