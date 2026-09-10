# Terra — Mediterranean Table design specification

Status: proposed for implementation after written-spec approval.

## 1. Purpose

Terra is the third restaurant showcase and must feel like a real Mediterranean neighborhood restaurant built around shared plates, sunlight, produce, and a relaxed table culture.

It must communicate within one second: warm, tactile, seasonal, generous, Mediterranean, and contemporary.

It must not look like Maison Silex, District 88, Kuro, the Technical Minimalist portfolio, a generic hospitality template, or an AI-generated collection of rounded cards.

Primary recognition cues:
- limestone / warm paper base;
- terracotta and olive accents;
- editorial Fraunces headlines;
- irregular table-photo compositions;
- generous whitespace with occasional overlaps;
- food, ceramics, produce, hands, linen, and sunlight rather than polished fine-dining staging.

## 2. Non-goals

Do not add:
- booking or reservation backend;
- online ordering or delivery;
- authentication, dashboard, CMS, or database;
- iframe maps;
- SaaS card grids;
- glassmorphism, gradients, glow, soft drop shadows, or large radius systems;
- brutalist or Technical Minimalist portfolio styling;
- fake awards, reviews, Michelin claims, or real business affiliations;
- long generic hospitality marketing copy.

Calls to action may only navigate to menu, table/concept, gallery, contact, phone, email, or portfolio return.

## 3. Differentiation from the other restaurant demos

Terra targets at least 6/7 axes of visual differentiation from Maison Silex, District 88, and Kuro.

1. Navigation — slim non-sticky editorial rail with serif wordmark and quiet text links; no overlay luxury header, poster masthead, or numbered technical nav.
2. Hero — tabletop composition made from one large landscape photograph plus two supporting crops and an offset text block; no full-bleed hero, poster headline, or strict split screen.
3. Grid — fluid 12-column editorial grid with staggered image spans and negative space; no repeated cards or rigid contact sheet.
4. Typography — Fraunces display serif plus Manrope body/UI; no Bodoni, Barlow Condensed, Georgia/Times, or portfolio Space Grotesk/JetBrains Mono system.
5. Section rhythm — seasonal note, shared plates, product philosophy, short menu excerpt, room atmosphere, practical information.
6. Image treatment — sunlit natural food photography, ceramics, ingredients, linen, hands and tables; softer crop logic than District 88, less cinematic than Silex, warmer and more abundant than Kuro.
7. Interaction — restrained image reveal, underline motion, small crop shift, and color transitions; no ticker, brutal inversion, or loud poster mechanics.

Acceptance target: visually obvious as a fourth restaurant identity at thumbnail size.

## 4. Brand and palette

Brand: Terra
Descriptor: Mediterranean table / Bruxelles
Business is fictional.

CSS variables:
- `--terra-stone: #F2EBDD`
- `--terra-ink: #25241F`
- `--terra-terracotta: #B85C3D`
- `--terra-olive: #667044`
- `--terra-sun: #D7A33D`
- `--terra-cream: #FFF9EE`
- `--terra-muted: #80796D`

Usage rules:
- stone/cream make up most surfaces;
- terracotta is the principal signal color;
- olive supports ingredients, labels, rules, and occasional section surfaces;
- sun is rare and never used as a full-site accent system;
- ink remains the primary text color.

No portfolio Forest Green system and no District 88 acid yellow.

## 5. Typography

Use `next/font/google`, scoped to Terra only.

Display: `Fraunces`, weights 600/700.
- organic editorial character;
- large but not oversized poster scale;
- short headlines only;
- line-height approximately 0.92–1.0.

Body/UI: `Manrope`, weights 400/500/600/700.
- navigation, descriptions, prices, captions, utility copy;
- body measure generally 48–68 characters;
- no monospaced metadata system.

Avoid decorative handwriting fonts and avoid reusing the Silex/Kuro/District typography pairings.

## 6. Composition language

Terra should feel composed around a physical table rather than around components.

Rules:
- use rectangular imagery with 0 radius;
- thin 1px rules only where needed;
- allow mild image/text overlaps on desktop, but never compromise reading;
- use a mix of full-width, half-width, narrow portrait, and inset editorial placements;
- one visual focal point per section;
- preserve generous negative space;
- avoid perfect repeated alignment across every section;
- no card shells around every item;
- no decorative stickers or badges;
- no random rotation.

The site should feel hand-art-directed, not algorithmically varied.

## 7. Navigation

Desktop:
- non-sticky 72–84px top rail;
- `Terra` serif wordmark left;
- center/right links: `Menu`, `La table`, `Galerie`, `Contact`;
- small location/hours utility text allowed at far right if space permits;
- 1px bottom rule;
- cream/stone background, no floating container.

