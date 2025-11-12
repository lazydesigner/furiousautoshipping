// Simple in-memory rate limiting
// In production, use Redis or a database for distributed rate limiting
const rateLimitMap = new Map()

/**
 * Rate limiting function
 * @param {string} identifier - Unique identifier (IP address, user ID, etc.)
 * @param {number} limit - Maximum number of requests
 * @param {number} window - Time window in seconds
 * @returns {Promise<{success: boolean, remaining: number}>}
 */
export async function rateLimit(identifier, limit = 10, window = 3600) {
  const now = Date.now()
  const windowStart = now - (window * 1000)

  // Get or create rate limit data for this identifier
  let rateLimitData = rateLimitMap.get(identifier) || []

  // Remove old requests outside the time window
  rateLimitData = rateLimitData.filter(timestamp => timestamp > windowStart)

  // Check if limit is exceeded
  if (rateLimitData.length >= limit) {
    // Update the map with cleaned data
    rateLimitMap.set(identifier, rateLimitData)
    
    return {
      success: false,
      remaining: 0,
      resetTime: Math.min(...rateLimitData) + (window * 1000),
    }
  }

  // Add current request
  rateLimitData.push(now)
  rateLimitMap.set(identifier, rateLimitData)

  return {
    success: true,
    remaining: limit - rateLimitData.length,
    resetTime: now + (window * 1000),
  }
}

/**
 * Clean up old rate limit data periodically
 */
export function cleanupRateLimitData() {
  const now = Date.now()
  const oneHour = 60 * 60 * 1000

  for (const [identifier, requests] of rateLimitMap.entries()) {
    const validRequests = requests.filter(timestamp => now - timestamp < oneHour)
    
    if (validRequests.length === 0) {
      rateLimitMap.delete(identifier)
    } else {
      rateLimitMap.set(identifier, validRequests)
    }
  }
}

// Clean up every hour
if (typeof window === 'undefined') {
  setInterval(cleanupRateLimitData, 60 * 60 * 1000)
}