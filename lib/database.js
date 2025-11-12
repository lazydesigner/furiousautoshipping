import { Pool } from 'pg'

// Database connection configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'furious_auto_shipping',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
}

// Create connection pool
const pool = new Pool(dbConfig)

// Handle pool errors
pool.on('error', (err) => {
  console.error('Unexpected error on idle client:', err)
  process.exit(-1)
})

// Database connection wrapper
class Database {
  constructor() {
    this.pool = pool
  }

  // Execute a query
  async query(text, params = []) {
    const start = Date.now()
    try {
      const res = await this.pool.query(text, params)
      const duration = Date.now() - start
      
      if (process.env.NODE_ENV === 'development') {
        console.log('Executed query:', {
          text: text.substring(0, 100) + (text.length > 100 ? '...' : ''),
          duration: duration + 'ms',
          rows: res.rowCount
        })
      }
      
      return res
    } catch (error) {
      console.error('Database query error:', {
        text: text.substring(0, 100) + (text.length > 100 ? '...' : ''),
        error: error.message,
        stack: error.stack
      })
      throw error
    }
  }

  // Get a client from the pool for transactions
  async getClient() {
    return await this.pool.connect()
  }

  // Execute a transaction
  async transaction(callback) {
    const client = await this.getClient()
    try {
      await client.query('BEGIN')
      const result = await callback(client)
      await client.query('COMMIT')
      return result
    } catch (error) {
      await client.query('ROLLBACK')
      throw error
    } finally {
      client.release()
    }
  }

  // Close all connections
  async close() {
    await this.pool.end()
  }

  // Test database connection
  async testConnection() {
    try {
      const result = await this.query('SELECT NOW() as current_time')
      console.log('Database connection successful:', result.rows[0])
      return true
    } catch (error) {
      console.error('Database connection failed:', error.message)
      return false
    }
  }
}

// Create and export database instance
const db = new Database()

export default db

// Helper functions for common operations
export const dbHelpers = {
  // Generate UUID
  generateId: () => {
    return crypto.randomUUID ? crypto.randomUUID() : 
           require('crypto').randomBytes(16).toString('hex')
  },

  // Format query results for JSON responses
  formatResults: (results) => {
    if (!results.rows) return null
    return results.rows.map(row => {
      // Convert date objects to ISO strings
      const formatted = {}
      for (const [key, value] of Object.entries(row)) {
        if (value instanceof Date) {
          formatted[key] = value.toISOString()
        } else {
          formatted[key] = value
        }
      }
      return formatted
    })
  },

  // Paginate results
  paginate: (page = 1, limit = 50) => {
    const offset = (page - 1) * limit
    return {
      limit: Math.min(limit, 100), // Max 100 items per page
      offset: Math.max(offset, 0)
    }
  },

  // Build WHERE clause from filters
  buildWhereClause: (filters = {}) => {
    const conditions = []
    const values = []
    let paramCount = 1

    for (const [key, value] of Object.entries(filters)) {
      if (value !== undefined && value !== null && value !== '') {
        if (Array.isArray(value)) {
          // Handle array values (IN clause)
          const placeholders = value.map(() => `$${paramCount++}`).join(', ')
          conditions.push(`${key} IN (${placeholders})`)
          values.push(...value)
        } else if (typeof value === 'string' && value.includes('%')) {
          // Handle LIKE queries
          conditions.push(`${key} ILIKE $${paramCount++}`)
          values.push(value)
        } else {
          // Handle exact matches
          conditions.push(`${key} = $${paramCount++}`)
          values.push(value)
        }
      }
    }

    return {
      whereClause: conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '',
      values
    }
  },

  // Convert camelCase to snake_case for database columns
  toSnakeCase: (str) => {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
  },

  // Convert snake_case to camelCase for JavaScript objects
  toCamelCase: (str) => {
    return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase())
  },

  // Convert object keys from snake_case to camelCase
  convertKeysToCamelCase: (obj) => {
    if (Array.isArray(obj)) {
      return obj.map(item => dbHelpers.convertKeysToCamelCase(item))
    } else if (obj !== null && typeof obj === 'object') {
      const converted = {}
      for (const [key, value] of Object.entries(obj)) {
        const camelKey = dbHelpers.toCamelCase(key)
        converted[camelKey] = dbHelpers.convertKeysToCamelCase(value)
      }
      return converted
    }
    return obj
  },

  // Convert object keys from camelCase to snake_case
  convertKeysToSnakeCase: (obj) => {
    if (Array.isArray(obj)) {
      return obj.map(item => dbHelpers.convertKeysToSnakeCase(item))
    } else if (obj !== null && typeof obj === 'object') {
      const converted = {}
      for (const [key, value] of Object.entries(obj)) {
        const snakeKey = dbHelpers.toSnakeCase(key)
        converted[snakeKey] = dbHelpers.convertKeysToSnakeCase(value)
      }
      return converted
    }
    return obj
  }
}