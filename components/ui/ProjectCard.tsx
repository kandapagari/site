import Link from "next/link";
import { getCategoryColor } from "@/lib/utils";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const colors = getCategoryColor(project.category);

  return (
    <div
      className={`bg-gradient-to-br ${colors.from} ${colors.to} rounded-xl p-6 border ${colors.border} hover:scale-[1.03] transition-all duration-300 group`}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-medium text-accent-cyan uppercase tracking-wider">
          {project.category}
        </span>
        <span className="text-xs text-text-secondary">{project.year}</span>
      </div>

      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
        {project.title}
      </h3>

      <p className="text-text-secondary text-sm mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-full bg-white/5 text-text-muted border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-secondary hover:text-white transition-colors"
          >
            GitHub &rarr;
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-secondary hover:text-white transition-colors"
          >
            Live Demo &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
