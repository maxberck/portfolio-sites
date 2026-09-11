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
