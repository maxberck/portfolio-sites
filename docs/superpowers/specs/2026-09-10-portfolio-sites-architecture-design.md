# Portfolio Sites — Architecture Design

Date: 2026-09-10

## Objective

Build the existing `portfolio-sites` repository into a professional developer portfolio that acts as a catalogue of fully navigable showcase websites. The portfolio itself and every demo must be production-quality, responsive, SEO-aware, accessible, and easy to reuse as the starting point for a real client website.

This repository is not a SaaS. It will not contain payments, accounts, a client dashboard, business backend, database, CMS, or online editor.

## Existing Stack

Keep the current stack already installed in the repository:

- Next.js 16.3.4
- React 19.2.8
- TypeScript 5
- Tailwind CSS 4
- ESLint 9
- Node.js / npm
- Next.js App Router

Do not recreate the repository with `create-next-app`.

## Architecture Decision

Use a single Next.js application with strongly isolated templates.

The portfolio shell owns discovery, category pages, catalogue cards, shared portfolio navigation, global SEO, sitemap, and robots rules.

Each showcase site remains an independent visual and component domain under `src/templates/<template-id>/`. Routes under `app/sites/<template-id>/` only expose those template components through the Next.js router.

This preserves the operational simplicity of one application while making each template easy to extract into a standalone client project later.

Do not build one generic business-site component that is recolored sixteen times.

## Primary Route Structure

Portfolio routes:

- `/`
- `/categories/garage`
- `/categories/restaurant`
- `/categories/coiffure`
- `/categories/tatoueur`

Demo routes use explicit readable URLs, for example:

- `/sites/garage-01`
- `/sites/garage-01/services`
- `/sites/garage-01/vehicules`
- `/sites/garage-01/a-propos`
- `/sites/garage-01/contact`

Restaurant example:

- `/sites/restaurant-04`
- `/sites/restaurant-04/menu`
- `/sites/restaurant-04/restaurant`
- `/sites/restaurant-04/galerie`
- `/sites/restaurant-04/contact`

Avoid a generic catch-all routing engine unless a concrete need appears later.

## Target Repository Structure

```text
portfolio-sites/
├── app/
│   ├── (portfolio)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── categories/
│   │       ├── garage/page.tsx
│   │       ├── restaurant/page.tsx
│   │       ├── coiffure/page.tsx
│   │       └── tatoueur/page.tsx
│   ├── sites/
│   │   ├── garage-01/
│   │   ├── garage-02/
│   │   ├── garage-03/
│   │   ├── garage-04/
│   │   ├── restaurant-01/
│   │   ├── restaurant-02/
│   │   ├── restaurant-03/
│   │   ├── restaurant-04/
│   │   ├── coiffure-01/
│   │   ├── coiffure-02/
│   │   ├── coiffure-03/
│   │   ├── coiffure-04/
│   │   ├── tatoueur-01/
│   │   ├── tatoueur-02/
│   │   ├── tatoueur-03/
│   │   └── tatoueur-04/
│   ├── layout.tsx
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts
├── src/
│   ├── portfolio/
│   │   ├── components/
│   │   ├── data/sites.ts
│   │   └── types.ts
│   ├── templates/
│   │   ├── garage-01/
│   │   ├── garage-02/
│   │   ├── garage-03/
│   │   ├── garage-04/
│   │   ├── restaurant-01/
│   │   ├── restaurant-02/
│   │   ├── restaurant-03/
│   │   ├── restaurant-04/
│   │   ├── coiffure-01/
│   │   ├── coiffure-02/
│   │   ├── coiffure-03/
│   │   ├── coiffure-04/
│   │   ├── tatoueur-01/
│   │   ├── tatoueur-02/
│   │   ├── tatoueur-03/
│   │   └── tatoueur-04/
│   └── shared/
│       ├── types/
│       └── utils/
└── public/
    └── sites/
        ├── garage-01/
        ├── garage-02/
        ├── ...
        └── tatoueur-04/
```

## Portfolio Catalogue

