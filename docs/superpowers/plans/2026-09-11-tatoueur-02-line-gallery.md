# Tatoueur 02 — Line Gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish `tatoueur-02` Line Gallery as a five-route fine-line tattoo studio demo with a white-cube catalogue architecture, route-specific SEO, responsive full-screen mobile navigation, browser-level image/layout regression tests, and a real portfolio preview.

**Architecture:** Follow the repository convention of thin Next.js App Router files under `app/sites/tatoueur-02/**` and a template-owned implementation under `src/templates/tatoueur-02/**`. Keep business content centralized in typed data, keep primary route content server-rendered, and isolate mobile-menu state in one small client navigation component. Line Gallery must not import or reuse Black Ritual UI components or CSS.

**Tech Stack:** Next.js 16.3.4 App Router, React 19.2.8, TypeScript 5, Tailwind/CSS, `next/font/google`, `next/image`, Node.js smoke scripts, Playwright Chromium in CI, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-09-11-tatoueur-02-line-gallery-design.md`

## Global Constraints

- Brand: `Line Gallery`.
- Direction: `Minimaliste / galerie` using the approved `White Cube Catalogue` visual metaphor.
- Routes: `/sites/tatoueur-02`, `/work`, `/artists`, `/studio`, `/visit`.
- Stack remains Next.js + React + TypeScript; no WordPress, Vue, PHP, standalone static site, external site builder, backend, CMS, auth, payments, booking system, ecommerce, map iframe, or elaborate animation library.
- Desktop navigation is a thin top line; no persistent left rail and no floating rounded navbar.
- Mobile navigation is a compact top bar opening a full-screen text menu; no bottom navigation.
- Home sequence is `quiet opening → single work plate → curator note → diptych → artist notation → single work plate → studio note → visit panel`.
- Work route is a sequential catalogue, not masonry and not an equal-card grid.
- Artist route uses dossier compositions with stable variants, not repeated cards.
- Visit uses a side-panel information composition on desktop and stacked practical information on mobile.
- Palette stays gallery white / graphite / neutral grey with one muted archival accent. No black poster field, signal red, gradients, glassmorphism, large shadows, or SaaS cards.
- Important display typography must have computed line-height/font-size ratio >= `0.86` in browser regression checks.
- All client-replaceable copy, images, hours, contacts, artists, works and SEO descriptions are centralized in typed data under `src/templates/tatoueur-02/data/`.
- Every route exports unique Next.js `Metadata`, uses one meaningful `h1`, semantic landmarks and server-rendered primary content.
- Demo convention: `robots: { index: false, follow: true }`.
- External images are release-blocking: every rendered image must load with `naturalWidth > 0` on desktop and mobile browser checks.
- Browser checks cover `1440×1000` and `390×844`, all five routes, broken images, horizontal overflow, key text overlap, compressed display headings, and intended navigation visibility.
- Portfolio registry entry `tatoueur-02` changes to `available` only after the implementation is green and a real preview exists.
- `tatoueur-01`, `tatoueur-03` and `tatoueur-04` product files remain untouched.
- The repo `AGENTS.md` requires local Next.js docs under `node_modules/next/dist/docs/` before code changes. This connector-only execution cannot inspect uncommitted `node_modules`; therefore implementation must stay within already-proven App Router/Metadata/Image patterns present in this repo and be validated by the repository's actual Next.js build and TypeScript checks before merge.
- NaCl verification is not claimed unless project-local NaCl/MCP becomes configured.

---

### Task 1: Define the failing Line Gallery route and browser contracts

**Files:**
- Create: `scripts/smoke-tatoueur02.mjs`
- Create: `scripts/check-tatoueur02-ui.mjs`
- Create: `.github/workflows/tatoueur02-verify.yml`

**Interfaces:**
- Consumes: production Next.js server and `/categories/tatoueur`.
- Produces: release-blocking route/SEO/publication and browser visual contracts used by all later tasks.

- [ ] **Step 1: Write route/SEO smoke test before product code**

Create `scripts/smoke-tatoueur02.mjs`:

```js
const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";

const pages = [
  ["/sites/tatoueur-02", "LINE GALLERY"],
  ["/sites/tatoueur-02/work", "WORK CATALOGUE"],
  ["/sites/tatoueur-02/artists", "ARTISTS"],
  ["/sites/tatoueur-02/studio", "STUDIO"],
  ["/sites/tatoueur-02/visit", "VISIT"],
];

