const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";

const pages = [
  ["/sites/garage-04", "Redresser."],
  ["/sites/garage-04/carrosserie", "CARROSSERIE"],
  ["/sites/garage-04/peinture", "PEINTURE"],
  ["/sites/garage-04/realisations", "RÉALISATIONS"],
  ["/sites/garage-04/contact", "CONTACT"],
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

const home = await (await fetch(`${base}/sites/garage-04`)).text();
for (const href of [
  "/sites/garage-04/carrosserie",
  "/sites/garage-04/peinture",
  "/sites/garage-04/realisations",
  "/sites/garage-04/contact",
]) {
  if (!home.includes(`href="${href}"`)) throw new Error(`home missing ${href}`);
}

for (const marker of ["Redresser", "Préparer", "Peindre", "Contrôler"]) {
  if (!home.includes(marker)) throw new Error(`home missing process marker ${marker}`);
}

const category = await (await fetch(`${base}/categories/garage`)).text();
if (!category.includes('data-site-card="garage-04"')) throw new Error("garage category missing Carrosserie 42 card");

const requireAvailable = process.env.GARAGE04_REQUIRE_AVAILABLE === "1";
if (requireAvailable) {
  if (!category.includes("garage-04-home.webp")) throw new Error("Carrosserie 42 preview missing from garage category");
  const fs = await import("node:fs");
  if (!fs.existsSync("public/previews/garage-04-home.webp")) throw new Error("Carrosserie 42 preview file missing");
}

console.log("Carrosserie 42 smoke contract passed.");
