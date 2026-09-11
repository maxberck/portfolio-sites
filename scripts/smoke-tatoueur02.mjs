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
if (!category.includes('data-site-card="tatoueur-02"')) {
  throw new Error("tatoueur category missing Line Gallery card");
}

const requireAvailable = process.env.TATOUEUR02_REQUIRE_AVAILABLE === "1";
if (requireAvailable) {
  if (!category.includes("tatoueur-02-home.webp")) {
    throw new Error("Line Gallery preview missing from tatoueur category");
  }
  const fs = await import("node:fs");
  if (!fs.existsSync("public/previews/tatoueur-02-home.webp")) {
    throw new Error("Line Gallery preview file missing");
  }
}

console.log("Line Gallery smoke contract passed.");