Mobile:
- wordmark + `Menu` trigger;
- full-screen cream panel with large but calm serif links;
- no numbered navigation;
- visible close action;
- target sizes >=44px.

Footer:
- compact, warm, editorial;
- wordmark, address, hours, social/contact, disclosure, portfolio return;
- no giant directory or oversized menu.

## 8. Explicit routes

Create exactly:
- `/sites/restaurant-03`
- `/sites/restaurant-03/menu`
- `/sites/restaurant-03/table`
- `/sites/restaurant-03/galerie`
- `/sites/restaurant-03/contact`

No catch-all route. Each page has exactly one `h1`.

## 9. Homepage structure

### 9.1 Hero — `À TABLE, AU SOLEIL.`

Desktop:
- roughly 78–88svh;
- asymmetrical 12-column layout;
- large landscape table/food image occupies ~7 columns;
- one portrait crop overlaps or sits slightly offset on the image edge;
- second smaller crop can sit low/right or low/left;
- headline sits in its own text zone rather than over complex food detail;
- short copy: seasonal Mediterranean cooking, shared plates, Brussels;
- direct `Voir le menu` text CTA.

No carousel and no full-bleed image behind all text.

### 9.2 Seasonal note

A slim terracotta or olive band introduces the season with one sentence and 3–4 current ingredients.

Purpose: establish seasonality without badges or marketing claims.

### 9.3 Shared plates

Three signature dishes presented as staggered editorial rows rather than cards:
- dish name;
- one-line description;
- price;
- one supporting image placed differently for each row.

### 9.4 From the market

Two-column section:
- large produce/ingredient image;
- short text about vegetables, olive oil, herbs, fish/meat balance, and daily sourcing language kept fictional and non-claim-heavy.

A small list such as `tomate / fenouil / citron / herbes / huile d’olive` may act as visual rhythm.

### 9.5 Menu glimpse

A compact menu excerpt with 6–8 items maximum, grouped by `À partager`, `Feu`, `Dessert`.

No boxed menu cards. Prices align cleanly.

CTA: `Menu complet`.

### 9.6 The room

Editorial image sequence of 3 images: table setting, room/terrace, close-up hands/plate.

Use irregular spans and generous whitespace.

### 9.7 Practical end

Stone/cream utility grid with:
- address;
- hours;
- phone/email;
- access note;
- no reservation form and no map iframe.

## 10. Menu page

H1: `LE MENU`

Structure:
- short seasonal introduction;
- categories such as `À partager`, `Légumes`, `Feu`, `Mer`, `Desserts`, `Boissons`;
- clean editorial rows with item, compact description, price;
- category headings can alternate terracotta/olive accents;
- one or two food images break the columns but do not interrupt scanning;
- allergen/demo note at bottom.

Desktop may use two editorial columns, but mobile becomes a single readable flow without horizontal tables.

## 11. La table page

H1: `LA TABLE`

Purpose: explain the restaurant’s way of eating, not tell an invented chef biography.

Sections:
- opening composition with long table / shared plates image;
- three short principles: `Partager`, `Saison`, `Feu`;
- ingredient/ceramic detail image pair;
- a short house note about generous service and simple cooking;
- final atmospheric photograph.

No fake founder story, awards, press quotes, or provenance claims.

## 12. Gallery page

H1: `AUTOUR DE LA TABLE`

Use a deterministic editorial mosaic of 8–10 images maximum.

Image types:
- table scenes;
- shared plates;
- ceramics;
- vegetables/herbs/citrus;
- hands serving;
- warm interior/terrace;
- fire/grill detail where appropriate.

Rules:
- no runtime random masonry;
- no brand logos in visible food/drink packaging;
- no unrelated pizza/fast-food imagery unless it exists in the menu concept;
- captions sparse and optional;
- no contact-sheet styling from District 88.

## 13. Contact page

H1: `VENIR CHEZ TERRA`

Include fictional:
- address in Brussels;
- opening hours;
- phone;
- `.example` email;
- public transport/access note;
- Instagram handle;
- demo disclosure.

Visual structure:
- one large exterior/interior image;
- practical information in an offset stone/terracotta block;
- no form, no embedded map, no booking widget.

## 14. Data architecture

Create Terra-owned data and types:
- `src/templates/restaurant-03/types.ts`
- `src/templates/restaurant-03/src/data/site.ts`
- `src/templates/restaurant-03/src/data/menu.ts`
- `src/templates/restaurant-03/lib/theme.ts`
- `src/templates/restaurant-03/lib/metadata.ts`

`site.ts` owns:
- business identity;
- palette;
- contact/hours/social;
- SEO;
- navigation;
- hero;
- seasonal note;
- shared plates;
- table principles;
- gallery;
- disclosure.

`menu.ts` owns categories, items, descriptions, prices and optional dietary markers.

Important business/content values must not be scattered through page components.

