import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ExternalLink, Github, Lock } from 'lucide-react';
import { projects } from '@/lib/data';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';


interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };
  return { title: project.title };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 font-mono sm:px-6 lg:px-8">
      <AnimateOnScroll animation="fade-up">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-foreground-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} />
          cd ../projects
        </Link>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={100}>
        <p className="mb-2 text-sm text-foreground-secondary">
          <span className="text-accent">$</span> cat ~/projects/{project.slug}.md
        </p>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold text-foreground">{project.title}</h1>
          {project.isPrivate && (
            <span className="inline-flex items-center gap-1 border border-border px-2.5 py-1 text-xs text-foreground-secondary">
              <Lock size={11} />
              internal
            </span>
          )}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={200}>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-border px-3 py-1 text-sm text-accent"
            >
              #{tag}
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
            <h2 className="mb-4 text-lg font-bold text-foreground">
              <span className="text-accent">//</span> key_highlights
            </h2>
            <ul className="space-y-2">
              {project.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm leading-relaxed text-foreground-secondary"
                >
                  <span className="mt-0.5 flex-shrink-0 text-accent">▸</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      )}

      <AnimateOnScroll animation="fade-up" delay={500}>
        {project.liveUrl || project.githubUrl ? (
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
              >
                ./visit-site
                <ExternalLink size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
              >
                git clone
                <Github size={14} />
              </a>
            )}
          </div>
        ) : project.isPrivate ? (
          <div className="border border-border bg-card-bg p-4">
            <p className="flex items-start gap-2 text-sm text-foreground-secondary">
              <Lock size={14} className="mt-0.5 flex-shrink-0" />
              This is proprietary work from my role at Agile Robots SE. Source code is not publicly available, but the write-up above describes the architecture and technical approach.
            </p>
          </div>
        ) : null}
      </AnimateOnScroll>
    </div>
  );
}
