# District 88 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete five-page District 88 street-food demo, verify it visually, generate a real portfolio preview, and only then publish it as available.

**Architecture:** Keep District 88 isolated under `src/templates/restaurant-02/` with thin App Router adapters under `app/sites/restaurant-02/`. Business content lives in `src/data/site.ts` and `src/data/menu.ts`; visual identity, components, pages, metadata, theme and CSS stay template-local. The portfolio registry changes only at the final publish gate.

**Tech Stack:** Next.js 16.3.4, React 19.2.8, TypeScript 5, App Router, `next/font/google`, `next/image`, CSS custom properties, GitHub Actions + Playwright browser QA.

**Spec:** `docs/superpowers/specs/2026-09-10-restaurant-02-district-88-design.md`

## Global Constraints

- District 88 keeps its Poster Riot identity; the portfolio Technical Minimalist design does not leak into the template.
- Explicit routes only: `/sites/restaurant-02`, `/menu`, `/concept`, `/galerie`, `/contact`.
- No payment, cart, auth, reservation backend, database, CMS, embedded map or iframe.
- One `h1` per route; demo metadata uses `noindex, follow`.
- Main business data is centralized in `src/templates/restaurant-02/src/data/site.ts`; menu data in `menu.ts`.
- Template-local components only; do not reuse Kuro or Maison Silex visual components.
- Barlow Condensed 800/900 for display and Barlow 400/600/700 for body/navigation/prices.
- Palette: ink `#090909`, paper `#F1EFE6`, acid `#EFFF00`, red `#FF3B30`, white `#FFFFFF`, muted `#77736B`.
- `prefers-reduced-motion` must neutralize ticker/motion effects.
- District 88 remains `planned` until five routes, CI, visual QA and a real preview all pass.

---

### Task 1: RED contract and isolated route shell

**Files:**
- Modify: `.github/workflows/verify.yml`
- Create: `app/sites/restaurant-02/layout.tsx`
- Create: `app/sites/restaurant-02/page.tsx`
- Create: `app/sites/restaurant-02/menu/page.tsx`
- Create: `app/sites/restaurant-02/concept/page.tsx`
- Create: `app/sites/restaurant-02/galerie/page.tsx`
- Create: `app/sites/restaurant-02/contact/page.tsx`

**Interfaces:**
- Consumes: existing App Router and portfolio smoke-test workflow.
- Produces: five explicit adapters and CI assertions that fail before implementation.

- [ ] **Step 1: Write the failing smoke assertions**

Add requests for all five District 88 routes and assert `noindex, follow`, `EAT LOUD.`, `MENU / 88`, `NO QUIET FOOD.`, `CONTACT SHEET`, and `FIND US.`.

- [ ] **Step 2: Run CI and verify RED**

Expected: install/lint/build may pass, smoke fails because District 88 routes/content do not exist yet.

- [ ] **Step 3: Add thin adapters and layout**

Each route imports one page from `src/templates/restaurant-02/pages/*`; layout imports template-local header/footer/theme/CSS and defines `robots: { index: false, follow: true }`.

- [ ] **Step 4: Commit**

`test: require District 88 demo routes`

---

### Task 2: Data, theme, metadata and shell components

**Files:**
- Create: `src/templates/restaurant-02/types.ts`
- Create: `src/templates/restaurant-02/src/data/site.ts`
- Create: `src/templates/restaurant-02/src/data/menu.ts`
- Create: `src/templates/restaurant-02/lib/theme.ts`
- Create: `src/templates/restaurant-02/lib/metadata.ts`
- Create: `src/templates/restaurant-02/components/D88Header.tsx`
- Create: `src/templates/restaurant-02/components/D88Footer.tsx`
- Create: `src/templates/restaurant-02/components/PosterImage.tsx`
- Create: `src/templates/restaurant-02/components/MenuBoard.tsx`
- Create: `src/templates/restaurant-02/components/TickerStrip.tsx`
- Create: `src/templates/restaurant-02/components/UtilityPanel.tsx`
- Create: `src/templates/restaurant-02/components/PortfolioReturnLink.tsx`

**Interfaces:**
- Produces: `district88Site`, `district88Menu`, `district88ThemeStyle`, `createDistrict88Metadata()` and template-only primitives used by all five pages.

