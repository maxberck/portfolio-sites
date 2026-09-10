# Terra Mediterranean Table Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Terra as a complete five-route Mediterranean restaurant demo with its own data, visual system, responsive behavior, QA workflow, preview, and portfolio publication gate.

**Architecture:** Keep the existing one-app/template-isolation architecture. Route adapters live under `app/sites/restaurant-03/`; all Terra-owned content, components, pages, theme, metadata, and CSS live under `src/templates/restaurant-03/`. The portfolio registry changes only after the real preview and visual QA pass.

**Tech Stack:** Next.js 16.3.4 App Router, React 19.2.8, TypeScript 5, Tailwind 4 infrastructure, scoped plain CSS, `next/font/google`, `next/image`, GitHub Actions + Playwright visual capture.

**Spec:** `docs/superpowers/specs/2026-09-10-restaurant-03-terra-design.md`

## Global Constraints

- Exactly five explicit routes: `/sites/restaurant-03`, `/menu`, `/table`, `/galerie`, `/contact`.
- Exactly one `h1` per route.
- `robots: { index: false, follow: true }`.
- No booking/order backend, form, iframe map, auth, CMS, database, dashboard, testimonials, awards, or real-company claims.
- Terra owns all visual components; do not reuse Kuro, Silex, District 88, or portfolio visual components.
- Display font: Fraunces 600/700. Body/UI: Manrope 400/500/600/700.
- Palette: stone `#F2EBDD`, ink `#25241F`, terracotta `#B85C3D`, olive `#667044`, sun `#D7A33D`, cream `#FFF9EE`, muted `#80796D`.
- Rectangular imagery, no shadow/gradient/glass/rounded-card system.
- Terra remains `planned` until all QA passes and `public/previews/restaurant-03-home.webp` exists as a valid binary WebP.
- Visual QA targets: 1440x1000, 768x1024, 375x812.

---

### Task 1: RED route contract and workflow

**Files:**
- Create: `.github/workflows/terra-verify.yml`
- Create: `scripts/smoke-terra.mjs`

**Interfaces:**
- Consumes: existing `npm run lint`, `npm run build`, production server conventions from the repo.
- Produces: a failing pre-implementation route/content contract for all five Terra routes.

- [ ] **Step 1: Write the failing smoke test**

```js
const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";
const pages = [
  ["/sites/restaurant-03", "À TABLE, AU SOLEIL."],
  ["/sites/restaurant-03/menu", "LE MENU"],
  ["/sites/restaurant-03/table", "LA TABLE"],
  ["/sites/restaurant-03/galerie", "AUTOUR DE LA TABLE"],
  ["/sites/restaurant-03/contact", "VENIR CHEZ TERRA"],
];
for (const [path, marker] of pages) {
  const response = await fetch(`${base}${path}`);
  if (!response.ok) throw new Error(`${path}: ${response.status}`);
  const html = await response.text();
  if (!html.includes(marker)) throw new Error(`${path}: missing ${marker}`);
  if (!html.includes('noindex')) throw new Error(`${path}: missing noindex`);
  if (/<iframe\b/i.test(html)) throw new Error(`${path}: iframe forbidden`);
}
```

- [ ] **Step 2: Add workflow** running `npm ci`, `npm run lint`, `npm run build`, start production server, then `node scripts/smoke-terra.mjs`.
- [ ] **Step 3: Push and verify RED** — expected result: lint/build pass and smoke fails because Terra routes do not yet exist.
- [ ] **Step 4: Commit** with `test: define Terra route contract`.

### Task 2: Terra data, types, metadata, theme, and shell

**Files:**
- Create: `src/templates/restaurant-03/types.ts`
- Create: `src/templates/restaurant-03/src/data/site.ts`
- Create: `src/templates/restaurant-03/src/data/menu.ts`
- Create: `src/templates/restaurant-03/lib/theme.ts`
- Create: `src/templates/restaurant-03/lib/metadata.ts`
- Create: `src/templates/restaurant-03/components/TerraHeader.tsx`
- Create: `src/templates/restaurant-03/components/TerraFooter.tsx`
- Create: `src/templates/restaurant-03/components/PortfolioReturnLink.tsx`
- Create: `app/sites/restaurant-03/layout.tsx`

**Interfaces:**
- Consumes: Terra spec palette/content model and existing portfolio root route.
- Produces: `terraSite`, `terraMenu`, `terraThemeStyle`, `createTerraMetadata()` and the shared Terra page shell.

- [ ] **Step 1: Define typed data contracts** for business, navigation, image, hero, seasonal note, shared plates, table principles, gallery, contact, menu categories/items.
- [ ] **Step 2: Populate `site.ts`** with fictional Brussels contact details, `.example` email, hours, social handle, hero `À TABLE, AU SOLEIL.`, seasonal ingredients, shared plates, table principles, gallery and disclosure.
- [ ] **Step 3: Populate `menu.ts`** with categories `À partager`, `Légumes`, `Feu`, `Mer`, `Desserts`, `Boissons`; each item has name, concise description, euro price and optional dietary marker.
- [ ] **Step 4: Implement theme + metadata helpers** using only Terra CSS variables and `noindex, follow`.
- [ ] **Step 5: Implement `layout.tsx`** with scoped Fraunces/Manrope variables, Terra header/footer, main landmark and portfolio return link.
- [ ] **Step 6: Commit** with `feat: add Terra data and shell`.

### Task 3: Terra-owned visual primitives and homepage