for (const [path, marker] of pages) {
  const response = await fetch(`${base}${path}`);
  if (!response.ok) throw new Error(`${path}: expected 200, received ${response.status}`);
  const html = await response.text();
  if (!html.includes(marker)) throw new Error(`${path}: missing marker ${marker}`);
  if (!html.includes('name="robots" content="noindex, follow"')) throw new Error(`${path}: missing noindex, follow`);
  if (!/<title>[^<]+<\/title>/i.test(html)) throw new Error(`${path}: missing title`);
  if (!/<meta name="description" content="[^"]+"/i.test(html)) throw new Error(`${path}: missing meta description`);
  if (/<iframe\b/i.test(html)) throw new Error(`${path}: iframe forbidden`);
  if (/<form\b/i.test(html)) throw new Error(`${path}: form forbidden`);
}

const home = await (await fetch(`${base}/sites/tatoueur-02`)).text();
for (const href of [
  "/sites/tatoueur-02/work",
  "/sites/tatoueur-02/artists",
  "/sites/tatoueur-02/studio",
  "/sites/tatoueur-02/visit",
]) {
  if (!home.includes(`href="${href}"`)) throw new Error(`home missing ${href}`);
}

for (const marker of ["LINE GALLERY", "BRUSSELS", "FINE LINE", "PRIVATE STUDIO"]) {
  if (!home.includes(marker)) throw new Error(`home missing ${marker}`);
}

const category = await (await fetch(`${base}/categories/tatoueur`)).text();
if (!category.includes('data-site-card="tatoueur-02"')) throw new Error("tatoueur category missing Line Gallery card");

const requireAvailable = process.env.TATOUEUR02_REQUIRE_AVAILABLE === "1";
if (requireAvailable) {
  if (!category.includes("tatoueur-02-home.webp")) throw new Error("Line Gallery preview missing from category");
  const fs = await import("node:fs");
  if (!fs.existsSync("public/previews/tatoueur-02-home.webp")) throw new Error("Line Gallery preview file missing");
}

