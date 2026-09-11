# Tatoueur 01 — Black Ritual Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish `tatoueur-01` Black Ritual as a five-route fictional blackwork tattoo studio demo with a left-rail poster architecture, route-specific SEO, responsive mobile recomposition, generated portfolio preview, and dedicated smoke/CI verification.

**Architecture:** Follow the repository convention of thin Next.js App Router files under `app/sites/tatoueur-01/**` and a template-owned implementation under `src/templates/tatoueur-01/**`. Keep the template server-rendered by default, use a single small client navigation component only where pathname state is required, centralize reusable fictional content in typed data, and keep the visual system fully independent from the portfolio shell and all existing templates.

**Tech Stack:** Next.js 16.3.4 App Router, React 19.2.8, TypeScript 5, Tailwind/CSS, `next/font/google`, `next/image`, Node.js smoke scripts, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-09-11-tatoueur-01-black-ritual-design.md`

## Global Constraints

- Brand: `Black Ritual`.
- Category: fictional tattoo studio / blackwork / underground.
- Routes: `/sites/tatoueur-01`, `/work`, `/artists`, `/studio`, `/visit`.
- Production stack remains Next.js + React + TypeScript; no external site builder or runtime dependency on Superdesign/Designly.
- Desktop shell uses a narrow persistent left rail; do not add a conventional top navbar.
- Mobile removes the rail and uses a compact bottom navigation strip; do not stack the desktop rail above content.
- Home sequence is poster opening → oversized numbered selected work → artist interruption → studio statement → address/hours poster.
- No conventional multi-column footer. A minimal legal line is allowed.
- Work archive must use an irregular editorial index, not the same composition as the home work sequence.
- Artist profiles are poster sections, not identical avatar cards.
- Visit has no booking form.
- No backend, CMS, authentication, checkout, booking engine, fake reviews, awards, ratings, certifications, or medical guarantees.
- Use fictional/demo-safe contact details and a clearly fictional Brussels address.
- SEO is required on every route: unique `Metadata` title/description, semantic HTML, crawlable internal links, useful alt text, and no critical copy hidden in images.
- Because these portfolio demos are not real businesses, inherit the repository convention `robots: { index: false, follow: true }` while still implementing complete metadata and semantic SEO structure.
- Core route content remains server-rendered; isolate pathname-dependent navigation state in the smallest client component.
- Respect visible keyboard focus, contrast, reduced motion, touch targets, and logical DOM reading order.
- Existing restaurant, garage, coiffure, and public portfolio product files remain untouched except the tattoo registry entry and shared preview target required for publication.
- Final publication requires `public/previews/tatoueur-01-home.webp` generated from the real `/sites/tatoueur-01` route.
- NaCl remains non-blocking for product code only because project-local NaCl/MCP is not initialized; do not claim NaCl verification.

---

### Task 1: Define the failing Black Ritual smoke contract

**Files:**
- Create: `scripts/smoke-tatoueur01.mjs`
- Create: `.github/workflows/tatoueur01-verify.yml`

**Interfaces:**
- Consumes: production Next.js server and portfolio category HTML.
- Produces: executable route/metadata/semantic/publication contract used by every later task.

- [ ] **Step 1: Write the smoke script before product code**

Create `scripts/smoke-tatoueur01.mjs` with this route contract:

```js
const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";

const pages = [
  ["/sites/tatoueur-01", "BLACK RITUAL"],
  ["/sites/tatoueur-01/work", "WORK INDEX"],
  ["/sites/tatoueur-01/artists", "ARTISTS"],
  ["/sites/tatoueur-01/studio", "STUDIO"],
  ["/sites/tatoueur-01/visit", "VISIT"],
];

for (const [path, marker] of pages) {
  const response = await fetch(`${base}${path}`);
  if (!response.ok) throw new Error(`${path}: expected 200, received ${response.status}`);
  const html = await response.text();
  if (!html.includes(marker)) throw new Error(`${path}: missing marker ${marker}`);
  if (!html.includes('name="robots" content="noindex, follow"')) {
    throw new Error(`${path}: missing noindex, follow`);
  }
  if (!/<title>[^<]+<\/title>/i.test(html)) throw new Error(`${path}: missing title`);
  if (!/<meta name="description" content="[^"]+"/i.test(html)) {
    throw new Error(`${path}: missing meta description`);
  }
  if (/<iframe\b/i.test(html)) throw new Error(`${path}: iframe forbidden`);
  if (/<form\b/i.test(html)) throw new Error(`${path}: form forbidden`);
}

