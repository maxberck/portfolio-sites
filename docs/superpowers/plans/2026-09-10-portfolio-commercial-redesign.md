# Portfolio Commercial Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio shell into a commercial, project-first directory with category navigation and real static homepage previews, while leaving Kuro untouched.

**Architecture:** Keep all existing public URLs and the 16-site registry, but replace the portfolio presentation layer with a compact commercial shell and a deterministic variable project grid. Extend `PortfolioSite` with a structured preview contract; available demos render a real static screenshot through `next/image`, planned demos render an honest neutral placeholder. Use a reusable GitHub Actions preview-capture workflow to render an available demo with Playwright, upload the WebP as an artifact, then commit that exact artifact to `public/previews/` through the GitHub integration.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, CSS, `next/image`, GitHub Actions, Playwright CLI only in the capture workflow.

**Spec:** `docs/superpowers/specs/2026-09-10-portfolio-commercial-redesign-design.md`

## Global Constraints

- Kuro (`src/templates/restaurant-04/**` and `app/sites/restaurant-04/**`) must not be visually or structurally modified.
- Preserve `/`, `/categories/garage`, `/categories/restaurant`, `/categories/coiffure`, `/categories/tatoueur`, and all existing demo URLs.
- Preserve exactly 16 portfolio entries and exactly 4 entries per category.
- Portfolio typography is sans-serif plus monospace metadata; no serif is required in the portfolio shell.
- Portfolio background is cold white/light gray, not cream/beige.
- Primary commercial CTA copy is exactly `Créer mon site`.
- Homepage primary message is exactly `Des sites qui ressemblent à de vraies marques.`
- Category tabs navigate to existing category routes; do not add client-side catalogue filtering.
- `available` demos require a real static homepage preview; `planned` demos must never receive a fake screenshot.
- Store committed previews under `public/previews/<site-id>-home.webp`.
- No iframe, runtime screenshot, carousel dependency, backend, auth, payment, CMS, dashboard, or database.
- Preview images use `next/image`; offscreen previews remain lazy by default.
- Portfolio/category routes stay indexable; fictional demo routes remain `noindex, follow`.
- Mobile uses one main column, accessible navigation, visible focus, and no horizontal overflow.
- The design-differentiation 5/7 gate remains a manual review gate for future demo publication.

---

### Task 1: Add RED verification for the new portfolio contract

**Files:**
- Modify: `.github/workflows/verify.yml`

**Interfaces:**
- Consumes: existing build and HTTP smoke-test workflow.
- Produces: CI assertions for the new commercial copy, navigation, preview markup, and no-iframe invariant.

- [ ] **Step 1: Add the redesign branch to push verification**

Add `feat/portfolio-commercial-redesign` under `on.push.branches` so every implementation commit is verified.

- [ ] **Step 2: Add failing smoke assertions before changing product code**

After the existing homepage/category requests, add assertions equivalent to:

```bash
grep -q 'Des sites qui ressemblent à de vraies marques.' /tmp/home.html
grep -q 'Créer mon site' /tmp/home.html
grep -q 'href="/categories/garage"' /tmp/home.html
grep -q 'href="/categories/restaurant"' /tmp/home.html
grep -q 'href="/categories/coiffure"' /tmp/home.html
grep -q 'href="/categories/tatoueur"' /tmp/home.html
grep -q 'data-preview="real"' /tmp/home.html
! grep -qi '<iframe' /tmp/home.html
```

Keep existing card-count, category-count, Kuro route, robots and sitemap assertions.

- [ ] **Step 3: Run CI and prove RED**

Expected state:
- `npm ci`: PASS
- `npm run lint`: PASS
- `npm run build`: PASS
- smoke: FAIL on the first new commercial-copy or preview assertion.

Do not change portfolio implementation until this failure is confirmed.

- [ ] **Step 4: Commit**

```bash
git add .github/workflows/verify.yml
git commit -m "test: require commercial portfolio redesign"
```

---

### Task 2: Introduce the structured preview contract

