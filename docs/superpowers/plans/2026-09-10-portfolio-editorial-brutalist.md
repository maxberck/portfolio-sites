# Portfolio Editorial Brutalism Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the portfolio shell into the approved functional editorial brutalist direction while keeping every demo template visually unchanged.

**Architecture:** Keep the existing App Router and portfolio data/component boundaries. Change only portfolio presentation, portfolio copy, smoke-test assertions and visual-QA expectations. Preserve real preview assets and new-tab demo links.

**Tech Stack:** Next.js 16.3.4, React 19.2.8, TypeScript 5, CSS, GitHub Actions, Playwright screenshots.

**Spec:** `docs/superpowers/specs/2026-09-10-portfolio-editorial-brutalist-design.md`

## Global Constraints

- Portfolio only; do not modify `src/templates/**` or `app/sites/**`.
- No `Créer mon site` or commercial funnel.
- No decorative project/category numbering or availability counters.
- Keep Kuro and Maison Silex real previews and new-tab links.
- Planned demos remain clearly non-live.
- Garage copy describes repair, maintenance, diagnostics and breakdown assistance only.
- Preserve responsive/accessibility behavior and reduced-motion support.

---

### Task 1: Turn the approved visual rules into a failing CI contract

**Files:**
- Modify: `.github/workflows/verify.yml`

**Interfaces:**
- Consumes: rendered homepage/category HTML.
- Produces: a RED smoke gate that rejects the previous numbered Swiss-heavy markup.

- [ ] **Step 1: Replace old hero assertions**

Assert:

```bash
grep -q 'Sites vitrines\.' /tmp/home.html
grep -q 'Garage, restaurant, coiffure, tattoo\.' /tmp/home.html
! grep -q '16 projets. 4 catégories.' /tmp/home.html
! grep -q '/ 16 disponibles' /tmp/home.html
```

- [ ] **Step 2: Reject decorative number markup**

```bash
! grep -q 'category-directory__index' /tmp/home.html
! grep -q 'site-card__planned-top' /tmp/home.html
! grep -q 'site-card__title-number' /tmp/home.html
! grep -q '04 / 16' /tmp/restaurant.html
```

- [ ] **Step 3: Lock garage semantics**

```bash
grep -qi 'réparation' /tmp/garage.html
grep -qi 'entretien' /tmp/garage.html
grep -qi 'diagnostic' /tmp/garage.html
grep -qi 'dépannage' /tmp/garage.html
! grep -qi 'création de voiture' /tmp/garage.html
! grep -qi 'fabrication de voiture' /tmp/garage.html
```

- [ ] **Step 4: Run CI and confirm RED**

Expected: install/lint/build pass, smoke test fails on new brutalist markup assertions.

- [ ] **Step 5: Commit**

```bash
git add .github/workflows/verify.yml
git commit -m "test: require editorial brutalist portfolio"
```

---

### Task 2: Simplify portfolio shell and remove decorative numbering

**Files:**
- Modify: `src/portfolio/components/PortfolioHeader.tsx`
- Modify: `app/(portfolio)/page.tsx`
- Modify: `src/portfolio/components/CategoryPage.tsx`
- Modify: `src/portfolio/components/SiteCard.tsx`

**Interfaces:**
- Consumes: existing `portfolioSites` and `siteCategories`.
- Produces: simpler authored markup with no decorative counters/numbers.

- [ ] **Step 1: Header**

Keep brand + category navigation. Remove `portfolio-brand__meta` and remove numeric spans from mobile links. Keep native `<details>` mobile menu.

- [ ] **Step 2: Homepage hero**

Use:

```tsx
<p className="portfolio-hero__label">Portfolio</p>
<h1 id="portfolio-title">Sites vitrines.</h1>
<p className="portfolio-hero__categories">Garage, restaurant, coiffure, tattoo.</p>
<p className="portfolio-hero__intro">Des démos navigables, chacune avec sa propre direction visuelle.</p>
```

Remove availability counter and old kicker-heavy composition.

- [ ] **Step 3: Category directory**

Render category rows without `<ol>` numbering, project counts or numeric indices. Each row contains category name + arrow only.

- [ ] **Step 4: Category hero**

Render the category name alone as `h1`, followed by concrete category description. Remove `04 projets` and `04 / 16`.

- [ ] **Step 5: SiteCard project plate**

