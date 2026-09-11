import { chromium } from "playwright";

const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";
const failures = [];
const browser = await chromium.launch({ headless: true });

const checkPageHealth = async (page, label) => {
  const result = await page.evaluate(() => {
    const brokenImages = [...document.images]
      .filter((image) => image.complete && image.naturalWidth === 0)
      .map((image) => image.alt || image.currentSrc || image.src);

    const overflow = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - window.innerWidth;

    return { brokenImages, overflow };
  });

  if (result.brokenImages.length) failures.push(`${label}: broken images ${JSON.stringify(result.brokenImages)}`);
  if (result.overflow > 1) failures.push(`${label}: horizontal overflow ${result.overflow}px`);
};

try {
  for (const viewport of [
    { name: "desktop", width: 1440, height: 1000 },
    { name: "mobile", width: 390, height: 844 },
  ]) {
    const page = await browser.newPage({ viewport });

    for (const route of ["/", "/templates", "/contact"]) {
      const response = await page.goto(`${base}${route}`, { waitUntil: "networkidle" });
      if (!response?.ok()) {
        failures.push(`${viewport.name} ${route}: expected 200, received ${response?.status() ?? "no response"}`);
        continue;
      }
      await checkPageHealth(page, `${viewport.name} ${route}`);
    }

    await page.goto(`${base}/templates`, { waitUntil: "networkidle" });
    const allCount = await page.locator('[data-site-card]').count();
    if (allCount !== 16) failures.push(`${viewport.name} templates: expected 16 cards, received ${allCount}`);

    for (const category of ["restaurant", "garage", "coiffure", "tatoueur"]) {
      await page.locator(`[data-template-tab="${category}"]`).click();
      await page.waitForTimeout(50);
      const visible = await page.locator('[data-site-card]:visible').count();
      const wrongCategory = await page.locator(`[data-site-card]:visible:not([data-category="${category}"])`).count();
      if (visible !== 4) failures.push(`${viewport.name} templates ${category}: expected 4 visible cards, received ${visible}`);
      if (wrongCategory !== 0) failures.push(`${viewport.name} templates ${category}: found ${wrongCategory} cards from another category`);
    }

    await page.close();
  }

  const reducedPage = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
  });
  await reducedPage.goto(`${base}/`, { waitUntil: "networkidle" });
  const before = await reducedPage.locator('[data-hero-carousel-current]').getAttribute('data-hero-carousel-current');
  await reducedPage.waitForTimeout(5400);
  const after = await reducedPage.locator('[data-hero-carousel-current]').getAttribute('data-hero-carousel-current');
  if (before !== after) failures.push(`reduced motion: carousel advanced from ${before} to ${after}`);
  await reducedPage.close();
} finally {
  await browser.close();
}

if (failures.length) {
  console.error("Portfolio IA UI contract failed:\n" + failures.join("\n"));
  process.exit(1);
}

console.log("Portfolio IA UI contract passed.");
