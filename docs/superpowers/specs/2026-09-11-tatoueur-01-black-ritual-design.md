# Tatoueur 01 — Black Ritual Design Spec

## Status
Approved direction for the first tattoo template in the `tatoueur` family.

## Goal
Build `tatoueur-01` as a complete showcase site for a fictional blackwork / underground tattoo studio named **Black Ritual**, while preserving the repository's existing Next.js architecture and making its visual structure unmistakably different from the restaurant, garage, coiffure, and future tattoo templates.

## Project contract
- Runtime/application stack stays **Next.js 16 + React 19 + TypeScript**.
- Styling stays inside the repository's existing Tailwind/CSS setup; no framework migration.
- Routes live under `app/sites/tatoueur-01/**`.
- Template implementation lives under `src/templates/tatoueur-01/**`.
- Portfolio registration remains in `src/portfolio/data/sites.ts`.
- `DESIGN.md` continues to govern the public portfolio shell only; this template owns an independent visual system.
- No WordPress, PHP, Vue, static standalone HTML project, external site builder, or runtime dependency on Superdesign/Designly.
- Superdesign and Designly are design/QA inputs only; production code remains normal repository code.
- No appointment engine, checkout, account, CMS, or backend is required. The site is a showcase/demo.

## Cross-tool responsibility
- **Superpowers** owns planning, task boundaries, implementation discipline, verification, review, and completion gates.
- **Designly** owns art-direction constraints, composition hierarchy, typography discipline, and visual QA.
- **Superdesign** may be used to explore/compare UI directions when its CLI is available, but its output must not change the repository architecture or become a runtime dependency.
- **NaCl** may track/verify the delivery only after project-local NaCl/MCP initialization is verified. Missing NaCl runtime proof must never be treated as success.
- **GitHub** is the source of truth for branches, commits, CI, previews, PR, and merge.

## Family differentiation lock
The four tattoo templates must not be palette swaps or repeated page shells. Across `tatoueur-01` through `tatoueur-04`, vary all of the following where relevant:
- navigation location and interaction model;
- opening composition / hero architecture;
- section order and page rhythm;
- gallery system;
- artist presentation;
- contact/visit treatment;
- footer/end-of-page behavior;
- desktop grid;
- mobile navigation and reflow logic.

For Black Ritual specifically, do **not** use a conventional top navbar + centered hero + card grid + normal footer composition.

## Brand and visual direction
**Name:** Black Ritual  
**Category:** Tattoo studio / blackwork / underground  
**Tone:** severe, tactile, editorial, independent-scene poster culture; never gothic-theme cliché or game UI.

### Palette
- Ink: near-black, dominant background and type field.
- Bone: warm off-white for paper/poster surfaces.
- Ash: muted gray for utility text and rules.
- Signal red: rare accent for active states, edition marks, and small directional cues only.

Avoid gradients, glassmorphism, neon cyberpunk effects, generic rounded SaaS cards, and large drop shadows.

### Typography
Use a deliberate two-family hierarchy:
- a condensed/industrial display face for large poster titles and numeric project marks;
- a neutral grotesk/system sans for navigation, captions, metadata, and body copy.

Typography must remain legible and semantic. Decorative distortion must never be applied to body text or navigation labels.

## Information architecture
Black Ritual uses five routes:
- `/sites/tatoueur-01` — poster-like studio introduction and selected work;
- `/sites/tatoueur-01/work` — curated tattoo archive;
- `/sites/tatoueur-01/artists` — artist profiles and specialties;
- `/sites/tatoueur-01/studio` — studio philosophy, hygiene/process, and space;
- `/sites/tatoueur-01/visit` — address, opening hours, contact channels, and practical information.

Navigation labels may be shorter (`Index`, `Work`, `Artists`, `Studio`, `Visit`) but route names stay descriptive.

## Global shell
### Desktop
No standard horizontal header.

Use a **persistent narrow left rail** containing:
- vertical or stacked Black Ritual wordmark;
- compact section navigation;
- a small location/status line near the lower edge.

The content canvas starts to the right of this rail. The rail is architectural, not decorative: it establishes a strong asymmetric reading frame.

A small utility control may sit in the upper-right content corner, but it must not become a second full navigation bar.

### Mobile
The left rail disappears entirely. Replace it with a compact bottom navigation strip or compact edge-triggered menu that preserves the poster identity without consuming the top of the viewport.

Do not simply stack the desktop rail above the page.

## Home page composition
The home page behaves like a sequence of printed posters rather than a conventional marketing landing page.

### Opening
- No centered hero card.
- Large editorial title occupying most of the first viewport.
- One strong tattoo image integrated as part of the composition, not placed inside a rounded card.
- Small metadata cluster: Brussels / blackwork / custom pieces / established fictional year.
- One textual action leading to `work`, visually subordinate to the title.

### Selected work
Present selected tattoos as a vertical sequence of **oversized numbered pieces**.
Each project entry combines:
- numeric mark;
- image or image pair;
- title/style;
- artist name;
- short caption.

The image/text placement alternates between entries; do not reuse an identical card component five times.

### Artist interruption
Insert one artist introduction between work entries, so the page rhythm is interrupted intentionally instead of becoming a gallery grid.

### Studio statement
Use a wide text-led manifesto/process section with one supporting image. It should read like an editorial spread rather than an icon-feature grid.

