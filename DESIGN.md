# Portfolio Design Context

## Scope
This file governs only the public portfolio shell (`app/(portfolio)/**` and `src/portfolio/**`). Demo sites under `src/templates/**` and `app/sites/**` own their own independent visual systems and must not inherit this design.

## Direction
Technical Minimalist editorial portfolio. The experience should feel authored and structural rather than like a generic card library: large real project imagery, quiet technical metadata, a subtle paper-grid texture, compact navigation and strong but restrained typography.

## Tokens
- Paper `#F7F7F5`
- Forest `#1A3C2B` — primary brand signal
- Grid `#3A3A38` — dividers at low opacity
- Coral `#FF8C69`
- Mint `#9EFFBF`
- Gold `#F4D35E`

Coral, Mint and Gold are secondary signals only. Do not let accent colors compete with project imagery.

## Typography
- Display: Space Grotesk, tight tracking and 0.9-ish leading for major titles.
- Utility: JetBrains Mono, 10–12px, uppercase or short technical labels only.
- Body: neutral General Sans-like system stack (`Arial`, `Helvetica Neue`, sans-serif) until an owned General Sans asset exists.

## Geometry
- 1px hairline dividers.
- 0–2px radius only.
- No box shadows.
- No gradients.
- No fake browser frames, stickers, decorative numeric indices or availability counters.
- Technical mosaic background is subtle and low contrast.

## Project presentation
Homepage shows a curated four-project selection, not all 16 projects. Category pages show all four projects for that category. Available demos use real captured previews; planned projects use honest typographic direction fields and never fake screenshots.

## Interaction
Available demos open in a new tab so the portfolio remains open. Real preview images use luminosity treatment by default and shift to full color on hover/focus. Motion is short (120–180ms) and disabled/reduced under `prefers-reduced-motion`.

## Copy
Copy is factual, short and tied to visible design or real service scope. Never use generic agency phrases. Garage means repair, maintenance, diagnostics and breakdown assistance; never vehicle creation or manufacturing.

## Anti-AI veto
Reject changes that reintroduce repeated identical cards, oversized footer menus, decorative counters, excessive monospace, blue accent, offset brutalist shadows, fake UI/code mockups unrelated to the portfolio, or hero metrics used as decoration.
