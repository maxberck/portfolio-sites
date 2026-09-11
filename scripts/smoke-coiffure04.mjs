const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";

const pages = [
  ["/sites/coiffure-04", "CHRO"],
  ["/sites/coiffure-04/color", "COLOR"],
  ["/sites/coiffure-04/studio", "STUDIO"],
  ["/sites/coiffure-04/work", "WORK"],
  ["/sites/coiffure-04/contact", "CONTACT"],
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

const home = await (await fetch(`${base}/sites/coiffure-04`)).text();
for (const href of [
  "/sites/coiffure-04/color",
  "/sites/coiffure-04/studio",
  "/sites/coiffure-04/work",
  "/sites/coiffure-04/contact",
]) {
  if (!home.includes(`href="${href}"`)) throw new Error(`home missing ${href}`);
}

for (const marker of [
  "CHRO",
  "MATIC",
  "01 BLONDE",
  "02 COPPER",
  "03 VIVID",
  "04 CORRECTION",
  "DIAGNOSIS",
  "BASE",
  "TONE",
  "CARE",
]) {
  if (!home.includes(marker)) throw new Error(`home missing ${marker}`);
}

const category = await (await fetch(`${base}/categories/coiffure`)).text();
if (!category.includes('data-site-card="coiffure-04"')) {
  throw new Error("coiffure category missing Chromatic card");
}

const requireAvailable = process.env.COIFFURE04_REQUIRE_AVAILABLE === "1";
if (requireAvailable) {
  if (!category.includes("coiffure-04-home.webp")) {
    throw new Error("Chromatic preview missing from coiffure category");
  }
  const fs = await import("node:fs");
  if (!fs.existsSync("public/previews/coiffure-04-home.webp")) {
    throw new Error("Chromatic preview file missing");
  }
}

console.log("Chromatic smoke contract passed.");
