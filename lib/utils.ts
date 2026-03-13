// Utility functions for the portfolio

/**
 * Combines class names, filtering out falsy values.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Returns a color scheme class string for cards based on index.
 */
export function getCardColorScheme(index: number): string {
  const schemes = [
    "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    "from-purple-500/20 to-pink-500/20 border-purple-500/30",
    "from-orange-500/20 to-yellow-500/20 border-orange-500/30",
    "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
  ];
  return schemes[index % schemes.length];
}

/**
 * Returns a gradient accent color based on category.
 */
export function getCategoryColor(
  category: string
): { from: string; to: string; border: string } {
  const map: Record<string, { from: string; to: string; border: string }> = {
    "Vision-Language": {
      from: "from-blue-500/20",
      to: "to-cyan-500/20",
      border: "border-blue-500/30",
    },
    Robotics: {
      from: "from-purple-500/20",
      to: "to-pink-500/20",
      border: "border-purple-500/30",
    },
    "ML Research": {
      from: "from-orange-500/20",
      to: "to-yellow-500/20",
      border: "border-orange-500/30",
    },
    Software: {
      from: "from-emerald-500/20",
      to: "to-teal-500/20",
      border: "border-emerald-500/30",
    },
  };
  return (
    map[category] ?? {
      from: "from-gray-500/20",
      to: "to-slate-500/20",
      border: "border-gray-500/30",
    }
  );
}
