# Portfolio Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the default Create Next App screen with a professional, responsive portfolio catalogue foundation that exposes four indexable categories, registers sixteen planned demo sites, establishes SEO infrastructure, and creates the isolation boundary needed for future templates.

**Architecture:** Keep one Next.js App Router application. The root `app/` tree owns routing and metadata, `src/portfolio/` owns catalogue UI/data, and future demo implementations remain isolated under `src/templates/`. Phase 1 does not create sixteen empty template applications; it registers their identities and statuses so later phases can add them one by one without changing the portfolio architecture.

**Tech Stack:** Next.js 16.3.4, React 19.2.8, TypeScript 5, Tailwind CSS 4, ESLint 9, Node.js/npm.

**Spec:** `docs/superpowers/specs/2026-09-10-portfolio-sites-architecture-design.md`

## Global Constraints

- Keep the existing repository and installed stack; do not run `create-next-app`.
- No payments, authentication, database, CMS, backend business logic, client editor, Turborepo, npm workspaces, multi-zones, micro-frontends, or generic template engine.
- Portfolio and category pages are indexable; fictional demo pages default to `noindex, follow` once they exist.
- Prefer Server Components. Add Client Components only when browser state is genuinely required.
- Use explicit clean routes.
- The sixteen demos must eventually differ structurally, not merely by color.
- Client-editable demo colors will live in each template's `site.ts`; Phase 1 portfolio styling is independent from demo theme data.
- Preserve accessibility: semantic landmarks, keyboard navigation, visible focus, sufficient contrast, responsive layout, reduced-motion consideration.
- Do not create sixteen empty template skeletons during Phase 1.

## Phase 1 Visual Direction

The portfolio shell uses a restrained editorial-catalogue identity so the work remains the focal point:

- warm off-white canvas with near-black typography
- one restrained cobalt accent used for navigation state and small interaction cues
- strong typographic scale, thin rules, and generous negative space
- Swiss/modular grid rather than rounded SaaS cards
- preview cards use large type, category labels, and controlled image/placeholder areas
- no glassmorphism, gradient-heavy hero, floating blobs, excessive pills, or repeated rounded containers
- exactly one primary focal anchor in the hero: the portfolio proposition
- catalogue cards become the secondary visual field

---

### Task 1: Establish the portfolio domain model and registry

**Files:**
- Create: `src/portfolio/types.ts`
- Create: `src/portfolio/data/sites.ts`
- Create: `src/portfolio/lib/catalog.ts`

**Interfaces:**
- Produces: `SiteCategory`, `SiteStatus`, `PortfolioSite`, `siteCategories`, `portfolioSites`, `getSitesByCategory(category)`, and `getSiteById(id)`.
- Consumed by: homepage, category pages, catalogue cards, sitemap generation.

- [ ] **Step 1: Define the domain types**

Create `src/portfolio/types.ts` with these exact public shapes:

```ts
export type SiteCategory = "garage" | "restaurant" | "coiffure" | "tatoueur";
export type SiteStatus = "planned" | "available";

export type PortfolioSite = {
  id: string;
  name: string;
  category: SiteCategory;
  direction: string;
  summary: string;
  href: `/sites/${string}`;
  status: SiteStatus;
  preview?: string;
};

export type SiteCategoryDefinition = {
  id: SiteCategory;
  label: string;
  href: `/categories/${SiteCategory}`;
  description: string;
};
```

- [ ] **Step 2: Register the four categories and sixteen demos**

Create `src/portfolio/data/sites.ts` with four category definitions and these sixteen IDs:

```ts
const ids = [
  "garage-01", "garage-02", "garage-03", "garage-04",
  "restaurant-01", "restaurant-02", "restaurant-03", "restaurant-04",
  "coiffure-01", "coiffure-02", "coiffure-03", "coiffure-04",
  "tatoueur-01", "tatoueur-02", "tatoueur-03", "tatoueur-04",
] as const;
```

Every entry must have a unique `name`, `direction`, and `summary` derived from the approved visual matrix. All sixteen begin with `status: "planned"`. Their `href` is `/sites/<id>`.

- [ ] **Step 3: Add catalogue selectors**

Create `src/portfolio/lib/catalog.ts`:

```ts
import { portfolioSites } from "@/src/portfolio/data/sites";
import type { SiteCategory } from "@/src/portfolio/types";

export function getSitesByCategory(category: SiteCategory) {
  return portfolioSites.filter((site) => site.category === category);
}

export function getSiteById(id: string) {
  return portfolioSites.find((site) => site.id === id);
}
```

