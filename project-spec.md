# NewPlains.dev Website Rebuild — Project Spec

## Overview
Rebuild NewPlains.dev as a visually impressive, animation-driven single-page website for **New Plains LLC**, an AI innovation studio based in Oklahoma. The site serves as the company's public face — establishing credibility, showcasing projects, and providing a contact path for partners, investors, and collaborators.

## Goals
1. **Wow Factor** — Visitors should immediately be impressed by the animated plains landscape background and interactive flipbook project showcase
2. **Credibility** — Present New Plains LLC as a serious, polished technology company
3. **Contact Funnel** — Make it dead simple for interested parties to reach out
4. **Scalability** — Architecture supports adding new projects, blog posts, and future features without refactoring

## Target Audience
- Potential partners, investors, and collaborators evaluating New Plains LLC
- People who discover Herm.Chat or PillBuddy.AI and want to know who's behind them
- Anyone handed a business card or pitch deck pointing to NewPlains.dev

## Brand Identity
- **Tagline:** "Practical AI Innovation"
- **Logo:** Wind turbine over horizontal plains bars (geometric, earthy)
- **Color Palette (from logo):**
  - Sage/Olive Green: `#7A8B5C` / `#9CAF88`
  - Copper/Terracotta: `#B87333` / `#C4825A`
  - Wheat/Tan: `#C4A265` / `#D4B87A`
  - Dark Charcoal (text): `#2D2A26`
  - Light Cream (backgrounds): `#FAF8F5`
- **Vibe:** Earthy, organic, Oklahoma plains-inspired — grounded but technically impressive. NOT dark/techy.

## Tech Stack
| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 14+ (App Router) | SSR/SSG, API routes, file-based routing |
| UI Library | React 18+ | Component architecture, ecosystem |
| 3D Engine | Three.js via React Three Fiber | Animated plains background scene |
| Animations | GSAP (GreenSock) | Flipbook transitions, modal animations |
| Flipbook | react-pageflip (StPageFlip) | Realistic page-turning effect for project cards |
| Styling | Tailwind CSS | Rapid styling, responsive utilities |
| Blog | MDX via next-mdx-remote + gray-matter | Markdown blog posts in repo, no CMS needed |
| Contact Form | Formspree (client-side AJAX) | Simple form submission, no API route needed |
| Analytics | Google Tag Manager + GA4 via @next/third-parties | Page views, event tracking |
| Chatbot | Herm.Chat embed snippet | AI chatbot already in use |
| Hosting | Vercel | Native Next.js support, GitHub auto-deploy |
| Domain | NewPlains.dev (transfer DNS from Namecheap) | Point domain to Vercel |

## User Flows

### Flow 1: First Impression → Explore Projects
1. Visitor lands on NewPlains.dev
2. Full-viewport animated plains background loads (stylized low-poly waving grass, distant windmills turning)
3. New Plains LLC logo + "Practical AI Innovation" tagline fade in over the scene
4. Flipbook-style project cards are visible in the hero area
5. Visitor clicks/flips through projects (Herm.Chat ↔ PillBuddy.AI ↔ future projects)
6. Each card shows: project name, brief description, visual/screenshot
7. Clicking "Learn More" on a card opens an animated modal
8. Modal contains: full project description, key features, screenshot, "Visit Site" button linking to the product

### Flow 2: Contact
1. Visitor clicks "Get in Touch" button (visible in nav or hero)
2. Animated modal slides/fades in
3. Modal contains:
   - Contact form: Name, Email, Message fields + Submit button
   - Email display: info@NewPlains.dev
4. On submit → Next.js API route → Resend sends email to info@NewPlains.dev
5. Success confirmation shown in modal

### Flow 3: Read Blog/News
1. Visitor scrolls down or clicks "Blog" / "News" in navigation
2. Blog section shows list of posts (title, date, excerpt)
3. Clicking a post navigates to /blog/[slug] with full MDX-rendered content
4. Blog posts are stored as .mdx files in the repo

### Flow 4: AI Chatbot
1. Herm.Chat widget is embedded on every page (bottom-right corner)
2. Visitor can click to open and interact with the AI chatbot

## MVP Scope (V1)

### IN
- [ ] Animated Three.js plains background (stylized low-poly grass + windmills)
- [ ] Logo + tagline hero section with fade-in animation
- [ ] Flipbook-style project cards (Herm.Chat, PillBuddy.AI)
- [ ] Animated project detail modals with "Visit Site" links
- [ ] Contact modal with form (name, email, message) — Resend backend
- [ ] info@NewPlains.dev email displayed in contact modal
- [ ] Blog/News section with MDX posts
- [ ] Herm.Chat AI chatbot embed
- [ ] Google Analytics + Google Tag Manager
- [ ] SEO meta tags + Open Graph tags
- [ ] Responsive design (desktop + tablet + mobile)
- [ ] Color scheme matched to logo palette
- [ ] Deployed on Vercel with NewPlains.dev domain
- [ ] Code in GitHub repository

### OUT (V2+)
- Interactive 3D scene (clickable windmills, weather changes)
- Day/night cycle on background
- Dark mode toggle (tied to day/night cycle)
- Multi-language support
- Parallax scrolling depth layers
- Project case studies with metrics (V3)
- CMS for dynamic project management (V3)
- Admin panel (V3)

## Milestones

### M1: Project Setup & Scaffolding (Day 1)
- Initialize Next.js project with TypeScript + Tailwind CSS
- Set up GitHub repo
- Configure project structure (components, pages, lib, content)
- Install dependencies (R3F, GSAP, react-pageflip, next-mdx-remote, resend)
- Set up environment variables

### M2: 3D Background Scene (Day 1-2)
- Create stylized low-poly plains scene with React Three Fiber
- Implement instanced grass with vertex shader wind animation
- Add distant windmill models with rotation animation
- Gradient sky matching brand colors
- Performance optimization (LOD, mobile fallback)

### M3: Hero + Flipbook + Modals (Day 2-3)
- Logo + tagline hero overlay on 3D scene
- Flipbook component with react-pageflip
- Project card designs (Herm.Chat, PillBuddy.AI)
- Project detail modal with GSAP animations
- Contact modal with form UI + GSAP animations
- Data-driven project array (easy to add new projects)

### M4: Blog + Contact Backend (Day 3-4)
- MDX blog infrastructure (next-mdx-remote + gray-matter)
- Blog listing page + individual post pages
- Create 1 initial blog post
- Contact form → Next.js API route → Resend integration
- Form validation + success/error states

### M5: Analytics, SEO, Chatbot (Day 4)
- Google Tag Manager + GA4 via @next/third-parties
- Page view tracking for SPA navigation
- SEO meta tags + Open Graph tags per page
- Herm.Chat embed snippet integration
- Favicon + social preview image

### M6: Polish + Deploy (Day 4-5)
- Responsive testing (desktop, tablet, mobile)
- Performance audit (Lighthouse)
- Mobile fallback for 3D scene if needed
- Deploy to Vercel
- Point NewPlains.dev domain to Vercel
- Smoke test all flows

## Definition of Done
All 14 items in the MVP "IN" checklist are complete, the site is live at NewPlains.dev, and all three user flows work end-to-end on desktop and mobile.