const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";

const pages = [
  ["/sites/restaurant-03", "À TABLE, AU SOLEIL."],
  ["/sites/restaurant-03/menu", "LE MENU"],
  ["/sites/restaurant-03/table", "LA TABLE"],
  ["/sites/restaurant-03/galerie", "AUTOUR DE LA TABLE"],
  ["/sites/restaurant-03/contact", "VENIR CHEZ TERRA"],
];

for (const [path, marker] of pages) {
  const response = await fetch(`${base}${path}`);
  if (!response.ok) throw new Error(`${path}: expected 200, received ${response.status}`);

  const html = await response.text();
  if (!html.includes(marker)) throw new Error(`${path}: missing marker ${marker}`);
  if (!html.includes('name="robots" content="noindex, follow"')) {
    throw new Error(`${path}: missing noindex, follow`);
  }
  if (/<iframe\b/i.test(html)) throw new Error(`${path}: iframe forbidden`);
  if (/<form\b/i.test(html)) throw new Error(`${path}: form forbidden`);
}

const home = await (await fetch(`${base}/sites/restaurant-03`)).text();
for (const href of ["/sites/restaurant-03/menu", "/sites/restaurant-03/table", "/sites/restaurant-03/galerie", "/sites/restaurant-03/contact"]) {
  if (!home.includes(`href="${href}"`)) throw new Error(`home missing ${href}`);
}

const category = await (await fetch(`${base}/categories/restaurant`)).text();
if (!category.includes('data-site-card="restaurant-03"')) throw new Error("restaurant category missing Terra card");

const requireAvailable = process.env.TERRA_REQUIRE_AVAILABLE === "1";
if (requireAvailable) {
  if (!category.includes('restaurant-03-home.webp')) throw new Error("Terra preview missing from restaurant category");
  const fs = await import("node:fs");
  if (!fs.existsSync("public/previews/restaurant-03-home.webp")) throw new Error("Terra preview file missing");
}

console.log("Terra smoke contract passed.");
