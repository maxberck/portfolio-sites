# Coiffure 02 — District Cut — Design Spec

## Goal

Create a complete static showcase site for **District Cut**, a fictional urban barber shop in the Brussels area. The template must feel unmistakably different from Maison Élise and the existing garage/restaurant sites through its layout, typography, rhythm, navigation and photography, while staying credible for a real barber business.

District Cut is a portfolio demo. It must not imply real customer reviews, real awards, real booking infrastructure, live availability, payment, geolocation or a real operating business.

## Positioning

**Business:** urban barber shop

**Direction:** brutal street barber

**Personality:** direct, sharp, confident, contemporary, street-level rather than luxury-club.

The site should evoke a real neighbourhood barber through strong portraits, clipper/detail photography, shop signage, steel, mirrors, concrete and flash photography. It must avoid the common generic “black luxury salon” treatment.

## Core layout rule

District Cut must not reuse Maison Élise's editorial structure.

Desktop uses a **persistent vertical side rail** as the primary navigation instead of a conventional horizontal header. The main content starts beside that rail and uses strong vertical crops, oversized type and deliberately uneven content widths.

On mobile, the rail collapses into a compact top bar with an accessible menu treatment; the content becomes linear without losing the typographic hierarchy.

## Visual system

### Palette

- **Coal:** `#111111` — dominant background
- **Near Black:** `#080808` — deeper structural zones
- **Steel:** `#9A9A94` — secondary utility text and rules
- **Bone:** `#EEEAE1` — primary text/light surfaces
- **Signal Red:** `#C9302C` — very limited accent for active navigation, CTA and shop markings
- **Concrete:** `#3A3A38` — borders/panels

Red is a signal, not a decorative fill. No gradients, glassmorphism, neon glow or blue/purple tech accents.

### Typography

- Display typography: heavy/condensed grotesk character, tightly set, used for headlines and shop identity.
- Body typography: neutral sans-serif with comfortable reading width.
- Small utility copy may use uppercase tracking, but monospace should not become the main visual language.

The result should feel like barber signage and printed street posters, not a SaaS landing page.

### Graphic language

Use:

- vertical rules tied to the side rail,
- clipped photo frames,
- occasional rotated or edge-aligned utility labels,
- simple line dividers,
- service codes/numbers used sparingly,
- rough but controlled spacing differences.

Avoid:

- repeated card grids,
- pill-heavy UI,
- floating glass panels,
- decorative KPI counters,
- fake dashboards,
- giant icon sets,
- identical section containers.

## Photography direction

Photography must be strongly related to barbering:

- close clipper work,
- fades and beard shaping,
- hands/tools during service,
- strong male portraits with visible haircut detail,
- mirrors/chairs/shop interior,
- flash or high-contrast editorial lighting.

Do not use unrelated fashion portraits as the main visual story. No fake client before/after comparison claims.

## Information architecture

Routes:

- `/sites/coiffure-02` — Home
- `/sites/coiffure-02/services` — Services
- `/sites/coiffure-02/shop` — The Shop
- `/sites/coiffure-02/cuts` — Cuts / visual gallery
- `/sites/coiffure-02/contact` — Contact

Every route must render as a static showcase page and carry `noindex, follow` metadata.

## Shared shell

### Desktop side rail

The side rail should visually anchor the site and contain:

- District Cut wordmark,
- navigation links,
- active-route state,
- compact location line,
- contact/CTA link near the bottom.

It should remain narrow enough that the main page still feels image-led. It must not imitate an application sidebar.

### Mobile navigation

On small screens:

- convert the rail to a top header,
- keep the wordmark readable,
- provide clear navigation access,
- maintain at least ~44 px practical tap targets,
- preserve visible focus states.

### Footer

Keep the footer intentionally compact. It should read more like shop signage/contact information than a large sitemap.

## Home page

The home must immediately differentiate itself from Maison Élise.

### Hero

Use an asymmetrical split:

- one dominant full-height vertical barber portrait/action image,
- an oversized stacked headline beside it,
- short factual copy,
- one primary CTA toward services/contact,
- one small utility line such as neighbourhood / walk-in positioning.

The composition should feel cropped and poster-like, not centered and luxurious.

### Services snapshot

Present key services as a **barber menu**, not cards. Each line can show service name, a short descriptor and a demo price or “à partir de” only if clearly presented as fictional template content.

Preferred service types:

- Coupe / fade
- Barbe
- Coupe + barbe
- Contours / entretien
- Coupe enfant

Avoid fabricated discounts or urgency offers.

### Shop statement

A short section describing the atmosphere and working style, paired with an interior/tool image. Copy should remain factual and concise.

### Cuts strip

Use an irregular horizontal or staggered image strip to preview haircut details and link to the cuts page.

### Contact close

End with a compact high-contrast contact block: address, hours, phone/email and CTA. No embedded map.

