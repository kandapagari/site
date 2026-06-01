import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ASCIIDivider from '@/components/ui/ASCIIDivider';

interface SectionPreviewProps {
  title: string;
  href: string;
  children: React.ReactNode;
  /** Command label shown before the title, e.g. "cat experience.log" */
  command?: string;
}

export default function SectionPreview({ title, href, children, command }: SectionPreviewProps) {
  return (
    <section className="py-12 font-mono">
      <ASCIIDivider label={title.toUpperCase()} className="mb-6" />
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-bold text-foreground">
          <span className="text-accent">$</span> {command ?? `cat ${title.toLowerCase()}.log`}
        </h2>
        <Link
          href={href}
          className="group flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          [view all]
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
      {children}
    </section>
  );
}