console.log("Line Gallery smoke contract passed.");
```

- [ ] **Step 2: Write browser regression test before UI code**

Create `scripts/check-tatoueur02-ui.mjs` using Playwright. It must:

```js
const routes = [
  "/sites/tatoueur-02",
  "/sites/tatoueur-02/work",
  "/sites/tatoueur-02/artists",
  "/sites/tatoueur-02/studio",
  "/sites/tatoueur-02/visit",
];

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
];
```

For each route/viewport:
- scroll end-to-end to trigger lazy images;
- fail for every `img.complete && img.naturalWidth === 0`;
- fail if document width exceeds viewport by more than 1px;
- inspect selectors `.line-opening__title`, `.line-page-intro h1`, `.line-plate h2`, `.line-artist-dossier h2`, `.line-studio-statement h2`, `.line-visit-panel h2` and fail when computed line-height/font-size is below `0.86`;
- test overlap pairs between page headings and their lead/copy areas;
- on desktop assert `.line-desktop-nav` is visible and `.line-mobile-nav` is hidden;
- on mobile assert `.line-mobile-nav` is visible and `.line-desktop-nav` is hidden.

Expected success output:

```text
Line Gallery UI regression check passed.
```

- [ ] **Step 3: Add dedicated CI workflow**

Create `.github/workflows/tatoueur02-verify.yml` with branch `feat/tatoueur-02-line-gallery` and PR-to-main triggers. Steps:

```text
checkout → Node 22 → npm ci → npm run lint → npm run build → smoke → install Playwright Chromium → browser regression
```

Smoke runs with `TATOUEUR02_REQUIRE_AVAILABLE=1`, so it remains red until publication is genuinely complete.

- [ ] **Step 4: Verify RED**

On the feature branch, GitHub Actions must fail because `/sites/tatoueur-02` does not exist yet. The expected failure is route absence, not JavaScript/YAML syntax.

- [ ] **Step 5: Commit**

```text
test: define Line Gallery release contracts
```

---

### Task 2: Build typed content, navigation shell, theme and App Router entry points

**Files:**
- Create: `src/templates/tatoueur-02/types.ts`
- Create: `src/templates/tatoueur-02/data/site.ts`
- Create: `src/templates/tatoueur-02/lib/theme.ts`
- Create: `src/templates/tatoueur-02/components/LineGalleryImage.tsx`
- Create: `src/templates/tatoueur-02/components/LineGalleryNav.tsx`
- Create: `src/templates/tatoueur-02/components/LineGalleryShell.tsx`
- Create: `app/sites/tatoueur-02/layout.tsx`
- Create: `app/sites/tatoueur-02/page.tsx`
- Create: `app/sites/tatoueur-02/work/page.tsx`
- Create: `app/sites/tatoueur-02/artists/page.tsx`
- Create: `app/sites/tatoueur-02/studio/page.tsx`
- Create: `app/sites/tatoueur-02/visit/page.tsx`

**Interfaces:**
- Produces: typed `lineGallerySite`, `galleryWorks`, `galleryArtists`, theme CSS variables, `LineGalleryImage`, route navigation and shell.

- [ ] **Step 1: Define focused template types**

`types.ts` exports:

```ts
export type GalleryNavItem = { label: string; href: string };
export type GalleryImage = { src: string; alt: string; width: number; height: number };
export type GalleryWork = {
  id: string;
  number: string;
  title: string;
  style: "Fine Line" | "Botanical" | "Micro" | "Ornamental";
  artist: string;
  caption: string;
  image: GalleryImage;
  detailImage?: GalleryImage;
};
export type GalleryArtist = {
  slug: string;
  name: string;
  specialty: string;
  bio: string;
  portrait: GalleryImage;
  workId: string;
};
export type GalleryHoursRow = { days: string; hours: string };
```

- [ ] **Step 2: Centralize all replaceable content**

`data/site.ts` contains:

```ts
business: {
  name: "Line Gallery",
  descriptor: "Fine Line Tattoo Studio",
  city: "Brussels",
},
navigation: [
  { label: "Index", href: "/sites/tatoueur-02" },
  { label: "Work", href: "/sites/tatoueur-02/work" },
  { label: "Artists", href: "/sites/tatoueur-02/artists" },
  { label: "Studio", href: "/sites/tatoueur-02/studio" },
  { label: "Visit", href: "/sites/tatoueur-02/visit" },
],
contact: {
  address: "Rue du Trait 24 · 1000 Bruxelles · adresse fictive",
  phone: "+32 2 000 02 24",
  email: "studio@linegallery.example",
  note: "Coordonnées créées uniquement pour cette démonstration portfolio.",
},
```

Add at least six works, three artists, hours, curator note, studio method/process, visit/access copy and route-specific SEO descriptions. Use verified `images.unsplash.com` sources; browser regression is the final validity check.

- [ ] **Step 3: Define template theme variables**

`lib/theme.ts`:

```ts
import type { CSSProperties } from "react";

