# Coiffure 03 — Form Studio — Design Specification

## Purpose

Create `coiffure-03`, a complete static showcase website for a fictional contemporary hair salon named **Form Studio**. The template must feel materially different from the other coiffure templates while remaining credible for the business.

Form Studio is a precise, modern salon centered on cut, color, styling and care. Its visual language is Swiss-inspired, functional and architectural rather than luxurious, street-oriented or expressive.

## Positioning

- Business: contemporary hair salon / styling studio.
- Personality: precise, calm, modern, rational, design-conscious.
- Visual reference: Swiss editorial grid, modernist wayfinding, printed service sheets, architectural photography.
- Avoid: beauty-magazine luxury, barber-shop darkness, collage chaos, generic SaaS cards, e-commerce UI, fake booking systems.

## Differentiation from the other coiffure templates

### Maison Élise

Maison Élise is warm, editorial and beauty-led, with expressive serif typography and asymmetrical magazine compositions.

Form Studio must instead use a strict typographic system, cooler neutral tones, hard alignment, numbered sections and a functional layout.

### District Cut

District Cut uses a dark street-barber identity, a desktop side rail, flash photography and poster-like density.

Form Studio must instead be bright, horizontal, restrained and spacious, with no side rail and no poster layering.

### Chromatic

Chromatic is reserved for the later colorful/artistic direction. Form Studio must not use expressive collage, cut-out portrait treatments or multiple strong colors.

## Visual System

### Palette

- Off white: `#F3F2ED`
- Black: `#111111`
- Cool gray: `#B7BAB7`
- Light line gray: `#D9DAD6`
- Acid green accent: `#C7FF32`

The acid green is a wayfinding accent only. It should appear on small labels, active states, selected markers or very small graphic blocks, never as a dominant page background.

### Typography

Use a clean grotesk / neo-grotesk sans-serif system. The design should rely on hierarchy, scale, spacing and numbering instead of decorative type.

Preferred behavior:

- oversized uppercase display headings;
- compact utility labels;
- readable neutral body copy;
- tabular-looking service rows and section numbers;
- no serif display font;
- no monospace-heavy aesthetic.

Use existing project-compatible font loading patterns and avoid adding a new package dependency unless necessary.

## Global Layout

### Desktop header

Use a thin horizontal header rather than a tall hero navigation or side rail.

- left: `FORM STUDIO` wordmark;
- right: numbered navigation labels;
- strong horizontal rule under the header;
- restrained active state using the acid-green accent.

### Mobile navigation

The mobile layout must remain editorial rather than turning into generic cards.

- compact wordmark row;
- accessible menu interaction;
- links remain numbered;
- clear focus states and minimum practical touch targets;
- no hover-only navigation behavior.

## Home Page

Route: `/sites/coiffure-03`

The home page should feel like a printed Swiss editorial spread translated to the web.

### Hero

Do not use a conventional centered hero or full-screen background image.

Structure:

- large `FORM / STUDIO` display title across the grid;
- small introductory text block aligned to the left grid columns;
- tall vertical salon/hair image placed off-axis on the right;
- section metadata / location / discipline markers placed as small typographic annotations;
- one restrained primary CTA to services and one contact link.

The title, image and supporting copy should deliberately occupy different grid columns rather than sitting inside one centered container.

### Services preview

Present services as a typographic table, not cards.

Suggested rows:

- `01 / CUT`
- `02 / COLOR`
- `03 / STYLE`
- `04 / CARE`

Each row should use a strong horizontal divider, service name, short descriptor and optional illustrative duration. Any illustrative pricing or duration must be clearly treated as demonstration content and not presented as a real commercial claim.

### Studio statement

Use a strict two-column section combining architectural salon photography and short copy about the studio approach.

The emphasis should be on precision, consultation, shape, texture and maintenance rather than lifestyle marketing.

### Work preview

Use a controlled image grid rather than a carousel.

Preferred desktop rhythm:

- first row: one image occupying roughly two-thirds and one narrow image occupying one-third;
- second row: invert the proportions;
- image spacing follows the same grid lines as the typography.

### Contact close

End with a compact information-sheet composition instead of a large marketing CTA.

Include fictional/demo address, hours and contact details with an explicit demo disclosure where needed.

No functional booking form.

## Pages and Routes

### `/sites/coiffure-03`

Home page described above.

### `/sites/coiffure-03/services`

Purpose: clear overview of the salon offer.

Design:

- large page number and heading;
- service rows rather than cards;
- grouped categories for cut, color, styling and care;
- restrained explanatory notes;
- strong dividers and alignment.

