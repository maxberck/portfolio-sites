# Tatoueur 02 — Line Gallery Design Specification

## Status

Validated direction: **White Cube Catalogue**.

Line Gallery is a fictional fine-line tattoo studio presented as a quiet contemporary gallery. It must feel structurally and visually opposite to Black Ritual while remaining a practical, copyable Next.js template for a real client adaptation.

## Product Goal

Create a complete five-route showcase site for a fictional Brussels tattoo studio specializing in fine-line, minimal, botanical and small-scale custom work.

The result must:

- remain inside the repository's current Next.js + React + TypeScript + Tailwind/CSS architecture;
- be independently extractable from the portfolio;
- centralize all business content so a future client version can be produced mostly by replacing data, images and metadata;
- ship with route-specific SEO metadata and semantic HTML;
- have a visual architecture that is unmistakably different from `tatoueur-01` even in grayscale;
- include browser-level visual regression checks for broken images, text collisions and horizontal overflow before publication.

## Brand Identity

- **Name:** Line Gallery
- **Descriptor:** Fine Line Tattoo Studio
- **Location:** Brussels
- **Direction:** Minimaliste / galerie
- **Visual metaphor:** white-cube gallery + printed exhibition catalogue
- **Tone:** calm, precise, tactile, understated

The studio is fictional. Address, phone, email, artists and project descriptions must be clearly demo-safe and must not imply real awards, medical guarantees or certifications.

## Visual System

### Palette

Use a restrained museum palette:

- warm gallery white / ivory as the dominant field;
- graphite for primary text;
- soft neutral grey for labels and dividers;
- one subtle archival accent such as muted clay, oxidized green or pale blue-grey.

No black poster fields, signal red, glassmorphism, gradients or SaaS-style cards.

### Typography

Use one refined serif for editorial display moments and one neutral grotesk/sans for labels, metadata and navigation.

Display typography must never use intentionally colliding line-height. Large headings should remain generous and readable. Browser regression tests will enforce a minimum computed line-height ratio and detect title/copy overlap.

### Grid

Use a **Swiss modular gallery grid**, but keep the composition loose through large negative-space zones.

Composition rules:

- exactly one dominant focal anchor per section;
- active negative space of roughly 35–55% in key desktop compositions;
- images should feel placed on a wall or printed on a catalogue page rather than packed into a gallery grid;
- no equal-emphasis multi-card sections;
- avoid accidental tangencies between text, dividers and images;
- grayscale hierarchy must remain obvious.

## Information Architecture

Routes:

1. `/sites/tatoueur-02`
2. `/sites/tatoueur-02/work`
3. `/sites/tatoueur-02/artists`
4. `/sites/tatoueur-02/studio`
5. `/sites/tatoueur-02/visit`

The URL pattern stays predictable and easy to copy, but each page uses a distinct internal composition.

## Global Navigation Architecture

### Desktop

Use a thin top navigation line, not a rail.

Structure:

- small `LINE GALLERY` wordmark at far left;
- sparse route links aligned to the right;
- a thin rule under the navigation;
- no large header block;
- navigation should occupy little visual weight and feel like gallery signage.

The navigation may become subtly sticky, but it must remain visually light and should never become a floating rounded bar.

### Mobile

Do **not** reuse Black Ritual's bottom navigation.

Use a compact top bar with a simple `Menu` control. Opening it reveals a clean full-screen text menu on gallery white. No hamburger animation spectacle, backdrop blur or oversized motion.

## Home Page

### Opening

The first viewport must feel deliberately empty.

Composition:

- navigation at top;
- a small exhibition-style metadata line (`BRUSSELS / FINE LINE / PRIVATE STUDIO`);
- `LINE GALLERY` as the primary focal anchor;
- a single medium portrait-oriented tattoo image offset from center;
- short one-sentence studio statement;
- discreet text link to the work catalogue.

The hero must not be centered like a generic landing page and must not become a 50/50 split.

