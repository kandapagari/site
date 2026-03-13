import type { Experience } from '@/lib/data';

interface ExperienceCardProps {
  experience: Experience;
  isLast?: boolean;
}

export default function ExperienceCard({ experience, isLast }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-10">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[7px] top-3 h-full w-px bg-border" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-accent bg-background" />

      <div className="rounded-lg border border-border bg-card-bg p-5">
        <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-base font-semibold text-foreground">
            {experience.role}
          </h3>
          <span className="text-sm text-accent font-medium">
            {experience.company}
          </span>
        </div>
        <p className="mb-3 text-xs text-foreground-secondary">
          {experience.startDate} — {experience.endDate} &middot; {experience.location}
        </p>
        <p className="text-sm leading-relaxed text-foreground-secondary">
          {experience.description}
        </p>
        {experience.techStack.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {experience.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded bg-accent/10 px-2 py-0.5 text-xs text-accent"
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