### `/sites/coiffure-03/studio`

Purpose: explain the salon space, approach and working philosophy.

Design:

- architecture-led imagery;
- two-column and three-column grid combinations;
- short, factual paragraphs;
- no fake founder biography, award list or testimonials.

### `/sites/coiffure-03/work`

Purpose: visual book of cuts, texture and color work.

Design:

- image-led strict grid;
- alternating 2/3 and 1/3 proportions;
- minimal captions using numbered references;
- no masonry randomness and no social-media simulation.

### `/sites/coiffure-03/contact`

Purpose: static practical information.

Include:

- fictional/demo address;
- fictional/demo phone/email if used;
- opening hours;
- access/location note;
- direct navigation back to services/work.

No form, embedded map, iframe or fake booking backend.

## Content Rules

- Keep copy concise and factual.
- Do not invent reviews, awards, certifications or press quotes.
- Do not make medical or treatment claims.
- Do not present fictional prices, address or hours as verified real-world business information.
- Make demo nature clear where necessary without visually polluting the design.
- Avoid generic AI-marketing language.

## Photography Direction

Use images that clearly relate to a modern hair salon and its work.

Preferred subjects:

- contemporary salon interiors with clean lines;
- precise cutting and styling gestures;
- close-up hair texture and shape;
- controlled color work;
- modern editorial portraits where the haircut remains the subject.

Avoid:

- generic fashion portraits with no hair relevance;
- barber imagery associated with District Cut;
- highly romantic beauty imagery associated with Maison Élise;
- colorful collage imagery reserved for Chromatic.

Remote imagery may use the existing allowed Unsplash image domain pattern already present in the repository.

## Responsive Behavior

The visual identity must survive mobile rather than collapsing into repeated cards.

- large display type scales down but remains prominent;
- grid columns collapse into deliberate editorial sequences;
- service rows stay full-width and separated by rules;
- image proportions alternate instead of becoming identical thumbnails;
- horizontal spacing becomes tighter while preserving alignment;
- no horizontal overflow;
- touch targets remain practical;
- navigation and focus states remain accessible.

## Accessibility

- semantic heading order;
- meaningful image `alt` text;
- visible keyboard focus states;
- adequate contrast for utility text and green accent usage;
- interactive targets sized for touch use;
- support `prefers-reduced-motion` if any motion is introduced;
- do not rely on color alone for active states.

## Technical Architecture

Follow the existing repository pattern without sharing visual components with `coiffure-01` or `coiffure-02`.

Expected structure:

```text
app/sites/coiffure-03/
  layout.tsx
  page.tsx
  services/page.tsx
  studio/page.tsx
  work/page.tsx
  contact/page.tsx

src/templates/coiffure-03/
  components/
  lib/
  pages/
  src/data/
  styles/
  types.ts
```

Use centralized template data for navigation, services, contact information, image metadata and repeated labels.

The template owns its visual system under `src/templates/coiffure-03/**`.

## Metadata and Indexing

All Coiffure 03 pages must inherit metadata that includes:

```ts
robots: { index: false, follow: true }
```

The demo must not be intended for indexing as a standalone real business.

## Portfolio Publication

After the template itself is verified:

- update `src/portfolio/data/sites.ts`;
- change `coiffure-03` from `planned` to `available`;
- update its summary to describe the implemented Swiss functional direction;
- attach `/previews/coiffure-03-home.webp` as the preview;
- update `preview-target.json` to capture `/sites/coiffure-03` at `1440x1000`;
- use the repository preview workflow to generate the real browser-rendered WebP.

## Verification Strategy

Add a dedicated smoke contract for Coiffure 03 before implementation.

The contract should verify:

- all five routes return 200;
- all five pages include `noindex, follow`;
- expected navigation links exist;
- key Form Studio markers and service labels exist;
- no `<form>` or `<iframe>` appears;
- the coiffure category contains the `coiffure-03` card;
- when publication is required, the category references `coiffure-03-home.webp` and the preview file exists.

The implementation must pass:

- repository lint;
- production build;
- dedicated Coiffure 03 smoke workflow;
- global portfolio smoke workflow;
- existing regression workflows relevant to previously published templates.

## Success Criteria

Form Studio is successful when:

1. it looks structurally and visually distinct from Maison Élise and District Cut;
2. the design clearly reads as a contemporary hair salon rather than a generic design studio;
3. the Swiss grid is visible in typography, alignment, service presentation and image placement;
4. the site remains usable and recognizable on mobile;
5. all five routes build and pass the smoke contract;
6. the portfolio publishes a real generated preview;
7. existing portfolio templates remain unaffected.
