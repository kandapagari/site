'use client';

import { useState } from 'react';
import { projects } from '@/lib/data';
import { getUniqueTags } from '@/lib/utils';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ProjectCard from '@/components/ui/ProjectCard';
import FilterBar from '@/components/ui/FilterBar';

const allTags = getUniqueTags(projects);

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <AnimateOnScroll animation="fade-up">
        <h1 className="mb-4 text-3xl font-bold text-foreground">Projects</h1>
        <p className="mb-8 text-foreground-secondary">
          Original projects spanning ML, robotics, systems programming, and more.
        </p>
      </AnimateOnScroll>

      <div className="mb-8">
        <FilterBar tags={allTags} activeTag={activeTag} onTagClick={setActiveTag} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <AnimateOnScroll key={project.slug} animation="fade-up" delay={i * 60}>
            <ProjectCard project={project} />
          </AnimateOnScroll>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-foreground-secondary">
          No projects match this filter.
        </p>
      )}
    </div>
  );
}
