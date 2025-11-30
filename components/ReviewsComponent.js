'use client'
import React, { useRef } from 'react';
import { Star, Users, Clock, Shield, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    name: "Michael Rodriguez",
    location: "Dallas, TX",
    rating: 5,
    date: "March 15, 2025",
    text: "Excellent service from start to finish! My Tesla was picked up on time and delivered without a single scratch. The driver was professional and kept me updated throughout the journey. Highly recommend for anyone shipping luxury vehicles.",
    verified: true
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    location: "Miami, FL",
    rating: 5,
    date: "February 28, 2025", 
    text: "This was my first time shipping a car cross-country and they made it so easy. Great communication, fair pricing, and my Honda Accord arrived in perfect condition. Will definitely use them again when I move back!",
    verified: true
  },
  {
    id: 3,
    name: "David Chen",
    location: "Phoenix, AZ",
    rating: 4,
    date: "March 8, 2025",
    text: "Very satisfied with the service. Delivery was one day later than expected due to weather, but the team kept me informed. My truck was well-protected during transport and arrived safely. Fair price for the quality of service.",
    verified: true
  },
  {
    id: 4,
    name: "Jennifer Thompson",
    location: "Chicago, IL",
    rating: 5,
    date: "January 22, 2025",
    text: "Shipped my daughter's car to college and couldn't be happier. Professional staff, competitive pricing, and zero hassles. They handled all the paperwork and made the entire process stress-free. A+ service all around!",
    verified: true
  },
  {
    id: 5,
    name: "Robert Williams",
    location: "Los Angeles, CA",
    rating: 5,
    date: "February 14, 2025",
    text: "Best auto transport company I've used in 20 years of military relocations. They understand the unique needs of service members and delivered my Jeep exactly when promised. Reliable, affordable, and trustworthy.",
    verified: true
  },
  {
    id: 6,
    name: "Amanda Garcia",
    location: "Denver, CO",
    rating: 4,
    date: "March 3, 2025",
    text: "Great experience overall! The quote was accurate, pickup was smooth, and delivery was on schedule. My only minor complaint was the initial phone wait time, but once connected, everyone was very helpful and professional.",
    verified: true
  },
  {
    id: 7,
    name: "James Patterson",
    location: "Seattle, WA",
    rating: 5,
    date: "December 18, 2024",
    text: "Moved from Seattle to Atlanta and these guys transported both our vehicles flawlessly. Enclosed transport option gave us peace of mind for our vintage Mustang. Worth every penny and the customer service was outstanding.",
    verified: true
  },
  {
    id: 8,
    name: "Lisa Anderson",
    location: "Austin, TX",
    rating: 5,
    date: "January 30, 2025",
    text: "After getting quotes from five different companies, they offered the best price without compromising quality. My BMW was handled with care and arrived three days early. The driver even helped me with some questions about the delivery area!",
    verified: true
  },
  {
    id: 9,
    name: "Christopher Lee",
    location: "Boston, MA",
    rating: 4,
    date: "February 7, 2025",
    text: "Solid service for cross-country transport. Communication was excellent and they accommodated my tight schedule. The vehicle arrived clean and undamaged. Would give 5 stars but felt the price was slightly high compared to competitors.",
    verified: true
  },
  {
    id: 10,
    name: "Michelle Davis",
    location: "Portland, OR",
    rating: 5,
    date: "March 12, 2025",
    text: "Fantastic experience shipping my classic Corvette from Oregon to Florida. They assigned a dedicated specialist who answered all my questions and ensured enclosed transport. Arrived exactly as promised. These folks are the real deal!",
    verified: true
  },
  {
    id: 11,
    name: "Daniel Martinez",
    location: "Nashville, TN",
    rating: 5,
    date: "January 5, 2025",
    text: "Shipped two vehicles for my business and both arrived on time and in excellent condition. Their online tracking system kept me informed every step of the way. Professional team that clearly knows what they're doing.",
    verified: true
  },
  {
    id: 12,
    name: "Emily Wilson",
    location: "San Diego, CA",
    rating: 4,
    date: "February 20, 2025",
    text: "Very happy with the service. Driver was courteous and careful loading my SUV. Delivery window was accurate and the price was reasonable. Minor hiccup with billing but customer service resolved it quickly and professionally.",
    verified: true
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}`}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {review.name.charAt(0)}
          </div>
          <div> 
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-gray-900 text-lg">{review.name}</h3>
              {review.verified && (
                <CheckCircle className="w-5 h-5 text-green-500 fill-green-500" />
              )}
            </div>
            <p className="text-sm text-gray-500">{review.location}</p>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <StarRating rating={review.rating} />
      </div>
      
      <p className="text-gray-700 leading-relaxed text-base mb-6 flex-grow">
        "{review.text}"
      </p>
      
      <div className="text-sm text-gray-400 pt-4 border-t border-gray-100">
        {review.date}
      </div>
    </div>
  );
};

const ReviewsComponent = () => {
  const swiperRef = useRef(null);

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js';
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    script.onload = () => {
      if (window.Swiper) {
        swiperRef.current = new window.Swiper('.swiper-container', {
          slidesPerView: 1,
          spaceBetween: 24,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          grabCursor: true,
        simulateTouch: true,
        mousewheel: {
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
        },
          breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            }, 
          },
        });
      }
    };

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className='bg-gradient-to-b from-gray-50 via-white to-gray-50'>
    <div className="container bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what real customers say about their auto transport experience with us.
          </p>
        </div> 

        {/* Swiper Slider */}
        <div className="relative px-12">
          <div className="swiper-container overflow-visible">
            <div className="swiper-wrapper pb-12">
              {reviewsData.map((review) => (
                <div key={review.id} className="swiper-slide h-auto">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="swiper-pagination"></div>
          </div>

          {/* Navigation Buttons */}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all z-10 border border-gray-200">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all z-10 border border-gray-200">
            <ChevronRight className="w-6 h-6" />
          </button>
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

      <style jsx>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb;
          width: 32px;
          border-radius: 5px;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          content: none;
        }
      `}</style>
    </div>
    </section>
  );
};

export default ReviewsComponent;