**Files:**
- Modify: `src/portfolio/types.ts`
- Modify: `src/portfolio/data/sites.ts`

**Interfaces:**
- Produces:

```ts
export type PortfolioPreview = {
  src: string;
  alt: string;
  width: number;
  height: number;
  focalPosition?: string;
};
```

and `PortfolioSite.preview?: PortfolioPreview`.

- [ ] **Step 1: Replace the string preview type**

Change:

```ts
preview?: string;
```

to:

```ts
preview?: PortfolioPreview;
```

with `PortfolioPreview` exported above `PortfolioSite`.

- [ ] **Step 2: Register Kuro's real preview contract**

For the existing `restaurant-04` entry, add:

```ts
preview: {
  src: "/previews/restaurant-04-home.webp",
  alt: "Aperçu de la page d'accueil du restaurant japonais Kuro",
  width: 1440,
  height: 1000,
  focalPosition: "center top",
},
```

Do not add previews to planned entries.

- [ ] **Step 3: Add a data invariant helper**

Create in `src/portfolio/lib/catalog.ts` or extend the existing module with:

```ts
export function hasPublishablePreview(site: PortfolioSite) {
  return site.status !== "available" || Boolean(site.preview);
}
```

Use this helper only for verification/guarding, not to silently invent previews.

- [ ] **Step 4: Commit**

```bash
git add src/portfolio/types.ts src/portfolio/data/sites.ts src/portfolio/lib/catalog.ts
git commit -m "feat: add structured portfolio previews"
```

---

### Task 3: Rebuild the portfolio header, hero, category navigation and sales flow

**Files:**
- Modify: `src/portfolio/components/PortfolioHeader.tsx`
- Modify: `src/portfolio/components/PortfolioFooter.tsx`
- Modify: `src/portfolio/components/CategoryNavigation.tsx`
- Modify: `app/(portfolio)/page.tsx`

**Interfaces:**
- Consumes: `siteCategories`, existing category routes, existing catalogue anchor.
- Produces: compact commercial shell and route-based category navigation.

- [ ] **Step 1: Replace the header information architecture**

Desktop structure must contain:

```text
Sites vitrines | Tous | Garage | Restaurant | Coiffure | Tattoo | Créer mon site
```

`Tous` links to `/`, category items link to `/categories/<category>`, and `Créer mon site` links to `/#contact`.

Keep the component server-rendered unless a mobile interaction becomes necessary. If a mobile disclosure is needed, isolate it into one small client component rather than converting the whole shell to client rendering.

- [ ] **Step 2: Replace the oversized editorial hero**

The homepage hero must include:

```tsx
<h1>Des sites qui ressemblent à de vraies marques.</h1>
<p>Choisissez une direction, explorez la démo, adaptez-la à votre activité.</p>
```

Add a visible live-demo count derived from:

```ts
portfolioSites.filter((site) => site.status === "available").length
```

Add primary CTA to `#catalogue` and secondary CTA to `#contact`.

- [ ] **Step 3: Move projects above long explanatory content**

Order homepage sections as:

1. compact hero;
2. catalogue/category navigation;
3. concise category discovery;
4. simple three-step adaptation explanation;
5. dark commercial CTA with `id="contact"`.

Do not restore a viewport-height text-only hero.

- [ ] **Step 4: Rewrite category navigation as route navigation**

Keep `CategoryNavigation` as real links only. It must expose all five choices (`Tous` plus four categories) and use `aria-current` on category pages.

- [ ] **Step 5: Rewrite footer copy as commercial utility**

Keep it brief: service label, category shortcuts, and a contact anchor. Do not add vague agency language.

- [ ] **Step 6: Commit**

```bash
git add src/portfolio/components/PortfolioHeader.tsx src/portfolio/components/PortfolioFooter.tsx src/portfolio/components/CategoryNavigation.tsx 'app/(portfolio)/page.tsx'
git commit -m "feat: rebuild commercial portfolio shell"
```

---

### Task 4: Make real previews dominant and vary catalogue composition

