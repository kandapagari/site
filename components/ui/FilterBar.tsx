'use client';

import { cn } from '@/lib/utils';

interface FilterBarProps {
  tags: string[];
  activeTag: string | null;
  onTagClick: (tag: string | null) => void;
}

export default function FilterBar({ tags, activeTag, onTagClick }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onTagClick(null)}
        className={cn(
          'rounded-full px-3 py-1.5 text-sm transition-colors',
          activeTag === null
            ? 'bg-accent text-white'
            : 'border border-border text-foreground-secondary hover:text-foreground hover:border-foreground-secondary'
        )}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagClick(tag)}
          className={cn(
            'rounded-full px-3 py-1.5 text-sm transition-colors',
            activeTag === tag
              ? 'bg-accent text-white'
              : 'border border-border text-foreground-secondary hover:text-foreground hover:border-foreground-secondary'
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
