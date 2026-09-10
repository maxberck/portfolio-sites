# Maison Silex Visual Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Maison Silex's Kuro-like editorial layout with a full-bleed dramatic gastronomy identity, keep Silex unpublished during the redesign, then publish it only after responsive browser QA and a real committed homepage preview.

**Architecture:** Keep the existing five routes, business data, menu data and metadata boundary, but replace the visual contract inside `src/templates/restaurant-01/`. Scope Bodoni Moda and DM Sans through `next/font/google` only to the Silex layout, replace the old split/grid markup with full-bleed chapter compositions, and use the existing preview-capture workflow to generate the final portfolio preview before changing `restaurant-01` to `available`.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, `next/font/google`, `next/image`, isolated CSS, GitHub Actions, Playwright capture workflow.

**Spec:** `docs/superpowers/specs/2026-09-10-restaurant-01-silex-redesign-design.md`

## Global Constraints

- Do not modify `src/templates/restaurant-04/**` or `app/sites/restaurant-04/**`.
- Keep all five Maison Silex routes unchanged.
- Keep fictional demo routes `noindex, follow`.
- Maison Silex stays `planned` until the real preview is committed and final verification passes.
- Target visual differentiation versus Kuro is 7/7 axes; minimum acceptance is 5/7.
- Hero is full-bleed photography, never a text/photo split grid.
- Desktop header is transparent over the hero and non-sticky.
- Mobile navigation uses one explicit full-screen panel.
- Silex display font is `Bodoni_Moda`; body/navigation font is `DM_Sans`, both local to the Silex layout.
- No generic restaurant component shared with Kuro.
- No rounded-card design system, glassmorphism, decorative gradients, parallax, carousel, booking, backend, payment, auth, CMS or database.
- Use existing `site.ts` and `menu.ts` data where possible; only add narrowly required editable fields.
- Preview must be a real browser-rendered homepage capture stored at `public/previews/restaurant-01-home.webp`.

---

### Task 1: Add RED verification for the redesigned visual contract

**Files:**
- Modify: `.github/workflows/verify.yml`

**Interfaces:**
- Consumes: existing Silex routes and smoke-test workflow.
- Produces: assertions proving the new full-bleed Silex markup is absent before implementation and present afterward.

- [ ] **Step 1: add the redesign branch to push CI**

Add `feat/restaurant-01-silex-redesign` to `on.push.branches`.

- [ ] **Step 2: add redesign assertions while Silex is still planned**

After fetching the five Silex pages, require these markers:

```bash
grep -q 'data-silex-hero="full-bleed"' /tmp/silex-home.html
grep -q 'data-silex-chapter="manifesto"' /tmp/silex-home.html
grep -q 'data-silex-chapter="menu-folio"' /tmp/silex-home.html
grep -q 'data-silex-page="menu-poster"' /tmp/silex-menu.html
grep -q 'data-silex-page="maison-story"' /tmp/silex-maison.html
grep -q 'data-silex-page="gallery-sequence"' /tmp/silex-gallery.html
grep -q 'data-silex-page="contact-poster"' /tmp/silex-contact.html
```

Keep `available_count == 1` and `real_preview_count == 1` during this RED/GREEN implementation phase.

- [ ] **Step 3: run CI and prove RED**

Expected: install/lint/build succeed, then smoke fails on the first new Silex marker because the old split layout is still rendered.

- [ ] **Step 4: commit**

Commit message:

```text
test: require distinct Maison Silex redesign
```

---

### Task 2: Replace the theme and typography boundary

**Files:**
- Modify: `app/sites/restaurant-01/layout.tsx`
- Modify: `src/templates/restaurant-01/types.ts`
- Modify: `src/templates/restaurant-01/src/data/site.ts`
- Modify: `src/templates/restaurant-01/lib/theme.ts`

**Interfaces:**
- Produces CSS variables `--silex-ink`, `--silex-wine`, `--silex-paper`, `--silex-surface`, `--silex-butter`, `--silex-muted`, `--silex-white`, `--font-silex-display`, and `--font-silex-body`.

- [ ] **Step 1: replace the six-color schema**

Change `SilexSiteConfig.colors` to:

```ts
colors: {
  ink: string;
  wine: string;
  paper: string;
  surface: string;
  butter: string;
  muted: string;
  white: string;
};
```

- [ ] **Step 2: update Silex data values**

Use exactly:

```ts
colors: {
  ink: "#1f1415",
  wine: "#761f2c",
  paper: "#f1e7e1",
  surface: "#fff9f5",
  butter: "#e5c76f",
  muted: "#9b817e",
  white: "#fffdf9",
},
```

