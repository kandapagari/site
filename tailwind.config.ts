import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "foreground-secondary": "var(--foreground-secondary)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-2": "var(--accent-2)",
        border: "var(--border)",
        "card-bg": "var(--card-bg)",
        "card-bg-hover": "var(--card-bg-hover)",
        "nav-bg": "var(--nav-bg)",
      },
      fontFamily: {
        sans: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        display: ["var(--font-display)", "var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        none: "0",
        sm: "0",
        DEFAULT: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
        full: "9999px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "slide-left": "slideLeft 0.6s ease-out both",
        "slide-right": "slideRight 0.6s ease-out both",
        "blur-in": "blurIn 0.8s ease-out both",
        "line-draw": "lineDraw 0.8s ease-out both",
        "count-up": "countUp 1s ease-out both",
        "caret-blink": "caretBlink 1s step-end infinite",
        "boot-line": "bootLine 0.5s ease-out both",
        "typing": "typing 1.6s steps(40, end) both",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        caretBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        bootLine: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        scanline: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        blurIn: {
          "0%": { opacity: "0", filter: "blur(8px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
        lineDraw: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
