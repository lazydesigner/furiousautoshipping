'use client'

import { useState, useEffect } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Denver, CO',
    rating: 5,
    text: 'Exceptional service from start to finish! My car was picked up on time and delivered in perfect condition. The communication throughout the process was outstanding.',
    vehicle: '2021 Honda Accord',
    route: 'Denver, CO to Miami, FL'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'I was nervous about shipping my classic Mustang, but Furious Auto Shipping made it easy. The enclosed transport was worth every penny for the peace of mind.',
    vehicle: '1967 Ford Mustang',
    route: 'Los Angeles, CA to Austin, TX'
  },
  {
    id: 3,
    name: 'Jennifer Davis',
    location: 'Chicago, IL',
    rating: 5,
    text: 'Great communication and fair pricing. I always knew where my car was and when to expect delivery. The whole experience was stress-free.',
    vehicle: '2020 Toyota Camry',
    route: 'Chicago, IL to Phoenix, AZ'
  },
  {
    id: 4,
    name: 'Robert Martinez',
    location: 'New York, NY',
    rating: 5,
    text: 'Needed expedited service for a work relocation. They delivered exactly as promised - fast, professional, and reliable. Highly recommend!',
    vehicle: '2022 BMW X5',
    route: 'New York, NY to Tampa, FL'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    location: 'Seattle, WA',
    rating: 5,
    text: 'Third year using their snowbird service. They understand our seasonal needs and always provide competitive rates. Excellent service every time.',
    vehicle: '2020 Lexus RX',
    route: 'Seattle, WA to Orlando, FL'
  }
]

function StarRating({ rating }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          className={`h-5 w-5 ${
            star <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real customers say about 
            their auto transport experience with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-8 md:p-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="text-center">
                    {/* Rating */}
                    <div className="flex justify-center mb-4">
                      <StarRating rating={testimonial.rating} />
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Customer Info */}
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-900 text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600">
                        {testimonial.location}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.vehicle} • {testimonial.route}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-600" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-brand-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-600 mb-1">4.9/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-600 mb-1">2,847</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-600 mb-1">98%</div>
            <div className="text-sm text-gray-600">On-Time Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-600 mb-1">99.2%</div>
            <div className="text-sm text-gray-600">Damage-Free</div>
          </div>
        </div>
      </div>
    </section>
  )
}