
import { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { sortedPhilosophers, formatYear } from '@/lib/philosophers';
import PhilosopherCard from './PhilosopherCard';
import { useAnimatedScroll } from '@/hooks/useAnimatedScroll';
import { useQuery } from '@tanstack/react-query';
import { philosophers } from '@/lib/philosophers';


const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Sort the philosophers by birth year
  const sortedPhilosophers = [...philosophers].sort((a, b) => a.birthYear - b.birthYear);
  
  
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="min-h-screen relative flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="text-center z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Filozofların Zaman Çizelgesi
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Tarih boyunca düşünce dünyasını şekillendiren filozofların kronolojik yolculuğu
          </p>
          <button 
            onClick={scrollToNextSection}
            className="animate-fade-up flex items-center justify-center mx-auto mt-8 p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            style={{ animationDelay: '0.6s' }}
          >
            <ChevronDown className="h-8 w-8 text-primary animate-bounce" />
          </button>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/0 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Timeline section with alternating sides */}
      <div ref={timelineRef} className="timeline-container py-20 px-4 md:px-8 relative">
        {/* Center line for timeline */}
        <div className="timeline-line"></div>
        
        {(
          sortedPhilosophers.map((philosopher, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={philosopher.id}
                className={`timeline-item visible ${isEven ? 'timeline-left' : 'timeline-right'}`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="mb-2 text-center">
                    <span className="inline-block px-3 py-1 text-xs bg-primary/10 text-primary font-medium rounded-full">
                      {formatYear(philosopher.birthYear)}
                    </span>
                  </div>
                  <PhilosopherCard philosopher={philosopher} index={index} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Timeline;