Keep all business/menu/contact content unchanged.

- [ ] **Step 3: map the new semantic variables**

`silexThemeStyle` must map all seven fields one-to-one to the matching CSS custom property.

- [ ] **Step 4: scope real fonts in the route layout**

Import:

```ts
import { Bodoni_Moda, DM_Sans } from "next/font/google";
```

Configure:

```ts
const silexDisplay = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-silex-display",
  display: "swap",
});

const silexBody = DM_Sans({
  subsets: ["latin"],
  variable: "--font-silex-body",
  display: "swap",
});
```

Apply both variable classes only to the `.silex-site` wrapper.

- [ ] **Step 5: commit**

Commit message:

```text
feat: give Maison Silex its own theme and fonts
```

---

### Task 3: Replace Silex navigation and all five page compositions

**Files:**
- Modify: `src/templates/restaurant-01/components/SilexHeader.tsx`
- Modify: `src/templates/restaurant-01/components/SilexFooter.tsx`
- Modify: `src/templates/restaurant-01/components/VisitPanel.tsx`
- Modify: `src/templates/restaurant-01/pages/HomePage.tsx`
- Modify: `src/templates/restaurant-01/pages/MenuPage.tsx`
- Modify: `src/templates/restaurant-01/pages/MaisonPage.tsx`
- Modify: `src/templates/restaurant-01/pages/GalleryPage.tsx`
- Modify: `src/templates/restaurant-01/pages/ContactPage.tsx`
- Delete if unused after composition change: `src/templates/restaurant-01/components/SectionLabel.tsx`
- Delete if unused after composition change: `src/templates/restaurant-01/components/MenuLines.tsx`

**Interfaces:**
- Consumes: `silexSite`, `silexMenu`, `silexMenuPrice`, `EditorialImage`.
- Produces: unique markup markers required by Task 1.

- [ ] **Step 1: rebuild the header**

Desktop header is absolute over the first visual surface, has no sticky behavior, no blur and no bottom rule. Keep the existing client-side pathname handling, but mobile mode opens a full-screen panel with large vertical links and an explicit close button.

- [ ] **Step 2: rebuild the homepage into six chapters**

Required DOM markers and order:

```tsx
<section className="silex-stage" data-silex-hero="full-bleed">...</section>
<section className="silex-manifesto" data-silex-chapter="manifesto">...</section>
<section className="silex-spread" data-silex-chapter="photographic-spread">...</section>
<section className="silex-chef-spread" data-silex-chapter="chef">...</section>
<section className="silex-folio" data-silex-chapter="menu-folio">...</section>
<VisitPanel />
```

The hero image fills the viewport and the `h1` overlays the lower area. The manifesto uses a full wine background. Signature dishes are captions inside one photographic spread, not cards.

- [ ] **Step 3: rebuild the menu page**

Root element uses `data-silex-page="menu-poster"`. Use a dark/wine title stage followed by a light two-column printed-menu surface on desktop and one column on mobile. Menu acts receive visible ordinal numbers and the final tasting-menu price is a separate typographic block.

- [ ] **Step 4: rebuild the Maison page**

Root uses `data-silex-page="maison-story"`. Order: full-image title stage, narrow story column, chef spread, mineral pull quote, sourcing/product image, final large navigation links.

- [ ] **Step 5: rebuild the gallery page**

Root uses `data-silex-page="gallery-sequence"`. Use one near-full-viewport opener, one landscape/portrait pair, a three-crop contact sheet, and one isolated vertical image. Do not use masonry or equal cards.

- [ ] **Step 6: rebuild the contact page and visit ending**

Contact root uses `data-silex-page="contact-poster"`; use a wine/prune poster with oversized `Bruxelles`, large address/hours/contact blocks and explicit demo disclosure. `VisitPanel` becomes the same visual language as a large poster rather than a small information panel.

- [ ] **Step 7: remove obsolete generic editorial helpers**

After page rewrites, delete `SectionLabel.tsx` and/or `MenuLines.tsx` only if no imports remain.

- [ ] **Step 8: commit**

Commit message:

```text
feat: rebuild Maison Silex compositions
```

---

### Task 4: Replace the Silex CSS instead of patching it

**Files:**
- Replace: `src/templates/restaurant-01/styles/silex.css`

**Interfaces:**
- Consumes: markup/classes from Task 3 and variables/fonts from Task 2.
- Produces: desktop/tablet/mobile visual system with no Kuro-like split shell.

- [ ] **Step 1: define the local root**

Use:

