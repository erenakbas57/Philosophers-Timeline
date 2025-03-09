
import { useEffect, useState, useRef } from 'react';

interface UseAnimatedScrollOptions {
  rootMargin?: string;
  threshold?: number | number[];
}

export function useAnimatedScroll<T extends HTMLElement>(
  options: UseAnimatedScrollOptions = {}
) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it's visible, no need to observe anymore
          observer.unobserve(element);
        }
      },
      {
        rootMargin: options.rootMargin || '0px',
        threshold: options.threshold || 0.1,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.rootMargin, options.threshold]);

  return { ref, isVisible };
}
