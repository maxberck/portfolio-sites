# Portfolio Home / Templates / Contact — Design Spec

Date: 2026-09-11
Branch: `feat/portfolio-home-templates-contact`

## Goal

Restructure the portfolio shell so the public-facing site has three clear destinations — Home, Templates, Contact — while preserving the current Technical Minimalist visual language. This is an information-architecture and spacing change, not a visual redesign.

## Non-goals

- Do not redesign the portfolio brand, colors, typography, header shell, hero frame, background grid, or footer language.
- Do not restyle individual demo templates.
- Do not remove existing `/categories/*` routes; keep them functional for compatibility and direct linking.
- Do not add a backend, CMS, booking system, or heavy contact form.

## Global navigation

Desktop and mobile navigation becomes:

- Accueil → `/`
- Templates → `/templates`
- Contact → `/contact`

The existing GitHub utility action remains available in the header/footer. Category links move out of the primary header and into the Templates page.

## Home `/`

### Hero

Keep the existing hero composition, copy zone, frame, decorative orbit/corners, typography, colors, borders, and spacing system.

The right-hand hero preview becomes an automatic carousel using real portfolio preview images.

Behavior:
- rotates approximately every 5 seconds;
- uses available site previews only;
- shows the matching site name/category in the existing figcaption area;
- no new marketing-style slider chrome;
- no dots/arrows unless required later;
- pauses animation for `prefers-reduced-motion` users and renders a stable first image;
- image transitions should be restrained and fit the current visual language.

The carousel is a small client component; the rest of the home stays server-rendered.

### Category previews

Replace the current mixed featured-project puzzle grid with four category previews:

- Restaurant
- Garage
- Coiffure
- Tattoo

Each category block uses one real site preview as its visual anchor and links to `/templates` filtered/focused to that category (query/hash or tab state). The blocks retain the existing portfolio styling — borders, mono metadata, display typography, muted body copy — but are spaced as independent editorial objects rather than touching cells.

Composition target:
- 2 columns desktop;
- 1 column mobile;
- horizontal gap around 32px;
- vertical rhythm around 48–64px;
- one clear preview image per category;
- no full-width/half-width alternating puzzle pattern.

## Templates `/templates`

### Purpose

This becomes the canonical catalogue for every demo site.

### Category tabs

Top tabs:
- Tous
- Restaurant
- Garage
- Coiffure
- Tattoo

Tabs reuse the current category-navigation visual language rather than introducing pills or a new UI style.

Filtering should be client-side and instant. URLs should remain shareable where practical (`?category=garage`, hash, or equivalent simple approach), but no backend is needed.

### Project layout

Keep the current `SiteCard` visual design and content hierarchy. Change only catalogue placement/spacing:

Desktop:
- regular 2-column grid;
- ~32px horizontal gap;
- ~56px vertical gap;
- no alternating `wide / standard / wide` pattern;
- previews use a consistent visual height/aspect per row where feasible.

Tablet:
- 2 columns while space allows, with reduced gap.

Mobile:
- 1 column;
- ~40px vertical separation.

Remove the shared 1px-grid-table effect from the Templates catalogue (`gap: 1px`, shared background/border). Each card reads as an independent project object while preserving its own existing border/content styling.

## Contact `/contact`

Create a simple portfolio contact page using the same shell and typography.

Content structure:
- small portfolio label;
- clear contact heading;
- short statement about site-vitrine work;
- primary email/contact CTA if available in existing public project data, otherwise a generic contact action can remain configurable;
- GitHub link;
- optional short availability/process note.

No backend form is required in this pass. If no public email is already present in the repository, do not invent one; render contact copy/configuration in a way that can be filled later.

## Existing category routes

Keep `/categories/restaurant`, `/categories/garage`, `/categories/coiffure`, and `/categories/tatoueur` operational.

They may continue using `CategoryPage` for backward compatibility. Primary navigation should point users to `/templates` instead.

## Components / architecture

Expected additions/changes:
- `src/portfolio/components/PortfolioHeroCarousel.tsx` — client-only rotation of existing previews.
- `src/portfolio/components/TemplatesCatalogue.tsx` — client-side category tabs/filtering.
- update `PortfolioHeader.tsx` — three primary destinations.
- update `PortfolioFooter.tsx` — mirror the new information architecture while retaining style.
- update `CatalogueGrid.tsx` and/or add a dedicated templates grid variant with regular spacing.
- update `app/(portfolio)/page.tsx` — home category previews + carousel.
- add `app/(portfolio)/templates/page.tsx`.
- add `app/(portfolio)/contact/page.tsx`.
- update `src/portfolio/styles/portfolio.css` only where needed; preserve all existing design tokens and visual identity.

Avoid duplicating site data. Reuse `portfolioSites` and `siteCategories` as the single source of truth.

## SEO

- `/` keeps its existing primary portfolio metadata intent.
- `/templates` receives unique metadata describing the catalogue of website demos.
- `/contact` receives unique contact metadata.
- existing category pages keep their metadata and URLs.
- internal links should use semantic Next.js `Link` where appropriate.

## Accessibility

- carousel respects `prefers-reduced-motion`;
- carousel images keep meaningful alt text from current preview data;
- tab controls are keyboard accessible and expose selected state;
- headings remain hierarchical;
- no horizontal overflow at portfolio breakpoints;
- interactive hit areas remain at least approximately 44px where existing shell conventions already do so.

## Visual invariants

The following must remain recognizably unchanged:
- warm off-white paper background;
- technical background grid;
- forest-green primary accent;
- current display + mono typographic relationship;
- fixed header geometry;
- hero left/right composition;
- hero frame, border, orbit and corner markers;
- thin technical rules;
- existing `SiteCard` visual styling.

The change should be visible primarily through better spacing, clearer page roles, and a cleaner catalogue rhythm — not through a new design system.

## QA

Add/update checks to cover:
- `/`, `/templates`, `/contact` return 200;
- header links point to the three destinations;
- Templates tab filtering works for all four categories and `Tous`;
- all available cards still open their demo URLs;
- home category previews show one real preview per category;
- carousel uses only valid preview images;
- no broken images;
- no horizontal overflow;
- no text/image overlaps at desktop and mobile;
- reduced-motion mode disables automatic carousel cycling;
- existing `/categories/*` routes remain reachable.

## Success criteria

The portfolio still looks like the same site at first glance, but navigation is simpler, the home communicates the four business categories immediately, the hero feels more alive through real-site preview rotation, and the Templates catalogue no longer feels cramped or puzzle-like.