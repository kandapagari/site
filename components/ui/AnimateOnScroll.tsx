'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-up' | 'slide-left' | 'slide-right' | 'blur-in';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

const animationClasses: Record<AnimationType, string> = {
  'fade-up': 'animate-fade-up',
  'slide-left': 'animate-slide-left',
  'slide-right': 'animate-slide-right',
  'blur-in': 'animate-blur-in',
};

export default function AnimateOnScroll({
  children,
  animation = 'fade-up',
  delay = 0,
  className,
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setIsVisible(true);
      // Remove the CSS-based hidden state immediately
      if (ref.current) {
        ref.current.classList.remove('aos-init');
        ref.current.classList.add('aos-reduced');
      }
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        // Start hidden via CSS class (works before hydration - no flash)
        !isVisible && 'aos-init',
        // When visible, apply animation class
        isVisible && animationClasses[animation],
        className
      )}
      style={
        isVisible
          ? { animationDelay: `${delay}ms` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