const home = await (await fetch(`${base}/sites/tatoueur-01`)).text();
for (const href of [
  "/sites/tatoueur-01/work",
  "/sites/tatoueur-01/artists",
  "/sites/tatoueur-01/studio",
  "/sites/tatoueur-01/visit",
]) {
  if (!home.includes(`href="${href}"`)) throw new Error(`home missing ${href}`);
}

for (const marker of ["BLACK RITUAL", "01 /", "02 /", "BRUSSELS", "BLACKWORK"]) {
  if (!home.includes(marker)) throw new Error(`home missing ${marker}`);
}

const category = await (await fetch(`${base}/categories/tatoueur`)).text();
if (!category.includes('data-site-card="tatoueur-01"')) {
  throw new Error("tatoueur category missing Black Ritual card");
}

const requireAvailable = process.env.TATOUEUR01_REQUIRE_AVAILABLE === "1";
if (requireAvailable) {
  if (!category.includes("tatoueur-01-home.webp")) {
    throw new Error("Black Ritual preview missing from tatoueur category");
  }
  const fs = await import("node:fs");
  if (!fs.existsSync("public/previews/tatoueur-01-home.webp")) {
    throw new Error("Black Ritual preview file missing");
  }
}

console.log("Black Ritual smoke contract passed.");
```

- [ ] **Step 2: Add the dedicated CI workflow**

Create `.github/workflows/tatoueur01-verify.yml`:

```yml
name: Verify Black Ritual

on:
  push:
    branches:
      - 'feat/tatoueur-01-black-ritual'
  pull_request:
    branches:
      - main

permissions:
  contents: read

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Lint
        run: npm run lint
      - name: Build
        run: npm run build
      - name: Smoke Black Ritual routes
        shell: bash
        env:
          TATOUEUR01_REQUIRE_AVAILABLE: "1"
        run: |
          npm run start -- -p 3000 > /tmp/tatoueur01-next.log 2>&1 &
          server_pid=$!
          trap 'kill "$server_pid" 2>/dev/null || true' EXIT
          for attempt in {1..30}; do
            if curl -fsS http://127.0.0.1:3000/ > /dev/null; then break; fi
            sleep 1
          done
          node scripts/smoke-tatoueur01.mjs
```

- [ ] **Step 3: Verify RED before implementation**

Run the smoke script against the feature branch server before creating Black Ritual routes. Expected result: `/sites/tatoueur-01` returns 404. The failure must be route absence, not script syntax.

- [ ] **Step 4: Commit**

```text
test: define Black Ritual smoke contract
```

---

### Task 2: Build the typed content model, theme, SEO contract, and route shell

**Files:**
- Create: `src/templates/tatoueur-01/types.ts`
- Create: `src/templates/tatoueur-01/data/site.ts`
- Create: `src/templates/tatoueur-01/lib/theme.ts`
- Create: `src/templates/tatoueur-01/components/BlackRitualImage.tsx`
- Create: `src/templates/tatoueur-01/components/BlackRitualNav.tsx`
- Create: `src/templates/tatoueur-01/components/BlackRitualShell.tsx`
- Create: `app/sites/tatoueur-01/layout.tsx`
- Create: `app/sites/tatoueur-01/page.tsx`
- Create: `app/sites/tatoueur-01/work/page.tsx`
- Create: `app/sites/tatoueur-01/artists/page.tsx`
- Create: `app/sites/tatoueur-01/studio/page.tsx`
- Create: `app/sites/tatoueur-01/visit/page.tsx`

**Interfaces:**
- Produces: `blackRitualSite`, typed work/artist data, `blackRitualThemeStyle`, shared image/nav/shell primitives, and route metadata.

- [ ] **Step 1: Define focused domain types**

Create `types.ts` with:

```ts
export type RitualNavItem = {
  index: string;
  label: string;
  href: string;
};

export type RitualImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type TattooWork = {
  id: string;
  number: string;
  title: string;
  style: "Blackwork" | "Ornamental" | "Lettering" | "Abstract";
  artist: string;
  caption: string;
  image: RitualImage;
  secondaryImage?: RitualImage;
};

export type TattooArtist = {
  slug: string;
  name: string;
  specialty: string;
  bio: string;
  portrait: RitualImage;
  workIds: string[];
};