- [ ] **Step 4: Type-check the data contract**

Run:

```bash
npm run build
```

Expected: TypeScript accepts all registry entries and literal route types. If the existing starter blocks the build for unrelated reasons, record the exact failure before continuing.

- [ ] **Step 5: Commit the domain layer**

```bash
git add src/portfolio/types.ts src/portfolio/data/sites.ts src/portfolio/lib/catalog.ts
git commit -m "feat: add portfolio catalogue domain"
```

---

### Task 2: Replace the starter shell with a neutral root and portfolio layout

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Delete after replacement: `app/page.tsx`
- Create: `app/(portfolio)/layout.tsx`
- Create: `src/portfolio/styles/portfolio.css`

**Interfaces:**
- Root layout owns `<html>`, global reset, base language, and application-wide metadata defaults.
- Portfolio route-group layout owns the portfolio-only visual shell.
- Future `/sites/*` demos do not inherit portfolio-specific layout markup.

- [ ] **Step 1: Neutralize the root layout**

Replace the starter metadata and Vercel-specific presentation. Keep the root layout structurally equivalent to:

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Portfolio — Sites vitrines",
    template: "%s | Portfolio",
  },
  description: "Catalogue de sites vitrines web conçus comme de véritables expériences navigables.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
```

Do not set a global demo font family here.

- [ ] **Step 2: Reduce `globals.css` to infrastructure-level styles**

Keep Tailwind import, box sizing, body margin, inherited controls, accessible focus baseline, image sizing, and reduced-motion behavior. Remove the starter dark-mode palette and starter-specific brand styling.

The file must include:

```css
@import "tailwindcss";

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
}

button,
a,
input,
textarea,
select {
  font: inherit;
}

img,
picture,
svg {
  display: block;
  max-width: 100%;
}

:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 3: Create the portfolio-only layout**

Create `app/(portfolio)/layout.tsx` and import `@/src/portfolio/styles/portfolio.css`. Wrap portfolio pages in a `.portfolio-shell` container but do not wrap future demo routes.

- [ ] **Step 4: Establish the editorial portfolio tokens**

In `src/portfolio/styles/portfolio.css`, declare portfolio-only custom properties such as:

```css
.portfolio-shell {
  --portfolio-bg: #f3f0e9;
  --portfolio-surface: #fbfaf6;
  --portfolio-text: #151515;
  --portfolio-muted: #686761;
  --portfolio-line: #cfcbc0;
  --portfolio-accent: #2347d8;
  min-height: 100vh;
  background: var(--portfolio-bg);
  color: var(--portfolio-text);
}
```

Use squared or very small-radius surfaces, thin rules, strong whitespace, and a responsive modular grid. Do not introduce demo-theme variables here.

- [ ] **Step 5: Remove the old root page only after the grouped homepage exists in Task 4**

Do not delete `app/page.tsx` before `app/(portfolio)/page.tsx` has been created; Next.js cannot have both routes targeting `/` simultaneously.

- [ ] **Step 6: Verify shell compilation**

Run:

```bash
npm run lint
npm run build
```

Expected: zero ESLint errors and a successful Next production build.

- [ ] **Step 7: Commit the shell changes together with the new grouped homepage from Task 4**

Do not create an intermediate commit that leaves `/` missing or duplicated.

---

### Task 3: Build reusable portfolio presentation components

**Files:**
- Create: `src/portfolio/components/PortfolioHeader.tsx`
- Create: `src/portfolio/components/PortfolioFooter.tsx`
- Create: `src/portfolio/components/CategoryNavigation.tsx`
- Create: `src/portfolio/components/SiteCard.tsx`
- Create: `src/portfolio/components/CatalogueGrid.tsx`

**Interfaces:**
- `CategoryNavigation({ activeCategory? })`
- `SiteCard({ site })`
- `CatalogueGrid({ sites })`
- Header/footer are Server Components with semantic navigation and no browser state.

- [ ] **Step 1: Implement the header as navigation, not an app dashboard**

Use `<header>`, `<nav aria-label="Navigation principale">`, a home link, a catalogue anchor, and a contact mail link or contact section anchor. Do not add a hamburger until the number of links actually requires it; CSS wrapping is sufficient for Phase 1.

