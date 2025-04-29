import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { sliderImages } from '../data/products';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    const newIndex = (currentSlide + 1) % sliderImages.length;
    goToSlide(newIndex);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    const newIndex = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
    goToSlide(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slider */}
      <div className="relative h-full w-full">
        {sliderImages.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slide.imageUrl})`,
                filter: 'brightness(0.7)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
              <h1 
                className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-700 transform translate-y-0 opacity-100"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 700ms ease-in-out, transform 700ms ease-in-out',
                  transitionDelay: '200ms'
                }}
              >
                {slide.title}
              </h1>
              <p 
                className="mb-8 text-xl md:text-2xl transition-all duration-700 transform translate-y-0 opacity-100"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 700ms ease-in-out, transform 700ms ease-in-out',
                  transitionDelay: '400ms'
                }}
              >
                {slide.subtitle}
              </p>
              <a 
                href="#products" 
                className="px-6 py-3 bg-pink-600 rounded-lg font-medium text-white transition-all duration-300 hover:bg-pink-700 hover:shadow-lg"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 700ms ease-in-out, transform 700ms ease-in-out',
                  transitionDelay: '600ms'
                }}
              >
                Explore Collection
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-white'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;