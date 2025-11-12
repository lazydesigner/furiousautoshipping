import { NextResponse } from 'next/server'
import { US_STATES } from '@/lib/utils'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://furiousautoshipping.com'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/services/door-to-door-auto-transport',
    '/services/terminal-to-terminal-auto-transport',
    '/services/enclosed-auto-transport',
    '/services/open-auto-transport',
    '/services/expedited-auto-transport',
    '/services/snowbird-auto-transport',
    '/get-quote',
    '/locations',
    '/locations/state-to-state',
    '/locations/cities',
    '/reviews',
    '/blog',
    '/contact',
    '/faq',
    '/terms',
    '/privacy',
  ]

  // Generate state-to-state routes
  const stateRoutes = []
  
  // Individual state pages (from each state)
  US_STATES.forEach(state => {
    stateRoutes.push(`/locations/${state.url.toLowerCase()}`) 
  })

  // Popular state-to-state combinations
  const popularRoutes = [
    { from: 'california', to: 'texas' },
    { from: 'california', to: 'florida' },
    { from: 'california', to: 'new-york' },
    { from: 'florida', to: 'new-york' },
    { from: 'florida', to: 'california' },
    { from: 'texas', to: 'florida' },
    { from: 'texas', to: 'new-york' },
    { from: 'new-york', to: 'florida' },
    { from: 'new-york', to: 'california' },
    { from: 'illinois', to: 'florida' },
    { from: 'illinois', to: 'california' },
    { from: 'pennsylvania', to: 'florida' },
    { from: 'ohio', to: 'florida' },
    { from: 'michigan', to: 'florida' },
    { from: 'new-jersey', to: 'florida' },
  ]

  popularRoutes.forEach(route => {
    stateRoutes.push(`/locations/${route.from}/${route.to}`)
  })

  // Major cities
  const majorCities = [
    'los-angeles', 'new-york-city', 'chicago', 'houston', 'phoenix',
    'philadelphia', 'san-antonio', 'san-diego', 'dallas', 'san-jose',
    'austin', 'jacksonville', 'fort-worth', 'columbus', 'charlotte',
    'san-francisco', 'indianapolis', 'seattle', 'denver', 'washington-dc',
    'boston', 'el-paso', 'detroit', 'nashville', 'portland',
    'oklahoma-city', 'las-vegas', 'memphis', 'louisville', 'baltimore',
    'milwaukee', 'albuquerque', 'tucson', 'fresno', 'sacramento',
    'atlanta', 'kansas-city', 'colorado-springs', 'mesa', 'raleigh',
    'omaha', 'miami', 'oakland', 'tulsa', 'virginia-beach'
  ]

  const cityRoutes = majorCities.map(city => `/locations/cities/${city}`)

  // Blog categories and tags (you might want to fetch these from your CMS)
  const blogRoutes = [
    '/blog/category/guides',
    '/blog/category/tips',
    '/blog/category/comparison',
    '/blog/category/insurance',
    '/blog/category/military',
    '/blog/category/news',
    '/blog/tag/auto-transport',
    '/blog/tag/car-shipping',
    '/blog/tag/enclosed-transport',
    '/blog/tag/open-transport',
    '/blog/tag/vehicle-safety',
  ]

  // Combine all routes
  const allRoutes = [
    ...staticPages,
    ...stateRoutes,
    ...cityRoutes,
    ...blogRoutes,
  ]

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => {
  const url = `${baseUrl}${route}`
  const lastmod = new Date().toISOString().split('T')[0]
  
  // Set priority based on page importance
  let priority = '0.9'
  let changefreq = 'monthly'
  
  if (route === '') {
    priority = '1.0'
    changefreq = 'weekly'
  } else if (route === '/get-quote' || route === '/services') {
    priority = '0.9'
    changefreq = 'weekly'
  } else if (route.startsWith('/services/') || route === '/about' || route === '/contact') {
    priority = '0.9'
    changefreq = 'monthly'
  } else if (route.startsWith('/from-') && route.includes('-to-')) {
    priority = '0.7'
    changefreq = 'monthly'
  } else if (route.startsWith('/blog/')) {
    priority = '0.6'
    changefreq = 'weekly'
  }

  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}).join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
    },
  })
}