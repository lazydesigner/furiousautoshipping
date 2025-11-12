import { isSnowbirdRoute } from './utils'

// Base pricing configuration
export const PRICING_CONFIG = {
  baseFee: 200,
  perMile: 1.10,
  
  // Vehicle surcharges
  vehicleSurcharges: {
    additional: 150, // per additional vehicle
    nonRunning: 200,
    oversized: 300,
  },
  
  // Service type multipliers
  serviceMultipliers: {
    open: 1.0,
    enclosed: 1.4,
  },
  
  // Delivery type surcharges
  deliveryTypesSurcharges: {
    doorToDoor: 0,
    terminalToTerminal: -100,
  },
  
  // Special service surcharges
  specialServices: {
    expedited: 300,
    winterSurcharge: 150, // Nov-Mar
    remotepickup: 100, // for remote areas
  },
  
  // Seasonal discounts
  seasonalDiscounts: {
    snowbird: 0.05, // 5% discount for snowbird routes
  },
  
  // Distance-based adjustments
  distanceAdjustments: [
    { min: 0, max: 500, multiplier: 1.2 },
    { min: 501, max: 1000, multiplier: 1.1 },
    { min: 1001, max: 1500, multiplier: 1.0 },
    { min: 1501, max: 2500, multiplier: 0.95 },
    { min: 2501, max: Infinity, multiplier: 0.9 },
  ],
}

/**
 * Calculate auto transport pricing
 */
export function calculatePricing(quoteData) {
  const {
    distance,
    vehicles = [],
    transportType = 'open',
    pickupType = 'doorToDoor',
    expedited = false,
    seasonalService = false,
    moveDate,
    originState,
    destinationState,
  } = quoteData

  if (!distance || !vehicles.length) {
    throw new Error('Distance and vehicle information are required')
  }

  const breakdown = {
    baseFee: PRICING_CONFIG.baseFee,
    distanceCost: 0,
    vehicleCosts: 0,
    surcharges: {},
    discounts: {},
    total: 0,
  }

  // Distance-based cost
  const distanceMultiplier = getDistanceMultiplier(distance)
  breakdown.distanceCost = distance * PRICING_CONFIG.perMile * distanceMultiplier

  // Vehicle costs
  const primaryVehicle = vehicles[0]
  const additionalVehicles = vehicles.slice(1)

  // Additional vehicles
  if (additionalVehicles.length > 0) {
    breakdown.surcharges.additionalVehicles = 
      additionalVehicles.length * PRICING_CONFIG.vehicleSurcharges.additional
  }

  // Vehicle condition surcharges
  const nonRunningVehicles = vehicles.filter(v => v.condition === 'notRunning').length
  if (nonRunningVehicles > 0) {
    breakdown.surcharges.nonRunning = 
      nonRunningVehicles * PRICING_CONFIG.vehicleSurcharges.nonRunning
  }

  // Oversized vehicles
  const oversizedVehicles = vehicles.filter(v => v.isOversized).length
  if (oversizedVehicles > 0) {
    breakdown.surcharges.oversized = 
      oversizedVehicles * PRICING_CONFIG.vehicleSurcharges.oversized
  }

  // Service type multiplier
  const serviceMultiplier = PRICING_CONFIG.serviceMultipliers[transportType] || 1.0
  const baseTotal = breakdown.baseFee + breakdown.distanceCost
  breakdown.vehicleCosts = baseTotal * (serviceMultiplier - 1)

  // Delivery type adjustment
  const deliveryAdjustment = PRICING_CONFIG.deliveryTypesSurcharges[pickupType] || 0
  if (deliveryAdjustment !== 0) {
    if (deliveryAdjustment > 0) {
      breakdown.surcharges.deliveryType = deliveryAdjustment
    } else {
      breakdown.discounts.terminalDelivery = Math.abs(deliveryAdjustment)
    }
  }

  // Expedited service
  if (expedited) {
    breakdown.surcharges.expedited = PRICING_CONFIG.specialServices.expedited
  }

  // Winter surcharge (November - March)
  const moveMonth = moveDate ? new Date(moveDate).getMonth() + 1 : new Date().getMonth() + 1
  if (moveMonth >= 11 || moveMonth <= 3) {
    breakdown.surcharges.winter = PRICING_CONFIG.specialServices.winterSurcharge
  }

  // Snowbird discount
  if (seasonalService && isSnowbirdRoute(originState, destinationState, moveDate ? new Date(moveDate) : new Date())) {
    const discount = (baseTotal + Object.values(breakdown.surcharges).reduce((sum, val) => sum + val, 0)) * 
                    PRICING_CONFIG.seasonalDiscounts.snowbird
    breakdown.discounts.snowbird = discount
  }

  // Calculate total
  const surchargeTotal = Object.values(breakdown.surcharges).reduce((sum, val) => sum + val, 0)
  const discountTotal = Object.values(breakdown.discounts).reduce((sum, val) => sum + val, 0)
  
  breakdown.total = Math.round(
    breakdown.baseFee + 
    breakdown.distanceCost + 
    breakdown.vehicleCosts + 
    surchargeTotal - 
    discountTotal
  )

  // Create price range (±10%)
  const minPrice = Math.round(breakdown.total * 0.9)
  const maxPrice = Math.round(breakdown.total * 1.1)

  return {
    breakdown,
    estimatedPrice: breakdown.total,
    priceRange: {
      min: minPrice,
      max: maxPrice,
    },
    currency: 'USD',
  }
}

