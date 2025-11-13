'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRightIcon, ChevronLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { Loader } from '@googlemaps/js-api-loader'
import { AnimatePresence, motion } from 'framer-motion'
import toast from 'react-hot-toast'

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 30 }, (_, i) => currentYear - i)

const popularMakes = [
  'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'BMW', 'Mercedes-Benz',
  'Audi', 'Volkswagen', 'Hyundai', 'Kia', 'Mazda', 'Subaru', 'Lexus', 'Acura'
]

const STEPS = [
  { id: 1, name: 'Location', title: 'Where are you shipping?' },
  { id: 2, name: 'Vehicle', title: 'Tell us about your vehicle' },
  { id: 3, name: 'Service', title: 'Choose your service options' },
  { id: 4, name: 'Contact', title: 'Your contact information' }
]

export default function CompleteQuoteForm({ isPopup = false, onClose }) {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [autocompleteFrom, setAutocompleteFrom] = useState(null)
  const [autocompleteTo, setAutocompleteTo] = useState(null)
  
  const [formData, setFormData] = useState({
    // Step 1: Location
    from: '',
    to: '',
    fromDetails: null,
    toDetails: null,
    moveDate: '',
    flexible: false,
    
    // Step 2: Vehicle
    year: currentYear.toString(),
    make: '',
    model: '',
    condition: 'running',
    isOversized: false,
    specialInstructions: '',
    
    // Step 3: Service Options
    transportType: 'open',
    pickupType: 'doorToDoor',
    expedited: false,
    
    // Step 4: Contact
    name: '',
    phone: '',
    email: '',
    promoCode: ''
  })

  const [errors, setErrors] = useState({})
  const [distance, setDistance] = useState(0)
  const [pricing, setPricing] = useState(0)

  // Initialize Google Maps
  useEffect(() => {
    const initializeGoogleMaps = async () => {
      if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
        console.warn('Google Maps API key not found')
        return
      }

      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          version: 'weekly',
          libraries: ['places'],
        })

        await loader.load()
        setIsLoaded(true)
      } catch (error) {
        console.error('Error loading Google Maps:', error)
      }
    }

    initializeGoogleMaps()
  }, [])

  // Initialize autocomplete when step changes
  useEffect(() => {
    if (currentStep === 1 && isLoaded && window.google) {
      const timer = setTimeout(() => {
        const fromInput = document.getElementById('complete-from-input')
        const toInput = document.getElementById('complete-to-input')

        if (fromInput && !autocompleteFrom) {
          const fromAutocomplete = new window.google.maps.places.Autocomplete(fromInput, {
            componentRestrictions: { country: 'us' },
            types: ['(cities)'],
          })

          fromAutocomplete.addListener('place_changed', () => {
            const place = fromAutocomplete.getPlace()
            if (place.formatted_address) {
              setFormData(prev => ({
                ...prev,
                from: place.formatted_address,
                fromDetails: {
                  lat: place.geometry?.location?.lat(),
                  lng: place.geometry?.location?.lng(),
                  state: extractState(place.address_components),
                  city: extractCity(place.address_components)
                }
              }))
            }
          })

          setAutocompleteFrom(fromAutocomplete)
        }

        if (toInput && !autocompleteTo) {
          const toAutocomplete = new window.google.maps.places.Autocomplete(toInput, {
            componentRestrictions: { country: 'us' },
            types: ['(cities)'],
          })

          toAutocomplete.addListener('place_changed', () => {
            const place = toAutocomplete.getPlace()
            if (place.formatted_address) {
              setFormData(prev => ({
                ...prev,
                to: place.formatted_address,
                toDetails: {
                  lat: place.geometry?.location?.lat(),
                  lng: place.geometry?.location?.lng(),
                  state: extractState(place.address_components),
                  city: extractCity(place.address_components)
                }
              }))
            }
          })

          setAutocompleteTo(toAutocomplete)
        }
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [currentStep, isLoaded, autocompleteFrom, autocompleteTo])

  // Calculate distance and pricing when both locations are set
  useEffect(() => {
    if (formData.fromDetails && formData.toDetails) {
      calculateDistance()
    }
  }, [formData.fromDetails, formData.toDetails])

  // Update pricing when service options change
  useEffect(() => {
    if (distance) {
      calculatePricing()
    }
  }, [distance, formData.transportType, formData.pickupType, formData.expedited, formData.condition])

  const extractState = (components) => {
    if (!components) return null
    const stateComponent = components.find(c => 
      c.types.includes('administrative_area_level_1')
    )
    return stateComponent?.short_name || null
  }

  const extractCity = (components) => {
    if (!components) return null
    const cityComponent = components.find(c => 
      c.types.includes('locality') || c.types.includes('sublocality')
    )
    return cityComponent?.long_name || null
  }

  const calculateDistance = async () => {
    if (!formData.fromDetails || !formData.toDetails) return

    try {
      const response = await fetch('/api/calculate-distance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          origin: formData.fromDetails,
          destination: formData.toDetails,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setDistance(data.distance)
      }
    } catch (error) {
      console.error('Error calculating distance:', error)
    }
  }

  const calculatePricing = () => {
    if (!distance) return

    // Basic pricing calculation
    const baseFee = 200
    const perMile = 1.10
    let basePrice = baseFee + (distance * perMile)

    // Transport type multiplier
    if (formData.transportType === 'enclosed') {
      basePrice *= 1.4
    }

    // Pickup type adjustment
    if (formData.pickupType === 'terminalToTerminal') {
      basePrice -= 100
    }

    // Additional services
    if (formData.expedited) {
      basePrice += 300
    }

    if (formData.condition === 'notRunning') {
      basePrice += 200
    }

    if (formData.isOversized) {
      basePrice += 300
    }

    const minPrice = Math.round(basePrice * 0.9)
    const maxPrice = Math.round(basePrice * 1.1)

    setPricing({
      estimatedPrice: Math.round(basePrice),
      priceRange: { min: minPrice, max: maxPrice },
      distance
    })
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }))
    }
  }

  const validateStep = (step) => {
    const newErrors = {}

    switch (step) {
      case 1:
        if (!formData.from.trim()) newErrors.from = 'Pickup location is required'
        if (!formData.to.trim()) newErrors.to = 'Delivery location is required'
        break
      case 2:
        if (!formData.year) newErrors.year = 'Vehicle year is required'
        if (!formData.make.trim()) newErrors.make = 'Vehicle make is required'
        if (!formData.model.trim()) newErrors.model = 'Vehicle model is required'
        break
      case 3:
        // Service options are optional or have defaults
        break
      case 4:
        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format'
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateStep(4)) return

    setIsSubmitting(true)

    try {
      const quoteData = {
        // Location data
        originAddress: formData.from,
        destinationAddress: formData.to,
        originCity: formData.fromDetails?.city || '',
        originState: formData.fromDetails?.state || '',
        destinationCity: formData.toDetails?.city || '',
        destinationState: formData.toDetails?.state || '',
        moveDate: formData.moveDate || null,
        flexible: formData.flexible || false,

        // Vehicle data
        vehicles: [{
          year: parseInt(formData.year),
          make: formData.make,
          model: formData.model,
          condition: formData.condition || 'running',
          isOversized: formData.isOversized, 
          specialInstructions: 'Not specified'
        }],

        // Service options
        transportType: formData.transportType,
        pickupType: formData.pickupType,
        expedited: formData.expedited || false,
        seasonalService: false,
        seasonalStartDate: '',
        seasonalReturnDate: '',


        // Contact info
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        promoCode: '',

        // Calculated data
        distance, 
      } 

      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit quote')
      }

      const result = await response.json()
      
      // Clear form data
      if (typeof window !== 'undefined') {
        localStorage.removeItem('homepageQuoteData')
        localStorage.removeItem('quoteFormData')
      }

      // Close popup if it's a popup
      if (onClose) onClose()

      // Redirect to success page
      router.push(`/quote-success/${result.quoteId}`)
      
    } catch (error) {
      console.error('Error submitting quote:', error)
      toast.error('There was an error submitting your quote. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerClass = isPopup 
    ? "bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 relative max-h-[90vh] overflow-y-auto"
    : "bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20"

  return (
    <div className={containerClass}>
      {isPopup && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
      
      <div className="p-6 lg:p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            {STEPS.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= step.id 
                    ? 'bg-brand-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircleIcon className="h-5 w-5" />
                  ) : (
                    step.id
                  )}
                </div>
                {index < STEPS.length - 1 && (
                  <div className={`h-1 w-16 mx-2 ${
                    currentStep > step.id ? 'bg-brand-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-900">
              {STEPS[currentStep - 1]?.title}
            </h2>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Step 1: Location */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">From *</label>
                      <input
                        id="complete-from-input"
                        type="text"
                        placeholder="City, State"
                        value={formData.from}
                        onChange={(e) => handleInputChange('from', e.target.value)}
                        className={`form-input ${errors.from ? 'border-red-500' : ''}`}
                        autoComplete="off"
                      />
                      {errors.from && <p className="form-error">{errors.from}</p>}
                    </div>
                    <div>
                      <label className="form-label">To *</label>
                      <input
                        id="complete-to-input"
                        type="text"
                        placeholder="City, State"
                        value={formData.to}
                        onChange={(e) => handleInputChange('to', e.target.value)}
                        className={`form-input ${errors.to ? 'border-red-500' : ''}`}
                        autoComplete="off"
                      />
                      {errors.to && <p className="form-error">{errors.to}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Preferred Ship Date</label>
                      <input
                        type="date"
                        value={formData.moveDate}
                        onChange={(e) => handleInputChange('moveDate', e.target.value)}
                        className="form-input"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    {/* <div className="flex items-center pt-6">
                      <input
                        type="checkbox"
                        checked={formData.flexible}
                        onChange={(e) => handleInputChange('flexible', e.target.checked)}
                        className="h-4 w-4 text-brand-600 border-gray-300 rounded"
                      />
                      <label className="ml-2 text-sm text-gray-700">
                        I'm flexible with dates
                      </label>
                    </div> */}
                  </div>

                  {distance && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-800 font-medium">
                        Distance: {distance} miles
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Vehicle */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="form-label">Year *</label>
                      <select 
                        value={formData.year}
                        onChange={(e) => handleInputChange('year', e.target.value)}
                        className={`form-select ${errors.year ? 'border-red-500' : ''}`}
                      >
                        <option value="">Year</option>
                        {years.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                      {errors.year && <p className="form-error">{errors.year}</p>}
                    </div>
                    <div>
                      <label className="form-label">Make *</label>
                      <input
                        type="text"
                        placeholder="Honda"
                        value={formData.make}
                        onChange={(e) => handleInputChange('make', e.target.value)}
                        className={`form-input ${errors.make ? 'border-red-500' : ''}`}
                        list="makes-list-complete"
                      />
                      <datalist id="makes-list-complete">
                        {popularMakes.map(make => (
                          <option key={make} value={make} />
                        ))}
                      </datalist>
                      {errors.make && <p className="form-error">{errors.make}</p>}
                    </div>
                    <div>
                      <label className="form-label">Model *</label>
                      <input
                        type="text"
                        placeholder="Civic"
                        value={formData.model}
                        onChange={(e) => handleInputChange('model', e.target.value)}
                        className={`form-input ${errors.model ? 'border-red-500' : ''}`}
                      />
                      {errors.model && <p className="form-error">{errors.model}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Vehicle Condition</label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className={`border rounded-lg p-3 cursor-pointer ${
                        formData.condition === 'running' ? 'border-brand-500 bg-brand-50' : 'border-gray-300'
                      }`}>
                        <input
                          type="radio"
                          name="condition"
                          value="running"
                          checked={formData.condition === 'running'}
                          onChange={(e) => handleInputChange('condition', e.target.value)}
                          className="sr-only"
                        />
                        <div className="font-medium">Running</div>
                        <div className="text-sm text-gray-600">Vehicle runs and drives</div>
                      </label>
                      <label className={`border rounded-lg p-3 cursor-pointer ${
                        formData.condition === 'notRunning' ? 'border-brand-500 bg-brand-50' : 'border-gray-300'
                      }`}>
                        <input
                          type="radio"
                          name="condition"
                          value="notRunning"
                          checked={formData.condition === 'notRunning'}
                          onChange={(e) => handleInputChange('condition', e.target.value)}
                          className="sr-only"
                        />
                        <div className="font-medium">Not Running</div>
                        <div className="text-sm text-gray-600">Inoperable (+$200)</div>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.isOversized}
                        onChange={(e) => handleInputChange('isOversized', e.target.checked)}
                        className="h-4 w-4 text-brand-600 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm">
                        Oversized vehicle (lifted trucks, large SUVs) +$300
                      </span>
                    </label>
                  </div> 
                </div>
              )}

              {/* Step 3: Service Options */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="form-label">Transport Type</label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className={`border rounded-lg p-4 cursor-pointer ${
                        formData.transportType === 'open' ? 'border-brand-500 bg-brand-50' : 'border-gray-300'
                      }`}>
                        <input
                          type="radio"
                          name="transportType"
                          value="open"
                          checked={formData.transportType === 'open'}
                          onChange={(e) => handleInputChange('transportType', e.target.value)}
                          className="sr-only"
                        />
                        <div className="font-medium">Open Transport</div> 
                      </label>
                      <label className={`border rounded-lg p-4 cursor-pointer ${
                        formData.transportType === 'enclosed' ? 'border-brand-500 bg-brand-50' : 'border-gray-300'
                      }`}>
                        <input
                          type="radio"
                          name="transportType"
                          value="enclosed"
                          checked={formData.transportType === 'enclosed'}
                          onChange={(e) => handleInputChange('transportType', e.target.value)}
                          className="sr-only"
                        />
                        <div className="font-medium">Enclosed Transport</div> 
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Pickup & Delivery</label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className={`border rounded-lg p-4 cursor-pointer ${
                        formData.pickupType === 'doorToDoor' ? 'border-brand-500 bg-brand-50' : 'border-gray-300'
                      }`}>
                        <input
                          type="radio"
                          name="pickupType"
                          value="doorToDoor"
                          checked={formData.pickupType === 'doorToDoor'}
                          onChange={(e) => handleInputChange('pickupType', e.target.value)}
                          className="sr-only"
                        />
                        <div className="font-medium">Door-to-Door</div> 
                      </label>
                      <label className={`border rounded-lg p-4 cursor-pointer ${
                        formData.pickupType === 'terminalToTerminal' ? 'border-brand-500 bg-brand-50' : 'border-gray-300'
                      }`}>
                        <input
                          type="radio"
                          name="pickupType"
                          value="terminalToTerminal"
                          checked={formData.pickupType === 'terminalToTerminal'}
                          onChange={(e) => handleInputChange('pickupType', e.target.value)}
                          className="sr-only"
                        />
                        <div className="font-medium">Terminal-to-Terminal</div> 
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.expedited}
                        onChange={(e) => handleInputChange('expedited', e.target.checked)}
                        className="h-4 w-4 text-brand-600 border-gray-300 rounded"
                      />
                      <span className="ml-2">
                        <span className="font-medium">Expedited Service</span>
                        <span className="text-sm text-gray-600 block">
                          Priority scheduling for faster delivery (+$300)
                        </span>
                      </span>
                    </label>
                  </div>
 
                </div>
              )}

              {/* Step 4: Contact */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="form-error">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                      />
                      {errors.phone && <p className="form-error">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && <p className="form-error">{errors.email}</p>}
                    </div>
                  </div>
 
 
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <ChevronLeftIcon className="h-4 w-4" />
              <span>Back</span>
            </button>

            <div className="text-center text-sm text-gray-500">
              Step {currentStep} of {STEPS.length}
            </div>

            {currentStep < STEPS.length ? (
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Continue</span>
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex items-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner h-4 w-4" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Quote</span>
                    <CheckCircleIcon className="h-4 w-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </form>

        {/* Loading State */}
        {!isLoaded && currentStep === 1 && (
          <div className="text-center text-sm text-gray-500 mt-4">
            Loading Google Maps...
          </div>
        )}
      </div>
    </div>
  )
}