- [ ] **Step 2: Implement category navigation with real links**

Render:

```text
Tous → /
Garage → /categories/garage
Restaurant → /categories/restaurant
Coiffure → /categories/coiffure
Tatoueur → /categories/tatoueur
```

Use `aria-current="page"` on the active category. Do not use client-side filter state for the primary category navigation.

- [ ] **Step 3: Implement `SiteCard` with planned/available behavior**

For `status === "planned"`, show the direction and a restrained `En préparation` status without linking to a missing route.

For `status === "available"`, render a real Next `<Link>` to `site.href`, using `prefetch={false}` from the catalogue to avoid eagerly preloading many demos.

The card must use semantic heading hierarchy and expose category/direction text instead of decorative badges only.

- [ ] **Step 4: Implement `CatalogueGrid`**

Accept `PortfolioSite[]`; render a responsive `<ul>`/`<li>` catalogue grid. The component must not filter internally.

- [ ] **Step 5: Implement a compact footer**

Include the portfolio positioning, current year using server-rendered JavaScript, and a GitHub link placeholder only if the final URL is known from repository context; otherwise omit it rather than inventing data.

- [ ] **Step 6: Verify component boundaries**

Run:

```bash
npm run lint
npm run build
```

Expected: no `use client` added to these components, no invalid nested interactive elements, no missing keys.

- [ ] **Step 7: Commit the component layer**

```bash
git add src/portfolio/components
git commit -m "feat: add portfolio catalogue components"
```

---

### Task 4: Build the homepage and four indexable category pages

**Files:**
- Create: `app/(portfolio)/page.tsx`
- Create: `app/(portfolio)/categories/garage/page.tsx`
- Create: `app/(portfolio)/categories/restaurant/page.tsx`
- Create: `app/(portfolio)/categories/coiffure/page.tsx`
- Create: `app/(portfolio)/categories/tatoueur/page.tsx`
- Create: `src/portfolio/components/CategoryPage.tsx`
- Delete: `app/page.tsx`

**Interfaces:**
- Homepage consumes all `portfolioSites`.
- Explicit category route files consume `CategoryPage` and pass one `SiteCategory` literal.
- `CategoryPage` resolves labels/data through `siteCategories` and `getSitesByCategory`.

- [ ] **Step 1: Create the homepage with one clear focal anchor**

Use semantic sections in this order:

```text
Header
Hero: "Des sites vitrines pensés comme de vrais sites clients."
Short positioning paragraph
Category navigation
Catalogue heading + 16 registered cards
Process/credibility section
Contact CTA
Footer
```

The hero must remain typographically dominant; avoid multiple competing CTAs.

- [ ] **Step 2: Create the shared category-page composition**

`CategoryPage` receives:

```ts
type CategoryPageProps = {
  category: SiteCategory;
};
```

It renders header, category intro, active category navigation, matching catalogue grid, return link, and footer.

- [ ] **Step 3: Create four explicit category route files**

Each file exports unique `metadata` and renders one literal category. Example:

```tsx
import { CategoryPage } from "@/src/portfolio/components/CategoryPage";

export const metadata = {
  title: "Garages",
  description: "Quatre directions de sites vitrines pour garages et professionnels de l'automobile.",
};

export default function GarageCategoryPage() {
  return <CategoryPage category="garage" />;
}
```

Repeat with category-specific copy for restaurant, coiffure, and tatoueur; do not reuse the garage description.

- [ ] **Step 4: Delete the starter route**

After `app/(portfolio)/page.tsx` exists, delete `app/page.tsx` so exactly one route resolves `/`.

- [ ] **Step 5: Run route/build verification**

Run:

```bash
npm run lint
npm run build
```

Expected build output includes `/`, `/categories/garage`, `/categories/restaurant`, `/categories/coiffure`, and `/categories/tatoueur` without route conflicts.

- [ ] **Step 6: Commit the complete portfolio shell**

```bash
git add app src/portfolio
git commit -m "feat: build responsive portfolio catalogue"
```

---

### Task 5: Add SEO infrastructure without inventing a production domain

**Files:**
- Create: `src/portfolio/lib/seo.ts`
- Create: `app/robots.ts`
- Create: `app/sitemap.ts`
- Modify: `app/layout.tsx`

**Interfaces:**
- `getPublicSiteUrl(): string | null`
- `portfolioIndexablePaths`: exactly `/` plus four category routes during Phase 1.
- Root metadata uses `metadataBase` only when `NEXT_PUBLIC_SITE_URL` exists.

