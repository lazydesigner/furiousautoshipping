import { cn } from '@/lib/utils'
import { CheckIcon } from '@heroicons/react/24/solid'

export default function ProgressBar({ steps, currentStep }) {
  return (
    <div className="w-full">
      {/* Mobile Progress */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            Step {currentStep} of {steps.length}
          </span>
          <span className="text-sm text-gray-500">
            {Math.round((currentStep / steps.length) * 100)}%
          </span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
        <div className="mt-2 text-sm font-medium text-gray-900">
          {steps[currentStep - 1]?.name}
        </div>
      </div>

      {/* Desktop Progress */}
      <div className="hidden md:block">
        <nav aria-label="Progress">
          <ol className="flex items-center justify-between">
            {steps.map((step, index) => {
              const stepNumber = index + 1
              const isCompleted = stepNumber < currentStep
              const isCurrent = stepNumber === currentStep
              const isUpcoming = stepNumber > currentStep

              return (
                <li key={step.id} className="relative flex-1">
                  {/* Step Circle */}
                  <div className="flex items-center">
                    <div className="relative flex items-center justify-center">
                      <div
                        className={cn(
                          'flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors',
                          isCompleted && 'bg-brand-600 border-brand-600',
                          isCurrent && 'border-brand-600 bg-white',
                          isUpcoming && 'border-gray-300 bg-white'
                        )}
                      >
                        {isCompleted ? (
                          <CheckIcon className="h-5 w-5 text-white" />
                        ) : (
                          <step.icon
                            className={cn(
                              'h-5 w-5',
                              isCurrent && 'text-brand-600',
                              isUpcoming && 'text-gray-400'
                            )}
                          />
                        )}
                      </div>
                    </div>

                    {/* Step Label */}
                    <div className="ml-4 min-w-0 flex-1">
                      <p
                        className={cn(
                          'text-sm font-medium',
                          (isCompleted || isCurrent) && 'text-gray-900',
                          isUpcoming && 'text-gray-500'
                        )}
                      >
                        {step.name}
                      </p>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-0 rotate-90  right-0 -ml-px mt-0.5 h-full w-0.5 bg-gray-300">
                      <div
                        className={cn(
                          'h-full w-full transition-colors',
                          isCompleted && 'bg-brand-600'
                        )}
                      />
                    </div>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>
      </div>
    </div>
  )
}