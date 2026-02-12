# CLAUDE.md — NewPlains.dev Website

## Project Overview
Single-page marketing website for New Plains LLC, an AI innovation studio. Features an animated 3D plains landscape background, flipbook-style project showcase, contact form, and blog.

## Architecture
- **Framework:** Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **3D Scene:** React Three Fiber (Three.js) — stylized low-poly plains with instanced grass + windmills
- **Animations:** GSAP for UI transitions (flipbook, modals, hero fade-in)
- **Flipbook:** react-pageflip library wrapping StPageFlip
- **Blog:** MDX files in /content/blog/, parsed with next-mdx-remote + gray-matter
- **Contact Form:** Formspree (https://formspree.io/f/xojnjzgv) — client-side AJAX, no API route needed
- **Analytics:** @next/third-parties GoogleTagManager component
- **Chatbot:** Herm.Chat embed script in root layout
- **Hosting:** Vercel (auto-deploy from main branch)

## Key Constraints
- **Performance:** 3D scene must maintain 30+ FPS on mobile. Use instanced meshes, LOD, and consider a 2D CSS fallback for low-end devices.
- **Color Palette:** ONLY use brand colors from the logo:
  - Greens: #7A8B5C, #9CAF88
  - Coppers: #B87333, #C4825A
  - Wheat: #C4A265, #D4B87A
  - Charcoal: #2D2A26
  - Cream: #FAF8F5
- **No external fonts CDN** — use next/font for self-hosted fonts
- **All project data lives in /lib/projects.ts** — adding a project = adding an object to the array
- **Blog posts live in /content/blog/*.mdx** — no CMS, no database
- **Contact emails go to info@NewPlains.dev** via Formspree
- **Herm.Chat snippet must load on every page** (add to root layout)

## Repository Structure
```
newplains-website/
├── app/
│   ├── layout.tsx          # Root layout (GTM, chatbot, fonts)
│   ├── page.tsx            # Main single-page site
│   ├── blog/
│   │   ├── page.tsx        # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx    # Individual blog post
│   └── blog/
│       ├── page.tsx        # Blog listing
│       └── [slug]/
│           └── page.tsx    # Individual blog post
├── components/
│   ├── scene/
│   │   ├── PlainsScene.tsx     # Main R3F Canvas wrapper
│   │   ├── Grass.tsx           # Instanced grass with shaders
│   │   ├── Windmill.tsx        # Windmill model + rotation
│   │   └── Sky.tsx             # Gradient sky
│   ├── hero/
│   │   ├── Hero.tsx            # Logo + tagline overlay
│   │   └── FlipBook.tsx        # react-pageflip project cards
│   ├── modals/
│   │   ├── ProjectModal.tsx    # Project detail modal
│   │   └── ContactModal.tsx    # Contact form modal
│   ├── blog/
│   │   ├── PostCard.tsx        # Blog post preview card
│   │   └── PostLayout.tsx      # Individual post layout
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Modal.tsx           # Base modal with GSAP animation
│   │   └── Navigation.tsx
│   └── Analytics.tsx           # GTM + page view tracking
├── content/
│   └── blog/
│       └── welcome.mdx         # Initial blog post
├── lib/
│   ├── projects.ts             # Project data array
│   └── blog.ts                 # MDX parsing utilities
├── public/
│   ├── logo.svg                # New Plains LLC logo
│   ├── og-image.png            # Open Graph preview image
│   └── models/                 # 3D models (if needed)
├── shaders/
│   ├── grass.vert              # Grass vertex shader
│   └── grass.frag              # Grass fragment shader
├── styles/
│   └── globals.css             # Tailwind base + custom styles
├── .env.local                  # Local env vars
├── .env.example                # Template env vars
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Commands
```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npm run type-check   # TypeScript check
```

## Environment Variables
- `NEXT_PUBLIC_FORMSPREE_ID` — Formspree form ID (xojnjzgv)
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager container ID (GTM-XXXXXXX)
- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 measurement ID (G-XXXXXXX)
- `NEXT_PUBLIC_SITE_URL` — https://newplains.dev

## Development Rules
1. **Components are functional + TypeScript** — no class components
2. **3D scene is lazy-loaded** — use `next/dynamic` with `ssr: false` for R3F Canvas
3. **GSAP animations use useGSAP hook** — cleanup is automatic
4. **Blog MDX files require frontmatter:** title, date, excerpt, author
5. **All images use next/image** for optimization
6. **API routes validate input** — never trust client data
7. **Mobile-first responsive design** — Tailwind breakpoints: sm/md/lg/xl
8. **No console.logs in production** — use conditional logging

## Adding a New Project
Edit `/lib/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    id: "herm-chat",
    name: "Herm.Chat",
    tagline: "AI-Powered Conversations",
    description: "Full description here...",
    url: "https://herm.chat",
    image: "/projects/herm-chat.png",
    color: "#B87333"  // Use brand color
  },
  // Add new project object here
];
```

## Adding a New Blog Post
Create `/content/blog/my-post-slug.mdx`:
```mdx
---
title: "Post Title"
date: "2026-02-08"
excerpt: "Brief description for the listing page."
author: "New Plains LLC"
---

Your markdown content here...
```

## Deployment
- Push to `main` branch → Vercel auto-deploys
- Environment variables must be set in Vercel dashboard
- Domain: NewPlains.dev pointed to Vercel via DNS