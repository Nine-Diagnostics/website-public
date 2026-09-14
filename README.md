# website-public

Source for the Nine Diagnostics public website: a single-page React app covering the
platform, evidence base, team, and milestones.

## Stack

| | |
|---|---|
| Framework | React 18.2 |
| Build | Vite + `@vitejs/plugin-react` |
| Animation | `framer-motion` 13.x (`motion`, `useInView`) |
| Type | Bodoni Moda (display), Figtree (body), Azeret Mono (data), loaded from Google Fonts via `src/fonts.css` |
| Styling | Inline style objects plus a small set of injected `<style>` blocks in `App.jsx`. No Tailwind, no CSS framework. |
| Tests | Playwright (`tests/artifact.spec.js`) |
| Node | 22.x |

## Project structure

```
src/
  App.jsx         Entire site. Sections, color tokens, typography helpers,
                  the animated spectral waveform canvas, and the news modal.
  articles.js     All milestone/news entries with full body copy, reverse chronological.
  heroImages.js   Maps each article id to its hero image import.
  fonts.css       Google Fonts import.
  *.png/.jpg/.svg/.webp
                  Headshots, logos, institution marks, publication covers,
                  partner logos, and per-article hero images.
tests/
  artifact.spec.js  Smoke test: page mounts with no console, network, or HTTP errors.
```

Every image is imported as an ES module and resolved to a URL by the bundler, so asset
filenames must stay in sync with the import statements at the top of `App.jsx` and
`heroImages.js`.

## Local setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle
```

## Scaffolding

This repository holds the site source only. To build it standalone, add the four files
below at the repository root.

**`package.json`**

```json
{
  "name": "nine-diagnostics-website",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "playwright test"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^13.0.0"
  },
  "devDependencies": {
    "@playwright/test": "^1.58.0",
    "@vitejs/plugin-react": "^4.3.0",
    "vite": "^5.4.0"
  }
}
```

**`vite.config.js`**

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: { assetsInlineLimit: 0 },
});
```

**`index.html`**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nine Diagnostics</title>
    <style>
      html, body { height: 100%; }
      body { margin: 0; }
      #root { height: 100dvh; overflow: auto; }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**`src/main.jsx`**

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

The `#root` element must be a scrollable container: the nav scroll state and every
in-page anchor read `document.getElementById("root")` before falling back to the window.

## Editing content

- **Milestones and news.** Add an entry to the top of the array in `src/articles.js`
  (`id`, `date`, `title`, `body`), then add a matching `id` to `src/heroImages.js` with
  its hero image import. Category labels and filter chips are derived in `App.jsx`.
- **Claims and statistics.** Every statistic on the site carries its citation adjacent to
  it. Keep that pairing intact when editing copy.
- **Colors and type.** Change the `C` and `font` token objects near the top of `App.jsx`
  rather than editing values inline.
