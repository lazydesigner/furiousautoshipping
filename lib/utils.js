import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines class names using clsx and tailwind-merge
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Format phone number to display format
 */
export function formatPhoneNumber(phoneNumber) {
  const cleaned = phoneNumber.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phoneNumber
}

/**
 * Format currency
 */
export function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Format date
 */
export function formatDate(date, options = {}) {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  
  return new Intl.DateTimeFormat('en-US', {
    ...defaultOptions,
    ...options,
  }).format(new Date(date))
}

/**
 * Format relative time
 */
export function formatRelativeTime(date) {
  const now = new Date()
  const diff = now.getTime() - new Date(date).getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  
  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`
  }
  if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`
  }
  if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  }
  return 'Just now'
}

/**
 * Generate slug from string
 */
export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Capitalize first letter
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * Get initials from name
 */
export function getInitials(name) {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2)
}

/**
 * Generate random ID
 */
export function generateId(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

/**
 * Debounce function
 */
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function
 */
export function throttle(func, limit) {
  let inThrottle
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * Check if email is valid
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Check if phone number is valid (US format)
 */
export function isValidPhoneNumber(phone) {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  return phoneRegex.test(phone)
}

/**
 * Parse address components
 */
export function parseAddress(address) {
  // Basic address parsing - in production, use Google Places API
  const parts = address.split(',').map(part => part.trim())
  
  if (parts.length >= 2) {
    const stateZip = parts[parts.length - 1].trim()
    const stateZipMatch = stateZip.match(/^(.+?)\s+(\d{5}(?:-\d{4})?)$/)
    
    return {
      street: parts.slice(0, -2).join(', '),
      city: parts[parts.length - 2],
      state: stateZipMatch ? stateZipMatch[1] : '',
      zipCode: stateZipMatch ? stateZipMatch[2] : '',
      full: address
    }
  }
  
  return {
    street: '',
    city: '',
    state: '',
    zipCode: '',
    full: address
  }
}

/**
 * Calculate distance between two points (Haversine formula)
 */
export function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 3959 // Earth's radius in miles
  const dLat = toRadians(lat2 - lat1)
  const dLon = toRadians(lon2 - lon1)
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180)
}

/**
 * Get US states list
 */
export const US_STATES = [
  { code: 'AL', name: 'Alabama', url: 'alabama' },
  { code: 'AK', name: 'Alaska', url: 'alaska' },
  { code: 'AZ', name: 'Arizona', url: 'arizona' },
  { code: 'AR', name: 'Arkansas', url: 'arkansas' },
  { code: 'CA', name: 'California', url: 'california' },
  { code: 'CO', name: 'Colorado', url: 'colorado' },
  { code: 'CT', name: 'Connecticut', url: 'connecticut' },
  { code: 'DE', name: 'Delaware', url: 'delaware' },
  { code: 'FL', name: 'Florida', url: 'florida' },
  { code: 'GA', name: 'Georgia', url: 'georgia' },
  { code: 'HI', name: 'Hawaii', url: 'hawaii' },
  { code: 'ID', name: 'Idaho', url: 'idaho' },
  { code: 'IL', name: 'Illinois', url: 'illinois' },
  { code: 'IN', name: 'Indiana', url: 'indiana' },
  { code: 'IA', name: 'Iowa', url: 'iowa' },
  { code: 'KS', name: 'Kansas', url: 'kansas' },
  { code: 'KY', name: 'Kentucky', url: 'kentucky' },
  { code: 'LA', name: 'Louisiana', url: 'louisiana' },
  { code: 'ME', name: 'Maine', url: 'maine' },
  { code: 'MD', name: 'Maryland', url: 'maryland' },
  { code: 'MA', name: 'Massachusetts', url: 'massachusetts' },
  { code: 'MI', name: 'Michigan', url: 'michigan' },
  { code: 'MN', name: 'Minnesota', url: 'minnesota' },
  { code: 'MS', name: 'Mississippi', url: 'mississippi' },
  { code: 'MO', name: 'Missouri', url: 'missouri' },
  { code: 'MT', name: 'Montana', url: 'montana' },
  { code: 'NE', name: 'Nebraska', url: 'nebraska' },
  { code: 'NV', name: 'Nevada', url: 'nevada' },
  { code: 'NH', name: 'New Hampshire', url: 'new-hampshire' },
  { code: 'NJ', name: 'New Jersey', url: 'new-jersey' },
  { code: 'NM', name: 'New Mexico', url: 'new-mexico' },
  { code: 'NY', name: 'New York', url: 'new-york' },
  { code: 'NC', name: 'North Carolina', url: 'north-carolina' },
  { code: 'ND', name: 'North Dakota', url: 'north-dakota' },
  { code: 'OH', name: 'Ohio', url: 'ohio' },
  { code: 'OK', name: 'Oklahoma', url: 'oklahoma' },
  { code: 'OR', name: 'Oregon', url: 'oregon' },
  { code: 'PA', name: 'Pennsylvania', url: 'pennsylvania' },
  { code: 'RI', name: 'Rhode Island', url: 'rhode-island' },
  { code: 'SC', name: 'South Carolina', url: 'south-carolina' },
  { code: 'SD', name: 'South Dakota', url: 'south-dakota' },
  { code: 'TN', name: 'Tennessee', url: 'tennessee' },
  { code: 'TX', name: 'Texas', url: 'texas' },
  { code: 'UT', name: 'Utah', url: 'utah' },
  { code: 'VT', name: 'Vermont', url: 'vermont' },
  { code: 'VA', name: 'Virginia', url: 'virginia' },
  { code: 'WA', name: 'Washington', url: 'washington' },
  { code: 'WV', name: 'West Virginia', url: 'west-virginia' },
  { code: 'WI', name: 'Wisconsin', url: 'wisconsin' },
  { code: 'WY', name: 'Wyoming', url: 'wyoming' }
]


/**
 * Get snowbird states (seasonal migration patterns)
 */
export const SNOWBIRD_STATES = {
  winter: ['FL', 'AZ', 'TX', 'CA', 'NV'],
  summer: ['NY', 'MI', 'OH', 'PA', 'IL', 'IN', 'WI', 'MN']
}

/**
 * Check if route is snowbird route
 */
export function isSnowbirdRoute(fromState, toState, date = new Date()) {
  const month = date.getMonth() + 1 // 1-12
  const isWinterSeason = month >= 11 || month <= 3
  
  if (isWinterSeason) {
    return SNOWBIRD_STATES.summer.includes(fromState) && 
           SNOWBIRD_STATES.winter.includes(toState)
  } else {
    return SNOWBIRD_STATES.winter.includes(fromState) && 
           SNOWBIRD_STATES.summer.includes(toState)
  }
}