# Portfolio — Editorial Brutalism Design Spec

**Date:** 2026-09-10  
**Scope:** portfolio shell only  
**Branch:** `feat/portfolio-swiss-brutalist`  
**Status:** approved in chat

## 1. Purpose

Replace the current Swiss-heavy portfolio presentation with a more convincing editorial brutalist direction that feels authored rather than generated. The portfolio remains a showcase-only catalogue for the demo sites.

The demo templates themselves are out of scope and keep their existing visual identities.

## 2. Hard locks

- No `Créer mon site`, no commercial funnel, no quote form, no purchase flow.
- No decorative project numbering such as `01`, `02`, `#04`, `02 / 16` or oversized counters.
- No fake screenshots; only real preview assets for `available` demos.
- Available demos open in a new tab and keep the portfolio open.
- Planned demos remain visibly planned and never impersonate a real website preview.
- Kuro and Maison Silex template files must not change.
- Portfolio pages must remain accessible, responsive and indexable as before.
- Garage portfolio copy must describe repair, maintenance, diagnostics and breakdown assistance; never vehicle creation/manufacturing.

## 3. Visual register

**Direction:** functional editorial brutalism.

The visual system should feel closer to an independently art-directed studio index than to a component-library showcase.

### Palette

- paper: `#F2F1EC`
- ink: `#090909`
- muted: `#6C6B66`
- wash: `#DEDDD6`
- signal blue: `#2447FF`
- white: `#FFFFFF`

Blue is a rare signal, not a default fill for every interactive element.

### Typography

Use a restrained system stack rather than a fashionable display/font pairing:

- display: `Arial, Helvetica Neue, Helvetica, sans-serif`
- body: `Arial, Helvetica Neue, Helvetica, sans-serif`
- monospace only for genuinely technical/status copy when useful; do not apply it globally to navigation, metadata or labels.

Large headings rely on weight, compression, scale and line breaks rather than decorative typefaces.

## 4. Anti-AI / anti-template rules

Remove the visual patterns most associated with generated portfolio UIs:

- decorative counters and zero-padded numbers;
- repeated eyebrow labels before every section;
- repeated pill/badge/status components;
- a bordered rectangle around every piece of information;
- monospace used everywhere to simulate editorial credibility;
- giant metric + tiny label compositions;
- arbitrary sticker-like accents;
- repeated equal-card layouts;
- gratuitous hover transforms on every surface;
- gradients, glass, glows and rounded SaaS cards;
- generic marketing copy.

Every structural device must encode information or improve navigation.

## 5. Signature

The signature element is the **project-preview rhythm**.

Real previews should cross the 12-column grid at visibly different widths. Information sits beside or directly below the preview without turning the project into a conventional card. The composition should alternate dense and open zones.

The design spends its visual risk here; header, navigation and supporting copy remain disciplined.

## 6. Header

Desktop:

- sticky, flat paper background;
- brand `Sites vitrines` only, with no project/category count beside it;
- category navigation: `Tous`, `Garage`, `Restaurant`, `Coiffure`, `Tattoo`;
- one strong bottom rule;
- no pseudo-dashboard metadata.

Mobile:

- brand + `Menu`;
- native accessible disclosure (`details/summary` acceptable);
- full-height navigation panel;
- no numbered menu entries.

## 7. Homepage hero

The hero is short and declarative.

Primary copy:

`Sites vitrines.`

Supporting copy:

`Garage, restaurant, coiffure, tattoo.`

Optional explanatory line:

`Des démos navigables, chacune avec sa propre direction visuelle.`

No large availability counter. No `16 projets. 4 catégories.` as the main visual idea. The catalogue should begin quickly after the hero.

## 8. Catalogue

Keep the deterministic asymmetric 12-column layout but change the presentation from cards to project plates.

For available projects:

- real image dominates;
- no permanent CTA badge drawn over the image;
- project name is large and immediately adjacent to the image;
- category + visual direction appear as one compact factual line;
- summary is short and concrete;
- `Ouvrir la démo ↗` is a text action, not a badge;
- whole project remains one accessible link opening in a new tab.

For planned projects:

- use a flat typographic field rather than a fake preview;
- show name, direction and `En préparation` plainly;
- no `#XX` identifier;
- no fake image skeleton.

Grid rhythm remains intentionally varied (`8/4`, `6/6`, `4/8`-style relationships) but should not look like a repeating mathematical showcase. Use whitespace and image scale to make the rhythm feel editorial.

## 9. Category directory

Remove numeric indices and counts.

Each category is a large text row:

- `Garage`
- `Restaurant`
- `Coiffure`
- `Tattoo`

Rows use typography, whitespace and a simple arrow only. No `01`, `02`, `04 projets` decorations.

## 10. Category pages

Category hero:

- category name as the dominant h1;
- one concrete description;
- no `04 projets`, no `04 / 16`, no oversized count;
- navigation directly before the project list.

Category project presentation uses the same project-plate system as home.

## 11. Footer

Simple and utilitarian:

- `Sites vitrines / Portfolio 2026`;
- category links;
- GitHub link;
- copyright.

No promotional CTA.

## 12. Copy corrections — Garage

The garage category and four planned garage summaries must describe service businesses.

Expected semantic territories:

- Atelier Noir: premium repair, maintenance and diagnostics;
- Torque Works: mechanical workshop, heavy maintenance and technical diagnostics;
- Apex Motorsport: performance maintenance, setup, diagnostics and track-oriented service;
- Studio Motor: modern maintenance, breakdown assistance and workshop service.

Avoid language implying car design, manufacturing, coachbuilding or vehicle creation.

## 13. Interaction

- no scroll-jacking;
- no animation required;
- image hover may use one restrained crop/contrast change only if it materially improves affordance;
- all interactive elements keep visible focus;
- minimum touch target 44px on mobile;
- honor `prefers-reduced-motion`.

## 14. Responsive behavior

### 1440px

- strong asymmetry;
- real previews are large enough to judge the actual template design;
- first available project appears without excessive hero whitespace;
- no equal-emphasis layout.

### 768px

- preserve a two-column editorial rhythm where safe;
- do not force narrow copy columns;
- mobile navigation may take over when desktop links become cramped.

### 375px

- one clear reading column;
- large headings remain within viewport;
- previews preserve useful crops;
- no horizontal overflow;
- no tiny labels replacing meaningful text.

## 15. Verification

The implementation is accepted only when:

1. lint passes;
2. production build passes;
3. smoke tests confirm 16 home projects and 4 per category;
4. Kuro and Maison Silex routes still pass their existing checks;
5. exactly two demos remain available until another template is intentionally published;
6. both available demos still open in a new tab;
7. homepage/category HTML contains no commercial creation-site wording;
8. portfolio markup contains no decorative project numbers/counters from the previous design;
9. garage copy explicitly reflects repair/maintenance/diagnostics/breakdown services;
10. browser QA is inspected at 1440, 768 and 375 widths on home and Restaurant category;
11. Designly final QA checks hierarchy, accidental tangencies, dead space, mobile readability and AI-slop vetoes against the actual screenshots.
