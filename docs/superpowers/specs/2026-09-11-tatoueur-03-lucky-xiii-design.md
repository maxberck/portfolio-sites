# Tatoueur 03 — Lucky XIII Design Specification

## Status

Validated direction: **Vintage Flash Shop**.

## Goal

Build `tatoueur-03` as a complete fictional old-school tattoo shop showcase named **Lucky XIII**, with a visual system inspired by printed flash sheets, hand-painted shop signage, aged paper, ticket stubs and traditional tattoo ephemera.

The template must feel unmistakably different from:

- `tatoueur-01` Black Ritual — dark underground poster system with left rail;
- `tatoueur-02` Line Gallery — white-cube catalogue with restrained top navigation;
- future `tatoueur-04` Matière — contemporary art-book / experimental composition.

It must also remain easy to extract and reuse as a real client starting point.

## Repository contract

- Framework: Next.js 16 App Router.
- UI: React 19 + TypeScript.
- Styling: repository-native CSS/Tailwind stack; no external site builder.
- Routes live under `app/sites/tatoueur-03/**`.
- Template implementation lives under `src/templates/tatoueur-03/**`.
- Shared portfolio shell rules in `DESIGN.md` do not control this demo site's own art direction.
- The demo must not depend at runtime on Designly, Superdesign, Superpowers or NaCl.
- No backend, CMS, authentication, checkout, booking engine or real appointment workflow.

## Copyability requirement

Lucky XIII must remain a self-contained client template.

A developer should be able to duplicate `src/templates/tatoueur-03`, add a thin route tree, then replace studio identity, copy, images, artists, flash sheets, hours and address without restructuring the full application.

Required implementation qualities:

- central typed content data;
- template-local CSS;
- no imports from other tattoo templates;
- only small reusable primitives where they genuinely help;
- no generic cross-template page-builder abstraction;
- fictional business data isolated from layout code;
- route files remain thin;
- visual-specific logic stays inside `tatoueur-03`.

## Core brand

**Name:** Lucky XIII  
**Descriptor:** Traditional Tattoo & Flash Shop  
**Location:** fictional Brussels address  
**Direction:** Old school / vintage  
**Personality:** warm, loud, tactile, experienced, playful, shop-made rather than luxury-designed.

The design should reference traditional tattoo culture without turning into a costume-shop cliché.

## Visual art direction

### Palette

Primary palette:

- **Paper** — warm aged ivory, not white;
- **Ink** — almost-black/navy-black;
- **Ox Blood** — deep traditional red;
- **Sailor Navy** — muted dark navy;
- **Tobacco** — sparing warm brown for rules and paper variation.

No gradients.

No neon.

No glassmorphism.

No modern SaaS shadows.

No pill-shaped interface language except where a deliberately printed badge/stamp is visually justified.

### Texture

Texture is allowed only if readability remains strong.

Possible treatments:

- faint paper grain;
- imperfect ink rule lines;
- slightly offset border details;
- stamp-like marks;
- flat ornamental stars, swallows, roses, daggers or hearts as graphic accents.

Texture must never become a fake distressed overlay that reduces legibility.

### Typography

Use a deliberate three-level typographic system:

1. **Shop display face** — bold condensed/slab or sign-painter-inspired display face for the shop name and primary section headings.
2. **Editorial serif** — for descriptive copy, artist notes and longer text.
3. **Utility sans / narrow label face** — for small metadata, prices/status labels, navigation and captions.

Avoid blackletter as the primary system.

Avoid fake western novelty fonts across whole pages.

Large display text must retain safe line-height; no overlapping glyphs or compressed heading/copy relationships.

## Structural differentiation lock

Lucky XIII must not reuse the structural signatures of Black Ritual or Line Gallery.

It must NOT use:

- a persistent left rail;
- a white museum top bar with minimal labels;
- a bottom mobile navigation;
- a full-screen minimalist mobile menu copied from Line Gallery;
- poster-like black editorial spreads;
- large white-cube empty compositions as the dominant rhythm;
- generic modern card grids.

Its page silhouette must read as a **tattoo shop / flash-book system** even when viewed in grayscale.

## Navigation architecture

### Desktop

The desktop header behaves like a **shop sign / storefront masthead**, not a generic navbar.

Composition:

- centered or near-centered Lucky XIII shop mark;
- small ornamental dividers or stars;
- route navigation as printed tabs/tickets beneath or around the sign;
- a small location/hours marker integrated into the masthead;
- horizontal framing rules that make the top of the page feel printed rather than app-like.

Navigation remains semantic and keyboard accessible.

### Mobile

Mobile becomes a **vertical booklet header**:

- compact shop mark at top;
- a visible `Menu` / `Index` trigger or wrapped tab list;
- no fixed bottom navigation;
- no giant full-screen overlay unless absolutely required;
- navigation should feel like opening a folded shop leaflet.

The mobile information order must be intentional, not merely desktop columns stacked blindly.

## Route architecture

Required routes:

- `/sites/tatoueur-03`
- `/sites/tatoueur-03/work`
- `/sites/tatoueur-03/artists`
- `/sites/tatoueur-03/studio`
- `/sites/tatoueur-03/visit`