```css
.silex-site {
  min-height: 100vh;
  background: var(--silex-paper);
  color: var(--silex-ink);
  font-family: var(--font-silex-body), Arial, sans-serif;
}
```

Display typography uses `var(--font-silex-display)`.

- [ ] **Step 2: implement full-bleed hero and overlay header**

Hero uses `min-height: 100svh`, a full-cover image, a controlled solid-color overlay where text sits, and monumental display type. Do not use a 12-column split or centered shell for the hero.

- [ ] **Step 3: implement chapter-specific compositions**

Create separate layout systems for `.silex-manifesto`, `.silex-spread`, `.silex-chef-spread`, `.silex-folio`, `.silex-visit-poster`, `.silex-menu-*`, `.silex-maison-*`, `.silex-gallery-*`, `.silex-contact-*`. Avoid one universal `section` layout.

- [ ] **Step 4: implement responsive behavior**

At <=1099px reduce overlaps and switch navigation to mobile trigger. At <=767px use single-column reading order, remove risky absolute overlaps, keep title scale expressive with `clamp()`, ensure controls are >=44px, and prevent horizontal overflow by construction rather than clipping bugs.

- [ ] **Step 5: add focus and reduced-motion rules**

Visible focus outline and `@media (prefers-reduced-motion: reduce)` must disable image transforms/transitions.

- [ ] **Step 6: run CI and reach GREEN while still planned**

Expected: all Task 1 Silex markers pass; total available demos remains 1 and real previews remains 1.

- [ ] **Step 7: commit**

Commit message:

```text
feat: apply dramatic Maison Silex art direction
```

---

### Task 5: Capture and visually inspect Maison Silex before publication

**Files:**
- Modify: `preview-target.json`
- Generated by workflow: `public/previews/restaurant-01-home.webp`
- Modify if necessary for reusable QA: `.github/workflows/capture-preview.yml`

**Interfaces:**
- Consumes: production route `/sites/restaurant-01`.
- Produces: real browser-rendered Silex homepage preview.

- [ ] **Step 1: point capture target to Silex**

Set:

```json
{
  "siteId": "restaurant-01",
  "route": "/sites/restaurant-01",
  "width": 1440,
  "height": 1000
}
```

- [ ] **Step 2: capture the real page**

Allow the existing workflow to build, launch Chromium, capture the route, generate WebP, upload the artifact and commit only `public/previews/restaurant-01-home.webp` to the feature branch.

- [ ] **Step 3: inspect the browser result**

Required checks at desktop preview: full-bleed hero visible, white navigation legible, no unloaded image, no split-grid Kuro resemblance, no overflow/collision, title readable over the photo.

- [ ] **Step 4: perform responsive QA**

Capture/inspect Silex at approximately 1440×1000, 768×1024 and 375×812. If needed, temporarily extend the reusable capture workflow or add a short-lived QA workflow; do not publish until all three widths are readable.

- [ ] **Step 5: commit any QA-only workflow adjustment separately**

Commit message if needed:

```text
chore: add Silex responsive visual QA
```

---

### Task 6: Publish Silex only after the real preview exists

**Files:**
- Modify: `src/portfolio/data/sites.ts`
- Modify: `.github/workflows/verify.yml`

**Interfaces:**
- Produces: `restaurant-01` becomes the second available demo with a structured real preview.

- [ ] **Step 1: register the real preview and status**

Change only `restaurant-01` to:

```ts
status: "available",
preview: {
  src: "/previews/restaurant-01-home.webp",
  alt: "Aperçu de la page d'accueil du restaurant gastronomique Maison Silex",
  width: 1440,
  height: 1000,
  focalPosition: "center top",
},
```

- [ ] **Step 2: tighten final CI counts/assets**

Require:

```bash
test -s public/previews/restaurant-01-home.webp
grep -q 'restaurant-01-home.webp' /tmp/home.html
available_count=2
real_preview_count=2
```

Keep Kuro assertions unchanged.

- [ ] **Step 3: run full final verification**

Required green steps: `npm ci`, `npm run lint`, `npm run build`, all HTTP smoke assertions, Silex preview asset assertions and exactly two available demos.

- [ ] **Step 4: compare against the portfolio redesign base**

Confirm no file under `src/templates/restaurant-04/**` or `app/sites/restaurant-04/**` changed.

- [ ] **Step 5: commit**

Commit message:

```text
feat: publish redesigned Maison Silex
```

- [ ] **Step 6: open a stacked PR**

If the portfolio redesign is already merged, target `main`. Otherwise target `feat/portfolio-commercial-redesign`. PR summary must include the 7/7 differentiation target and visual QA evidence.
