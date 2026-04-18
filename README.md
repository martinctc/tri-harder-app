# TRI-HARDER — Marketing Website

The public-facing website for [TRI-HARDER AI Triathlon Coach](https://ambitious-smoke-0c1398603.6.azurestaticapps.net/). Showcases features, training science blog, and project info.

**Live site:** [martinctc.github.io/tri-harder-app](https://martinctc.github.io/tri-harder-app/)

## Tech Stack

- **Next.js 16** (App Router, static export)
- **Tailwind CSS v4**
- **Framer Motion** — scroll animations
- **MDX** — blog posts in `src/content/blog/`
- **GitHub Pages** — deployed via GitHub Actions

## Development

```bash
npm install
npm run dev     # Dev server at http://localhost:3000
npm run build   # Static export to /out
```

## Adding Blog Posts

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2026-04-20"
excerpt: "A short description for the listing page."
tags: ["tag1", "tag2"]
author: "Your Name"
---

Your markdown content here...
```

## Deployment

Pushes to `main` trigger automatic deployment to GitHub Pages via `.github/workflows/deploy.yml`.

## Pages

| Route | Content |
|-------|---------|
| `/` | Landing page — hero, features, how it works, CTA |
| `/features` | Detailed feature breakdown |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog posts |
| `/about` | Project story, tech stack, roadmap |
| `/privacy` | Privacy policy & training disclaimer |

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
