import { cn } from '@/lib/utils'

export default function Logo({ className, showText = true, ...props }) {
  return (
    <div className={cn('flex items-center space-x-2', className)} {...props}>
      {/* Logo Icon */}
      <div className="relative">
        <svg
          className="h-8 w-8 lg:h-10 lg:w-10"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background circle */}
          <circle cx="20" cy="20" r="20" fill="url(#gradient)" />
          
          {/* Car silhouette */}
          <path
            d="M10 24h2c0 1.5 1.5 3 3 3s3-1.5 3-3h4c0 1.5 1.5 3 3 3s3-1.5 3-3h2v-4l-2-6H12l-2 6v4z"
            fill="white"
            opacity="0.9"
          />
          
          {/* Wheels */}
          <circle cx="15" cy="26" r="2" fill="white" />
          <circle cx="25" cy="26" r="2" fill="white" />
          
          {/* Speed lines */}
          <path
            d="M6 18h4M5 21h3M4 24h2"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />
          
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Company Name */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl lg:text-2xl font-bold leading-none">
            Furious
          </span>
          <span className="text-xs lg:text-sm font-medium opacity-80 leading-none">
            AUTO SHIPPING
          </span>
        </div>
      )}
    </div>
  )
}