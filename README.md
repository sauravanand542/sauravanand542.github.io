# sauravanand542.github.io

Portfolio for [Saurav Anand](https://github.com/sauravanand542), published at [sauravanand542.github.io](https://sauravanand542.github.io).

The site is a static [Astro](https://astro.build) app styled with [Tailwind CSS](https://tailwindcss.com). Fonts are self-hosted through Fontsource (Fraunces and Outfit). There is no analytics and no paid service.

## Run locally

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

The dev server prints a local URL. `npm run build` writes the static site to `dist/`, and `npm run preview` serves that build.

## Edit the content

All personal content lives in [`src/data/profile.ts`](src/data/profile.ts): name, handle, headline, about, links, skills, and projects. `experience`, `education`, and `certifications` are empty arrays. Add an object to one of them and that section (plus its nav link) appears on the next build. Leave the array empty and the section stays hidden.

A comment at the top of the file lists the object shapes. Set a project’s `homepage` only when the GitHub repository lists a homepage; that is what shows a live-demo link. Star counts, when present, are labeled with `factsAsOf`.

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow installs dependencies, runs `npm run build`, and deploys the `dist/` folder with the official GitHub Pages actions (`actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages`).

This repository is a user site, so Astro is configured with `site: https://sauravanand542.github.io` and `base: '/'`. Do not commit `dist/`. The source on `main` is the Astro project, not the built HTML.

### One-time GitHub Pages setting

The repository’s Pages source is still **Deploy from a branch** (`main` / `/`). After this change, `main` holds Astro source, so that setting would publish the source tree instead of the built site.

Before or right after merging, switch it once:

1. Open **Settings → Pages** for `sauravanand542/sauravanand542.github.io`.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

The next push to `main` (or a manual run of the “Deploy to GitHub Pages” workflow) then publishes the Astro build at the site root.
