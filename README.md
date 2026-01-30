# Blue Team Arsenal

Matrix-themed roster app for War Week. Built with Vite, React, TypeScript, and Tailwind, styled as a futuristic command terminal for the Blue Pill team.

## Requirements

- Node.js 18+
- npm 9+

## Setup

```bash
npm install
```

### Environment Variables

This project does not require any environment variables by default. The `.env` file is still supported (and gitignored) for future Vite variables.

If you add Vite variables, use the `VITE_` prefix:

```bash
# .env
VITE_SAMPLE_FLAG=true
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Content Updates

- **Roster data**: `src/data/roster.json`
- **Operative images**: `public/operatives/operative-01.jpg` → `operative-42.jpg`
- **Matrix UI styles**: `src/index.css`

## GitHub Pages

The Vite base path is already set to `/war-week-matrix-blue/` in `vite.config.ts`.

### Deploy

This repo uses `gh-pages` with a `deploy` script.

```bash
npm run deploy
```

That will build the app and publish the `dist/` folder to the `gh-pages` branch.

### One-time setup (GitHub)

1. Go to **Settings → Pages** in the GitHub repo.
2. Set **Source** to **Deploy from a branch**.
3. Select **gh-pages** and **/ (root)**.
4. Save.

After the first deploy, the site should be available at:

```
https://dfavs00.github.io/war-week-matrix-blue/
```
