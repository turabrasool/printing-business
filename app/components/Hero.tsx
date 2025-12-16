"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTheme } from "@/app/theme-provider"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const { theme } = useTheme()

  const slides = [
    {
      id: 1,
      title: "Let Us Help You With All Of Your Printing Needs",
      button: "Contact Us",
      gradientLight: "linear-gradient(to bottom right, #ffffff, #f8f9fa, #ffffff)",
      gradientDark: "linear-gradient(to bottom right, #121212, #1a1a1a, #121212)",
  image: "/images/image-1.jpg",
      imagePosition: "right",
    },
    {
      id: 2,
      title: "Elevate Your Brand Identity With Our Exclusive Leather Patches",
      button: "Know More",
      gradientLight: "linear-gradient(to bottom right, #f8f9fa, #ffffff, #f8f9fa)",
      gradientDark: "linear-gradient(to bottom right, #1a1a1a, #121212, #1a1a1a)",
  image: "/images/image-2.jpg",
      imagePosition: "left",
    },
    {
      id: 3,
      title: "Transform Your Designs With Our Screen Printing",
      button: "Explore More",
      gradientLight: "linear-gradient(to bottom right, #f1f3f5, #ffffff, #f1f3f5)",
      gradientDark: "linear-gradient(to bottom right, #2d2d2d, #121212, #2d2d2d)",
  image: "/images/image-3.jpg",
      imagePosition: "right",
    },
    {
      id: 4,
      title: "Unmatched Quality With Our Advanced Offset Printing",
      button: "For More",
      gradientLight: "linear-gradient(to bottom right, #ffffff, #f1f3f5, #ffffff)",
      gradientDark: "linear-gradient(to bottom right, #121212, #2d2d2d, #121212)",
  image: "/images/image-4.jpg",
      imagePosition: "left",
    },
  ]

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setTimeout(() => setIsAnimating(false), 800)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setTimeout(() => setIsAnimating(false), 800)
    }
  }

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true)
      setCurrentSlide(index)
      setTimeout(() => setIsAnimating(false), 800)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide, isAnimating])

  return (
    <>
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInScale {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .slide-enter {
          animation: fadeInScale 0.8s ease-out forwards;
        }

        .text-enter-left {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .text-enter-right {
          animation: slideInFromRight 0.8s ease-out forwards;
        }

        .image-enter-left {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .image-enter-right {
          animation: slideInFromRight 0.8s ease-out forwards;
        }
      `}</style>

      <section className="relative h-screen overflow-hidden bg-page-primary">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-800 ${
              index === currentSlide ? "opacity-100 z-10 slide-enter" : "opacity-0 z-0"
            }`}
            style={{
              background: theme === 'dark' ? slide.gradientDark : slide.gradientLight,
            }}
          >
            <div className="container mx-auto h-full px-4 md:px-8">
              <div
                className={`h-full grid ${
                  slide.imagePosition === "left" ? "md:grid-cols-[45%_55%]" : "md:grid-cols-[55%_45%]"
                } grid-cols-1 gap-8 items-center`}
              >
                {/* Text Content */}
                <div
                  className={`${
                    slide.imagePosition === "left" ? "md:order-2" : "md:order-1"
                  } flex flex-col justify-center ${
                    slide.imagePosition === "left" ? "md:items-start" : "md:items-end"
                  } items-center text-center ${slide.imagePosition === "left" ? "md:text-left" : "md:text-right"} ${
                    index === currentSlide
                      ? slide.imagePosition === "left"
                        ? "text-enter-right"
                        : "text-enter-left"
                      : "opacity-0"
                  }`}
                >
                  <h1
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight text-primary"
                    style={{
                      textShadow: theme === 'dark' ? "2px 2px 4px rgba(0, 0, 0, 0.5)" : "2px 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {slide.title}
                  </h1>
                  <button
                    className="px-8 py-4 bg-accent hover:opacity-90 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
                  >
                    {slide.button}
                  </button>
                </div>

                {/* Image */}
                <div
                  className={`${
                    slide.imagePosition === "left" ? "md:order-1" : "md:order-2"
                  } flex items-center justify-center ${
                    index === currentSlide
                      ? slide.imagePosition === "left"
                        ? "image-enter-left"
                        : "image-enter-right"
                      : "opacity-0"
                  }`}
                >
                  <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="w-full h-full object-contain"
                      style={{
                        filter: theme === 'dark' 
                          ? "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))" 
                          : "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2))",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform border border-light"
          aria-label="Previous slide"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
          }}
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform border border-light"
          aria-label="Next slide"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
          }}
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 hover:scale-120 ${
                index === currentSlide 
                  ? "w-12 h-3 bg-accent" 
                  : "w-3 h-3 bg-current opacity-30"
              }`}
              style={{
                color: 'var(--text-primary)'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  )
}