/**
 * Get distance multiplier based on distance brackets
 */
function getDistanceMultiplier(distance) {
  const bracket = PRICING_CONFIG.distanceAdjustments.find(
    adj => distance >= adj.min && distance <= adj.max
  )
  return bracket ? bracket.multiplier : 1.0
}

/**
 * Calculate estimated transit time
 */
export function calculateTransitTime(distance, expedited = false) {
  let baseDays = Math.ceil(distance / 500) + 1 // ~500 miles per day + 1 day buffer
  
  if (expedited) {
    baseDays = Math.max(1, Math.ceil(baseDays * 0.7)) // 30% faster
  }
  
  return {
    min: Math.max(1, baseDays - 1),
    max: baseDays + 2,
  }
}

/**
 * Get popular route pricing (for marketing/display purposes)
 */
export function getPopularRoutePricing() {
  const routes = [
    { from: 'Los Angeles, CA', to: 'New York, NY', distance: 2789 },
    { from: 'Miami, FL', to: 'Seattle, WA', distance: 3308 },
    { from: 'Chicago, IL', to: 'Los Angeles, CA', distance: 2015 },
    { from: 'New York, NY', to: 'Miami, FL', distance: 1280 },
    { from: 'Denver, CO', to: 'Atlanta, GA', distance: 1398 },
    { from: 'Phoenix, AZ', to: 'Detroit, MI', distance: 1982 },
  ]

  return routes.map(route => {
    const pricing = calculatePricing({
      distance: route.distance,
      vehicles: [{ condition: 'running', isOversized: false }],
      transportType: 'open',
      pickupType: 'doorToDoor',
    })

    return {
      ...route,
      ...pricing,
      transitTime: calculateTransitTime(route.distance),
    }
  })
}

/**
 * Validate pricing data
 */
export function validatePricingData(data) {
  const errors = []

  if (!data.distance || data.distance <= 0) {
    errors.push('Valid distance is required')
  }

  if (!data.vehicles || !Array.isArray(data.vehicles) || data.vehicles.length === 0) {
    errors.push('At least one vehicle is required')
  }

  if (data.vehicles) {
    data.vehicles.forEach((vehicle, index) => {
      if (!vehicle.year || vehicle.year < 1900 || vehicle.year > new Date().getFullYear() + 1) {
        errors.push(`Vehicle ${index + 1}: Valid year is required`)
      }
      if (!vehicle.make || typeof vehicle.make !== 'string') {
        errors.push(`Vehicle ${index + 1}: Make is required`)
      }
      if (!vehicle.model || typeof vehicle.model !== 'string') {
        errors.push(`Vehicle ${index + 1}: Model is required`)
      }
    })
  }

  if (data.transportType && !['open', 'enclosed'].includes(data.transportType)) {
    errors.push('Invalid transport type')
  }

  if (data.pickupType && !['doorToDoor', 'terminalToTerminal'].includes(data.pickupType)) {
    errors.push('Invalid pickup type')
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}