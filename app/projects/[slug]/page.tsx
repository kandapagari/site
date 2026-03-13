import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, Lock } from 'lucide-react';
import { projects } from '@/lib/data';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import GoogleScholarIcon from '@/components/ui/GoogleScholarIcon';


interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };
  return { title: project.title };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <AnimateOnScroll animation="fade-up">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-1 text-sm text-foreground-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} />
          Back to projects
        </Link>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={100}>
        <div className="mb-4 flex items-center gap-3">
          <h1 className="text-3xl font-bold text-foreground">{project.title}</h1>
          {project.isPrivate && (
            <span className="inline-flex items-center gap-1 rounded-full bg-foreground-secondary/10 px-2.5 py-1 text-xs text-foreground-secondary">
              <Lock size={11} />
              Internal Project
            </span>
          )}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={200}>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={300}>
        <p className="mb-4 text-lg leading-relaxed text-foreground-secondary">
          {project.description}
        </p>
      </AnimateOnScroll>

      {project.longDescription && (
        <AnimateOnScroll animation="fade-up" delay={400}>
          <p className="mb-8 leading-relaxed text-foreground-secondary">
            {project.longDescription}
          </p>
        </AnimateOnScroll>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <AnimateOnScroll animation="fade-up" delay={450}>
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Key Highlights</h2>
            <ul className="space-y-2">
              {project.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm leading-relaxed text-foreground-secondary"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      )}

      <AnimateOnScroll animation="fade-up" delay={500}>
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            View on GitHub
            <GoogleScholarIcon size={14} />
          </a>
        ) : project.isPrivate ? (
          <div className="rounded-lg border border-border bg-card-bg p-4">
            <p className="flex items-center gap-2 text-sm text-foreground-secondary">
              <Lock size={14} />
              This is proprietary work from my role at Agile Robots SE. Source code is not publicly available, but the write-up above describes the architecture and technical approach.
            </p>
          </div>
        ) : null}
      </AnimateOnScroll>
    </div>
  );
}
