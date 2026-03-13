# Portfolio Website Design Spec

## Overview

Personal portfolio website for Pavan Kumar Kandapagari — Team Lead for Foundation Models at Agile Robots SE, Munich. The site establishes technical credibility and thought leadership in ML, robotics, and computer vision.

## Target Audience

Technical peers, ML/robotics community members, collaborators, and conference contacts who want to understand Pavan's work and expertise.

## Technology Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS with CSS custom properties for theming
- **Animations:** CSS animations + Intersection Observer (no heavy animation libraries)
- **Deployment:** Vercel at `kandapagari.vercel.app`
- **VCS:** GitHub

## Design Direction

**Minimal Content-First** with full light/dark mode support.

- Clean backgrounds (white/gray-50 in light, slate-900/950 in dark)
- Strong typography hierarchy using Inter font
- Subtle card borders instead of glassmorphism
- Indigo as primary accent color
- Content takes center stage — no decorative noise

## Theme System

CSS custom properties on `:root` (light) and `[data-theme="dark"]`:

**Light mode:**
- Background: white / gray-50
- Text: gray-900 primary, gray-600 secondary
- Accent: indigo-600
- Borders: gray-200

**Dark mode:**
- Background: slate-950 / slate-900
- Text: gray-100 primary, gray-400 secondary
- Accent: indigo-400
- Borders: slate-700

Toggle via sun/moon icon in navigation. Persists to `localStorage`. Defaults to `prefers-color-scheme`.

## Site Structure (Hybrid)

```
/                  → Landing page (hero + section previews)
/about             → Full about + education
/experience        → Full experience timeline
/projects          → All original projects with filters
/projects/[slug]   → Individual project detail page
/publications      → Publication + patent details
/contact           → Contact form + social links
```

## Landing Page (Editorial Layout)

### 1. Hero Section
- Headline: "Building intelligent robots that see and act."
- Subtitle: Current role at Agile Robots
- Two CTAs: "View Projects" and "Download CV"
- Social links row (GitHub, LinkedIn, X, Google Scholar, Email)
- **Animation:** Staggered fade-up

### 2. Stats Bar
- "4+ years at Agile Robots"
- "30+ original projects"
- "1 patent + publication"
- **Animation:** Directional slide + counter

### 3. Experience Preview
- 3 most recent roles as compact cards
- "View full timeline →" link
- **Animation:** Directional slide from sides

### 4. Featured Projects
- 3-4 hand-picked original projects
- Each with: title, short description, tech tags, GitHub link
- "View all projects →" link
- **Animation:** Directional slide from sides

### 5. Skills Snapshot
- Grouped pill tags by category (ML/DL, Languages, Tools/Infra)
- **Animation:** Staggered fade-up

### 6. Publications Preview
- Paper title + patent, with links
- **Animation:** Blur-to-focus

### 7. Contact CTA
- "Let's connect" with email + social links
- **Animation:** Blur-to-focus + line draw

### 8. Footer
- Copyright, social icons, theme toggle

## Detail Pages

### /about
- Full narrative: mechanical engineering → ML journey
- Education timeline (OVGU MS Digital Engineering, JNTUA B.Tech Mechanical)
- Certifications (GANs, Data Science, Python, etc.)
- Languages (Telugu, Tamil, English, Python, German)

### /experience
- Vertical timeline, all roles:
  - Agile Robots SE: Team Lead (Mar 2026–), Tech Lead (Aug 2025–Mar 2026), Senior DL Engineer (Dec 2023–Sep 2025), Software Developer/DL Engineer (Aug 2021–Dec 2023)
  - Bosch: Master Thesis (Sep 2020–Mar 2021)
  - auvisus: DL Intern (Mar 2020–Aug 2020)
  - OVGU: Teaching Assistant (Oct 2019–Jan 2020)
  - Amara Raja: Executive Engineer (2016–Aug 2017), Graduate Engineering Trainee (Jul 2015–Jul 2016)
- Each entry: role, company, dates, location, description, tech used

