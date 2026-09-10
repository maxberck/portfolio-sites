# Terra — Restaurant 03 Design Spec

## Status
Design direction for review before implementation.

## Positioning
Terra is a fictional Mediterranean restaurant in Brussels. It should feel warm, sunlit, tactile and generous rather than luxury, nightlife or minimalist.

The visual idea is **Mediterranean Table Journal**: a website that behaves like an editorial notebook assembled from menus, ingredient notes, table photographs and short observations from the kitchen.

Terra must not inherit the Brutalist / Technical Minimalist language of the portfolio shell. It is its own demo website.

## Same-category differentiation
Terra must remain clearly distinct from the other restaurant demos:

- Maison Silex: dramatic gastronomy / fashion editorial / burgundy / Bodoni / full-screen chapters.
- District 88: Poster Riot / acid yellow + black + red / condensed type / dense collage.
- Kuro: Japanese minimal / ivory + charcoal + lacquer red / thin rules / disciplined 12-column calm.
- Terra: warm Mediterranean / stone + terracotta + olive / natural daylight / loose asymmetric editorial rhythm.

Target: differ on at least 6 of the 7 uniqueness axes: navigation, hero, grid, typography, section order/shape, image treatment, interactions/CTA.

## Core visual language

### Palette
- Chalk / stone: `#F2EEE5`
- Warm paper: `#FBF7EF`
- Terracotta: `#B85C3D`
- Olive: `#596447`
- Ink: `#27251F`
- Sun: `#E2B54B` used sparingly

No black-dominant surfaces. No acid colors. No burgundy. No cold technical blue.

### Typography
Use a warm editorial serif paired with a contemporary humanist sans:

- Display / editorial headlines: `Newsreader`
- Body / navigation / utility: `Manrope`

Avoid condensed display fonts, Bodoni-like high contrast and monospace metadata.

Headline scale should feel generous but not aggressive. Most headings use sentence case rather than all caps.

### Image treatment
Photography is the main material of the design.

- natural daylight
- visible ingredients, hands, table linen, ceramic, charcoal, citrus, herbs
- warm but realistic color
- no flash photography
- no monochrome treatment
- no repeated browser/mockup frames
- crops may be irregular through aspect ratios, but images remain rectangular
- no decorative rounded-card gallery system

Use `next/image`.

## Navigation
Non-sticky desktop header.

Desktop composition:
- left: small location / descriptor
- center: large `TERRA` wordmark
- right: links

Links:
- `Carte`
- `La maison`
- `Images`
- `Nous trouver`

The home wordmark links to `/sites/restaurant-03`.

Mobile uses a compact disclosure menu, not a full-screen poster menu like District 88.

No numeric prefixes in navigation.

## Routes
Explicit App Router routes:

- `/sites/restaurant-03`
- `/sites/restaurant-03/carte`
- `/sites/restaurant-03/maison`
- `/sites/restaurant-03/galerie`
- `/sites/restaurant-03/contact`

All demo routes use `robots: { index: false, follow: true }`.

No reservation engine, no ordering, no account, no payment, no backend and no form submission.

## Home page

### Hero
The hero should feel like arriving at a table rather than reading a campaign poster.

Composition:
- large headline on warm paper: `À table, au soleil.`
- short line: Mediterranean cooking, seasonal produce, Brussels
- one oversized landscape food/table photograph occupying roughly 55–60% of the first viewport
- a small terracotta note overlapping the image edge with service information
- no centered CTA stack

The hero should reveal some of the next section at 1440×1000.

### Seasonal strip
A horizontal ingredient/service line immediately after the hero:

`tomate / citron / braise / huile d’olive / herbes / vin frais`

This is static and typographic, not an animated ticker.

### Kitchen statement
Large editorial section built around the line:

`Du feu, de l’huile, du citron.`

Two uneven text columns with one vertical image. No cards.

### Selected dishes
Show 4–5 dishes as a menu excerpt. Use ruled rows or a loose table, not product cards.

Each dish has name, concise description and price.