The portfolio homepage communicates one primary job immediately: demonstrate breadth of front-end and visual design capability through real navigable websites.

It contains:

1. concise hero and positioning
2. category navigation
3. catalogue grid
4. sixteen demo cards once all templates exist
5. clear entry CTA for each demo
6. short developer/profile credibility section
7. contact CTA and footer

Category pages show only the matching templates and have their own indexable metadata.

Cards are navigation entry points, never iframes, modals, or screenshots pretending to be websites.

## Template Isolation Rules

Every template owns its own:

- layout composition
- header and navigation
- page components
- sections
- typography decisions
- visual rhythm
- content data
- site color tokens
- business-specific fields
- demo SEO metadata

Shared code is allowed only for infrastructure-level concerns that do not flatten visual identity, such as primitive TypeScript types, utilities, accessibility helpers, or the optional demo-return control.

## `site.ts` Contract

Every template contains one central editable configuration file conceptually equivalent to:

```text
src/templates/<template-id>/src/data/site.ts
```

It must centralize the values most likely to change when adapting the demo to a client:

- business name
- logo
- colors
- contact information
- social links
- SEO
- hero copy
- navigation
- services
- gallery
- testimonials
- images
- category-specific business data

Use a small common base type plus narrow category extensions. Do not create a universal mega-schema.

## Color Strategy

Colors live in `site.ts` and are exposed as CSS custom properties at the template boundary.

Components should consume stable variables such as:

- `--site-background`
- `--site-surface`
- `--site-text`
- `--site-muted`
- `--site-primary`
- `--site-accent`

Avoid dynamic Tailwind class-name construction from arbitrary strings. Tailwind utilities may reference CSS variables when useful.

## Images

Primary template media lives under:

```text
public/sites/<template-id>/
```

This allows `site.ts` to use simple replaceable paths and makes client conversion straightforward.

Use `next/image` for meaningful raster imagery where appropriate. Keep repository-local design assets in `src/assets` only when they are tightly coupled to implementation rather than client-editable content.

## SEO Strategy

### Portfolio

Portfolio and category pages are indexable and receive:

- semantic HTML
- unique titles and descriptions
- Open Graph metadata
- canonical URLs when the production domain exists
- sitemap coverage
- robots rules
- accessible heading structure

### Demo Sites

Demos must be built with production-quality SEO structure but should default to `noindex, follow` while they represent fictional businesses inside the portfolio.

Each demo still owns realistic metadata, semantic page structure, unique title/description, Open Graph data, and clean URLs.

When a template becomes a real client site, change the indexation policy, canonical domain, sitemap, robots behavior, business metadata, OG assets, and business copy.

## Rendering and Performance

Use static rendering by default because portfolio and demo content is primarily static.

Prefer Server Components. Add Client Components only for interactions that require browser state, such as mobile menus or a genuinely interactive filter.

Use route-level code splitting provided by Next.js. Do not manually lazy-load entire sites unless measurement shows a need.

For the sixteen catalogue cards, consider disabling route prefetch if eager prefetching produces unnecessary network work.

Use `next/font` per visual domain where useful; do not load all template font families globally.

## Accessibility

Across portfolio and templates:

- semantic landmarks
- one meaningful `h1` per page
- keyboard-operable navigation
- visible focus states
- sufficient contrast
- descriptive image alternatives
- comfortable mobile tap targets
- no horizontal overflow
- reduced-motion consideration for animated designs

## Demo-to-Client Workflow

A finished template must be transferable without changing the original demo.

Expected workflow:

1. choose a template
2. create a separate client project/repository
3. transfer the isolated template implementation
4. move its `site.ts` contract to the client project's `src/data/site.ts`
5. replace images
6. update business content and colors
7. remove the portfolio-return control
8. update metadata, canonical URL, robots, sitemap, and Open Graph
9. run lint/build/accessibility checks
10. push and deploy independently

The architecture must make steps 4–8 the majority of customization work.

## Visual Direction Matrix

