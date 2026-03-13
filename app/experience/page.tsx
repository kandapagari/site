import type { Metadata } from "next";
import GlassCard from "@/components/ui/GlassCard";
import { experiences } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience - Pavan Kumar Kandapagari",
  description: "Professional experience in AI/ML, robotics, and foundation models.",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Experience
        </h1>
        <p className="text-text-secondary text-lg mb-12">
          Career journey from deep learning engineering to leading foundation model research.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-accent-cyan" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-12">
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-accent-blue border-2 border-primary-dark" />

                <GlassCard className="hover:scale-100">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-accent-cyan text-sm">
                        {exp.company} &middot; {exp.location}
                      </p>
                    </div>
                    <span className="text-text-muted text-sm mt-1 sm:mt-0 whitespace-nowrap">
                      {exp.dates}
                    </span>
                  </div>

                  <p className="text-text-secondary text-sm mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-text-secondary text-sm flex items-start gap-2"
                      >
                        <span className="text-accent-purple mt-1 shrink-0">
                          &#9656;
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
