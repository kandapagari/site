'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'experience', href: '/experience' },
  { name: 'projects', href: '/projects' },
  { name: 'publications', href: '/publications' },
  { name: 'contact', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-nav-bg font-mono backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-1.5 text-sm font-bold text-foreground transition-colors hover:text-accent"
            aria-label="Home"
          >
            <span className="text-foreground-secondary">~/pk</span>
            <span className="text-accent">$</span>
            <span className="h-4 w-[0.55ch] animate-caret-blink bg-accent" aria-hidden="true" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-2.5 py-2 text-sm transition-colors',
                    active
                      ? 'text-accent'
                      : 'text-foreground-secondary hover:text-foreground'
                  )}
                >
                  {active ? (
                    <>
                      <span className="text-accent">[</span>
                      {item.name}
                      <span className="text-accent">]</span>
                    </>
                  ) : (
                    item.name
                  )}
                </Link>
              );
            })}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="border border-border p-2 text-foreground-secondary transition-colors hover:border-accent hover:text-accent"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-border bg-nav-bg font-mono backdrop-blur-md md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 text-sm transition-colors',
                    active
                      ? 'bg-card-bg text-accent'
                      : 'text-foreground-secondary hover:bg-card-bg hover:text-foreground'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-2 text-accent">{active ? '>' : '$'}</span>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
