"use client";

interface SkillBarProps {
  name: string;
  level: number;
  color?: string;
}

export default function SkillBar({ name, level, color = "from-accent-blue to-accent-purple" }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-text-primary text-sm font-medium">{name}</span>
        <span className="text-text-secondary text-xs">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
