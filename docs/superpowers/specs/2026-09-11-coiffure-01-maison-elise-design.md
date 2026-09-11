# Coiffure 01 — Maison Élise design spec

## Scope

Create the first coiffure template as a complete multi-page demo site for **Maison Élise**, a fictional premium hair salon in Brussels. The template must feel like a beauty editorial house rather than a generic booking website, and it must be visually distinct from every garage and restaurant template already published.

## Positioning

Maison Élise is a refined contemporary salon focused on cut, styling, colour care and consultation. The tone is calm, precise and human: premium without luxury clichés, feminine without becoming pink or decorative, and editorial without feeling like a fashion e-commerce site.

The demo must remain clearly fictional. It may use calls to contact the salon, but it must not simulate a working booking engine, checkout, account, review system or live availability.

## Routes

- `/sites/coiffure-01` — Accueil
- `/sites/coiffure-01/prestations` — Prestations
- `/sites/coiffure-01/maison` — Maison
- `/sites/coiffure-01/galerie` — Galerie
- `/sites/coiffure-01/contact` — Contact

## Visual direction

### Core concept

**Maison beauté éditoriale** — a salon presented like a calm beauty magazine feature.

### Palette

- warm ivory: `#F3EEE7`
- espresso brown: `#2B211D`
- soft skin beige: `#D7C3B6`
- muted burgundy accent: `#6A2F3C`
- warm white: `#FCFAF7`
- restrained grey for utility text: `#7B716C`

Burgundy is an accent only. The dominant experience should remain ivory, brown and photographic.

### Typography

- expressive editorial serif for large titles and pull quotes
- neutral sans-serif for navigation, prices, labels and practical information
- generous line-height and restrained tracking
- avoid condensed industrial typography, monospace styling and oversized all-caps blocks used by garage/street-food templates

### Layout language

- asymmetric editorial compositions rather than repeated equal cards
- large portrait photography with deliberate cropping
- generous negative space
- thin dividers and small utility labels
- alternating image/text chapters
- occasional oversized serif words used as composition, not as decorative noise
- no brutalist offset shadows, app-like dashboards, fake counters or generic glassmorphism

## Photography direction

Images should show real salon craft and beauty details:

- haircut and styling in progress
- close hair texture and finish
- consultation or hands working with hair
- calm contemporary salon interiors
- editorial portraits where hair remains the subject

Avoid generic model glamour shots that could belong to cosmetics or fashion, influencer selfies, wedding imagery, product-pack e-commerce imagery and stock receptionist photos.

## Page architecture

### Accueil

The homepage should establish the salon in one glance.

1. restrained top utility line with Brussels / salon descriptor
2. editorial navigation with visible contact CTA
3. asymmetric hero combining a portrait/detail image with a large serif statement such as `La coupe commence par l’écoute.`
4. compact introduction to Maison Élise
5. three core service chapters: Coupe, Couleur, Soin & coiffage
6. visual salon/craft chapter
7. short process strip: Écouter → Construire → Travailler → Finaliser
8. gallery teaser
9. contact CTA and practical footer

The homepage should not open with a price grid or booking form.

### Prestations

Organise the service offering as editorial sections rather than a SaaS pricing table.

Suggested groups:

- Coupe & coiffage
- Couleur & nuances
- Soin & matière
- Occasion / mise en beauté

Prices may be presented as **illustrative demo prices** if used, with wording such as `à partir de`, and must not imply live availability or checkout. Keep the list readable and relatively short.

### Maison

Explain the salon philosophy, consultation approach, craft and atmosphere. Use one or two strong images and short text chapters. No invented awards, celebrity clients, press logos, certifications or fake founder biography presented as fact.

### Galerie

Use a varied editorial image grid with intentionally different aspect ratios. Images should focus on hair, hands, texture and salon craft. No fake before/after claims and no customer testimonials attached to images.

### Contact

Phone-first practical page with fictional Brussels contact details, opening hours, address and a clear demo disclosure. Email and telephone links may be functional. Do not add a form, live map, booking widget or fake appointment calendar.

## Components and data

Create a dedicated `src/templates/coiffure-01` system with its own:

- header
- footer
- page hero / editorial heading primitive
- shared salon data
- page modules
- dedicated stylesheet

Content should remain centralized enough that contact details, navigation and key services are not duplicated across pages.

The template must not import visual components or styles from Garage or Restaurant templates.

## Responsive behaviour

Desktop should use wide editorial compositions with intentional asymmetry. Tablet may reduce the imbalance while preserving image/text hierarchy. Mobile should become a clean single-column reading flow with:

- no horizontal overflow
- navigation that remains usable without tiny targets
- approximately 44px minimum practical touch targets
- portrait crops that preserve hair as the focal subject
- headings that scale down without awkward single-word overflow

## Accessibility

- semantic heading order
- useful image alt text focused on the scene/craft
- visible `:focus-visible` states
- sufficient contrast for burgundy/beige combinations
- links distinguishable without relying only on colour
- respect `prefers-reduced-motion`
- no autoplay video or motion required to understand content

## Portfolio integration

Once implementation is validated:

- change `coiffure-01` from `planned` to `available`
- add preview metadata to `src/portfolio/data/sites.ts`
- capture `/sites/coiffure-01` at 1440×1000 through the existing preview workflow
- store the generated file as `/public/previews/coiffure-01-home.webp`
- use a unique preview filename rather than a query-string cache buster

## Validation

Add a dedicated smoke contract for Maison Élise that verifies:

- all five routes return successfully
- homepage contains the Maison Élise identity and a stable editorial marker
- Prestations, Maison, Galerie and Contact expose their expected content markers
- no `<form>` or embedded booking/map iframe is present
- portfolio category exposes Maison Élise only after publication
- generated preview file exists after the capture step

CI should run lint, Next.js build and the Maison Élise smoke test, while existing portfolio/template workflows remain green.

## Non-goals

Do not add:

- a backend
- real appointment booking
- payment or checkout
- login/account features
- live availability
- fake reviews, awards or certification logos
- fake press coverage
- fake live map
- e-commerce product catalogue

## Success criteria

Maison Élise should immediately read as a premium hair salon, not as a reskinned restaurant or generic beauty landing page. Its typography, rhythm, photographic direction and asymmetric layout must be recognisably different from the other portfolio demos while remaining credible, responsive and easy to navigate.