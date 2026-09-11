import { chromium } from "playwright";

const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";
const routes = [
  "/sites/tatoueur-04",
  "/sites/tatoueur-04/work",
  "/sites/tatoueur-04/artists",
  "/sites/tatoueur-04/studio",
  "/sites/tatoueur-04/visit",
];

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
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

      const result = await page.evaluate(() => {
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

        const compressedHeadings = [...document.querySelectorAll("[data-display-heading]")]
          .map((element) => {
            const style = getComputedStyle(element);
            const fontSize = Number.parseFloat(style.fontSize);
            const lineHeight = Number.parseFloat(style.lineHeight);
            return {
              text: element.textContent?.trim().slice(0, 60),
              ratio: Number((lineHeight / fontSize).toFixed(2)),
              valid: Number.isFinite(fontSize) && Number.isFinite(lineHeight),
            };
          })
          .filter((item) => item.valid && item.ratio < 0.86);

        const overlaps = [];
        for (const group of document.querySelectorAll("[data-overlap-group]")) {
          const items = [...group.querySelectorAll("[data-overlap-check]")];
          for (let firstIndex = 0; firstIndex < items.length; firstIndex += 1) {
            for (let secondIndex = firstIndex + 1; secondIndex < items.length; secondIndex += 1) {
              const a = items[firstIndex].getBoundingClientRect();
              const b = items[secondIndex].getBoundingClientRect();
              const hit = a.left < b.right - 1 && a.right > b.left + 1 && a.top < b.bottom - 1 && a.bottom > b.top + 1;
              if (hit) {
                overlaps.push({
                  group: group.getAttribute("data-overlap-group"),
                  first: items[firstIndex].textContent?.trim().slice(0, 40),
                  second: items[secondIndex].textContent?.trim().slice(0, 40),
                });
              }
            }
          }
        }

        return {
          brokenImages,
          overflow,
          compressedHeadings,
          overlaps,
          desktopNavVisible: isVisible('[data-folio-nav="desktop"]'),
          inlineNavVisible: isVisible('[data-folio-nav="inline"]'),
        };
      });

      if (result.brokenImages.length) failures.push(`${viewport.name} ${route}: broken images ${JSON.stringify(result.brokenImages)}`);
      if (result.overflow > 1) failures.push(`${viewport.name} ${route}: horizontal overflow ${result.overflow}px`);
      if (result.compressedHeadings.length) failures.push(`${viewport.name} ${route}: compressed display type ${JSON.stringify(result.compressedHeadings)}`);
      if (result.overlaps.length) failures.push(`${viewport.name} ${route}: overlapping text ${JSON.stringify(result.overlaps)}`);

      if (viewport.name === "desktop") {
        if (!result.desktopNavVisible) failures.push(`desktop ${route}: desktop folio navigation not visible`);
        if (result.inlineNavVisible) failures.push(`desktop ${route}: inline contents should be hidden`);
      } else {
        if (!result.inlineNavVisible) failures.push(`mobile ${route}: inline contents not visible`);
        if (result.desktopNavVisible) failures.push(`mobile ${route}: desktop folio navigation should be hidden`);
      }
    }

    await page.close();
  }
} finally {
  await browser.close();
}

if (failures.length) {
  console.error("Matière UI regression check failed:\n" + failures.join("\n"));
  process.exit(1);
}

console.log("Matière UI regression check passed.");
