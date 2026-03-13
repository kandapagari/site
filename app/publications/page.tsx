import type { Metadata } from 'next';
import { publications, socialLinks } from '@/lib/data';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import GoogleScholarIcon from '@/components/ui/GoogleScholarIcon';


export const metadata: Metadata = {
  title: 'Publications',
};

export default function PublicationsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <AnimateOnScroll animation="fade-up">
        <h1 className="mb-4 text-3xl font-bold text-foreground">
          Publications & Patents
        </h1>
        <p className="mb-12 text-foreground-secondary">
          Research contributions in deep learning, computer vision, and medical imaging.
        </p>
      </AnimateOnScroll>

      <div className="space-y-6">
        {publications.map((pub, i) => (
          <AnimateOnScroll key={pub.id} animation="blur-in" delay={i * 150}>
            <div className="rounded-lg border border-border bg-card-bg p-6">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-medium uppercase text-accent">
                  {pub.type}
                </span>
                <span className="text-xs text-foreground-secondary">{pub.year}</span>
                {pub.citations && (
                  <span className="text-xs text-foreground-secondary">
                    &middot; {pub.citations} citations
                  </span>
                )}
              </div>
              <h2 className="mb-2 text-lg font-semibold text-foreground">
                {pub.title}
              </h2>
              <p className="mb-1 text-sm text-foreground-secondary">
                {pub.authors.join(', ')}
              </p>
              <p className="mb-3 text-sm text-foreground-secondary">{pub.venue}</p>
              {pub.url && (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent transition-colors hover:text-accent-hover"
                >
                  View on Google Scholar
                  <GoogleScholarIcon size={13} />
                </a>
              )}
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll animation="blur-in" delay={400}>
        <div className="mt-12 rounded-lg border border-border bg-card-bg p-6 text-center">
          <p className="mb-3 text-foreground-secondary">
            View my full publication profile on Google Scholar
          </p>
          <a
            href={socialLinks.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Google Scholar Profile
            <GoogleScholarIcon size={14} />
          </a>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
