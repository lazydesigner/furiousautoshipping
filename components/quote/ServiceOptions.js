'use client'

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { 
  TruckIcon, 
  ShieldCheckIcon, 
  HomeIcon, 
  BuildingOfficeIcon,
  BoltIcon,
  SunIcon 
} from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/solid'
import { formatCurrency } from '@/lib/utils'
import { cn } from '@/lib/utils'

const transportTypes = [
  {
    id: 'open',
    name: 'Open Transport',
    description: 'Most popular and economical option',
    icon: TruckIcon,
    features: [
      'Most cost-effective option',
      'Faster booking availability',
      'Same insurance coverage',
      'Professional drivers'
    ],
    priceMultiplier: 1,
    popular: true
  },
  {
    id: 'enclosed',
    name: 'Enclosed Transport',
    description: 'Premium protection for your vehicle',
    icon: ShieldCheckIcon,
    features: [
      'Complete weather protection',
      'Protection from road debris',
      'Ideal for luxury vehicles',
      'Limited exposure handling'
    ],
    priceMultiplier: 1.4,
    premium: true
  }
]

const pickupTypes = [
  {
    id: 'doorToDoor',
    name: 'Door-to-Door',
    description: 'Pickup and delivery at your location',
    icon: HomeIcon,
    features: [
      'Maximum convenience',
      'No terminal visits required',
      'Flexible scheduling',
      'Most popular choice'
    ],
    priceAdjustment: 0,
    popular: true
  },
  {
    id: 'terminalToTerminal',
    name: 'Terminal-to-Terminal',
    description: 'Drop-off and pickup at terminals',
    icon: BuildingOfficeIcon,
    features: [
      'Lower cost option',
      'Secure terminal facilities',
      'Available in major cities',
      'Flexible timing'
    ],
    priceAdjustment: -100,
    savings: true
  }
]

const additionalServices = [
  {
    id: 'expedited',
    name: 'Expedited Service',
    description: 'Priority scheduling for faster delivery',
    icon: BoltIcon,
    features: [
      'Priority carrier assignment',
      'Faster pickup (24-48 hours)',
      'Express delivery',
      'Dedicated support'
    ],
    price: 300,
    timeReduction: '50%'
  },
  {
    id: 'seasonalService',
    name: 'Snowbird Service',
    description: 'Seasonal transport for winter residents',
    icon: SunIcon,
    features: [
      'Optimized seasonal routes',
      'Flexible return scheduling',
      'Special snowbird pricing',
      'Popular route availability'
    ],
    discount: 0.05,
    seasonal: true
  }
]

