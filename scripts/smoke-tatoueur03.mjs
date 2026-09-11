const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";

const pages = [
  ["/sites/tatoueur-03", "LUCKY XIII"],
  ["/sites/tatoueur-03/work", "FLASH BOOK"],
  ["/sites/tatoueur-03/artists", "SHOP ROSTER"],
  ["/sites/tatoueur-03/studio", "SHOP STORY"],
  ["/sites/tatoueur-03/visit", "VISIT THE SHOP"],
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

const home = await (await fetch(`${base}/sites/tatoueur-03`)).text();
for (const href of [
  "/sites/tatoueur-03/work",
  "/sites/tatoueur-03/artists",
  "/sites/tatoueur-03/studio",
  "/sites/tatoueur-03/visit",
]) {
  if (!home.includes(`href="${href}"`)) throw new Error(`home missing ${href}`);
}

for (const marker of ["LUCKY XIII", "TRADITIONAL TATTOO", "BRUSSELS", "FLASH"]) {
  if (!home.includes(marker)) throw new Error(`home missing ${marker}`);
}

const category = await (await fetch(`${base}/categories/tatoueur`)).text();
if (!category.includes('data-site-card="tatoueur-03"')) {
  throw new Error("tatoueur category missing Lucky XIII card");
}
if (!category.includes('data-site-card="tatoueur-04"')) {
  throw new Error("tatoueur category missing Matière card");
}

const requireAvailable = process.env.TATOUEUR03_REQUIRE_AVAILABLE === "1";
if (requireAvailable) {
  if (!category.includes("tatoueur-03-home.webp")) {
    throw new Error("Lucky XIII preview missing from tatoueur category");
  }
  const fs = await import("node:fs");
  if (!fs.existsSync("public/previews/tatoueur-03-home.webp")) {
    throw new Error("Lucky XIII preview file missing");
  }
}

console.log("Lucky XIII smoke contract passed.");
