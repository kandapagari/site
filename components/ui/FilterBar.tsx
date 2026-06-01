'use client';

import { cn } from '@/lib/utils';

interface FilterBarProps {
  tags: string[];
  activeTag: string | null;
  onTagClick: (tag: string | null) => void;
}

export default function FilterBar({ tags, activeTag, onTagClick }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 font-mono text-sm">
      <button
        onClick={() => onTagClick(null)}
        className={cn(
          'border px-3 py-1.5 transition-colors',
          activeTag === null
            ? 'border-accent bg-accent text-background'
            : 'border-border text-foreground-secondary hover:border-accent hover:text-accent'
        )}
      >
        --all
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagClick(tag)}
          className={cn(
            'border px-3 py-1.5 transition-colors',
            activeTag === tag
              ? 'border-accent bg-accent text-background'
              : 'border-border text-foreground-secondary hover:border-accent hover:text-accent'
          )}
        >
          --{tag}
        </button>
      ))}
    </div>
  );
}