The sixteen designs must differ structurally, not merely by color.

### Garages

- Garage 01 — premium automotive: cinematic full-bleed photography, black/grey palette, restrained luxury typography, generous whitespace.
- Garage 02 — industrial workshop: technical grid, structured service data, strong contrast, workshop textures, utilitarian typography.
- Garage 03 — motorsport: diagonal composition, oversized condensed typography, aggressive crops, controlled motion, speed cues.
- Garage 04 — editorial minimal: white-dominant layout, magazine grid, object-focused car photography, small captions, calm pacing.

### Restaurants

- Restaurant 01 — gastronomic luxury: cream/black palette, refined serif typography, asymmetrical editorial layouts, macro food photography.
- Restaurant 02 — street food urban: bold display type, poster-like composition, flash photography, dense energetic menu presentation.
- Restaurant 03 — Mediterranean warmth: terracotta/olive/stone palette, natural textures, sunlit photography, generous organic spacing.
- Restaurant 04 — Japanese minimal: ivory/charcoal/lacquer-red accents, thin rules, quiet photography, strong negative space, disciplined vertical rhythm.

### Hair / Barber

- Coiffure 01 — premium salon: warm neutrals, fashion-editorial portraiture, elegant serif hierarchy, spacious beauty-house feel.
- Coiffure 02 — urban barber: dark palette, steel details, dense grid, high-contrast portraits, condensed typography.
- Coiffure 03 — modern minimal: white/black system, Swiss grid, clean typography, highly legible service and price presentation.
- Coiffure 04 — artistic color: strong chromatic fields, editorial collage, expressive composition, creative-studio personality.

### Tattoo

- Tatoueur 01 — dark underground: deep blacks, print textures, monochrome photography, poster/music-scene energy.
- Tatoueur 02 — minimal gallery: museum-white space, restrained typography, artwork-first presentation, exhibition pacing.
- Tatoueur 03 — old school vintage: ivory/red/navy, flash-sheet motifs, badge language, vintage display typography.
- Tatoueur 04 — contemporary artistic: asymmetrical art-book layout, experimental imagery, abstract forms, editorial typography.

## Anti-Template Rules

To avoid an AI-generated or cloned-template feel:

- do not reuse the same hero composition across a category
- do not repeat identical section order across all sites
- do not rely on gradients/glassmorphism/rounded-card systems by default
- vary typography systems, crop behavior, spacing rhythm, navigation patterns, gallery treatment, and information density
- keep decorative effects subordinate to the brand concept
- every visual decision must reinforce the business positioning

## Implementation Phases

### Phase 1 — Portfolio foundation

Build the portfolio shell, catalogue data model, categories, shared SEO infrastructure, responsive navigation, placeholder demo registry, and core design system.

### Phase 2 — First reference template

Build one complete demo end-to-end to validate the template isolation and `site.ts` workflow before multiplying the pattern.

Use Restaurant 04 (Japanese minimal) as the reference because a completed Kuro concept already exists elsewhere and provides a useful proof point without forcing other categories to share its structure.

### Phase 3 — Remaining templates

Build templates one by one, each with its own design spec and verification. Do not create sixteen empty skeletons first.

### Phase 4 — Portfolio integration polish

Add final screenshots/preview imagery, catalogue metadata, cross-template QA, performance checks, accessibility review, and deployment validation.

## Verification Gates

At each implementation phase:

- `npm run lint`
- `npm run build`
- route checks
- responsive checks
- accessibility sanity checks
- no accidental hardcoded client-editable colors outside theme boundaries
- no demo iframe/modal shortcut
- no fictional demo indexed as a real business

Before production release, verify all routes and all sixteen template identities independently.

## Explicit Non-Goals

Do not add at this stage:

- payments
- authentication
- dashboard
- database
- CMS
- backend business logic
- client editor
- Turborepo
- npm workspaces
- Next.js multi-zones
- micro-frontends
- generic template engine
- complex theme compiler

These can be revisited only if a concrete future requirement justifies them.