Suggested nav labels:

- Shop
- Flash
- Artists
- Story
- Visit

## Home page

The home page must behave like a **shop wall + printed flash-sheet sequence**.

### Opening / storefront

The first viewport contains:

- one meaningful `<h1>` containing `LUCKY XIII`;
- subline such as `Traditional Tattoo & Flash Shop`;
- fictional Brussels location marker;
- one strong vintage tattoo image or artist-at-work image;
- a visible flash-sheet motif or grouped mini artworks;
- one main route into `/work`;
- no centered marketing hero card.

The masthead and opening should combine into one storefront-like composition.

### Flash wall

The next major section looks like multiple physical flash sheets pinned or printed together.

Requirements:

- varied sheet dimensions;
- sheet numbers or collection labels;
- multiple motifs per sheet where possible;
- deliberate asymmetry;
- no equal-size product card grid;
- at least one section where typography interrupts the sheet wall.

### Shop special / walk-in note

A smaller printed-ticket or coupon-like band can communicate a fictional shop note such as custom work, flash availability or walk-in policy.

This is informational only. Do not implement booking.

### Artist strip

Artists appear as a **shop roster strip**, not profile cards.

Use names, specialties, small image fragments and links to `/artists`.

### Story interruption

Include a short section about the fictional shop's history/attitude using a newspaper clipping, broadside or sign-painted composition.

### Home ending

End with a **storefront information board** containing:

- fictional address;
- hours;
- phone/email;
- demo disclosure;
- route into `/visit`.

Do not append a conventional multi-column website footer.

## Work route — Flash Book

`/work` is a **flash book**, not a portfolio grid.

### Information model

Work items should be grouped into named flash sheets or series, for example:

- Hearts & Daggers
- Swallows & Stars
- Roses
- Lucky Charms
- Creatures
- Lettering

Each flash sheet can contain:

- sheet number;
- title;
- artist;
- short note;
- one main image;
- optional detail images or individual motifs;
- availability label such as `Reference only`, `Custom variation`, or `Demo flash` rather than real inventory promises.

### Composition

Desktop should mix:

- full-width flash boards;
- two-column book spreads;
- inset label blocks;
- ticket/stamp metadata;
- occasional large standalone tattoo photographs.

Do not use identical cards or masonry copied from another site.

Mobile should read as a vertical physical flash booklet with generous separation between sheets.

## Artists route — Shop Roster

`/artists` presents artists like different printed shop bios.

Each artist section must vary in layout.

Possible treatments:

- framed portrait + sign-painted name;
- portrait strip + type-heavy biography;
- flash motifs surrounding a compact bio;
- signature-style label or specialty stamp.

Each artist includes:

- name;
- specialty;
- short fictional biography;
- representative work references;
- internal link to `/work`.

Do not use three identical portrait cards.

## Studio route — Shop Story

`/studio` should feel like a shop-history pamphlet rather than a corporate About page.

Suggested sequence:

1. `<h1>` shop story / house history;
2. fictional origin narrative;
3. approach to traditional flash and custom adaptation;
4. numbered house process;
5. conservative hygiene statement without fake certifications;
6. general preparation expectations;
7. shop imagery / equipment / walls;
8. link to `/visit`.

No fake awards, dates, celebrity clients or certifications.

## Visit route — Shop Info Board

`/visit` is a practical storefront information page.

Required content:

- `<h1>`;
- semantic `<address>`;
- fictional Brussels address clearly marked as demo/fictitious;
- opening hours;
- phone/email using safe demo data;
- access note;
- general inquiry process;
- no appointment form;
- no map iframe;
- no embedded third-party booking widget.

The page should resemble a **window sign / shop rules board** rather than a modern contact page.

## Content tone

Copy should be concise, concrete and human.

Avoid:

- generic luxury language;
- startup-style claims;
- fake cultural authority;
- repetitive “crafted with passion” phrasing;
- medically loaded promises;
- fabricated certifications;
- fake testimonials or star ratings.

English-first shop copy is acceptable if it suits the visual identity, while portfolio-facing metadata remains aligned with existing repository language conventions.

## Image direction

Use only imagery that is clearly relevant to tattooing, tattoo artists, tattoo studios, tattooed skin, traditional flash or related studio details.

Do not rely only on successful HTTP loading as image QA.

Every image selected for the final homepage preview must also receive **semantic visual QA** so that unrelated lifestyle imagery cannot slip through again.

### Image technical rules

- use `next/image` where compatible;
- preserve explicit dimensions/aspect ratio;
- meaningful `alt` text;
- no broken URLs;
- avoid the same hero image used by Black Ritual or Line Gallery;
- prefer a coherent traditional/flash visual character;
- avoid graphic gore or imagery unsuitable for a professional portfolio showcase.

## SEO contract

Every route must export unique Next.js `Metadata`.

Required:

- unique title;
- unique meta description;
- `robots: { index: false, follow: true }` inherited from layout for demo consistency;
- no fake production domain or absolute metadata base;
- one meaningful `<h1>` per page;
- logical heading hierarchy;
- semantic `<main>`, `<nav>`, `<section>`, `<article>`, `<address>` where appropriate;
- all critical business copy server-rendered;
- crawlable internal links;
- useful image alt text.

