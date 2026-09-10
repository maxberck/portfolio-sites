# Portfolio Swiss × Brutalist Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio homepage and category pages into the approved 65% Swiss / 35% Brutalist showcase, with precise descriptions and available demos opening in a new tab.

**Architecture:** Keep the existing portfolio data/domain model and demo routes. Replace only the portfolio presentation layer: catalogue ordering/layout, project tile rendering, header/footer/category composition, copy, and CSS. Available demos remain real routes with real browser previews; planned demos remain non-clickable. Kuro and Maison Silex internal template files are not modified.

**Tech Stack:** Next.js 16.3.4 App Router, React 19.2.8, TypeScript 5, Tailwind 4 project baseline, scoped plain CSS for portfolio presentation, GitHub Actions, Playwright CLI for browser QA.

**Spec:** `docs/superpowers/specs/2026-09-10-portfolio-swiss-brutalist-design.md`

## Global Constraints

- Portfolio is a showcase only: no `Créer mon site`, no commercial funnel, no brief/order form.
- Visual direction is 65% Swiss-style / 35% Brutalist.
- Palette: `#f3f3ef`, `#0a0a0a`, `#ffffff`, `#d8d8d2`, `#2447ff`.
- Typography: Arial/Helvetica system sans + system monospace; no serif.
- Available demos open with `target="_blank" rel="noreferrer"`; internal demo navigation stays normal.
- `available` requires a real `public/previews/<site-id>-home.webp` preview; `planned` never fakes one.
- Homepage keeps 16 projects; each category keeps 4 projects.
- Planned descriptions must be prospective; available descriptions must describe visible design characteristics.
- Do not modify internal Kuro or Maison Silex template/routes in this sub-project.
- Browser QA is required at 1440×1000, 768×1024, and 375×812.

---

### Task 1: Turn the approved portfolio contract into a RED CI gate

**Files:**
- Modify: `.github/workflows/verify.yml`

**Interfaces:**
- Consumes: rendered homepage/category HTML and existing demo routes.
- Produces: CI assertions that all later tasks must satisfy.

- [ ] **Step 1: Make feature branches verifiable on push and replace obsolete commercial assertions**

Change the push branch filter to include `feat/**` and `fix/**`, then replace the old homepage checks for `Des sites qui ressemblent à de vraies marques.` and `Créer mon site` with assertions equivalent to:

```bash
grep -q 'PORTFOLIO / SITES VITRINES' /tmp/home.html
grep -q '16 projets. 4 catégories.' /tmp/home.html
grep -q 'Garage, restaurant, coiffure et tattoo' /tmp/home.html
! grep -q 'Créer mon site' /tmp/home.html
! grep -q 'Faire créer mon site' /tmp/home.html
! grep -q 'Comment ça marche' /tmp/home.html
! grep -q 'Adapté à votre activité' /tmp/home.html

grep -q 'target="_blank"' /tmp/home.html
grep -q 'rel="noreferrer"' /tmp/home.html
grep -q 'Voir la démo' /tmp/home.html

grep -q 'Minimal japonais — ivoire et charbon' /tmp/home.html
grep -q 'Gastronomique éditorial — photographie plein écran' /tmp/home.html

grep -q 'Direction prévue :' /tmp/home.html
! grep -qi '<iframe' /tmp/home.html
```

Keep the existing 16/4/4/4/4 counts, real preview checks, Kuro/Silex route smoke tests, and noindex assertions.

- [ ] **Step 2: Run CI and verify the RED reason**

Expected: install/lint/build remain green; smoke test fails because the old portfolio still contains old hero/commercial copy and available links do not yet have the approved new-tab contract.

- [ ] **Step 3: Commit the RED gate**

```bash
git add .github/workflows/verify.yml
git commit -m "test: define Swiss Brutalist portfolio contract"
```

---

### Task 2: Fix catalogue descriptions and project-link semantics

**Files:**
- Modify: `src/portfolio/data/sites.ts`
- Modify: `src/portfolio/components/SiteCard.tsx`