### End state
The page ends with a **full-width address/hours poster**. This replaces the conventional multi-column footer.
A minimal legal/copyright line may sit at the very bottom, but there is no repeated sitemap footer.

## Work route
The archive must not be the same layout as the home selected-work sequence.

Use an irregular editorial index with changing image spans. Filtering, if present, is lightweight and client-side only, using real semantic buttons. Suggested style labels: Blackwork, Ornamental, Lettering, Abstract.

Every work item includes useful alt text and visible artist/style metadata. Do not create modal-only content that search engines cannot discover.

## Artists route
Artist profiles are poster-like sections, one per artist, with deliberately different image/copy balance.

Each profile includes:
- name;
- specialty;
- short factual biography;
- representative work;
- internal link back to relevant work archive content where practical.

Avoid identical avatar cards.

## Studio route
Explain the space and process without pretending to provide medical advice.

Content areas:
- studio philosophy;
- custom-project process;
- hygiene/safety commitment stated conservatively and factually;
- preparation expectations in general terms;
- studio imagery.

Do not make unverifiable certifications or health guarantees.

## Visit route
No booking form is required.

Include:
- fictional Brussels address clearly presented as demo content;
- opening hours;
- email/phone/social placeholders that look realistic but do not impersonate a real business;
- public-transport/general access note;
- concise note explaining how inquiries are handled.

The page should finish as a sparse full-screen information composition rather than a repeated portfolio footer.

## Content model
Keep content in typed data modules where repeated content benefits from structure. Pages should not contain large duplicated literal arrays when a template-local typed data file provides a clearer boundary.

Likely domain types include:
- `TattooWork`;
- `TattooArtist`;
- `StudioDetail` or equivalent small structures where genuinely useful.

Do not over-abstract one-off copy into generic CMS schemas.

## SEO requirements
SEO is part of the feature, not a follow-up.

### Metadata
Every route must define appropriate Next.js metadata with:
- unique page title;
- unique meta description;
- correct canonical path strategy consistent with repository deployment assumptions;
- Open Graph/Twitter metadata when repository conventions support it without fake absolute production URLs.

### Semantic HTML
- Exactly one meaningful `h1` per page.
- Logical `h2`/`h3` hierarchy.
- Use `main`, `nav`, `section`, `article`, `address`, and lists where semantically appropriate.
- Navigation links must be real links and keyboard reachable.
- Important copy cannot exist only inside images or CSS pseudo-elements.

### Structured data
Add JSON-LD only if it can be represented honestly for this fictional/demo studio. If used, clearly avoid real-business claims that could be mistaken for an actual local listing. Do not invent ratings, reviews, awards, or certifications.

### Media and crawlability
- Descriptive alt text for meaningful tattoo/studio imagery.
- Decorative imagery uses empty alt text.
- Internal links connect home, work, artists, studio, and visit routes.
- Core content renders through Next.js rather than requiring client-side fetches.

## Responsive requirements
Support at least phone, tablet, laptop, and wide desktop layouts.

The mobile version must be recomposed, not merely shrunk:
- left rail becomes bottom/compact navigation;
- giant display type scales with guarded line lengths;
- alternating work spreads collapse into intentionally ordered image/text blocks;
- no horizontal overflow at common phone widths;
- touch targets remain comfortably usable;
- reading order remains correct without CSS-position tricks.

## Accessibility
- Visible keyboard focus styles.
- Sufficient text/background contrast.
- Respect `prefers-reduced-motion`.
- No content depends on hover alone.
- Decorative textures must not reduce legibility.
- Navigation state should be conveyed by more than color alone where practical.

## Performance
- Prefer Next.js image handling and appropriately sized assets where compatible with current repository conventions.
- Avoid large JS animation libraries.
- No unnecessary client components; keep pages/server-rendered by default and isolate interactivity to the smallest component that needs it.
- Avoid layout shift from unsized imagery.

## Repository integration
When the implementation is verified:
1. add `app/sites/tatoueur-01/**` routes;
2. add `src/templates/tatoueur-01/**` implementation;
3. add a dedicated smoke/verification script and GitHub workflow following existing repository conventions;
4. update `preview-target.json` to `/sites/tatoueur-01` for the feature branch preview phase;
5. capture/store `public/previews/tatoueur-01-home.webp` through the existing preview workflow;
6. change the existing `tatoueur-01` portfolio entry from `planned` to `available` only after the route and preview exist and verification passes.

## Verification requirements
Completion requires fresh evidence, not inference.

At minimum verify:
- TypeScript/Next build through `npm run build`;
- ESLint through `npm run lint`;
- smoke coverage for every Black Ritual route;
- no broken internal navigation;
- responsive rendering without obvious overflow;
- portfolio category still renders;
- generated preview exists and targets the real Black Ritual home route;
- the `tatoueur-01` registry status/preview is correct only after successful implementation.

Visual QA must specifically reject:
- a conventional top-nav/hero/cards/footer shell;
- obvious structural reuse from the coiffure templates;
- equal-emphasis content blocks that destroy hierarchy;
- generic AI-style marketing copy;
- decorative UI that conflicts with the severe poster/editorial direction.

## Non-goals
- Real appointment scheduling.
- Payment/deposit processing.
- Authentication.
- Backend database.
- CMS.
- Real customer reviews or fabricated ratings.
- Real medical claims or guarantees.
- Changing the portfolio shell design.
- Refactoring unrelated existing templates.