## 15. Terra-owned components

Create only components that serve Terra’s art direction, for example:
- `TerraHeader.tsx`
- `TerraFooter.tsx`
- `EditorialImage.tsx`
- `SharedPlateRow.tsx`
- `MenuExcerpt.tsx`
- `SeasonStrip.tsx`
- `PracticalPanel.tsx`
- `PortfolioReturnLink.tsx`

Do not create or reuse a generic restaurant visual-component library.

## 16. CSS and interactions

Primary stylesheet:
- `src/templates/restaurant-03/styles/terra.css`

Theme values come from CSS variables.

No arbitrary runtime Tailwind class generation.

Allowed motion:
- 120–220ms underline/ink transition;
- small 1–2% image scale or crop shift on hover;
- subtle image reveal on first viewport entry only if implementation remains simple;
- no parallax dependency;
- no continuous motion.

Respect `prefers-reduced-motion`.

## 17. Photography direction

Photography must be warm, natural and tactile.

Prefer:
- late-afternoon daylight;
- Mediterranean vegetables, herbs, citrus, olive oil;
- plates intended for sharing;
- ceramics, linen, stone, wood;
- people shown through hands/gestures more often than posed portraits;
- natural interior or terrace atmosphere.

Avoid:
- dark fine-dining plating associated with Silex;
- flash-heavy burgers/street food associated with District 88;
- austere Japanese minimalism associated with Kuro;
- smiling corporate stock;
- visible third-party food/drink branding.

Use `next/image`.

## 18. SEO

Terra layout metadata:
- `robots: { index: false, follow: true }`;
- title/description sourced from `site.ts`;
- no real-company canonical URL;
- all business claims clearly fictional through disclosure.

## 19. Accessibility

Required:
- exactly one H1 per route;
- semantic landmarks;
- keyboard-accessible mobile menu;
- visible focus states;
- touch targets >=44px;
- descriptive image alts;
- text contrast sufficient on terracotta/olive surfaces;
- no essential information conveyed only by color;
- no horizontal overflow at 375px;
- reduced-motion handling;
- body text remains readable over all breakpoints.

## 20. Responsive targets

### 1440×1000
- hero must read immediately as table/food/seasonality;
- image mosaic looks intentional rather than evenly tiled;
- no tangencies between headline and imagery;
- menu rows remain scannable;
- whitespace feels generous, not empty.

### 768×1024
- overlaps reduce substantially;
- hero remains asymmetrical but stable;
- navigation switches to mobile treatment when needed;
- no tiny two-column text.

### 375×812
- mostly single-column editorial flow;
- headline fits without awkward single-character wraps;
- hero crops remain food-focused;
- menu item name/description/price stay readable;
- gallery becomes deterministic stacked rhythm, not generic equal cards;
- no horizontal overflow.

## 21. Portfolio integration and publication gate

Terra remains `planned` during implementation.

Publication order:
1. implement all five routes;
2. lint/build/smoke Terra;
3. verify the general portfolio suite;
4. browser QA at 1440, 768 and 375, including home/menu/gallery plus table/contact spot checks;
5. fix all visual defects found;
6. create a real homepage capture;
7. store `public/previews/restaurant-03-home.webp` as a valid binary WebP;
8. only then switch `restaurant-03` to `available` in `src/portfolio/data/sites.ts`;
9. final verification must expect four available restaurants if District 88 has merged by then, otherwise reconcile the registry when branches are integrated.

Portfolio summary after publication:
`Mediterranean Table — pierre claire, terre cuite, Fraunces organique, plats à partager et compositions photographiques baignées de soleil.`

## 22. Testing strategy

Use TDD/RED-first for the route contract.

RED gate must verify before implementation:
- all five Terra routes are absent/failing;
- expected route markers such as `À TABLE, AU SOLEIL.`, `LE MENU`, `LA TABLE`, `AUTOUR DE LA TABLE`, `VENIR CHEZ TERRA` are required;
- metadata includes `noindex, follow`;
- no iframe or booking/order form;
- Terra remains `planned` until preview/publication step.

GREEN implementation then satisfies route/content/accessibility markers.

Final QA requires actual rendered screenshots, not code inspection alone.

## 23. Anti-AI / craft acceptance

Reject the implementation if any of these dominate:
- repeated rounded cards;
- every section centered in the same container rhythm;
- generic badge/eyebrow/title/body/button pattern repeated section after section;
- excessive iconography;
- decorative gradients or shadows;
- perfectly uniform image grid;
- filler copy such as “une expérience unique” or “une cuisine d’exception”;
- fake testimonials or social proof;
- arbitrary decorative numbers;
- a homepage that could be recolored and mistaken for Silex, District 88 or Kuro.

The final site should feel as though a restaurant and editorial designer composed each page around food, table and season rather than a component library.