**Files:**
- Modify: `src/portfolio/components/SiteCard.tsx`
- Modify: `src/portfolio/components/CatalogueGrid.tsx`
- Modify: `src/portfolio/components/CategoryPage.tsx`
- Modify: `src/portfolio/styles/portfolio.css`

**Interfaces:**
- Consumes: `PortfolioSite.preview`, `PortfolioSite.status`.
- Produces: real-preview card state, honest planned state, deterministic size variation, commercial category pages.

- [ ] **Step 1: Render real preview images only for available sites**

In `SiteCard`, use `next/image` when both `status === "available"` and `preview` exist:

```tsx
<div className="site-card__preview site-card__preview--real" data-preview="real">
  <Image
    src={site.preview.src}
    alt={site.preview.alt}
    width={site.preview.width}
    height={site.preview.height}
    sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 66vw"
    style={{ objectPosition: site.preview.focalPosition ?? "center top" }}
  />
</div>
```

Do not set `priority` globally. The first available homepage card may use `preload` only if the final hierarchy places it above the fold.

- [ ] **Step 2: Keep planned previews visibly synthetic**

Planned entries render a neutral block with category, number, direction and `En préparation`. Do not render `Image` and do not set `data-preview="real"`.

- [ ] **Step 3: Add deterministic layout variants**

In `CatalogueGrid`, derive a presentation class from index/status, for example:

```ts
const size = site.status === "available" && index % 3 === 0 ? "feature" : index % 4 === 1 ? "compact" : "standard";
```

Pass the resulting variant to `SiteCard` or wrap each list item with `catalogue-grid__item--${size}`. No randomization and no JS measurement.

- [ ] **Step 4: Redesign category pages for selling**

Each category page must show:
- compact category intro;
- `4 directions pour votre <métier>` style heading;
- its four site entries quickly;
- final block: `Vous aimez une direction ? Elle peut être adaptée à votre activité.`;
- CTA `Créer mon site` linking to `/#contact`.

Do not duplicate the homepage hero.

- [ ] **Step 5: Replace portfolio CSS visual language**

Rewrite `portfolio.css` around these fixed decisions:

```css
.portfolio-shell {
  --portfolio-bg: #f7f7f5;
  --portfolio-surface: #ffffff;
  --portfolio-text: #0b0b0b;
  --portfolio-muted: #6f6f6b;
  --portfolio-line: #d9d9d4;
  --portfolio-accent: #2457ff;
  --portfolio-dark: #0b0b0b;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
```

Metadata may use `ui-monospace, SFMono-Regular, Menlo, monospace`.

Required composition:
- sticky compact header;
- hero significantly shorter than current version;
- project image as card focal anchor;
- no serif declarations in portfolio CSS;
- no beige category backgrounds;
- no rounded-card system;
- one-column mobile catalogue;
- variable desktop spans for `feature`, `standard`, `compact`;
- visible `:focus-visible`;
- `prefers-reduced-motion` support.

- [ ] **Step 6: Run CI before adding the binary preview**

Expected: lint/build should pass; smoke may still fail because `/previews/restaurant-04-home.webp` is not committed or because the preview-asset existence assertion has not yet been satisfied.

- [ ] **Step 7: Commit**

```bash
git add src/portfolio/components/SiteCard.tsx src/portfolio/components/CatalogueGrid.tsx src/portfolio/components/CategoryPage.tsx src/portfolio/styles/portfolio.css
git commit -m "feat: make project previews the portfolio focus"
```

---

### Task 5: Capture a real Kuro homepage preview

**Files:**
- Create: `.github/workflows/capture-preview.yml`
- Create: `preview-target.json`
- Generated/commit after workflow artifact retrieval: `public/previews/restaurant-04-home.webp`

**Interfaces:**
- Consumes: a route served by the production Next build.
- Produces: a browser-rendered 1440×1000 WebP preview artifact matching `PortfolioSite.preview.src`.

- [ ] **Step 1: Add a reusable capture request file**

Create:

```json
{
  "siteId": "restaurant-04",
  "route": "/sites/restaurant-04",
  "width": 1440,
  "height": 1000
}
```

