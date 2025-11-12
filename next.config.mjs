/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable server components
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  
  // Image optimization
  images: {
    domains: [
      'images.unsplash.com',
      'res.cloudinary.com',
      'furiousautoshipping.com',
    ],
    formats: ['image/webp', 'image/avif'],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/quote',
        destination: '/get-quote',
        permanent: true,
      },
      {
        source: '/calculator',
        destination: '/get-quote',
        permanent: true,
      },
    ]
  },

  // Rewrites for clean URLs
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ]
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        'utf-8-validate': 'commonjs utf-8-validate',
        'bufferutil': 'commonjs bufferutil',
      })
    }
    return config
  },

  //  webpack: (config, { dev, isServer }) => {
  //   // Production optimizations
  //   if (!dev && !isServer) {
  //     config.resolve.alias = {
  //       ...config.resolve.alias,
  //       '@': './src',
  //     }
  //   }
    
  //   return config
  // },

  // Environment variables
  env: {
    CUSTOM_KEY: 'value',
  },

  // Performance
  swcMinify: true,
  compress: true,

  // PWA configuration (optional)
  // pwa: {
  //   dest: 'public',
  //   register: true,
  //   skipWaiting: true,
  // },
}

export default nextConfig;
