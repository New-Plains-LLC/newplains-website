# Architecture — NewPlains.dev

## System Design

```
┌─────────────────────────────────────────────────────────────┐
│                        BROWSER                               │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Next.js App (React)                                  │   │
│  │                                                        │   │
│  │  ┌─────────────┐  ┌──────────────┐  ┌─────────────┐  │   │
│  │  │ R3F Canvas  │  │ Hero +       │  │ Blog        │  │   │
│  │  │ (3D Scene)  │  │ FlipBook     │  │ (MDX)       │  │   │
│  │  │             │  │              │  │             │  │   │
│  │  │ - Grass     │  │ - Logo       │  │ - Listing   │  │   │
│  │  │ - Windmills │  │ - Tagline    │  │ - [slug]    │  │   │
│  │  │ - Sky       │  │ - PageFlip   │  │             │  │   │
│  │  └─────────────┘  │ - Modals     │  └─────────────┘  │   │
│  │                    └──────────────┘                    │   │
│  │                                                        │   │
│  │  ┌─────────────┐  ┌──────────────┐  ┌─────────────┐  │   │
│  │  │ Contact     │  │ GTM/GA4      │  │ Herm.Chat   │  │   │
│  │  │ Modal       │  │ Analytics    │  │ Widget      │  │   │
│  │  └──────┬──────┘  └──────────────┘  └─────────────┘  │   │
│  └─────────┼────────────────────────────────────────────┘   │
│            │ POST (AJAX)                                     │
└────────────┼─────────────────────────────────────────────────┘
             │
             ▼
┌──────────────────────────┐
│  Formspree               │
│  formspree.io/f/xojnjzgv │
│                          │
│  → info@NewPlains.dev    │
└──────────────────────────┘
```

## Component Architecture

### Page Structure (Single Page)
```
<RootLayout>                    ← layout.tsx (GTM, fonts, chatbot)
  <Navigation />                ← Sticky nav: Logo, Blog, Contact
  <main>
    <PlainsScene />             ← Full-viewport R3F 3D background (lazy-loaded, ssr:false)
    <Hero />                    ← Overlay: logo, tagline, scroll cue
    <FlipBook />                ← react-pageflip project cards
    <BlogSection />             ← Latest 3 posts preview
    <Footer />                  ← Copyright, email, social links
  </main>
  <ProjectModal />              ← GSAP animated, rendered via portal
  <ContactModal />              ← GSAP animated, rendered via portal
  <HermChatWidget />            ← Embed snippet
</RootLayout>
```

### 3D Scene Component Tree
```
<Canvas>                        ← React Three Fiber canvas
  <PerspectiveCamera />
  <ambientLight />
  <directionalLight />
  <Sky />                       ← Gradient sky (brand green → cream)
  <Grass />                     ← InstancedMesh (10,000-50,000 blades)
    └─ Custom vertex shader     ← Perlin noise wind displacement
    └─ Custom fragment shader   ← Tip-to-base color gradient (green → wheat)
  <Windmill />                  ← 2-3 windmill instances at varying distances
    └─ useFrame rotation        ← Continuous blade rotation
  <Ground />                    ← Flat plane with brand earth tones
</Canvas>
```

## Data Models

### Project (lib/projects.ts)
```typescript
interface Project {
  id: string;              // URL-safe slug: "herm-chat"
  name: string;            // Display name: "Herm.Chat"
  tagline: string;         // Short: "AI-Powered Conversations"
  description: string;     // Full paragraph for modal
  features: string[];      // Bullet points for modal
  url: string;             // External link: "https://herm.chat"
  image: string;           // Path: "/projects/herm-chat.png"
  color: string;           // Accent color from brand palette
}
```

### Blog Post Frontmatter (content/blog/*.mdx)
```typescript
interface BlogPost {
  title: string;           // "Welcome to New Plains"
  date: string;            // "2026-02-08" (ISO format)
  excerpt: string;         // 1-2 sentence preview
  author: string;          // "New Plains LLC"
  slug: string;            // Derived from filename
  tags?: string[];         // Optional categorization
}
```

### Contact Form Payload
```typescript
interface ContactFormData {
  name: string;            // Required, min 2 chars
  email: string;           // Required, valid email format
  message: string;         // Required, min 10 chars
}
```

## API Endpoints

### Contact Form (Formspree)
**Purpose:** Handle contact form submissions via Formspree (no server-side API route needed).

**Endpoint:** `https://formspree.io/f/xojnjzgv`
**Recipient:** `info@NewPlains.dev`

**Implementation:** The `ContactModal` component sends a client-side AJAX POST with `Accept: application/json` header. Formspree handles validation, spam filtering, and email delivery.

**Payload:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'd like to discuss a partnership..."
}
```

## Blog Architecture

### Content Pipeline
```
/content/blog/my-post.mdx     ← Author writes MDX
        │
        ▼
gray-matter                    ← Extracts frontmatter + content
        │
        ▼
next-mdx-remote                ← Compiles MDX to React components
        │
        ▼
/blog/[slug]/page.tsx          ← Renders post with layout
```

### Blog Utility Functions (lib/blog.ts)
```typescript
getPostBySlug(slug: string): Promise<BlogPost & { content: string }>
getAllPosts(): Promise<BlogPost[]>  // Sorted by date descending
getLatestPosts(count: number): Promise<BlogPost[]>  // For homepage section
```

## Analytics Setup

### Google Tag Manager (@next/third-parties)
```typescript
// app/layout.tsx
import { GoogleTagManager } from '@next/third-parties/google';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
    </html>
  );
}
```

### Page View Tracking (SPA Navigation)
```typescript
// components/Analytics.tsx
'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';

export function Analytics() {
  const pathname = usePathname();
  useEffect(() => {
    sendGTMEvent({ event: 'page_view', page: pathname });
  }, [pathname]);
  return null;
}
```

## Performance Strategy
1. **3D Scene:** Lazy-load with `next/dynamic({ ssr: false })` — prevents SSR hydration issues
2. **Grass Instances:** Start with 10,000 on mobile, 50,000 on desktop. Detect via `navigator.hardwareConcurrency`
3. **Windmill Models:** Procedural geometry (no external glTF) for MVP — cylinders + boxes
4. **Images:** All via `next/image` with WebP/AVIF auto-optimization
5. **Fonts:** Self-hosted via `next/font` (no layout shift)
6. **Bundle:** Tree-shake Three.js imports — only import what's needed
7. **Mobile Fallback:** If WebGL not supported, show a static gradient background with CSS animated grass silhouettes