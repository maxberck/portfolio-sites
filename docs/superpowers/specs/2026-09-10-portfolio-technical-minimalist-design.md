# Portfolio Technical Minimalist Design Spec

## Goal
Redesign only the portfolio shell into a deliberate Technical Minimalist editorial experience while preserving the existing showcase behavior and every demo template design.

## Product behavior that must remain
- Portfolio only: no `Créer mon site`, no quote form, no commercial funnel, no purchase flow.
- Demo sites remain fully navigable and open in a new tab from the portfolio.
- Category pages remain the place where all four projects of a category are visible.
- Demo template code under `src/templates/**` and `app/sites/**` is out of scope.
- Kuro and Maison Silex keep their current visual designs.
- Garage positioning means repair, maintenance, diagnostics and breakdown assistance; never vehicle creation/manufacturing.

## Homepage information architecture
The homepage must stop behaving like a 16-card catalogue.

Order:
1. fixed technical navigation;
2. editorial hero with a cropped real demo preview as the visual thesis;
3. `Sélection` containing exactly four projects: Kuro, Maison Silex, Atelier Noir, District Cut;
4. category directory linking to Garage, Restaurant, Coiffure and Tattoo;
5. compact footer.

Only four project cards/plates are rendered on `/`. Category routes still render four projects each.

## Visual direction
Use the user's Technical Minimalist system as design language, not as a literal component checklist.

### Palette
- Paper: `#F7F7F5`
- Forest: `#1A3C2B`
- Grid: `#3A3A38`
- Coral: `#FF8C69`
- Mint: `#9EFFBF`
- Gold: `#F4D35E`

Forest is the dominant accent. Coral/Mint/Gold are used sparingly as content signals, never as repeated decorative badges.

### Typography
- Display: `Space Grotesk` via `next/font/google`, tight tracking, bold, large scale.
- Utility: `JetBrains Mono` via `next/font/google` for short labels and metadata only.
- Body: `General Sans` intent represented by a neutral modern sans fallback stack (`Arial`, `Helvetica Neue`, sans-serif) because no local General Sans font asset exists in the repository. Do not add a remote CSS dependency solely for that font.

### Surface and depth
- Background Paper.
- No gradients.
- No box shadows.
- Radius 0px or 2px only.
- Dividers are 1px hairlines using Grid at low opacity.
- A subtle repeating SVG mosaic background is allowed on the portfolio shell. It must be low contrast and should read as structural paper/grid texture, not decoration.

## Navigation
- Fixed top header, compact height.
- Left: 32x32 Forest square mark made from CSS geometry plus `Sites vitrines` wordmark.
- Center/right: category links in JetBrains Mono without numeric prefixes.
- No availability counters, no `16 / 4` metadata in the header.
- Desktop nav uses line geometry rather than boxed buttons.
- Mobile uses a real semantic `<details>` menu with large tap targets and a flat Paper/Forest panel.
- No commercial CTA button.

## Hero
The hero is a designed composition, not a metrics block.
- Left: `SITES VITRINES` in Space Grotesk, 64–96px desktop range, tight line-height.
- Supporting copy: short factual sentence about four distinct activity categories.
- Right: one large framed crop of the real Kuro preview using `mix-blend-mode: luminosity` and about 90% opacity; full color on hover/focus where appropriate.
- The visual may include a dashed circular/orbit line as a restrained technical drawing reference.
- No availability number, no oversized counter, no decorative project numbering.

## Homepage selection
Exactly four projects:
- Kuro — available, real preview
- Maison Silex — available, real preview
- Atelier Noir — planned
- District Cut — planned

Use a true bento/editorial composition rather than four identical cards:
- Kuro occupies the large anchor cell.
- Maison Silex occupies a tall secondary cell.
- Atelier Noir and District Cut occupy smaller directional cells.
- 1px gap/grid separators between cells.
- Available project imagery defaults to luminosity treatment and moves to full color on hover/focus.
- Planned projects remain honest typographic direction blocks; never fake screenshots.

Project descriptions remain short and factual. No generic agency language.

## Category pages
- Preserve four projects per category.
- Hero is compact and category-specific.
- Grid may use two columns desktop and one column mobile, with 1px separators and varied media/text balance.
- Do not reuse the homepage bento composition verbatim.
- Category navigation remains visible and concise.

## Category directory
Replace the current oversized footer-like category section with a mid-page technical directory.
- Four links arranged as a 2x2 or 4-column responsive grid.
- Each category gets one restrained color signal: Forest base plus one Coral/Mint/Gold use across the set.
- No numeric prefixes.
- Short factual descriptors only.

## Footer
- Compact; target 64–96px desktop height before wrapping.
- One top hairline.
- Brand left, category links center, GitHub/year right where space allows.
- No giant menu typography.
- Mobile may wrap to two or three rows but should remain visually quiet.

## Motion
- 120–180ms transitions.
- Linear or standard ease-out.
- Image luminosity-to-color and small line/position responses only.
- No scroll-jacking, parallax, floating stickers, cursor effects or decorative motion.
- Respect `prefers-reduced-motion`.

## Accessibility and resilience
- WCAG 2.2 AA target.
- Visible `:focus-visible` states.
- Minimum 44px mobile navigation targets.
- No hover-only information.
- No text clipping at 1440, 768 or 375px.
- Avoid layout shift from font/image loading.

## Anti-AI guardrails
Reject the result if it shows any of the following:
- repeated identical card system across the whole homepage;
- decorative counters or `01/02/03` labels without information value;
- excessive monospace everywhere;
- generic brutalist stickers or offset shadows;
- blue accent from the previous design;
- fake dashboard/code snippets unrelated to the portfolio content;
- oversized footer navigation;
- generic copy such as “expérience digitale immersive”;
- hero metrics instead of a clear visual thesis.

The memorable signature must be the interaction between the subtle technical mosaic and the asymmetric real-project imagery, not a decorative UI gimmick.

## Verification
- Homepage renders exactly 4 `data-site-card` items.
- Each category renders exactly 4 project items.
- Kuro and Silex remain the only available demos until more templates are completed.
- Available demo links use `target="_blank"`.
- No commercial creation wording.
- Garage wording uses repair/maintenance/diagnostics/breakdown semantics.
- Browser QA full-page at 1440x1000, 768x1024 and 375x812 for homepage plus Restaurant category.
- Diff against current `main` contains no demo-template files.
