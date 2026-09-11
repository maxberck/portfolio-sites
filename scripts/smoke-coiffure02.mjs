const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";

const pages = [
  ["/sites/coiffure-02", "CUT CLEAN. STAY SHARP."],
  ["/sites/coiffure-02/services", "Services"],
  ["/sites/coiffure-02/shop", "The Shop"],
  ["/sites/coiffure-02/cuts", "Cuts"],
  ["/sites/coiffure-02/contact", "Contact"],
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

const home = await (await fetch(`${base}/sites/coiffure-02`)).text();
for (const href of [
  "/sites/coiffure-02/services",
  "/sites/coiffure-02/shop",
  "/sites/coiffure-02/cuts",
  "/sites/coiffure-02/contact",
]) {
  if (!home.includes(`href="${href}"`)) throw new Error(`home missing ${href}`);
}

for (const marker of ["FADE", "BARBE", "COUPE + BARBE", "CONTOURS"]) {
  if (!home.includes(marker)) throw new Error(`home missing service marker ${marker}`);
}

const category = await (await fetch(`${base}/categories/coiffure`)).text();
if (!category.includes('data-site-card="coiffure-02"')) {
  throw new Error("coiffure category missing District Cut card");
}

const requireAvailable = process.env.COIFFURE02_REQUIRE_AVAILABLE === "1";
if (requireAvailable) {
  if (!category.includes("coiffure-02-home.webp")) {
    throw new Error("District Cut preview missing from coiffure category");
  }
  const fs = await import("node:fs");
  if (!fs.existsSync("public/previews/coiffure-02-home.webp")) {
    throw new Error("District Cut preview file missing");
  }
}

console.log("District Cut smoke contract passed.");
