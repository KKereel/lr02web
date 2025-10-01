import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SLIDES_DATA } from '../../data/constants';

const HeroCarousel = ({ currentSlide, setCurrentSlide }) => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 mb-8 overflow-hidden rounded-xl">
      <div className="relative h-64 md:h-80">
        {SLIDES_DATA.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ${
              index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <div className={`h-full bg-gradient-to-r ${slide.bg} rounded-xl flex items-center justify-center text-white`}>
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl md:text-2xl opacity-90">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button
        onClick={() => setCurrentSlide((currentSlide - 1 + SLIDES_DATA.length) % SLIDES_DATA.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => setCurrentSlide((currentSlide + 1) % SLIDES_DATA.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {SLIDES_DATA.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;