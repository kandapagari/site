import Link from 'next/link';
import { ExternalLink, Lock } from 'lucide-react';
import type { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group rounded-lg border border-border bg-card-bg p-5 transition-all hover:bg-card-bg-hover hover:border-accent/30">
      <div className="mb-3 flex items-start justify-between">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </Link>
        {project.isPrivate ? (
          <span className="ml-2 flex-shrink-0 inline-flex items-center gap-1 rounded-full bg-foreground-secondary/10 px-2 py-0.5 text-xs text-foreground-secondary">
            <Lock size={10} />
            Private
          </span>
        ) : project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex-shrink-0 rounded p-1 text-foreground-secondary transition-colors hover:text-accent"
            aria-label={`View ${project.title} on GitHub`}
          >
            <ExternalLink size={15} />
          </a>
        ) : null}
      </div>
      <p className="mb-4 text-sm leading-relaxed text-foreground-secondary">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
