# Nine Diagnostics Website (public)

Static deploy bundle of the Nine Diagnostics Website ClickUp artifact, **version 133**.

- `index.html`: compiled, self-contained export (React + page logic inlined). **Do not hand-edit**: the next artifact export overwrites it. Edit the artifact in ClickUp instead.
- `assets/`: the 51 images index.html references (relative `./assets/` paths).
- `vercel.json`: static config, immutable cache headers on `/assets/*`.

## Vercel settings
- Framework Preset: **Other**
- Build Command: **empty**
- Output Directory: `.`

Fonts load from Google Fonts at runtime (intended).
