# Tatoueur 04 — Matière Design Specification

## Status

Validated direction: **Contemporary Art Book / Material Study**.

Matière is a fictional contemporary tattoo studio presented as an artist monograph rather than a conventional tattoo-shop website. The site should feel tactile, experimental and authored, with asymmetric page compositions, close photographic studies of skin/ink/gesture, marginal notation and chapter-like navigation.

It must remain a practical, independently copyable Next.js template despite the more experimental art direction.

## Product Goal

Create a complete five-route showcase site for a fictional Brussels tattoo studio focused on contemporary abstract, gestural, line-based and body-responsive work.

The result must:

- remain inside the repository's current Next.js 16 + React 19 + TypeScript + Tailwind/CSS architecture;
- be independently extractable from the portfolio shell;
- centralize all business content, SEO copy, artists, works, imagery and contact data in template-owned typed data;
- ship with route-specific Next.js metadata and semantic server-rendered content;
- be unmistakably different from Black Ritual, Line Gallery and Lucky XIII even in grayscale;
- use a distinct desktop and mobile reading model rather than merely rescaling one layout;
- include route smoke, browser-level layout/image regression and real preview publication gates before becoming `available`.

## Brand Identity

- **Name:** Matière
- **Descriptor:** Contemporary Tattoo Practice
- **Location:** Brussels, fictional/demo-safe
- **Direction:** Contemporain / artistique
- **Visual metaphor:** artist monograph + material studies + studio notebook
- **Tone:** tactile, quiet, cerebral, physical, precise
- **Primary idea:** tattooing as a relationship between surface, gesture, body and time

The studio is fictional. Address, phone, email, artists, projects and statements must remain demo-safe. Do not invent awards, exhibitions, press quotes, certifications, celebrity clients or medical guarantees.

## Cross-Template Differentiation Lock

Matière must not inherit the visual architecture of the first three tattoo templates.

### Forbidden from Black Ritual

- no persistent left rail;
- no fixed bottom mobile navigation;
- no near-black full-site field as the dominant background;
- no poster sequence of huge numbered work spreads;
- no red signal closing poster;
- no condensed brutalist wordmark treatment as the main system.

### Forbidden from Line Gallery

- no thin conventional top navigation bar;
- no white-cube museum catalogue rhythm as the dominant structure;
- no repeated isolated work plates floating in broad white margins;
- no full-screen museum-style mobile menu;
- no calm Swiss-grid presentation as the primary visual metaphor.

### Forbidden from Lucky XIII

- no storefront masthead;
- no ticket/tab navigation;
- no flash-sheet wall;
- no aged-paper vintage treatment;
- no shop-sign framing rules;
- no old-school tattoo ornament language.

### Matière structural signature

Matière must instead be recognizable through:

- asymmetrical art-book spreads;
- cropped image fields that sometimes enter from page edges;
- margin notes and folio numbers;
- chapter markers on the **right-hand edge** at desktop widths;
- alternating dense and nearly empty passages;
- typography that behaves like a contemporary monograph rather than a marketing landing page;
- a colophon-like ending instead of a conventional footer.

At thumbnail size, the silhouette should read as a sequence of editorial spreads rather than cards, posters, a shop front or a museum catalogue.

## Visual System

### Palette

Use a restrained material palette:

- **Plaster** — warm mineral off-white as the dominant base;
- **Carbon** — deep charcoal for primary type;
- **Skin** — muted clay/rose-beige used sparingly as a physical accent;
- **Oxide** — dark rust/brown-red for rare annotation emphasis;
- **Graphite** — medium grey for marginal notation and rules.

The palette should feel physical rather than decorative.

Do not use:

- gradients;
- glassmorphism;
- neon;
- saturated app-style accent colors;
- generic soft-shadow cards;
- rounded SaaS containers.

### Texture

Texture can be created with very subtle CSS grain, paper noise or fine rules, provided it remains lightweight and does not interfere with text.

The page should feel printed/tactile without simulating damaged paper or fake analog distress.

### Typography

Use a deliberately editorial two-family system plus optional utility numerals:

1. **Expressive editorial serif** for major chapter titles, short statements and selected pull text.
2. **Neutral grotesk** for body copy, navigation, captions and practical information.
3. Optional **tabular/utility numerals** may be achieved through font features rather than a third decorative typeface.

Typography must feel contemporary and art-directed, not luxury-fashion generic.

Rules:

