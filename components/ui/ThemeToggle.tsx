"use client";

import { useEffect, useState } from "react";

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
    return <div className="h-8 w-[5.5rem]" />;
  }

  let label;
  let next;
  if (theme === "light") {
    label = "paper";
    next = "phosphor";
  } else if (theme === "dark") {
    label = "phosphor";
    next = "auto";
  } else {
    label = "auto";
    next = "paper";
  }

  return (
    <button
      onClick={cycleTheme}
      className="group border border-border px-2.5 py-1.5 font-mono text-xs text-foreground-secondary transition-colors hover:border-accent hover:text-accent"
      aria-label={`Palette: ${label}. Switch to ${next}.`}
      title={`Palette: ${label} — click for ${next}`}
    >
      <span className="text-accent">--</span>
      <span className="mx-1 uppercase tracking-wider text-foreground group-hover:text-accent">
        {label}
      </span>
      <span className="text-accent">--</span>
    </button>
  );
}
