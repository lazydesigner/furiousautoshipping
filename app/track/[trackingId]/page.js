'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { 
  TruckIcon, 
  CheckCircleIcon, 
  ClockIcon, 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChevronRightIcon , 
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

const statusSteps = [
  { id: 'NEW', label: 'Quote Received', description: 'Your quote has been submitted' },
  { id: 'CONTACTED', label: 'Contact Made', description: 'We\'ve reached out to confirm details' },
  { id: 'IN_PROGRESS', label: 'Carrier Assigned', description: 'Professional carrier has been assigned' },
  { id: 'QUOTED', label: 'Ready for Pickup', description: 'Driver will contact you for pickup' },
  { id: 'BOOKED', label: 'In Transit', description: 'Your vehicle is safely on its way' },
  { id: 'COMPLETED', label: 'Delivered', description: 'Vehicle delivered successfully' },
]

export default function TrackingPage() {
  const params = useParams()
  const trackingId = params.trackingId
  const [quote, setQuote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(`/api/quotes?id=${trackingId}`)
        if (!response.ok) {
          throw new Error('Quote not found')
        }
        const data = await response.json() 
        setQuote(data.quote)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (trackingId) {
      fetchQuote()
    }
  }, [trackingId])
  console.log('Quote data:', quote)

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="spinner h-12 w-12 mx-auto mb-4" />
          <p className="text-gray-600">Loading tracking information...</p>
        </div>
      </div>
    )
  }

  if (error || !quote) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <div className="text-center max-w-md">
          <div className="bg-red-100 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
            <ClockIcon className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Quote Not Found</h1>
          <p className="text-gray-600 mb-6">
            We couldn't find a quote with tracking ID: <strong>{trackingId}</strong>
          </p>
          <div className="space-y-3">
            <a href="/get-quote" className="btn-primary block">
              Get New Quote
            </a>
            <a href="/contact" className="btn-outline block">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    )
  }

  const currentStepIndex = statusSteps.findIndex(step => step.id === quote.status)
  const isCompleted = quote.status === 'COMPLETED'
  const isCancelled = quote.status === 'CANCELLED'

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Tracking: {quote.tracking_id}
                </h1>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Created: {new Date(quote.created_at).toLocaleDateString()}</span>
                  <span>•</span>
                  <span className={cn(
                    'px-2 py-1 rounded-full text-xs font-medium',
                    quote.status === 'COMPLETED' && 'bg-green-100 text-green-800',
                    quote.status === 'CANCELLED' && 'bg-red-100 text-red-800',
                    !['COMPLETED', 'CANCELLED'].includes(quote.status) && 'bg-blue-100 text-blue-800'
                  )}>
                    {quote.status.replace('_', ' ')}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex gap-3">
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                  className="btn-outline flex items-center"
                >
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  Call Us
                </a>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL}`}
                  className="btn-primary flex items-center"
                >
                  <EnvelopeIcon className="h-4 w-4 mr-2" />
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Status Timeline */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Shipment Status</h2>
                
                <div className="space-y-6">
                  {statusSteps.map((step, index) => {
                    const isActive = index <= currentStepIndex
                    const isCurrent = index === currentStepIndex
                    
                    return (
                      <div key={step.id} className="relative flex items-start">
                        {/* Timeline line */}
                        {index < statusSteps.length - 1 && (
                          <div className={cn(
                            'absolute left-4 top-8 w-0.5 h-16',
                            isActive ? 'bg-brand-600' : 'bg-gray-300'
                          )} />
                        )}
                        
                        {/* Status icon */}
                        <div className={cn(
                          'flex items-center justify-center w-8 h-8 rounded-full border-2 mr-4',
                          isActive 
                            ? 'bg-brand-600 border-brand-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-400'
                        )}>
                          {isActive ? (
                            <CheckCircleIcon className="h-5 w-5" />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-current" />
                          )}
                        </div>
                        
                        {/* Status content */}
                        <div className="min-w-0 flex-1">
                          <h3 className={cn(
                            'text-lg font-medium',
                            isCurrent ? 'text-brand-600' : isActive ? 'text-gray-900' : 'text-gray-500'
                          )}>
                            {step.label}
                          </h3>
                          <p className={cn(
                            'text-sm',
                            isActive ? 'text-gray-600' : 'text-gray-400'
                          )}>
                            {step.description}
                          </p>
                          {isCurrent && (
                            <p className="text-sm text-brand-600 font-medium mt-1">
                              Current Status
                            </p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Quote Details */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Quote Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Route</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      <span>{quote.origin_address}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      <span>{quote.destination_address}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Service Type</h3>
                    <p className="text-sm text-gray-600 flex items-center">
                     <ChevronRightIcon  className="h-4 w-4 mr-1" />  {quote.transport_type === 'OPEN' ? 'Open Transport' : 'Enclosed Transport'}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <ChevronRightIcon  className="h-4 w-4 mr-1" /> {quote.pickup_type === 'DOOR_TO_DOOR' ? 'Door-to-Door' : 'Terminal-to-Terminal'}
                    </p>
                  </div>
                  
                  {quote.vehicles && quote.vehicles.length > 0 && (
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Vehicles</h3>
                      {quote.vehicles.map((vehicle, index) => (
                        <p key={index} className="text-sm text-gray-600 flex items-center">
                         <TruckIcon  className="h-4 w-4 mr-1" /> {vehicle.year} {vehicle.make} {vehicle.model}
                        </p>
                      ))}
                    </div>
                  )}
                  
                  {quote.totalCost && (
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Estimated Cost</h3>
                      <p className="text-lg font-semibold text-brand-600">
                        ${quote.totalCost.toLocaleString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-brand-50 rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Need Help?</h2>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <PhoneIcon className="h-4 w-4 mr-2 text-brand-600" />
                    <span>{process.env.NEXT_PUBLIC_COMPANY_PHONE}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <EnvelopeIcon className="h-4 w-4 mr-2 text-brand-600" />
                    <span>{process.env.NEXT_PUBLIC_COMPANY_EMAIL}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-4">
                  Available 24/7 for support and updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}