import { cn } from '@/lib/utils';

type PromptSymbol = '$' | '>' | '//' | '#' | '~';

interface PromptProps {
  /** Command sigil rendered before the content */
  symbol?: PromptSymbol;
  children?: React.ReactNode;
  className?: string;
  /** Color of the sigil; defaults to the green/amber accent */
  symbolClassName?: string;
}

/**
 * Inline command/label primitive (`$`, `>`, `//`, `#`) used for section
 * headers, captions, and CTAs throughout the terminal UI.
 */
export default function Prompt({
  symbol = '$',
  children,
  className,
  symbolClassName,
}: PromptProps) {
  return (
    <span className={cn('inline-flex items-baseline gap-2 font-mono', className)}>
      <span
        className={cn('select-none text-accent', symbolClassName)}
        aria-hidden="true"
      >
        {symbol}
      </span>
      {children != null && <span>{children}</span>}
    </span>
  );
}
