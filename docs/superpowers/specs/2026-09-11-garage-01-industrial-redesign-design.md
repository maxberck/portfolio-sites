# Garage 01 — Atelier Noir Industrial Redesign

## Goal
Transform the existing `garage-01` Atelier Noir demo into a visibly industrial, workshop-first presentation while preserving its current Next.js routes and its honest demo-only behavior.

## Scope
- Keep the existing routes: `/sites/garage-01`, `/services`, `/atelier`, `/realisations`, `/contact`.
- Keep the fictional business identity `Atelier Noir` and the existing noindex/demo disclosure behavior.
- Redesign only the `garage-01` visual system and its own portfolio card copy/preview metadata when needed.
- Do not touch `garage-02` or the public portfolio shell visual system.

## Visual Direction
The site should feel like a real working bay, not a luxury dealership or a generic dark landing page. Use hard dividers, painted-floor cues, bay labels, technical utility typography and large condensed headlines.

### Palette
- Workshop Black `#111311`
- Graphite `#222522`
- Concrete `#D6D5CF`
- Off White `#F3F2EC`
- Steel Grey `#7D817D`
- Signal Yellow `#F4C430`

Signal yellow is used for wayfinding, labels and calls to action rather than large decorative surfaces.

## Page Composition
### Home
- Dark photographic hero with oversized headline and a visible `BAIE 01` identity marker.
- Compact workshop utility strip for multibrand scope, hours and location.
- Service modules presented as numbered bays rather than generic cards.
- Dark diagnostic/method section and a concrete workshop preview.

### Services
- Inspection-board / workshop-ledger composition.
- Six services shown with bay identifiers and practical descriptions.
- No prices, fake quotes or fake booking controls.

### Workshop
- More photographic and spatial than the other pages.
- Staggered workshop imagery, oversized zone marker and three working principles.

### Realisations
- Keep examples explicitly illustrative.
- Present them like service records / intervention logs rather than testimonials or case-study marketing cards.

### Contact
- Clear phone, hours and fictitious location.
- Technical access/location panel, no live map, no form and no booking flow.

## Components
- Header: black workshop header, signal-yellow top rail, compact navigation and accessible mobile menu.
- Footer: dark technical footer with business identity, routes and demo disclosure.
- Page hero: strong dark/industrial heading block with utility label.

## Interaction & Accessibility
- Keep semantic landmarks and one primary heading per page.
- Maintain visible keyboard focus, adequate contrast and mobile navigation accessibility.
- Target roughly 44px interactive hit areas.
- Respect `prefers-reduced-motion`.
- Avoid horizontal overflow at mobile widths.

## Anti-AI / Authenticity Rules
- No glassmorphism, gradients, excessive rounded cards, fake gauges, fake counters, decorative dashboards or invented certifications.
- No luxury-showroom framing, tuning/racing language or supercar-centric imagery.
- Use practical French copy tied to visible garage work.

## Verification
- Update the existing `scripts/smoke-garage01.mjs` contract so the home page must expose the new industrial markers (`BAIE 01`, `Garage multimarque`, and the signal CTA wording).
- Existing route, noindex, iframe and form checks remain in place.
- Run repository lint, build and Garage 01 smoke verification in CI before merge.
- Regenerate `public/previews/garage-01-home.webp` from the final Garage 01 branch so the portfolio card reflects the redesigned page.