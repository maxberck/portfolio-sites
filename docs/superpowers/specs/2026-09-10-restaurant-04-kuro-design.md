# Restaurant 04 — Kuro Editorial Design

Date: 2026-09-10

## Objective

Build `restaurant-04` as the first complete reference template inside `portfolio-sites`. Kuro must behave like a credible standalone Japanese restaurant website while remaining clearly identifiable as a portfolio demo and easy to extract into a future client repository.

This template validates the repository's isolation strategy, the `site.ts` editing contract, route composition, SEO defaults for fictional businesses, responsive behavior, and the ability to create a genuinely distinct visual identity without relying on a generic business-site engine.

## Primary Communication Job

Within the first few seconds, the visitor should understand that Kuro is a contemporary Japanese table built around precision, seasonality, restraint, and calm.

The design must communicate quality through composition and typography rather than decorative luxury effects.

## Approved Creative Territory

**Direction:** Kuro Editorial

Visual character:

- warm ivory background
- charcoal typography and surfaces
- restrained lacquer-red accent
- thin rules and fine framing details
- large areas of intentional negative space
- asymmetrical editorial layouts
- quiet, crop-led food and interior photography
- serif display typography paired with a restrained sans-serif utility face
- disciplined vertical rhythm
- minimal border radius
- no card-heavy layout system

Avoid:

- neon Tokyo imagery
- anime references
- sakura decoration
- cyberpunk styling
- glassmorphism
- decorative gradients
- generic SaaS cards
- repeated pill UI
- oversized rounded containers
- fake luxury awards or press quotes

## Information Architecture

Routes:

- `/sites/restaurant-04`
- `/sites/restaurant-04/menu`
- `/sites/restaurant-04/restaurant`
- `/sites/restaurant-04/galerie`
- `/sites/restaurant-04/contact`

All pages share Kuro's own header, navigation, footer, visual tokens and metadata policy.

The portfolio shell must not visually wrap the demo. A discreet return-to-portfolio link may appear in the Kuro footer or a low-emphasis utility position.

## Route Responsibilities

### Home

Primary purpose: establish atmosphere and positioning.

Sections:

1. restrained header / wordmark
2. asymmetrical hero with one dominant photographic focal point
3. short editorial introduction
4. three signature dishes
5. seasonal statement
6. small gallery fragment
7. essential visit information
8. footer with demo disclosure and return-to-portfolio link

Hero headline direction:

`Précision. Saison. Silence.`

Supporting copy should be short and specific, never generic hospitality marketing language.

### Menu

Primary purpose: scan dishes and prices quickly while preserving the quiet visual identity.

Use typography, spacing and rules rather than cards.

Expected groups:

- Omakase / tasting menu
- Small plates
- Sushi & sashimi
- Mains
- Desserts
- Sake, tea and non-alcoholic drinks

Prices are realistic demo data. Menu descriptions should name actual ingredients and techniques without pretending to represent a real establishment.

### Restaurant

Primary purpose: explain philosophy, approach to ingredients and atmosphere.

Content:

- restaurant philosophy
- seasonal approach
- sourcing principles expressed generically and truthfully
- service style
- interior / atmosphere narrative

Do not invent awards, media coverage, celebrity chefs, Michelin claims or unverifiable credentials.

### Galerie

Primary purpose: demonstrate the visual identity through photography-led composition.

Use an irregular editorial grid with varying image proportions rather than a carousel or masonry plugin.

The page must remain readable and balanced even if images fail to load.

### Contact

Primary purpose: provide useful visit information without implying unavailable functionality.

Include:

- clearly fictional/demo Brussels location information
- demo phone number
- reserved `.example` email domain
- service hours
- simple access/public transport note
- no reservation form
- no booking widget
- no fake map API

## Template Boundary

The complete visual and content domain lives under:

```text
src/templates/restaurant-04/
```

Expected structure:

```text
src/templates/restaurant-04/
├── components/
├── pages/
├── src/
│   └── data/
│       ├── site.ts
│       └── menu.ts
├── styles/
└── types.ts
```

Next.js route files under:

```text
app/sites/restaurant-04/
```

must stay thin and import the template's page-level components.

Do not duplicate large amounts of UI directly inside route files.

## `site.ts` Contract

`src/templates/restaurant-04/src/data/site.ts` is the primary client-editable contract.

It centralizes:

- business name
- short descriptor
- logo/wordmark data
- editable color tokens
- contact information
- service hours
- social links
- navigation
- hero copy
- principal image paths
- gallery image paths
- visit information
- demo disclosure
- SEO title and description

All business-editable colors must come from this file and be exposed to the template through CSS custom properties.

Stable variables:

- `--site-background`
- `--site-surface`
- `--site-text`
- `--site-muted`
- `--site-primary`
- `--site-accent`
- `--site-line`

Do not construct dynamic Tailwind class names from hex values.

## Menu Data

Keep menu data separate from general business configuration because it is a larger structured dataset.

`menu.ts` should export typed menu sections and items with fields such as:

