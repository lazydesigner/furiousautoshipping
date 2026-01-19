// app/api/calculate-distance/route.js
import { NextResponse } from 'next/server'
 

// Geocode address to coordinates using Google Geocoding API
async function geocodeAddress(address) {
  if (!process.env.GOOGLE_MAPS_SERVER_KEY) {
    throw new Error('Google Maps API key not configured')
  }

  try { 
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.GOOGLE_MAPS_SERVER_KEY}`
    )

    const data = await response.json()

    if (data.status === 'OK' && data.results[0]) {
      const location = data.results[0].geometry.location
      return {
        lat: location.lat,
        lng: location.lng
      }
    } else {
      throw new Error(`Geocoding failed: ${data.status}`)
    }
  } catch (error) {
    console.error('Geocoding error:', error)
    throw error
  }
}

export async function POST(request) {
  try {
    const { origin, destination } = await request.json()
 

    if (!origin || !destination) {
      return NextResponse.json(
        { error: 'Origin and destination are required' },
        { status: 400 }
      )
    }

    let originCoords, destCoords

    // Handle different input formats
    if (typeof origin === 'string' && typeof destination === 'string') {
      // Addresses provided - need to geocode them first 
      
      if (!process.env.GOOGLE_MAPS_SERVER_KEY) {
        return NextResponse.json(
          { 
            error: 'Google Maps API key not configured',
            message: 'Cannot geocode addresses without API key'
          },
          { status: 500 }
        )
      }

      console.log(origin)
      console.log(destination)

      try {
        [originCoords, destCoords] = await Promise.all([
          geocodeAddress(origin),
          geocodeAddress(destination)
        ])
        console.log('Geocoded coordinates:', { originCoords, destCoords })
      } catch (geocodeError) {
        // console.error('Geocoding failed:', geocodeError)
        return NextResponse.json(
          { 
            error: 'Failed to geocode addresses',
            message: geocodeError.message
          },
          { status: 400 }
        )
      }
    } else if (origin.coords.lat && origin.coords.lng && destination.coords.lat && destination.coords.lng) {
      // Coordinates already provided
      originCoords = { lat: origin.coords.lat, lng: origin.coords.lng }
      destCoords = { lat: destination.coords.lat, lng: destination.coords.lng }
      // console.log('Using provided coordinates:', { originCoords, destCoords })
    } else {
      return NextResponse.json(
        { 
          error: 'Invalid input format',
          message: 'Provide either address strings or coordinate objects with lat/lng'
        },
        { status: 400 }
      )
    }

    // Try Google Distance Matrix API first if available
    if (process.env.GOOGLE_MAPS_SERVER_KEY) {
      try { 
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originCoords.lat},${originCoords.lng}&destinations=${destCoords.lat},${destCoords.lng}&units=imperial&mode=driving&key=${process.env.GOOGLE_MAPS_SERVER_KEY}`
        )

        const data = await response.json() 

        if (data.status === 'OK' && data.rows[0]?.elements[0]?.status === 'OK') {
          const element = data.rows[0].elements[0]
          const distanceMiles = Math.round(element.distance.value * 0.000621371) // Convert meters to miles
          const durationHours = Math.round(element.duration.value / 3600) // Convert seconds to hours
 
          return NextResponse.json({
            distance: distanceMiles,
            duration: durationHours,
            method: 'google_distance_matrix',
            coordinates: {
              origin: originCoords,
              destination: destCoords
            }
          })
        } else {
          console.warn('Google Distance Matrix API returned error:', data)
          // Fall through to Haversine calculation
        }
      } catch (googleError) {
        console.error('Google Distance Matrix API error:', googleError)
        // Fall through to Haversine calculation
      }
    } 

  } catch (error) {
    console.error('Error calculating distance:', error)
    return NextResponse.json(
      { 
        error: 'Failed to calculate distance',
        message: error.message
      },
      { status: 500 }
    )
  }
}
