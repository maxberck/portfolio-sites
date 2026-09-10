import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";
const output = process.env.TERRA_QA_DIR ?? "/tmp/terra-qa";

const browser = await chromium.launch({ headless: true });
await mkdir(output, { recursive: true });

const captures = [
  ["home", "/sites/restaurant-03", [[1440, 1000, "desktop-1440"], [768, 1024, "tablet-768"], [375, 812, "mobile-375"]]],
  ["menu", "/sites/restaurant-03/menu", [[1440, 1000, "desktop-1440"], [768, 1024, "tablet-768"], [375, 812, "mobile-375"]]],
  ["gallery", "/sites/restaurant-03/galerie", [[1440, 1000, "desktop-1440"], [768, 1024, "tablet-768"], [375, 812, "mobile-375"]]],
  ["table", "/sites/restaurant-03/table", [[1440, 1000, "desktop-1440"], [375, 812, "mobile-375"]]],
  ["contact", "/sites/restaurant-03/contact", [[1440, 1000, "desktop-1440"], [375, 812, "mobile-375"]]],
];

async function warmLazyImages(page) {
  await page.evaluate(async () => {
    const distance = Math.max(320, Math.floor(window.innerHeight * 0.72));
    for (let y = 0; y < document.documentElement.scrollHeight; y += distance) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 90));
    }
    window.scrollTo(0, document.documentElement.scrollHeight);
    await new Promise((resolve) => setTimeout(resolve, 500));
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(500);
}

for (const [name, route, viewports] of captures) {
  for (const [width, height, label] of viewports) {
    const page = await browser.newPage({ viewport: { width, height } });
    await page.goto(`${base}${route}`, { waitUntil: "networkidle" });
    await warmLazyImages(page);
    await page.screenshot({ path: `${output}/${name}-${label}-full.png`, fullPage: true });
    await page.close();
  }
}

await browser.close();