### /projects
- Grid of original project cards, filterable by tag
- Tags: ML, Robotics, Rust, Computer Vision, Web, Tools
- Hand-picked original repos only (no forks):
  - robotic_transformer_1, calypso, rust_packer, finetune_llms, SimuTrade, dalle-st, rhodes, DLforWallCharacteristics, face_recognition, 102FlowerClassification, nyx-ai, AutoCommit, LinkedInAutoPost, websocket-example, algorithm_trading, chip8-emulator-rust, Basic-Dockerfile, and others
- Each card: title, description, tech tags, GitHub link, star count

### /projects/[slug]
- Full project description
- Tech stack details
- GitHub link
- Screenshots/demos if available

### /publications
- Paper: "Tissue segmentation in histologic images of intracranial aneurysm wall" (2021)
  - Co-authors: A Niemann, A Talagini, P Kandapagari, B Preim, S Saalfeld
  - Published in: Interdisciplinary Neurosurgery 26, 101307
  - 4 citations
- Patent: "Animal Physical Parameter Estimation by Image Processing"
- Google Scholar profile link

### /contact
- Email: 785pavan@gmail.com
- Phone: +4915739467478
- LinkedIn: linkedin.com/in/kandapagari
- GitHub: github.com/kandapagari
- Twitter/X: @zephyr_347
- Google Scholar: scholar.google.de/citations?user=EkSY9wUAAAAJ

## Animation System

Three animation styles, triggered via Intersection Observer on scroll:

| Style | Usage | Description |
|-------|-------|-------------|
| **Staggered fade-up** | Hero text, paragraphs, headings | Elements rise from below with sequential delays |
| **Directional slide** | Cards, grid items, stats | Elements slide in from left/right, numbers count up |
| **Blur-to-focus + line draw** | Section accents, dividers, publications | Elements sharpen from blurred state, lines grow |

All animations:
- Play once when element enters viewport
- Duration: 0.5–0.8s
- Easing: ease-out
- Respect `prefers-reduced-motion` (disable animations if set)

## Data Layer

All content in `lib/data.ts` as typed TypeScript objects. No CMS, no database.

```typescript
interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl: string;
  featured: boolean;
}

interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  techStack: string[];
}

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  citations: number;
  url?: string;
  type: 'paper' | 'patent';
}

interface Skill {
  name: string;
  category: 'ml' | 'languages' | 'tools';
}
```

## Component Architecture

```
components/
  layout/
    Navigation.tsx      — Sticky nav, theme toggle, mobile menu
    Footer.tsx          — Social links, copyright
  ui/
    ThemeToggle.tsx      — Sun/moon icon with smooth transition
    ProjectCard.tsx      — Card for project grid
    ExperienceCard.tsx   — Timeline entry card
    SkillTag.tsx         — Colored pill tag
    SectionPreview.tsx   — Landing section with heading + "View all" link
    AnimateOnScroll.tsx  — Intersection Observer wrapper
    Counter.tsx          — Animated number counter
    FilterBar.tsx        — Tag filter for projects page
```

## Performance

- `next/image` for all images
- Static generation (SSG) for all pages
- Code splitting via Next.js App Router
- No heavy JS animation libraries
- Resume PDF served from `/public/resume.pdf`

## Accessibility

- Semantic HTML throughout
- WCAG AA color contrast in both themes
- Keyboard-navigable theme toggle and mobile menu
- `prefers-reduced-motion` respected
- Proper heading hierarchy
- Alt text on all images
- Focus indicators on interactive elements

## Assets Needed

- Profile photo (user to provide, placed at `/public/profile.jpg`)
- Resume PDF (existing at `assets/Profile.pdf`, move to `/public/resume.pdf`)
- Favicon

## Success Criteria

- Site loads and renders correctly in both light and dark mode
- All navigation links work
- All sections display correct personal data
- Animations play smoothly on scroll
- Mobile responsive (works on phone, tablet, desktop)
- Deploys successfully to Vercel
- Lighthouse score > 90 on performance, accessibility, SEO
