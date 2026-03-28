# CLAUDE.md

## Project Overview

Personal portfolio and blog website for naimsolong.com, built with Nuxt 3 and deployed to GitHub Pages.

## Tech Stack

- **Framework**: Nuxt 3 (Vue 3)
- **Language**: TypeScript + Vue 3 SFCs
- **Styling**: Tailwind CSS
- **Content**: @nuxt/content (Markdown-based CMS)
- **Images**: @nuxt/image
- **Analytics**: PostHog, Cloudflare Analytics
- **Date formatting**: Moment.js
- **Deployment**: GitHub Pages via gh-pages

## Commands

```bash
npm run dev        # Start dev server on port 3010
npm run build      # Build for production
npm run generate   # Static site generation
npm run preview    # Preview production build
npm run deploy     # Deploy to GitHub Pages (gh-pages -d dist)
```

No test or lint scripts are configured.

## Project Structure

```
/
├── components/
│   ├── content/       # Prose components for Markdown rendering (ProseH1, ProseP, etc.)
│   ├── fonts/         # Typography components
│   ├── footers/       # Footer layouts
│   ├── headers/       # Header/navigation components
│   └── sections/      # Section layouts (Card, Images, Spacing)
├── content/
│   └── posts/         # Blog post Markdown files with frontmatter
├── datas/
│   ├── functions.ts   # Link generation and SEO utilities
│   ├── posts.ts       # Posts configuration
│   ├── root.ts        # Profile, offers, tech stacks, social links
│   └── type.ts        # TypeScript interfaces
├── layouts/
│   └── default.vue    # Main layout (header + spacing + footer)
├── pages/
│   ├── [...slug].vue  # Catch-all route for content pages
│   ├── posts/         # Blog posts listing page
│   └── projects/      # Projects listing page
├── plugins/
│   └── posthog.client.js  # PostHog analytics (client-side only)
├── public/
│   └── images/        # Static images (skills, stacks, profiles, posts)
└── server/
    └── tsconfig.json  # Server TypeScript config
```

## Routing

| Route | File | Purpose |
|-------|------|---------|
| `/` | `pages/[...slug].vue` | Home page |
| `/posts` | `pages/posts/index.vue` | Blog listing |
| `/projects` | `pages/projects/index.vue` | Projects listing |
| `/posts/:slug` | `pages/[...slug].vue` | Individual post |
| `/projects/:slug` | `pages/[...slug].vue` | Individual project |

## Content

Blog posts live in `content/posts/` as Markdown files with frontmatter:

```yaml
---
title: Post Title
description: Short description
published: YYYY-MM-DD
draft: true|false
---
```

Draft posts (`draft: true`) are excluded from listings. Posts are ordered by `published` date descending.

## Data Layer

All site data is centralized in `datas/`:

- **`root.ts`**: Profile info, service offers, tech stack list, social links
- **`type.ts`**: TypeScript interfaces (`Post`, `Stack`, `Offer`, `Social`, etc.)
- **`functions.ts`**: SEO meta helpers, canonical URL generation
- **`posts.ts`**: Posts-specific config/helpers

## Component Conventions

- Components are auto-imported by Nuxt — no explicit imports needed
- Naming prefix by category: `Prose*`, `Section*`, `Headers*`, `Footers*`, `Fonts*`
- Prose components override default Markdown rendering (e.g. `ProseH1.vue` → `<h1>`)

## Key Configuration

- **`nuxt.config.ts`**: SSR enabled, base URL `/`, build assets in `build/` (avoids Jekyll conflicts)
- **`.npmrc`**: `shamefully-hoist=true` for dependency resolution
- **`public/CNAME`**: Points to `naimsolong.com` for GitHub Pages custom domain
- **`public/.nojekyll`**: Prevents GitHub Pages from running Jekyll

## Environment Variables

Set via Nuxt runtime config (`.env` file, not committed):

```
CLOUDFLARE_ANALYTIC_TOKEN=  # Cloudflare Web Analytics token
POSTHOG_KEY=                # PostHog project API key
POSTHOG_HOST=               # PostHog instance host
APP_URL=https://naimsolong.com
```

## Git Branches

- `staging` — main development branch
- `claude/*` — Claude Code feature branches
