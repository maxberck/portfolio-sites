# Restaurant 01 — Maison Silex Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Maison Silex as a complete five-page gastronomic restaurant demo that is visually distinct from Kuro, statically rendered, `noindex, follow`, client-editable through local data files, and published from the portfolio only after CI passes.

**Architecture:** Keep `app/sites/restaurant-01/*` as thin route adapters. All visual composition, data, metadata helpers, types, theme mapping and reusable local components live under `src/templates/restaurant-01/`. Do not share a restaurant renderer with Kuro; only infrastructure patterns may be mirrored.

**Tech Stack:** Next.js 16.3.4 App Router, React 19.2.8, TypeScript 5, Tailwind CSS 4, local CSS, `next/image`, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-09-10-restaurant-01-maison-silex-design.md`

## Global Constraints

- Existing project only; do not recreate it.
- Maison Silex remains fictional and `noindex, follow` inside the portfolio.
- Use Server Components by default; only mobile navigation may use client state.
- Do not create a generic restaurant renderer shared with Kuro.
- Client-editable colors must originate in `src/templates/restaurant-01/src/data/site.ts` and flow through CSS custom properties.
- All five routes must stay statically renderable.
- Do not add reservations, payments, auth, CMS, database, backend, maps API or third-party booking widgets.
- `restaurant-01` stays `planned` until the final CI gate passes.
- Kuro must remain available and reachable throughout the work.

---

## File Map

Create:

```text
app/sites/restaurant-01/layout.tsx
app/sites/restaurant-01/page.tsx
app/sites/restaurant-01/menu/page.tsx
app/sites/restaurant-01/maison/page.tsx
app/sites/restaurant-01/galerie/page.tsx
app/sites/restaurant-01/contact/page.tsx
src/templates/restaurant-01/types.ts
src/templates/restaurant-01/src/data/site.ts
src/templates/restaurant-01/src/data/menu.ts
src/templates/restaurant-01/lib/theme.ts
src/templates/restaurant-01/lib/metadata.ts
src/templates/restaurant-01/components/SilexHeader.tsx
src/templates/restaurant-01/components/SilexFooter.tsx
src/templates/restaurant-01/components/EditorialImage.tsx
src/templates/restaurant-01/components/SectionLabel.tsx
src/templates/restaurant-01/components/MenuLines.tsx
src/templates/restaurant-01/components/VisitPanel.tsx
src/templates/restaurant-01/pages/HomePage.tsx
src/templates/restaurant-01/pages/MenuPage.tsx
src/templates/restaurant-01/pages/MaisonPage.tsx
src/templates/restaurant-01/pages/GalleryPage.tsx
src/templates/restaurant-01/pages/ContactPage.tsx
src/templates/restaurant-01/styles/silex.css
```

Modify:

```text
.github/workflows/verify.yml
src/portfolio/data/sites.ts
```

Responsibilities:

- `types.ts`: narrow Maison Silex data contracts only.
- `site.ts`: all high-frequency client edits: identity, colors, navigation, contact, hours, hero, chef, gallery, SEO, disclosure.
- `menu.ts`: structured menu sections, tasting menu and pairings.
- `theme.ts`: map `site.ts` colors to CSS custom properties.
- `metadata.ts`: create page metadata with `noindex, follow`.
- `components/*`: reusable Maison Silex-only primitives.
- `pages/*`: route-level compositions; one meaningful `h1` each.
- `styles/silex.css`: scoped visual language under `.silex-site`.
- `app/sites/restaurant-01/*`: thin route adapters only.
- `verify.yml`: RED/GREEN route and publication checks.
- `sites.ts`: only final `planned` → `available` change for `restaurant-01`.

---

### Task 1: Add the Maison Silex RED smoke gate

**Files:**
- Modify: `.github/workflows/verify.yml`

**Interfaces:**
- Consumes: existing portfolio counts, Kuro route checks and rendered available-card count.
- Produces: failing assertions for five Maison Silex routes and final expected available count of 2.

- [ ] **Step 1: Add the branch trigger**

Add `feat/restaurant-01-maison-silex` to `on.push.branches` so every implementation commit runs verification.

- [ ] **Step 2: Add failing route probes after Kuro checks**

Add:

```bash
curl -fsS http://127.0.0.1:3000/sites/restaurant-01 > /tmp/silex-home.html
curl -fsS http://127.0.0.1:3000/sites/restaurant-01/menu > /tmp/silex-menu.html
curl -fsS http://127.0.0.1:3000/sites/restaurant-01/maison > /tmp/silex-maison.html
curl -fsS http://127.0.0.1:3000/sites/restaurant-01/galerie > /tmp/silex-gallery.html
curl -fsS http://127.0.0.1:3000/sites/restaurant-01/contact > /tmp/silex-contact.html
```

Then add content assertions that will eventually prove the intended pages:

```bash
for page in /tmp/silex-home.html /tmp/silex-menu.html /tmp/silex-maison.html /tmp/silex-gallery.html /tmp/silex-contact.html; do
  grep -q 'name="robots" content="noindex, follow"' "$page"
done

grep -q 'Une cuisine de saison, précise et sensible.' /tmp/silex-home.html
grep -q 'Menu dégustation' /tmp/silex-menu.html
grep -q 'La Maison' /tmp/silex-maison.html
grep -q 'Galerie' /tmp/silex-gallery.html
grep -q 'Adresse de démonstration' /tmp/silex-contact.html
```

Do **not** change the available-card expectation yet; `restaurant-01` must remain `planned` during implementation.

- [ ] **Step 3: Run CI and verify RED**

Expected result:
- `npm ci`: PASS
- `npm run lint`: PASS
- `npm run build`: PASS
- smoke test: FAIL on the first Maison Silex route with HTTP 404

This proves the test fails because the feature is absent, not because the repo is broken.

- [ ] **Step 4: Commit**

```bash
git add .github/workflows/verify.yml
git commit -m "test: require Maison Silex routes"
```

---

### Task 2: Build Maison Silex data contracts, theme and metadata

**Files:**
- Create: `src/templates/restaurant-01/types.ts`
- Create: `src/templates/restaurant-01/src/data/site.ts`
- Create: `src/templates/restaurant-01/src/data/menu.ts`
- Create: `src/templates/restaurant-01/lib/theme.ts`
- Create: `src/templates/restaurant-01/lib/metadata.ts`

**Interfaces:**
- Produces: `SilexSiteConfig`, `SilexImage`, `SilexMenuSection`, `silexSite`, `silexMenu`, `silexThemeStyle`, `createSilexMetadata()`.

- [ ] **Step 1: Define narrow types**

`types.ts` must export:

```ts
export type SilexNavItem = { label: string; href: string };
export type SilexHoursRow = { days: string; hours: string };
export type SilexImage = { src: string; alt: string; width: number; height: number; caption?: string };
export type SilexMenuItem = { name: string; description: string; price?: string };
export type SilexMenuSection = { title: string; intro?: string; items: SilexMenuItem[] };

export type SilexSiteConfig = {
  business: { name: string; descriptor: string };
  colors: {
    background: string;
    surface: string;
    text: string;
    muted: string;
    accent: string;
    line: string;
  };
  navigation: SilexNavItem[];
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    image: SilexImage;
  };
  chef: {
    name: string;
    role: string;
    quote: string;
    biography: string;
    image: SilexImage;
  };
  contact: { email: string; phone: string; location: string; access: string };
  hours: SilexHoursRow[];
  social: { instagram: string };
  gallery: SilexImage[];
  demoDisclosure: string;
  seo: { title: string; description: string };
};
```

- [ ] **Step 2: Create `site.ts`**

Use a fictional Brussels restaurant with `.example` email and explicit demo address wording. Required content values:

```ts
business: {
  name: "Maison Silex",
  descriptor: "Cuisine gastronomique de saison",
},
hero: {
  eyebrow: "Bruxelles · Cuisine gastronomique",
  title: "Une cuisine de saison, précise et sensible.",
  body: "Une table intime où le produit, la cuisson et le geste composent une expérience sans surcharge.",
  // image object with explicit dimensions and meaningful alt text
},
contact: {
  email: "bonjour@maisonsilex.example",
  phone: "+32 2 000 01 01",
  location: "Quartier Sainte-Catherine · 1000 Bruxelles · Adresse de démonstration",
  access: "À proximité de Sainte-Catherine. Donnée d'accès fictive pour cette démonstration.",
},
```

Use warm cream/mineral colors, a muted clay/oxblood accent and no metallic gold.

Navigation must point to:

```ts
[
  { label: "Accueil", href: "/sites/restaurant-01" },
  { label: "Menu", href: "/sites/restaurant-01/menu" },
  { label: "La Maison", href: "/sites/restaurant-01/maison" },
  { label: "Galerie", href: "/sites/restaurant-01/galerie" },
  { label: "Contact", href: "/sites/restaurant-01/contact" },
]
```

- [ ] **Step 3: Create `menu.ts`**

Export `silexMenu: SilexMenuSection[]` containing at least:

```ts
{
  title: "Menu dégustation",
  intro: "Six temps · inspiration du marché",
  items: [
    { name: "Poireau brûlé", description: "Crème fumée, noisette, huile de livèche" },
    { name: "Truite", description: "Oseille, beurre noisette, œufs fumés" },
    { name: "Canard", description: "Betterave, cassis, jus réduit" },
  ],
}
```

Include a clearly displayed tasting-menu price and optional pairing section without creating booking logic.

- [ ] **Step 4: Create theme adapter**

`lib/theme.ts` exports a `CSSProperties` object mapping colors to:

```text
--silex-background
--silex-surface
--silex-text
--silex-muted
--silex-accent
--silex-line
```

- [ ] **Step 5: Create metadata helper**

`createSilexMetadata(title, description): Metadata` returns title, description, `robots: { index: false, follow: true }`, and basic Open Graph fields.

- [ ] **Step 6: Commit**

```bash
git add src/templates/restaurant-01
git commit -m "feat: add Maison Silex content model"
```

---

### Task 3: Build the Maison Silex shell and editorial primitives

**Files:**
- Create: `src/templates/restaurant-01/components/SilexHeader.tsx`
- Create: `src/templates/restaurant-01/components/SilexFooter.tsx`
- Create: `src/templates/restaurant-01/components/EditorialImage.tsx`
- Create: `src/templates/restaurant-01/components/SectionLabel.tsx`
- Create: `src/templates/restaurant-01/components/MenuLines.tsx`
- Create: `src/templates/restaurant-01/components/VisitPanel.tsx`
- Create: `src/templates/restaurant-01/styles/silex.css`

**Interfaces:**
- Consumes: `silexSite`, `silexThemeStyle`, `SilexImage`, `SilexMenuSection`.
- Produces: local building blocks consumed by all five pages.

- [ ] **Step 1: Build `SilexHeader.tsx` as the only required Client Component**

Requirements:
- `"use client"`
- local `useState(false)` for mobile navigation
- brand wordmark at left
- desktop nav without pills
- mobile trigger with `aria-expanded`, `aria-controls`, accessible label
- close menu after navigation
- no restaurant booking CTA

- [ ] **Step 2: Build server-safe primitives**

`EditorialImage` uses `next/image` with explicit dimensions and class-name hooks for portrait/landscape treatment.

`SectionLabel` renders a small uppercase editorial eyebrow.

`MenuLines` renders semantic menu sections using headings, descriptions and price text, never rounded cards.

`VisitPanel` renders contact + opening hours from `site.ts`.

`SilexFooter` renders brand, practical links, demo disclosure and a discreet portfolio-return link.

- [ ] **Step 3: Create scoped `silex.css`**

Root all rules under `.silex-site`.

The visual grammar must include:
- warm cream base
- serif-led display typography with large scale contrast
- thin mineral dividers
- asymmetrical grids
- overlapping image/text relationships only at desktop/tablet sizes where collision is impossible
- square/near-square controls, no generic rounded-card system
- visible `:focus-visible`
- mobile breakpoint that removes overlaps and horizontal overflow
- `prefers-reduced-motion` guard if transitions are used

Do not copy Kuro selectors or its vertical layout structure.

- [ ] **Step 4: Commit**

```bash
git add src/templates/restaurant-01/components src/templates/restaurant-01/styles
git commit -m "feat: build Maison Silex editorial shell"
```

---

### Task 4: Compose the five Maison Silex pages

**Files:**
- Create: `src/templates/restaurant-01/pages/HomePage.tsx`
- Create: `src/templates/restaurant-01/pages/MenuPage.tsx`
- Create: `src/templates/restaurant-01/pages/MaisonPage.tsx`
- Create: `src/templates/restaurant-01/pages/GalleryPage.tsx`
- Create: `src/templates/restaurant-01/pages/ContactPage.tsx`

**Interfaces:**
- Consumes: local components + data files.
- Produces: five server-renderable page components, each with one meaningful `h1`.

- [ ] **Step 1: Home page**

Composition order:
1. asymmetrical hero with dominant macro food image
2. seasonal statement with ingredient list
3. three signature dishes with mixed image ratios
4. chef/maison fragment with pull quote
5. compact menu preview
6. visit information

Exact primary `h1`: `Une cuisine de saison, précise et sensible.`

- [ ] **Step 2: Menu page**

Use `MenuLines` to render the full structured menu, tasting price and optional pairing. One `h1` containing `Menu dégustation`. No card grid.

- [ ] **Step 3: Maison page**

Use a different order from home: philosophy → chef profile → dining room → ingredient/supplier philosophy → service approach. One `h1` containing `La Maison`.

- [ ] **Step 4: Gallery page**

Desktop: mixed ratios and asymmetric columns. Mobile: stable single column. One `h1` containing `Galerie`.

- [ ] **Step 5: Contact page**

Render `Adresse de démonstration`, hours, phone, `.example` email, access note and demo disclosure. No form, map or booking integration.

- [ ] **Step 6: Commit**

```bash
git add src/templates/restaurant-01/pages
git commit -m "feat: compose Maison Silex pages"
```

---

### Task 5: Expose explicit Next.js routes and metadata

**Files:**
- Create: `app/sites/restaurant-01/layout.tsx`
- Create: `app/sites/restaurant-01/page.tsx`
- Create: `app/sites/restaurant-01/menu/page.tsx`
- Create: `app/sites/restaurant-01/maison/page.tsx`
- Create: `app/sites/restaurant-01/galerie/page.tsx`
- Create: `app/sites/restaurant-01/contact/page.tsx`

**Interfaces:**
- Consumes: `silexSite`, `silexThemeStyle`, `createSilexMetadata`, five page components.
- Produces: five explicit statically renderable App Router routes.

- [ ] **Step 1: Create route layout**

Import `silex.css`, apply `.silex-site` and `silexThemeStyle`, render `SilexHeader`, `<main>{children}</main>`, then `SilexFooter`.

Export layout metadata using `silexSite.seo` with robots `noindex, follow`.

- [ ] **Step 2: Create thin page adapters**

Each route file:
- imports one Maison Silex page component
- exports unique metadata via `createSilexMetadata()`
- returns only that page component

No business content should be duplicated in route files.

- [ ] **Step 3: Run CI for the first GREEN route gate**

Expected:
- lint PASS
- build PASS
- all five Maison Silex `curl` requests PASS
- all five `noindex, follow` checks PASS
- content checks PASS
- available count remains 1 because Maison Silex is still `planned`

- [ ] **Step 4: Commit**

```bash
git add app/sites/restaurant-01
git commit -m "feat: expose Maison Silex routes"
```

---

### Task 6: Publish Maison Silex in the catalogue and tighten final CI

**Files:**
- Modify: `src/portfolio/data/sites.ts`
- Modify: `.github/workflows/verify.yml`

**Interfaces:**
- Consumes: fully verified Maison Silex routes.
- Produces: second available portfolio demo and final regression gate.

- [ ] **Step 1: Change only Maison Silex status**

Change:

```ts
id: "restaurant-01",
status: "planned",
```

to:

```ts
id: "restaurant-01",
status: "available",
```

Do not alter any other status.

- [ ] **Step 2: Tighten portfolio assertions**

Add:

```bash
grep -q 'href="/sites/restaurant-01"' /tmp/restaurant.html
available_count=$(grep -oE '<article[^>]*site-card--available[^>]*>' /tmp/home.html | wc -l | tr -d ' ')
echo "Available demos: $available_count"
test "$available_count" -eq 2
```

Keep the Kuro route checks intact so Maison Silex cannot regress the reference template.

- [ ] **Step 3: Run final verification**

Expected:
- `npm ci` PASS
- `npm run lint` PASS
- `npm run build` PASS
- 16 homepage cards PASS
- 4 cards per category PASS
- 5 Kuro routes PASS
- 5 Maison Silex routes PASS
- `noindex, follow` PASS for both demos
- exactly 2 rendered available cards PASS

- [ ] **Step 4: Review scope against `main`**

The diff should contain only:
- Maison Silex spec/plan
- `app/sites/restaurant-01/*`
- `src/templates/restaurant-01/*`
- CI extensions
- one `restaurant-01` status change

No other template implementation may appear.

- [ ] **Step 5: Commit final publication**

```bash
git add src/portfolio/data/sites.ts .github/workflows/verify.yml
git commit -m "feat: publish Maison Silex demo"
```

---

## Completion Gate

Maison Silex is complete only when the final branch head has a fresh successful GitHub Actions run proving lint, production build and HTTP smoke checks, while Kuro remains green and the catalogue has exactly two available demos. Visual multi-viewport browser inspection remains a separate manual Designly QA gate and must not be claimed from CI alone.