**Interfaces:**
- Consumes: `PortfolioSite` with `status`, `preview`, `href`, `direction`, `summary`.
- Produces: factual/prospective descriptions and external-context opening behavior for available demos.

- [ ] **Step 1: Rewrite catalogue descriptions**

Use these exact available summaries:

```ts
// restaurant-01
summary: "Gastronomique éditorial — photographie plein écran, Bodoni expressive, bordeaux profond et compositions en chapitres.",

// restaurant-04
summary: "Minimal japonais — ivoire et charbon, lignes fines, rythme calme et mise en page disciplinée.",
```

For every planned project, prefix the summary with `Direction prévue :` and keep it concrete. Examples:

```ts
summary: "Direction prévue : photographie automobile cinématographique, grands aplats noirs et composition très espacée.",
summary: "Direction prévue : grille industrielle, typographie utilitaire et données atelier très structurées.",
summary: "Direction prévue : affiches street-food denses, typographie condensée massive et photos au flash.",
```

Apply the same prospective wording discipline to all 14 planned projects.

- [ ] **Step 2: Make available demo links open in a new tab**

In `SiteCard`, render the available project link as:

```tsx
<Link
  className="site-card__link"
  href={site.href}
  prefetch={false}
  target="_blank"
  rel="noreferrer"
  aria-label={`${site.name} — voir la démo (nouvel onglet)`}
>
```

Keep planned projects non-clickable.

Add a visible micro-label inside available cards:

```tsx
<span className="site-card__status">Voir la démo ↗</span>
```

Planned projects keep `En préparation`.

- [ ] **Step 3: Push and confirm CI progresses past description/new-tab assertions**

Expected: those checks pass; homepage visual/copy checks may still fail until Tasks 3–5.

- [ ] **Step 4: Commit**

```bash
git add src/portfolio/data/sites.ts src/portfolio/components/SiteCard.tsx
git commit -m "feat: clarify project descriptions and demo links"
```

---

### Task 3: Rebuild the portfolio shell and category copy as a pure showcase

**Files:**
- Modify: `src/portfolio/components/PortfolioHeader.tsx`
- Modify: `src/portfolio/components/PortfolioFooter.tsx`
- Modify: `src/portfolio/components/CategoryPage.tsx`
- Modify: `src/portfolio/components/CategoryNavigation.tsx` only if active-state markup needs a hook.

**Interfaces:**
- Consumes: `siteCategories`, `getSitesByCategory`, existing routes.
- Produces: showcase-only shell with no commercial CTA/copy.

- [ ] **Step 1: Replace the header**

Desktop structure:

```tsx
<header className="portfolio-header" data-portfolio-header="swiss-brutalist">
  <div className="portfolio-header__inner">
    <Link className="portfolio-brand" href="/">
      <span className="portfolio-brand__name">Sites vitrines</span>
      <span className="portfolio-brand__meta">16 projets / 4 catégories</span>
    </Link>
    <nav className="portfolio-header__nav" aria-label="Catégories du portfolio">
      <Link href="/">Tous</Link>
      {/* 4 category links */}
    </nav>
  </div>
</header>
```

Do not render any CTA. Add a mobile menu only if necessary for the same five navigation destinations; do not add new destinations.

- [ ] **Step 2: Replace footer copy**

Footer content must be limited to:

```text
Sites vitrines / Portfolio 2026
Garage · Restaurant · Coiffure · Tattoo
GitHub
© 2026
```

No adaptation, order, contact, or sales sentence.

- [ ] **Step 3: Rebuild category page copy**

Replace `4 directions pour votre ...` and adaptation sales sections with factual category information:

```tsx
<p className="portfolio-kicker">CATÉGORIE / {definition.label.toUpperCase()}</p>
<h1>{definition.label} / 04 projets</h1>
<p>{definition.description}</p>
```

Render only: category hero, category navigation, four project tiles, and `← Tous les projets`. Delete the entire `category-sales` section.

- [ ] **Step 4: Verify source no longer contains forbidden showcase copy**

Search changed source for:

