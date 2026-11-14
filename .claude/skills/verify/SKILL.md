---
name: verify
description: Serve and drive the static portfolio site in a browser to check a change.
---

# Verify the portfolio site

Static HTML/CSS/JS with no build step.

1. Serve the parent folder so the site sits under a subpath, the same as a GitHub Pages project URL:
   `cd .. && python3 -m http.server 8471 --bind 127.0.0.1 &` → `http://127.0.0.1:8471/design-portfolio-webiste-2027/`
   Don't open the files with `file://`. The `./` and `../` links resolve to directory listings there.
2. Drive the site with Playwright (`require('playwright')`, Chromium is preinstalled). Click links instead of using `goto` so relative hrefs get exercised. Log responses with status ≥ 400 and page errors.
3. Leave motion at its default. `.js .reveal` starts at opacity 0 and the IntersectionObserver fades it in. Scroll through each page in steps before you assert or take a full-page screenshot, otherwise the screenshot shows blank sections.
4. Flows worth driving:
   - Filter buttons (click, Tab + Enter/Space)
   - Card → case study → "← All projects", the brand link, nav anchors, "Next project"
   - Widths 1280, 390 and 320, in light and dark colour schemes
   - With JavaScript disabled (all content should stay visible)
