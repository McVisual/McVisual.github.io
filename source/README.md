# Jimmy Yoon Portfolio

A React, TypeScript, Tailwind CSS, and Framer Motion portfolio site for Jimmy Yoon. The design recreates a playful notebook/papercraft portfolio experience from scratch with original code, original generated art, semantic content, recruiter-focused copy, and resume-backed analytics positioning.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Content Sources

- Resume PDF: `public/assets/JimmyYoon_Data_Analyst_Resume_2026.pdf`
- Original generated hero asset: `public/assets/papercraft-analytics-hero.png`
- Optimized deployed hero asset: `public/assets/papercraft-analytics-hero.webp`
- Public links used in the site:
  - LinkedIn: `https://www.linkedin.com/in/jimmy-yoon-52953692`
  - GitHub: `https://github.com/McVisual`
  - Ravenous: `https://github.com/McVisual/Ravenous`
  - Weather Card: `https://github.com/McVisual/weather-card`
  - Image Gallery: `https://github.com/McVisual/image-gallery`

## Run Locally

```bash
npm install
npm run dev
```

Vite will print the local development URL, usually `http://localhost:5173/`.

## Build

```bash
npm run build
```

The production build is written to `dist/`.

## Preview Production Build

```bash
npm run preview
```

## Deploy

This app can be deployed to any static host that supports Vite output, including GitHub Pages, Netlify, Vercel, Cloudflare Pages, or S3-style hosting.

For GitHub Pages on a user site such as `mcvisual.github.io`, build normally and publish the contents of `dist/` to the Pages branch/source. For a project subpath, set Vite `base` in `vite.config.ts` before building.

## Maintenance Notes

- Project cards include TODO text only where public outcome details or live demo links are not available.
- Replace TODOs with verified metrics, deployment links, or screenshots when they are approved for public use.
- Keep the resume PDF filename stable unless `src/content.ts` is updated.