```text
Créer mon site
Faire créer mon site
Comment ça marche
adaptée à votre activité
```

Expected: zero portfolio UI matches.

- [ ] **Step 5: Commit**

```bash
git add src/portfolio/components/PortfolioHeader.tsx src/portfolio/components/PortfolioFooter.tsx src/portfolio/components/CategoryPage.tsx src/portfolio/components/CategoryNavigation.tsx
git commit -m "feat: simplify portfolio showcase shell"
```

---

### Task 4: Recompose homepage and catalogue rhythm

**Files:**
- Modify: `app/(portfolio)/page.tsx`
- Modify: `src/portfolio/components/CatalogueGrid.tsx`

**Interfaces:**
- Consumes: `portfolioSites`, `siteCategories`, `SiteCard`.
- Produces: hero + featured catalogue + category index with deterministic Swiss/Brutalist rhythm.

- [ ] **Step 1: Replace homepage content**

Homepage must contain exactly these lead strings:

```tsx
<p className="portfolio-kicker">PORTFOLIO / SITES VITRINES</p>
<h1>16 projets. 4 catégories.</h1>
<p>Garage, restaurant, coiffure et tattoo — des directions visuelles volontairement différentes.</p>
<a href="#catalogue">Explorer ↓</a>
```

Delete `adaptation-section` and `sales-cta` entirely.

Keep `availableCount` and expose it as concise metadata such as `02 / 16 disponibles`.

- [ ] **Step 2: Make the available pair deterministic**

Order homepage catalogue as:

```ts
const availableSites = portfolioSites.filter((site) => site.status === "available");
const plannedSites = portfolioSites.filter((site) => site.status === "planned");
const catalogueSites = [
  ...availableSites.sort((a, b) => {
    if (a.id === "restaurant-04") return -1;
    if (b.id === "restaurant-04") return 1;
    return a.id.localeCompare(b.id);
  }),
  ...plannedSites,
];
```

This ensures Kuro is the first 8-column feature and Silex the following 4-column feature under the current two-demo state.

- [ ] **Step 3: Replace `getLayoutVariant` with a deterministic span pattern**

Use an explicit class derived from index:

```ts
const spanPattern = ["wide", "narrow", "half", "half", "narrow", "wide"] as const;

function getLayoutVariant(index: number) {
  return spanPattern[index % spanPattern.length];
}
```

CSS mapping will be `wide = 8`, `narrow = 4`, `half = 6` columns. No status-based forced common ratio.

- [ ] **Step 4: Keep category index as large typographic rows**

Each row must expose `01 — GARAGE` and `04 projets` rather than card-like marketing descriptions.

- [ ] **Step 5: Commit**

```bash
git add app/'(portfolio)'/page.tsx src/portfolio/components/CatalogueGrid.tsx
git commit -m "feat: recompose portfolio project index"
```

---

### Task 5: Replace the portfolio visual system with Swiss × Brutalist CSS

**Files:**
- Modify: `src/portfolio/styles/portfolio.css`

**Interfaces:**
- Consumes: class hooks from Tasks 2–4.
- Produces: responsive 12-column Swiss grid with controlled Brutalist disruption.

- [ ] **Step 1: Replace design tokens**

Use:

```css
.portfolio-shell {
  --portfolio-bg: #f3f3ef;
  --portfolio-surface: #ffffff;
  --portfolio-text: #0a0a0a;
  --portfolio-muted: #5f5f5a;
  --portfolio-line: #d8d8d2;
  --portfolio-accent: #2447ff;
  --portfolio-max: 1540px;
  background: var(--portfolio-bg);
  color: var(--portfolio-text);
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
```

Use square corners, no decorative shadows, no gradients, no glass effects.

- [ ] **Step 2: Build the compact sticky header and short hero**

Required properties:

```css
.portfolio-header { position: sticky; top: 0; border-bottom: 2px solid #0a0a0a; }
.portfolio-hero__grid { min-height: min(55svh, 560px); grid-template-columns: repeat(12, minmax(0, 1fr)); }
.portfolio-hero h1 { font-size: clamp(4rem, 8vw, 9rem); font-weight: 900; line-height: .86; }
```