- major titles may be large and cropped by composition, but must not collide with body copy;
- body measure should remain controlled, roughly 45–75 characters where possible;
- marginal notes may be small but cannot carry essential information below practical reading size;
- line-height must remain safe at all responsive sizes;
- no text should depend on image overlap for legibility.

## Composition System

Use an **asymmetric editorial spread system**, not a conventional website grid.

A 12-column underlying desktop grid may be used for implementation discipline, but the visual result should feel like page composition rather than a visible modular UI grid.

Composition rules:

- exactly one primary focal anchor per viewport/major section;
- strong scale contrast between hero image, title, body note and marginal metadata;
- deliberate negative space, generally 25–50% in key compositions;
- use decisive image cropping or decisive separation — no accidental tangencies;
- alternate left-heavy, right-heavy and centered passages rather than repeating one split layout;
- preserve clear grayscale hierarchy;
- no equal-emphasis three-card or four-card rows.

### Focal-anchor pattern

Examples of acceptable section anchors:

- one macro tattoo photograph;
- one oversized chapter title;
- one isolated artist statement;
- one wide gesture/process image.

Do not let multiple oversized headings and photographs compete simultaneously.

## Navigation Architecture

Navigation is part of the art-book metaphor.

### Desktop — right-edge folio index

Do not use a traditional header bar.

Use a narrow **right-edge folio/index strip** that sits against the page edge and contains the route labels in a compact vertical system.

Suggested labels:

- Index
- Works
- Artists
- Practice
- Visit

Behavior:

- the studio name appears independently in the opening composition, not inside a navbar container;
- the right-edge index remains visually quiet and secondary to page content;
- current route is indicated through typography/rule weight, not a pill or colored button;
- links remain semantic, keyboard reachable and large enough to target;
- the strip must not resemble Black Ritual's left rail in width, color, typography or visual weight.

### Tablet

The folio strip can become a compact horizontal index block inserted near the top of content rather than forcing a narrow edge rail.

### Mobile — inline contents page

Do not use a fixed bottom nav, a floating hamburger, or a full-screen overlay.

Mobile opens with a compact **Contents** block after the studio mark/route title. It lists the five destinations as an editorial contents page and then leaves the rest of the screen free for vertical reading.

Navigation remains present through a small end-of-chapter contents link near major page endings, but nothing is fixed to the viewport.

## Route Architecture

Keep the predictable repository URL contract for copyability:

- `/sites/tatoueur-04`
- `/sites/tatoueur-04/work`
- `/sites/tatoueur-04/artists`
- `/sites/tatoueur-04/studio`
- `/sites/tatoueur-04/visit`

Public-facing labels may use `Works`, `Artists`, `Practice`, and `Visit` even though the implementation path remains `/studio` for repository consistency.

This keeps route extraction simple without forcing the visual UI to look like the other templates.

## Home Page — Index / Monograph Opening

The homepage behaves like the opening sequence of an artist monograph.

### Opening spread

The first viewport should avoid a standard hero/header split.

Composition:

- small issue/folio metadata near one outer corner;
- `MATIÈRE` as the primary typographic anchor, large but not centered like a landing page;
- descriptor `Contemporary Tattoo Practice` in smaller grotesk text;
- one macro or partial-body tattoo image entering from the lower or side edge;
- a short one- or two-sentence studio statement;
- right-edge folio index on desktop;
- no CTA button block.

The primary route into work should be a quiet editorial text link such as `Enter works →`.

### Home sequence

Use this sequence:

`cover spread → material study → short thesis → body/gesture diptych → artist chapter fragment → process strip → selected work study → colophon / visit`

This sequence intentionally differs from the poster rhythm, catalogue-plate rhythm and flash-shop rhythm of the prior templates.

### Material Study

A section focused on one physical detail:

- macro tattoo/skin image;
- tiny material note such as placement, technique or series reference;
- one short sentence about surface/gesture;
- asymmetrical placement with generous negative space.

### Thesis Interruption

A text-led spread containing a concise statement about how the fictional studio approaches body, movement and mark-making.

No marketing feature icons, statistics or testimonial treatment.

### Body / Gesture Diptych

Two images of deliberately different scale or crop, not equal cards.

One image should describe the finished tattoo/body relationship; the other should suggest hand/process/studio gesture.

### Artist Fragment

Introduce one artist with:

- name;
- discipline/focus;
- one short statement;
- one image crop;
- folio reference to `/artists`.

No profile card.

### Process Strip

A narrow, type/image sequence showing a few stages such as `observe → draw → place → mark`.