### Photo journal
A deterministic asymmetric spread of 3–4 photographs with small captions. The composition should feel laid out by an editor rather than generated masonry.

### Practical end section
Address, opening hours and contact presented as two broad editorial columns with a restrained terracotta field.

## Carte page
The menu is the functional center of Terra.

- warm paper background
- large `La carte` heading
- seasonal date/note near heading
- sections such as `À partager`, `Du feu`, `Légumes`, `Douceurs`, `À boire`
- dishes in calm horizontal rows
- prices aligned consistently
- vegetarian notes textual, not badge-heavy
- no sticky black section bars like District 88

Optional highlighted seasonal plate may use one full-width terracotta strip.

## Maison page
Narrative page about the fictional restaurant.

Structure:
- opening editorial statement
- large dining-room image
- sourcing / season section
- kitchen / fire section
- two-image spread with short captions
- short final statement about hospitality

Avoid timeline cards or icon feature grids.

## Galerie page
Call it `Images` in navigation but route remains `/galerie`.

The gallery is a slow visual journal:
- 8–10 images
- deterministic asymmetric rows
- alternating landscape / portrait / detail
- generous stone-colored negative space
- captions are occasional, not on every image
- no lightbox requirement
- no infinite gallery

## Contact page
Navigation label: `Nous trouver`.

Hero line: `Une table à Bruxelles.`

Content:
- fictional demo address clearly disclosed
- opening hours
- phone
- email
- public transport / access note
- large exterior/interior image

No reservation form. A `tel:` or `mailto:` link is acceptable.

## Footer
Quiet and compact.

- Terra wordmark
- address
- hours summary
- navigation
- demo disclosure
- return-to-portfolio control

No giant typographic footer like District 88.

## Data architecture
All business-editable content is centralized in:

`src/templates/restaurant-03/src/data/site.ts`

Menu content may live in:

`src/templates/restaurant-03/src/data/menu.ts`

Template-specific components, pages, styles and types remain under:

`src/templates/restaurant-03/`

App adapters remain thin under:

`app/sites/restaurant-03/`

No shared visual components with Kuro, Silex or District 88.

## Interaction language
Interactions stay subtle:
- image hover: very small scale/crop shift only where useful
- links use underline or color change
- no displaced brutalist buttons
- no animated ticker
- no parallax
- respect `prefers-reduced-motion`

## Accessibility
- one `h1` per page
- semantic header/nav/main/footer
- visible keyboard focus
- ≥44px mobile tap targets where applicable
- meaningful image alt text
- sufficient color contrast
- no status communicated only by color
- no horizontal overflow at 375px

## Responsive behavior
### 1440×1000
Loose asymmetric desktop composition with large imagery and editorial whitespace.

### 768×1024
Maintain asymmetry where readable; collapse complex spreads to two or one column without shrinking typography excessively.

### 375×812
Single-column reading flow, near edge-to-edge images, compact header, menu disclosure, no accidental whitespace gaps.

## Portfolio publication contract
Terra remains `planned` until:

1. all five routes exist and build,
2. lint/build/smoke checks pass,
3. desktop/tablet/mobile visual QA is reviewed,
4. a real homepage preview exists at `public/previews/restaurant-03-home.webp`,
5. then and only then `restaurant-03` changes to `available` in `src/portfolio/data/sites.ts`.

Final available description should name concrete visible characteristics, for example:

`Méditerranéen solaire — pierre claire, terre cuite, photographie naturelle et mise en page éditoriale asymétrique.`

## Visual QA gates
Capture at minimum:
- home: 1440×1000, 768×1024, 375×812 full page
- carte: same three widths
- galerie: same three widths
- maison/contact: desktop + mobile

Review for:
- believable restaurant identity
- no AI-like repeated card rhythm
- no accidental empty bands
- no text/image collisions
- correct crops
- no visible third-party restaurant branding
- no resemblance to Kuro, Silex or District 88

## Non-goals
- do not redesign the portfolio shell
- do not modify Kuro, Silex or District 88
- do not add booking, payments, auth or backend
- do not scaffold other planned templates in this branch
