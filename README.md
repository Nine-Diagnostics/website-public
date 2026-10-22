# Nine Diagnostics website (public)

Static build of the ClickUp artifact "Nine Diagnostics Website", **version 222** (NBC watch card opens an in-page pop-up; Google Analytics G-7LDLKFMCVN; redirects from old WordPress pages).

- `index.html` is compiled output. Do not hand-edit; the next export overwrites it.
- `YYYY/slug.html` = one page per news article at its original WordPress address. `404.html` covers trailing-slash variants. `team`, `news`, `publications`, `contact`, `nine-diagnostics`, `category/*` are redirect stubs from the old WordPress pages to the matching homepage section.
- Hosting: GitHub Pages, deploy from branch `main`, root folder. Custom domain is set in Settings -> Pages.
- `vercel.json` is required by the import action and ignored by Pages.
