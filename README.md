# Portfolio — Next.js 15 + TypeScript + Tailwind v4 + Framer Motion + Lenis

Premium personal portfolio landing page with editorial design.

## Tech Stack
- **Next.js 15** (App Router, Turbopack)
- **TypeScript 5**
- **Tailwind CSS v4** (`@import "tailwindcss"` + `@theme {}`)
- **Framer Motion 11** (scroll reveals, expand panels, hover states)
- **Lenis 1.1** (smooth scrolling)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customise Content

Edit **`src/data/portfolio.ts`** — all copy, projects, experience, and socials live here.

## Add Your Portrait

Place your portrait PNG at:
```
public/images/portrait.png
```

## Sections (top → bottom)
1. **Hero** — Big headline + portrait + skill list
2. **Marquee** — Scrolling black banner
3. **About** — Bio + stats grid
4. **Skills & Tools** — Tool categories grid
5. **Projects** — 6 expandable project rows with thumbnail, description, tech stack, deliverables, outcome, live/GitHub links
6. **Experience** — Work history timeline
7. **Process** — 5-step how I work (dark bg)
8. **Services** — Clickable services list with descriptions
9. **Testimonials** — 3 client quotes
10. **Contact** — CTA + email + socials
11. **Footer**

## Tailwind v4 Notes
- No `tailwind.config.ts` needed — all tokens defined in `globals.css` under `@theme {}`
- PostCSS uses `@tailwindcss/postcss` plugin
- Design tokens: `--color-ink`, `--color-paper`, `--color-muted`, `--color-surface`, `--color-accent`

## Deploy
```bash
npx vercel
```