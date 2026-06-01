import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { publications, socialLinks } from '@/lib/data';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import GoogleScholarIcon from '@/components/ui/GoogleScholarIcon';


export const metadata: Metadata = {
  title: 'Publications',
};

export default function PublicationsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 font-mono sm:px-6 lg:px-8">
      <AnimateOnScroll animation="fade-up">
        <h1 className="mb-2 text-3xl font-bold text-foreground">
          <span className="text-accent">$</span> cat refs.bib
        </h1>
        <p className="mb-12 text-foreground-secondary">
          <span className="text-accent-2">//</span> Research contributions in deep learning, computer vision, and medical imaging.
        </p>
      </AnimateOnScroll>

      <div className="space-y-5">
        {publications.map((pub, i) => (
          <AnimateOnScroll key={pub.id} animation="blur-in" delay={i * 150}>
            <div className="border border-border bg-card-bg p-6 transition-colors hover:border-accent/50">
              <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
                <span className="border border-accent/40 px-2 py-0.5 uppercase text-accent">
                  @{pub.type}
                </span>
                <span className="text-foreground-secondary">{pub.year}</span>
                {pub.citations && (
                  <span className="text-foreground-secondary">
                    <span className="text-border">//</span> {pub.citations} citations
                  </span>
                )}
              </div>
              <h2 className="mb-2 text-lg font-bold text-foreground">
                {pub.title}
              </h2>
              <p className="mb-1 text-sm text-foreground-secondary">
                <span className="text-accent-2">author</span> = {'{'}{pub.authors.join(', ')}{'}'}
              </p>
              <p className="mb-3 text-sm text-foreground-secondary">
                <span className="text-accent-2">venue</span> = {'{'}{pub.venue}{'}'}
              </p>
              {pub.url && (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent-hover"
                >
                  {pub.type === 'book' ? '[read online]' : '[view on scholar]'}
                  {pub.type === 'book' ? <ExternalLink size={13} /> : <GoogleScholarIcon size={13} />}
                </a>
              )}
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll animation="blur-in" delay={400}>
        <div className="mt-12 border border-border bg-card-bg p-6 text-center">
          <p className="mb-3 text-foreground-secondary">
            <span className="text-accent-2">{'>'}</span> View my full publication profile on Google Scholar
          </p>
          <a
            href={socialLinks.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-accent"
          >
            ./google-scholar
            <GoogleScholarIcon size={14} />
          </a>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
