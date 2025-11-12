'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="text-6xl font-bold text-gray-300 mb-4">500</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. Please try again or contact our support team.
        </p>
        <div className="space-y-3">
          <button
            onClick={() => reset()}
            className="w-full btn-primary"
          >
            Try Again
          </button>
          <Link href="/" className="block w-full btn-outline text-center">
            Go to Homepage
          </Link>
          <a href="tel:8882309116" className="block text-primary-600 hover:text-primary-700">
            Call Support: (888) 230-9116
          </a>
        </div>
      </div>
    </div>
  )
}