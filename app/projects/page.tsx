"use client";

import { useState } from "react";
import type { Metadata } from "next";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

const categories = ["All", "Vision-Language", "Robotics", "ML Research", "Software"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-primary-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Projects
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          Research and production systems spanning VLA models, robotics, and scalable ML infrastructure.
        </p>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-accent-blue to-accent-purple text-white"
                  : "glass-effect text-text-secondary hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-text-secondary text-center py-12">
            No projects in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