export default function ServiceOptions({ register, setValue, watch, errors, pricing }) {
  const watchedValues = watch()
  const [showTooltip, setShowTooltip] = useState(null)

  const handleTransportTypeChange = (value) => {
    setValue('transportType', value)
  }

  const handlePickupTypeChange = (value) => {
    setValue('pickupType', value)
  }

  const handleServiceToggle = (serviceId, checked) => {
    setValue(serviceId, checked)
    
    // Handle seasonal service date fields
    if (serviceId === 'seasonalService' && checked) {
      // Show seasonal date fields
    }
  }

  const calculatePriceImpact = (basePrice, type, value) => {
    if (!basePrice) return null
    
    switch (type) {
      case 'transport':
        const multiplier = transportTypes.find(t => t.id === value)?.priceMultiplier || 1
        return Math.round(basePrice * multiplier) - basePrice
      case 'pickup':
        return pickupTypes.find(t => t.id === value)?.priceAdjustment || 0
      case 'expedited':
        return additionalServices.find(s => s.id === 'expedited')?.price || 0
      default:
        return 0
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Choose Your Service Options
        </h2>
        <p className="text-gray-600">
          Select the transport type and additional services that best fit your needs
        </p>
      </div>

      {/* Transport Type Selection */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Transport Type</h3>
        <RadioGroup
          value={watchedValues.transportType}
          onChange={handleTransportTypeChange}
        >
          <div className="grid md:grid-cols-2 gap-4">
            {transportTypes.map((type) => (
              <RadioGroup.Option
                key={type.id}
                value={type.id}
                className={({ checked }) =>
                  cn(
                    'relative rounded-lg p-4 cursor-pointer border-2 transition-all',
                    checked
                      ? 'border-brand-500 bg-brand-50'
                      : 'border-gray-300 bg-white hover:border-gray-400'
                  )
                }
              >
                {({ checked }) => (
                  <>
                    {/* Popular/Premium Badge */}
                    {type.popular && (
                      <div className="absolute -top-2 left-4">
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    {type.premium && (
                      <div className="absolute -top-2 left-4">
                        <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Premium
                        </span>
                      </div>
                    )}

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <div className={cn(
                          'w-4 h-4 rounded-full border-2 flex items-center justify-center',
                          checked
                            ? 'border-brand-500 bg-brand-500'
                            : 'border-gray-300'
                        )}>
                          {checked && (
                            <CheckIcon className="w-3 h-3 text-white" />
                          )}
                        </div>
                      </div>
                      
                      <div className="ml-3 flex-1">
                        <div className="flex items-center mb-2">
                          <type.icon className="h-5 w-5 text-brand-600 mr-2" />
                          <div className="font-medium text-gray-900">{type.name}</div>
                          {/* {pricing && (
                            <div className="ml-auto text-sm font-medium text-brand-600">
                              {type.priceMultiplier === 1 
                                ? 'Included' 
                                : `+${formatCurrency(calculatePriceImpact(pricing.estimatedPrice, 'transport', type.id))}`
                              }
                            </div>
                          )} */}
                        </div>
                        
                        <p className="text-sm text-gray-600">{type.description}</p>
                        {/* <p className="text-sm text-gray-600 mb-3">{type.description}</p> */}
                        
                        {/* <ul className="space-y-1">
                          {type.features.map((feature) => (
                            <li key={feature} className="flex items-center text-xs">
                              <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mr-2" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul> */}
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Pickup Type Selection */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Pickup & Delivery Type</h3>
        <RadioGroup
          value={watchedValues.pickupType}
          onChange={handlePickupTypeChange}
        >
          <div className="grid md:grid-cols-2 gap-4">
            {pickupTypes.map((type) => (
              <RadioGroup.Option
                key={type.id}
                value={type.id}
                className={({ checked }) =>
                  cn(
                    'relative rounded-lg p-4 cursor-pointer border-2 transition-all',
                    checked
                      ? 'border-brand-500 bg-brand-50'
                      : 'border-gray-300 bg-white hover:border-gray-400'
                  )
                }
              >
                {({ checked }) => (
                  <>
                    {/* Popular/Savings Badge */}
                    {type.popular && (
                      <div className="absolute -top-2 left-4">
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    {type.savings && (
                      <div className="absolute -top-2 left-4">
                        <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Save Money
                        </span>
                      </div>
                    )}

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <div className={cn(
                          'w-4 h-4 rounded-full border-2 flex items-center justify-center',
                          checked
                            ? 'border-brand-500 bg-brand-500'
                            : 'border-gray-300'
                        )}>
                          {checked && (
                            <CheckIcon className="w-3 h-3 text-white" />
                          )}
                        </div>
                      </div>
                      
                      <div className="ml-3 flex-1">
                        <div className="flex items-center mb-2">
                          <type.icon className="h-5 w-5 text-brand-600 mr-2" />
                          <div className="font-medium text-gray-900">{type.name}</div>
                          {/* {pricing && (
                            <div className="ml-auto text-sm font-medium">
                              {type.priceAdjustment === 0 
                                ? <span className="text-brand-600">Included</span>
                                : <span className="text-green-600">Save {formatCurrency(Math.abs(type.priceAdjustment))}</span>
                              }
                            </div>
                          )} */}
                        </div>
                        
                        <p className="text-sm text-gray-600">{type.description}</p>
                        {/* <p className="text-sm text-gray-600 mb-3">{type.description}</p> */}
                        
                        {/* <ul className="space-y-1">
                          {type.features.map((feature) => (
                            <li key={feature} className="flex items-center text-xs">
                              <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mr-2" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul> */}
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Additional Services */}
      <div className='hidden'>
        <h3 className="text-lg font-semibold mb-4">Additional Services</h3>
        <div className="space-y-4">
          {additionalServices.map((service) => (
            <div key={service.id} className="border border-gray-300 rounded-lg p-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    {...register(service.id)}
                    className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
                    onChange={(e) => handleServiceToggle(service.id, e.target.checked)}
                  />
                </div>
                
                <div className="ml-3 flex-1">
                  <div className="flex items-center mb-2">
                    <service.icon className="h-5 w-5 text-brand-600 mr-2" />
                    <div className="font-medium text-gray-900">{service.name}</div>
                    {/* {pricing && service.price && (
                      <div className="ml-auto text-sm font-medium text-brand-600">
                        +{formatCurrency(service.price)}
                      </div>
                    )}
                    {service.discount && (
                      <div className="ml-auto text-sm font-medium text-green-600">
                        Save {Math.round(service.discount * 100)}%
                      </div>
                    )} */}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>
{/*                   
                  <ul className="space-y-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-xs">
                        <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul> */}

                  {service.timeReduction && (
                    <div className="mt-2 text-xs text-green-600 font-medium">
                      ⚡ Reduces transit time by up to {service.timeReduction}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seasonal Service Dates */}
      {watchedValues.seasonalService && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-3">Seasonal Service Dates</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="form-label text-blue-800">Start Date</label>
              <input
                type="date"
                {...register('seasonalStartDate')}
                className="form-input"
                min={new Date().toISOString().split('T')[0]}
              />
              <p className="form-help text-blue-600">When do you want to ship your vehicle?</p>
            </div>
            <div>
              <label className="form-label text-blue-800">Return Date (Optional)</label>
              <input
                type="date"
                {...register('seasonalReturnDate')}
                className="form-input"
              />
              <p className="form-help text-blue-600">When do you want it shipped back?</p>
            </div>
          </div>
        </div>
      )}

      {/* Pricing Summary */}
      {/* {pricing && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold mb-4">Price Estimate</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Base Transport Cost:</span>
              <span>{formatCurrency(pricing.breakdown?.baseFee + pricing.breakdown?.distanceCost)}</span>
            </div>
            
            {watchedValues.transportType === 'enclosed' && (
              <div className="flex justify-between text-blue-600">
                <span>Enclosed Transport:</span>
                <span>+{formatCurrency(pricing.breakdown?.vehicleCosts || 0)}</span>
              </div>
            )}
            
            {watchedValues.pickupType === 'terminalToTerminal' && (
              <div className="flex justify-between text-green-600">
                <span>Terminal Service Discount:</span>
                <span>-{formatCurrency(100)}</span>
              </div>
            )}
            
            {watchedValues.expedited && (
              <div className="flex justify-between text-orange-600">
                <span>Expedited Service:</span>
                <span>+{formatCurrency(300)}</span>
              </div>
            )}
            
            <div className="border-t border-gray-300 pt-2 mt-2">
              <div className="flex justify-between font-semibold text-lg">
                <span>Estimated Total:</span>
                <span className="text-brand-600">
                  {formatCurrency(pricing.priceRange?.min)} - {formatCurrency(pricing.priceRange?.max)}
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-3">
            * Final price confirmed upon carrier assignment. Prices may vary based on current market conditions.
          </p>
        </div>
      )} */}

      {errors.transportType && (
        <p className="form-error">{errors.transportType.message}</p>
      )}
      {errors.pickupType && (
        <p className="form-error">{errors.pickupType.message}</p>
      )}
    </div>
  )
}