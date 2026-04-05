# Responsive Web Design — Exercise 2

Static portfolio page: responsive layout, progressive enhancement (mobile nav, grid fallbacks), accessibility (skip link, reduced motion), optional dark mode (`prefers-color-scheme`), print stylesheet, and share/SEO metadata.

## Testing log (assignment)

| Check | What we verified |
|--------|------------------|
| **Viewports** | Narrow phone (~375px), large phone/tablet (~768px), laptop (~1024px+), wide desktop (~1280px+) |
| **Touch vs hover** | Nav pills and cards use `@media (hover: hover)` so touch devices do not get “stuck” hover styles |
| **Keyboard** | Tab order: skip link → header → nav → main → footer; `Escape` closes the mobile menu and returns focus to **Menu** |
| **Mobile menu** | With JS: menu toggles; tapping a section link closes the menu; without JS: full nav stays available |
| **Reduced motion** | With `prefers-reduced-motion: reduce`: smooth scrolling off; fewer transitions (see `styles.css`) |
| **Dark mode** | Toggle system appearance (macOS / Windows / Android) — page uses `prefers-color-scheme: dark` |
| **Print** | Browser Print preview: back-to-top and menu toggle hidden; nav shown; external links show URL for reference |

## Local preview

Open `index.html` in a browser, or serve the folder with any static server.

## Deploy note (GitHub Pages)

Canonical and social preview URLs assume:

`https://midnight-getaway.github.io/Responsive-Web-Design-Exercise-2/`

If your Pages URL differs, update `link[rel="canonical"]`, `og:url`, `og:image`, `twitter:image`, and the JSON-LD `url` / `image` fields in `index.html`.
