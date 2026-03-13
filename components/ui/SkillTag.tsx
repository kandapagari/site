import type { Skill } from '@/lib/data';

interface SkillTagProps {
  skill: Skill;
}

export default function SkillTag({ skill }: SkillTagProps) {
  return (
    <span className="inline-block rounded-full border border-border bg-card-bg px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent">
      {skill.name}
    </span>
  );
}
