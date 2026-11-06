# SARVIIII — sarviiii.art
Static portfolio (HTML/CSS/JS, no build). Contact/inquiry only, no shop.

## Preview locally
    cd sarviiii-art && python3 -m http.server 8080   # open http://localhost:8080

## Design (chosen by Andreea, 5 Nov 2026)
Monochrome and inspired by the structure of ciuciu.art, but none of its images, logo, text or code are copied. Pure white background, black text, grey only for notes and lines. Header: lowercase serif menu on the left (home / artworks / about / contact), centred SARVIIII wordmark, and "instagram" on the right. No shop, book, cart or sign-in. Page order: full-width studio hero with an ALL ARTWORKS button, two panels (Large-scale paintings / The artist), an Instagram inquiry section, the artworks grid with a detail dialog, the about section, then contact. All imagery is greyscale abstract placeholder art. Replace `assets/placeholders/hero-studio.svg` with a real wide studio or painting photo (about 2400×1200), and replace panel images with real works. Do not use a portrait unless she supplies one.

## Preview readiness
Ready to show as a design preview with labelled placeholders. Not ready to publish until the inputs below are supplied.

## Edit
- `index.html` — all copy. Each painting is one `<li class="card">` in #paintings: set `data-full`, `data-title`, `data-meta` (e.g. "2025 · Acrylic on canvas · 200 × 150 cm"), the `<img>` src/alt, and remove the "Layout placeholder" tag.
- Put photos in `assets/works/` (JPG/WebP, ~2000px long side, <500 KB).
- Delete `assets/placeholders/` and the preview notice when real works are in.
- Add a VisualArtwork JSON-LD block per real painting (template below).
- `styles.css` — colours in `:root`. Fonts are self-hosted in `assets/fonts` via `fonts.css` (no external requests).

## INPUTS NEEDED FROM ANDREEA (blockers before publishing)
1. Real painting photos (well lit, straight-on, no frame glare) — 6–12 to start.
2. For each: title, year, medium, dimensions (cm). Optional: whether to show "available / sold" (nothing is shown now).
3. Contact email (none invented; contact currently points to Instagram).
4. Approval/edits of the DRAFT bio in #about (only uses: Romanian, Dubai, painting for years for pleasure and home, large works up to ~2 m, meaning of the four i's).
5. Optional: artist portrait, studio photo, a JPG share image 1200×630 for `og:image`.

## Email list (Kit), not connected yet
The footer "private email list" is a disabled design preview. It has no form, sends nothing, collects nothing, and there's no tracking. Kit is a newsletter tool only; the website stays on GitHub Pages. Kit's free plan covers up to 10,000 subscribers with unlimited forms and broadcasts.
To connect it before launch:
1. Andreea creates a free Kit account (kit.com) in her own name. This is her sign-up, it isn't done here.
2. In Kit, go to Grow → Landing Pages & Forms → create an Inline form with First name and Email fields, double opt-in on.
3. Get the form's HTML embed (or its action URL `https://app.kit.com/forms/FORM_ID/subscriptions`).
4. In `index.html`, replace `<div class="fform">` with a `<form class="fform" action="…" method="post">`, rename the inputs to `fields[first_name]` and `email_address`, remove `disabled`, change the button to `type="submit"`, and delete the "will be connected" note.
5. Add a short privacy line (what she sends, how to unsubscribe) and test with her own address.

## Publish on GitHub Pages (free)
1. Create a GitHub account and a public repo, e.g. `sarviiii-art`.
2. Upload all files in this folder (including `CNAME` and `.nojekyll`) to the repo root.
3. Repo → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Custom domain: `sarviiii.art` (already in `CNAME`). After DNS works, tick "Enforce HTTPS".

## Domain DNS (at the registrar of sarviiii.art)
- A records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- (optional IPv6 AAAA): 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153
- CNAME `www` → `<your-github-username>.github.io`
- Propagation: minutes to 48 h. Recommended: verify the domain in GitHub account settings → Pages.

## VisualArtwork template
```html
<script type="application/ld+json">{"@context":"https://schema.org","@type":"VisualArtwork","name":"TITLE","creator":{"@type":"Person","name":"Andreea Sarvi"},"artMedium":"MEDIUM","dateCreated":"YEAR","width":{"@type":"QuantitativeValue","value":150,"unitCode":"CMT"},"height":{"@type":"QuantitativeValue","value":200,"unitCode":"CMT"},"image":"https://sarviiii.art/assets/works/FILE.jpg"}</script>
```