- [ ] **Step 1:** Define typed business, navigation, hours, concept, gallery and menu data with fictional `.example` contact information.
- [ ] **Step 2:** Map palette values to CSS custom properties in `district88ThemeStyle`.
- [ ] **Step 3:** Implement metadata helper and shell components with semantic navigation and accessible mobile `<details>` menu.
- [ ] **Step 4:** Run lint/build.
- [ ] **Step 5:** Commit `feat: add District 88 data and shell`.

---

### Task 3: Five poster-led pages and responsive CSS

**Files:**
- Create: `src/templates/restaurant-02/pages/HomePage.tsx`
- Create: `src/templates/restaurant-02/pages/MenuPage.tsx`
- Create: `src/templates/restaurant-02/pages/ConceptPage.tsx`
- Create: `src/templates/restaurant-02/pages/GalleryPage.tsx`
- Create: `src/templates/restaurant-02/pages/ContactPage.tsx`
- Create: `src/templates/restaurant-02/styles/district88.css`

**Interfaces:**
- Consumes: Task 2 data/components.
- Produces: the complete navigable District 88 experience.

- [ ] **Step 1:** Build homepage with acid poster hero, `EAT LOUD.`, flash image, hot list, manifesto strip, deterministic photo sequence and utility end.
- [ ] **Step 2:** Build `MENU / 88` as a wall-menu composition with `SMASH`, `FRIED`, `SIDES`, `SAUCES`, `DRINKS` and mobile-safe rows.
- [ ] **Step 3:** Build concept page with `NO QUIET FOOD.`, three principles, flash kitchen image and `THE 88 RULE`.
- [ ] **Step 4:** Build gallery as deterministic contact sheet with 8–10 images and acid interruption band.
- [ ] **Step 5:** Build contact page with `FIND US.`, address/hours/contact/access and no form/map iframe.
- [ ] **Step 6:** Implement poster CSS: hard 2–4px rules, acid/ink/red fields, controlled overlaps, responsive breakpoints at 1024/768/520, visible focus and reduced-motion fallback.
- [ ] **Step 7:** Run lint/build/smoke until GREEN.
- [ ] **Step 8:** Commit `feat: build District 88 Poster Riot demo`.

---

### Task 4: Browser QA and visual corrections

**Files:**
- Modify/Create: `.github/workflows/district88-visual-qa.yml`
- Modify: template files only when a screenshot exposes a concrete defect.

**Interfaces:**
- Produces: full-page screenshots at 1440×1000, 768×1024 and 375×812 for home/menu/gallery plus representative concept/contact views.

- [ ] **Step 1:** Capture real rendered pages with Playwright.
- [ ] **Step 2:** Check hierarchy, text clipping, horizontal overflow, mobile menu, image crops, price scanning, focus states and 5/7+ differentiation from Kuro/Silex.
- [ ] **Step 3:** Correct only observed defects, rerun CI and recapture.
- [ ] **Step 4:** Commit `fix: refine District 88 responsive composition` if corrections are required.

---

### Task 5: Real preview and portfolio publication gate

**Files:**
- Create: `public/previews/restaurant-02-home.webp`
- Modify: `src/portfolio/data/sites.ts`
- Modify: `.github/workflows/verify.yml`

**Interfaces:**
- Produces: a real homepage preview and an `available` District 88 portfolio entry.

- [ ] **Step 1:** Generate the preview from the verified desktop homepage render; do not use a mockup or fake screenshot.
- [ ] **Step 2:** Add preview metadata and replace the planned summary with: `Street-food Poster Riot — jaune acide, typographie condensée massive, photos au flash et composition inspirée des affiches imprimées.`
- [ ] **Step 3:** Switch only `restaurant-02` from `planned` to `available`.
- [ ] **Step 4:** Update smoke assertions for three available demos and three real previews where applicable, without changing the curated homepage selection unless its intentional selection logic includes District 88.
- [ ] **Step 5:** Run final lint, production build, smoke and browser QA on the exact head.
- [ ] **Step 6:** Compare against `main` and confirm no Kuro/Silex template files changed.
- [ ] **Step 7:** Open a PR; do not merge automatically.
