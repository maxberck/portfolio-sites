import { chromium } from "playwright";

const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";
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

const overlapPairs = [
  [".line-opening__title", ".line-opening__statement", "home title/statement"],
  [".line-page-intro h1", ".line-page-intro__lede", "page title/lede"],
  [".line-plate h2", ".line-plate__caption", "work plate title/caption"],
  [".line-artist-dossier h2", ".line-artist-dossier__bio", "artist name/bio"],
  [".line-studio-statement h2", ".line-studio-statement__copy", "studio statement/copy"],
  [".line-visit-panel h2", ".line-visit-panel__copy", "visit heading/copy"],
];

const displaySelectors = [
  ".line-opening__title",
  ".line-page-intro h1",
  ".line-plate h2",
  ".line-artist-dossier h2",
  ".line-studio-statement h2",
  ".line-visit-panel h2",
];

const browser = await chromium.launch({ headless: true });
const failures = [];

try {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });

    for (const route of routes) {
      const response = await page.goto(`${base}${route}`, { waitUntil: "networkidle" });
      if (!response?.ok()) {
        failures.push(`${viewport.name} ${route}: expected 200, received ${response?.status() ?? "no response"}`);
        continue;
      }

      await page.evaluate(async () => {
        const step = Math.max(300, Math.floor(window.innerHeight * 0.65));
        for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 35));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(300);

      const result = await page.evaluate(({ pairs, headings }) => {
        const isVisible = (selector) => {
          const element = document.querySelector(selector);
          if (!element) return false;
          const style = getComputedStyle(element);
          const rect = element.getBoundingClientRect();
          return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
        };

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
            if (hit) overlaps.push({ label, index });
          }
        }

        const compressedHeadings = [];
        for (const selector of headings) {
          for (const element of document.querySelectorAll(selector)) {
            const style = getComputedStyle(element);
            const fontSize = Number.parseFloat(style.fontSize);
            const lineHeight = Number.parseFloat(style.lineHeight);
            if (Number.isFinite(fontSize) && Number.isFinite(lineHeight) && lineHeight / fontSize < 0.86) {
              compressedHeadings.push({
                selector,
                text: element.textContent?.trim().slice(0, 60),
                ratio: Number((lineHeight / fontSize).toFixed(2)),
              });
            }
          }
        }

        return {
          brokenImages,
          overflow,
          overlaps,
          compressedHeadings,
          desktopNavVisible: isVisible(".line-desktop-nav"),
          mobileNavVisible: isVisible(".line-mobile-nav"),
        };
      }, { pairs: overlapPairs, headings: displaySelectors });

      if (result.brokenImages.length) failures.push(`${viewport.name} ${route}: broken images ${JSON.stringify(result.brokenImages)}`);
      if (result.overflow > 1) failures.push(`${viewport.name} ${route}: horizontal overflow ${result.overflow}px`);
      if (result.overlaps.length) failures.push(`${viewport.name} ${route}: overlapping text ${JSON.stringify(result.overlaps)}`);
      if (result.compressedHeadings.length) failures.push(`${viewport.name} ${route}: compressed display type ${JSON.stringify(result.compressedHeadings)}`);

      if (viewport.name === "desktop") {
        if (!result.desktopNavVisible) failures.push(`desktop ${route}: desktop navigation not visible`);
        if (result.mobileNavVisible) failures.push(`desktop ${route}: mobile navigation should be hidden`);
      } else {
        if (!result.mobileNavVisible) failures.push(`mobile ${route}: mobile navigation not visible`);
        if (result.desktopNavVisible) failures.push(`mobile ${route}: desktop navigation should be hidden`);
      }
    }

    await page.close();
  }
} finally {
  await browser.close();
}

if (failures.length) {
  console.error("Line Gallery UI regression check failed:\n" + failures.join("\n"));
  process.exit(1);
}

console.log("Line Gallery UI regression check passed.");