### Home Sequence

The content sequence is:

`quiet opening → single work plate → curator note → diptych → artist notation → single work plate → studio note → visit panel`

This must not use Black Ritual's repeated numbered poster spreads.

### Work Plates

A work plate behaves like a catalogue page:

- image occupies one deliberate grid zone;
- number/title/caption sit separately, often at a distant edge;
- metadata uses small typographic notation;
- white space is part of the composition.

At least three plate variants are required:

- `plate-left`
- `plate-center`
- `plate-edge`

They share data but not identical placement.

### Curator Note

Insert a text-only interruption with a short statement about custom placement, restraint and line quality. It should resemble an exhibition note, not a marketing feature block.

### Artist Notation

Present one artist through name, specialty and two short lines, with a small portrait or work crop. No card container.

### Closing Visit Panel

End the page with a side-oriented information composition: one narrow column for address/hours/contact and a large empty field beside it. This replaces a conventional footer CTA.

## Work Page

`/work` is a catalogue, not a masonry gallery.

Use:

- `<h1>Work Catalogue</h1>`;
- a small category index;
- sequential numbered works;
- alternating page-like compositions with varying image scale;
- complete server-rendered archive content.

Do not use equal cards, hover-dependent reveal, horizontal-scroll-only access or client-side filtering that hides critical content from the initial HTML.

## Artists Page

`/artists` resembles gallery artist dossiers.

Each artist section contains:

- artist name;
- specialty;
- concise fictional biography;
- portrait;
- one representative work;
- reference number or notation.

Each dossier must vary composition using stable variants rather than identical cards. The overall page should feel like a monograph index.

## Studio Page

`/studio` explains the working method through a quiet editorial composition.

Sections:

- philosophy / restraint;
- custom design process;
- placement consultation;
- conservative hygiene wording;
- preparation expectations;
- small studio-image sequence.

Process steps should be typographic rows or marginal notes, not icon cards.

No medical promises, certifications or unverifiable claims.

## Visit Page

`/visit` is a sparse practical-information page.

Use:

- semantic `<address>`;
- fictional address;
- opening hours;
- phone/email;
- access note;
- how to start an inquiry;
- explicit portfolio-demo disclosure.

No booking engine, map iframe, form, fake calendar or backend.

Desktop should use a strong side-panel composition. Mobile should recompose naturally into vertically separated information blocks.

## Responsive Strategy

Responsive behavior must be designed, not merely scaled.

### Desktop

- broad white margins;
- modular grid;
- offset images;
- editorial captions often separated from imagery;
- thin top navigation.

### Tablet

- reduce extreme side spacing;
- preserve asymmetry where readable;
- prevent long titles from colliding with captions or images.

### Mobile

- convert compositions into a calm vertical catalogue reading order;
- image first when it improves comprehension, then title/caption/metadata;
- full-screen text menu rather than bottom navigation;
- retain generous vertical spacing;
- no horizontal overflow at 320px+;
- preserve minimum touch target sizes and keyboard focus visibility.

## Technical Architecture

Keep the existing repository pattern:

```text
app/sites/tatoueur-02/
  layout.tsx
  page.tsx
  work/page.tsx
  artists/page.tsx
  studio/page.tsx
  visit/page.tsx

src/templates/tatoueur-02/
  components/
  data/
  lib/
  pages/
  styles/
  types.ts
```

App Router files remain thin and route-focused. Template-owned layout, content and styling stay inside `src/templates/tatoueur-02`.

### Copyability Contract

All client-replaceable content must be centralized in typed data:

- business identity;
- navigation;
- contact information;
- opening hours;
- SEO descriptions;
- artists;
- work items;
- studio/process copy;
- images and alt text.

No dependency on portfolio-shell components for the public template UI.

A copied client project should not require rewriting page structures just to replace studio identity and content.

## SEO Contract

Every route exports unique Next.js `Metadata`.

