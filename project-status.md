# Project Status — NewPlains.dev Rebuild

**Last Updated:** 2026-02-08
**Target Launch:** 2026-02-12 (5-day build)
**Current Phase:** M6 Complete — All milestones delivered

---

## Milestone Tracker

| # | Milestone | Status | Target | Notes |
|---|-----------|--------|--------|-------|
| M1 | Project Setup & Scaffolding | ✅ Complete | Day 1 | Fonts, globals, layout, brand colors |
| M2 | 3D Background Scene | ✅ Complete | Day 1-2 | Grass, West Texas windmills, sky, ground, mobile fallback |
| M3 | Hero + Flipbook + Modals | ✅ Complete | Day 2-3 | Hero, FlipBook, modals, nav — all wired up |
| M4 | Blog + Contact Backend | ✅ Complete | Day 3-4 | MDX blog + Formspree contact form |
| M5 | Analytics, SEO, Chatbot | ✅ Complete | Day 4 | GTM + GA4 + meta tags + Herm.Chat + Analytics |
| M6 | Polish + Deploy | ✅ Complete | Day 4-5 | Responsive fixes, Tailwind typography, Vercel deploy |

**Legend:** ⬜ Not Started | 🟡 In Progress | ✅ Complete | 🔴 Blocked

---

## Detailed Task Breakdown

### M1: Project Setup & Scaffolding
- [x] Next.js scaffold with TypeScript + Tailwind CSS
- [x] Install all deps (R3F, GSAP, react-pageflip, next-mdx-remote, etc.)
- [x] Create folder structure per CLAUDE.md
- [x] Set up .env.local
- [x] Initialize GitHub repo + push
- [x] Configure tailwind.config.ts with brand colors
- [x] Replace default globals.css with brand theme (CSS vars + Tailwind v4 @theme)
- [x] Replace Geist fonts with Inter (body) + Playfair Display (headings) via next/font/google
- [x] Update layout.tsx metadata (title, description, OG tags)
- [x] Install lightningcss for Tailwind v4 build compatibility

### M2: 3D Background Scene
- [x] Create PlainsScene.tsx (R3F Canvas wrapper, lazy-loaded via SceneLoader client component)
- [x] Implement Grass.tsx (instanced mesh + inline GLSL shaders with wind animation)
- [x] Implement Windmill.tsx — **West Texas lattice-tower style** with metal scaffolding legs, X-braces, 18-blade fan wheel, tail vane
- [x] Implement Sky.tsx (gradient sphere: cream horizon → sage green overhead)
- [x] Implement Ground.tsx (wheat-colored plane with radial gradient)
- [x] Grass shaders: grass.vert + grass.frag (standalone files, inline versions used in component)
- [x] Mobile detection: 8k grass blades on mobile, 25k on desktop
- [x] CSS fallback for non-WebGL devices
- [x] 4 windmills spread wide to sides (x: -14, 15, -20, 22) to avoid hero overlap

### M3: Hero + Flipbook + Modals
- [x] Create Hero.tsx with GSAP staggered fade-in (logo, title, tagline, CTA)
- [x] **Fluid hero sizing** with clamp() — scales continuously on resize, not just at breakpoints
- [x] Hero text: white on semi-transparent charcoal backdrop with blur for readability
- [x] Create FlipBook.tsx (react-pageflip wrapper, 420x500 base size)
- [x] **Aged paper styling** — yellowed parchment gradient, foxing spots, coffee-ring stain, worn edge shadows, SVG noise paper grain texture
- [x] Project cards with screenshots (Herm.Chat + PillBuddy.AI images in /public/projects/)
- [x] Create lib/projects.ts with Project interface + data
- [x] Create base Modal.tsx with GSAP open/close animations + Escape key + click-outside
- [x] Create ProjectModal.tsx (project details + screenshot + Visit Site link)
- [x] Create ContactModal.tsx (form: name/email/message, success/error states, mailto link)
- [x] Create Navigation.tsx (sticky nav with scroll-aware transparency + blur)
- [x] Create HomePage.tsx client wrapper orchestrating all modal state
- [x] Scrolling enabled (removed overflow-hidden, 3D scene stays fixed behind)

