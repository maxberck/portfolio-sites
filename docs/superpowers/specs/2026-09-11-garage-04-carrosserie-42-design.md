# Garage 04 — Carrosserie 42 Design Spec

## Goal
Create the fourth garage demo site, `garage-04`, for **Carrosserie 42**, positioned as a contemporary bodywork and paint workshop. The result must feel materially different from Atelier Noir, Torque Works, and Relais 24 while remaining credible, practical, responsive, and clearly fictional/demo content.

## Positioning
Carrosserie 42 focuses on:
- bodywork repair
- dents and scratches
- bumpers and panels
- preparation and paint
- cosmetic restoration after minor damage
- workshop quality control

It must not imply vehicle manufacturing, tuning, racing, luxury dealership services, insurer integrations, live claim tracking, or guaranteed repair outcomes.

## Approved Visual Direction
**Cabine peinture / fiche de remise en état**.

The visual language should evoke masking tape, primer, inspection marks, spray-booth cleanliness, panel preparation, and paint quality control rather than generic mechanic imagery.

### Palette
- Primer Ivory: `#E9E4D8`
- Warm White: `#F7F4EC`
- Body Black: `#171817`
- Panel Grey: `#A8AAA6`
- Oxide Red: `#B94A3A`
- Deep Red: `#7F3028`
- Fine Line: `#C8C3B8`

Oxide red is the signal/accent color. Avoid blue, neon, yellow-safety, luxury gold, or the black/yellow Atelier Noir language.

### Typography
Use a strong editorial sans-serif display stack with compact uppercase utility labels. Avoid excessive monospace. Headlines should feel like workshop signage and printed inspection sheets, not futuristic UI.

### Geometry
- rectangular sections
- 1px technical dividers
- very small or zero radius
- no box shadows
- no generic card-grid visual language
- no gradients
- masking-line and registration-mark motifs may be used sparingly
- generous white/ivory fields should contrast with dark inspection bands

## Information Architecture
Preserve a simple five-route structure:
- `/sites/garage-04` — Accueil
- `/sites/garage-04/carrosserie` — Carrosserie
- `/sites/garage-04/peinture` — Peinture
- `/sites/garage-04/realisations` — Réalisations
- `/sites/garage-04/contact` — Contact

Every page must be reachable from the site navigation.

## Global Shell
### Header
- compact Carrosserie 42 identity
- numbered or compact route navigation
- no giant portfolio-style menu
- phone/contact CTA is allowed
- responsive mobile menu with accessible labels and keyboard/focus treatment

### Footer
- restrained workshop footer
- route links
- fictional contact information
- explicit demo/fictitious disclosure
- back-to-portfolio link

### Metadata
- `noindex, follow`
- title/description specific to Carrosserie 42
- no misleading claims

## Home Page
The home page should establish the repair process visually and immediately.

### Hero
Use a large photographic bodywork/paint image with editorial crop and an ivory/black text composition.

Primary message should communicate bodywork and paint repair, for example:
- eyebrow: `CARROSSERIE & PEINTURE · BRUXELLES`
- title: `Redresser. Préparer. Peindre. Contrôler.`
- supporting copy: practical description of panel, bumper, scratch, dent, and paint work

Primary CTA: `VOIR LA CARROSSERIE`
Secondary CTA: `NOUS CONTACTER`

### Process Strip
Four visible steps:
1. `01 · CONTRÔLER`
2. `02 · REDRESSER`
3. `03 · PRÉPARER`
4. `04 · PEINDRE`

### Core Services
Show a varied editorial/service composition rather than identical cards. Suggested service modules:
- bosses et petits chocs
- rayures et éléments peints
- pare-chocs
- tôlerie légère
- préparation peinture
- raccords et remise en teinte

### Paint/Finish Feature
A photographic section focused on preparation, masking, color matching, and final inspection. Copy must avoid claiming perfect computerized matching or proprietary paint technology unless explicitly demonstrated.

### Contact Strip
Phone + contact route. No booking widget.

## Carrosserie Page
Purpose: explain bodywork intervention from impact to panel-ready surface.

Structure:
- page hero `CARROSSERIE`
- damage types: dent, scratch, bumper, panel deformation
- workshop sequence: inspect → disassemble if needed → straighten/repair → surface prep → control
- visual detail photography of panel/bodywork work
- practical note explaining that the repair approach depends on the actual condition of the panel

Do not show fake pricing or repair-duration guarantees.

## Peinture Page
Purpose: make paint work feel precise and process-driven without fake technology claims.

