import Link from 'next/link';
import { ExternalLink, Lock } from 'lucide-react';
import type { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex h-full flex-col border border-border bg-card-bg font-mono transition-colors hover:border-accent">
      <div className="flex items-center gap-3 border-b border-border px-3 py-2">
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 bg-accent-2/70" />
          <span className="h-2 w-2 bg-foreground-secondary/40" />
          <span className="h-2 w-2 bg-accent/70" />
        </span>
        <span className="truncate text-xs text-foreground-secondary">
          ~/projects/{project.slug}
        </span>
        <span className="ml-auto flex-shrink-0">
          {project.isPrivate ? (
            <span className="inline-flex items-center gap-1 text-xs text-foreground-secondary">
              <Lock size={11} />
              private
            </span>
          ) : project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-secondary transition-colors hover:text-accent"
              aria-label={`View ${project.title} on GitHub`}
            >
              <ExternalLink size={14} />
            </a>
          ) : project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-secondary transition-colors hover:text-accent"
              aria-label={`Visit ${project.title}`}
            >
              <ExternalLink size={14} />
            </a>
          ) : null}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-accent">
            <span className="text-accent">$</span> {project.title}
          </h3>
        </Link>
        <p className="mb-4 mt-3 flex-1 text-sm leading-relaxed text-foreground-secondary">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-border px-2 py-0.5 text-xs text-accent transition-colors group-hover:border-accent/40"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
