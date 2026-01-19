'use client'

import { useState } from 'react'
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 30 }, (_, i) => currentYear - i)

const popularMakes = [
  'Toyota', 'Lexus', 'Honda', 'Acura', 'Nissan', 'Infiniti', 'Mazda',
  'Subaru', 'Suzuki', 'Mitsubishi', 'Daihatsu', 'Isuzu',

  // 🇺🇸 USA
  'Ford', 'Chevrolet', 'GMC', 'Cadillac', 'Buick', 'Chrysler', 'Dodge',
  'Jeep', 'Ram', 'Tesla', 'Lincoln', 'Rivian', 'Lucid', 'Fisker',

  // 🇩🇪 Germany
  'Volkswagen', 'Audi', 'BMW', 'Mercedes-Benz', 'Porsche', 'Opel',
  'Maybach', 'Smart',

  // 🇰🇷 South Korea
  'Hyundai', 'Kia', 'Genesis', 'SsangYong',

  // 🇫🇷 France
  'Renault', 'Peugeot', 'Citroën', 'DS Automobiles',

  // 🇮🇹 Italy
  'Fiat', 'Alfa Romeo', 'Lancia', 'Ferrari', 'Lamborghini',
  'Maserati', 'Abarth',

  // 🇬🇧 United Kingdom
  'Jaguar', 'Land Rover', 'Mini', 'Rolls-Royce', 'Bentley',
  'Aston Martin', 'McLaren', 'Lotus',

  // 🇨🇳 China
  'BYD', 'Geely', 'Chery', 'Great Wall', 'Haval', 'MG',
  'NIO', 'XPeng', 'Li Auto', 'Hongqi', 'GAC', 'BAIC',

  // 🇮🇳 India
  'Maruti Suzuki', 'Tata Motors', 'Mahindra', 'Ashok Leyland',
  'Force Motors',

  // 🇪🇸 Spain
  'SEAT', 'Cupra',

  // 🇸🇪 Sweden
  'Volvo', 'Polestar', 'Koenigsegg',

  // 🇷🇺 Russia
  'Lada', 'GAZ', 'UAZ',

  // 🇨🇿 Czech Republic
  'Škoda', 'Tatra',

  // 🇷🇴 Romania
  'Dacia',

  // 🇮🇷 Iran
  'Iran Khodro', 'SAIPA',

  // 🌍 Others / Niche
  'Bugatti', 'Pagani', 'Rimac', 'Zotye', 'Proton', 'Perodua'
]

export default function VehicleForm({ register, setValue, watch, errors }) {
  const vehicles = watch('vehicles') || []

  const addVehicle = () => {
    const newVehicles = [...vehicles, {
      year: currentYear,
      make: '',
      model: '',
      condition: 'running',
      isOversized: false,
      specialInstructions: ''
    }]
    setValue('vehicles', newVehicles)
  }

  const removeVehicle = (index) => {
    if (vehicles.length > 1) {
      const newVehicles = vehicles.filter((_, i) => i !== index)
      setValue('vehicles', newVehicles)
    }
  }

  const updateVehicle = (index, field, value) => {
    const newVehicles = [...vehicles]
    newVehicles[index] = { ...newVehicles[index], [field]: value }
    setValue('vehicles', newVehicles)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Vehicle Information
        </h2>
        <p className="text-gray-600">
          Tell us about the vehicle(s) you need to ship
        </p>
      </div>

      <div className="space-y-6">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">
                Vehicle {index + 1}
              </h3>
              {vehicles.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeVehicle(index)}
                  className="text-red-600 hover:text-red-700 p-1"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Year */}
              <div>
                <label className="form-label">Year *</label>
                <select
                  {...register(`vehicles.${index}.year`, { valueAsNumber: true })}
                  className="form-select"
                  onChange={(e) => updateVehicle(index, 'year', parseInt(e.target.value))}
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                {errors.vehicles?.[index]?.year && (
                  <p className="form-error">{errors.vehicles[index].year.message}</p>
                )}
              </div>

              {/* Make */}
              <div>
                <label className="form-label">Make *</label>
                <select
                  {...register(`vehicles.${index}.make`)}
                  className="form-select"
                  onChange={(e) => updateVehicle(index, 'make', e.target.value)}
                >
                  <option value="">Select Make</option>
                  {popularMakes.map(make => (
                    <option key={make} value={make}>{make}</option>
                  ))}
                  <option value="other">Other</option>
                </select>
                {errors.vehicles?.[index]?.make && (
                  <p className="form-error">{errors.vehicles[index].make.message}</p>
                )}
              </div>

              {/* Model */}
              <div>
                <label className="form-label">Model *</label>
                <input
                  type="text"
                  {...register(`vehicles.${index}.model`)}
                  className="form-input"
                  placeholder="e.g., Accord, Camry, F-150"
                  onChange={(e) => updateVehicle(index, 'model', e.target.value)}
                />
                {errors.vehicles?.[index]?.model && (
                  <p className="form-error">{errors.vehicles[index].model.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Condition */}
              <div>
                <label className="form-label">Vehicle Condition</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      {...register(`vehicles.${index}.condition`)}
                      value="running"
                      className="form-radio text-brand-600"
                      onChange={(e) => updateVehicle(index, 'condition', e.target.value)}
                    />
                    <span className="ml-2">Running (drives normally)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      {...register(`vehicles.${index}.condition`)}
                      value="notRunning"
                      className="form-radio text-brand-600"
                      onChange={(e) => updateVehicle(index, 'condition', e.target.value)}
                    />
                    <span className="ml-2">Not Running (needs special equipment)</span>
                  </label>
                </div>
              </div>

              {/* Oversized */}
              <div>
                <label className="form-label">Vehicle Size</label>
                <div className="pt-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      {...register(`vehicles.${index}.isOversized`)}
                      className="form-checkbox text-brand-600"
                      onChange={(e) => updateVehicle(index, 'isOversized', e.target.checked)}
                    />
                    <span className="ml-2">Oversized vehicle (lifted, extended, etc.)</span>
                  </label>
                </div>
                <p className="form-help">
                  Check if your vehicle is modified, lifted, lowered, or larger than standard
                </p>
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="form-label">Special Instructions (Optional)</label>
              <textarea
                {...register(`vehicles.${index}.specialInstructions`)}
                rows="3"
                className="form-textarea"
                placeholder="Any special handling requirements, modifications, or notes about your vehicle..."
                onChange={(e) => updateVehicle(index, 'specialInstructions', e.target.value)}
              />
              <p className="form-help">
                Include details about modifications, damage, or special handling needs
              </p>
            </div>
          </div>
        ))}

        {/* Add Vehicle Button */}
        {/* <div className="text-center">
          <button
            type="button"
            onClick={addVehicle}
            className="btn-outline flex items-center mx-auto"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Another Vehicle
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Shipping multiple vehicles? Add them to get volume pricing.
          </p>
        </div> */}
      </div>

      {/* Vehicle Count Summary */}
      {/* <div className="bg-brand-50 rounded-lg p-4">
        <div className="text-center">
          <div className="text-lg font-semibold text-brand-800">
            {vehicles.length} Vehicle{vehicles.length !== 1 ? 's' : ''} to Ship
          </div>
          <p className="text-sm text-brand-600">
            Multiple vehicles may qualify for discounted pricing
          </p>
        </div>
      </div> */}
    </div>
  )
}