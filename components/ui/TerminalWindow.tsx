import { cn } from '@/lib/utils';

interface TerminalWindowProps {
  /** Mono path label shown in the title bar, e.g. "~/projects/vla.md" */
  title?: string;
  children: React.ReactNode;
  className?: string;
  /** Padding around the body content */
  bodyClassName?: string;
}

/**
 * Bordered "window" chrome with a titlebar (three sharp dots + a mono path
 * label). Used to frame cards and major sections in the terminal aesthetic.
 */
export default function TerminalWindow({
  title = '~',
  children,
  className,
  bodyClassName,
}: TerminalWindowProps) {
  return (
    <div className={cn('border border-border bg-card-bg', className)}>
      <div className="flex items-center gap-3 border-b border-border px-3 py-2">
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 bg-accent-2/70" />
          <span className="h-2.5 w-2.5 bg-foreground-secondary/40" />
          <span className="h-2.5 w-2.5 bg-accent/70" />
        </span>
        <span className="truncate font-mono text-xs text-foreground-secondary">
          {title}
        </span>
      </div>
      <div className={cn('p-5', bodyClassName)}>{children}</div>
    </div>
  );
}
