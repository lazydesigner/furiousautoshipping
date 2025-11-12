// app/api/test-db/route.js
import { NextResponse } from 'next/server'
import db from '@/lib/database.js'

export async function GET() {
  try {
    console.log('Testing database connection...')
    
    // Test basic connection using your database class
    const basicTest = await db.query('SELECT NOW() as current_time, version() as pg_version')
    console.log('Basic connection test passed')

    // Check if tables exist
    console.log('Checking if tables exist...')
    const tablesTest = await db.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('quotes', 'vehicles', 'users', 'contact_forms', 'blog_posts', 'system_logs')
      ORDER BY table_name
    `)
    console.log('Tables found:', tablesTest.rows)

    // Check if database exists and is accessible
    const dbTest = await db.query('SELECT current_database() as db_name')
    console.log('Current database:', dbTest.rows[0])

    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      tests: {
        connection: basicTest.rows[0],
        database: dbTest.rows[0],
        tables: tablesTest.rows,
        tableCount: tablesTest.rows.length
      }
    })

  } catch (error) {
    console.error('=== DATABASE ERROR ===')
    console.error('Error message:', error.message)
    console.error('Error code:', error.code)
    console.error('Error stack:', error.stack)
    
    return NextResponse.json(
      { 
        error: 'Database test failed',
        message: error.message,
        code: error.code,
        details: error.stack
      },
      { status: 500 }
    )
  }
}