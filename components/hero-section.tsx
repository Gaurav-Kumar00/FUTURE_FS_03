'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: 'iPhone 16 Pro',
      subtitle: 'Hello, Apple Intelligence.',
      description: 'The first iPhone designed for Apple Intelligence. Revolutionary AI that helps you write, express yourself, and get things done effortlessly.',
      cta: 'Learn more',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: 'MacBook Pro',
      subtitle: 'Mind-blowing. Head-turning.',
      description: 'The most advanced Mac laptops ever. Supercharged by M3, M3 Pro, and M3 Max chips.',
      cta: 'Shop now',
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: 'Apple Watch Series 10',
      subtitle: 'Thinstant classic.',
      description: 'Our biggest display. Our thinnest design. Our fastest charging. The most advanced Apple Watch yet.',
      cta: 'Explore',
      image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(slideInterval);
    };
  }, [heroSlides.length]);

  const currentHero = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${currentHero.image})`,
          transform: `translateY(${scrollY * 0.5}px)`,
          scale: '1.1'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-lg font-medium">
            {currentHero.subtitle}
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-thin text-white mb-6 leading-tight">
          {currentHero.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
          {currentHero.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            {currentHero.cta}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-slate-600 text-slate-300 hover:bg-slate-700/50 backdrop-blur-sm px-8 py-4 text-lg font-medium rounded-full transition-all duration-300"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Introduction
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}