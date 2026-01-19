
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { origin, destination } = body

    // 1. Basic Validation
    if (!origin || !destination) {
      return NextResponse.json(
        { error: 'Origin and destination are required' },
        { status: 400 }
      )
    }

    // 2. Strict API Key Check
    // If the key is missing, we stop immediately.
    if (!process.env.GOOGLE_MAPS_SERVER_KEY) {
      console.error('ERROR: GOOGLE_MAPS_SERVER_KEY is missing in environment variables.')
      return NextResponse.json(
        { error: 'Server configuration error: API Key missing' },
        { status: 500 }
      )
    }

    let originStr = ''
    let destStr = ''

    // 3. Format Inputs for the API URL
    // We construct the string "lat,lng" directly for the API URL
    
    // Check Origin
    if (origin.coords && origin.coords.lat && origin.coords.lng) {
      originStr = `${origin.coords.lat},${origin.coords.lng}`
    } else if (typeof origin === 'string') {
      originStr = encodeURIComponent(origin)
    } else {
      return NextResponse.json({ error: 'Invalid Origin format' }, { status: 400 })
    }

    // Check Destination
    if (destination.coords && destination.coords.lat && destination.coords.lng) {
      destStr = `${destination.coords.lat},${destination.coords.lng}`
    } else if (typeof destination === 'string') {
      destStr = encodeURIComponent(destination)
    } else {
      return NextResponse.json({ error: 'Invalid Destination format' }, { status: 400 })
    }

    console.log(`${originStr}&destinations=${destStr}`)

    // 4. Call Google Distance Matrix API
    // We use the constructed strings directly.
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originStr}&destinations=${destStr}&units=imperial&mode=driving&key=${process.env.GOOGLE_MAPS_SERVER_KEY}`

    // console.log('Fetching Google API:', url.replace(process.env.GOOGLE_MAPS_SERVER_KEY, 'HIDDEN_KEY')) 

    const response = await fetch(url)
    const data = await response.json()

    // 5. Handle Google API Errors Explicitly
    // If the top-level status is not OK (e.g. REQUEST_DENIED, OVER_QUERY_LIMIT)
    if (data.status !== 'OK') {
      console.error('Google API Error (Top Level):', data)
      return NextResponse.json(
        { error: 'Google API Error', details: data.status, full_response: data },
        { status: 400 }
      )
    }

    // Check the specific element status (e.g. ZERO_RESULTS if no road exists)
    const element = data.rows[0]?.elements[0]
    if (!element || element.status !== 'OK') {
      console.error('Google API Route Error:', element)
      return NextResponse.json(
        { 
          error: 'Could not calculate route', 
          reason: element?.status || 'Unknown',
          message: 'Google could not find a driving route between these locations.'
        },
        { status: 400 }
      )
    }

    // 6. Success - Return Data
    const distanceMiles = Math.round(element.distance.value * 0.000621371)
    const durationHours = Math.round(element.duration.value / 3600)

    return NextResponse.json({
      distance: distanceMiles,
      duration: durationHours,
      origin_address: data.origin_addresses[0], // Google's resolved address
      destination_address: data.destination_addresses[0]
    })

  } catch (error) {
    console.error('Server Logic Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error', message: error.message },
      { status: 500 }
    )
  }
}