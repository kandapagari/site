'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Youtube, Instagram, Twitter } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import GoogleScholarIcon from '@/components/ui/GoogleScholarIcon';

const socials = [
  { icon: Github, href: socialLinks.github, label: 'GitHub' },
  { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: socialLinks.x, label: 'X' },
  { icon: Instagram, href: socialLinks.instagram, label: 'Instagram' },
  { icon: Youtube, href: socialLinks.youtube, label: 'YouTube' },
  { icon: GoogleScholarIcon, href: socialLinks.scholar, label: 'Google Scholar' },
  { icon: Mail, href: socialLinks.email, label: 'Email' },
];

/**
 * vim/tmux-style status line: palette indicator, current path, and socials.
 */
export default function StatusBar() {
  const pathname = usePathname();
  const [palette, setPalette] = useState<'phosphor' | 'paper'>('phosphor');

  useEffect(() => {
    const read = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setPalette(theme === 'light' ? 'paper' : 'phosphor');
    };
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  const path = pathname === '/' ? '~' : `~${pathname}`;

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border bg-card-bg px-4 py-2 font-mono text-xs">
      <span className="inline-flex items-center gap-2 bg-accent px-2 py-0.5 font-semibold uppercase tracking-wider text-background">
        {palette}
      </span>
      <span className="text-foreground-secondary">
        <span className="text-accent">{path}</span>
        <span className="ml-1 inline-block h-3 w-[0.55ch] animate-caret-blink bg-accent align-middle" aria-hidden="true" />
      </span>
      <span className="ml-auto flex items-center gap-3">
        {socials.map((s) => {
          const Icon = s.icon;
          const isLink = !s.href.startsWith('mailto');
          return (
            <a
              key={s.label}
              href={s.href}
              target={isLink ? '_blank' : undefined}
              rel={isLink ? 'noopener noreferrer' : undefined}
              className="text-foreground-secondary transition-colors hover:text-accent"
              aria-label={s.label}
            >
              <Icon size={15} />
            </a>
          );
        })}
      </span>
    </div>
  );
}