Required:

- unique title and description;
- semantic `main`, `nav`, headings and `address` where applicable;
- one meaningful `h1` per route;
- crawlable internal links;
- useful image alt text;
- no critical copy embedded only in images;
- server-rendered primary content;
- responsive image sizing through `next/image`;
- demo convention `robots: { index: false, follow: true }` while still implementing production-quality metadata structure.

Do not invent a fake `metadataBase`.

## Image Reliability

The Black Ritual regression exposed dead remote image IDs. Line Gallery therefore treats image availability as a release criterion.

Rules:

- use `next/image` for template imagery;
- every selected external image must be verified through the browser regression suite;
- no route may ship if a rendered `<img>` has `naturalWidth === 0`;
- image containers must define stable aspect behavior to avoid layout jumps;
- broken-image detection runs on all five routes at desktop and mobile widths.

## Browser Visual Regression Contract

Create a dedicated Playwright-based script for Line Gallery.

Required viewport coverage:

- desktop: `1440 × 1000`;
- mobile: `390 × 844`.

For all five routes, verify:

- no broken rendered images;
- no horizontal overflow greater than 1px;
- no overlap between key display headings and their associated copy blocks;
- no dangerously compressed display heading line-height;
- navigation remains visible/usable in its intended mode;
- page can be scrolled end-to-end without missing lazy-loaded images.

This browser check is additive to lint, production build and semantic smoke tests.

## CI and Publication

Add a dedicated `Verify Line Gallery` workflow mirroring the established project pattern:

1. `npm ci`
2. `npm run lint`
3. `npm run build`
4. Line Gallery route/SEO smoke
5. Playwright browser regression

Publication sequence:

1. routes and template code green;
2. visual browser regression green;
3. update `preview-target.json` to `/sites/tatoueur-02` at `1440 × 1000`;
4. generate real WebP through existing preview workflow;
5. update only the existing `tatoueur-02` registry entry from `planned` to `available`;
6. verify category catalogue references the generated preview;
7. PR review and merge only after fresh GitHub Actions success.

## Explicit Structural Differences From Black Ritual

Line Gallery must not reuse Black Ritual's UI architecture.

Forbidden carry-over:

- persistent left rail;
- fixed bottom mobile nav;
- black full-page field as default background;
- red signal poster ending;
- repeated numbered full-height work spreads;
- compressed brutalist display typography;
- poster-style artist interruption;
- conventional reuse of Black Ritual section ordering or component markup.

Line Gallery's identity comes from top navigation, white space, catalogue plates, museum-like captions, side information panels and quiet editorial pacing.

## Accessibility

- visible `:focus-visible` states;
- keyboard-operable menu;
- semantic nav and heading order;
- sufficient graphite/grey contrast on gallery white;
- no text smaller than practical reading limits for essential content;
- `prefers-reduced-motion` respected;
- no interaction required solely to reveal essential information.

## Out of Scope

- backend;
- CMS;
- authentication;
- booking system;
- payments;
- ecommerce;
- real review data;
- map embeds;
- client-side filtering infrastructure;
- elaborate animation framework;
- redesign of the portfolio shell;
- changes to `tatoueur-01`, `tatoueur-03` or `tatoueur-04` beyond unrelated repository-wide verification if required.

## Acceptance Criteria

Line Gallery is ready for publication only when:

- all five routes render successfully;
- every route has unique metadata and semantic content;
- desktop and mobile compositions clearly differ from Black Ritual;
- the template remains independently copyable;
- no rendered image is broken on any tested route;
- no tested title/copy collision occurs;
- no tested horizontal overflow occurs;
- lint passes;
- production build passes;
- route/SEO smoke passes;
- Playwright visual regression passes;
- real portfolio preview exists;
- registry entry is `available` and references that preview;
- GitHub Actions are green on the PR head.

NaCl verification is not claimed unless project-local NaCl/MCP has been initialized and its required canary checks are available.