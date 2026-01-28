'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Logo({ className, showText = true, ...props }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 90)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // run once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={cn('flex items-center space-x-2', className)} {...props}>
      {showText && (
        <Image
          src={
            scrolled
              ? '/images/final-logo.webp'   // logo AFTER 200px
              : '/images/white-logo.webp'  // logo BEFORE 200px
          }
          width={200}
          height={50}
          alt="Fast, Reliable Auto Transport Across America"
          priority
        />
      )}
    </div>
  )
}