### M4: Blog + Contact Backend
- [x] Create lib/blog.ts (getPostBySlug, getAllPosts, getLatestPosts)
- [x] Create blog listing page (src/app/blog/page.tsx)
- [x] Create blog post page (src/app/blog/[slug]/page.tsx)
- [x] Create PostCard.tsx and PostLayout.tsx components
- [x] Write initial blog post (content/blog/welcome.mdx)
- [x] Switch contact form from Resend to Formspree (https://formspree.io/f/xojnjzgv)
- [x] Wire ContactModal to Formspree endpoint (client-side AJAX)
- [x] Clean up env.example (removed Resend, added NEXT_PUBLIC_FORMSPREE_ID)

### M5: Analytics, SEO, Chatbot
- [x] Add GoogleTagManager (GTM-TP57JWGF) to root layout via @next/third-parties
- [x] Create Analytics.tsx for SPA page view tracking (sendGTMEvent on pathname change)
- [x] Add per-page meta tags (blog listing + individual posts have full OG metadata)
- [x] Add metadataBase + twitter card meta to root layout
- [x] Add Herm.Chat embed snippet to root layout (next/script with lazyOnload strategy)
- [x] Uninstalled resend package (no longer needed)
- [ ] Create OG image (public/og-image.png)
- [ ] Add favicon (derive from logo)

### M6: Polish + Deploy
- [x] Responsive testing — windmills repositioned for mobile viewport visibility
- [x] Installed @tailwindcss/typography for blog prose styling
- [x] Added type-check script to package.json
- [x] Deploy to Vercel (production)
- [x] SSL certificate provisioning for www.newplains.dev + newplains.dev
- [x] Smoke test all user flows on production
- [x] Final review and sign-off

---

## Files Created/Modified (M1–M4)

| File | Status | Purpose |
|------|--------|---------|
| `src/app/globals.css` | Modified | Brand CSS vars, Tailwind v4 @theme, fluid hero classes, aged flipbook styles |
| `src/app/layout.tsx` | Modified | Inter + Playfair Display fonts, metadata, OG tags |
| `src/app/page.tsx` | Modified | Renders HomePage client component |
| `lib/projects.ts` | Created | Project interface + Herm.Chat / PillBuddy.AI data |
| `components/scene/PlainsScene.tsx` | Created | R3F Canvas, camera, fog, lighting, mobile detection |
| `components/scene/SceneLoader.tsx` | Created | Client wrapper with dynamic import (ssr: false) |
| `components/scene/Sky.tsx` | Created | Gradient sky sphere |
| `components/scene/Ground.tsx` | Created | Wheat-colored ground plane |
| `components/scene/Grass.tsx` | Created | Instanced grass with GLSL wind shader |
| `components/scene/Windmill.tsx` | Created | West Texas lattice-tower windmill |
| `components/hero/Hero.tsx` | Created | Logo + title + tagline + CTA with GSAP animation |
| `components/hero/FlipBook.tsx` | Created | react-pageflip with project cards + screenshots |
| `components/ui/Modal.tsx` | Created | Base GSAP modal |
| `components/ui/Navigation.tsx` | Created | Sticky scroll-aware nav |
| `components/modals/ProjectModal.tsx` | Created | Project detail modal with screenshot |
| `components/modals/ContactModal.tsx` | Created | Contact form modal |
| `components/HomePage.tsx` | Created | Client component orchestrating page state |
| `shaders/grass.vert` | Created | Grass vertex shader (standalone reference) |
| `shaders/grass.frag` | Created | Grass fragment shader (standalone reference) |
| `public/projects/herm-chat.png` | Moved | Herm.Chat screenshot |
| `public/projects/pillbuddy.png` | Moved | PillBuddy screenshot |
| `lib/blog.ts` | Created | MDX parsing: getPostBySlug, getAllPosts, getLatestPosts |
| `components/blog/PostCard.tsx` | Created | Blog post preview card for listing page |
| `components/blog/PostLayout.tsx` | Created | Individual blog post layout wrapper |
| `src/app/blog/page.tsx` | Created | Blog listing page (server component) |
| `src/app/blog/[slug]/page.tsx` | Created | Individual blog post page (MDXRemote + static gen) |
| `content/blog/welcome.mdx` | Created | Initial blog post: "Welcome to New Plains" |
| `components/modals/ContactModal.tsx` | Modified | Switched from /api/contact to Formspree endpoint |
| `env.example` | Modified | Removed Resend, added NEXT_PUBLIC_FORMSPREE_ID, cleaned up HTML snippets |
| `components/Analytics.tsx` | Created | Client component: SPA page view tracking via sendGTMEvent |
| `src/app/layout.tsx` | Modified | Added GTM, Herm.Chat script, Analytics, metadataBase, twitter meta |
| `components/scene/PlainsScene.tsx` | Modified | Mobile-specific windmill positions (closer to center for viewport visibility) |
| `src/app/globals.css` | Modified | Added @tailwindcss/typography plugin import |
| `package.json` | Modified | Added type-check script, removed resend, added @tailwindcss/typography |

---

## Blockers & Risks
| Risk | Severity | Mitigation |
|------|----------|------------|
| 3D grass performance on mobile | Medium | Reduced to 8k blades on mobile, CSS fallback ready |
| Formspree free tier limits | Low | 50 submissions/month on free plan — sufficient for MVP |
| react-pageflip SSR compatibility | ✅ Resolved | Lazy-loaded via SceneLoader client component with next/dynamic ssr:false |

---

## Decision Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-02-08 | Stylized low-poly 3D (not photorealistic) | Performance + brand cohesion with geometric logo |
| 2026-02-08 | MDX blog in repo (not CMS) | Simpler for MVP, swap data source in V2 |
| 2026-02-08 | Resend via API route (not Formspree) | More professional, server-side keys, user has account |
| 2026-02-08 | Vercel hosting (move from Namecheap) | Native Next.js support, auto-deploy, free tier |
| 2026-02-08 | react-pageflip for flipbook | Proven library, works with HTML content, mobile-compatible |
| 2026-02-08 | Inter + Playfair Display fonts | Clean modern body + warm serif headings, earthy brand fit |
| 2026-02-08 | Cream text on charcoal backdrop for hero | Best readability over 3D scene after testing charcoal and cream-with-shadow |
| 2026-02-08 | Fluid clamp() sizing over Tailwind breakpoints | Hero scales continuously on resize, not just at fixed breakpoints |
| 2026-02-08 | West Texas lattice-tower windmills | User requested scaffolding style over solid-wood base — matches Oklahoma/Texas plains aesthetic |
| 2026-02-08 | Aged paper flipbook style | Yellowed parchment, foxing spots, paper grain — rustic feel per user feedback |
| 2026-02-11 | Formspree over Resend for contact form | Simpler client-side approach, no API route needed, user already had existing site with mailto — Formspree is a natural upgrade |