export const lineGalleryThemeStyle = {
  "--line-paper": "#F4F1EA",
  "--line-ink": "#242522",
  "--line-muted": "#74766F",
  "--line-rule": "#CBC8BE",
  "--line-accent": "#8B9487",
} as CSSProperties;
```

- [ ] **Step 4: Build independent image/nav/shell primitives**

`LineGalleryImage` wraps `next/image` with explicit dimensions and `sizes`.

`LineGalleryNav` is the only required client component. Use `usePathname()` for active route state plus `useState()` for the mobile menu. Desktop renders `.line-desktop-nav`; mobile renders `.line-mobile-nav`. The full-screen menu uses real links, a real button, `aria-expanded`, `aria-controls`, and closes after route selection.

`LineGalleryShell` renders navigation, main page slot and one minimal copyright/demo line. It must not import any `tatoueur-01` component.

- [ ] **Step 5: Create layout metadata and font contract**

`app/sites/tatoueur-02/layout.tsx` imports one refined serif and one neutral sans from `next/font/google`, imports Line Gallery CSS, applies theme variables, and exports:

```ts
export const metadata: Metadata = {
  title: {
    default: "Line Gallery — Fine Line Tattoo Studio",
    template: "%s — Line Gallery",
  },
  description: lineGallerySite.seo.home.description,
  robots: { index: false, follow: true },
};
```

Do not define fake `metadataBase` or JSON-LD for a real business.

- [ ] **Step 6: Add thin route files with unique metadata**

Each route file imports its template page and `lineGallerySite.seo.<route>.description`. Titles:

```text
Home: Line Gallery — Fine Line Tattoo Studio
Work: Work Catalogue
Artists: Artists
Studio: Studio
Visit: Visit
```

- [ ] **Step 7: Commit**

```text
feat: add Line Gallery typed site shell
```

---

### Task 3: Implement the white-cube home and four distinct secondary pages

**Files:**
- Create: `src/templates/tatoueur-02/components/WorkPlate.tsx`
- Create: `src/templates/tatoueur-02/components/ArtistNotation.tsx`
- Create: `src/templates/tatoueur-02/components/VisitPanel.tsx`
- Create: `src/templates/tatoueur-02/pages/HomePage.tsx`
- Create: `src/templates/tatoueur-02/pages/WorkPage.tsx`
- Create: `src/templates/tatoueur-02/pages/ArtistsPage.tsx`
- Create: `src/templates/tatoueur-02/pages/StudioPage.tsx`
- Create: `src/templates/tatoueur-02/pages/VisitPage.tsx`
- Create: `src/templates/tatoueur-02/styles/line-gallery.css`

**Interfaces:**
- Consumes: typed template data, image primitive, navigation shell and theme.
- Produces: all five finished visual page architectures.

- [ ] **Step 1: Build home in the exact approved sequence**

DOM order:

```text
quiet opening → work plate → curator note → diptych → artist notation → work plate → studio note → visit panel
```

The opening includes literal markers `LINE GALLERY`, `BRUSSELS`, `FINE LINE`, `PRIVATE STUDIO`, one offset image, a one-sentence statement and a discreet link to `/work`.

- [ ] **Step 2: Implement `WorkPlate` variants**

Component signature:

```ts
type WorkPlateProps = {
  work: GalleryWork;
  variant: "plate-left" | "plate-center" | "plate-edge";
};
```

Every variant uses the same semantic work data but a genuinely different grid placement. Keep image, caption and metadata separated with deliberate negative space. Do not use rounded card containers.

- [ ] **Step 3: Build curator note, diptych and artist notation**

Curator note is text-only and narrow.

Diptych uses two images with asymmetric width/vertical alignment and one shared caption block.

`ArtistNotation` renders a name, specialty, short bio and small image with no card frame and a link to `/artists`.

- [ ] **Step 4: Build Work route as sequential catalogue**

Use `<h1>WORK CATALOGUE</h1>`, a small style index and six work `<article>` elements. Stable classes by position (`line-catalogue-item--wide`, `--margin`, `--narrow`) vary the page rhythm. Full archive stays in the server-rendered HTML.

- [ ] **Step 5: Build Artists as dossiers**

Use `<h1>ARTISTS</h1>`. Each artist dossier contains name, specialty, concise bio, portrait, representative work and reference notation. Variants `line-artist-dossier--left`, `--split`, `--margin` produce visibly different compositions without reusing identical cards.

- [ ] **Step 6: Build Studio as method/editorial page**

Use `<h1>STUDIO</h1>` followed by philosophy statement, numbered typographic process rows, placement consultation, conservative hygiene wording, preparation notes and two studio/work images. No icon grid.

- [ ] **Step 7: Build Visit as side-panel information page**

Use `<h1>VISIT</h1>`, semantic `<address>`, hours, contact, access note, inquiry instructions and demo disclosure. Desktop grid reserves a strong narrow info side panel plus a large calm field; mobile stacks content. No form/iframe/map.

- [ ] **Step 8: Implement CSS with explicit visual and responsive rules**

`line-gallery.css` must include:
- gallery-white page background and graphite text;
- thin desktop nav with bottom rule;
- desktop nav visible >= tablet breakpoint, mobile nav hidden;
- mobile top nav and full-screen menu below breakpoint;
- opening using wide modular grid and at least 35% active negative space;
- all display headings line-height >= `0.9`;
- `clamp()` typography with safe upper bounds;
- work plate, catalogue, artist dossier, studio and visit grids that are structurally distinct;
- mobile recomposition into calm vertical reading order;
- `overflow-x: clip` only as a final containment guard, not as a substitute for correct sizing;
- visible `:focus-visible` styles;
- `@media (prefers-reduced-motion: reduce)` disabling nonessential transition/animation;
- image containers with stable aspect ratios;
- no gradient, glass, large shadow, black poster field or rounded SaaS card styling.

- [ ] **Step 9: Run browser regression with publication check disabled**

Build/start production and run:

```bash
TATOUEUR02_REQUIRE_AVAILABLE=0 node scripts/smoke-tatoueur02.mjs
node scripts/check-tatoueur02-ui.mjs
```

Expected: five routes, SEO and browser UI tests pass; publication preview requirement remains deferred.

- [ ] **Step 10: Commit**

```text
feat: build Line Gallery white cube catalogue
```

---

### Task 4: Publish Line Gallery and generate the real preview

**Files:**
- Modify: `src/portfolio/data/sites.ts`
- Modify: `preview-target.json`
- Generate: `public/previews/tatoueur-02-home.webp`

**Interfaces:**
- Consumes: green Line Gallery route tree and browser regression.
- Produces: available portfolio card and real WebP preview.

- [ ] **Step 1: Point generic capture workflow at Line Gallery**

Set `preview-target.json`:

```json
{
  "siteId": "tatoueur-02",
  "route": "/sites/tatoueur-02",
  "width": 1440,
  "height": 1000
}
```

- [ ] **Step 2: Update only the existing `tatoueur-02` registry entry**

Use:

```ts
{
  id: "tatoueur-02",
  name: "Line Gallery",
  category: "tatoueur",
  direction: "Minimaliste / galerie",
  summary: "Fine line en galerie blanche — catalogue d’œuvres, grands espaces négatifs, dossiers d’artistes et navigation muséale discrète.",
  href: "/sites/tatoueur-02",
  status: "available",
  preview: {
    src: "/previews/tatoueur-02-home.webp",
    alt: "Aperçu de la page d'accueil blanche et minimaliste du studio fictif Line Gallery",
    width: 1440,
    height: 1000,
    focalPosition: "center top",
  },
}
```

Leave `tatoueur-01` available and `tatoueur-03`, `tatoueur-04` planned.

- [ ] **Step 3: Let existing capture workflow build and render the route**

Require real capture at `1440×1000`, WebP conversion and branch commit. If the workflow creates an artifact but its branch push races with another commit, recover that exact generated artifact rather than substituting a hand-made preview.

- [ ] **Step 4: Re-run final publication smoke**

Run with:

```bash
TATOUEUR02_REQUIRE_AVAILABLE=1 node scripts/smoke-tatoueur02.mjs
```

Expected: category HTML references `tatoueur-02-home.webp`, file exists and all route/SEO checks pass.

- [ ] **Step 5: Commit publication metadata when needed**

```text
feat: publish Line Gallery in portfolio
```

---

### Task 5: Fresh verification, visual QA, PR and merge

**Files:**
- Verify all files changed by Tasks 1–4.

**Interfaces:**
- Consumes: complete feature branch including preview.
- Produces: objective release evidence and merge-ready PR.

- [ ] **Step 1: Require fresh lint**

```bash
npm run lint
```

Expected: exit code 0. Existing unrelated warnings may remain, but no new Line Gallery lint warning/error should be introduced.

- [ ] **Step 2: Require fresh Next.js production build**

```bash
npm run build
```

Expected: exit code 0, TypeScript success, all five `tatoueur-02` routes generated.

- [ ] **Step 3: Require semantic smoke on publication tree**

```bash
TATOUEUR02_REQUIRE_AVAILABLE=1 node scripts/smoke-tatoueur02.mjs
```

Expected: `Line Gallery smoke contract passed.`

- [ ] **Step 4: Require full browser regression**

```bash
node scripts/check-tatoueur02-ui.mjs
```

Expected: `Line Gallery UI regression check passed.` with:
- zero broken images;
- zero tested heading/copy overlaps;
- zero compressed display headings below `0.86`;
- zero horizontal overflow > 1px;
- correct desktop/mobile navigation mode on every route.

- [ ] **Step 5: Designly composition QA**

Reject the build if any of these are true:
- the page resembles Black Ritual in grayscale or silhouette;
- a left rail or bottom mobile nav appears;
- the home becomes a generic centered hero or 50/50 split;
- work becomes an equal card grid;
- negative space is filled with decorative UI merely to avoid emptiness;
- more than one primary visual anchor competes in a major section;
- display typography uses collision as a style device;
- Visit ends in a conventional marketing CTA/footer rather than calm information composition.

- [ ] **Step 6: Open PR only after green checks**

PR title:

```text
feat: add Tatoueur 02 Line Gallery
```

PR body summarizes five routes, white-cube catalogue architecture, copyability, SEO, browser image/layout regression, real preview and CI status. Explicitly state that NaCl verification is not claimed because project-local NaCl/MCP is unconfigured.

- [ ] **Step 7: Merge only after PR-head GitHub Actions are green**

Require `Verify Line Gallery` and `Verify portfolio` success on the exact PR head. Do not merge based on earlier branch runs.
