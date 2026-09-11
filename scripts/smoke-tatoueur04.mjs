const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";

const pages = [
  ["/sites/tatoueur-04", "MATIÈRE"],
  ["/sites/tatoueur-04/work", "WORK STUDIES"],
  ["/sites/tatoueur-04/artists", "ARTIST CHAPTERS"],
  ["/sites/tatoueur-04/studio", "PRACTICE"],
  ["/sites/tatoueur-04/visit", "VISIT"],
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

const home = await (await fetch(`${base}/sites/tatoueur-04`)).text();
for (const href of [
  "/sites/tatoueur-04/work",
  "/sites/tatoueur-04/artists",
  "/sites/tatoueur-04/studio",
  "/sites/tatoueur-04/visit",
]) {
  if (!home.includes(`href="${href}"`)) throw new Error(`home missing ${href}`);
}

for (const marker of ["MATIÈRE", "CONTEMPORARY TATTOO PRACTICE", "BRUSSELS", "ENTER WORKS"]) {
  if (!home.includes(marker)) throw new Error(`home missing ${marker}`);
}

const category = await (await fetch(`${base}/categories/tatoueur`)).text();
if (!category.includes('data-site-card="tatoueur-04"')) {
  throw new Error("tatoueur category missing Matière card");
}

const requireAvailable = process.env.TATOUEUR04_REQUIRE_AVAILABLE === "1";
if (requireAvailable) {
  if (!category.includes("tatoueur-04-home.webp")) {
    throw new Error("Matière preview missing from tatoueur category");
  }
  const fs = await import("node:fs");
  if (!fs.existsSync("public/previews/tatoueur-04-home.webp")) {
    throw new Error("Matière preview file missing");
  }
}

console.log("Matière smoke contract passed.");
