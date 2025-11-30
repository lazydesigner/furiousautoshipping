import { notFound } from 'next/navigation'
import FAQ from '@/components/FAQ';
import Link from 'next/link'
import Image from 'next/image'
import {
  MapPinIcon,
  TruckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  HomeIcon,
  ShieldCheckIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { formatCurrency } from '@/lib/utils'
import AutoShippingSchema from './AutoShippingSchema';
import ReviewsComponent from '@/components/ReviewsComponent';
import CommonTrustBadges from '@/components/CommonTrustBadges'

// City data - in a real app, this would come from a database
const cityData = {
  'san-francisco': {
    name: 'San Francisco',
    state: 'California',
    stateCode: 'CA',
    population: '875,000',
    region: 'West Coast',
    description: 'San Francisco is a major cultural and economic hub in Northern California, known for its steep hills, iconic Golden Gate Bridge, and vibrant tech scene.',
    image: '/images/common-cities.png',
    coordinates: { lat: 37.7749, lng: -122.4194 },
    routes: 45,
    avgTransitTime: '7-12 days',
    popularDestinations: [
      { city: 'New York', state: 'new-york', price: { min: 1400, max: 2000 }, time: '8-12 days' },
      { city: 'Miami', state: 'florida', price: { min: 1300, max: 1800 }, time: '7-11 days' },
      { city: 'Chicago', state: 'illinois', price: { min: 1100, max: 1500 }, time: '6-10 days' },
      { city: 'Austin', state: 'texas', price: { min: 1000, max: 1400 }, time: '5-9 days' },
      { city: 'Denver', state: 'colorado', price: { min: 800, max: 1200 }, time: '4-8 days' },
      { city: 'Seattle', state: 'washington', price: { min: 600, max: 900 }, time: '3-6 days' },
    ],
    nearbyAreas: [
      'Oakland', 'San Jose', 'Berkeley', 'Palo Alto', 'Fremont', 'Santa Clara'
    ],
    keyFeatures: [
      'Major tech hub with many relocations',
      'High-frequency routes to all major cities',
      'Professional door-to-door service available',
      'Enclosed transport recommended for luxury vehicles'
    ],
    transportChallenges: [
      'Steep hills require special carrier equipment',
      'Limited parking may require flexible scheduling',
      'High-value vehicles common (enclosed transport popular)'
    ]
  },
  'new-york-city': {
    name: 'New York City',
    state: 'New York',
    stateCode: 'NY',
    population: '8.3 million',
    region: 'East Coast',
    description: 'The largest city in the United States, NYC is a global hub for finance, arts, fashion, and culture. Auto transport here serves millions of residents and businesses.',
    image: '/images/common-cities.png',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    routes: 42,
    avgTransitTime: '5-10 days',
    popularDestinations: [
      { city: 'Miami', state: 'florida', price: { min: 700, max: 1100 }, time: '4-6 days' },
      { city: 'Los Angeles', state: 'california', price: { min: 1400, max: 2000 }, time: '8-12 days' },
      { city: 'Chicago', state: 'illinois', price: { min: 600, max: 900 }, time: '3-5 days' },
      { city: 'Atlanta', state: 'georgia', price: { min: 500, max: 800 }, time: '3-5 days' },
      { city: 'Boston', state: 'massachusetts', price: { min: 300, max: 500 }, time: '1-3 days' }, 
    ],
    nearbyAreas: [
      'Brooklyn', 'Queens', 'Bronx', 'Staten Island', 'Newark', 'Jersey City'
    ],
    keyFeatures: [
      'Busiest auto transport hub on East Coast',
      'Daily departures to most major cities',
      'Multiple pickup locations available',
      'Experienced with urban logistics'
    ],
    transportChallenges: [
      'Heavy traffic affects pickup/delivery timing',
      'Limited parking requires coordination',
      'Terminal options available for convenience'
    ]
  },
  'los-angeles': {
    name: 'Los Angeles',
    state: 'California',
    stateCode: 'CA',
    population: '4 million',
    region: 'West Coast',
    description: 'The entertainment capital of the world, LA is also a major business and cultural center with extensive auto transport needs.',
    image: '/images/common-cities.png',
    coordinates: { lat: 34.0522, lng: -118.2437 },
    routes: 48,
    avgTransitTime: '6-11 days',
    popularDestinations: [
      { city: 'New York', state: 'new-york', price: { min: 1400, max: 2000 }, time: '8-12 days' },
      { city: 'Miami', state: 'florida', price: { min: 1200, max: 1700 }, time: '7-10 days' },
      { city: 'Chicago', state: 'illinois', price: { min: 1000, max: 1400 }, time: '6-9 days' },
      { city: 'Austin', state: 'texas', price: { min: 800, max: 1200 }, time: '4-7 days' },
      { city: 'Phoenix', state: 'arizona', price: { min: 400, max: 600 }, time: '2-4 days' },
      { city: 'Las Vegas', state: 'nevada', price: { min: 300, max: 500 }, time: '1-3 days' },
    ],
    nearbyAreas: [
      'Hollywood', 'Beverly Hills', 'Santa Monica', 'Long Beach', 'Anaheim', 'Pasadena'
    ],
    keyFeatures: [
      'Major West Coast transportation hub',
      'High volume of luxury vehicle transport',
      'Multiple terminals and pickup points',
      'Frequent service to all major destinations'
    ],
    transportChallenges: [
      'Traffic congestion affects scheduling',
      'Spread out metro area requires planning',
      'High demand for enclosed transport'
    ]
  },
  'chicago': {
    name: 'Chicago',
    state: 'Illinois',
    stateCode: 'IL',
    population: '2.7 million',
    region: 'Midwest',
    description: 'The transportation hub of America, Chicago connects East and West Coast routes and serves as a major logistics center.',
    image: '/images/common-cities.png',
    coordinates: { lat: 41.8781, lng: -87.6298 },
    routes: 35,
    avgTransitTime: '4-8 days',
    popularDestinations: [
      { city: 'Miami', state: 'florida', price: { min: 800, max: 1200 }, time: '5-7 days' },
      { city: 'Los Angeles', state: 'california', price: { min: 1000, max: 1400 }, time: '6-9 days' },
      { city: 'New York', state: 'new-york', price: { min: 600, max: 900 }, time: '3-5 days' },
      { city: 'Atlanta', state: 'georgia', price: { min: 500, max: 700 }, time: '3-5 days' },
      { city: 'Dallas', state: 'texas', price: { min: 600, max: 800 }, time: '3-5 days' },
      { city: 'Detroit', state: 'michigan', price: { min: 300, max: 450 }, time: '1-3 days' },
    ],
    nearbyAreas: [
      'Aurora', 'Rockford', 'Joliet', 'Naperville', 'Peoria', 'Elgin'
    ],
    keyFeatures: [
      'Central hub connecting all major routes',
      'Fast connections to East and West coasts',
      'Major terminal facilities available',
      'Efficient logistics and scheduling'
    ],
    transportChallenges: [
      'Winter weather can cause delays',
      'Heavy industrial traffic',
      'Multiple highways converge here'
    ]
  },
  'miami': {
    name: 'Miami',
    state: 'Florida',
    stateCode: 'FL',
    population: '470,000',
    region: 'Southeast',
    description: 'A major international gateway and popular destination for luxury vehicle transport, especially for seasonal residents.',
    image: '/images/common-cities.png',
    coordinates: { lat: 25.7617, lng: -80.1918 },
    routes: 38,
    avgTransitTime: '5-9 days',
    popularDestinations: [
      { city: 'New York', state: 'new-york', price: { min: 700, max: 1100 }, time: '4-6 days' },
      { city: 'Chicago', state: 'illinois', price: { min: 800, max: 1200 }, time: '5-7 days' },
      { city: 'Los Angeles', state: 'california', price: { min: 1200, max: 1700 }, time: '7-10 days' },
      { city: 'Atlanta', state: 'georgia', price: { min: 400, max: 600 }, time: '2-4 days' },
      { city: 'Boston', state: 'massachusetts', price: { min: 800, max: 1100 }, time: '5-7 days' },
      { city: 'Detroit', state: 'michigan', price: { min: 700, max: 1000 }, time: '4-6 days' },
    ],
    nearbyAreas: [
      'Fort Lauderdale', 'Hollywood', 'Coral Gables', 'Homestead', 'Key West', 'Naples'
    ],
    keyFeatures: [
      'Popular snowbird destination',
      'High volume of luxury vehicle transport',
      'International shipping connections',
      'Year-round service availability'
    ],
    transportChallenges: [
      'Hurricane season may affect scheduling',
      'High demand during winter months',
      'Limited routes due to peninsula geography'
    ]
  },
  'san-diego': {
    name: 'San Diego',
    state: 'California',
    stateCode: 'CA',
    population: '1.4 million',
    region: 'West Coast',
    description: 'San Diego is California’s second-largest city, known for its Mediterranean climate, vibrant cultural scene, prominent naval and biotech sectors, and bustling cross-border trade with Mexico.',
    image: '/images/common-cities.png',
    coordinates: { lat: 32.7157, lng: -117.1611 },
    routes: '30',
    avgTransitTime: '7–12 days',
    popularDestinations: [
      { city: 'Los Angeles', state: 'california', price: null, time: '2 h by car/train' },
      { city: 'Tijuana', state: 'California', price: null, time: '20 min by car' },
      { city: 'Phoenix', state: 'arizona', price: null, time: '1 h by air' },
      { city: 'Las Vegas', state: 'nevada', price: null, time: '1 h by air' }
    ],
    nearbyAreas: ['Chula Vista', 'La Jolla', 'Coronado', 'Oceanside', 'Carlsbad'],
    keyFeatures: [
      'Major commercial and naval port; key vehicle import terminal (Honda, VW, Nissan) :contentReference[oaicite:0]{index=0}',
      'Operates as a U.S. foreign-trade zone; busiest land border crossings at San Ysidro and Otay Mesa :contentReference[oaicite:1]{index=1}',
      'Thriving biotech, tourism, military, and healthcare economy',
      'Mild climate and high quality of life'
    ],
    transportChallenges: [
      'Border congestion and cross-border logistics bottlenecks',
      'Urban sprawl limits public transit options',
      'Peak-hour traffic on I-5, I-8, and CA-163 corridors'
    ]
  },
  'seattle': {
    name: 'Seattle',
    state: 'Washington',
    stateCode: 'WA',
    population: '≈816,600',
    region: 'Pacific Northwest',
    description: 'Seattle is Washington’s largest city—a tech and innovation powerhouse, major seaport, cultural capital, and gateway to the Pacific Rim.',
    image: '/images/common-cities.png',
    coordinates: { lat: 47.6062, lng: -122.3321 },
    routes: '32',
    avgTransitTime: 'N/A',
    popularDestinations: [
      { city: 'Portland', state: 'oregon', price: null, time: '3 h by car/train' }, 
      { city: 'San Francisco', state: 'california', price: null, time: '2 h 30 min by air' },
      { city: 'Anchorage', state: 'alaska', price: null, time: '3 h by air' }
    ],
    nearbyAreas: ['Bellevue', 'Redmond', 'Tacoma', 'Shoreline', 'Kirkland'],
    keyFeatures: [
      'Major Pacific Northwest port with extensive container, auto, and cruise operations :contentReference[oaicite:2]{index=2}',
      'SEA–Tac is a regional aviation hub with strong domestic and international routes :contentReference[oaicite:3]{index=3}',
      'Home to Amazon, Microsoft, and a booming tech ecosystem',
      'Rich cultural scene: music, food, festivals, and outdoor lifestyle'
    ],
    transportChallenges: [
      'Traffic congestion on I-5, SR 520, and growing commuter volumes',
      'Port operations can be volatile due to tariffs and trade shifts :contentReference[oaicite:4]{index=4}',
      'Housing affordability strains commute patterns and workforce distribution'
    ]
  },
  'portland': {
    name: 'Portland',
    state: 'Oregon',
    stateCode: 'OR',
    population: '≈660,000',
    region: 'Pacific Northwest',
    description: 'Portland is Oregon’s largest city and a regional freight and logistics hub with a major river port, significant rail links, and an international airport (PDX). It balances manufacturing, exports (lumber, paper, agri-products) and a growing tech/services sector.',
    image: '/images/common-cities.png',
    coordinates: { lat: 45.5152, lng: -122.6784 },
    routes: '5',
    avgTransitTime: '2–6 days',
    popularDestinations: [
      { city: 'Seattle', state: 'washington', price: { min: 400, max: 700 }, time: '1–2 days' },
      { city: 'San Francisco', state: 'california', price: { min: 700, max: 1100 }, time: '2–4 days' },
      { city: 'Los Angeles', state: 'california', price: { min: 900, max: 1400 }, time: '3–5 days' },
      { city: 'Boise', state: 'idaho', price: { min: 350, max: 600 }, time: '1–2 days' }
    ],
    nearbyAreas: ['Vancouver (WA)', 'Gresham', 'Beaverton', 'Hillsboro', 'Lake Oswego'],
    keyFeatures: [
      'River port handling bulk, autos, general cargo and airport cargo (PDX).',
      'Strong rail connections (BNSF, Union Pacific) for inland distribution.',
      'Gateway for Oregon agricultural exports and timber products.'
    ],
    transportChallenges: [
      'River draft restrictions at times and seasonal flow variability.',
      'Urban traffic and distribution center congestion near I-5 and I-205.',
      'Port terminal modernization needs for container and auto-handling.'
    ]
  },
  'las-vegas': {
    name: 'Las Vegas',
    state: 'Nevada',
    stateCode: 'NV',
    population: '≈650,000 ',
    region: 'Intermountain West / Southwest',
    description: 'Las Vegas is a major leisure & convention economy with large logistics needs (retail, hospitality supplies, and construction material flows). The region depends on trucking via I-15 and I-95 and distribution centers serving the desert Southwest.',
    image: '/images/common-cities.png',
    coordinates: { lat: 36.1699, lng: -115.1398 },
    routes: '3',
    avgTransitTime: '2–3 days.',
    popularDestinations: [
      { city: 'Los Angeles', state: 'california', price: { min: 500, max: 900 }, time: '1 day' },
      { city: 'Phoenix', state: 'arizona', price: { min: 400, max: 800 }, time: '1 day' },
      { city: 'Salt Lake City', state: 'utah', price: { min: 700, max: 1_100 }, time: '1–2 days' },
      { city: 'Denver', state: 'colorado', price: { min: 900, max: 1_400 }, time: '2–3 days' }
    ],
    nearbyAreas: ['Henderson', 'North Las Vegas', 'Summerlin', 'Boulder City', 'Paradise'],
    keyFeatures: [
      'Major regional demand center driven by tourism and construction.',
      'Extensive warehousing and distribution facilities outside city limits.',
      'Primary freight flows on I-15 to California and the intermountain west.'
    ],
    transportChallenges: [
      'Desert heat limits certain loading windows and impacts freight handling.',
      'Seasonal surges during conventions and trade shows cause local congestion.',
      'Limited rail-served freight directly into the urban core.'
    ]
  },
  'philadelphia': {
    name: 'Philadelphia',
    state: 'Pennsylvania',
    stateCode: 'PA',
    population: '≈1.6M',
    region: 'Mid-Atlantic / Northeast',
    description: 'Philadelphia is a large historic port city on the Delaware River — a major East Coast freight gateway for container, bulk and auto cargo with close rail and highway links to the Northeast distribution network.',
    image: '/images/common-cities.png',
    coordinates: { lat: 39.9526, lng: -75.1652 },
    routes: '5',
    avgTransitTime: '1–2 days',
    popularDestinations: [
      { city: 'New York', state: 'new-york', price: { min: 350, max: 650 }, time: '4–8 hours by truck' },
      { city: 'Baltimore', state: 'maryland', price: { min: 400, max: 700 }, time: '6–10 hours' },
      { city: 'Chicago', state: 'illinois', price: { min: 800, max: 1_300 }, time: '1–2 days' },
      { city: 'Boston', state: 'massachusetts', price: { min: 600, max: 1_000 }, time: '1 day' }
    ],
    nearbyAreas: ['Camden (NJ)', 'Wilmington (DE)', 'Bryn Mawr', 'King of Prussia', 'Norristown'],
    keyFeatures: [
      'PhilaPort handling of containers, autos and bulk cargo; strong regional intermodal connectivity.',
      'Proximity to >50% of U.S./Canadian population within two-day truck drive from port (efficient inland access).',
      'Robust rail/highway links into the Northeast distribution network.'
    ],
    transportChallenges: [
      'I-95 congestion and urban drayage pressure.',
      'Competition from nearby Mid-Atlantic ports for container flows.',
      'Aging infrastructure that requires ongoing capital investment.'
    ]
  },

  'boston': {
    name: 'Boston',
    state: 'Massachusetts',
    stateCode: 'MA',
    population: '≈700,000',
    region: 'New England / Northeast',
    description: 'Boston is an historic Northeast port and a major center for education, healthcare, life sciences and finance. Boston Harbor handles container, bulk and significant cruise traffic; Logan Airport is a major air cargo hub for New England.',
    image: '/images/common-cities.png',
    coordinates: { lat: 42.3601, lng: -71.0589 },
    routes: '5',
    avgTransitTime: '1–2 days.',
    popularDestinations: [
      { city: 'New York', state: 'new-york', price: { min: 400, max: 800 }, time: '1 day' },
      { city: 'Philadelphia', state: 'pennsylvania', price: { min: 600, max: 1_000 }, time: '1 day' },
      { city: 'Providence', state: 'rhode-island', price: { min: 200, max: 400 }, time: '3–6 hours' },
      { city: 'Portland', state: 'maine', price: { min: 300, max: 500 }, time: '5–8 hours' }
    ],
    nearbyAreas: ['Cambridge', 'Somerville', 'Quincy', 'Chelsea', 'Newton'],
    keyFeatures: [
      'Active harbor with container, bulk and cruise operations and strong academic/technology sectors.',
      'Logan Airport supports regional air cargo and express shipments.',
      'Major regional distribution and last-mile delivery center for New England.'
    ],
    transportChallenges: [
      'Constrained urban geography around the harbor limiting terminal expansion.',
      'Seasonal weather impacts (winter storms) on modal reliability.',
      'Traffic congestion and curbspace scarcity for freight deliveries in the core.'
    ]
  },
  'atlanta': {
    name: 'Atlanta',
    state: 'Georgia',
    stateCode: 'GA',
    population: '≈520,000',
    region: 'Southeast',
    description: 'Atlanta is the Southeast’s major logistics hub — massive highway and rail convergence, a major air cargo role at Hartsfield-Jackson (global cargo and express), and large distribution centers surrounding the metro.',
    image: '/images/common-cities.png',
    coordinates: { lat: 33.7490, lng: -84.3880 },
    routes: '6',
    avgTransitTime: '1-2 Days',
    popularDestinations: [
      { city: 'Charlotte', state: 'north-carolina', price: { min: 350, max: 650 }, time: '6–12 hours' },
      { city: 'Jacksonville', state: 'florida', price: { min: 400, max: 700 }, time: '8–14 hours' },
      { city: 'Nashville', state: 'tennessee', price: { min: 350, max: 700 }, time: '8–12 hours' },
      { city: 'Birmingham', state: 'alabama', price: { min: 300, max: 600 }, time: '4–8 hours' }
    ],
    nearbyAreas: ['Marietta', 'Decatur', 'Sandy Springs', 'Roswell', 'College Park'],
    keyFeatures: [
      'One of the nation’s busiest air cargo hubs (Hartsfield-Jackson).',
      'Extensive highway network and centralized Southeast location for distribution.',
      'Large warehousing footprint in the metro’s industrial belt.'
    ],
    transportChallenges: [
      'Congestion on I-285 and inner highways.',
      'Demand spikes during peak retail periods and events.',
      'Managing last-mile delivery across a sprawling metro.'
    ]
  },

  'washington-dc': {
    name: 'Washington, D.C.',
    state: 'District of Columbia',
    stateCode: 'DC',
    population: '≈700,000',
    region: 'Mid-Atlantic',
    description: 'The U.S. capital is a major administrative and cultural center. Freight flows focus on highway/rail drayage and express air services via DCA/IAD; significant government logistics and event-driven surges shape demand.',
    image: '/images/common-cities.png',
    coordinates: { lat: 38.9072, lng: -77.0369 },
    routes: '5',
    avgTransitTime: '1 day.',
    popularDestinations: [
      { city: 'Baltimore', state: 'maryland', price: { min: 250, max: 500 }, time: '3–6 hours' },
      { city: 'Philadelphia', state: 'pennsylvania', price: { min: 300, max: 600 }, time: '4–8 hours' },
      { city: 'Richmond', state: 'virginia', price: { min: 200, max: 450 }, time: '3–6 hours' },
      { city: 'Charlotte', state: 'north-carolina', price: { min: 350, max: 700 }, time: '6–12 hours' }
    ],
    nearbyAreas: ['Arlington (VA)', 'Alexandria (VA)', 'Silver Spring', 'Bethesda', 'Rockville'],
    keyFeatures: [
      'Heavy government and diplomatic logistics; event-driven surges (conferences, inaugurations).',
      'Major express air cargo capacity at Dulles (IAD).',
      'Dense multimodal network (road/rail/air).'
    ],
    transportChallenges: [
      'Significant corridor congestion on I-95/I-495.',
      'Tight urban delivery constraints and limited heavy-vehicle curbspace.',
      'Security and permitting considerations for government shipments.'
    ]
  },

  'detroit': {
    name: 'Detroit',
    state: 'Michigan',
    stateCode: 'MI',
    population: '≈640,000',
    region: 'Great Lakes / Midwest',
    description: 'Detroit remains a core automotive manufacturing and transport node with large vehicle-handling ports (Detroit River), rail yards, and interstate links into the Midwest — crucial for autos and industrial freight.',
    image: '/images/common-cities.png',
    coordinates: { lat: 42.3314, lng: -83.0458 },
    routes: '5',
    avgTransitTime: '2–3 days.',
    popularDestinations: [
      { city: 'Cleveland', state: 'ohio', price: { min: 300, max: 650 }, time: '1 day' },
      { city: 'Chicago', state: 'illinois', price: { min: 400, max: 800 }, time: '1–2 days' }, 
      { city: 'Pittsburgh', state: 'pennsylvania', price: { min: 350, max: 700 }, time: '1 day' }
    ],
    nearbyAreas: ['Windsor (ON)', 'Dearborn', 'Southfield', 'Royal Oak', 'Livonia'],
    keyFeatures: [
      'Longstanding auto import/export and manufacturing logistics base.',
      'River terminals for vehicle and bulk handling and strong rail network.',
      'Historic industrial logistics footprint transitioning to diversified economy.'
    ],
    transportChallenges: [
      'Aging infrastructure in some industrial corridors.',
      'Cross-border paperwork and customs for Canada shipments.',
      'Urban traffic and constrained last-mile routes in the core.'
    ]
  },
  'cleveland': {
    name: 'Cleveland',
    state: 'Ohio',
    stateCode: 'OH',
    population: '≈370,000',
    region: 'Great Lakes / Midwest',
    description: 'Cleveland on Lake Erie is an important Great Lakes port (bulk, autos, breakbulk) with rail and highway connections to the Midwest and Northeast.',
    image: '/images/common-cities.png',
    coordinates: { lat: 41.4993, lng: -81.6944 },
    routes: '4',
    avgTransitTime: '1–2 days.',
    popularDestinations: [
      { city: 'Pittsburgh', state: 'pennsylvania', price: { min: 300, max: 600 }, time: '6–12 hours' },
      { city: 'Columbus', state: 'ohio', price: { min: 250, max: 450 }, time: '6–12 hours' },
      { city: 'Detroit', state: 'michigan', price: { min: 300, max: 650 }, time: '1 day' },
      { city: 'Buffalo', state: 'new-york', price: { min: 350, max: 700 }, time: '8–14 hours' }
    ],
    nearbyAreas: ['Lakewood', 'Cuyahoga Heights', 'Euclid', 'Parma', 'Strongsville'],
    keyFeatures: [
      'Great Lakes shipping access (seasonal) and bulk-handling terminals.',
      'Strong auto and heavy-industry logistics legacy.',
      'Intermodal rail and highway connectivity to the Midwest.'
    ],
    transportChallenges: [
      'Seasonal limitations on Great Lakes shipping (winter freeze on some routes).',
      'Need for terminal investment for modern container handling.',
      'Urban freight routing through older street grids.'
    ]
  },

  'milwaukee': {
    name: 'Milwaukee',
    state: 'Wisconsin',
    stateCode: 'WI',
    population: '≈590,000',
    region: 'Great Lakes / Midwest',
    description: 'Milwaukee sits on Lake Michigan and serves regional manufacturing and distribution demands with port facilities, rail and highway access into the Midwest.',
    image: '/images/common-cities.png',
    coordinates: { lat: 43.0389, lng: -87.9065 },
    routes: '4',
    avgTransitTime: '1–2 days.',
    popularDestinations: [
      { city: 'Chicago', state: 'illinois', price: { min: 250, max: 500 }, time: '3–6 hours' },
      { city: 'Minneapolis', state: 'minnesota', price: { min: 450, max: 850 }, time: '1 day' },
      { city: 'Detroit', state: 'michigan', price: { min: 400, max: 800 }, time: '1 day' },
      { city: 'Green Bay', state: 'wisconsin', price: { min: 200, max: 450 }, time: '6–10 hours' }
    ],
    nearbyAreas: ['Waukesha', 'Oak Creek', 'West Allis', 'Mequon', 'Racine'],
    keyFeatures: [
      'Lake Michigan port access for regional bulk and general cargo.',
      'Proximity and road access to Chicago market and Midwest distribution lanes.',
      'Manufacturing and brewery logistics heritage.'
    ],
    transportChallenges: [
      'Smaller container scale vs. large coastal ports; reliance on truck/rail for long hauls.',
      'Seasonal winter impacts on handling and yard operations.',
      'Competitive pressure from larger nearby hubs.'
    ]
  },

  'minneapolis': {
    name: 'Minneapolis',
    state: 'Minnesota',
    stateCode: 'MN',
    population: '≈430,000',
    region: 'Upper Midwest',
    description: 'Minneapolis (together with St. Paul) is a major Upper Midwest logistics and distribution center — strong rail yards, interstate links (I-94/I-35) and an air cargo presence at MSP.',
    image: '/images/common-cities.png',
    coordinates: { lat: 44.9778, lng: -93.2650 },
    routes: '5',
    avgTransitTime: '2–3 days.',
    popularDestinations: [
      { city: 'Chicago', state: 'illinois', price: { min: 450, max: 900 }, time: '1 day' },
      { city: 'St. Louis', state: 'missouri', price: { min: 600, max: 1_100 }, time: '1–2 days' },
      { city: 'Omaha', state: 'nebraska', price: { min: 400, max: 800 }, time: '1 day' },
      { city: 'Milwaukee', state: 'wisconsin', price: { min: 450, max: 850 }, time: '1 day' }
    ],
    nearbyAreas: ['St. Paul', 'Bloomington', 'Eden Prairie', 'Brooklyn Park', 'Maple Grove'],
    keyFeatures: [
      'Major regional distribution hub for the Upper Midwest and agricultural commodity flows.',
      'Large intermodal rail yards and strong air cargo throughput at MSP.',
      'Extensive warehousing and cold-chain logistics for food processing.'
    ],
    transportChallenges: [
      'Harsh winter conditions impacting reliability in peak months.',
      'Balancing urban delivery constraints with large-scale distribution facilities.',
      'Congestion on key interstates during peak periods.'
    ]
  },
  'houston': {
    name: 'Houston',
    state: 'Texas',
    stateCode: 'TX',
    population: '≈2.3M',
    region: 'Gulf Coast / South',
    description: 'Houston is one of the U.S.’s largest port regions (Port of Houston) and a major energy, petrochemical, and containerized cargo gateway with vast rail and trucking infrastructure.',
    image: '/images/common-cities.png',
    coordinates: { lat: 29.7604, lng: -95.3698 },
    routes: '6',
    avgTransitTime: '2–5 days.',
    popularDestinations: [
      { city: 'Dallas', state: 'texas', price: { min: 400, max: 800 }, time: '1 day' },
      { city: 'New Orleans', state: 'louisiana', price: { min: 350, max: 700 }, time: '1 day' },
      { city: 'San Antonio', state: 'texas', price: { min: 300, max: 650 }, time: '8–14 hours' },
      { city: 'Austin', state: 'texas', price: { min: 300, max: 650 }, time: '8–14 hours' }
    ],
    nearbyAreas: ['Pasadena', 'Baytown', 'Sugar Land', 'The Woodlands', 'Galveston'],
    keyFeatures: [
      'Port of Houston: major container, bulk and petrochemical port; large auto and project cargo handling.',
      'Extensive petrochemical and energy logistics networks.',
      'Strong rail/truck intermodal infrastructure for Gulf-to-inland distribution.'
    ],
    transportChallenges: [
      'Weather-related disruption (hurricanes, flooding) can periodically affect schedules.',
      'Port congestion and channel depth management for larger vessels.',
      'High demand for driver/terminal capacity during peak project cycles.'
    ]
  },

  'dallas': {
    name: 'Dallas',
    state: 'Texas',
    stateCode: 'TX',
    population: '≈1.0M',
    region: 'South / Southwest',
    description: 'Dallas is a major inland logistics node with multiple interstates (I-35E/I-20/I-30), large distribution parks, and air cargo capacity via DFW and Dallas Love Field for express freight.',
    image: '/images/common-cities.png',
    coordinates: { lat: 32.7767, lng: -96.7970 },
    routes: '6',
    avgTransitTime: '2–3 days.',
    popularDestinations: [
      { city: 'Houston', state: 'texas', price: { min: 400, max: 800 }, time: '1 day' },
      { city: 'Austin', state: 'texas', price: { min: 300, max: 650 }, time: '8–14 hours' },
      { city: 'Oklahoma City', state: 'oklahoma', price: { min: 350, max: 700 }, time: '8–14 hours' },
      { city: 'Fort Worth', state: 'texas', price: { min: 200, max: 450 }, time: '2–6 hours' }
    ],
    nearbyAreas: ['Fort Worth', 'Irving', 'Arlington', 'Plano', 'Garland'],
    keyFeatures: [
      'Major inland freight and distribution center with large-scale warehousing.',
      'Robust air-cargo capacity at DFW for national/international express.',
      'Strategic crossroads for north–south and east–west lanes.'
    ],
    transportChallenges: [
      'Surface congestion at key interchanges and freight hotspots.',
      'Large metro sprawl increasing drayage distances for last-mile.',
      'Competition for land for new large distribution facilities.'
    ]
  },
  'austin': {
    name: 'Austin',
    state: 'Texas',
    stateCode: 'TX',
    population: '≈1.0M',
    region: 'Central Texas / Southwest',
    description: 'Austin’s fast growth has increased logistics demand for tech, consumer goods, and construction; relies on I-35 corridor, Bergstrom Airport for air cargo, and nearby distribution in San Antonio/Dallas.',
    image: '/images/common-cities.png',
    coordinates: { lat: 30.2672, lng: -97.7431 },
    routes: '3',
    avgTransitTime: '(3–4 hours)-1 day.',
    popularDestinations: [
      { city: 'San Antonio', state: 'texas', price: { min: 200, max: 450 }, time: '3–6 hours' },
      { city: 'Dallas', state: 'texas', price: { min: 350, max: 700 }, time: '8–14 hours' },
      { city: 'Houston', state: 'texas', price: { min: 350, max: 750 }, time: '1 day' },
      { city: 'San Marcos', state: 'texas', price: { min: 150, max: 300 }, time: '2–4 hours' }
    ],
    nearbyAreas: ['Round Rock', 'Pflugerville', 'Buda', 'Kyle', 'Georgetown'],
    keyFeatures: [
      'Rapidly expanding consumer/tech freight demand as the city grows.',
      'Good regional connectivity via I-35 for north–south lanes.',
      'Growing warehousing and last-mile footprint in outer suburbs.'
    ],
    transportChallenges: [
      'I-35 congestion and limited east–west highway options.',
      'Capacity constraints during major events and seasonal moves.',
      'Shortage of large parcels of industrial land close to city.'
    ]
  },

  'phoenix': {
    name: 'Phoenix',
    state: 'Arizona',
    stateCode: 'AZ',
    population: '≈1.7M',
    region: 'Desert Southwest',
    description: 'Phoenix is a major inland distribution center for the Southwest, with large logistics parks, strong interstate truck flows (I-10, I-17), and air cargo capacity at Sky Harbor for express shipments.',
    image: '/images/common-cities.png',
    coordinates: { lat: 33.4484, lng: -112.0740 },
    routes: '3',
    avgTransitTime: 'same day',
    popularDestinations: [
      { city: 'Los Angeles', state: 'california', price: { min: 500, max: 900 }, time: '1 day' },
      { city: 'Las Vegas', state: 'nevada', price: { min: 400, max: 800 }, time: '1 day' },
      { city: 'Tucson', state: 'arizona', price: { min: 200, max: 400 }, time: '3–6 hours' },
      { city: 'Dallas', state: 'texas', price: { min: 700, max: 1_200 }, time: '1–2 days' }
    ],
    nearbyAreas: ['Mesa', 'Scottsdale', 'Tempe', 'Glendale', 'Chandler'],
    keyFeatures: [
      'Major inland distribution hub serving the Southwest and West markets.',
      'Extensive warehousing and e-commerce fulfillment centers in surrounding suburbs.',
      'Hot-weather logistics considerations and ample freight corridors to CA/TX.'
    ],
    transportChallenges: [
      'Extreme summer temperatures affecting handling and equipment.',
      'Long dray distances for some last-mile deliveries in the sprawling metro.',
      'Demand spikes during seasonal population and tourism cycles.'
    ]
  },

  'san-antonio': {
    name: 'San Antonio',
    state: 'Texas',
    stateCode: 'TX',
    population: '≈1.6M  ',
    region: 'South / Texas',
    description: 'San Antonio supports military, manufacturing and distribution logistics for south/central Texas with interstate access (I-35/I-10) and a growing industrial footprint.',
    image: '/images/common-cities.png',
    coordinates: { lat: 29.4241, lng: -98.4936 },
    routes: '3',
    avgTransitTime: 'same day–1 day',
    popularDestinations: [
      { city: 'Austin', state: 'texas', price: { min: 200, max: 450 }, time: '3–6 hours' },
      { city: 'Houston', state: 'texas', price: { min: 300, max: 650 }, time: '8–14 hours' },
      { city: 'Laredo', state: 'texas', price: { min: 350, max: 700 }, time: '1 day (border freight)' },
      { city: 'Dallas', state: 'texas', price: { min: 400, max: 800 }, time: '1 day' }
    ],
    nearbyAreas: ['New Braunfels', 'Schertz', 'Converse', 'Seguin', 'Kirby'],
    keyFeatures: [
      'Growing industrial parks and regional logistics to serve South Texas and border trade.',
      'Strong access to major interstate corridors for north–south flows.',
      'Important military logistics and federal facility presence.'
    ],
    transportChallenges: [
      'Border traffic and long-haul demand can strain capacity during peaks.',
      'Limited direct ocean port access (relies on Gulf ports).',
      'Increasing need for upgraded rail/terminal capacity to meet growth.'
    ]
  },
  'denver': {
    name: 'Denver',
    state: 'Colorado',
    stateCode: 'CO',
    population: '≈735,000',
    region: 'Mountain West / Intermountain',
    description: 'Denver is the Mountain West’s major freight and logistics hub with strong interstate links (I-25/I-70), intermodal rail yards, and a major air cargo presence at Denver International Airport (DEN).',
    image: '/images/common-cities.png',
    coordinates: { lat: 39.7392, lng: -104.9903 },
    routes: '5',
    avgTransitTime: '1–3 days.',
    popularDestinations: [
      { city: 'Salt Lake City', state: 'utah', price: { min: 600, max: 1_100 }, time: '1 day' },
      { city: 'Phoenix', state: 'arizona', price: { min: 700, max: 1_200 }, time: '1–2 days' },
      { city: 'Dallas', state: 'texas', price: { min: 700, max: 1_300 }, time: '1–2 days' },
      { city: 'Omaha', state: 'nebraska', price: { min: 450, max: 850 }, time: '1 day' }
    ],
    nearbyAreas: ['Aurora', 'Lakewood', 'Thornton', 'Broomfield', 'Westminster'],
    keyFeatures: [
      'Strategic inland hub for mountain-region freight distribution.',
      'Large air cargo capability at DEN and intermodal rail yards.',
      'Growing e-commerce and fulfillment infrastructure supporting mountain markets.'
    ],
    transportChallenges: [
      'Weather impacts (snowstorms) can slow operations seasonally.',
      'Long-haul distances to coastal ports raise modal planning complexity.',
      'Surface congestion at key interchanges during peak travel periods.'
    ]
  },


}

// Generate metadata dynamically
export async function generateMetadata({ params }) {
  const w = params.city
  const citySlug = w.toLowerCase()
  const city = cityData[citySlug]

  if (!city) {
    return {
      title: 'City Not Found | Furious Auto Shipping',
      description: 'The requested city page was not found.'
    }
  }

  return {
    title: `Auto Transport ${city.name}, ${city.stateCode} | Car Shipping Services`,
    description: `Professional auto transport services in ${city.name}, ${city.state}. Get instant quotes for car shipping to and from ${city.name}. Door-to-door service available.`,
    keywords: `auto transport ${city.name}, car shipping ${city.name}, vehicle transport ${city.state}, ${city.name} auto shipping`,
    openGraph: {
      title: `Auto Transport Services in ${city.name}, ${city.stateCode}`,
      description: `Ship your car to or from ${city.name} with professional auto transport services. Get instant quotes and reliable delivery.`,
      images: [city.image],
    },
    alternates: {
      canonical: `/locations/cities/${citySlug}`,
    },
  }
}

// Generate static params for popular cities
export async function generateStaticParams() {
  return Object.keys(cityData).map((citySlug) => ({
    city: citySlug,
  }))
}

export default function CityPage({ params }) {
  const { city: citySlug } = params
  const city = cityData[citySlug]

  if (!city) {
    notFound()
  }

  const autoTransportFAQs = [
    {
      question: (<>{`How much does it cost to ship a car to ${city.name}?`}</>),
      answer: (<>Costs vary by distance, vehicle size, and transport type. On average, open carrier shipping from the East Coast to {city.name} ranges from $800–$1,500, while enclosed options start at $1,200. Request a personalized quote for exact figures.</>)
    },
    {
      question: (<>How long does auto shipping to {city.name} take?</>),
      answer: (<>Transit times depend on the origin. For example, from New York to {city.name}, expect 5–7 days; from Los Angeles, 1–3 days. We provide estimated timelines during booking.</>)
    },
    {
      question: "Is my vehicle insured during transport?",
      answer: "Yes! All our carriers maintain comprehensive insurance coverage. Your vehicle is protected from pickup to delivery with up to $1,000,000 in coverage."
    },
    {
      question: (<>Can I ship personal items in my car to {city.name}?</>),
      answer: "For safety reasons, we advise against it, but small items (under 100 lbs) may be allowed in the trunk. Check with our team for specifics."
    },
    {
      question: (<>What if my shipment to {city.name} is delayed?</>),
      answer: "Delays are rare, but if they occur due to weather or unforeseen issues, we'll keep you updated and work to resolve them promptly—no extra charge."
    },
    {
      question: "Do I need to be present for pickup and delivery?",
      answer: "Yes, you or an authorized representative (18+) must be present during both pickup and delivery to sign the Bill of Lading and inspect the vehicle."
    },
    {
      question: "What should I do to prepare my vehicle?",
      answer: "Remove all personal items, ensure the gas tank is 1/4 full or less, disable alarms, and document existing damage with photos. We'll provide a complete preparation checklist."
    }
  ];


  return (
    <div className="pt-20">

      <AutoShippingSchema
        city={city.name}
        state={city.state}
        latitude={city.coordinates.lat}
        longitude={city.coordinates.lng}
        neighborhoods={city.nearbyAreas}
      />
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-1 mb-6">
                Auto Shipping Services in {city.name}, {city.stateCode}
              </h1>
              <p className="text-xl leading-relaxed mb-6">
                {city.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-200">{city.routes}</div>
                  <div className="text-sm opacity-90">Available Routes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-200">{city.population}</div>
                  <div className="text-sm opacity-90">Population</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-200">{city.avgTransitTime}</div>
                  <div className="text-sm opacity-90">Avg Transit</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-200">
                    <StarIcon className="h-6 w-6 inline" />
                  </div>
                  <div className="text-sm opacity-90">Top Service</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-quote" className="btn-secondary btn-lg">
                  Get Free Quote
                </Link>
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                  className="btn-outline btn-lg border-white  hover:bg-white hover:text-brand-600"
                >
                  Call {process.env.NEXT_PUBLIC_COMPANY_PHONE}
                </a>
              </div>
            </div>

            <div className="relative">
              <Image
                src={city.image}
                alt={`${city.name} auto transport services`}
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <CommonTrustBadges />

      {/* Popular Routes */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Popular Routes from {city.name}</h2>
            <p className="text-xl text-gray-600">
              Top destinations and pricing for auto transport from {city.name}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {city.popularDestinations.map((destination, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{destination.city}, {destination.state}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {destination.time}
                    </div>
                  </div>
                  <TruckIcon className="h-8 w-8 text-brand-600" />
                </div>

                {/* <div className="mb-4">
                  <div className="text-2xl font-bold text-brand-600">
                    {formatCurrency(destination.price.min)} - {formatCurrency(destination.price.max)}
                  </div>
                  <div className="text-sm text-gray-500">Estimated cost range</div>
                </div> */}

                <div className="flex gap-2">
                  <Link
                    href={`/locations/${city.state.toLowerCase().replace(/\s+/g, '-')}/${destination.state.toLowerCase()}`}
                    className="btn-outline text-sm flex-1 text-center"
                  >
                    View Route
                  </Link>
                  <Link
                    href="/get-quote"
                    className="btn-primary text-sm flex-1 text-center"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsComponent />

      {/* Service Information */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Why Choose Our {city.name} Auto Transport
              </h3>
              <ul className="space-y-4">
                {city.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Transport Considerations */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                {city.name} Transport Considerations
              </h3>
              <ul className="space-y-4">
                {city.transportChallenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">We Also Serve Nearby Areas</h2>
            <p className="text-xl text-gray-600">
              Auto transport services available throughout the {city.name} metropolitan area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {city.nearbyAreas.map((area, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:bg-brand-50 hover:border-brand-300 transition-colors">
                <MapPinIcon className="h-6 w-6 text-brand-600 mx-auto mb-2" />
                <div className="font-medium text-gray-900">{area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Service Options in {city.name}</h2>
            <p className="text-xl text-gray-600">
              Choose the auto transport service that best fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Door-to-Door',
                description: 'Convenient pickup and delivery at your location',
                icon: HomeIcon,
                popular: true
              },
              {
                title: 'Open Transport',
                description: 'Most economical option for standard vehicles',
                icon: TruckIcon,
                popular: true
              },
              {
                title: 'Enclosed Transport',
                description: 'Premium protection for luxury vehicles',
                icon: ShieldCheckIcon,
                premium: true
              },
              {
                title: 'Expedited Service',
                description: 'Fast-track delivery for urgent needs',
                icon: ClockIcon,
                premium: true
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center relative">
                {service.popular && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  </div>
                )}
                {service.premium && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Premium
                    </span>
                  </div>
                )}

                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-brand-100 rounded-full">
                    <service.icon className="h-8 w-8 text-brand-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p> If you're planning a move to or from {city.name}, or simply need to transport your vehicle across the country, our expert auto shipping services are here to make the process seamless and stress-free. With over a decade of experience in the auto shipping industry, we've helped thousands of customers safely relocate their cars, trucks, motorcycles, and more to destinations like {city.name}. Whether you're dealing with a cross-country relocation, seasonal move, or purchasing a vehicle online, our team ensures top-tier service tailored to your needs. As a trusted leader in car shipping, we prioritize safety, timeliness, and customer satisfaction—backed by our A+ rating from the Better Business Bureau and glowing reviews from satisfied clients.
          </p>

          <h2 className='text-2xl font-bold my-3'>How Our {city.name} Auto Shipping Process Works</h2>
          <p>Our streamlined process is designed for efficiency and peace of mind. Here's a step-by-step guide based on our proven expertise in the field:</p>

          <ol className='list-decimal list-inside'>
            <li className='my-2'><span className='font-bold'>Get a Free Quote:</span> Use our online tool to receive a no-obligation quote for <Link href='' className='font-bold text-blue-600'>auto shipping to {city.name}</Link> . Input details like your vehicle's make, model, origin, and destination for accurate pricing.</li>
            <li className='my-2'><span className='font-bold'>Book Your Shipment:</span> Once you're ready, our team will confirm details and schedule pickup. We'll provide all necessary paperwork, including a Bill of Lading for your records.</li>
            <li className='my-2'><span className='font-bold'>Vehicle Pickup:</span> A professional carrier will arrive at your specified location. We conduct a thorough inspection to document your vehicle's condition before loading.</li>
            <li className='my-2'><span className='font-bold'>Secure Transport:</span> Your car is transported using state-of-the-art equipment. For {city.name}-bound shipments, we optimize routes to avoid delays caused by weather or traffic hotspots.</li>
            <li className='my-2'><span className='font-bold'>Delivery and Inspection:</span> Upon arrival in {city.name}, we'll deliver your vehicle and perform a final inspection with you to ensure everything is as expected.</li>
          </ol>

          <p>Throughout our 10 years in auto shipping, we've refined this process to minimize risks and maximize reliability, drawing from industry best practices and customer feedback.</p>

          <h3 className='text-2xl font-bold my-3'>Benefits of Professional Auto Shipping to {city.name}</h3>
          <p>Driving your vehicle long distances can lead to unnecessary wear, mileage, and stress. Opting for <Link href='' className='font-bold text-blue-600'>professional car transport to {city.name}</Link> offers numerous advantages:</p>

          <ul className='list-disc list-inside'>
            <li className='my-2'><span className='font-bold'>Cost Savings:</span> Avoid fuel, lodging, and maintenance costs associated with long drives.</li>
            <li className='my-2'><span className='font-bold'>Time Efficiency:</span> Focus on your move or other priorities while we handle the logistics.</li>
            <li className='my-2'><span className='font-bold'>Vehicle Safety:</span> Professional carriers reduce the risk of accidents, theft, or damage compared to self-driving.</li>
            <li className='my-2'><span className='font-bold'>Insurance Coverage:</span> All shipments include comprehensive insurance, with options for additional coverage on high-value vehicles.</li>
          </ul>

          <p>As experts in the auto transport sector, we recommend shipping for distances over 500 miles—especially to bustling hubs like {city.name}, where road conditions can vary.</p>
        </div>
      </section>

      <FAQ
        title={`Frequently Asked Questions About ${city.name} Car Shipping`}
        faqs={autoTransportFAQs} />

      {/* CTA Section */}
      <section className="section bg-brand-600 text-white">
        <div className="container text-center">
          <h2 className="heading-2 mb-4">
            Ready to Ship Your Vehicle to or from {city.name}?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't leave your auto transport to chance. Trust our 10 years of expertise for safe, efficient, and affordable car shipping to {city.name}. <Link href='/get-quote' className='font-bold text-gray-900'>Get an instant quote</Link> for <Link href='' className='font-bold text-gray-900'>auto transport services in {city.name}</Link>.
            Professional, reliable, and affordable car shipping. We're committed to delivering exceptional service that meets the highest standards of expertise, authority, and trustworthiness in the industry. <br />
            Note: All information is based on standard industry practices and our proven track record. For the latest regulations, consult the FMCSA website.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="btn-secondary btn-lg group"
            >
              Get Free Instant Quote
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
              className="btn-outline btn-lg border-white  hover:bg-white hover:text-brand-600"
            >
              Call {process.env.NEXT_PUBLIC_COMPANY_PHONE}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}