Use black rules and blue only for selected labels/active states.

- [ ] **Step 3: Implement project spans and hard-edged tiles**

```css
.catalogue-grid { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); }
.catalogue-grid__item--wide { grid-column: span 8; }
.catalogue-grid__item--narrow { grid-column: span 4; }
.catalogue-grid__item--half { grid-column: span 6; }
.site-card__preview { border: 2px solid var(--portfolio-text); border-radius: 0; }
```

Make available preview imagery dominant. Planned blocks use typography, number, category, and direction only; no decorative pseudo-mockups.

- [ ] **Step 4: Build large category-index rows**

Rows use strong horizontal rules, oversized uppercase category names, project count aligned to the right, and blue inversion on hover/focus. No card containers.

- [ ] **Step 5: Responsive rules**

Tablet: preserve 7/5 or collapse when text becomes cramped. Mobile: one column for all projects; preview width 100%; header navigation becomes horizontally scrollable or a compact menu; no horizontal page overflow.

Include:

```css
@media (prefers-reduced-motion: reduce) {
  .portfolio-shell * { scroll-behavior: auto !important; }
  .site-card__preview img,
  .site-card__status { transition: none !important; transform: none !important; }
}
```

- [ ] **Step 6: Run CI**

Expected: `npm ci`, lint, build, and all smoke assertions green.

- [ ] **Step 7: Commit**

```bash
git add src/portfolio/styles/portfolio.css
git commit -m "feat: apply Swiss Brutalist portfolio art direction"
```

---

### Task 6: Run real browser QA and revise only evidenced defects

**Files:**
- Modify: `.github/workflows/visual-qa.yml`
- Modify only evidenced portfolio files if QA fails.

**Interfaces:**
- Consumes: real production build.
- Produces: browser-rendered artifacts for homepage and restaurant category at three breakpoints.

- [ ] **Step 1: Retarget visual QA workflow to the current feature branch and capture six views**

Use `feat/portfolio-swiss-brutalist` and capture:

```text
/ @ 1440x1000
/ @ 768x1024
/ @ 375x812
/categories/restaurant @ 1440x1000
/categories/restaurant @ 768x1024
/categories/restaurant @ 375x812
```

Use full-page screenshots for at least the desktop homepage and desktop restaurant category so spacing below the fold is inspected.

- [ ] **Step 2: Run and inspect with Designly visual QA criteria**

Check actual renders for: one-second hierarchy, thumbnail silhouette, no accidental dead space, no equal-emphasis slop, no SaaS-card repetition, no clipped type, no squeezed previews, clear new-tab demo affordance, and no forbidden commercial CTA.

- [ ] **Step 3: If QA exposes a defect, fix only the responsible CSS/markup and rerun the same captures**

Do not change Kuro/Silex internals to make portfolio screenshots look better.

- [ ] **Step 4: Final CI verification on exact head**

Expected all steps green: install, lint, production build, smoke tests.

- [ ] **Step 5: Commit QA workflow/final fixes**

```bash
git add .github/workflows/visual-qa.yml src/portfolio app/'(portfolio)'
git commit -m "test: verify Swiss Brutalist portfolio visually"
```

---

### Task 7: Final branch review and PR

**Files:**
- No product files unless review finds a concrete defect.

**Interfaces:**
- Consumes: final branch head and `main`.
- Produces: reviewable PR limited to portfolio presentation and CI/QA support.

- [ ] **Step 1: Compare branch to `main`**

Verify no files under `src/templates/restaurant-04`, `app/sites/restaurant-04`, `src/templates/restaurant-01`, or `app/sites/restaurant-01` changed.

- [ ] **Step 2: Verify exact-head CI is green**

Do not rely on a previous SHA.

- [ ] **Step 3: Open PR**

PR summary must mention: Swiss/Brutalist redesign, showcase-only copy, varied project spans, real previews, factual/prospective descriptions, new-tab demo links, 16/4 counts, responsive browser QA, and no demo-template changes.