## Services page

The page should behave like a physical barber price/menu board rather than a grid of service cards.

Structure:

- concise page intro,
- large vertical list of services,
- clear separators,
- duration or pricing only as fictional demo values where useful,
- service notes kept brief,
- final contact CTA.

No booking calendar, availability picker, payment or checkout.

## Shop page

Purpose: communicate atmosphere and practice rather than company-history marketing.

Include:

- one strong interior image,
- short statement about cuts, fades, beard work and consultation,
- a compact list of what clients can expect,
- another detail image focused on tools/chair/mirror/workspace,
- contact/hours close.

Do not invent awards, certifications, staff biographies or years of operation unless clearly framed as demo copy.

## Cuts page

This is a visual gallery, not a portfolio of claimed real customers.

Use:

- irregular image sizes,
- different crop ratios,
- occasional haircut labels such as `LOW FADE`, `TEXTURED`, `BEARD`, `CROP`,
- restrained captions describing style rather than customer stories.

The page must explicitly avoid implying that displayed photos are documented District Cut customers/results.

## Contact page

Static contact information only.

Include:

- fictional Brussels-area address,
- phone,
- email,
- opening hours,
- short note about contact/walk-in policy,
- visual shop/interior detail.

No form submission, map iframe, geolocation, appointment engine or live status.

## Content rules

Copy should be short, concrete and business-appropriate.

Preferred language:

- cut,
- fade,
- beard,
- contours,
- texture,
- consultation,
- barber,
- shop,
- entretien.

Avoid generic agency/luxury language such as “expérience unique”, “excellence absolue”, “réinventer votre style” or unverifiable superlatives.

## Component boundaries

Expected shared pieces under `src/templates/coiffure-02`:

- side rail / mobile header,
- compact footer/contact strip,
- shared page intro treatment,
- barber menu row,
- media/image primitive,
- data/theme modules.

Pages should remain focused and consume centralized static content rather than embedding repeated business data in each route.

## Project structure

Expected route structure:

```text
app/sites/coiffure-02/
  layout.tsx
  page.tsx
  services/page.tsx
  shop/page.tsx
  cuts/page.tsx
  contact/page.tsx
```

Expected template structure:

```text
src/templates/coiffure-02/
  components/
  lib/
  pages/
  src/data/
  styles/
  types.ts
```

A dedicated stylesheet owns the visual system. Do not couple District Cut to Maison Élise CSS/components.

## Responsive behaviour

Desktop and tablet should preserve the identity of the side-rail composition.

On narrower screens:

- convert the side rail into a top navigation pattern,
- stack split layouts deliberately,
- avoid tiny condensed text,
- preserve image crops around the haircut/action,
- prevent horizontal overflow,
- keep primary interactions touch-friendly.

The mobile page should feel designed, not merely collapsed.

## Accessibility

- Semantic landmarks and heading hierarchy.
- Keyboard-accessible navigation.
- Strong visible `:focus-visible` states.
- Sufficient contrast on dark backgrounds.
- Alt text that describes useful visual context without promotional claims.
- Respect `prefers-reduced-motion`.
- No essential information encoded only through color.

## Motion

Motion should be minimal: subtle image/line/label transitions only if they improve hierarchy. No looping decoration, parallax-heavy effects or entrance animation required to understand the page.

## Portfolio publication

When implementation is complete:

- switch `coiffure-02` from `planned` to `available`,
- update its summary to describe the finished design,
- add `/previews/coiffure-02-home.webp`,
- set `preview-target.json` to `/sites/coiffure-02`, 1440 × 1000,
- use the real browser-rendered preview generated by the repository workflow.

## Testing and CI

Add a dedicated `scripts/smoke-coiffure02.mjs` and `.github/workflows/coiffure02-verify.yml`.

The smoke contract should verify at minimum:

- all five routes return successfully,
- District Cut marker copy appears,
- routes contain `noindex`,
- contact page has no functional form or map iframe,
- portfolio entry is `available` when publication is complete,
- preview reference/file exists,
- catalogue counts remain valid.

Development follows RED → GREEN:

1. add smoke/workflow first and confirm failure because the routes do not exist,
2. implement the site until route/content checks pass,
3. publish catalogue/preview,
4. run District Cut + global portfolio + existing template regression workflows on the final preview tree.

## Explicit non-goals

Do not add:

- backend,
- appointment system,
- calendar,
- payment,
- account/login,
- live availability,
- map iframe,
- geolocation,
- fake reviews,
- fake customer transformation claims,
- fake awards/certifications,
- unrelated refactors to existing templates.

## Success criteria

District Cut succeeds when it looks like a convincing urban barber showcase at first glance and its structure cannot be mistaken for Maison Élise with darker colors. The navigation model, hero composition, service presentation, gallery rhythm and contact treatment must all be visibly different while remaining usable, responsive and appropriate to the barber business.