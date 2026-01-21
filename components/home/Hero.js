import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import WorkingQuoteFormClient from "@/components/quote/WorkingQuoteFormClient";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-12 overflow-hidden">
      {/* Background Image (priority for LCP) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_image.png"
          alt="Professional car transport truck"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/70 to-brand-800/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - LCP Content (NO animation) */}
          <div className="space-y-8 overflow-hidden">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                🚚 #1 Rated Auto Transport Service
              </div>

              {/* IMPORTANT: LCP element should render instantly */}
              <h1 className="heading-1 text-white text-balance">
                Nationwide Auto Transport: Ship Any Vehicle,
                <span className="text-gradient bg-gradient-to-r from-brand-200 to-accent-300 bg-clip-text text-transparent">
                  {" "}Door to Door.
                </span>
              </h1>

              <p className="mt-4 text-base md:text-lg text-brand-100 max-w-xl leading-normal">
                FMCSA Licensed & Bonded • Direct Service to All 50 States • Zero Upfront Deposit
                Serving Customers Nationwide with 7+ Years of Industry Experience
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="btn-primary btn-lg group shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Free Instant Quote
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                className="btn-outline btn-lg border-white hover:bg-white hover:text-brand-600 transition-all duration-300"
              >
                Call {process.env.NEXT_PUBLIC_COMPANY_PHONE}
              </a>
            </div>
          </div>

          {/* Right Column - Quote Form (Client only) */}
          <div className="hidden lg:block relative z-50">
            <WorkingQuoteFormClient />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
  );
}
