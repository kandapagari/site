"use client";

import SkillBar from "@/components/ui/SkillBar";
import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "Core AI": "from-blue-500 to-cyan-500",
  Architectures: "from-purple-500 to-pink-500",
  Frameworks: "from-orange-500 to-yellow-500",
  Infrastructure: "from-emerald-500 to-teal-500",
  Performance: "from-red-500 to-orange-500",
  Languages: "from-indigo-500 to-blue-500",
};

export default function SkillsPage() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <div className="min-h-screen bg-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Technical Skills
        </h1>
        <p className="text-text-secondary text-lg mb-12">
          Deep expertise across AI/ML research, systems engineering, and production infrastructure.
        </p>

        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">
                {category}
              </h2>
              <div className="space-y-4">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={categoryColors[category] ?? "from-accent-blue to-accent-purple"}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
