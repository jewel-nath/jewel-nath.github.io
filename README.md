# jewelnath.dev

The source of [jewelnath.dev](https://jewelnath.dev), my portfolio: AI agents,
automation and the robots I build.

It is a static site made with [Astro](https://astro.build) and deployed on
Vercel. For now it is a single page; more pages will follow.

## Run it

Needs Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

The site runs at http://localhost:4321. `npm run build` writes the static
site to `dist/`, and `npm run preview` serves that build.

## Where things are

| Path | What it holds |
|---|---|
| `src/data/site.ts` | Every word on the page: links, roles, projects and skills |
| `src/pages/index.astro` | The page |
| `src/components/LidarScan.astro` | The LiDAR scan at the top, drawn on a canvas |
| `src/components/WorkEntry.astro` | One project in the Work section |
| `src/layouts/Base.astro` | The page's head: title, description, fonts and link previews |
| `src/styles/global.css` | Colours, type and layout |
| `src/assets/` | Photos, resized to AVIF and WebP at build time |
| `public/og.png` | The picture shown when the site is linked on LinkedIn or X |
| `scripts/og-image.html` | The source of `public/og.png`; how to render it is at its top |

## Licence

The code is free to read and learn from. The photos, the text and the
picture in `public/og.png` are mine: please don't reuse them.
