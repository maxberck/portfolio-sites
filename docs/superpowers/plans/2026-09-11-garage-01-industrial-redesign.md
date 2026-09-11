# Garage 01 Industrial Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the existing Atelier Noir `garage-01` demo visibly industrial and workshop-first without changing its public route structure.

**Architecture:** Keep the current Next.js App Router wrappers under `app/sites/garage-01/**` and the isolated template under `src/templates/garage-01/**`. Strengthen the visual contract through the existing data object, shared header/footer/page hero, page-level composition, and one isolated CSS file.

**Tech Stack:** Next.js 16.3.4, React 19.2.8, TypeScript, CSS, Node smoke scripts

**Spec:** `docs/superpowers/specs/2026-09-11-garage-01-industrial-redesign-design.md`

## Global Constraints
- Preserve `/sites/garage-01`, `/services`, `/atelier`, `/realisations`, `/contact`.
- Preserve noindex/demo-only behavior; no form, iframe, fake booking, fake quote or invented certification.
- Palette: `#111311`, `#222522`, `#D6D5CF`, `#F3F2EC`, `#7D817D`, `#F4C430`.
- Do not alter `garage-02`.
- Respect reduced motion and accessible focus states.

---

### Task 1: Lock the new visual contract with the Garage 01 smoke test

**Files:**
- Modify: `scripts/smoke-garage01.mjs`

**Interfaces:**
- Consumes: rendered HTML from the existing Garage 01 routes.
- Produces: a smoke contract requiring the new home markers.

- [ ] **Step 1: Write the failing assertions**

Require the Garage 01 home HTML to contain `BAIE 01`, `Garage multimarque`, and `VOIR LES SERVICES` in addition to the existing route/noindex/form/iframe checks.

- [ ] **Step 2: Run CI and verify RED**

Open the feature PR and confirm the Garage 01 verify job fails because at least one new marker is absent from the current implementation.

- [ ] **Step 3: Do not weaken the assertion**

The production redesign must make the contract pass.

### Task 2: Replace the visual tokens and shared chrome

**Files:**
- Modify: `src/templates/garage-01/lib/theme.ts`
- Modify: `src/templates/garage-01/components/AtelierHeader.tsx`
- Modify: `src/templates/garage-01/components/AtelierFooter.tsx`
- Modify: `src/templates/garage-01/components/PageHero.tsx`

**Interfaces:**
- Consumes: `atelierNoirSite` navigation, business and contact data.
- Produces: consistent industrial shell shared by all Garage 01 pages.

- [ ] **Step 1: Update theme tokens**

Use the exact industrial palette from the spec and expose variables for black, graphite, concrete, off-white, steel, signal yellow and border tones.

- [ ] **Step 2: Rebuild header hierarchy**

Add the signal rail, workshop descriptor, industrial wordmark and compact desktop/mobile navigation while preserving accessible menu state.

- [ ] **Step 3: Rebuild footer hierarchy**

Use a dark multi-column utility footer with identity, key routes, contact data and explicit demo disclosure.

- [ ] **Step 4: Strengthen the shared page hero**

Use a dark title field, utility eyebrow and industrial index/rail detail without adding decorative fake metrics.

### Task 3: Recompose the home page

**Files:**
- Modify: `src/templates/garage-01/pages/HomePage.tsx`
- Modify: `src/templates/garage-01/src/data/site.ts`

**Interfaces:**
- Consumes: `atelierNoirSite.services`, contact/hours and image data.
- Produces: full home composition with `BAIE 01`, practical multibrand copy and strong service-bay modules.

- [ ] **Step 1: Update hero copy and imagery metadata**

Use a practical multibrand message and keep all data explicitly fictitious where applicable.

- [ ] **Step 2: Build the new hero**

Full-width dark photographic hero, large title, two actions and visible `BAIE 01` marker.

- [ ] **Step 3: Add utility strip and bay services**

Show vehicle scope, fictitious Brussels location, hours and phone, followed by service modules labelled by bay.

- [ ] **Step 4: Add diagnostic and workshop sections**

Use a dark diagnostic explanation and a concrete workshop preview with real automotive imagery.

### Task 4: Recompose secondary pages

**Files:**
- Modify: `src/templates/garage-01/pages/ServicesPage.tsx`
- Modify: `src/templates/garage-01/pages/WorkshopPage.tsx`
- Modify: `src/templates/garage-01/pages/ProjectsPage.tsx`
- Modify: `src/templates/garage-01/pages/ContactPage.tsx`

**Interfaces:**
- Consumes: shared PageHero and `atelierNoirSite` data.
- Produces: four page-specific industrial layouts sharing one visual system.

- [ ] **Step 1: Services**

Create an inspection-board layout with bay identifiers and practical service descriptions.

- [ ] **Step 2: Workshop**

Create a photographic staggered layout, zone marker and three workshop principles.

- [ ] **Step 3: Realisations**

Present illustrative cases as intervention records with explicit demo language, not testimonials.

- [ ] **Step 4: Contact**

Present phone, location and hours in large technical blocks plus a stylized access panel; keep no form and no live map.

### Task 5: Replace Garage 01 CSS and portfolio copy

**Files:**
- Modify: `src/templates/garage-01/styles/atelier-noir.css`
- Modify: `src/portfolio/data/sites.ts`

**Interfaces:**
- Consumes: the class names produced in Tasks 2–4.
- Produces: responsive industrial rendering and accurate portfolio description.

- [ ] **Step 1: Replace Garage 01 CSS**

Implement hard dividers, industrial typography, dark/light zoning, signal-yellow states, service-bay geometry, photographic layouts and responsive rules at desktop/tablet/mobile widths.

- [ ] **Step 2: Add accessibility states**

Add visible `:focus-visible`, minimum practical hit areas and `prefers-reduced-motion` handling.

- [ ] **Step 3: Update the Garage 01 portfolio card copy**

Describe the new direction as workshop-industrial and keep the existing preview asset path until a newly captured preview is generated.

### Task 6: Verify and integrate

**Files:**
- No new production files unless verification reveals a defect.

**Interfaces:**
- Consumes: completed branch.
- Produces: merge-ready PR.

- [ ] **Step 1: Run CI**

Require `npm run lint`, `npm run build` and the Garage 01 smoke contract to pass.

- [ ] **Step 2: Review the PR diff**

Confirm changes are scoped to Garage 01 plus its portfolio metadata/docs/tests and do not alter Garage 02.

- [ ] **Step 3: Merge only after green verification**

Use the exact verified head SHA as the merge guard.