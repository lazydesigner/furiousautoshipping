'use client'

import { useState, useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

export default function AddressAutocomplete({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  error,
  className 
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [inputValue, setInputValue] = useState(value || '')
  
  const inputRef = useRef(null)
  const autocompleteRef = useRef(null)
  const placesServiceRef = useRef(null)
  const ignoreNextChange = useRef(false)
  const isSelectingRef = useRef(false)

  // Sync with external value changes
  useEffect(() => {
    if (!isSelectingRef.current) {
      setInputValue(value || '')
    }
  }, [value])

  useEffect(() => {
    const initializeGoogleMaps = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          version: 'weekly',
          libraries: ['places'],
        })

        await loader.load()
        setIsLoaded(true)

        // Initialize the autocomplete service
        if (window.google && window.google.maps) {
          autocompleteRef.current = new window.google.maps.places.AutocompleteService()
          placesServiceRef.current = new window.google.maps.places.PlacesService(
            document.createElement('div')
          )
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error)
      }
    }

    if (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
      initializeGoogleMaps()
    }
  }, [])

  const handleInputChange = (e) => {
    // If we're ignoring this change (because autocomplete just set it), skip it
    if (ignoreNextChange.current) {
      ignoreNextChange.current = false
      return
    }

    const newValue = e.target.value
    setInputValue(newValue)

    // Call onChange with just the input value (no details) during manual typing
    // This allows the parent to track what the user is typing
    onChange(newValue, null)

    if (newValue.length > 2 && autocompleteRef.current) {
      // Get predictions from Google Places
      autocompleteRef.current.getPlacePredictions(
        {
          input: newValue,
          componentRestrictions: { country: 'us' },
          types: ['geocode'],
        },
        (predictions, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
            setSuggestions(predictions.slice(0, 5))
            setShowSuggestions(true)
          } else {
            setSuggestions([])
            setShowSuggestions(false)
          }
        }
      )
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (prediction) => {
    // Prevent any race conditions
    isSelectingRef.current = true
    ignoreNextChange.current = true
    
    const address = prediction.description
    setInputValue(address)
    setShowSuggestions(false)

    // Get detailed place information
    if (placesServiceRef.current) {
      placesServiceRef.current.getDetails(
        {
          placeId: prediction.place_id,
          fields: ['geometry', 'address_components', 'formatted_address'],
        },
        (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            const details = extractAddressDetails(place)
            // Call onChange with both address and details
            onChange(address, details)
          } else {
            // If place details fail, still update with the address
            onChange(address, null)
          }
          
          // Reset the selecting flag after a brief delay
          setTimeout(() => {
            isSelectingRef.current = false
          }, 100)
        }
      )
    } else {
      onChange(address, null)
      setTimeout(() => {
        isSelectingRef.current = false
      }, 100)
    }
  }

  const handleBlur = () => {
    // Delay hiding suggestions to allow for clicks
    setTimeout(() => {
      setShowSuggestions(false)
    }, 200)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false)
      inputRef.current?.blur()
    }
  }

  const extractAddressDetails = (place) => {
    const components = place.address_components || []
    const details = {
      coords: {
        lat: place.geometry?.location?.lat(),
        lng: place.geometry?.location?.lng(),
      },
    }

    components.forEach(component => {
      const types = component.types
      
      if (types.includes('locality')) {
        details.city = component.long_name
      } else if (types.includes('administrative_area_level_1')) {
        details.state = component.short_name
      } else if (types.includes('postal_code')) {
        details.zipCode = component.long_name
      } else if (types.includes('country')) {
        details.country = component.short_name
      }
    })

    return details
  }

  return (
    <div className={cn('relative', className)}>
      {label && (
        <label className="form-label">
          {label}
        </label>
      )}
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MapPinIcon className="h-5 w-5 text-gray-400" />
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            'form-input pl-10',
            error && 'border-red-300 focus:border-red-500 focus:ring-red-500'
          )}
          autoComplete="off"
        />
      </div>

      {/* Error Message */}
      {error && (
        <p className="form-error">{error}</p>
      )}

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg border border-gray-200 rounded-md max-h-60 overflow-auto">
          {suggestions.map((prediction) => (
            <button
              key={prediction.place_id}
              type="button"
              onClick={() => handleSuggestionClick(prediction)}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {prediction.structured_formatting.main_text}
                  </div>
                  <div className="text-xs text-gray-500">
                    {prediction.structured_formatting.secondary_text}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-50 rounded-md flex items-center justify-center">
          <div className="text-sm text-gray-500">Loading maps...</div>
        </div>
      )}
    </div>
  )
}