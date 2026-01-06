# Personal Academic Homepage

Minimal, content-first academic homepage built with Astro and deployed to GitHub Pages.

## Run locally

```sh
npm install
npm run dev
```

Preview build:

```sh
npm run build
npm run preview
```

## Update content (no layout edits)

All editable content lives in `src/content/` and `src/data/`.

### About
- Edit `src/content/pages/about.md`.

### Projects / Research
- Add or edit Markdown files in `src/content/projects/`.
- The frontmatter schema is defined in `src/content/config.ts`.

### Publications
- If not created yet, add `src/content/pages/publications.md` and a matching page at `src/pages/publications.astro` (copy `src/pages/research.astro` and simplify).
- Then update `src/content/pages/publications.md` for content.

### CV
- Recommended: put the PDF in `public/` (e.g., `public/cv.pdf`).
- Optionally add a `src/content/pages/cv.md` and a simple page `src/pages/cv.astro` with a link to the PDF.

### Site-wide info
- Update name, tagline, social links, and footer note in `src/data/site.json`.

## GitHub Pages deployment
- Workflow: `.github/workflows/deploy.yml`.
- On push to `main`, GitHub Actions builds and deploys `dist/` to Pages.
- `SITE_URL` and `BASE_PATH` are injected at build time for correct routing under `username.github.io` or `username.github.io/repo`.

## Common issues
- **404 on Pages:** confirm GitHub Pages is set to “GitHub Actions” and that `BASE_PATH` matches the repo name for project pages.
- **Build fails after editing frontmatter:** ensure fields match the schema in `src/content/config.ts` (types + required fields).
- **New page not showing in nav:** add it to `src/data/site.json` under `nav`.
- **Local build ok, Pages broken:** check `astro.config.mjs` for `site`/`base` and ensure the workflow passes `SITE_URL`/`BASE_PATH`.

