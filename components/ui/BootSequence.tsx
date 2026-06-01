'use client';

import { cn } from '@/lib/utils';

interface BootSequenceProps {
  /** Lines revealed one-by-one, top to bottom */
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
  /** Milliseconds added per line before it reveals */
  stagger?: number;
}

/**
 * Staggered line-by-line reveal for a boot/hero block. CSS-driven: each line
 * uses the `boot-line` animation with an increasing delay, so it is flash-free
 * during SSR and collapses to an instant reveal under prefers-reduced-motion
 * (handled by the global reduced-motion rule).
 */
export default function BootSequence({
  lines,
  className,
  lineClassName,
  stagger = 110,
}: BootSequenceProps) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div
          key={i}
          className={cn('animate-boot-line', lineClassName)}
          style={{ animationDelay: `${i * stagger}ms` }}
        >
          {line}
        </div>
      ))}
    </div>
  );
}