OpenGraph/Twitter metadata may be included only when it can be done honestly without inventing a production URL.

JSON-LD is optional and should be omitted if it would imply a real operating business.

## Accessibility

Required:

- visible `:focus-visible` states;
- sufficient contrast on aged paper colors;
- no information conveyed only through red/navy color;
- keyboard-reachable navigation;
- mobile touch targets sized responsibly;
- no hover-only interactions;
- `prefers-reduced-motion` support;
- DOM reading order remains logical even where desktop layout is visually offset.

Decorative icons/motifs should not pollute screen-reader output.

## Responsive behavior

### Desktop

- printed storefront masthead;
- multi-column flash-sheet arrangements;
- varied editorial proportions;
- large but safe display typography;
- deliberate border/rule system.

### Tablet

- reduce number of simultaneous flash sheets;
- preserve sheet identity and labels;
- avoid cramped borders and tiny text.

### Mobile

- convert flash wall into a vertical booklet sequence;
- masthead compacts into a leaflet-like header;
- navigation remains visible/discoverable without fixed bottom UI;
- display titles use guarded `clamp()` sizing and safe line heights;
- no horizontal overflow from framed sheets or offset decorations.

## Performance

- server components by default;
- smallest possible client surface for active navigation/menu state;
- no heavy animation library;
- no unnecessary carousel dependency;
- no client-only data fetching for core content;
- explicit image sizing to reduce layout shift;
- keep textures CSS-light or asset-light.

## Verification contract

Before `tatoueur-03` can move from `planned` to `available`, require fresh evidence for:

- `npm run lint`;
- `npm run build`;
- dedicated five-route smoke check;
- route-specific titles/descriptions;
- `noindex, follow` demo metadata;
- no forms/iframes/booking widgets;
- internal links between all routes;
- portfolio category still renders correctly;
- real `public/previews/tatoueur-03-home.webp` exists;
- registry points to the real preview;
- `tatoueur-04` remains `planned`.

## Browser regression contract

A dedicated Playwright check must run on at least:

- desktop: `1440 × 1000`;
- mobile: approximately `390 × 844`.

It must verify on all five routes:

- no broken images (`complete && naturalWidth === 0`);
- no horizontal page overflow;
- no key heading/copy overlap;
- safe display-title line-height;
- desktop navigation visible at desktop width;
- mobile navigation treatment visible and desktop layout removed/recomposed where required.

The browser test must be part of the tattoo-specific GitHub Actions workflow.

## Visual QA gate

The final 1440×1000 preview must be manually inspected before PR/merge.

Reject publication if any of these are true:

- unrelated or semantically wrong imagery;
- generic modern card grid dominates the page;
- header looks like Line Gallery;
- page uses Black Ritual's rail or poster system;
- typography overlaps;
- flash sheets all have identical dimensions;
- layout resembles an ecommerce product grid;
- vintage treatment becomes unreadable or costume-like;
- standard corporate footer appears;
- the page lacks a clear dominant shop identity.

## Portfolio publication

Only after technical and visual verification:

1. update `preview-target.json` to `tatoueur-03` / `/sites/tatoueur-03` at `1440×1000`;
2. capture the real homepage through the existing preview workflow;
3. visually inspect the generated WebP;
4. change only the `tatoueur-03` registry entry from `planned` to `available`;
5. add `preview.src = "/previews/tatoueur-03-home.webp"`;
6. leave `tatoueur-04` untouched and `planned`.

Suggested published direction text:

`Old school / vintage`

Suggested summary direction:

`Tattoo shop old-school — flash sheets imprimées, enseigne vintage, papier ivoire, rouge profond et navigation inspirée des tickets de shop.`

## Cross-tool responsibilities

- **Superpowers** — methodology, spec/plan/TDD/verification/review gates.
- **Designly** — art-direction and composition QA authority.
- **Superdesign** — optional visual exploration only; never changes repo architecture or runtime stack.
- **NaCl** — graph verification only if project-local MCP is actually configured; otherwise no NaCl success claim.
- **GitHub** — source of truth for branch, files, workflows, preview, PR and merge.

## Non-goals

Do not implement:

- real booking;
- payments;
- authentication;
- CMS;
- inventory management;
- flash purchasing;
- customer accounts;
- reviews/ratings;
- fake awards/certifications;
- medical guarantees;
- portfolio-shell redesign;
- refactors unrelated to `tatoueur-03`.

## Acceptance summary

Lucky XIII is ready for implementation only when this specification is approved.

It is ready for publication only when:

- all five routes exist and are server-rendered;
- SEO metadata is complete;
- browser regression is green on desktop/mobile;
- final imagery is both technically loaded and semantically appropriate;
- the generated preview has been manually inspected;
- registry/preview publication is correct;
- `tatoueur-04` remains planned;
- GitHub Actions are green on the PR head.

NaCl verification must not be claimed unless project-local NaCl/MCP is configured and its required canary/graph checks are actually available.
