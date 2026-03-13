# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modern, dark-themed AI/ML/Robotics portfolio website for Pavan Kumar Kandapagari using Next.js 14, React, Tailwind CSS, and deploy to Vercel.

**Architecture:** Single-page Next.js 14 App Router application with separate routes for About, Experience, Projects, Publications, Skills, and Contact sections. Interactive components built with React hooks and Tailwind CSS animations. All content stored as TypeScript interfaces. Glassmorphism design system with gradient effects and responsive layouts.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, React 18, next/image for optimization, next/font for Google Fonts, next/link for navigation, lucide-react for icon library.

---

## File Structure

```
portfolio-website/
├── app/
│   ├── favicon.ico
│   ├── layout.tsx            # Root layout with global styles and navigation
│   ├── page.tsx              # Home/Hero section
│   ├── globals.css           # Global CSS variables and utility functions
│   ├── about/
│   │   └── page.tsx          # About section
│   ├── experience/
│   │   └── page.tsx          # Experience timeline
│   ├── skills/
│   │   └── page.tsx          # Skills visualization
│   ├── projects/
│   │   ├── page.tsx          # Project listing with filters
│   │   └── [slug]/
│   │       └── page.tsx      # Individual project details
│   ├── publications/
│   │   ├── page.tsx          # Publications listing
│   │   └── [slug]/
│   │       └── page.tsx      # Individual publication details
│   └── contact/
│       └── page.tsx          # Contact section
├── components/
│   ├── sections/
│   │   ├── Home.tsx          # Hero section component
│   │   ├── About.tsx         # Bio and philosophy section
│   │   ├── Experience.tsx    # Timeline component
│   │   ├── Projects.tsx      # Projects grid component
│   │   ├── Publications.tsx  # Publications grid component
│   │   ├── Skills.tsx        # Skill bars component
│   │   └── Contact.tsx       # Contact section component
│   ├── ui/
│   │   ├── GlassCard.tsx     # Glassmorphism card component
│   │   ├── SkillBar.tsx      # Animated skill bar component
│   │   ├── ProjectCard.tsx   # 3D tilt project card component
│   │   ├── FilterSidebar.tsx # Project filter sidebar component
│   │   ├── PublicationCard.tsx # Paper detail card component
│   │   └── SocialLinks.tsx   # Social media link component
│   └── layout/
│       ├── Navigation.tsx    # Main navigation header
│       └── Footer.tsx        # Footer component
├── lib/
│   ├── data.ts               # TypeScript interfaces and sample data
│   └── utils.ts              # Utility functions (colors, animations)
├── public/
│   └── images/               # Project screenshots and profile images
└── package.json              # Dependencies configuration
```

---

## Chunk 1: Project Setup and Configuration

### Task 1: Initialize Next.js 14 Project with TypeScript

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.js`
- Create: `tailwind.config.ts`
- Create: `postcss.config.js`
- Create: `vercel.json`
- Create: `.eslintrc.json`
- Create: `.gitignore`

**Dependencies:**
- `next@14.1.4`
- `react@18.2.0`
- `react-dom@18.2.0`
- `typescript@5.3.3`
- `tailwindcss@3.4.1`
- `postcss@8.4.35`
- `autoprefixer@10.4.17`
- `lucide-react@0.344.0` (for icons)

**Dev Dependencies:**
- `eslint@8.56.0`
- `eslint-config-next@14.1.4`

- [ ] **Step 1: Install Next.js and dependencies**

Run: `npm install next@14.1.4 react@18.2.0 react-dom@18.2.0 typescript@5.3.3 tailwindcss@3.4.1 postcss@8.4.35 autoprefixer@10.4.17 lucide-react@0.344.0`

Expected: Installation completes successfully

- [ ] **Step 2: Setup TypeScript configuration**

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Setup Next.js configuration**

Create `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: process.env.NODE_ENV === 'develop',
  },
}

module.exports = nextConfig
```

- [ ] **Step 4: Initialize Tailwind CSS**

Run: `npx tailwindcss init -p`

Update `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
```

- [ ] **Step 5: Configure PostCSS**

Update `postcss.config.js`:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 6: Configure ESLint**

Create `.eslintrc.json`:

```json
{
  "extends": "next/core-web-vitals"
}
```

- [ ] **Step 7: Update package.json scripts**

Update `package.json` scripts:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

- [ ] **Step 8: Commit initial setup**

```bash
git add ./
git commit -m "feat: initialize Next.js 14 TypeScript project with Tailwind CSS"
```

Expected: Git commit successful

---

## Chunk 1: Spec Complete ✅

This chunk implements the fundamental project infrastructure with Next.js 14, TypeScript, and Tailwind CSS configuration. All files are configured for modular development and responsive design.

**Ready to proceed to Chunk 2.**