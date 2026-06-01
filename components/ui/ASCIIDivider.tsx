import { cn } from '@/lib/utils';

interface ASCIIDividerProps {
  /** Optional label rendered before the rule, e.g. "02_projects" */
  label?: string;
  className?: string;
}

/**
 * Box-drawing horizontal rule used between sections. The repeating glyphs are
 * clipped to the container width and never wrap.
 */
export default function ASCIIDivider({ label, className }: ASCIIDividerProps) {
  return (
    <div
      className={cn(
        'select-none overflow-hidden whitespace-nowrap font-mono text-xs leading-none text-border',
        className
      )}
      aria-hidden="true"
    >
      {label ? (
        <span className="text-foreground-secondary">{`──  ${label}  `}</span>
      ) : null}
      {'─'.repeat(300)}
    </div>
  );
}
