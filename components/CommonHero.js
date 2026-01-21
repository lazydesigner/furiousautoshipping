import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CommonHeroMotion from "./CommonHeroMotion";
import WorkingQuoteFormClient from "@/components/quote/WorkingQuoteFormClient";
import CommonTrustBadgesClient from "@/components/CommonTrustBadgesClient";

export default function CommonHero({ h1, subheading, img }) {
  return (
    <>
      <section className="relative min-h-screen flex items-center pt-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={img || "/images/hero_image.png"}
            alt={h1 || "Professional car transport truck"}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-800/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 pb-4 container">
          <div className="grid lg:grid-cols-2 gap-12 pt-12">
            {/* Left Column - Main Content */}
            <div className="space-y-8 overflow-hidden">
              <div className="space-y-6">
                {/* IMPORTANT: LCP H1 must render instantly (no motion wrapper) */}
                <h1 className="heading-1 text-white text-balance">{h1}</h1>

                <p className="text-xl text-brand-100 max-w-2xl leading-relaxed">
                  {subheading ||
                    "Get instant quotes for professional car shipping services. Door-to-door delivery, competitive rates, and exceptional customer service guaranteed."}
                </p>
              </div>

              {/* CTA Buttons (animated after load via client motion wrapper) */}
              <CommonHeroMotion>
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
                <p className="mt-4 text-white font-bold">• No Credit Card Required • $0 Upfront Deposit</p>
              </CommonHeroMotion>
            </div>

            {/* Right Column - Quote Form Preview (client only) */}
            <div className="hidden lg:block relative z-30">
              <WorkingQuoteFormClient />
            </div>
          </div>
        </div>

        {/* Animated Background Elements (client-only so they don't block LCP) */}
        <CommonHeroMotion floatingDots />
      </section>

      {/* Trust Badges (client-only if heavy) */}
      <CommonTrustBadgesClient />
    </>
  );
}
