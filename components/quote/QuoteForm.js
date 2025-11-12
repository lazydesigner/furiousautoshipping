'use client'

import { useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  MapPinIcon,
  TruckIcon,
  CogIcon,
  UserIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline'
import AddressAutocomplete from './AddressAutocomplete'
import VehicleForm from './VehicleForm'
import ServiceOptions from './ServiceOptions'
import ContactForm from './ContactForm'
import QuoteReview from './QuoteReview'
import ProgressBar from '@/components/ui/ProgressBar'
import { calculatePricing, calculateTransitTime } from '@/lib/pricing'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'

// Form validation schema
const quoteSchema = z.object({
  // Step 1: Move Details
  originAddress: z.string().min(1, 'Origin address is required'),
  destinationAddress: z.string().min(1, 'Destination address is required'),
  moveDate: z.string().optional(),
  flexible: z.boolean().default(false),

  // Step 2: Vehicle Details
  vehicles: z.array(z.object({
    year: z.number().min(1900).max(new Date().getFullYear() + 1),
    make: z.string().min(1, 'Make is required'),
    model: z.string().min(1, 'Model is required'),
    condition: z.enum(['running', 'notRunning']).default('running'),
    isOversized: z.boolean().default(false),
    specialInstructions: z.string().optional(),
  })).min(1, 'At least one vehicle is required'),

  // Step 3: Service Options
  transportType: z.enum(['open', 'enclosed']).default('open'),
  pickupType: z.enum(['doorToDoor', 'terminalToTerminal']).default('doorToDoor'),
  expedited: z.boolean().default(false),
  seasonalService: z.boolean().default(false),
  seasonalStartDate: z.string().optional(),
  seasonalReturnDate: z.string().optional(),

  // Step 4: Contact Information
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  promoCode: z.string().optional(),

  // Step 5: Terms
  agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms'),
})

const STEPS = [
  { id: 1, name: 'Move Details', icon: MapPinIcon },
  { id: 2, name: 'Vehicle Info', icon: TruckIcon },
  { id: 3, name: 'Service Options', icon: CogIcon },
  { id: 4, name: 'Contact Info', icon: UserIcon },
  { id: 5, name: 'Review & Submit', icon: CheckCircleIcon },
]

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [addressDetails, setAddressDetails] = useState({
    origin: null,
    destination: null
  })
  const [pricing, setPricing] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [distance, setDistance] = useState(null)
  const [isCalculatingDistance, setIsCalculatingDistance] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      vehicles: [{ 
        year: new Date().getFullYear(), 
        make: '', 
        model: '', 
        condition: 'running',
        isOversized: false 
      }],
      transportType: 'open',
      pickupType: 'doorToDoor',
      expedited: false,
      seasonalService: false,
      flexible: false,
      agreeToTerms: false,
    },
  })

  const watchedData = watch()

  // Debounced distance calculation
  const calculateDistance = useCallback(async (originAddress, destinationAddress) => {
    if (!originAddress || !destinationAddress) {
      console.log('Missing addresses for distance calculation')
      return
    }

    setIsCalculatingDistance(true)
    
    try {
      console.log('Calculating distance between:', originAddress, 'and', destinationAddress)
      
      const response = await fetch('/api/calculate-distance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          origin: originAddress,
          destination: destinationAddress,
        }),
      })

      console.log('Distance calculation API response:', response) 

      if (response.ok) {
        const data = await response.json()
        console.log('Distance calculation response:', data)
        
        if (data.distance && data.distance > 0) {
          setDistance(data.distance)
        } else {
          console.warn('Distance API returned null or zero distance:', data)
          // Try with coordinates if addresses fail
          if (addressDetails.origin?.coords && addressDetails.destination?.coords) {
            console.log('Trying coordinate-based calculation...')
            const coordDistance = calculateHaversineDistance(
              addressDetails.origin.coords,
              addressDetails.destination.coords
            )
            setDistance(coordDistance)
            console.log('Fallback coordinate distance:', coordDistance)
          }
        }
      } else {
        console.error('Distance calculation failed:', await response.text())
      }
    } catch (error) {
      console.error('Error calculating distance:', error)
      // Fallback to coordinate-based calculation
      if (addressDetails.origin?.coords && addressDetails.destination?.coords) {
        console.log('Using fallback coordinate calculation due to API error')
      }
    } finally {
      setIsCalculatingDistance(false)
    }
  }, [addressDetails.origin, addressDetails.destination])
 

  // Calculate distance when both addresses are available
  useEffect(() => {
    const originAddress = watchedData.originAddress
    const destinationAddress = watchedData.destinationAddress
    
    if (originAddress && destinationAddress && originAddress.length > 5 && destinationAddress.length > 5) {
      // Add a small delay to avoid too many API calls
      const timeoutId = setTimeout(() => {
        calculateDistance(originAddress, destinationAddress)
      }, 500)
      
      return () => clearTimeout(timeoutId)
    }
  }, [watchedData.originAddress, watchedData.destinationAddress, calculateDistance])

  // Calculate pricing when relevant data changes
  useEffect(() => {
    if (distance && watchedData.vehicles?.length > 0 && watchedData.vehicles[0]?.make) {
      try {
        console.log('Calculating pricing with:', {
          distance,
          vehicles: watchedData.vehicles,
          transportType: watchedData.transportType,
          addressDetails
        })

        const pricingResult = calculatePricing({
          distance,
          vehicles: watchedData.vehicles,
          transportType: watchedData.transportType,
          pickupType: watchedData.pickupType,
          expedited: watchedData.expedited,
          seasonalService: watchedData.seasonalService,
          moveDate: watchedData.moveDate,
          originState: addressDetails.origin?.state,
          destinationState: addressDetails.destination?.state,
        })

        const transitTime = calculateTransitTime(distance, watchedData.expedited)
        
        const finalPricing = {
          ...pricingResult,
          transitTime,
          distance,
        }
        
        console.log('Calculated pricing:', finalPricing)
        setPricing(finalPricing)
      } catch (error) {
        console.error('Error calculating pricing:', error)
      }
    } else {
      console.log('Not calculating pricing - missing data:', {
        distance,
        vehiclesLength: watchedData.vehicles?.length,
        firstVehicleMake: watchedData.vehicles?.[0]?.make
      })
    }
  }, [distance, watchedData.vehicles, watchedData.transportType, watchedData.pickupType, watchedData.expedited, watchedData.seasonalService, watchedData.moveDate, addressDetails])

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep)
    const isValid = await trigger(fieldsToValidate)
    
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    try {
      const submitData = {
        ...data,
        distance,
        pricing,
        originCity: addressDetails.origin?.city,
        originState: addressDetails.origin?.state,
        destinationCity: addressDetails.destination?.city,
        destinationState: addressDetails.destination?.state,
      }

      console.log('Submitting quote with data:', submitData)

      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to submit quote')
      }

      const result = await response.json()
      console.log('Quote submission result:', result)
      
      // Redirect to success page
      window.location.href = `/quote-success/${result.quoteId}`
      
    } catch (error) {
      console.error('Error submitting quote:', error)
      toast.error('There was an error submitting your quote. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAddressChange = (type, address, details) => {
    console.log(`${type} address changed:`, address, details)
    
    // Update form value
    setValue(type === 'origin' ? 'originAddress' : 'destinationAddress', address)
    
    // Update address details
    setAddressDetails(prev => ({
      ...prev,
      [type]: details
    }))
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <ProgressBar 
          steps={STEPS}
          currentStep={currentStep}
        />
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 lg:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[200px]"
          >
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Where are you moving your vehicle?
                  </h2>
                  <p className="text-gray-600">
                    Enter your pickup and delivery locations
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <AddressAutocomplete
                    label="Pickup Location"
                    placeholder="Enter city, state or ZIP"
                    value={watchedData.originAddress || ''}
                    onChange={(address, details) => handleAddressChange('origin', address, details)}
                    error={errors.originAddress?.message}
                  />

                  <AddressAutocomplete
                    label="Delivery Location"
                    placeholder="Enter city, state or ZIP"
                    value={watchedData.destinationAddress || ''}
                    onChange={(address, details) => handleAddressChange('destination', address, details)}
                    error={errors.destinationAddress?.message}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">
                      Preferred Ship Date
                    </label>
                    <input
                      type="date"
                      {...register('moveDate')}
                      className="form-input"
                      min={new Date().toISOString().split('T')[0]}
                    />
                    <p className="form-help">
                      Leave blank if you're flexible with dates
                    </p>
                  </div>
                </div>

                {/* Distance Display */}
                {isCalculatingDistance && (
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <p className="text-blue-700 font-medium">
                      Calculating distance...
                    </p>
                  </div>
                )}

                {distance && !isCalculatingDistance && (
                  <div className="bg-brand-50 rounded-lg p-4 text-center">
                    <p className="text-brand-700 font-medium">
                      Estimated Distance: {Math.round(distance)} miles
                    </p>
                  </div>
                )}

                {/* Address Details Debug (remove in production) */}
                {/* {process.env.NODE_ENV === 'development' && (
                  <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                    <div>Origin: {addressDetails.origin?.city}, {addressDetails.origin?.state}</div>
                    <div>Destination: {addressDetails.destination?.city}, {addressDetails.destination?.state}</div>
                    <div>Distance: {distance}</div>
                  </div>
                )} */}
              </div>
            )}

            {currentStep === 2 && (
              <VehicleForm
                register={register}
                setValue={setValue}
                watch={watch}
                errors={errors}
              />
            )}

            {currentStep === 3 && (
              <ServiceOptions
                register={register}
                setValue={setValue}
                watch={watch}
                errors={errors}
                pricing={pricing}
              />
            )}

            {currentStep === 4 && (
              <ContactForm
                register={register}
                errors={errors}
              />
            )}

            {currentStep === 5 && (
              <QuoteReview
                formData={watchedData}
                pricing={pricing}
                register={register}
                errors={errors}
                addressDetails={addressDetails}
                distance={distance}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Debug Panel - only in development */}
        {/* {process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg text-xs max-w-md max-h-96 overflow-y-auto z-50">
            <h3 className="font-bold mb-2">Debug Panel</h3>
            
            <div className="space-y-2">
              <div>
                <strong>Form Addresses:</strong>
                <div>Origin: "{watchedData.originAddress}"</div>
                <div>Destination: "{watchedData.destinationAddress}"</div>
              </div>
              
              <div>
                <strong>Address Details:</strong>
                <div>Origin: {addressDetails.origin ? `${addressDetails.origin.city}, ${addressDetails.origin.state}` : 'null'}</div>
                <div>Destination: {addressDetails.destination ? `${addressDetails.destination.city}, ${addressDetails.destination.state}` : 'null'}</div>
              </div>
              
              <div>
                <strong>Distance:</strong> {distance ? `${Math.round(distance)} miles` : 'Not calculated'}
              </div>
              
              <div>
                <strong>Pricing:</strong> {pricing ? `${pricing.estimatedPrice}` : 'Not calculated'}
              </div>
              
              <div>
                <strong>Vehicles:</strong>
                {watchedData.vehicles?.map((vehicle, index) => (
                  <div key={index}>
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </div>
                ))}
              </div>
              
              <div>
                <strong>Calculation Status:</strong>
                <div>Calculating Distance: {isCalculatingDistance ? 'Yes' : 'No'}</div>
                <div>Ready for Distance: {!!(watchedData.originAddress && watchedData.destinationAddress && addressDetails.origin && addressDetails.destination) ? 'Yes' : 'No'}</div>
                <div>Ready for Pricing: {!!(distance && watchedData.vehicles?.[0]?.make) ? 'Yes' : 'No'}</div>
              </div>
            </div>
          </div>
        )} */}

        {/* Navigation Buttons */}
        <div className={`flex justify-between items-center mt-8 pt-6 border-t border-gray-200`}>
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={cn(
              'flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors',
              currentStep === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            )}
          >
            <ChevronLeftIcon className="h-4 w-4" />
            <span>Back</span>
          </button>

          <div className="flex space-x-3">
            {currentStep < STEPS.length ? (
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary btn-lg flex items-center space-x-2"
              >
                <span>Continue</span>
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary btn-lg flex items-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner h-4 w-4" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Get My Quote</span>
                    <CheckCircleIcon className="h-4 w-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

function getFieldsForStep(step) {
  switch (step) {
    case 1:
      return ['originAddress', 'destinationAddress']
    case 2:
      return ['vehicles']
    case 3:
      return ['transportType', 'pickupType']
    case 4:
      return ['name', 'phone', 'email']
    case 5:
      return ['agreeToTerms']
    default:
      return []
  }
}