This is not an icon timeline and should remain editorial.

### Home Ending — Colophon

End like the final page of a book:

- studio identity;
- fictional address;
- hours;
- email/phone;
- demo disclosure;
- links to Visit and Contents.

Do not add a conventional multi-column footer, social-link mega footer or CTA panel.

## Work Page — Studies / Archive

`/work` is a sequence of art studies rather than a gallery grid.

### Information model

Each work entry may include:

- work/series number;
- title;
- artist;
- year or fictional series marker if used carefully;
- style/focus;
- body placement;
- short note;
- main image;
- optional detail image;
- layout variant.

Avoid commercial pricing or availability language.

### Composition

Use at least four stable variants so the archive does not look templated:

- `edge-crop` — large image enters from viewport edge, caption sits distant from it;
- `quiet-page` — medium image surrounded by large negative space;
- `split-study` — one finished piece plus one close detail, unequal scale;
- `text-led` — title/note is dominant with a smaller work image.

The page should read vertically as a sequence of different book spreads.

No masonry, equal cards, slider dependency, filter bar or hover-only reveal.

All critical archive content remains in initial server-rendered HTML.

## Artists Page — Artist Chapters

`/artists` presents each artist as a chapter rather than a roster grid.

Each artist chapter includes:

- name;
- focus/specialty;
- concise fictional biography;
- short first-person-style practice statement only if clearly fictional and authored as demo copy;
- portrait or studio image;
- representative work/detail;
- link back to relevant works.

Each chapter must use a visibly different composition while sharing the same data model.

Suggested variants:

- portrait-led with biography in outer margin;
- statement-led with narrow portrait crop;
- work-led with artist image secondary.

Do not use repeated portrait cards or avatar circles.

## Studio Page — Practice / Process

`/studio` is publicly labeled **Practice** and explains how the studio works.

The page should feel like notes from a studio book.

Suggested chapter sequence:

1. `<h1>Practice</h1>` and studio thesis;
2. observation / body placement;
3. drawing and adaptation;
4. transfer / preparation;
5. tattooing / mark-making;
6. after-session expectations stated conservatively;
7. hygiene information stated generally without unverifiable certifications;
8. studio image study;
9. link to Visit.

Process information should be handled through numbered folio notes, image/text fragments and editorial sequencing rather than cards or icons.

## Visit Page — Practical Colophon

`/visit` is the practical closing chapter of the monograph.

Required content:

- one meaningful `<h1>`;
- semantic `<address>`;
- fictional Brussels address clearly marked as demo/fictitious;
- opening hours;
- safe demo phone/email;
- access note;
- concise inquiry guidance;
- portfolio-demo disclosure;
- no booking form;
- no map iframe;
- no calendar widget;
- no backend-dependent interaction.

### Desktop composition

Use a large near-empty field with practical information clustered like a book colophon, plus one restrained studio/detail image.

### Mobile composition

Use a clear vertical order:

`title → address → hours → contact → access → inquiry note → demo disclosure → contents`.

## Content Tone

Copy should be concise, human and materially specific.

Preferred vocabulary can reference:

- surface;
- gesture;
- weight;
- rhythm;
- placement;
- movement;
- line;
- density;
- negative space.

Avoid over-writing and vague luxury language.

Do not use:

- “where art meets skin” clichés;
- “crafted with passion”;
- fake curatorial authority;
- generic agency claims;
- medical promises;
- fake reviews;
- invented awards or press mentions.

## Image Direction

Imagery is essential to Matière's identity and must undergo both technical and semantic QA.

Preferred image categories:

- close-up contemporary tattoo work;
- abstract/gestural tattoos on visible body areas;
- hands drawing or preparing stencil/placement;
- studio surfaces, tools or ink details where visually appropriate;
- artist portraits with a quiet documentary character;
- body crops that emphasize composition/placement without sexualizing the subject.

Avoid:

- unrelated fashion/lifestyle images;
- graphic medical imagery;
- explicit nudity;
- generic stock tattoo-machine closeups repeated across pages;
- traditional flash imagery that makes the site resemble Lucky XIII;
- images already used as hero anchors in the other tattoo templates.

### Technical image rules

- use `next/image` where compatible;
- meaningful `alt` text;
- explicit aspect behavior to prevent layout shift;
- no broken remote assets;
- preserve editorial crop intentionally through `object-position`/variant data rather than arbitrary CSS per page;
- no critical copy embedded in imagery.

## Responsive Strategy

