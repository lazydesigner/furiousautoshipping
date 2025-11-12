'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import AddressAutocomplete from './AddressAutocomplete'

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 30 }, (_, i) => currentYear - i)

const popularMakes = [
  'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'BMW', 'Mercedes-Benz',
  'Audi', 'Volkswagen', 'Hyundai', 'Kia', 'Mazda', 'Subaru', 'Lexus', 'Acura'
]

export default function QuickQuoteForm({ isPopup = false, onClose }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    year: '',
    make: '',
    model: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleAddressChange = (field, address, details) => {
    setFormData(prev => ({
      ...prev,
      [field]: address
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Store form data in localStorage for the full quote form
    if (typeof window !== 'undefined') {
      const quoteData = {
        originAddress: formData.from,
        destinationAddress: formData.to,
        vehicles: [{
          year: parseInt(formData.year) || currentYear,
          make: formData.make,
          model: formData.model,
          condition: 'running',
          isOversized: false
        }]
      }
      // localStorage.setItem('quickQuoteData', JSON.stringify(quoteData))
    }
    
    // Navigate to full quote form
    router.push('/get-quote')
    
    // Close popup if it's a popup
    if (onClose) onClose()
  }

  const containerClass = isPopup 
    ? "bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md mx-4 relative"
    : "bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20"

  return (
    <div className={containerClass}>
      {isPopup && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Get Your Free Quote
          </h3>
          <p className="text-gray-600">
            Calculate your auto transport cost in seconds
          </p>
        </div>
        
        <div className="space-y-4">
          {/* From and To with Autocomplete */}
          <div className="grid grid-cols-2 gap-4">
            <AddressAutocomplete
              label="From"
              placeholder="City, State"
              value={formData.from}
              onChange={(address, details) => handleAddressChange('from', address, details)}
            />
            <AddressAutocomplete
              label="To"
              placeholder="City, State"
              value={formData.to}
              onChange={(address, details) => handleAddressChange('to', address, details)}
            />
          </div>
          
          {/* Year and Make */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="form-label">Vehicle Year</label>
              <select 
                value={formData.year}
                onChange={(e) => handleInputChange('year', e.target.value)}
                className="form-select"
                required
              >
                <option value="">Select Year</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="form-label">Make</label>
              <input
                type="text"
                placeholder="Honda"
                value={formData.make}
                onChange={(e) => handleInputChange('make', e.target.value)}
                className="form-input"
                list="makes-list"
                required
              />
              <datalist id="makes-list">
                {popularMakes.map(make => (
                  <option key={make} value={make} />
                ))}
              </datalist>
            </div>
          </div>
          
          {/* Model */}
          <div>
            <label className="form-label">Model</label>
            <input
              type="text"
              placeholder="Civic"
              value={formData.model}
              onChange={(e) => handleInputChange('model', e.target.value)}
              className="form-input"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full btn-primary btn-lg flex items-center justify-center group"
          >
            Get Instant Quote
            <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="text-center text-sm text-gray-500">
          ✓ No obligation • ✓ Instant results • ✓ Best rates guaranteed
        </div>
      </form>
    </div>
  )
}