export type RitualHoursRow = {
  days: string;
  hours: string;
};
```

- [ ] **Step 2: Centralize fictional content and SEO copy**

Create `data/site.ts` containing this stable identity/navigation contract:

```ts
business: {
  name: "Black Ritual",
  descriptor: "Blackwork Tattoo Studio",
  city: "Brussels",
},
navigation: [
  { index: "00", label: "Index", href: "/sites/tatoueur-01" },
  { index: "01", label: "Work", href: "/sites/tatoueur-01/work" },
  { index: "02", label: "Artists", href: "/sites/tatoueur-01/artists" },
  { index: "03", label: "Studio", href: "/sites/tatoueur-01/studio" },
  { index: "04", label: "Visit", href: "/sites/tatoueur-01/visit" },
],
contact: {
  address: "Rue de l’Encre 17 · 1000 Bruxelles · adresse fictive",
  phone: "+32 2 000 01 17",
  email: "hello@blackritual.example",
  note: "Coordonnées créées uniquement pour cette démonstration portfolio.",
},
```

Include at least six `TattooWork` records across Blackwork, Ornamental, Lettering, and Abstract, three artists, hours, studio/process copy, and route-specific SEO objects.

Use only tattoo/studio imagery hosted on `images.unsplash.com`, already allowed by `next.config.ts`.

- [ ] **Step 3: Define theme variables**

Create `lib/theme.ts`:

```ts
import type { CSSProperties } from "react";

export const blackRitualThemeStyle = {
  "--ritual-ink": "#0A0A09",
  "--ritual-bone": "#E9E2D4",
  "--ritual-ash": "#9A958A",
  "--ritual-line": "#2B2A27",
  "--ritual-signal": "#B42318",
} as CSSProperties;
```

- [ ] **Step 4: Build the smallest shared primitives**

`BlackRitualImage` wraps `next/image` with explicit sizes/aspect handling.

`BlackRitualNav` is the only required client component. It uses `usePathname()` to provide active route semantics. Desktop renders the vertical left rail; mobile renders a bottom strip. Both use real `next/link` links and `aria-current="page"` on the active item.

`BlackRitualShell` applies the left-rail content offset and renders a minimal legal line after page content without introducing a conventional footer sitemap.

- [ ] **Step 5: Create the route layout with inherited SEO defaults**

`app/sites/tatoueur-01/layout.tsx` imports a condensed display font and a grotesk/body font from `next/font/google`, imports `black-ritual.css`, applies `blackRitualThemeStyle`, and exports:

```ts
export const metadata: Metadata = {
  title: {
    default: "Black Ritual — Blackwork Tattoo Studio",
    template: "%s — Black Ritual",
  },
  description: blackRitualSite.seo.home.description,
  robots: { index: false, follow: true },
};
```

Do not define a fake absolute `metadataBase`.

- [ ] **Step 6: Create thin route files with unique metadata**

Each `page.tsx` exports route-specific `Metadata` and one template page component. Example for work:

```tsx
import type { Metadata } from "next";
import { WorkPage } from "@/src/templates/tatoueur-01/pages/WorkPage";
import { blackRitualSite } from "@/src/templates/tatoueur-01/data/site";

export const metadata: Metadata = {
  title: "Work Index",
  description: blackRitualSite.seo.work.description,
};

