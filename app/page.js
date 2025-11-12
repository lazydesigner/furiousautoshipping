import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Services from '@/components/home/Services'
import HowItWorks from '@/components/home/HowItWorks'
import Testimonials from '@/components/home/Testimonials'
import TrustBadges from '@/components/home/TrustBadges'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'

export const metadata = {
  title: 'Fast, Reliable Auto Transport Services | Get Instant Quote',
  description: 'Ship your car anywhere in the USA with Furious Auto Shipping. Get instant quotes, door-to-door service, and professional car transport at competitive rates.',
  keywords: 'auto transport, car shipping, vehicle transport, door-to-door car shipping, enclosed transport, open transport, auto shipping quotes',
  openGraph: {
    title: 'Furious Auto Shipping - Fast, Reliable Car Transport Services',
    description: 'Get instant quotes for auto transport services across the USA. Professional car shipping with competitive rates.',
    images: ['/images/hero-bg.jpg'],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Features />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}