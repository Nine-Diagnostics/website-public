# website-public

Source for the Nine Diagnostics public website: a single-page React app covering the
platform, evidence base, team, and milestones.

## Stack

| | |
|---|---|
| Framework | React 18.2 |
| Build | Vite 5 + `@vitejs/plugin-react` |
| Animation | `framer-motion` 13.x (`motion`, `useInView`) |
| Type | Bodoni Moda (display), Figtree (body), Azeret Mono (data), from Google Fonts via `src/fonts.css` |
| Styling | Inline style objects plus a few injected `<style>` blocks in `App.jsx`. No Tailwind, no CSS framework. |
| Tests | Playwright (`tests/artifact.spec.js`) |
| Node | 22.x |

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle
npm test         # Playwright smoke test
```

## Project structure

```
index.html            Vite entry document. Defines #root and its scroll behavior.
vite.config.js        Build config. Reads BASE_PATH for subpath deploys.
package.json          Dependencies and scripts.
playwright.config.js  Builds and previews the site, then runs the smoke test.

src/
  main.jsx        Mounts <App /> into #root.
  App.jsx         The entire site: sections, color and type tokens, the animated
                  spectral waveform canvas, and the milestone modal.
  articles.js     Milestone and news entries with full body copy, reverse chronological.
  heroImages.js   Maps each article id to its hero image import.
  fonts.css       Google Fonts import.
  *.png/.jpg/.svg/.webp
                  Headshots, logos, institution marks, publication covers,
                  partner logos, and one hero image per article.

tests/
  artifact.spec.js  Smoke test: the page mounts with no console, network, or HTTP errors.

.github/workflows/
  deploy.yml        Builds on every push to main and publishes to GitHub Pages.
```

Two constraints worth knowing before you edit:

- **`#root` must stay scrollable.** The sticky nav and every in-page anchor read
  `document.getElementById("root")` and fall back to the window only if it is absent.
  The rule lives in `index.html`.
- **Image filenames are load-bearing.** Every image is an ES module import resolved by the
  bundler, so renaming a file means updating the import in `App.jsx` or `heroImages.js`.

## Hosting on GitHub Pages

`.github/workflows/deploy.yml` builds the site and publishes it on every push to `main`.
To turn it on: **Settings → Pages → Build and deployment → Source: GitHub Actions**. The
first deploy runs on the next push, or trigger it from the Actions tab.

The workflow passes `BASE_PATH=/website-public/` so asset URLs resolve under the project
subpath. Moving to a custom domain or an organization page served from the root? Drop that
`env` block and add a `public/CNAME` file with the domain.

Any static host works just as well: run `npm run build` and serve `dist/`. On Netlify,
Vercel, or Cloudflare Pages, set the build command to `npm run build` and the publish
directory to `dist`.

## Editing content

- **Milestones and news.** Add an entry to the top of the array in `src/articles.js`
  (`id`, `date`, `title`, `body`), then add the same `id` to `src/heroImages.js` pointing
  at its hero image. Category labels and filter chips derive from `App.jsx`.
- **Claims and statistics.** Every statistic on the site carries its citation next to it.
  Keep that pairing intact when editing copy.
- **Colors and type.** Edit the `C` and `font` token objects near the top of `App.jsx`
  rather than changing values inline.
