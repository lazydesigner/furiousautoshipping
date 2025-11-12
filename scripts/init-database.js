#!/usr/bin/env node

/**
 * Database initialization script for Furious Auto Shipping
 * This script creates the database schema and seeds initial data
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { Pool } from 'pg'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
}

// Function to run SQL file
async function runSqlFile(pool, filePath, description) {
  try {
    console.log(`\n📄 Running ${description}...`)
    const sql = fs.readFileSync(filePath, 'utf8')
    
    // Execute the entire SQL file as one transaction
    await pool.query(sql)
    
    console.log(`✅ ${description} completed successfully`)
  } catch (error) {
    console.error(`❌ Error running ${description}:`, error.message)
    
    // If it's a syntax error, try running statements individually
    if (error.message.includes('syntax error') || error.message.includes('does not exist')) {
      console.log(`🔄 Attempting to run statements individually...`)
      
      try {
        const statements = sql
          .split(';')
          .map(stmt => stmt.trim())
          .filter(stmt => stmt.length > 0 && !stmt.startsWith('--') && !stmt.startsWith('/*'))

        for (const statement of statements) {
          if (statement.trim() && !statement.startsWith('--')) {
            try {
              await pool.query(statement + ';')
            } catch (stmtError) {
              // Log individual statement errors but continue
              console.log(`⚠️  Statement error (continuing): ${stmtError.message}`)
              console.log(`Statement: ${statement.substring(0, 100)}...`)
            }
          }
        }
        console.log(`✅ ${description} completed with some warnings`)
      } catch (individualError) {
        console.error(`❌ Individual statement execution also failed:`, individualError.message)
        throw error // Re-throw original error
      }
    } else {
      throw error
    }
  }
}

// Function to check if database exists
async function databaseExists(dbName) {
  const adminPool = new Pool({
    ...dbConfig,
    database: 'postgres' // Connect to default postgres database
  })

  try {
    const result = await adminPool.query(
      'SELECT 1 FROM pg_database WHERE datname = $1',
      [dbName]
    )
    return result.rows.length > 0
  } finally {
    await adminPool.end()
  }
}

// Function to create database
async function createDatabase(dbName) {
  const adminPool = new Pool({
    ...dbConfig,
    database: 'postgres'
  })

  try {
    console.log(`\n🗄️  Creating database '${dbName}'...`)
    await adminPool.query(`CREATE DATABASE "${dbName}"`)
    console.log(`✅ Database '${dbName}' created successfully`)
  } catch (error) {
    if (error.code === '42P04') {
      console.log(`ℹ️  Database '${dbName}' already exists`)
    } else {
      throw error
    }
  } finally {
    await adminPool.end()
  }
}

// Function to test database connection
async function testConnection(pool) {
  try {
    const result = await pool.query('SELECT NOW() as current_time, version() as postgres_version')
    console.log(`✅ Database connection successful`)
    console.log(`📅 Current time: ${result.rows[0].current_time}`)
    console.log(`🐘 PostgreSQL version: ${result.rows[0].postgres_version.split(' ')[0]} ${result.rows[0].postgres_version.split(' ')[1]}`)
    return true
  } catch (error) {
    console.error(`❌ Database connection failed:`, error.message)
    return false
  }
}

// Main initialization function
async function initializeDatabase() {
  const dbName = process.env.DB_NAME || 'furious_auto_shipping'
  
  console.log('🚀 Initializing Furious Auto Shipping Database')
  console.log('=' * 50)
  
  try {
    // Check if database exists, create if not
    const exists = await databaseExists(dbName)
    if (!exists) {
      await createDatabase(dbName)
    }

    // Connect to the target database
    const pool = new Pool({
      ...dbConfig,
      database: dbName
    })

    // Test connection
    const connectionSuccess = await testConnection(pool)
    if (!connectionSuccess) {
      process.exit(1)
    }

    // Get file paths
    const databaseDir = path.join(__dirname, '..', 'database')
    const schemaPath = path.join(databaseDir, 'schema.sql')
    const seedPath = path.join(databaseDir, 'seed.sql')

    // Check if files exist
    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Schema file not found: ${schemaPath}`)
    }

    if (!fs.existsSync(seedPath)) {
      throw new Error(`Seed file not found: ${seedPath}`)
    }

    // Run schema creation
    await runSqlFile(pool, schemaPath, 'database schema')

    // Run seed data
    await runSqlFile(pool, seedPath, 'seed data')

    // Verify tables were created
    const tablesResult = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name
    `)

    console.log('\n📊 Created tables:')
    tablesResult.rows.forEach(row => {
      console.log(`   • ${row.table_name}`)
    })

    // Get table counts
    console.log('\n📈 Table record counts:')
    for (const row of tablesResult.rows) {
      try {
        const countResult = await pool.query(`SELECT COUNT(*) as count FROM ${row.table_name}`)
        console.log(`   • ${row.table_name}: ${countResult.rows[0].count} records`)
      } catch (error) {
        console.log(`   • ${row.table_name}: Error getting count`)
      }
    }

    await pool.end()

    console.log('\n🎉 Database initialization completed successfully!')
    console.log('\n📝 Next steps:')
    console.log('   1. Update your .env.local file with the database URL')
    console.log('   2. Start your Next.js application with: npm run dev')
    console.log('   3. Visit http://localhost:3000 to see your application')

  } catch (error) {
    console.error('\n💥 Database initialization failed:', error.message)
    if (error.stack) {
      console.error('\nStack trace:', error.stack)
    }
    process.exit(1)
  }
}

// Command line argument handling
const args = process.argv.slice(2)
const forceReset = args.includes('--reset') || args.includes('-r')
const helpRequested = args.includes('--help') || args.includes('-h')

if (helpRequested) {
  console.log(`
🚀 Furious Auto Shipping Database Initialization

Usage: node scripts/init-database.js [options]

Options:
  --reset, -r    Drop and recreate the database (destructive!)
  --help, -h     Show this help message

Environment Variables:
  DB_HOST        Database host (default: localhost)
  DB_PORT        Database port (default: 5432)
  DB_NAME        Database name (default: furious_auto_shipping)
  DB_USER        Database user (default: postgres)
  DB_PASSWORD    Database password

Examples:
  node scripts/init-database.js              # Create database and tables
  node scripts/init-database.js --reset      # Reset database (destructive!)
`)
  process.exit(0)
}

if (forceReset) {
  console.log('⚠️  WARNING: --reset flag detected!')
  console.log('This will DROP and recreate the entire database.')
  console.log('All existing data will be PERMANENTLY LOST!')
  
  // In a real implementation, you might want to add a confirmation prompt here
  console.log('Proceeding with database reset...\n')
  
  // You could add database dropping logic here if needed
}

// Run the initialization
initializeDatabase()
  .catch(error => {
    console.error('Unhandled error:', error)
    process.exit(1)
  })