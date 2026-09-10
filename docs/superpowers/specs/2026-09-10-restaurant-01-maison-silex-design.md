# Restaurant 01 — Maison Silex Design Spec

Date: 2026-09-10

## Objective

Build `restaurant-01` as a complete gastronomic restaurant showcase site inside the existing `portfolio-sites` application. Maison Silex must feel like a real high-end restaurant website, not a reskin of Kuro and not a generic card-based template.

The demo remains fictional and must stay `noindex, follow` while hosted inside the portfolio.

## Positioning

Maison Silex is a contemporary gastronomic table built around seasonal produce, restrained luxury and tactile materials. The visual tone should communicate precision without sterility and luxury without obvious gold/black clichés.

Primary communication job: within the first viewport, make the visitor understand that Maison Silex is an intimate, premium dining experience centered on a chef-led seasonal menu.

Primary message: `Une cuisine de saison, précise et sensible.`

Secondary message: a small-table restaurant where ingredients, texture and service matter more than spectacle.

Desired action: explore the menu and the restaurant, then reach the contact page for practical information.

## Differentiation From Kuro

Maison Silex must not reuse Kuro's visual grammar.

Kuro is quiet Japanese minimalism with strong negative space, thin rules and a vertical editorial rhythm.

Maison Silex instead uses:

- warm cream and mineral tones rather than ivory/charcoal/red
- layered editorial composition rather than disciplined linear minimalism
- macro food photography and tactile surfaces
- a serif-led identity with expressive scale contrast
- richer section transitions and overlapping image/text relationships
- a more intimate, sensual pacing
- warmer copywriting and hospitality cues

Do not reuse Kuro's hero layout, header structure, gallery rhythm, section order, or visual tokens.

## Route Structure

Create explicit routes:

- `/sites/restaurant-01`
- `/sites/restaurant-01/menu`
- `/sites/restaurant-01/maison`
- `/sites/restaurant-01/galerie`
- `/sites/restaurant-01/contact`

The navigation labels are:

- Accueil
- Menu
- La Maison
- Galerie
- Contact

The route files under `app/sites/restaurant-01/` stay thin and only expose the isolated template domain.

## Template Structure

Use an isolated domain under:

```text
src/templates/restaurant-01/
├── components/
├── pages/
├── lib/
├── src/data/
│   ├── site.ts
│   └── menu.ts
├── styles/
└── types.ts
```

Do not introduce a generic restaurant renderer shared with Kuro.

Shared portfolio infrastructure may be reused only for non-visual concerns such as the return-to-portfolio behavior or generic TypeScript helpers.

## Central Data Contract

`src/templates/restaurant-01/src/data/site.ts` centralizes client-editable values:

- restaurant name
- tagline
- short positioning copy
- colors
- contact information
- fictional safe address
- email under `.example`
- phone display value
- social links
- opening hours
- navigation
- SEO title and description
- hero copy
- image references and alt text
- chef information
- story sections
- gallery images
- service notes

`menu.ts` owns structured menu content and prices because the menu is a category-specific dataset that may grow independently.

Use narrow types. Do not expand the global portfolio types into a restaurant mega-schema.

## Color System

Client-editable color values live in `site.ts` and are translated into CSS custom properties at the Maison Silex template boundary.

Recommended semantic tokens:

- `--silex-background`: warm cream / parchment
- `--silex-surface`: lighter mineral surface
- `--silex-text`: deep brown-black
- `--silex-muted`: warm grey
- `--silex-accent`: muted clay / oxblood
- `--silex-line`: low-contrast mineral line

Avoid metallic-gold luxury clichés. The premium effect must come from typography, photography, spacing and composition rather than shiny decoration.

Components consume semantic variables and must not construct arbitrary Tailwind color classes dynamically.

## Typography

Use a strong editorial serif for large headings and a clean sans-serif for utility text, navigation and metadata.

Typography behavior:

- large serif headline with controlled wrapping
- occasional italic serif emphasis for culinary language
- small uppercase tracking for section labels
- compact sans-serif for practical information
- strong scale contrast between editorial content and metadata

Do not use the same type pairing or title proportions as Kuro.

## Header and Navigation

Desktop header:

- brand wordmark on the left
- restrained center/right navigation
- no pill navigation
- no SaaS-style primary button
- subtle divider or floating-over-hero treatment depending on scroll position

Mobile:

- brand plus one clear menu trigger
- large touch targets
- vertical menu panel
- keyboard-operable close behavior
- no horizontal overflow

The header is the only required client component unless another interaction is justified later.

## Homepage Composition

The homepage must feel like a restaurant editorial rather than a landing-page component stack.

### 1. Hero

Use an asymmetrical editorial hero with one dominant food photograph and an offset text block.

Content hierarchy:

- small label: `Bruxelles · Cuisine gastronomique`
- headline: `Une cuisine de saison, précise et sensible.`
- short two-line introduction
- text link to `Découvrir le menu`

The hero should have one visual focal point and no carousel.

### 2. Seasonal Statement

A quieter section introducing the current fictional season/menu philosophy with generous spacing and a small ingredient list.

### 3. Signature Dishes

Show a limited number of dishes in a magazine-like composition rather than identical cards. Use differing image ratios and aligned captions.