**Files:**
- Create: `src/templates/restaurant-03/components/EditorialImage.tsx`
- Create: `src/templates/restaurant-03/components/SeasonStrip.tsx`
- Create: `src/templates/restaurant-03/components/SharedPlateRow.tsx`
- Create: `src/templates/restaurant-03/components/MenuExcerpt.tsx`
- Create: `src/templates/restaurant-03/components/PracticalPanel.tsx`
- Create: `src/templates/restaurant-03/pages/HomePage.tsx`
- Create: `app/sites/restaurant-03/page.tsx`

**Interfaces:**
- Consumes: `terraSite`, `terraMenu`, `createTerraMetadata()`.
- Produces: complete Terra homepage and reusable Terra-only editorial primitives.

- [ ] **Step 1: Implement hero** as 12-column tabletop composition: one landscape image, two supporting crops, independent text zone, one direct menu link.
- [ ] **Step 2: Implement seasonal strip** with one sentence + 3–4 ingredients.
- [ ] **Step 3: Implement shared-plate rows** with three deliberately different image/text placements.
- [ ] **Step 4: Implement market section, menu glimpse, room image sequence and practical end** without card shells.
- [ ] **Step 5: Route adapter exports Terra home metadata and `<HomePage />` only.
- [ ] **Step 6: Commit** with `feat: build Terra homepage`.

### Task 4: Menu, table, gallery, and contact pages

**Files:**
- Create: `src/templates/restaurant-03/pages/MenuPage.tsx`
- Create: `src/templates/restaurant-03/pages/TablePage.tsx`
- Create: `src/templates/restaurant-03/pages/GalleryPage.tsx`
- Create: `src/templates/restaurant-03/pages/ContactPage.tsx`
- Create: `app/sites/restaurant-03/menu/page.tsx`
- Create: `app/sites/restaurant-03/table/page.tsx`
- Create: `app/sites/restaurant-03/galerie/page.tsx`
- Create: `app/sites/restaurant-03/contact/page.tsx`

**Interfaces:**
- Consumes: Terra data/components/metadata.
- Produces: four explicit internal routes with exactly one `h1` each.

- [ ] **Step 1: Build Menu page** with readable grouped editorial rows, one/two image interruptions, allergen/demo note, no horizontal tables on mobile.
- [ ] **Step 2: Build La table page** with long-table opening image, `Partager / Saison / Feu`, ingredient/ceramic pair and short house note; no fake founder biography.
- [ ] **Step 3: Build Gallery page** with deterministic 8–10 image editorial mosaic; no logos, no District 88 contact-sheet treatment.
- [ ] **Step 4: Build Contact page** with large atmosphere/exterior image and offset practical information block; no form/map iframe.
- [ ] **Step 5: Add thin route adapters** with page-specific metadata.
- [ ] **Step 6: Run Terra smoke**; expected result: all five routes and content markers pass.
- [ ] **Step 7: Commit** with `feat: complete Terra restaurant routes`.

### Task 5: Terra visual system and responsive refinement

**Files:**
- Create: `src/templates/restaurant-03/styles/terra.css`
- Modify: Terra components/pages only as required by rendered QA.

**Interfaces:**
- Consumes: all Terra class names and CSS variables.
- Produces: the Mediterranean Table visual identity at all three target widths.

- [ ] **Step 1: Implement base composition** — stone/cream surfaces, terracotta/olive signals, 1px rules, 0 radius, Fraunces display rhythm, Manrope body rhythm.
- [ ] **Step 2: Implement desktop hero and staggered editorial grid** with one focal anchor per section and controlled overlaps only.
- [ ] **Step 3: Implement 768px rules** reducing overlaps and avoiding tiny two-column copy.
- [ ] **Step 4: Implement 375px flow** as a deliberate single-column editorial sequence; keep prices/text readable and remove horizontal overflow.
- [ ] **Step 5: Add restrained 120–220ms underline/image crop transitions and `prefers-reduced-motion` override.
- [ ] **Step 6: Run `npm run lint`, `npm run build`, and Terra smoke**; all must pass.
- [ ] **Step 7: Commit** with `style: finish Terra Mediterranean Table system`.

### Task 6: Browser QA, preview, and portfolio publication

**Files:**
- Create: `.github/workflows/terra-visual-qa.yml`
- Create: `scripts/capture-terra.mjs`
- Create binary: `public/previews/restaurant-03-home.webp`
- Modify: `src/portfolio/data/sites.ts`
- Modify: `scripts/smoke-terra.mjs`

**Interfaces:**
- Consumes: production Terra routes.
- Produces: visual-QA artifact, real homepage preview, and published portfolio entry.

- [ ] **Step 1: Capture** home/menu/gallery at 1440x1000, 768x1024, 375x812; capture table/contact at desktop and mobile.
- [ ] **Step 2: Review screenshots** for crop mistakes, brands/logos, awkward tangencies, excessive whitespace, overflow, broken hierarchy and accidental card-grid behavior.
- [ ] **Step 3: Fix every visual defect found and recapture affected views** until clean.
- [ ] **Step 4: Generate `restaurant-03-home.webp`** from the approved 1440px homepage capture, preserving a useful top-focused crop and valid WebP binary.
- [ ] **Step 5: Update portfolio registry**: summary becomes `Mediterranean Table — pierre claire, terre cuite, Fraunces organique, plats à partager et compositions photographiques baignées de soleil.`, status becomes `available`, preview points to `/previews/restaurant-03-home.webp`.
- [ ] **Step 6: Strengthen Terra smoke** to require `restaurant-03` is `available` and preview is present.
- [ ] **Step 7: Run final verification**: Terra workflow + general portfolio workflow + visual QA must be green on the exact final commit.
- [ ] **Step 8: Open PR** titled `feat: build Terra Mediterranean Table restaurant demo`, documenting routes, isolation, QA and publication state.
