import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Logo({ className, showText = true, ...props }) {
  return (
    <div className={cn('flex items-center space-x-2', className)} {...props}>
      
      {/* Company Name */}
      {showText && (
        <div className="flex flex-col">
          <Image
          src='/images/final-logo.png'
          width={200}
          height={50}
          alt='Fast, Reliable Auto Transport Across America'
          />
        </div>
      )}
    </div>
  )
}