Future sequential demo work updates this file to request that demo's capture.

- [ ] **Step 2: Add the preview capture workflow**

Trigger on push to feature branches when either `.github/workflows/capture-preview.yml` or `preview-target.json` changes, plus `workflow_dispatch` for human use.

The workflow must:

```yaml
permissions:
  contents: read
```

Then:
1. checkout;
2. setup Node 22;
3. `npm ci`;
4. `npm run build`;
5. install Chromium transiently with `npx --yes playwright@1.55.0 install --with-deps chromium`;
6. start `npm run start -- -p 3000`;
7. wait until the requested route answers;
8. run Playwright screenshot at 1440×1000 with a short image-loading wait;
9. convert the PNG to WebP with the runner's `cwebp` package (`sudo apt-get install -y webp`, then `cwebp -quiet -q 82`);
10. upload only the WebP through `actions/upload-artifact@v4` using artifact name `preview-restaurant-04`.

Do not grant write permission and do not let CI push commits.

- [ ] **Step 3: Verify capture workflow succeeds**

Confirm the workflow finishes successfully and exposes exactly one preview artifact.

- [ ] **Step 4: Retrieve and inspect the artifact**

Download the workflow artifact through the GitHub connector, materialize/unzip it in the working runtime, and inspect the image dimensions and rendered result. Required dimensions: 1440×1000.

If the screenshot shows missing images, broken layout, cookie overlays, or an unloaded state, fix the capture wait/route and recapture; never substitute a generated mock.

- [ ] **Step 5: Commit the exact browser-rendered WebP**

Create the binary Git blob from the retrieved WebP bytes and add it at:

```text
public/previews/restaurant-04-home.webp
```

Commit message:

```text
feat: add real Kuro portfolio preview
```

- [ ] **Step 6: Commit capture tooling separately**

```bash
git add .github/workflows/capture-preview.yml preview-target.json
git commit -m "chore: add reusable demo preview capture"
```

---

### Task 6: Tighten final verification and close the redesign branch

**Files:**
- Modify: `.github/workflows/verify.yml`

**Interfaces:**
- Consumes: completed commercial portfolio, structured preview data, committed Kuro WebP.
- Produces: final reproducible CI gate.

- [ ] **Step 1: Add final preview asset assertions**

Add before success:

```bash
test -s public/previews/restaurant-04-home.webp
grep -q 'data-preview="real"' /tmp/home.html
grep -q '/previews/restaurant-04-home.webp' /tmp/home.html
! grep -qi '<iframe' /tmp/home.html
```

Keep `available_count` at exactly `1` on this branch because Maison Silex remains outside `main` and this redesign branch.

- [ ] **Step 2: Verify Kuro was not modified**

Compare the feature branch against its `main` base. There must be no changed files under:

```text
src/templates/restaurant-04/
app/sites/restaurant-04/
```

The only Kuro-related addition is the portfolio preview asset under `public/previews/` and its registry metadata.

- [ ] **Step 3: Run the full final gate**

Fresh verification must show:
- `npm ci`: PASS
- `npm run lint`: PASS
- `npm run build`: PASS
- HTTP smoke tests: PASS
- homepage cards: 16
- each category cards: 4
- Kuro routes: reachable
- available demos: 1
- real preview markup: present
- preview asset: non-empty
- no iframe: true

- [ ] **Step 4: Review requirements against the spec**

Check:
- compact commercial hero;
- categories visible in header/navigation;
- project previews appear before long explanatory content;
- planned projects are honest placeholders;
- cold white/sans/mono portfolio identity;
- dark final sales CTA;
- category pages sell adaptation rather than merely index entries;
- responsive CSS has no forced horizontal width;
- no new runtime dependency was added for screenshot generation.

- [ ] **Step 5: Commit final CI**

```bash
git add .github/workflows/verify.yml
git commit -m "test: verify commercial portfolio previews"
```

- [ ] **Step 6: Use verification-before-completion and finishing-a-development-branch**

Only after the fresh final run is green, proceed to branch integration options. Do not merge automatically.