- [ ] **Step 1: Add a production URL helper**

Create `src/portfolio/lib/seo.ts`:

```ts
export const portfolioIndexablePaths = [
  "/",
  "/categories/garage",
  "/categories/restaurant",
  "/categories/coiffure",
  "/categories/tatoueur",
] as const;

export function getPublicSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return value ? value.replace(/\/$/, "") : null;
}
```

Do not hardcode a fake production hostname.

- [ ] **Step 2: Add metadataBase conditionally**

In root metadata, include `metadataBase: new URL(siteUrl)` only when `getPublicSiteUrl()` returns a URL. Keep canonical URLs absent until a real deployment URL is configured.

- [ ] **Step 3: Add `robots.ts`**

Allow crawling of portfolio pages. Keep `/sites/` out of the generated sitemap and configure future demo layouts themselves with `noindex, follow`; do not globally disallow `/sites/`, because `noindex` pages need to remain crawlable for robots directives to be seen.

- [ ] **Step 4: Add `sitemap.ts`**

When no production URL is configured, return an empty sitemap array instead of publishing `localhost` or a fake domain. When configured, map `portfolioIndexablePaths` to absolute URLs.

- [ ] **Step 5: Verify metadata routes**

Run:

```bash
npm run lint
npm run build
```

Expected: `/robots.txt` and `/sitemap.xml` compile as metadata routes; no demo URLs appear in the sitemap during Phase 1.

- [ ] **Step 6: Commit SEO infrastructure**

```bash
git add app/layout.tsx app/robots.ts app/sitemap.ts src/portfolio/lib/seo.ts
git commit -m "feat: add portfolio seo infrastructure"
```

---

### Task 6: Responsive and visual QA for the foundation

**Files:**
- Modify only if defects are found: `src/portfolio/styles/portfolio.css`
- Modify only if semantic defects are found: files created in Tasks 3–5

**Interfaces:**
- No new public API. This task validates the Phase 1 result against the approved architecture and Designly composition rules.

- [ ] **Step 1: Run static verification**

```bash
npm run lint
npm run build
```

Expected: both commands exit with status 0.

- [ ] **Step 2: Run the development server for visual checks**

```bash
npm run dev
```

Inspect at minimum these widths in browser dev tools:

```text
375px mobile
768px tablet
1440px desktop
```

- [ ] **Step 3: Verify route behavior manually**

Open:

```text
/
/categories/garage
/categories/restaurant
/categories/coiffure
/categories/tatoueur
/robots.txt
/sitemap.xml
```

Verify category pages show exactly four cards each and homepage shows sixteen registered entries.

- [ ] **Step 4: Run Designly structural preflight**

Check the actual rendered portfolio against these criteria:

```text
Primary focal anchor: hero proposition only
Secondary anchor: catalogue grid
No 3+ equal-emphasis elements in hero
Hierarchy remains legible in grayscale
No trapped negative space
No accidental edge tangencies
No SaaS-card visual language
No horizontal overflow at 375px
```

- [ ] **Step 5: Accessibility sanity check**

Keyboard through all navigation and available links. Verify visible focus, `aria-current`, semantic landmarks, one page-level `h1`, no skipped essential heading levels, and no interaction requiring a mouse.

- [ ] **Step 6: Confirm Phase 1 scope boundaries**

Verify all of the following remain absent:

```text
payments
authentication
database
CMS
backend business logic
sixteen empty template implementations
iframes pretending to be demos
client-side category filter state
fake production canonical domain
```

- [ ] **Step 7: Commit only QA fixes, if any**

```bash
git add app src/portfolio
git commit -m "fix: polish portfolio foundation"
```

Skip this commit when QA required no code changes.

---

## Phase 1 Completion Gate

Phase 1 is complete only when fresh evidence confirms:

```text
npm run lint -> exit 0
npm run build -> exit 0
5 portfolio routes render
4 category pages contain 4 registered demos each
homepage contains 16 registered demos
mobile layout has no horizontal overflow
keyboard navigation and focus states work
portfolio sitemap excludes fictional demo routes
no demo template skeletons were created prematurely
```

After this gate, Phase 2 gets its own design/implementation cycle for `restaurant-04` (Japanese minimal) to validate `src/templates/<template-id>/src/data/site.ts` before any other demo is built.