Structure:
- page hero `PEINTURE`
- preparation, masking, primer, paint, finish, inspection
- large spray/paint/detail photography
- restrained color-swatch motif may be used as visual direction, but no fake interactive paint configurator
- clear statement that final treatment depends on surface condition and repair scope

## Réalisations Page
Use **illustrative intervention records**, not customer testimonials.

Suggested records:
- `DOSSIER 01 · PARE-CHOCS`
- `DOSSIER 02 · AILE AVANT`
- `DOSSIER 03 · RAYURE LATÉRALE`
- `DOSSIER 04 · PETIT CHOC PORTIÈRE`

Each record may show:
- vehicle type/category
- visible issue
- workshop action
- finish/control step

All examples must be clearly fictional/illustrative. Do not imply real customers, insurance cases, before/after proof, or guaranteed outcomes.

## Contact Page
Phone-first and informational.

Include:
- fictional Brussels contact details
- hours
- email
- practical access/location text
- demo disclosure

No form, embedded map, live booking, insurer portal, estimate generator, upload field, or claim-tracking UI.

## Content Rules
### Allowed
- factual service descriptions
- workshop process explanations
- fictional address/phone/email clearly framed as demo content
- illustrative workshop records
- photography of bodywork, paint preparation, panels, spray booth, sanding/masking, repaired surfaces

### Forbidden
- fake reviews
- fake certifications
- insurer logos/partnerships
- fabricated awards
- live tracking
- booking or quote forms
- payment UI
- fake price tables
- guaranteed turnaround time
- unqualified “factory perfect” or “100% color match” claims
- before/after claims presented as real client proof

## Photography Direction
Prefer bodywork-specific images:
- damaged/repaired body panels
- sanding and preparation
- masking
- spray booth / paint application
- close-up automotive paint finish
- bumper/panel workshop details

Avoid generic sports-car glamour shots, dealership photography, motorsport, mechanic-engine imagery, and unrelated lifestyle imagery.

## Responsive Behavior
Desktop should use asymmetric editorial layouts and strong image/copy contrast.

Tablet/mobile:
- collapse complex grids cleanly
- preserve process order
- keep CTAs at least ~44px touch height
- ensure no horizontal overflow
- maintain readable utility labels
- mobile navigation must remain keyboard/screen-reader usable

## Accessibility
- semantic headings
- descriptive image alt text
- visible `:focus-visible`
- adequate contrast
- controls with accessible names
- honor `prefers-reduced-motion`
- no text baked into images as the only source of information

## Implementation Boundaries
Create only Garage 04-specific route/template assets plus the minimal portfolio/preview/test integration needed to publish it.

Do not redesign or alter Garage 01, Garage 02, Garage 03, or unrelated restaurant templates.

Expected implementation areas:
- `app/sites/garage-04/**`
- `src/templates/garage-04/**`
- `scripts/smoke-garage04.mjs`
- `.github/workflows/garage04-verify.yml`
- `src/portfolio/data/sites.ts`
- `preview-target.json`
- `public/previews/garage-04-home.webp` generated by the preview workflow

## TDD / CI Contract
Start with a failing Garage 04 smoke contract before product implementation.

Smoke requirements:
- all five Garage 04 routes return 200
- all pages include `noindex, follow`
- no `<form>`
- no `<iframe>`
- home links to all four child routes
- home includes markers representing the approved concept, including:
  - `Redresser`
  - `Préparer`
  - `Peindre`
  - `Contrôler`
- garage category contains `data-site-card="garage-04"`
- final publication requires `public/previews/garage-04-home.webp`

Workflow should run:
1. install dependencies
2. lint
3. build
4. Garage 04 smoke

Existing portfolio and garage regression workflows must remain green.

## Portfolio Publication
When implementation is complete:
- change `garage-04` from `planned` to `available`
- keep brand name `Carrosserie 42`
- keep direction `Carrosserie & peinture`
- update summary only if needed to match final visual language
- add real captured preview metadata using `/previews/garage-04-home.webp`
- trigger browser preview capture through `preview-target.json`

Do not use a query-string cache buster on the preview image unless the Next.js local image configuration explicitly supports it.

## Completion Criteria
The feature is ready for merge only when:
- the five routes exist and match the approved direction
- desktop/mobile layouts are coherent
- no forbidden fake functionality is present
- Garage 04 smoke passes
- lint passes
- production build passes
- existing regression workflows pass
- the real Garage 04 WebP preview is generated and committed
- the portfolio card is `available` and references that preview
- changed-file review confirms no Garage 01/02/03 template files were modified
