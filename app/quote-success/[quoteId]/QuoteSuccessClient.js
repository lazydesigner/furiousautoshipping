'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  CheckCircleIcon,
  PrinterIcon,
  ShareIcon,
  ClipboardDocumentIcon,
  MapPinIcon,
  TruckIcon,
  UserIcon,
  CalendarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  EnvelopeIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline'
import { CheckCircleIcon as CheckCircleSolid } from '@heroicons/react/24/solid'
import { formatCurrency, formatDate } from '@/lib/utils'
import toast from 'react-hot-toast'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

export default function QuoteSuccessClient({ quote }) {
  const [copied, setCopied] = useState(false)

  const copyTrackingId = async () => {
    try {
      await navigator.clipboard.writeText(quote.tracking_id)
      setCopied(true)
      toast.success('Tracking ID copied to clipboard!')
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast.error('Failed to copy tracking ID')
    }
  } 

  const printPage = () => {
    window.print()
  }

  const shareQuote = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Auto Transport Quote #${quote.trackingId}`,
          text: `My auto transport quote from ${quote.originCity || 'Origin'} to ${quote.destinationCity || 'Destination'}`,
          url: window.location.href
        })
      } catch (error) {
        // User cancelled sharing or error occurred
      }
    } else {
      // Fallback: copy URL to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href)
        toast.success('Quote URL copied to clipboard!')
      } catch (error) {
        toast.error('Failed to copy URL')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <motion.div
        className="container py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Success Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <CheckCircleSolid className="h-20 w-20 text-green-500" />
              <motion.div
                className="absolute inset-0 rounded-full bg-green-500"
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
          </div>

          <h1 className="heading-1 text-gray-900 mb-4">
            Quote Submitted Successfully!
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Thank you for choosing Furious Auto Shipping. Your quote has been received
            and our team will contact you within 2-4 hours with final pricing and next steps.
          </p>

          {/* Tracking ID */}
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <div className="text-sm font-medium text-gray-500 mb-2">Your Quote ID</div>
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl font-bold text-brand-600">{quote.tracking_id}</span>
              <button
                onClick={copyTrackingId}
                className="p-2 text-gray-400 hover:text-brand-600 transition-colors"
                title="Copy tracking ID"
              >
                {copied ? (
                  <CheckCircleSolid className="h-5 w-5 text-green-500" />
                ) : (
                  <DocumentDuplicateIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Save this ID to track your quote
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex justify-center mb-12 no-print">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={printPage}
              className="btn-outline flex items-center space-x-2"
            >
              <PrinterIcon className="h-4 w-4" />
              <span>Print Quote</span>
            </button>

            <button
              onClick={shareQuote}
              className="btn-outline flex items-center space-x-2"
            >
              <ShareIcon className="h-4 w-4" />
              <span>Share Quote</span>
            </button>

            <Link
              href={`/track/${quote.id}`}
              className="btn-primary flex items-center space-x-2"
            >
              <ClipboardDocumentIcon className="h-4 w-4" />
              <span>Track Quote</span>
            </Link>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Quote Details */}
            <div className="lg:col-span-2 space-y-6">

              {/* Route Information */}
              <motion.div variants={itemVariants} className="card">
                <div className="card-header">
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-brand-600 mr-2" />
                    <h2 className="text-lg font-semibold">Route Information</h2>
                  </div>
                </div>
                <div className="card-body">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Pickup Location</div>
                      <div className="font-medium text-gray-900">{quote.origin_address}</div>
                      {quote.origin_city && quote.origin_state && (
                        <div className="text-sm text-gray-600">{quote.origin_city}, {quote.origin_state}</div>
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Delivery Location</div>
                      <div className="font-medium text-gray-900">{quote.destination_address}</div>
                      {quote.destination_city && quote.destination_state && (
                        <div className="text-sm text-gray-600">{quote.destination_city}, {quote.destination_state}</div>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-gray-200">
                    {quote.distance && (
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">Distance</div>
                        <div className="font-medium text-gray-900">{Math.round(quote.distance)} miles</div>
                      </div>
                    )}

                    {quote.moveDate && (
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">Preferred Ship Date</div>
                        <div className="font-medium text-gray-900">{formatDate(quote.move_date)}</div>
                        {quote.flexibleDates && (
                          <div className="text-xs text-green-600 mt-1">✓ Flexible dates</div>
                        )}
                      </div>
                    )}

                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Quote Date</div>
                      <div className="font-medium text-gray-900">{formatDate(quote.created_at)}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Vehicle Information */}
              <motion.div variants={itemVariants} className="card">
                <div className="card-header">
                  <div className="flex items-center">
                    <TruckIcon className="h-5 w-5 text-brand-600 mr-2" />
                    <h2 className="text-lg font-semibold">Vehicle Information</h2>
                  </div>
                </div>
                <div className="card-body">
                  <div className="space-y-4">
                    {quote.vehicles?.map((vehicle, index) => (
                      <div key={vehicle.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-medium text-gray-900">
                            Vehicle {index + 1}: {vehicle.year} {vehicle.make} {vehicle.model}
                          </h3>
                          <div className="flex gap-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${vehicle.condition === 'RUNNING'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-orange-100 text-orange-800'
                              }`}>
                              {vehicle.condition === 'RUNNING' ? 'Running' : 'Not Running'}
                            </span>
                            {vehicle.isOversized && (
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                Oversized
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-gray-500">Year</div>
                            <div className="font-medium">{vehicle.year}</div>
                          </div>
                          <div>
                            <div className="text-gray-500">Make</div>
                            <div className="font-medium">{vehicle.make}</div>
                          </div>
                          <div>
                            <div className="text-gray-500">Model</div>
                            <div className="font-medium">{vehicle.model}</div>
                          </div>
                        </div>

                        {vehicle.specialInstructions && (
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <div className="text-sm text-gray-500 mb-1">Special Instructions</div>
                            <div className="text-sm text-gray-700">{vehicle.specialInstructions}</div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Service Options */}
              <motion.div variants={itemVariants} className="card">
                <div className="card-header">
                  <div className="flex items-center">
                    <CurrencyDollarIcon className="h-5 w-5 text-brand-600 mr-2" />
                    <h2 className="text-lg font-semibold">Service Options</h2>
                  </div>
                </div>
                <div className="card-body">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Transport Type</div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-900">
                          {quote.transportType === 'OPEN' ? 'Open Transport' : 'Enclosed Transport'}
                        </span>
                        {quote.transportType === 'ENCLOSED' && (
                          <span className="ml-2 px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Premium
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Service Type</div>
                      <div className="font-medium text-gray-900">
                        {quote.pickupType === 'DOOR_TO_DOOR' ? 'Door-to-Door' : 'Terminal-to-Terminal'}
                      </div>
                    </div>
                  </div>

                  {(quote.expedited || quote.seasonalService) && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="text-sm font-medium text-gray-500 mb-3">Additional Services</div>
                      <div className="flex flex-wrap gap-2">
                        {quote.expedited && (
                          <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                            ⚡ Expedited Service
                          </span>
                        )}
                        {quote.seasonalService && (
                          <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                            ☀️ Snowbird Service
                          </span>
                        )}
                      </div>

                      {quote.seasonalService && (quote.seasonal_start_date || quote.seasonal_return_date) && (
                        <div className="mt-3 text-sm">
                          {quote.seasonal_start_date && (<div>Start Date: {formatDate(quote.seasonal_start_date
                          )}</div>
                          )}
                          {quote.seasonal_return_date
                            && (
                              <div>Return Date: {formatDate(quote.seasonal_return_date
                              )}</div>
                            )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div variants={itemVariants} className="card">
                <div className="card-header">
                  <div className="flex items-center">
                    <UserIcon className="h-5 w-5 text-brand-600 mr-2" />
                    <h2 className="text-lg font-semibold">Contact Information</h2>
                  </div>
                </div>
                <div className="card-body">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Name</div>
                      <div className="font-medium text-gray-900">{quote.name}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Phone</div>
                      <div className="font-medium text-gray-900">{quote.phone}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Email</div>
                      <div className="font-medium text-gray-900">{quote.email}</div>
                    </div>
                  </div>

                  {quote.promoCode && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="text-sm font-medium text-gray-500 mb-1">Promo Code</div>
                      <div className="font-medium text-gray-900">{quote.promoCode}</div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">

              {/* Pricing Estimate */}
              {(quote.baseCost || quote.totalCost) && (
                <motion.div variants={itemVariants} className="card">
                  <div className="card-header">
                    <h2 className="text-lg font-semibold">Price Estimate</h2>
                  </div>
                  <div className="card-body text-center">
                    <div className="text-3xl font-bold text-brand-600 mb-2">
                      {quote.totalCost ? formatCurrency(quote.totalCost) : 'Calculating...'}
                    </div>
                    <div className="text-sm text-gray-600 mb-4">Estimated Total Cost</div>

                    {quote.costBreakdown && Object.keys(quote.costBreakdown).length > 0 && (
                      <div className="text-left">
                        <div className="text-sm font-medium text-gray-700 mb-2">Cost Breakdown:</div>
                        <div className="space-y-1 text-sm">
                          {Object.entries(quote.costBreakdown).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-gray-600 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                              </span>
                              <span className="font-medium">
                                {typeof value === 'number' ? formatCurrency(value) : value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="text-xs text-gray-500 mt-4">
                      * Final price confirmed upon carrier assignment
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Next Steps */}
              <motion.div variants={itemVariants} className="card">
                <div className="card-header">
                  <h2 className="text-lg font-semibold">What Happens Next?</h2>
                </div>
                <div className="card-body">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        1
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 mb-1">Review & Contact</div>
                        <div className="text-sm text-gray-600">Our team reviews your quote within 2-4 hours</div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        2
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 mb-1">Confirmation Call</div>
                        <div className="text-sm text-gray-600">We call to confirm details and final pricing</div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        3
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 mb-1">Carrier Assignment</div>
                        <div className="text-sm text-gray-600">We assign a qualified carrier and schedule pickup</div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        4
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 mb-1">Vehicle Pickup</div>
                        <div className="text-sm text-gray-600">Professional pickup and safe transport to destination</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Support */}
              <motion.div variants={itemVariants} className="card">
                <div className="card-header">
                  <h2 className="text-lg font-semibold">Need Help?</h2>
                </div>
                <div className="card-body">
                  <div className="space-y-3">
                    <a
                      href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <PhoneIcon className="h-5 w-5 text-brand-600" />
                      <div>
                        <div className="font-medium text-gray-900">{process.env.NEXT_PUBLIC_COMPANY_PHONE}</div>
                        <div className="text-sm text-gray-600">Call us anytime</div>
                      </div>
                    </a>

                    <a
                      href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL}`}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <EnvelopeIcon className="h-5 w-5 text-brand-600" />
                      <div>
                        <div className="font-medium text-gray-900">{process.env.NEXT_PUBLIC_COMPANY_EMAIL}</div>
                        <div className="text-sm text-gray-600">Email support</div>
                      </div>
                    </a>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link
                      href="/contact"
                      className="btn-outline w-full text-center"
                    >
                      Contact Form
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Important Notice */}
              <motion.div variants={itemVariants} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-blue-900 mb-1">
                      Quote Confirmation Sent
                    </h4>
                    <p className="text-sm text-blue-700">
                      A detailed confirmation email has been sent to {quote.email}.
                      Please check your inbox and spam folder.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Additional Actions */}
        <motion.div variants={itemVariants} className="text-center mt-12 no-print">
          <div className="space-y-4">
            <p className="text-gray-600">
              Want to ship another vehicle or need a different quote?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-quote"
                className="btn-primary"
              >
                Get Another Quote
              </Link>
              <Link
                href="/"
                className="btn-outline"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}