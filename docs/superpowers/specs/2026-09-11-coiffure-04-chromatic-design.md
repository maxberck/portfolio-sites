# Coiffure 04 — Chromatic Design Specification

## Purpose

Build `coiffure-04` as a fictional artistic hair-color studio demo named **Chromatic**. It must feel like a real colorist studio and a distinct fourth visual language in the Coiffure category, not a recolored version of Maison Élise, District Cut, or Form Studio.

The core direction is **Color Lab editorial**: oversized typography, cutout hair portraits, hard color fields, technical shade annotations, changing section compositions, and a contact-sheet-inspired work presentation.

## Positioning and differentiation

Chromatic owns the **artistic color / creative colorist** territory.

It must remain visibly separate from:

- **Maison Élise** — warm premium beauty editorial, serif-led and refined.
- **District Cut** — dark urban barber identity, side rail, flash photography, service-board language.
- **Form Studio** — Swiss functional minimalism, strict grid, ruled service tables, restrained acid-green wayfinding.

Chromatic therefore must not use:

- a persistent desktop side rail;
- a rigid Swiss grid as the dominant visual system;
- dark barber-shop styling;
- luxury serif-led beauty styling;
- generic SaaS cards;
- repeated equal-sized feature cards;
- glassmorphism, gradients, or decorative AI-style blobs.

## Brand concept

**Name:** Chromatic

**Descriptor:** Creative Color Studio

**Editorial idea:** hair color treated as a design material. The site should feel part salon, part color lab, part art-direction lookbook.

The tone is concise, visual, technical when useful, and never pretends the fictional business has real awards, reviews, clients, or availability.

## Routes

Chromatic has five static routes:

- `/sites/coiffure-04`
- `/sites/coiffure-04/color`
- `/sites/coiffure-04/studio`
- `/sites/coiffure-04/work`
- `/sites/coiffure-04/contact`

Every route uses `robots: { index: false, follow: true }`.

No route contains a real booking flow, backend form, payment, account, iframe, embedded map, geolocation, live availability, review feed, or external salon platform.

## Navigation

Desktop navigation is a **small horizontal utility header** rather than a visually dominant navigation system.

Suggested structure:

- wordmark `CHROMATIC` left;
- route links right;
- tiny studio descriptor / route index as secondary text;
- active state uses typography plus a small hard-edged color tab, never color alone.

Mobile uses a compact accessible menu. The menu must preserve the art-direction identity but remain practical, keyboard reachable, and large enough for touch.

## Visual system

### Palette

Use hard, flat colors with no gradients.

Core neutrals:

- warm paper: `#F4F0E8`
- near black: `#111111`
- utility gray: `#77736D`
- line gray: `#D5D0C7`

Chromatic accents:

- fuchsia: `#FF3EA5`
- electric blue: `#2F5BFF`
- tangerine: `#FF6A2A`
- acid green: `#C8FF36`

The accents should appear in large intentional fields or small technical markers. Do not mix all accent colors in every viewport. Each major section should have a dominant color hierarchy.

### Typography

Use a bold grotesk / neo-grotesk sans for display and a neutral sans for utility copy if needed. Avoid serif typography.

Display typography should be oversized enough to act as composition, especially `CHRO / MATIC`, route titles, and service-family labels.

Technical annotations use compact uppercase text, short reference codes, shade labels, and numerical markers.

### Graphic language

Use:

- hard-edged rectangular color fields;
- cropped and layered portraits;
- text partially occluded by imagery where readability remains intact;
- small color swatches and shade references;
- numbered references;
- tight caption systems;
- occasional vertical text;
- visible crop / registration-style alignment cues only when functional to the composition.

Do not use:

- soft gradient meshes;
- glass panels;
- floating 3D spheres;
- excessive rounded cards;
- fake handwritten scribbles that reduce readability;
- random collage chaos without clear hierarchy.

## Photography direction

Photography must remain specific to creative hair color and salon craft.

Preferred subjects:

- vivid or editorial color work;
- blonde tonal work;
- copper / red color work;
- close crops of hair texture and shine;
- color application / bowl / brush / foils when visually clean;
- contemporary studio details.

Avoid generic fashion portraits where hair is not the subject, barber imagery, bridal beauty imagery, and architecture-only photography.

Portraits may be visually cut out or tightly cropped to support collage compositions, but source imagery must retain clear hair relevance.

## Home page

The home page sequence is deliberately irregular while retaining a clear reading order.

### 1. Utility header

Small horizontal header with wordmark and navigation. It should occupy little visual weight compared with the hero.

### 2. Hero — `CHRO / MATIC`

The hero is a full art-direction composition, not a standard split hero and not a single full-screen photo.

Required qualities:

- oversized `CHRO / MATIC` typography split across multiple lines or planes;
- 2–3 hair portraits or crops layered through the typography;
- at least two hard color fields;
- concise intro copy placed in a quieter area;
- one clear route CTA toward `/color` or `/work`;
- no decorative KPI counters.

The composition may allow imagery to pass behind and in front of letterforms, but the brand name must remain understandable.

### 3. Color families

Four service families become four visually distinct color zones:

- `01 BLONDE`
- `02 COPPER`
- `03 VIVID`
- `04 CORRECTION`

They are not rendered as equal cards. Each family can change composition while sharing a content contract: family label, short description, illustrative service examples, and optional demo duration/maintenance note.

Recommended sequencing:

- Blonde: pale field + precise portrait crop;
- Copper: tangerine field + large edge-to-edge texture crop;
- Vivid: fuchsia/electric-blue opposition + more expressive portrait layering;
- Correction: calmer paper/black composition with technical annotation emphasis.

### 4. Color Map

A technical editorial section showing the fictional process:

`DIAGNOSIS → BASE → TONE → CARE`

This is presented as a horizontal system of swatches, short annotations, and process stages. It must not resemble a SaaS stepper.

Desktop may use a broad horizontal band. Mobile may use horizontal scrolling with visible affordance and an accessible linear fallback/read order.

### 5. Work teaser

Combine:

- one oversized hero crop;
- one compact contact sheet of several smaller references;
- short shade labels / work references;
- link to `/work`.

Do not use a regular masonry grid.

### 6. Studio / contact close

End with a compact studio statement and fictional contact details. The close should feel like a printed colophon / studio information block rather than a large generic CTA card.

## Color page

`/color` explains the four color families in more detail.

Each family gets its own composition rather than repeating one component four times identically.

Content may include illustrative demo services such as:

- tonal blonde;
- lived-in blonde;
- copper refresh;
- dimensional copper;
- vivid placement;
- creative panels;
- color correction consultation;
- tonal reset.

Any durations, maintenance intervals, or service descriptions are clearly presented as illustrative demo content, not real commercial availability or pricing.

No appointment controls are included.

## Studio page

`/studio` explains the fictional creative process and physical studio atmosphere.

Focus on:

- consultation and visual references;
- base / undertone assessment;
- placement and saturation strategy;
- finish and maintenance guidance;
- contemporary color-studio imagery.

Avoid founder biography, fake heritage, fake certifications, testimonials, awards, or unsupported sustainability claims.

The layout should use one or two strong image compositions with layered annotation rather than a conventional About-page timeline.

## Work page

`/work` acts as an editorial color lookbook.

The layout combines:

- oversized feature images;
- contact-sheet groups;
- small crop studies;
- shade-family tags;
- numbered work references.

The page must feel intentionally art-directed. Do not use a simple equal thumbnail grid.

Include a visible note that imagery and work references are illustrative demo content.

## Contact page

`/contact` contains fictional/demo information only:

- fictional Brussels location reference;
- fictional phone number;
- `.example` email address;
- illustrative opening hours;
- short access note;
- links back to Color and Work.

No form, embedded map, live booking link, or availability widget.

The page should retain Chromatic’s visual language through large color blocks, oversized contact typography, and a compact information system rather than a standard two-column contact template.

## Content architecture

Centralize all reusable content under `src/templates/coiffure-04/**`.

Recommended model includes:

- business identity;
- navigation;
- hero content;
- color families;
- Color Map stages;
- studio principles;
- work entries / image metadata;
- hours;
- fictional contact details;
- demo disclosure.

Thin App Router files live under `app/sites/coiffure-04/**` and import template-owned page components.

The template owns its own stylesheet, theme variables, components, data, and types. Do not import visual components from Coiffure 01–03.

## Responsive behavior

Chromatic must remain expressive on mobile without degenerating into stacked white cards.

Required mobile behavior:

- large display type remains oversized but wraps intentionally;
- portrait layering simplifies when necessary to protect readability;
- color fields become full-width panels or sectional bands;
- color-family sections keep distinct layouts rather than one repeated card template;
- contact sheet becomes a deliberate two-column or horizontal crop sequence;
- Color Map supports horizontal scrolling with clear visual cue and semantic document order;
- no horizontal page overflow;
- navigation touch targets are at least practical mobile size;
- text must remain readable over all image/color combinations.

## Accessibility

Required:

- semantic heading hierarchy;
- useful alt text for hair/color imagery;
- keyboard-accessible navigation;
- visible `:focus-visible` states;
- active navigation not conveyed by color alone;
- sufficient text contrast on fuchsia, blue, orange, green, paper, and black fields;
- practical touch targets;
- reduced-motion support for any transitions or transforms;
- no essential information encoded only through swatch color.

## Motion

Motion is optional and restrained.

Allowed:

- small image/caption reveals;
- subtle editorial transforms;
- light hover shifts;
- controlled color-tab transitions.

Avoid parallax-heavy behavior, perpetual animation, kinetic typography that harms reading, or motion required to understand content.

All animation respects `prefers-reduced-motion`.

## Portfolio publication

When implementation is complete and verified:

- mark `coiffure-04` as `available` in `src/portfolio/data/sites.ts`;
- update the summary to describe the Color Lab editorial direction;
- add preview metadata for `/previews/coiffure-04-home.webp`;
- set `preview-target.json` to `/sites/coiffure-04`, 1440×1000;
- generate the preview through the existing browser capture workflow.

Do not publish the catalogue entry before route/content smoke checks are green.

## Verification contract

Add a dedicated smoke script and GitHub Actions workflow for Coiffure 04.

The smoke contract must verify at minimum:

- all five routes return 200;
- all routes expose `noindex, follow`;
- home links to all four child routes;
- home includes stable markers `CHRO`, `MATIC`, `01 BLONDE`, `02 COPPER`, `03 VIVID`, `04 CORRECTION`;
- Color Map stages are present;
- no `<form` or `<iframe` appears on any route;
- category page contains `data-site-card="coiffure-04"`;
- when publication is required, category HTML references `coiffure-04-home.webp` and the preview file exists on disk.

Final verification must require:

- dedicated Chromatic workflow green on the final human-authored SHA;
- global portfolio workflow green on the same SHA;
- all existing published-template regression workflows green;
- changed-file review confirms no unrelated template product files changed.

## Success criteria

Chromatic is successful when a portfolio visitor can immediately recognize it as a creative color studio and when its composition is unmistakably different from the other Coiffure demos.

The final experience should read as:

- **Maison Élise** = beauty editorial;
- **District Cut** = dark urban barber;
- **Form Studio** = Swiss functional salon;
- **Chromatic** = Color Lab editorial / artistic collage.
