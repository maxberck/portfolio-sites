const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";

const pages = [
  ["/sites/coiffure-03", "FORM / STUDIO"],
  ["/sites/coiffure-03/services", "SERVICES"],
  ["/sites/coiffure-03/studio", "STUDIO"],
  ["/sites/coiffure-03/work", "WORK"],
  ["/sites/coiffure-03/contact", "CONTACT"],
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

const home = await (await fetch(`${base}/sites/coiffure-03`)).text();
for (const href of [
  "/sites/coiffure-03/services",
  "/sites/coiffure-03/studio",
  "/sites/coiffure-03/work",
  "/sites/coiffure-03/contact",
]) {
  if (!home.includes(`href="${href}"`)) throw new Error(`home missing ${href}`);
}

for (const marker of ["01 / CUT", "02 / COLOR", "03 / STYLE", "04 / CARE"]) {
  if (!home.includes(marker)) throw new Error(`home missing service marker ${marker}`);
}

const category = await (await fetch(`${base}/categories/coiffure`)).text();
if (!category.includes('data-site-card="coiffure-03"')) {
  throw new Error("coiffure category missing Form Studio card");
}

const requireAvailable = process.env.COIFFURE03_REQUIRE_AVAILABLE === "1";
if (requireAvailable) {
  if (!category.includes("coiffure-03-home.webp")) {
    throw new Error("Form Studio preview missing from coiffure category");
  }
  const fs = await import("node:fs");
  if (!fs.existsSync("public/previews/coiffure-03-home.webp")) {
    throw new Error("Form Studio preview file missing");
  }
}

console.log("Form Studio smoke contract passed.");