- name
- optional short Japanese/romaji label only when confidently correct
- description
- price
- optional dietary note

The menu page and home signature-dish section should consume the same source data where practical rather than duplicating prices.

## Components

Expected reusable template-local components:

- `KuroHeader`
- `KuroFooter`
- `SectionIntro`
- `DishList`
- `VisitDetails`
- `EditorialImage`
- `PortfolioReturnLink`

Avoid extracting tiny wrappers whose only purpose is to reduce line count. Components should correspond to meaningful visual or semantic units.

## Visual Composition

### Desktop

Hero uses an asymmetrical two-part composition with one dominant image and one restrained text block.

The image is the single primary focal anchor. Typography and lacquer-red details remain secondary.

Sections alternate between:

- full-width editorial image moments
- narrow reading columns
- split compositions
- horizontally ruled menu lists

The page should retain approximately 6–8% outer breathing room at large widths and avoid equal-emphasis multi-column clutter.

### Mobile

The design becomes linear without turning into a generic stacked-card UI.

Rules:

- image-first hero remains the focal point
- navigation uses an accessible compact menu
- no horizontal overflow
- comfortable tap targets
- body copy remains narrow enough to read comfortably
- rules and spacing preserve hierarchy
- gallery becomes a deliberate single/two-column sequence depending on width

## Typography

Use a refined editorial serif for display hierarchy and a neutral sans-serif for navigation, metadata and body support.

Font loading must be scoped to the Kuro template/layout rather than loaded globally for all future templates.

Typography should differentiate Kuro through proportion and rhythm, not through decorative Japanese imitation.

Avoid fake brush fonts or pseudo-calligraphy.

## Media Strategy

Template-editable media belongs under:

```text
public/sites/restaurant-04/
```

Expected groups:

- hero
- food details
- interior/atmosphere
- gallery
- optional Open Graph preview image

Use `next/image` for meaningful raster images where possible.

Every meaningful image receives descriptive alt text. Decorative imagery uses an empty alt attribute.

The layout must not collapse if an image is unavailable.

## SEO and Indexation

Kuro must demonstrate production-quality page metadata while remaining a fictional portfolio demo.

All Kuro routes default to:

- `robots.index = false`
- `robots.follow = true`

Each route has a unique title and description.

Do not add fake `LocalBusiness` / restaurant structured data that could imply Kuro is a real operating establishment.

When this template is extracted for a real client, indexation, canonical host, sitemap inclusion, business data and structured data can be enabled in that new project.

## Accessibility

Requirements:

- semantic `header`, `nav`, `main`, `footer`
- exactly one meaningful `h1` per page
- keyboard-accessible mobile navigation
- visible focus treatment
- sufficient contrast
- meaningful link labels
- image alternatives
- no hover-only essential information
- reduced-motion friendly interactions
- no autoplay media

## Interaction

Keep interaction deliberately restrained.

Allowed:

- mobile navigation toggle
- subtle hover/focus transitions
- simple image/link emphasis

Excluded:

- carousel
- modal gallery
- scroll hijacking
- autoplay video
- parallax-heavy effects
- custom cursor
- decorative loading screen

Kuro should feel premium because it is controlled, not because it moves constantly.

## Portfolio Integration

Once Kuro is implemented and verified:

- change only `restaurant-04` in `src/portfolio/data/sites.ts` from `planned` to the available/implemented status supported by the catalogue model
- make its card navigate to `/sites/restaurant-04`
- keep the remaining fifteen demos unchanged
- ensure the portfolio page does not preload unnecessary Kuro route trees unless desired

## Responsive and Browser Validation

Representative checks:

- small mobile around 320–375px
- large mobile around 430px
- tablet around 768px
- laptop around 1280px
- large desktop around 1440px+

Check:

- no horizontal overflow
- header/menu behavior
- hero hierarchy
- menu price alignment
- gallery rhythm
- contact readability
- focus visibility
- image aspect-ratio stability

## Verification Gates

Before Phase 2 is considered complete:

1. `npm ci` succeeds in CI.
2. `npm run lint` succeeds.
3. `npm run build` succeeds.
4. All five Kuro routes are generated and return successful HTTP responses.
5. Kuro pages contain `noindex, follow` metadata.
6. `/sites/restaurant-04` is reachable from the portfolio card only after implementation is complete.
7. Remaining fifteen demo cards remain non-navigable/planned.
8. No booking form, reservation widget or backend interaction exists.
9. No client-editable Kuro colors are hardcoded outside the theme boundary except deliberate neutral infrastructure values.
10. No obvious Vite-era hash routing or copied standalone-app shell remains.

## Scope Exclusions

Do not add in Phase 2:

- reservation system
- real map API
- backend
- CMS
- payments
- authentication
- analytics
- localization framework
- external restaurant API
- user accounts
- admin panel
- animation library unless a concrete need appears

## Success Definition

Phase 2 succeeds when Kuro feels like a complete, independently designed restaurant website, validates the template-isolation architecture, can be edited primarily through `site.ts`, remains safe as fictional portfolio content, and does not force future templates to reuse its visual structure.
