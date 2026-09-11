import { chromium } from "playwright";

const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";
const routes = [
  "/sites/tatoueur-01",
  "/sites/tatoueur-01/work",
  "/sites/tatoueur-01/artists",
  "/sites/tatoueur-01/studio",
  "/sites/tatoueur-01/visit",
];

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
];

const overlapPairs = [
  [".ritual-opening__title span:first-child", ".ritual-opening__title span:last-child", "home title lines"],
  [".ritual-work-spread__copy h2", ".ritual-work-spread__copy > p:not(.ritual-kicker)", "work title/copy"],
  [".ritual-statement h2", ".ritual-statement__copy > p:not(.ritual-kicker)", "studio statement title/copy"],
  [".ritual-page-intro h1", ".ritual-page-intro__lede", "subpage title/lede"],
  [".ritual-artist-poster h2", ".ritual-artist-poster__copy > p:not(.ritual-kicker)", "artist title/copy"],
  [".ritual-care h2", ".ritual-care > div", "care title/copy"],
  [".ritual-visit-grid h2", ".ritual-visit-grid p:not(.ritual-kicker)", "visit title/copy"],
];

function intersects(a, b) {
  return a.left < b.right - 1 && a.right > b.left + 1 && a.top < b.bottom - 1 && a.bottom > b.top + 1;
}

const browser = await chromium.launch({ headless: true });
const failures = [];

try {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });

    for (const route of routes) {
      await page.goto(`${base}${route}`, { waitUntil: "networkidle" });

      await page.evaluate(async () => {
        const step = Math.max(300, Math.floor(window.innerHeight * 0.65));
        for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 35));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(300);

      const result = await page.evaluate((pairs) => {
        const brokenImages = [...document.images]
          .filter((img) => img.complete && img.naturalWidth === 0)
          .map((img) => ({ alt: img.alt, src: img.currentSrc || img.src }));

        const overflow = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - window.innerWidth;

        const overlaps = [];
        for (const [firstSelector, secondSelector, label] of pairs) {
          const first = [...document.querySelectorAll(firstSelector)];
          const second = [...document.querySelectorAll(secondSelector)];
          const count = Math.min(first.length, second.length);
          for (let index = 0; index < count; index += 1) {
            const a = first[index].getBoundingClientRect();
            const b = second[index].getBoundingClientRect();
            const hit = a.left < b.right - 1 && a.right > b.left + 1 && a.top < b.bottom - 1 && a.bottom > b.top + 1;
            if (hit) overlaps.push({ label, index, first: { x: a.x, y: a.y, width: a.width, height: a.height }, second: { x: b.x, y: b.y, width: b.width, height: b.height } });
          }
        }

        return { brokenImages, overflow, overlaps };
      }, overlapPairs);

      if (result.brokenImages.length) {
        failures.push(`${viewport.name} ${route}: broken images ${JSON.stringify(result.brokenImages)}`);
      }
      if (result.overflow > 1) {
        failures.push(`${viewport.name} ${route}: horizontal overflow ${result.overflow}px`);
      }
      if (result.overlaps.length) {
        failures.push(`${viewport.name} ${route}: overlapping text ${JSON.stringify(result.overlaps)}`);
      }
    }

    await page.close();
  }
} finally {
  await browser.close();
}

if (failures.length) {
  console.error("Black Ritual UI regression check failed:\n" + failures.join("\n"));
  process.exit(1);
}

console.log("Black Ritual UI regression check passed.");
