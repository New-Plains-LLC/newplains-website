# NewPlains.dev

**AI innovation studio marketing website** — New Plains LLC's flagship site featuring an animated 3D plains landscape, flipbook-style project showcase, MDX blog, and contact form.

> Website: [NewPlains.dev](https://newplains.dev)

---

## Tech Stack

| Category              | Technology                                      |
| --------------------- | ----------------------------------------------- |
| **Framework**         | Next.js 14+ (App Router)                        |
| **Language**          | TypeScript                                      |
| **Styling**           | Tailwind CSS                                    |
| **3D Graphics**       | React Three Fiber (Three.js)                    |
| **Animations**        | GSAP (Flipbook, modals, hero fade-in)           |
| **Flipbook UI**       | react-pageflip (StPageFlip)                     |
| **Blog**              | MDX + next-mdx-remote + gray-matter             |
| **Contact Form**      | Formspree (client-side AJAX)                    |
| **Analytics**         | @next/third-parties (Google Tag Manager)        |
| **Chatbot**           | Herm.Chat embed script                          |
| **Hosting**           | Vercel (auto-deploy from `main`)                |
| **Domain**            | NewPlains.dev (pointed to Vercel via DNS)       |

---

## Key Features

- **Animated 3D Plains Scene** — Low-poly landscape with instanced grass, windmills, and gradient sky, rendered via React Three Fiber
- **Flipbook Project Showcase** — Turnable page-flip UI for browsing projects, backed by `react-pageflip`
- **GSAP-Powered Transitions** — Smooth hero fade-in, modal open/close, and flipbook effects
- **MDX Blog** — File-based blog using Markdown with frontmatter; no CMS or database required
- **Contact Modal** — In-page contact form connected to Formspree; emails delivered to `info@NewPlains.dev`
- **Herm.Chat Integration** — AI chatbot embedded in the root layout
- **Google Analytics & Tag Manager** — Page view tracking via `@next/third-parties`
- **Mobile-First Responsive Design** — Tailwind breakpoints (`sm` / `md` / `lg` / `xl`)
- **Self-Hosted Fonts** — Uses `next/font` with no external font CDN dependencies

---

## Architecture Overview

The site is a **single-page marketing website** built on Next.js App Router. The root layout (`app/layout.tsx`) wires up Google Tag Manager, the Herm.Chat chatbot script, and self-hosted fonts. The main page (`app/page.tsx`) composes the hero section (with logo overlay and flipbook), the 3D scene, and modal components.

### Component Tree (simplified)

```
RootLayout (GTM, Herm.Chat, fonts)
└── HomePage
    ├── Hero (logo + tagline overlay)
    │   └── FlipBook (react-pageflip project cards)
    ├── PlainsScene (R3F Canvas — lazy-loaded)
    │   ├── Grass (instanced mesh with custom shaders)
    │   ├── Windmill (model + rotation)
    │   └── Sky (gradient skybox)
    ├── ProjectModal (detail modal, GSAP animated)
    ├── ContactModal (Formspree form, GSAP animated)
    └── Navigation (ui)
```

### Data Flow

| Data               | Source                        | Consumer                  |
| ------------------ | ----------------------------- | ------------------------- |
| Project data       | `lib/projects.ts` (array)     | FlipBook, ProjectModal   |
| Blog posts         | `content/blog/*.mdx` (files)  | `lib/blog.ts` → PostCard |
| Contact form       | Formspree (client-side POST)  | ContactModal → email     |
| Analytics events   | GTM container ID (env var)    | Analytics.tsx             |

**Key constraint:** The 3D scene (`PlainsScene`) is lazy-loaded via `next/dynamic` with `ssr: false` to avoid server-side Three.js rendering issues.

---

## Color Palette

The design is restricted to brand colors derived from the New Plains LLC logo:

| Role       | Colors                                              |
| ---------- | --------------------------------------------------- |
| **Greens**   | `#7A8B5C`, `#9CAF88`                                |
| **Coppers**  | `#B87333`, `#C4825A`                                |
| **Wheat**    | `#C4A265`, `#D4B87A`                                |
| **Charcoal** | `#2D2A26`                                            |
| **Cream**    | `#FAF8F5`                                            |

---

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/NewPlains/newplains-website.git
cd newplains-website

# 2. Install dependencies
npm install

# 3. Create and configure environment variables
cp .env.example .env.local
# Edit .env.local with your Formspree ID, GTM ID, GA ID, and site URL

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Environment Variables

Create a `.env.local` file by copying `.env.example` and filling in the values:

| Variable                     | Description                            | Example Value              |
| ---------------------------- | -------------------------------------- | -------------------------- |
| `NEXT_PUBLIC_FORMSPREE_ID`   | Formspree form ID for contact form     | `xojnjzgv`                 |
| `NEXT_PUBLIC_GTM_ID`         | Google Tag Manager container ID        | `GTM-XXXXXXX`              |
| `NEXT_PUBLIC_GA_ID`          | Google Analytics 4 measurement ID      | `G-XXXXXXX`                |
| `NEXT_PUBLIC_SITE_URL`       | Canonical site URL                     | `https://newplains.dev`    |

> **Note:** These same variables must be configured in the Vercel dashboard for production deployment.

---

## Available Scripts

| Script          | Command              | Description                         |
| --------------- | -------------------- | ----------------------------------- |
| `dev`           | `npm run dev`        | Start development server (`:3000`) |
| `build`         | `npm run build`      | Production build                    |
| `start`         | `npm run start`      | Start production server             |
| `lint`          | `npm run lint`       | Run ESLint                          |
| `type-check`    | `npm run type-check` | Run TypeScript type checking        |

---

## Project Structure

```
newplains-website/
├── app/
│   ├── layout.tsx            # Root layout — GTM, Herm.Chat, fonts, metadata
│   ├── page.tsx              # Main single-page entry point
│   └── blog/
│       ├── page.tsx          # Blog listing page
│       └── [slug]/
│           └── page.tsx      # Individual blog post page
├── components/
│   ├── scene/
│   │   ├── PlainsScene.tsx   # R3F Canvas wrapper (lazy-loaded)
│   │   ├── Grass.tsx         # Instanced grass mesh with custom shaders
│   │   ├── Windmill.tsx      # 3D windmill model + rotation animation
│   │   └── Sky.tsx           # Gradient sky background
│   ├── hero/
│   │   ├── Hero.tsx          # Logo + tagline overlay (GSAP fade-in)
│   │   └── FlipBook.tsx      # react-pageflip project card showcase
│   ├── modals/
│   │   ├── ProjectModal.tsx  # Project detail modal overlay
│   │   └── ContactModal.tsx  # Contact form modal (Formspree)
│   ├── blog/
│   │   ├── PostCard.tsx      # Blog post preview card component
│   │   └── PostLayout.tsx    # Layout wrapper for individual posts
│   ├── ui/
│   │   ├── Button.tsx        # Reusable button component
│   │   ├── Modal.tsx         # Base modal with GSAP open/close animations
│   │   └── Navigation.tsx    # Site navigation component
│   └── Analytics.tsx         # GTM + page view tracking integration
├── content/
│   └── blog/
│       └── welcome.mdx       # Initial / example blog post
├── lib/
│   ├── projects.ts           # Project data array (source of truth for projects)
│   └── blog.ts               # MDX parsing and frontmatter utilities
├── public/
│   ├── logo.svg              # New Plains LLC brand logo
│   ├── og-image.png          # Open Graph social preview image
│   └── models/               # 3D model assets (if any)
├── shaders/
│   ├── grass.vert            # GLSL vertex shader for grass
│   └── grass.frag            # GLSL fragment shader for grass
├── styles/
│   └── globals.css           # Tailwind base directives + custom brand styles
├── .env.example              # Template for environment variables
├── .env.local                # Local environment variables (git-ignored)
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

---

## Development Notes

### Conventions

- **Functional components only** — all components are written as TypeScript functions; no class components.
- **GSAP animations use the `useGSAP` hook** — lifecycle cleanup is automatic; no manual `kill()` or `revert()` needed.
- **All images use `next/image`** — for automatic optimization and responsive sizing.
- **Mobile-first responsive design** — Tailwind breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px).
- **API routes validate input** — never trust unvalidated client data.
- **No `console.log` in production** — use conditional logging or a proper logging utility.

### Performance

- The 3D scene must maintain **30+ FPS on mobile**.
- Use **instanced meshes** for grass to reduce draw calls.
- Consider a **2D CSS fallback** for low-end devices.
- The R3F Canvas is **lazy-loaded** with `next/dynamic({ ssr: false })`.

### Brand & Design

- **Only use the defined brand color palette** — greens, coppers, wheat, charcoal, cream.
- **No external font CDNs** — all fonts are self-hosted via `next/font`.

---

## Adding Content

### Adding a New Project

Edit `lib/projects.ts` and add an object to the `projects` array:

```typescript
export const projects: Project[] = [
  {
    id: "herm-chat",
    name: "Herm.Chat",
    tagline: "AI-Powered Conversations",
    description: "Full description of the project...",
    url: "https://herm.chat",
    image: "/projects/herm-chat.png",
    color: "#B87333",   // Use a brand color
  },
  // Add your new project object here
];
```

### Adding a New Blog Post

Create a new `.mdx` file under `content/blog/` following the required frontmatter format:

```mdx
---
title: "Your Post Title"
date: "2026-02-08"
excerpt: "Brief description shown on the blog listing page."
author: "New Plains LLC"
---

Your markdown content here...

![Optional image alt](/path/to/image.png)
```

Each blog post **must** include frontmatter with `title`, `date`, `excerpt`, and `author`. The content can be any valid Markdown with embedded MDX components.

---

## Deployment

The site is hosted on **Vercel** with continuous deployment from the `main` branch.

```bash
git push origin main   # Triggers automatic Vercel deployment
```

### Pre-Deployment Checklist

1. ✅ Environment variables are configured in Vercel dashboard (same keys as `.env.example`)
2. ✅ Domain `NewPlains.dev` is pointed to Vercel via DNS
3. ✅ `npm run build` passes locally with no errors
4. ✅ `npm run lint` and `npm run type-check` pass

### Production URLs

| Environment | URL                  |
| ----------- | -------------------- |
| Production  | https://newplains.dev |
| Preview     | Vercel auto-generates a unique preview URL per PR |

---

## License

© New Plains LLC. All rights reserved.
