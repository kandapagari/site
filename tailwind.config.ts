import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary-dark': '#0a0a0e',
        'primary-light': '#1a1a24',
      },
      colors: {
        primary: {
          dark: '#0a0a0e',
          light: '#1a1a24',
        },
        accent: {
          blue: '#6366f1',
          purple: '#8b5cf6',
          cyan: '#06b6d4',
        },
        text: {
          primary: '#e2e8f0',
          secondary: '#64748b',
          muted: '#94a3b8',
        },
      },
      backgroundImage: {
        'gradient-x': 'linear-gradient(to right, #6366f1, #8b5cf6, #06b6d4, #6366f1)',
        'gradient-y': 'linear-gradient(to bottom, #6366f1, #8b5cf6, #06b6d4, #6366f1)',
        'gradient-bg': 'linear-gradient(135deg, #0a0a0e 0%, #1a1a24 50%, #0a0a0e 100%)',
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'gradient-y': 'gradient-y 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'top center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'bottom center'
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config