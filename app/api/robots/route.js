import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://furiousautoshipping.com'
  
  const robotsTxt = `# -----------------------------------------------------------------------------
# FURIOUS AUTO SHIPPING ROBOTS.TXT
# -----------------------------------------------------------------------------

# 1. ALLOW AI & SEARCH BOTS (The "VIP List")
# We want these bots to crawl us so we appear in ChatGPT, Gemini, and Claude answers.


Disallow: /quote-success/
Disallow: /track/


Allow: /images/
Allow: /favicon.ico

User-agent: Googlebot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: AnthropicAI
Allow: /

User-agent: CCBot
Allow: /

User-agent: PerplexityBot
Allow: /

# 2. GENERAL RULES FOR ALL OTHER BOTS
User-agent: *
Allow: /

# 3. BLOCK SENSITIVE AREAS (Security & Crawl Budget)
# Don't let bots waste time on APIs or Admin pages
Disallow: /api/
Disallow: /admin/
Disallow: /dashboard/
Disallow: /checkout/
Disallow: /auth/
Disallow: /account/
Disallow: /*?* # Block search parameters to prevent duplicate content issues (check this based on your URL structure)
Disallow: /_next/ # Block Next.js internal build files (optional, Google handles this well usually)


# Crawl delay
Crawl-delay: 1

# Block irrelevant bots
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: dotbot
Disallow: /

# 4. SITEMAP LOCATION
# Critical: Tell the bots where the map is.
Sitemap: https://furiousautoshipping.com/sitemap.xml`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}