Remove `number`, `site-card__planned-top`, and number span in title row. Available project uses real preview + factual info + `Ouvrir la démo ↗`. Planned project uses a flat typographic field with direction + `En préparation`.

- [ ] **Step 6: Lint/build**

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add app/'(portfolio)'/page.tsx src/portfolio/components
git commit -m "feat: simplify portfolio into project plates"
```

---

### Task 3: Correct portfolio copy, especially garage positioning

**Files:**
- Modify: `src/portfolio/data/sites.ts`

**Interfaces:**
- Consumes: `PortfolioSite[]` registry.
- Produces: factual category/site descriptions used by home and category pages.

- [ ] **Step 1: Garage category description**

Use copy that explicitly names `réparation`, `entretien`, `diagnostic` and `dépannage`.

- [ ] **Step 2: Rewrite four garage summaries**

- Atelier Noir: premium maintenance/repair/diagnostics.
- Torque Works: mechanical repair/heavy maintenance/technical diagnostics.
- Apex Motorsport: performance maintenance/setup/diagnostics.
- Studio Motor: maintenance/breakdown assistance/workshop service.

No vehicle creation/manufacturing language.

- [ ] **Step 3: Keep available restaurant descriptions factual**

Do not replace the current visible Kuro/Silex summaries with generic marketing language.

- [ ] **Step 4: Run lint/build**

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/portfolio/data/sites.ts
git commit -m "copy: position garages as repair services"
```

---

### Task 4: Rebuild portfolio CSS around functional editorial brutalism

**Files:**
- Modify: `src/portfolio/styles/portfolio.css`

**Interfaces:**
- Consumes: new markup classes from Task 2.
- Produces: responsive brutalist editorial visual system.

- [ ] **Step 1: Reduce token system**

Use paper/ink/muted/wash/signal blue/white only. Remove global monospace assignment list.

- [ ] **Step 2: Header styling**

Sticky paper header, strong bottom rule, plain text links, blue only on focused/active interaction. No metadata line.

- [ ] **Step 3: Hero styling**

Large black headline with intentionally compressed leading. Keep hero compact enough that the catalogue begins quickly. Use one blue structural rule/accent only.

- [ ] **Step 4: Project plates**

Preserve asymmetric 12-column spans. Real previews get minimal framing, large image area and restrained hover. Remove overlay CTA badge, status pill, repeated boxed metadata and number styling.

Planned fields use flat wash/ink surfaces and large direction text without fake screenshot chrome.

- [ ] **Step 5: Category directory**

Large text rows with generous whitespace and one rule between entries. No index/count columns.

- [ ] **Step 6: Responsive**

At <=820px preserve two-column rhythm where readable. At <=560px use one column, 44px touch targets, no overflow, full-height mobile menu.

- [ ] **Step 7: Reduced motion/focus**

Keep visible focus and disable the single preview transition for reduced-motion users.

- [ ] **Step 8: Run lint/build**

Expected: PASS.

- [ ] **Step 9: Commit**

```bash
git add src/portfolio/styles/portfolio.css
git commit -m "style: push portfolio toward editorial brutalism"
```

---

### Task 5: Verify GREEN and perform actual visual QA

**Files:**
- Modify if needed: `.github/workflows/visual-qa.yml`
- No template files.

**Interfaces:**
- Consumes: final built portfolio.
- Produces: test evidence and screenshot artifact.

- [ ] **Step 1: Run Verify portfolio**

Expected: npm ci, lint, build and smoke all PASS.

- [ ] **Step 2: Capture home + Restaurant**

Capture full-page screenshots at:

- 1440×1000
- 768×1024
- 375×812

- [ ] **Step 3: Designly review**

Inspect actual screenshots for:

- one primary focal point per viewport;
- no accidental tangencies;
- no dead hero whitespace;
- no decorative numbering;
- no repetitive SaaS cards;
- no fake previews;
- category nav readability;
- mobile no horizontal overflow;
- previews large enough to judge Kuro/Silex;
- overall result does not read as an AI-generated brutalist template.

- [ ] **Step 4: Correct only observed defects**

If QA fails, patch the responsible CSS/markup and rerun screenshots.

- [ ] **Step 5: Verify template isolation**

Compare against base and confirm no paths under `src/templates/**` or `app/sites/**` changed.

- [ ] **Step 6: Update PR #13 description**

Replace the old `65% Swiss / 35% Brutalist` summary with `functional editorial brutalism`, mention removal of decorative numbering and garage service-copy correction, and attach verification evidence.
