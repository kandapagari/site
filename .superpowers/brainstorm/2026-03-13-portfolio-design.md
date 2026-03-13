# Portfolio Website Design Specification

**Project:** AI/ML/Robotics Portfolio for Pavan Kumar Kandapagari
**Date:** 2026-03-13
**Type:** Next.js + React + Vercel deployment

## Design Goals

Create a comprehensive, professional portfolio showcasing expertise in AI, machine learning, and robotics with a modern dark theme and interactive elements. Balance professional branding with personal project visibility.

## Target Audience

- Potential employers and collaborators in AI/ML/robotics
- Research institutions and academic partners
- Tech companies seeking specialized talent
- Clients for project-based consultation

## Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **UI Library:** React + Tailwind CSS
- **Hosting:** Vercel (automatic deployments)
- **Styling:** Custom CSS with gradient/glass effects
- **Interactivity:** React hooks + Tailwind transitions

---

## Complete Feature Set

### 1. Navigation
- **Home** - Landing page with hero section
- **About** - Professional bio and philosophy
- **Projects** - Featured work with filters
- **Publications** - Research papers and presentations
- **Skills** - Expertise visualization
- **Contact** - Contact information and links

### 2. Hero Section
- Prominent name: "Pavan Kumar Kandapagari"
- Tagline highlighting expertise: "Team Lead | Vision-Language | ML Researcher"
- Subtle animated background (gradients/particles)
- Call-to-action buttons: "View Projects" and "Get In Touch"
- Glassmorphism card effect

### 3. Experience Section
- Timeline visualization of career progression
- Companies, dates, roles, and achievements
- Connected chronological display
- Interactive hover states for details

### 4. Projects Section
- **Grid layout** with interactive cards
- **Card design:**
  - Expand on hover (3D tilt effect)
  - Project title, description, and tech stack tags
  - Image placeholders (dark theme compatible)
  - Links to live demos/GitHub
  - "View Project" CTA
- **Filter sidebar:**
  - Filter by category (Vision-Language, Robotics, ML Research)
  - Filter by technology (Python, PyTorch, ROS, etc.)
  - Search functionality
- **Project details modal** for full information

### 5. Publications Section
- Research papers with:
  - Title, authors, conference/journal
  - Year, PDF link, arXiv link
  - Abstract preview
- Categories: Papers, Conferences, Presentations
- Download statistics (optional)

### 6. Skills Section
- **Visual skill bars** showing proficiency levels:
  - Vision-Language Processing (95%)
  - Machine Learning Research (90%)
  - Robotics AI (85%)
  - Scalable Model Training (90%)
  - Action Models (85%)
  - Other relevant skills
- Technology icons (React, PyTorch, TensorFlow, ROS, etc.)
- Clickable tags with count of projects

### 7. About Section
- Professional bio (300-500 words)
- Core philosophy/values
- What drives interest in AI/ML/robotics
- "Why me?" summary

### 8. Contact Section
- Email (primary CTA)
- LinkedIn profile link
- GitHub profile link
- Social media icons
- Simple contact form (optional auto-responder)
- Message: "Open to collaborations and opportunities"

### 9. Blog/Insights Section (Optional but Recommended)
- Space for AI/ML/robotics thoughts
- Tutorial posts
- Research reflections
- Yearly archives

---

## Design System

### Color Palette
- **Primary:** Deep navy/black background (#0a0a0e)
- **Secondary:** Dark gradient overlays
- **Accent:** Electric blue/purple gradients (#6366f1 → #8b5cf6)
- **Text:** Off-white (#e2e8f0) for readability
- **Secondary text:** Slate gray (#64748b)
- **Glass effects:** Semi-transparent white (backdrop-filter: blur)

### Typography
- **Heading font:** Inter or system sans-serif (bold, modern)
- **Body font:** Inter or system sans-serif (clean, readable)
- **Technical terms:** Monospace font for code/tech mentions

### Interactive Elements
- **Hover transitions:** 200-300ms ease-in-out
- **Card lift effect:** 4px transform on hover
- **Shine effect:** Linear gradient animation on card borders
- **Glassmorphism:** Subtle borders with blur effects

### Spacing Systems
- Section padding: 4-8rem (64-128px)
- Card spacing: 1.5rem (24px)
- Nav padding: 1.5rem (24px)
- Typography scaling: 2rem - 1.25rem headline hierarchy

---

## Page Structure (Next.js App Router)

```
app/
├── layout.tsx          # Root layout with global styles
├── page.tsx            # Home page (Hero + quick overview)
├── services/           # (Optional: separate services page for clients)
│   └── page.tsx       # Client-facing services offer
├── about/
│   └── page.tsx       # About section
├── experience/
│   └── page.tsx       # Experience timeline
├── projects/
│   └── page.tsx       # Project listing with filters
├── projects/
│   └── [slug]/        # Individual project pages
│       └── page.tsx   # Deep dive project page
├── publications/
│   └── page.tsx       # Research papers listing
├── publications/
│   └── [slug]/        # Individual paper pages
│       └── page.tsx   # Detailed paper view with abstract
├── skills/
│   └── page.tsx       # Skills visualization
├── blog/              # (Optional) Blog posts
└── contact/
    └── page.tsx       # Contact form and info
```

---

## Data Structure (TypeScript Interfaces)

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  category: 'Vision-Language' | 'Robotics' | 'ML Research';
  liveUrl?: string;
  githubUrl?: string;
  details: string;
  year: string;
}

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  dates: string;
  description: string[];
  achievements: string[];
}

interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  type: 'Paper' | 'Conference' | 'Presentation';
  pdfUrl: string;
  arXivUrl?: string;
  abstract: string;
}

interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}
```

---

## Responsive Design

- **Desktop:** Full-width layout, sidebar filters on project page
- **Tablet:** Reduced padding, simplified filters
- **Mobile:** Stacked layout, hamburger menu for navigation
- **Touch targets:** Minimum 44x44px for all interactive elements

---

## Performance Considerations

- Image optimization (next/image)
- Code splitting per route
- Lazy loading for long content sections
- Optimized fonts (next/font)
- Critical CSS inlining

---

## Accessibility

- WCAG AA compliance for color contrast
- Semantic HTML elements
- Keyboard navigation support
- Screen reader friendly page structure
- Focus indicators on interactive elements

---

## Deployment Strategy (Vercel)

1. **Git repository** with portfolio code
2. **Vercel integration** for automatic builds
3. **Environment variables** for API keys if needed
4. **Custom domain** (optional setup)
5. **Analytics integration** (optional: Google Analytics or Vercel Analytics)
6. **Environment-based preview deployments** (if using branch-based workflow)

---

## Analytics & Tracking (Optional)

- Page view tracking
- Resource performance metrics
- User engagement analytics (optional)

---

## Success Criteria

- Fully responsive across devices
- Fast loading (<3s on 3G)
- Accessible (WCAG AA compliant)
- Professional, modern dark theme
- Interactive elements work smoothly
- All portfolio content accessible and well-organized
- Easy to update and maintain
- Automatic deployments through Vercel