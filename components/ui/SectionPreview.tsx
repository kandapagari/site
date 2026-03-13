import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SectionPreviewProps {
  title: string;
  href: string;
  children: React.ReactNode;
}

export default function SectionPreview({ title, href, children }: SectionPreviewProps) {
  return (
    <section className="py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <Link
          href={href}
          className="group flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          View all
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
