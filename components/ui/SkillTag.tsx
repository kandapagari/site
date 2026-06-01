import type { Skill } from '@/lib/data';

interface SkillTagProps {
  skill: Skill;
}

export default function SkillTag({ skill }: SkillTagProps) {
  return (
    <span className="inline-block border border-border bg-card-bg px-3 py-1.5 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent">
      <span className="mr-1.5 text-foreground-secondary">$</span>
      {skill.name}
    </span>
  );
}
