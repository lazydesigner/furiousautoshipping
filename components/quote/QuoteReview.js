import { 
  MapPinIcon, 
  TruckIcon, 
  UserIcon, 
  CalendarIcon,
  ClockIcon,
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline'
import { formatCurrency, formatDate } from '@/lib/utils'

export default function QuoteReview({ formData, pricing, register, errors }) {
  const vehicles = formData.vehicles || []
  
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Review Your Quote
        </h2>
        <p className="text-gray-600">
          Please review your information before submitting your quote request
        </p>
      </div>

      <div className="space-y-6">
        {/* Route Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <MapPinIcon className="h-5 w-5 text-brand-600 mr-2" />
            <h3 className="text-lg font-semibold">Route Information</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm font-medium text-gray-500 mb-1">Pickup Location</div>
              <div className="text-gray-900">{formData.originAddress}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500 mb-1">Delivery Location</div>
              <div className="text-gray-900">{formData.destinationAddress}</div>
            </div>
          </div>
          
          {formData.moveDate && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-sm font-medium text-gray-500 mb-1">Preferred Ship Date</div>
              <div className="text-gray-900">{formatDate(formData.moveDate)}</div>
              {formData.flexible && (
                <div className="text-sm text-green-600 mt-1">✓ Flexible dates for better pricing</div>
              )}
            </div>
          )}
          
          {pricing?.distance && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-sm font-medium text-gray-500 mb-1">Distance</div>
              <div className="text-gray-900">{Math.round(pricing.distance)} miles</div>
            </div>
          )}
        </div>

        {/* Vehicle Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <TruckIcon className="h-5 w-5 text-brand-600 mr-2" />
            <h3 className="text-lg font-semibold">Vehicle Information</h3>
          </div>
          
          <div className="space-y-4">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-medium text-gray-900">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Condition: {vehicle.condition === 'running' ? 'Running' : 'Not Running'}
                      {vehicle.isOversized && ' • Oversized'}
                    </div>
                  </div>
                  {vehicle.specialInstructions && (
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Special Instructions</div>
                      <div className="text-sm text-gray-700">{vehicle.specialInstructions}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Options */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <CurrencyDollarIcon className="h-5 w-5 text-brand-600 mr-2" />
            <h3 className="text-lg font-semibold">Service Options</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm font-medium text-gray-500 mb-1">Transport Type</div>
              <div className="text-gray-900">
                {formData.transportType === 'open' ? 'Open Transport' : 'Enclosed Transport'}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500 mb-1">Service Type</div>
              <div className="text-gray-900">
                {formData.pickupType === 'doorToDoor' ? 'Door-to-Door' : 'Terminal-to-Terminal'}
              </div>
            </div>
          </div>
          
          {(formData.expedited || formData.seasonalService) && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-sm font-medium text-gray-500 mb-2">Additional Services</div>
              <div className="space-y-1">
                {formData.expedited && (
                  <div className="text-sm text-gray-900">✓ Expedited Service</div>
                )}
                {formData.seasonalService && (
                  <div className="text-sm text-gray-900">✓ Snowbird Service</div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <UserIcon className="h-5 w-5 text-brand-600 mr-2" />
            <h3 className="text-lg font-semibold">Contact Information</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm font-medium text-gray-500 mb-1">Name</div>
              <div className="text-gray-900">{formData.name}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500 mb-1">Phone</div>
              <div className="text-gray-900">{formData.phone}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500 mb-1">Email</div>
              <div className="text-gray-900">{formData.email}</div>
            </div>
          </div>
          
          {formData.promoCode && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-sm font-medium text-gray-500 mb-1">Promo Code</div>
              <div className="text-gray-900">{formData.promoCode}</div>
            </div>
          )}
        </div>

        {/* Pricing Summary */}
        {pricing && (
          <div className="bg-gradient-to-r from-brand-50 to-brand-100 border border-brand-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <CurrencyDollarIcon className="h-5 w-5 text-brand-600 mr-2" />
              <h3 className="text-lg font-semibold text-brand-900">Price Estimate</h3>
            </div>
            
            <div className="space-y-3">
              {/* Price Range */}
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-900 mb-1">
                  {formatCurrency(pricing.priceRange?.min)} - {formatCurrency(pricing.priceRange?.max)}
                </div>
                <div className="text-brand-700">Estimated Total Cost</div>
              </div>
              
              {/* Transit Time */}
              {pricing.transitTime && (
                <div className="flex items-center justify-center space-x-2 text-brand-700">
                  <ClockIcon className="h-4 w-4" />
                  <span>
                    Estimated transit time: {pricing.transitTime.min}-{pricing.transitTime.max} days
                  </span>
                </div>
              )}
              
              {/* Price Breakdown */}
              <div className="bg-white rounded-lg p-4 mt-4">
                <div className="text-sm font-medium text-gray-900 mb-3">Price Breakdown</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Transport Cost:</span>
                    <span className="text-gray-900">
                      {formatCurrency((pricing.breakdown?.baseFee || 0) + (pricing.breakdown?.distanceCost || 0))}
                    </span>
                  </div>
                  
                  {pricing.breakdown?.vehicleCosts > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service Upgrades:</span>
                      <span className="text-gray-900">+{formatCurrency(pricing.breakdown.vehicleCosts)}</span>
                    </div>
                  )}
                  
                  {Object.entries(pricing.breakdown?.surcharges || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <span className="text-gray-900">+{formatCurrency(value)}</span>
                    </div>
                  ))}
                  
                  {Object.entries(pricing.breakdown?.discounts || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')} Discount:</span>
                      <span className="text-green-600">-{formatCurrency(value)}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-xs text-brand-600 text-center">
                * Final price confirmed upon carrier assignment
              </div>
            </div>
          </div>
        )}

        {/* Terms and Conditions */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('agreeToTerms')}
                className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded mt-1"
              />
              <div className="ml-3">
                <label className="text-sm text-gray-700">
                  I agree to the{' '}
                  <a href="/terms" target="_blank" className="text-brand-600 hover:text-brand-700 underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" target="_blank" className="text-brand-600 hover:text-brand-700 underline">
                    Privacy Policy
                  </a>
                  . I understand that this is a quote request and not a binding contract. *
                </label>
                {errors.agreeToTerms && (
                  <p className="form-error mt-1">{errors.agreeToTerms.message}</p>
                )}
              </div>
            </div>
            
            <div className="text-xs text-gray-500 space-y-1">
              <p>• Quote is valid for 7 days from submission</p>
              <p>• Final pricing confirmed upon carrier assignment</p>
              <p>• Deposit required to secure booking (typically $100-300)</p>
              <p>• Balance due to driver upon delivery</p>
            </div>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-blue-900 mb-3">What Happens Next?</h4>
          <div className="space-y-3 text-sm text-blue-800">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs font-bold text-blue-900 mt-0.5">
                1
              </div>
              <div className="ml-3">
                <div className="font-medium">Instant Confirmation</div>
                <div>You'll receive a quote confirmation email within minutes</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs font-bold text-blue-900 mt-0.5">
                2
              </div>
              <div className="ml-3">
                <div className="font-medium">Team Review (2-4 hours)</div>
                <div>Our specialists review your quote and find the best carrier</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs font-bold text-blue-900 mt-0.5">
                3
              </div>
              <div className="ml-3">
                <div className="font-medium">Personal Contact</div>
                <div>We'll call to confirm details and provide final pricing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}