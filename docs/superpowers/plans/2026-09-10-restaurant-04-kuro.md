# Restaurant 04 — Kuro Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Kuro as the first complete isolated showcase template with five static Next.js routes, client-editable configuration, responsive editorial design, safe demo SEO, and portfolio integration.

**Architecture:** Keep all Kuro-specific presentation and data inside `src/templates/restaurant-04/`; expose it through thin App Router files under `app/sites/restaurant-04/`. Use `site.ts` for client-editable business/theme values, `menu.ts` for menu content, template-local CSS variables/styles, and Server Components by default with one small Client Component for mobile navigation.

**Tech Stack:** Next.js 16.3.4, React 19.2.8, TypeScript 5, Tailwind CSS 4, CSS custom properties, Next Metadata API, next/image where practical, GitHub Actions smoke tests.

**Spec:** `docs/superpowers/specs/2026-09-10-restaurant-04-kuro-design.md`

## Global Constraints

- Routes are `/sites/restaurant-04`, `/menu`, `/restaurant`, `/galerie`, `/contact`.
- Kuro defaults to `robots.index = false` and `robots.follow = true` on every route.
- No reservation form, booking widget, backend, CMS, payments, authentication, analytics, map API, carousel, modal gallery, autoplay media, parallax-heavy effect, custom cursor, or loading screen.
- Visual direction is warm ivory, charcoal, restrained lacquer red, thin rules, asymmetrical editorial layouts, large negative space, minimal border radius, no glassmorphism or generic card system.
- Client-editable colors come from `src/templates/restaurant-04/src/data/site.ts` and are exposed as CSS variables.
- Kuro remains isolated; no generic universal business-site component may be introduced.
- Remaining fifteen demo entries stay planned and non-navigable.
- CI uses Node 22 and must pass `npm ci`, `npm run lint`, `npm run build`, and HTTP smoke tests.

---

### Task 1: Add the failing Kuro verification gate

**Files:**
- Modify: `.github/workflows/verify.yml`

**Interfaces:**
- Consumes: existing `Verify portfolio` GitHub Actions workflow.
- Produces: push verification for `feat/restaurant-04-japanese-minimal` and smoke assertions for the five Kuro routes, noindex metadata, and portfolio availability state.

- [ ] **Step 1: Extend the workflow branch trigger**

Add `feat/restaurant-04-japanese-minimal` under `on.push.branches` while retaining `feat/portfolio-architecture`.

- [ ] **Step 2: Add Kuro smoke requests after the existing portfolio requests**

The smoke script must request:

```bash
curl -fsS http://127.0.0.1:3000/sites/restaurant-04 > /tmp/kuro-home.html
curl -fsS http://127.0.0.1:3000/sites/restaurant-04/menu > /tmp/kuro-menu.html
curl -fsS http://127.0.0.1:3000/sites/restaurant-04/restaurant > /tmp/kuro-restaurant.html
curl -fsS http://127.0.0.1:3000/sites/restaurant-04/galerie > /tmp/kuro-gallery.html
curl -fsS http://127.0.0.1:3000/sites/restaurant-04/contact > /tmp/kuro-contact.html
```

Then assert:

```bash
for page in /tmp/kuro-home.html /tmp/kuro-menu.html /tmp/kuro-restaurant.html /tmp/kuro-gallery.html /tmp/kuro-contact.html; do
  grep -q 'name="robots" content="noindex, follow"' "$page"
done

grep -q 'Précision. Saison. Silence.' /tmp/kuro-home.html
grep -q 'Omakase' /tmp/kuro-menu.html
grep -q 'La table' /tmp/kuro-restaurant.html
grep -q 'Galerie' /tmp/kuro-gallery.html
grep -q 'Adresse de démonstration' /tmp/kuro-contact.html

grep -q 'site-card--available' /tmp/restaurant.html
```

- [ ] **Step 3: Commit the test-only change**

```bash
git add .github/workflows/verify.yml
git commit -m "test: add Kuro route verification"
```

- [ ] **Step 4: Run CI and verify RED**

Expected result: lint/build of the unchanged app may pass, but the smoke step must fail because `/sites/restaurant-04` does not exist yet. Record the failed run as the required RED evidence before implementing production code.

---

### Task 2: Define the Kuro client-editable data contract

**Files:**
- Create: `src/templates/restaurant-04/types.ts`
- Create: `src/templates/restaurant-04/src/data/site.ts`
- Create: `src/templates/restaurant-04/src/data/menu.ts`
- Create: `src/templates/restaurant-04/lib/theme.ts`

**Interfaces:**
- Produces: `KuroSiteConfig`, `KuroMenuSection`, `KuroMenuItem`, `kuroSite`, `kuroMenu`, `kuroThemeStyle`.
- Consumers: all Kuro layout, components, pages, and metadata helpers.

- [ ] **Step 1: Define focused types**

`types.ts` must define:

```ts
export type KuroNavItem = { label: string; href: string };
export type KuroHoursRow = { days: string; hours: string };
export type KuroImage = { src: string; alt: string; width: number; height: number };
export type KuroMenuItem = { name: string; description: string; price: string; note?: string };
export type KuroMenuSection = { title: string; intro?: string; items: KuroMenuItem[] };

export type KuroSiteConfig = {
  business: { name: string; descriptor: string; mark: string };
  colors: {
    background: string;
    surface: string;
    text: string;
    muted: string;
    primary: string;
    accent: string;
    line: string;
  };
  navigation: KuroNavItem[];
  hero: { eyebrow: string; title: string; body: string; image: KuroImage };
  contact: { email: string; phone: string; location: string; access: string };
  hours: KuroHoursRow[];
  social: { instagram: string };
  gallery: KuroImage[];
  demoDisclosure: string;
  seo: { title: string; description: string };
};
```

- [ ] **Step 2: Create realistic fictional site data**

`site.ts` must export `kuroSite: KuroSiteConfig` with reserved/demo-safe contact data such as `bonjour@kuro.example`, a clearly labelled Brussels demo location, the approved hero line `Précision. Saison. Silence.`, five navigation links, and a complete gallery array.

- [ ] **Step 3: Create typed menu data**

`menu.ts` must export `kuroMenu: KuroMenuSection[]` containing Omakase, Petites assiettes, Sushi & sashimi, Plats, Desserts, and Saké / thé / sans alcool. Use explicit ingredient-led descriptions and euro prices.

- [ ] **Step 4: Create the theme adapter**

`lib/theme.ts` must export:

```ts
import type { CSSProperties } from "react";
import { kuroSite } from "../src/data/site";

export const kuroThemeStyle = {
  "--site-background": kuroSite.colors.background,
  "--site-surface": kuroSite.colors.surface,
  "--site-text": kuroSite.colors.text,
  "--site-muted": kuroSite.colors.muted,
  "--site-primary": kuroSite.colors.primary,
  "--site-accent": kuroSite.colors.accent,
  "--site-line": kuroSite.colors.line,
} as CSSProperties;
```

- [ ] **Step 5: Commit the data boundary**

```bash
git add src/templates/restaurant-04
git commit -m "feat: add Kuro data contract"
```

Expected CI: smoke test remains RED because routes do not exist yet; TypeScript/lint should remain green.

---

### Task 3: Build the Kuro shell and editorial primitives

**Files:**
- Create: `src/templates/restaurant-04/components/KuroHeader.tsx`
- Create: `src/templates/restaurant-04/components/KuroFooter.tsx`
- Create: `src/templates/restaurant-04/components/SectionIntro.tsx`
- Create: `src/templates/restaurant-04/components/DishList.tsx`
- Create: `src/templates/restaurant-04/components/VisitDetails.tsx`
- Create: `src/templates/restaurant-04/components/EditorialImage.tsx`
- Create: `src/templates/restaurant-04/components/PortfolioReturnLink.tsx`
- Create: `src/templates/restaurant-04/styles/kuro.css`

**Interfaces:**
- Consumes: `kuroSite`, `KuroMenuItem`, `KuroImage`.
- Produces: reusable Kuro-local semantic components and the entire visual system.

- [ ] **Step 1: Build `KuroHeader` as the only Client Component**

Use `"use client"`, local `useState`, a button with `aria-expanded`, `aria-controls`, an accessible nav label, and direct links from `kuroSite.navigation`. Close the menu on link click. Do not add animation libraries.

- [ ] **Step 2: Build semantic content primitives**

`SectionIntro` renders eyebrow/title/body. `DishList` renders menu items as ruled rows with name, description, optional note, and price. `VisitDetails` renders address, access, hours, phone, and email. `EditorialImage` wraps `next/image` with explicit dimensions. `PortfolioReturnLink` links to `/` with low visual emphasis.

- [ ] **Step 3: Build `KuroFooter`**

Use Kuro business/contact data, demo disclosure, navigation, and the portfolio return link. Do not invent legal/company claims.

- [ ] **Step 4: Create the template-local CSS system**

`kuro.css` must style only selectors under `.kuro-site` (or `kuro-*` names), use `var(--site-...)` for editable colors, implement the editorial grid, one dominant hero image, thin rules, strong negative space, responsive menu/header, visible `:focus-visible`, and `prefers-reduced-motion` handling.

Required responsive breakpoints must cover narrow mobile, tablet, desktop, and large desktop without horizontal overflow.

- [ ] **Step 5: Commit shell/components**

```bash
git add src/templates/restaurant-04/components src/templates/restaurant-04/styles
git commit -m "feat: add Kuro editorial shell"
```

Expected CI: smoke still RED because route files are intentionally absent.

---

### Task 4: Build the five page-level Kuro compositions

**Files:**
- Create: `src/templates/restaurant-04/pages/HomePage.tsx`
- Create: `src/templates/restaurant-04/pages/MenuPage.tsx`
- Create: `src/templates/restaurant-04/pages/RestaurantPage.tsx`
- Create: `src/templates/restaurant-04/pages/GalleryPage.tsx`
- Create: `src/templates/restaurant-04/pages/ContactPage.tsx`

**Interfaces:**
- Consumes: Kuro components, `kuroSite`, `kuroMenu`.
- Produces: five complete page components without routing concerns.

