# Portfolio Home / Templates / Contact Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the existing portfolio shell into Home, Templates, and Contact while preserving its current Technical Minimalist visual language and improving project-card spacing.

**Architecture:** Keep the portfolio shell and data model intact. Add one small client component for the hero carousel, one client component for category filtering on `/templates`, and keep all other page composition server-rendered. Existing category routes remain functional.

**Tech Stack:** Next.js 16.3.4 App Router, React 19, TypeScript, CSS, `next/image`, `next/link`, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-09-11-portfolio-home-templates-contact-design.md`

## Global Constraints

- Preserve the existing portfolio colors, typography, fixed header geometry, hero frame, decorative grid, borders, and SiteCard visual styling.
- Do not alter demo-template code under `src/templates/**` or `app/sites/**`.
- Keep `/categories/restaurant`, `/categories/garage`, `/categories/coiffure`, and `/categories/tatoueur` operational.
- Primary navigation becomes `/`, `/templates`, `/contact`; GitHub remains a utility link.
- Hero carousel rotates about every 5 seconds, uses only real previews, and does not auto-rotate for `prefers-reduced-motion` users.
- Templates catalogue uses 2 columns desktop / 1 column mobile with independent spacing, not the current 1px shared-grid effect.
- No backend form and no invented email address.

---

### Task 1: Add portfolio route and interaction regression coverage

**Files:**
- Create: `scripts/smoke-portfolio-ia.mjs`
- Create: `scripts/check-portfolio-ia-ui.mjs`
- Modify: `.github/workflows/portfolio-verify.yml`

**Interfaces:**
- Consumes: portfolio routes and `data-*` hooks from Tasks 2–5.
- Produces: CI coverage for `/`, `/templates`, `/contact`, category compatibility, tab filtering, card layout, carousel image validity, overflow and overlap checks.

- [ ] **Step 1: Write smoke assertions** for 200 responses on `/`, `/templates`, `/contact`, and all `/categories/*` routes, plus expected navigation labels and template metadata.
- [ ] **Step 2: Write browser regression assertions** for desktop/mobile overflow, broken images, visible template counts per tab, regular card spacing, and reduced-motion carousel stability.
- [ ] **Step 3: Wire both scripts into `portfolio-verify.yml` after build.**
- [ ] **Step 4: Run CI before production changes and confirm RED because `/templates` and `/contact` do not exist yet.**
- [ ] **Step 5: Commit test contract.**

### Task 2: Simplify global portfolio navigation

**Files:**
- Modify: `src/portfolio/components/PortfolioHeader.tsx`
- Modify: `src/portfolio/components/PortfolioFooter.tsx`

**Interfaces:**
- Produces primary links `Accueil`, `Templates`, `Contact` on desktop/mobile and corresponding footer links.

- [ ] **Step 1: Update header primary nav** to `/`, `/templates`, `/contact`, retaining the GitHub utility action and current markup classes.
- [ ] **Step 2: Update mobile menu** to mirror the same three destinations.
- [ ] **Step 3: Update footer links** to mirror the new IA while preserving current footer structure and styling.
- [ ] **Step 4: Run lint/build and smoke checks.**
- [ ] **Step 5: Commit navigation change.**

### Task 3: Add restrained hero preview carousel

**Files:**
- Create: `src/portfolio/components/PortfolioHeroCarousel.tsx`
- Modify: `app/(portfolio)/page.tsx`
- Modify: `src/portfolio/styles/portfolio.css`

**Interfaces:**
- `PortfolioHeroCarousel({ sites }: { sites: PortfolioSite[] })` accepts available sites with previews and renders the existing hero-frame visual structure.

- [ ] **Step 1: Add a client carousel component** with local index state and a 5000 ms interval.
- [ ] **Step 2: Read `matchMedia('(prefers-reduced-motion: reduce)')`** and keep index 0 stable when reduction is requested.
- [ ] **Step 3: Reuse the existing `.portfolio-hero__frame`, `.portfolio-hero__image-wrap`, orbit, corners, and figcaption classes.**
- [ ] **Step 4: Replace the single Kuro figure on Home with the carousel while leaving the hero copy/layout intact.**
- [ ] **Step 5: Add only restrained opacity transition CSS; no arrows/dots/new slider chrome.**
- [ ] **Step 6: Run lint/build/browser checks.**
- [ ] **Step 7: Commit carousel.**

### Task 4: Replace Home puzzle selection with four category previews

**Files:**
- Modify: `app/(portfolio)/page.tsx`
- Modify: `src/portfolio/styles/portfolio.css`

**Interfaces:**
- Uses `siteCategories` and `portfolioSites` as the only source of truth.
- Links each category preview to `/templates?category=<id>`.

- [ ] **Step 1: Select one available real preview per category** deterministically from existing data.
- [ ] **Step 2: Render four editorial category preview blocks** under the existing section heading system.
- [ ] **Step 3: Use a regular two-column desktop grid and one-column mobile stack** with approximately 32 px column and 48–64 px row separation.
- [ ] **Step 4: Remove the home dependency on the irregular `showcase` puzzle arrangement.**
- [ ] **Step 5: Run visual regression at desktop/mobile.**
- [ ] **Step 6: Commit Home category preview change.**

### Task 5: Add canonical Templates catalogue with tabs

**Files:**
- Create: `src/portfolio/components/TemplatesCatalogue.tsx`
- Create: `app/(portfolio)/templates/page.tsx`
- Modify: `src/portfolio/components/CatalogueGrid.tsx`
- Modify: `src/portfolio/styles/portfolio.css`

**Interfaces:**
- `TemplatesCatalogue({ sites, categories }: { sites: PortfolioSite[]; categories: SiteCategory[] })` handles `Tous` plus four category filters.
- Selected category is reflected in `?category=` using the browser URL without backend state.

- [ ] **Step 1: Add `/templates` server page** with unique metadata and existing portfolio shell/header/footer.
- [ ] **Step 2: Add client filtering component** initialized from `window.location.search` after hydration, with keyboard-accessible tab buttons and `aria-selected`.
- [ ] **Step 3: Add a `templates` catalogue-grid variant** that always renders a regular grid rather than placement-driven spans.
- [ ] **Step 4: Apply independent-card spacing:** ~32 px horizontal, ~56 px vertical desktop; reduced tablet; ~40 px mobile.
- [ ] **Step 5: Keep `SiteCard` visual markup/styles unchanged except sizing rules strictly needed for consistent catalogue previews.**
- [ ] **Step 6: Verify each tab shows only the intended category and `Tous` restores all sites.**
- [ ] **Step 7: Commit Templates page.**

### Task 6: Add Contact page without inventing personal data

**Files:**
- Create: `app/(portfolio)/contact/page.tsx`
- Modify: `src/portfolio/styles/portfolio.css`

**Interfaces:**
- Static server-rendered page using existing portfolio header/footer and typography.

- [ ] **Step 1: Add unique Contact metadata.**
- [ ] **Step 2: Compose a simple contact page** with label, heading, short site-vitrine statement, configurable contact note, and existing GitHub link.
- [ ] **Step 3: Do not add a mailto unless an existing public email is found in repository data.**
- [ ] **Step 4: Reuse current section/grid primitives and add only minimal contact-specific layout CSS.**
- [ ] **Step 5: Run lint/build/browser checks.**
- [ ] **Step 6: Commit Contact page.**

### Task 7: Final verification and PR

**Files:**
- Review all changed files from Tasks 1–6.

**Interfaces:**
- Final candidate branch must satisfy the design spec and existing portfolio checks.

- [ ] **Step 1: Run/fetch fresh CI for the exact branch head.**
- [ ] **Step 2: Confirm lint, build, smoke, desktop/mobile browser regression, tab filtering, reduced-motion carousel behavior, and existing category URLs all pass.**
- [ ] **Step 3: Compare branch against `main` and confirm no demo-template files changed.**
- [ ] **Step 4: Inspect rendered portfolio visually if a preview/screenshot artifact is available; verify the page still reads as the same Technical Minimalist design.**
- [ ] **Step 5: Open a focused pull request to `main` with the exact-head checks referenced.**
