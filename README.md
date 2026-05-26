# Jimmy Yoon Portfolio

This repository now serves Jimmy Yoon's portfolio from the static files at the repository root. The editable React/Vite source project is included in `source/`.

## Live Site

https://mcvisual.github.io/

## Develop Locally

```bash
cd source
npm install
npm run dev
```

## Build

```bash
cd source
npm run build
```

The production build is written to `source/dist/`.

## Deploy To GitHub Pages

This user-site repository serves static files from the `master` branch root. To deploy a new build:

1. Run `npm run build` from `source/`.
2. Copy the contents of `source/dist/` to the repository root.
3. Keep `.nojekyll` at the root.
4. Commit and push to `master`.

## Content Sources

- Resume PDF: `source/public/assets/JimmyYoon_Data_Analyst_Resume_2026.pdf`
- Original generated hero asset: `source/public/assets/papercraft-analytics-hero.png`
- Optimized deployed hero asset: `assets/papercraft-analytics-hero.webp`
- LinkedIn: `https://www.linkedin.com/in/jimmy-yoon-52953692`
- GitHub: `https://github.com/McVisual`