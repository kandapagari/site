'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  text: string;
  className?: string;
  /** Milliseconds between characters */
  speed?: number;
  /** Delay before typing begins */
  startDelay?: number;
}

/**
 * Types out a string character-by-character, then leaves a blinking block
 * caret. Under prefers-reduced-motion the full text is revealed instantly.
 */
export default function Typewriter({
  text,
  className,
  speed = 45,
  startDelay = 250,
}: TypewriterProps) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setCount(text.length);
      setDone(true);
      return;
    }

    let intervalId: ReturnType<typeof setInterval>;
    const startId = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      <span>{text.slice(0, count)}</span>
      <span
        aria-hidden="true"
        className={cn(
          'ml-0.5 inline-block w-[0.6ch] -translate-y-[0.05em] bg-accent align-baseline',
          done ? 'animate-caret-blink' : ''
        )}
        style={{ height: '1em' }}
      >
        &nbsp;
      </span>
    </span>
  );
}
