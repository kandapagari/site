"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
    } else {
      setTheme("system");
      document.documentElement.setAttribute(
        "data-theme",
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      );
    }
  }, []);

  const cycleTheme = () => {
    if (theme === "system") {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else if (theme === "light") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("system");
      localStorage.removeItem("theme");
      document.documentElement.setAttribute(
        "data-theme",
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      );
    }
  };

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  let Icon;
  let label;
  if (theme === "light") {
    Icon = <Sun size={18} className="text-foreground-secondary" />;
    label = "Switch to dark mode";
  } else if (theme === "dark") {
    Icon = <Moon size={18} className="text-foreground-secondary" />;
    label = "Switch to system mode";
  } else {
    Icon = <Monitor size={18} className="text-foreground-secondary" />;
    label = "Switch to light mode";
  }

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-lg transition-colors hover:bg-card-bg-hover"
      aria-label={label}
    >
      {Icon}
    </button>
  );
}
