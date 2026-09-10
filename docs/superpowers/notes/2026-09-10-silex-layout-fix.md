# Maison Silex layout fix verification

- Reproduced full-page on desktop and mobile before the fix.
- Homepage root cause: `.silex-site figure { margin: 0 }` had higher specificity than the intended one-class figure positioning rules, forcing the `Le produit d’abord` portrait to the left.
- Gallery root cause: the center contact-sheet image source no longer rendered.
- Added scoped positioning overrides for the affected figures and replaced the broken image with a working Unsplash source.
- Re-captured the full homepage and gallery on desktop/mobile after the fix: intended overlap/right alignment restored and all gallery images render.
- Final Verify portfolio workflow passed install, lint, production build and smoke tests on the fixed head.