- [ ] **Step 1: Build Home**

Include one `h1` with `Précision. Saison. Silence.`, dominant hero image, concise positioning copy, three signature dishes sourced from `kuroMenu`, seasonal statement, small gallery fragment, and visit information.

- [ ] **Step 2: Build Menu**

Use one `h1`, an editorial intro, and every section from `kuroMenu` through `DishList`. Avoid card grids.

- [ ] **Step 3: Build Restaurant**

Use one `h1` and sections titled around `La table`, `La saison`, `Le geste`, and `L'espace`. Keep sourcing claims generic and truthful; no awards or chef credentials.

- [ ] **Step 4: Build Gallery**

Use one `h1` containing `Galerie`, then render `kuroSite.gallery` in an irregular CSS grid with varied aspect-ratio classes derived from array position rather than a plugin.

- [ ] **Step 5: Build Contact**

Use one `h1`, `VisitDetails`, the exact label `Adresse de démonstration`, and no form/widget/map API.

- [ ] **Step 6: Commit pages**

```bash
git add src/templates/restaurant-04/pages
git commit -m "feat: compose Kuro pages"
```

Expected CI: smoke remains RED until routes are exposed.

---

### Task 5: Expose Kuro through thin Next.js routes and safe metadata

**Files:**
- Create: `app/sites/restaurant-04/layout.tsx`
- Create: `app/sites/restaurant-04/page.tsx`
- Create: `app/sites/restaurant-04/menu/page.tsx`
- Create: `app/sites/restaurant-04/restaurant/page.tsx`
- Create: `app/sites/restaurant-04/galerie/page.tsx`
- Create: `app/sites/restaurant-04/contact/page.tsx`
- Create: `src/templates/restaurant-04/lib/metadata.ts`

**Interfaces:**
- Consumes: Kuro pages, theme style, site SEO config.
- Produces: five static routes with unique metadata and `noindex, follow`.

- [ ] **Step 1: Add metadata helper**

`metadata.ts` exports:

```ts
import type { Metadata } from "next";
import { kuroSite } from "../src/data/site";

export function createKuroMetadata(title: string, description: string): Metadata {
  return {
    title: `${title} | ${kuroSite.business.name}`,
    description,
    robots: { index: false, follow: true },
    openGraph: { title: `${title} | ${kuroSite.business.name}`, description, type: "website" },
  };
}
```

- [ ] **Step 2: Add Kuro route layout**

Import `kuro.css`, render a `.kuro-site` boundary with `style={kuroThemeStyle}`, `KuroHeader`, `<main>{children}</main>`, and `KuroFooter`. Export default noindex metadata from the layout as a safety net.

- [ ] **Step 3: Add five thin route files**

Each route exports unique metadata via `createKuroMetadata(...)` and returns only its corresponding page-level component.

- [ ] **Step 4: Commit routing**

```bash
git add app/sites/restaurant-04 src/templates/restaurant-04/lib/metadata.ts
git commit -m "feat: expose Kuro showcase routes"
```

- [ ] **Step 5: Run CI and verify route GREEN except portfolio availability assertion**

Expected: all five URLs respond, all noindex assertions pass, page content assertions pass. If the final `site-card--available` assertion is still RED, that is expected until Task 6.

---

### Task 6: Integrate Kuro into the portfolio and finalize verification

**Files:**
- Modify: `src/portfolio/data/sites.ts`
- Modify: `.github/workflows/verify.yml` only if the smoke selector needs a precise Kuro-specific assertion.

**Interfaces:**
- Consumes: existing `SiteStatus = "planned" | "available"` and `SiteCard` behavior.
- Produces: the first navigable catalogue card while all other demos remain planned.

- [ ] **Step 1: Mark only Kuro available**

Change only the `restaurant-04` registry object from:

```ts
status: "planned",
```

to:

```ts
status: "available",
```

Do not alter the remaining fifteen entries.

- [ ] **Step 2: Make the smoke assertion Kuro-specific**

If necessary, assert the rendered restaurant category includes the available Kuro link:

```bash
grep -q 'href="/sites/restaurant-04"' /tmp/restaurant.html
```

and continue to assert all category counts remain 4.

- [ ] **Step 3: Commit portfolio integration**

```bash
git add src/portfolio/data/sites.ts .github/workflows/verify.yml
git commit -m "feat: publish Kuro portfolio demo"
```

- [ ] **Step 4: Run full CI and verify GREEN**

Required evidence:

```text
npm ci: success
npm run lint: success
npm run build: success
Smoke test routes and catalogue counts: success
```

The build output must include all five Kuro routes as static routes. The smoke log must show the portfolio counts remain 16 / 4 / 4 / 4 / 4.

- [ ] **Step 5: Inspect final diff against `feat/portfolio-architecture`**

Confirm the Phase 2 diff contains Kuro-specific implementation, one portfolio status change, the updated CI gate, and this spec/plan only. No unrelated template directories should appear.

- [ ] **Step 6: Finish branch using `superpowers:verification-before-completion` and `superpowers:finishing-a-development-branch`**

Do not merge automatically. Present integration options after fresh green verification evidence.
