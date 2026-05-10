'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Content Creator',
    content: 'These tools have saved me so much time! The image to text converter is incredibly accurate and the interface is super intuitive. Highly recommend!',
    rating: 5,
  },
  {
    name: 'James Chen',
    role: 'Software Developer',
    content: 'As a developer, I appreciate how well these encoding tools work. The A1Z26 converter is perfect for puzzles and the URL encoder handles edge cases perfectly.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Educator',
    content: 'My students love using these tools for learning about cryptography and encoding. Free, fast, and no data collection. Perfect for classroom use!',
    rating: 5,
  },
  {
    name: 'Michael Park',
    role: 'Graphic Designer',
    content: 'The grayscale converter and color tools are exactly what I needed. The quality is excellent and everything runs in the browser. No login required!',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Digital Marketer',
    content: 'Finally, a suite of tools that actually work! HTML encoding, URL formatting, image conversion - all in one place. This is my go-to resource now.',
    rating: 5,
  },
  {
    name: 'David Wong',
    role: 'Puzzle Enthusiast',
    content: 'Perfect for geocaching and escape rooms! The cipher tools are reliable and the letter-to-numbers converter is spot-on. Thanks for making these free!',
    rating: 5,
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="py-8">
      <h3 className="text-2xl font-bold mb-8 text-center">What Users Say</h3>
      
      <div className="relative bg-secondary/30 rounded-lg p-8 md:p-12 border border-border">
        {/* Testimonial Content */}
        <div className="max-w-3xl mx-auto">
          {/* Rating */}
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Quote */}
          <p className="text-center text-lg md:text-xl text-foreground mb-6 leading-relaxed">
            &quot;{currentTestimonial.content}&quot;
          </p>

          {/* Author */}
          <div className="text-center">
            <p className="font-semibold text-foreground">{currentTestimonial.name}</p>
            <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-secondary transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-secondary transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-border w-2 hover:bg-border/80'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <p className="text-center text-xs text-muted-foreground mt-4">
        {isAutoPlay ? 'Auto-playing testimonials...' : 'Click to resume auto-play'}
      </p>
    </div>
  )
}
