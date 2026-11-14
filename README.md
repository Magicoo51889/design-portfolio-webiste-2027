# Jack Foot — Design Portfolio

A fast, static portfolio site for product design work. Plain HTML, CSS and a little JavaScript — no build step, nothing to install.

## Structure

```
index.html                      Home: intro, project grid, about, contact
projects/project-template.html  Case study template — duplicate one per project
assets/css/style.css            All styling (colours and fonts are at the top)
assets/js/main.js               Project filters, scroll fade-ins
assets/img/                     Put your images here
```

## Making it yours

1. **Text** — edit `index.html`. Each section is marked with a comment (`HERO`, `WORK`, `ABOUT`, `CONTACT`). Replace `hello@example.com` and the social links.
2. **Images** — add files to `assets/img/`, then replace each placeholder
   `<div class="ph">…</div>` with `<img src="assets/img/my-image.jpg" alt="Short description">`.
   Aim for JPG or WebP around 1600px wide, under ~400 KB each.
3. **Projects** — copy `projects/project-template.html` to e.g. `projects/kettle.html`, fill it in, and point the matching card's link in `index.html` at it.
4. **Filters** — a card's `data-category` must match a filter button's `data-filter`. Add, rename or remove both together.
5. **Look and feel** — colours (light and dark) and fonts are variables at the top of `assets/css/style.css`.

To preview locally, open `index.html` in a browser.

## Hosting for free

### GitHub Pages (simplest — the code is already here)

1. Merge this work into the `main` branch.
2. In the repository go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
4. After a minute the site is live at `https://<username>.github.io/<repository-name>/`.

Renaming the repository (**Settings → General**) changes the last part of that address, e.g. `…github.io/jack-foot-design-portfolio/`.

### A cleaner free address

- **Cloudflare Pages** or **Netlify** — sign in with GitHub, import this repository, leave the build command empty and the output directory as `/`. You choose the project name, which gives an address such as `jackfootdesign.pages.dev` or `jackfootdesign.netlify.app` (subject to the name being free). The site redeploys on every push.

### Your own domain (optional, the only part that costs money)

A domain such as `jackfootdesign.com` or `jackfoot.design` costs roughly £10–30 a year from a registrar. All three hosts above connect a custom domain for free, with HTTPS included.
