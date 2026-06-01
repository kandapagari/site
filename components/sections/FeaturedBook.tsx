import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { projects } from '@/lib/data';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import TerminalWindow from '@/components/ui/TerminalWindow';

export default function FeaturedBook() {
  const book = projects.find((p) => p.slug === 'action-models-book');
  if (!book?.liveUrl) return null;

  return (
    <section className="py-12 font-mono">
      <AnimateOnScroll animation="fade-up">
        <TerminalWindow title="~/library/action-models.md" bodyClassName="p-6 md:p-8">
          <div className="flex items-start gap-5">
            <div className="hidden flex-shrink-0 border border-accent/40 bg-accent/10 p-3 text-accent sm:block">
              <BookOpen size={28} />
            </div>
            <div className="flex-1">
              <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-wider">
                <span className="bg-accent-2 px-2 py-0.5 font-semibold text-background">
                  new
                </span>
                <span className="text-foreground-secondary">// featured book</span>
              </div>
              <h2 className="mb-2 text-xl font-bold text-foreground md:text-2xl">
                <span className="text-accent">$</span> {book.title}
              </h2>
              <p className="mb-5 text-sm leading-relaxed text-foreground-secondary md:text-base">
                {book.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={book.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
                >
                  ./read-the-book
                  <ArrowRight size={16} />
                </a>
                <Link
                  href={`/projects/${book.slug}`}
                  className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  --learn-more
                </Link>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </AnimateOnScroll>
    </section>
  );
}
