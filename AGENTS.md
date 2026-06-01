# AGENTS.md

## Learned User Preferences

- Wants the portfolio to look distinctly human-designed, not AI-generated; favors committing hard to one bold, distinctive aesthetic (e.g. chose a terminal/phosphor direction) over generic defaults like Inter font, indigo/purple accents, and evenly-spaced white card grids.
- When writing project or publication highlights, describe the actual content/substance, not the tech stack or how the site was built.

## Learned Workspace Facts

- Portfolio is a Next.js 16 (App Router) + React + TypeScript + Tailwind v3 site, npm-managed, deployed on Vercel.
- All site content (projects, publications, bio, stats, social links) lives in `lib/data.ts` as the single source of truth; routes/components read from it.
- Styling uses semantic Tailwind design tokens (e.g. `bg-accent`, `text-foreground`, `border-border`, `bg-card-bg`); change tokens centrally rather than hardcoding colors.
- Theme switching uses a `data-theme` attribute (light "paper" / dark "phosphor"); the `prefers-reduced-motion` block in `app/globals.css` must be respected by any animation.
- Project detail pages use the dynamic route `app/projects/[slug]/page.tsx` with `generateStaticParams`; in Next.js 16 `params` is a Promise and must be awaited.
- After editing `lib/data.ts`, a running `next dev` server caches `generateStaticParams`, so it must be restarted for new slugs/entries to resolve (otherwise they 404).
- Component layout: shared UI primitives in `components/ui/`, page sections in `components/sections/`, layout chrome in `components/layout/`.
- Active development happens on branch `v2.0` (base branch `main`).