export default function Page() {
  return <WorkPage />;
}
```

Create equivalent metadata for home, artists, studio, and visit.

- [ ] **Step 7: Commit**

```text
feat: add Black Ritual typed site shell
```

---

### Task 3: Implement the Black Ritual home poster sequence

**Files:**
- Create: `src/templates/tatoueur-01/pages/HomePage.tsx`
- Create: `src/templates/tatoueur-01/components/SelectedWorkSpread.tsx`
- Create: `src/templates/tatoueur-01/components/ArtistInterruption.tsx`
- Create: `src/templates/tatoueur-01/components/VisitPoster.tsx`
- Create: `src/templates/tatoueur-01/styles/black-ritual.css`

**Interfaces:**
- Consumes: `blackRitualSite`, `TattooWork`, `TattooArtist`, `BlackRitualImage`.
- Produces: the defining poster/editorial visual language reused by secondary routes without reusing their page structures.

- [ ] **Step 1: Render the exact home sequence**

The DOM order is:

```text
poster opening → selected work 01 → selected work 02 → artist interruption → selected work 03 → studio statement → visit poster
```

The page must contain literal markers `BLACK RITUAL`, `BRUSSELS`, `BLACKWORK`, `01 /`, and `02 /` for smoke verification.

- [ ] **Step 2: Build the opening composition**

Use one meaningful `<h1>` with `BLACK` and `RITUAL` as visually separate spans while remaining one heading. Combine:
- oversized condensed type;
- one portrait-orientation tattoo image crossing the composition grid;
- a compact metadata cluster (`BRUSSELS`, `BLACKWORK`, `CUSTOM PIECES`);
- one restrained text link to `/sites/tatoueur-01/work`.

Do not create a centered hero card or 50/50 split.

- [ ] **Step 3: Build selected work spreads with real structural variation**

`SelectedWorkSpread` accepts:

```ts
variant: "image-left" | "image-right" | "double";
```

Use distinct variants for the first three selected pieces. Each spread renders number, title, style, artist, caption, image(s), and a link into `/work`.

Desktop layout must alternate large image proportions and text anchors. Mobile reorders into image → number/title → metadata/caption while preserving DOM meaning.

- [ ] **Step 4: Insert the artist interruption**

Render one artist as a full-width bone-paper interruption between work sections. It must not look like a card: use a large name, short biography, narrow portrait crop, specialty label, and link to `/artists`.

- [ ] **Step 5: Build the studio statement and visit poster**

Studio statement is text-led with one supporting image and link to `/studio`.

`VisitPoster` renders the fictional address, hours, email, demo note, and link to `/visit` as a large typographic closing field. It replaces a standard footer.

- [ ] **Step 6: Implement responsive/accessibility CSS**

`black-ritual.css` must include:
- desktop left-rail grid and content offset;
- mobile rail removal + fixed bottom nav spacing;
- guarded fluid type using `clamp()`;
- `:focus-visible` treatment using both outline and offset;
- `@media (prefers-reduced-motion: reduce)` with motion disabled;
- image containers with explicit aspect ratios;
- no horizontal overflow at 320px+;
- no gradients, glassmorphism, large shadows, or rounded SaaS cards.

- [ ] **Step 7: Re-run smoke contract**

Expected after Tasks 2–3: all route existence checks still fail for secondary pages until Task 4, but home route returns 200 and all home markers/internal links pass.

- [ ] **Step 8: Commit**

```text
feat: build Black Ritual poster home
```

---

### Task 4: Implement four structurally distinct secondary routes

**Files:**
- Create: `src/templates/tatoueur-01/pages/WorkPage.tsx`
- Create: `src/templates/tatoueur-01/pages/ArtistsPage.tsx`
- Create: `src/templates/tatoueur-01/pages/StudioPage.tsx`
- Create: `src/templates/tatoueur-01/pages/VisitPage.tsx`
- Create: `src/templates/tatoueur-01/components/WorkIndex.tsx`

**Interfaces:**
- Consumes: shared typed data, image primitive, theme, and nav shell.
- Produces: four crawlable pages with deliberately different information architectures.

- [ ] **Step 1: Build Work as an irregular editorial index**

Use `<h1>WORK INDEX</h1>` and semantic work `<article>` elements. Alternate image spans and metadata placement based on stable item position classes. Do not copy home `SelectedWorkSpread` markup.

At the top, render semantic filter labels as simple links/anchors or non-stateful buttons only if they do not require hiding server-rendered content. The full archive must remain in the initial HTML.

- [ ] **Step 2: Build Artists as sequential posters**

Use `<h1>ARTISTS</h1>`. Each artist section changes image/copy balance via `artist--left`, `artist--wide`, `artist--type` variants. Render specialty, factual fictional bio, representative image, and links to `/work`.

Do not use identical portrait cards.

- [ ] **Step 3: Build Studio as a manifesto/process route**

Use `<h1>STUDIO</h1>` followed by:
- philosophy statement;
- custom-project process as numbered editorial steps, not icon cards;
- conservative hygiene/safety commitment without certification or guarantee claims;
- preparation expectations in general terms;
- one/two studio images.

- [ ] **Step 4: Build Visit as a sparse information page**

Use `<h1>VISIT</h1>` and semantic `<address>`. Render address, hours, phone, email, access note, inquiry process, and demo disclosure in a large full-screen information composition.

Do not render a form, iframe, map embed, or booking widget.

- [ ] **Step 5: Verify metadata and semantic contract**

Run the smoke script against the production build with `TATOUEUR01_REQUIRE_AVAILABLE=0`. Expected: all five routes return 200; title, description, noindex/follow, no form/iframe, home links, markers, and category card checks pass.

- [ ] **Step 6: Commit**

```text
feat: add Black Ritual work artists studio visit pages
```

---

### Task 5: Publish the template in the portfolio and target preview capture

**Files:**
- Modify: `src/portfolio/data/sites.ts`
- Modify: `preview-target.json`

**Interfaces:**
- Consumes: verified Black Ritual route tree.
- Produces: portfolio publication metadata and capture target for the existing generic preview workflow.

- [ ] **Step 1: Update preview target**

Set:

```json
{
  "siteId": "tatoueur-01",
  "route": "/sites/tatoueur-01",
  "width": 1440,
  "height": 1000
}
```

- [ ] **Step 2: Update only the existing `tatoueur-01` registry entry**

Change Black Ritual to:

```ts
{
  id: "tatoueur-01",
  name: "Black Ritual",
  category: "tatoueur",
  direction: "Blackwork / underground",
  summary: "Blackwork éditorial — rail latéral, compositions d’affiches, archive irrégulière, portraits d’artistes et contraste noir/encre sur papier os.",
  href: "/sites/tatoueur-01",
  status: "available",
  preview: {
    src: "/previews/tatoueur-01-home.webp",
    alt: "Aperçu de la page d'accueil éditoriale noire du studio fictif Black Ritual",
    width: 1440,
    height: 1000,
    focalPosition: "center top",
  },
}
```

Do not modify `tatoueur-02`, `tatoueur-03`, or `tatoueur-04`.

- [ ] **Step 3: Trigger/allow the existing `capture-preview.yml` workflow**

The generic preview workflow must build the branch, render `/sites/tatoueur-01`, capture 1440×1000, convert to WebP, and commit `public/previews/tatoueur-01-home.webp` back to the feature branch.

- [ ] **Step 4: Commit publication metadata if not already committed with preview target**

```text
feat: publish Black Ritual in portfolio
```

---

### Task 6: Perform fresh technical and visual verification before PR/merge

**Files:**
- Verify all files changed by Tasks 1–5.
- No new product file is allowed solely to hide verification failures.

**Interfaces:**
- Consumes: complete feature branch including generated preview.
- Produces: objective evidence that Black Ritual is ready for review.

- [ ] **Step 1: Run fresh lint**

```bash
npm run lint
```

Expected: exit code 0.

- [ ] **Step 2: Run fresh production build**

```bash
npm run build
```

Expected: exit code 0 and all five `/sites/tatoueur-01...` routes included successfully.

- [ ] **Step 3: Run fresh smoke verification against production server**

```bash
TATOUEUR01_REQUIRE_AVAILABLE=1 node scripts/smoke-tatoueur01.mjs
```

Expected: `Black Ritual smoke contract passed.` after the production server is running.

- [ ] **Step 4: Confirm preview artifact and registry state**

Require:
- `public/previews/tatoueur-01-home.webp` exists and is non-empty;
- `/categories/tatoueur` HTML references it;
- `tatoueur-01` is `available`;
- `tatoueur-02..04` remain `planned`.

- [ ] **Step 5: Designly composition QA**

Review the rendered preview against these rejection gates:
- no conventional top navbar;
- persistent desktop left rail is visually architectural, not decorative;
- no conventional centered hero;
- selected works have visibly different compositions;
- artist interruption breaks the gallery rhythm;
- page ends as an address/hours poster, not a standard footer;
- hierarchy remains legible in grayscale;
- one dominant focal anchor exists per major section;
- no equal-emphasis generic card grid;
- mobile plan does not rely on simply shrinking desktop.

Any failure routes back to the smallest responsible CSS/component change, followed by fresh lint/build/smoke evidence.

- [ ] **Step 6: Open PR only after fresh verification**

PR title:

```text
feat: add Tatoueur 01 Black Ritual
```

PR body must summarize architecture, five routes, SEO, visual differentiation, smoke/CI coverage, preview publication, and explicitly note that NaCl verification is not claimed because project-local NaCl/MCP is not initialized.

- [ ] **Step 7: Merge only after GitHub Actions success and review**

Do not merge on assumed success. Require the dedicated `Verify Black Ritual` workflow and portfolio checks to finish successfully on the PR head.
