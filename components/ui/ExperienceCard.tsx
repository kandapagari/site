import type { Experience } from '@/lib/data';

interface ExperienceCardProps {
  experience: Experience;
  isLast?: boolean;
}

export default function ExperienceCard({ experience, isLast }: ExperienceCardProps) {
  return (
    <div className="relative pb-10 pl-8 font-mono">
      {/* git-log style tree connector */}
      {!isLast && (
        <div className="absolute left-[3px] top-4 h-full w-px bg-border" aria-hidden="true" />
      )}
      <span
        className="absolute left-0 top-2 text-accent"
        aria-hidden="true"
      >
        ●
      </span>

      <div className="border border-border bg-card-bg p-5 transition-colors hover:border-accent/50">
        <p className="mb-2 text-xs text-foreground-secondary">
          <span className="text-accent-2">commit</span> {experience.startDate} → {experience.endDate}
        </p>
        <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-base font-bold text-foreground">
            {experience.role}
          </h3>
          <span className="text-sm font-medium text-accent">
            @ {experience.company}
          </span>
        </div>
        <p className="mb-3 text-xs text-foreground-secondary">
          <span className="text-border">//</span> {experience.location}
        </p>
        <p className="text-sm leading-relaxed text-foreground-secondary">
          {experience.description}
        </p>
        {experience.techStack.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {experience.techStack.map((tech) => (
              <span
                key={tech}
                className="border border-border px-2 py-0.5 text-xs text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
