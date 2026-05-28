import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { projects } from '@/lib/data';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function FeaturedBook() {
  const book = projects.find((p) => p.slug === 'action-models-book');
  if (!book?.liveUrl) return null;

  return (
    <section className="py-12">
      <AnimateOnScroll animation="fade-up">
        <div className="rounded-lg border border-border border-l-4 border-l-accent bg-card-bg p-6 md:p-8">
          <div className="flex items-start gap-5">
            <div className="hidden flex-shrink-0 rounded-md bg-accent/10 p-3 text-accent sm:block">
              <BookOpen size={28} />
            </div>
            <div className="flex-1">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-accent">
                  New
                </span>
                <span className="text-xs uppercase tracking-wider text-foreground-secondary">
                  Featured book
                </span>
              </div>
              <h2 className="mb-2 text-xl font-bold text-foreground md:text-2xl">
                {book.title}
              </h2>
              <p className="mb-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                {book.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={book.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                >
                  Read the book
                  <ArrowRight size={16} />
                </a>
                <Link
                  href={`/projects/${book.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card-bg"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
