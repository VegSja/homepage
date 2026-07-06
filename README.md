# Vegard's Portfolio

Personal portfolio for Vegard Sjåvik, Data Engineer at Bekk working in the financial sector.

**Live:** <https://vegsja.github.io/homepage>

Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and TypeScript. Static output, zero client-side framework JS, deployed automatically to GitHub Pages.

---

## Local development

```bash
npm install
npm run dev          # http://localhost:4321/homepage
npm run build        # runs astro check + astro build
npm run preview      # preview built site locally
```

The dev server serves under `/homepage` because this is a GitHub Pages *project site* (not a user site). Do not change [`base`](astro.config.mjs) unless you rename the GitHub repo.

## Content

### Add a project
Edit [`src/data/projects.ts`](src/data/projects.ts). Add an entry to the `projects` array.

- `tier: 1` → shows under "Data Engineering & Architecture"
- `tier: 2` → shows under "Other Explorations"
- `featured: true` → also surfaces on the homepage

### Add a blog post
Create a new `.md` or `.mdx` file in [`src/content/blog/`](src/content/blog/) with this frontmatter:

```yaml
---
title: "Your post title"
date: 2026-01-15
description: "One-line summary shown on the blog index."
tags: ["dbt", "sql"]
draft: false
---
```

Set `draft: true` to keep it in dev but hide it in production.

### Add a presentation
Create a new `.md` file in [`src/content/presentations/`](src/content/presentations/):

```yaml
---
title: "Talk title"
date: 2026-01-15
description: "What the talk was about."
repoUrl: "https://github.com/VegSja/talk-repo"    # required
slidesUrl: "https://vegsja.github.io/talk-repo"   # optional
event: "Meetup Name"                               # optional
tags: ["talk"]
---
```

The site prefers slides-as-code hosted from their own repo. If `slidesUrl` is omitted, only the repo link is shown.

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`.

One-time setup on GitHub:

1. Repository **Settings → Pages → Source**: **GitHub Actions**.
2. Push to `main` → Action runs → site is live at <https://vegsja.github.io/homepage>.

## Structure

```
src/
├── components/        Header, Footer, Hero, About, TechStack, cards, ThemeToggle, Icon
├── content/
│   ├── blog/          MDX blog posts
│   └── presentations/ Talk entries
├── data/projects.ts   Curated project list
├── layouts/           BaseLayout, BlogLayout
├── lib/urls.ts        withBase() helper for base-path-aware internal links
├── pages/             Routes: /, /projects, /blog, /blog/[slug], /presentations, /404
└── styles/global.css
```

## Notes

- Dark mode is the default; a light-mode preference is stored in `localStorage.color-theme`.
- All internal links must go through `withBase()` from [`src/lib/urls.ts`](src/lib/urls.ts). External URLs use plain `href`.
- The `TODO: EDIT` markers in `src/data/projects.ts` and `src/content/` are placeholder copy — swap them for real content when ready.