Responsive behavior must recompose the editorial concept rather than simply shrink it.

### Desktop

- right-edge folio navigation;
- wide asymmetric spreads;
- cropped image fields;
- captions/marginal notes can sit apart from images;
- strong alternation between dense and empty sections.

### Tablet

- remove the fixed/edge dependency of the folio navigation;
- transform it into an inline contents/index block;
- reduce extreme offsets and edge crops;
- preserve asymmetry where it remains readable.

### Mobile

- vertical book-like reading order;
- inline Contents near page opening;
- no fixed navigation;
- one dominant element per screen-height region where practical;
- image/caption relationships become explicit in DOM order;
- large titles use guarded `clamp()` sizing and safe line-height;
- no horizontal overflow from edge crops or folio numbers;
- maintain generous but not wasteful vertical spacing at 320px+.

## Technical Architecture

Keep the established extractable template pattern:

```text
app/sites/tatoueur-04/
  layout.tsx
  page.tsx
  work/page.tsx
  artists/page.tsx
  studio/page.tsx
  visit/page.tsx

src/templates/tatoueur-04/
  components/
  data/
  lib/
  pages/
  styles/
  types.ts
```

### App Router boundary

Files in `app/sites/tatoueur-04/**` stay thin:

- route metadata;
- import the relevant template page;
- no substantial visual logic;
- no portfolio-shell dependency.

### Template boundary

All visual/UI implementation remains in `src/templates/tatoueur-04/**`.

Do not import components, styles or data from `tatoueur-01`, `tatoueur-02` or `tatoueur-03`.

Do not introduce a generic cross-template page-builder abstraction just to reduce line count.

## Copyability Contract

Matière must remain easy to duplicate into a real client project.

All client-replaceable content must be centralized in typed data:

- studio identity;
- descriptor;
- navigation labels;
- SEO descriptions;
- address/contact/hours;
- works and work variants;
- artists;
- practice/process copy;
- images and alt text;
- demo disclosure.

A developer should be able to:

1. copy `src/templates/tatoueur-04`;
2. recreate the thin route tree;
3. replace identity/data/assets;
4. adjust metadata;
5. ship without rewriting the template architecture.

No backend, CMS, runtime design plugin or portfolio-shell component should be required for the copied site to render.

## SEO Contract

Every route exports unique Next.js `Metadata`.

Required:

- unique title and meta description;
- `robots: { index: false, follow: true }` at demo-layout level;
- no fake production URL or fabricated `metadataBase`;
- one meaningful `<h1>` per route;
- semantic `<main>`, `<nav>`, `<section>`, `<article>` and `<address>` where appropriate;
- logical heading hierarchy;
- crawlable internal links;
- server-rendered primary copy;
- meaningful image alt text;
- responsive image sizing;
- no critical content that only appears through client interaction.

OpenGraph/Twitter metadata is optional and should only be added when it can be done honestly without inventing a public production origin.

JSON-LD should be omitted for the fictional demo unless it can be clearly represented without implying a real operating business.

## Accessibility

Required:

- visible `:focus-visible` states;
- keyboard-reachable folio/contents navigation;
- sufficient contrast for graphite and accent text on plaster;
- no information conveyed only through color or image position;
- DOM order must remain logical despite asymmetric desktop layout;
- essential copy at practical reading sizes;
- no hover-only content;
- `prefers-reduced-motion` respected;
- decorative folio marks hidden from assistive technology when they convey no unique meaning.

## Performance

- server components by default;
- keep client components to the smallest surface actually required;
- no animation framework unless a concrete requirement appears later;
- no client-only data fetching for core content;
- no carousel dependency;
- explicit image sizing/aspect rules;
- CSS texture effects must be lightweight;
- avoid duplicated large imagery solely for responsive layout tricks.

## Browser Regression Contract

Create a dedicated Playwright-based browser check for Matière.

Minimum viewport coverage:

- desktop: `1440 × 1000`;
- mobile: `390 × 844`.

For all five routes verify:

- no rendered broken images (`complete && naturalWidth === 0`);
- no horizontal overflow greater than 1px;
- no overlap between key display headings and associated text blocks;
- no dangerously compressed display-title line-height;
- right-edge folio navigation is present/usable on desktop where designed;
- mobile inline Contents exists and desktop edge navigation is removed/recomposed;
- semantic route links remain reachable;
- lazy-loaded imagery is exercised by scrolling the page end-to-end.

The browser check is additive to lint, production build and route/SEO smoke tests.

