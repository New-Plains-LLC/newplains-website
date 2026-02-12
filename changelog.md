# Changelog — NewPlains.dev

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

### Planned
- Interactive 3D scene (clickable windmills, weather changes) — V2
- Day/night cycle on background — V2
- Dark mode toggle — V2
- Multi-language support — V2
- Parallax scrolling depth layers — V2
- Project case studies with metrics — V3
- CMS for dynamic project management — V3
- Admin panel — V3

---

## [0.5.0] — 2026-02-11 — M5: Analytics, SEO, Chatbot

### Added
- Google Tag Manager (GTM-TP57JWGF) via @next/third-parties GoogleTagManager component
- Analytics.tsx client component for SPA page view tracking (sendGTMEvent on route change)
- Herm.Chat widget embed via next/script with lazyOnload strategy
- metadataBase on root layout for proper OG URL resolution
- Twitter card metadata (summary_large_image) on root layout

### Removed
- resend package from dependencies (replaced by Formspree client-side approach)

---

## [0.4.0] — 2026-02-11 — M4: Blog + Contact Form

### Added
- Blog infrastructure: lib/blog.ts with getPostBySlug, getAllPosts, getLatestPosts
- Blog listing page (src/app/blog/page.tsx) with responsive two-column PostCard grid
- Individual blog post page (src/app/blog/[slug]/page.tsx) with MDXRemote server rendering
- PostCard component with brand styling, copper hover accent, formatted dates
- PostLayout component with back-to-blog link, heading/meta header, prose-styled MDX content
- Initial blog post: "Welcome to New Plains" (content/blog/welcome.mdx)
- Static generation via generateStaticParams for all blog slugs
- SEO metadata (title, description, Open Graph) on blog listing and individual post pages

### Changed
- Contact form switched from Resend API route to Formspree (https://formspree.io/f/xojnjzgv)
- ContactModal now sends client-side AJAX POST to Formspree with Accept: application/json header
- env.example cleaned up: removed Resend, added NEXT_PUBLIC_FORMSPREE_ID, stripped raw HTML snippets

### Removed
- Resend API route (/api/contact/route.ts) — no longer needed
- RESEND_API_KEY environment variable

---

## [0.3.0] — 2026-02-08 — M3: Hero + Flipbook + Modals

### Added
- Hero section with GSAP staggered fade-in animation (logo → title → tagline → CTA)
- Fluid hero typography using clamp() for continuous resize scaling
- Semi-transparent charcoal backdrop with blur behind hero text for readability
- FlipBook component using react-pageflip (420x500 base, stretches to 550x620)
- Aged paper styling: yellowed parchment, foxing spots, coffee-ring stain, worn edges, SVG noise grain
- Project cards with real screenshots (Herm.Chat + PillBuddy.AI)
- Base Modal component with GSAP open/close animations, Escape key, click-outside-to-close
- ProjectModal with screenshot, description, and Visit Site link
- ContactModal with form (name/email/message), success/error states, direct mailto link
- Sticky Navigation with scroll-aware transparency and backdrop blur
- HomePage client wrapper orchestrating all modal and project state

### Fixed
- Scrolling blocked by overflow-hidden on body — removed, 3D scene stays fixed naturally
- react-pageflip SSR error — wrapped in SceneLoader client component with dynamic import
- Flipbook text clipping — reworked layout with shrink-0 and percentage-based sections

---

## [0.2.0] — 2026-02-08 — M2: 3D Background Scene

### Added
- PlainsScene R3F Canvas with camera, fog (cream fade), dual lighting (warm wheat + cool sage)
- SceneLoader client component wrapper for dynamic import with ssr: false
- Sky gradient sphere (cream #FAF8F5 horizon → sage green #9CAF88 overhead)
- Ground plane with wheat color and subtle radial gradient
- Instanced grass (8k mobile / 25k desktop) with custom GLSL vertex shader wind animation
- Grass tip-to-base gradient (wheat #D4B87A → green #7A8B5C)
- West Texas lattice-tower windmills with metal scaffolding, X-braces, 18-blade fan wheel, tail vane
- 4 windmill instances spread wide to frame hero content
- CSS fallback with gradient background + animated grass silhouettes for non-WebGL devices
- Mobile viewport detection for quality scaling (DPR, grass count, antialiasing)

---

## [0.1.0] — 2026-02-08 — M1: Foundation

### Added
- Brand-themed globals.css with CSS variables and Tailwind v4 @theme block
- Inter (body) + Playfair Display (headings) via next/font/google
- Root layout with metadata, OG tags, self-hosted fonts
- Project data structure: lib/projects.ts with Herm.Chat and PillBuddy.AI
- Tailwind config with brand color palette (green, copper, wheat, charcoal, cream)

### Removed
- Default Next.js boilerplate (Geist fonts, starter page, dark mode)

### Technical
- Installed lightningcss for Tailwind v4 build compatibility
- Configured @/* path alias mapping to ./src/*