### 4. Chef / Maison Fragment

Introduce the fictional chef and the philosophy of the dining room. Use portrait/interior imagery and a strong pull quote.

### 5. Menu Preview

A compact typographic preview of the tasting menu, not the full menu page.

### 6. Visit Information

Opening hours, fictional address and contact details in a quiet closing composition.

## Menu Page

The menu page is primarily typographic.

It contains:

- page introduction
- tasting menu sections
- dish names
- concise ingredient descriptions
- optional pairings
- clear prices
- dietary / seasonal note

Avoid a grid of rounded cards. The structure should resemble a refined printed menu adapted to screen.

Use enough contrast and spacing that price alignment remains readable on mobile.

## Maison Page

This page tells the restaurant story.

Sections may include:

- philosophy
- chef profile
- ingredients / suppliers concept
- dining room
- service approach

Use long-form editorial pacing with image interruptions and pull quotes. It should not repeat the homepage section order.

## Gallery Page

The gallery should feel curated rather than like a uniform image grid.

Use:

- mixed portrait and landscape ratios
- asymmetric columns on desktop
- large hero image followed by smaller editorial groupings
- concise optional captions
- semantic alt text for every meaningful image

On mobile, collapse to a stable single-column sequence without visual overlap.

## Contact Page

The contact page is informational only.

Include:

- `Adresse de démonstration` label
- fictional address
- opening hours
- phone display value
- `.example` email
- access / neighborhood note
- short note that this is a portfolio demo

Do not implement real reservation, booking, form submission, maps API, backend or third-party widget.

## Image Strategy

Use `next/image` for raster imagery.

Client-replaceable media should eventually live under:

```text
public/sites/restaurant-01/
```

During initial implementation, remote placeholder references are acceptable only if they are explicit in `site.ts`, have stable dimensions, meaningful alt text and do not require adding opaque binary assets through the GitHub connector.

The final portfolio-polish phase may replace them with repository-owned preview assets.

## SEO

Every Maison Silex route gets unique metadata.

Requirements:

- title
- description
- Open Graph metadata where appropriate
- semantic HTML
- one meaningful `h1` per route
- page-level `robots: { index: false, follow: true }`

Do not add Maison Silex to the root sitemap as an indexable fictional business.

When extracted for a real client, the noindex policy, canonical URL, domain, business details, sitemap and OG assets must be replaced.

## Accessibility

Required:

- semantic header/nav/main/footer landmarks
- one `h1` per page
- visible keyboard focus
- keyboard-operable mobile menu
- sufficient color contrast
- descriptive image alt text
- touch targets around 44px where practical
- no content hidden only by hover
- no horizontal scrolling at common mobile widths
- reduced-motion safe behavior if motion is introduced

## Responsive Behavior

Desktop uses layered editorial composition and asymmetric image relationships.

Tablet simplifies overlaps and preserves hierarchy.

Mobile becomes predominantly single-column, with:

- no absolute-positioned text that can collide
- full-width or bounded imagery
- typographic scale reduced without flattening hierarchy
- clear menu price alignment
- comfortable side padding
- no horizontal overflow

The mobile version must remain intentionally designed rather than merely stacked desktop sections.

## Performance

Use Server Components by default.

Only the mobile navigation should require client-side state unless an interaction is later proven necessary.

Use `next/image` sizing and lazy behavior for below-the-fold photography.

Do not load unrelated template assets or fonts globally.

All Maison Silex routes should remain statically renderable.

## Portfolio Integration

Maison Silex remains `planned` until all its routes, metadata and smoke tests pass.

After verification:

- change only `restaurant-01` to `available`
- its portfolio card becomes navigable
- existing Kuro remains available
- the total available demo count becomes 2

Do not alter the status of any other template.

## Testing Strategy

Follow a RED → GREEN flow in GitHub Actions.

Before implementation, extend smoke coverage so the new Maison Silex expectations fail because the routes do not exist.

Final verification must prove:

- `npm ci` passes
- `npm run lint` passes
- `npm run build` passes
- all five Maison Silex routes return successfully
- all five are statically generated by Next.js
- all five include `noindex, follow`
- homepage and category card counts remain unchanged
- Maison Silex appears as a real available link in the restaurant category
- exactly 2 rendered portfolio cards are `available`
- Kuro remains reachable and unchanged by the Maison Silex implementation

## Anti-Template Rules

Maison Silex must not use:

- the same hero structure as Kuro
- Kuro's color system
- a repeated grid of generic rounded cards
- glassmorphism
- decorative gradients as the main visual device
- a dashboard-style header
- identical section composition across pages
- a universal restaurant component shared with other demos

The design must differentiate through layout, typography, image ratios, rhythm, content density and storytelling, not merely color.

## Non-Goals

Do not add:

- reservations
- payments
- authentication
- dashboard
- CMS
- database
- backend
- third-party maps
- real business schema claiming a fictional business exists
- generic template engine

## Completion Definition

Maison Silex is complete when it behaves as a coherent five-page restaurant website, is responsive and semantically sound, exposes most future client edits through its local data files, stays isolated from Kuro, passes the full CI gate, and only then becomes available from the portfolio catalogue.
