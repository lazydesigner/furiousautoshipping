import { notFound } from 'next/navigation'
import QuoteSuccessClient from './QuoteSuccessClient'

export const metadata = {
  title: 'Quote Submitted Successfully | Furious Auto Shipping',
  description: 'Your auto transport quote has been submitted successfully. Review your quote details and next steps.',
  robots: 'noindex, nofollow', // Don't index success pages
}

async function getQuote(quoteId) { 
  try {
    // Call your existing API endpoint
    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'
    
    // Check if quoteId is numeric (internal ID) or tracking ID
    const numericId = quoteId
    let apiUrl

    // Only allow letters (a-z, A-Z), numbers (0-9), and dash (-)
    const alphaNumDashRegex = /^[A-Za-z0-9-]+$/

    if (alphaNumDashRegex.test(quoteId)) {
      // quoteId is alphanumeric and/or dash
      apiUrl = `${baseUrl}/api/quotes?id=${quoteId}`
    } else if (!isNaN(numericId) && numericId.toString() === quoteId) {
      // purely numeric internal ID
      apiUrl = `${baseUrl}/api/quotes?tracking=${quoteId}`
    } else {
      apiUrl = `${baseUrl}/api/quotes?tracking=${quoteId}`
    }
     
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }) 
    
    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error(`API call failed: ${response.status}`)
    }
    
    const data = await response.json()
    
    if (data.success && data.quote) {
      return data.quote
    }
    
    return null
  } catch (error) {
    console.error('Error fetching quote:', error)
    return null
  }
}

export default async function QuoteSuccessPage({ params }) { 
  const { quoteId } = await params
  
  // Basic validation
  if (!quoteId || quoteId.trim() === '') {
    notFound()
  }

  const quote = await getQuote(quoteId) 
  
  if (!quote) {
    notFound()
  }

  return <QuoteSuccessClient quote={quote} />
}