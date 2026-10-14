# Nine Diagnostics Website (public)

Static deploy bundle of the Nine Diagnostics Website ClickUp artifact, **version 148**, served by **GitHub Pages** at **https://beta.ninediagnostics.xyz**.

- `index.html`: compiled, self-contained export (React + page logic inlined). **Do not hand-edit**: the next artifact export overwrites it. Edit the artifact in ClickUp instead.
- `assets/`: the images index.html references (relative `./assets/` paths).
- `CNAME`: the custom domain GitHub Pages serves. Keep it; the import action leaves it alone.
- `.nojekyll`: tells Pages to serve files as-is, with no Jekyll build.
- `.github/workflows/import-bundle.yml`: imports a validated bundle when `.deploy/bundle-url.txt` changes on main.

## GitHub Pages settings
- Settings > Pages > Source: **Deploy from a branch**, branch `main`, folder `/ (root)`
- Custom domain: `beta.ninediagnostics.xyz`, **Enforce HTTPS** on
- DNS: CNAME record `beta` -> `nine-diagnostics.github.io`

Fonts load from Google Fonts at runtime (intended).