## Smoke / Publication Contract

Before `tatoueur-04` changes from `planned` to `available`, require fresh evidence for:

- all five routes return HTTP 200;
- unique title/description metadata exists on each route;
- `noindex, follow` demo robots metadata is present;
- home links to all four child routes;
- no `<form>` or `<iframe>` is introduced;
- semantic practical information exists on Visit;
- category page still includes `tatoueur-04`;
- real `public/previews/tatoueur-04-home.webp` exists;
- registry points to that preview;
- dedicated browser regression passes;
- overall portfolio verification remains green.

## CI

Add a dedicated **Verify Matière** workflow following the established repository pattern:

1. checkout;
2. Node setup;
3. `npm ci`;
4. `npm run lint`;
5. `npm run build`;
6. Matière route/SEO smoke;
7. Playwright/browser layout and image regression;
8. publication contract check when registry is switched to `available`.

Do not claim success from stale workflow runs. Final publication/merge requires fresh green checks on the exact PR head.

## Visual QA Gate

The final 1440×1000 homepage WebP must be manually inspected before merge.

Reject publication if any of these are true:

- imagery is unrelated to tattooing or contemporary body work;
- the homepage resembles Black Ritual's poster/rail system;
- the homepage resembles Line Gallery's museum top-nav/catalogue system;
- the homepage resembles Lucky XIII's storefront/flash system;
- a generic card grid dominates any primary section;
- a conventional header or footer appears;
- multiple elements compete as equal primary anchors;
- title/copy collisions appear;
- edge crops create accidental tangencies;
- grayscale hierarchy becomes unclear;
- mobile feels like desktop columns simply stacked;
- the page looks like a generic luxury fashion template rather than an artist monograph.

### Designly preflight

Before signoff, apply:

- **Thumbnail test:** page silhouette remains distinctive at reduced scale;
- **Grayscale test:** hierarchy survives removal of accent color;
- **Negative-space audit:** empty regions feel intentional, not accidental;
- **Focal-anchor audit:** each major composition has one dominant visual anchor;
- **Tangency audit:** cropped imagery, rules and type have decisive relationships.

## Portfolio Publication

Only after technical and visual verification:

1. update `preview-target.json` to `tatoueur-04` / `/sites/tatoueur-04` at `1440 × 1000`;
2. capture the real homepage through the existing preview workflow;
3. manually inspect the generated WebP;
4. change only the existing `tatoueur-04` registry entry from `planned` to `available`;
5. add `preview.src = "/previews/tatoueur-04-home.webp"` with meaningful alt text and dimensions;
6. rerun publication/portfolio verification on the exact final head;
7. review diff and merge through GitHub only after fresh green checks.

Published direction remains:

`Contemporain / artistique`

Suggested final summary:

`Art-book contemporain — compositions asymétriques, études de peau et de geste, navigation en folio et photographie expérimentale centrée sur la matière.`

## Cross-Tool Responsibilities

- **Superpowers** — methodology, spec/plan/TDD/verification/review gates.
- **Designly** — art-direction authority, composition hierarchy and final visual QA.
- **Superdesign** — optional visual exploration only; never changes repo architecture or production dependency graph. Do not claim runtime use unless its preflight actually succeeds.
- **NaCl** — graph verification only if project-local NaCl/MCP is genuinely configured and canary checks are available. Otherwise mark it unavailable rather than simulating verification.
- **GitHub** — branch/files/workflows/preview/PR/merge source of truth.

## Out of Scope

Do not implement:

- real booking;
- appointment calendar;
- contact form backend;
- payments;
- ecommerce;
- authentication;
- CMS;
- reviews/ratings;
- fake awards/press/certifications;
- medical advice or healing guarantees;
- interactive WebGL/canvas art;
- heavy motion system;
- portfolio-shell redesign;
- refactors unrelated to `tatoueur-04`.

## Acceptance Summary

Matière is ready for implementation only after this written specification is explicitly approved.

It is ready for publication only when:

- all five routes exist and are server-rendered;
- metadata and semantic content are complete;
- architecture remains independently copyable;
- visual silhouette is clearly distinct from all three other tattoo templates;
- browser regression is green on desktop/mobile;
- final imagery is technically loaded and semantically appropriate;
- generated preview is manually inspected;
- registry publication is correct;
- dedicated and portfolio GitHub Actions are green on the exact final PR head.

NaCl verification must not be claimed unless project-local NaCl/MCP is configured and its real graph/canary checks are available.