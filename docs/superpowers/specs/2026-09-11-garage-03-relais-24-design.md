# Garage 03 — Relais 24

## Goal
Create `garage-03` as a distinct roadside-assistance and rapid-diagnostic demo site inside `portfolio-sites`. It must feel operational, urgent and trustworthy without resembling `garage-01` Atelier Noir or `garage-02` Torque Works.

## Positioning
Relais 24 is a fictional Brussels-area automotive assistance service focused on breakdown response, battery issues, towing and rapid diagnostics. The site is a portfolio demo only; all contact details, examples and service claims remain illustrative.

## Visual Direction
The site should feel like a roadside intervention team rather than a workshop showroom.

### Palette
- Night Blue `#0B1320`
- Road Slate `#1E2935`
- Asphalt `#2C3138`
- Safety Orange `#FF6B1A`
- Reflective Cream `#F4F1E8`
- Utility Grey `#9DA6AD`

Orange is reserved for urgency, calls to action, route markers and intervention status labels. Avoid broad orange decorative surfaces.

### Typography
- Condensed, heavy display typography for headings and intervention numbers.
- Clean sans-serif body copy for fast reading.
- Monospace only for utility labels, timestamps, route IDs and service codes.

### Graphic Language
- Reflective-strip cues and road-line dividers.
- Intervention codes, route markers and dispatch labels.
- No glassmorphism, gradients, fake dashboards, fake GPS maps or decorative telemetry.
- Strong contrast, rectangular modules and practical spacing.

## Information Architecture
Routes:
- `/sites/garage-03` — Accueil
- `/sites/garage-03/depannage` — Dépannage
- `/sites/garage-03/diagnostic` — Diagnostic
- `/sites/garage-03/remorquage` — Remorquage
- `/sites/garage-03/contact` — Contact

The route structure is intentionally compact and distinct from the workshop-oriented garage templates.

## Page Design
### Home
- Full-width roadside hero with a real breakdown-assistance image.
- Primary headline focused on intervention speed and clarity, without fabricated live response times.
- Immediate service band for battery, panne moteur, assistance and remorquage.
- Dispatch-style service modules with practical summaries.
- Dark section explaining the intervention process: appel → localisation → diagnostic → action.
- Strong phone/contact CTA without fake booking flow.

### Dépannage
- Emergency-service composition using numbered intervention types.
- Battery boost, starting issues, wheel/tyre incident, minor roadside troubleshooting and immobilisation support.
- Clear distinction between what can be handled on site and what requires towing.
- No invented pricing or guaranteed arrival times.

### Diagnostic
- Rapid roadside diagnostic positioning.
- Four-step flow: symptôme → contrôle → décision → suite.
- Explain that diagnostics guide the next action rather than pretending every issue is repaired roadside.

### Remorquage
- Strong visual focus on tow-truck operations and safe vehicle transport.
- Explain towing scenarios, transfer to workshop and immobilised vehicles.
- No fake tracking interface or live vehicle status.

### Contact
- Large phone-first contact block.
- Fictional service zone around Brussels stated explicitly as demo content.
- Hours and intervention information.
- No form, live map, online reservation or payment flow.

## Shared Components
### Header
- Night-blue header with compact brand mark `R24`.
- Orange top or bottom signal rail.
- Desktop navigation plus accessible mobile menu.
- Utility label such as `ASSISTANCE ROUTIÈRE · DÉMO PORTFOLIO`.

### Footer
- Dark technical footer with brand, navigation, fictional contact details and demo disclosure.

### Secondary Page Hero
- Large section code (`01`, `02`, `03`, `04`) and practical page title.
- Road-line / reflective visual cue instead of garage-bay styling.

## Photography
Use realistic roadside and service imagery:
- everyday vehicles rather than luxury cars,
- tow truck / roadside assistance,
- battery or diagnostic intervention,
- mechanic beside a vehicle outdoors or in a service area.

Avoid motorsport, tuning, supercars and luxury dealership imagery.

## Accessibility & Responsive Behavior
- One primary `h1` per page.
- Semantic landmarks and accessible navigation.
- Visible keyboard focus states.
- Minimum practical touch targets around 44px.
- Strong contrast between orange, cream and night-blue surfaces.
- No horizontal overflow on mobile.
- Respect `prefers-reduced-motion`.
- Keep image dimensions stable to avoid layout shift.

## Portfolio Integration
After the template is complete:
- change `garage-03` status from `planned` to `available`,
- update its portfolio direction/summary if needed,
- add `public/previews/garage-03-home.webp`,
- set preview metadata to the generated screenshot,
- point `preview-target.json` to `/sites/garage-03` during preview capture.

Do not modify `garage-01` or `garage-02` visual systems.

## Verification
Add a dedicated Garage 03 smoke test covering:
- all five routes return 200,
- pages remain `noindex, follow`,
- no iframe,
- no form,
- home links to the four child routes,
- expected service markers are present,
- catalogue exposes `garage-03` with a real preview once published.

CI must run at minimum:
- `npm run lint`
- `npm run build`
- Garage 03 smoke verification
- global portfolio smoke verification

## Scope Guardrails
This template is a static portfolio demonstration. Do not add backend logic, booking, dispatch tracking, geolocation, online payment, fake reviews, fake certifications or real-time service availability.