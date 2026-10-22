# Nine Diagnostics website (public)

Static build of the ClickUp artifact "Nine Diagnostics Website", **version 229** (Nature Synthesis lab attribution; advantage grid 2x2 on mobile; Nature Synthesis news article + Evidence tile wording; ~5x lead-in moved to Applications; Mijin lab X link; Threads in footer; old WordPress link forwards; Google Analytics G-7LDLKFMCVN; redirects from old WordPress pages).

- `index.html` is compiled output. Do not hand-edit; the next export overwrites it.
- `YYYY/slug.html` = one page per news article at its original WordPress address. `404.html` covers trailing-slash variants. `team`, `news`, `publications`, `contact`, `nine-diagnostics`, `category/*` are redirect stubs from the old WordPress pages to the matching homepage section. Other stubs forward renamed article addresses and short links (/deck, /summary, /papers, /patents, /partnering, /people) carried over from the WordPress Redirection plugin.
- Hosting: GitHub Pages, deploy from branch `main`, root folder. Custom domain is set in Settings -> Pages.
- `vercel.json` is required by the import action and ignored by Pages.
