'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import QuoteForm to avoid SSR issues
const QuoteForm = dynamic(() => import('./QuoteForm'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div className="spinner h-8 w-8 mx-auto mb-4" />
        <p className="text-gray-600">Loading quote form...</p>
      </div>
    </div>
  )
})

export default function QuoteFormWrapper({ isModal = false, onSuccess = null }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="spinner h-8 w-8 mx-auto mb-4" />
          <p className="text-gray-600">Loading quote form...</p>
        </div>
      </div>
    )
  }

  return <QuoteForm isModal={isModal} onSuccess={onSuccess} />
}