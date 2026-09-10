# Portfolio Technical Minimalist Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current AI-looking brutalist catalogue with a Technical Minimalist editorial portfolio while keeping existing showcase behavior and all demo templates untouched.

**Architecture:** Keep the existing Next.js portfolio route group and data registry. Change only portfolio layout/components/styles/tests, reduce homepage project rendering to a curated four-project selection, and keep full four-project discovery on category pages. Use scoped `next/font` variables and a CSS-only mosaic background.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, CSS, `next/font/google`, GitHub Actions + Playwright screenshots.

**Spec:** `docs/superpowers/specs/2026-09-10-portfolio-technical-minimalist-design.md`

## Global Constraints
- Portfolio only; no `Créer mon site`, commercial funnel, quote form or purchase flow.
- Demo links remain real navigable sites and open in a new tab.
- `src/templates/**` and `app/sites/**` must not change.
- Homepage renders exactly four selected projects.
- Category pages render exactly four projects each.
- Garage content means repair, maintenance, diagnostics and breakdown assistance only.
- Paper `#F7F7F5`, Forest `#1A3C2B`, Grid `#3A3A38`, Coral `#FF8C69`, Mint `#9EFFBF`, Gold `#F4D35E`.
- No shadows, gradients, decorative numbering, fake screenshots or oversized footer nav.

---

### Task 1: Red verification contract

**Files:**
- Modify: `.github/workflows/verify.yml`

**Interfaces:**
- Consumes: existing rendered portfolio HTML.
- Produces: failing assertions for the new homepage count and Technical Minimalist markers.

- [ ] Add assertions that `/` contains exactly four unique `data-site-card` values, contains `data-portfolio-design="technical-minimalist"`, contains `data-home-selection="curated"`, and does not contain the old `16 projets. 4 catégories.` hero copy.
- [ ] Keep four-card assertions for every category route and existing demo/noindex checks.
- [ ] Run the workflow and verify install/lint/build pass but smoke fails against the old UI.

### Task 2: Durable portfolio design context and fonts

**Files:**
- Create: `DESIGN.md`
- Modify: `app/(portfolio)/layout.tsx`

**Interfaces:**
- Produces: `--font-portfolio-display` and `--font-portfolio-mono` CSS variables scoped to `.portfolio-shell`.

- [ ] Document the portfolio-only Technical Minimalist system in `DESIGN.md`, explicitly excluding demo templates.
- [ ] Load `Space_Grotesk` and `JetBrains_Mono` with `next/font/google` in the portfolio layout.
- [ ] Add `data-portfolio-design="technical-minimalist"` to the shell.
- [ ] Keep body fallback neutral sans and avoid remote CSS font imports.

### Task 3: Recompose navigation and homepage

**Files:**
- Modify: `src/portfolio/components/PortfolioHeader.tsx`
- Modify: `app/(portfolio)/page.tsx`

**Interfaces:**
- Consumes: `siteCategories`, `portfolioSites`.
- Produces: fixed technical nav and exactly four homepage selected projects.

- [ ] Replace header metadata/counters with a 32px Forest CSS mark, wordmark and category nav without numeric prefixes.
- [ ] Keep semantic mobile `<details>` navigation with category links and 44px targets.
- [ ] Define selected IDs exactly as `restaurant-04`, `restaurant-01`, `garage-01`, `coiffure-02`.
- [ ] Build hero with `SITES VITRINES`, factual supporting copy and a real Kuro preview technical frame.
- [ ] Render the selected four through `CatalogueGrid` in showcase mode.
- [ ] Render a compact four-category directory beneath selection.

### Task 4: Rebuild project presentation

**Files:**
- Modify: `src/portfolio/components/CatalogueGrid.tsx`
- Modify: `src/portfolio/components/SiteCard.tsx`
- Modify: `src/portfolio/components/CategoryPage.tsx`

**Interfaces:**
- `CatalogueGrid({ sites, variant?: "showcase" | "category" })`.
- `SiteCard({ site, placement?: "anchor" | "tall" | "compact" | "standard" })`.

- [ ] Add showcase placements so the first four homepage items form an asymmetric bento rather than identical cards.
- [ ] Available cards keep real `next/image` previews and new-tab demo links.
- [ ] Planned cards remain typographic direction blocks with no fake image.
- [ ] Remove decorative numbering and badge overlays.
- [ ] Category pages use the category variant, not the homepage bento, and retain four projects.

### Task 5: Rewrite the portfolio visual system

**Files:**
- Modify: `src/portfolio/styles/portfolio.css`

**Interfaces:**
- Consumes: font variables and component class names from Tasks 2–4.

- [ ] Replace blue with Forest and remove obsolete Swiss-Brutalist counter styles.
- [ ] Add low-contrast repeating inline-SVG mosaic background using Paper fill and Grid hairlines.
- [ ] Implement fixed header, technical hero frame/orbit, asymmetric bento selection and compact category directory.
- [ ] Apply luminosity/90% treatment to real previews, full color on hover/focus, with reduced-motion override.
- [ ] Use 1px dividers, 0–2px radius, no shadows or gradients.
- [ ] Keep responsive behavior stable at 1440, 768 and 375px with no clipping.

### Task 6: Copy and Garage semantics

**Files:**
- Modify: `src/portfolio/data/sites.ts`

**Interfaces:**
- Produces: factual category and project descriptions used by homepage/category pages.

- [ ] Keep Kuro/Silex descriptions factual and tied to their visible design.
- [ ] Rewrite Garage category and all four Garage summaries around repair, maintenance, diagnostics, servicing, tyres/brakes and breakdown assistance.
- [ ] Avoid vehicle creation/manufacturing language and generic agency copy.

### Task 7: Green verification and visual QA

**Files:**
- Modify: `.github/workflows/visual-qa.yml` only if selectors/artifact naming need alignment.

**Interfaces:**
- Produces: CI evidence and six full-page screenshots.

- [ ] Run fresh Verify portfolio workflow on the final head and require npm ci, lint, build and smoke success.
- [ ] Capture homepage and Restaurant category at 1440x1000, 768x1024, 375x812 full-page.
- [ ] Inspect hero/nav, selected-work composition, category directory, footer, long project titles and mobile menu geometry.
- [ ] Fix any clipping, excessive accent use, repetitive-card appearance or oversized footer issue and rerun both CI and screenshots.
- [ ] Compare final branch against `main` and confirm no `src/templates/**` or `app/sites/**` changes.
- [ ] Update PR #15 title/body to describe the Technical Minimalist redesign and verification evidence.
