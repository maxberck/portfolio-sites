const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";

const pages = [
  ["/sites/coiffure-01", "La coupe commence par l’écoute."],
  ["/sites/coiffure-01/prestations", "Prestations"],
  ["/sites/coiffure-01/maison", "La Maison"],
  ["/sites/coiffure-01/galerie", "Galerie"],
  ["/sites/coiffure-01/contact", "Contact"],
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

const home = await (await fetch(`${base}/sites/coiffure-01`)).text();
for (const href of [
  "/sites/coiffure-01/prestations",
  "/sites/coiffure-01/maison",
  "/sites/coiffure-01/galerie",
  "/sites/coiffure-01/contact",
]) {
  if (!home.includes(`href="${href}"`)) throw new Error(`home missing ${href}`);
}

for (const marker of ["Écouter", "Construire", "Travailler", "Finaliser"]) {
  if (!home.includes(marker)) throw new Error(`home missing process marker ${marker}`);
}

const category = await (await fetch(`${base}/categories/coiffure`)).text();
if (!category.includes('data-site-card="coiffure-01"')) throw new Error("coiffure category missing Maison Élise card");

const requireAvailable = process.env.COIFFURE01_REQUIRE_AVAILABLE === "1";
if (requireAvailable) {
  if (!category.includes("coiffure-01-home.webp")) throw new Error("Maison Élise preview missing from coiffure category");
  const fs = await import("node:fs");
  if (!fs.existsSync("public/previews/coiffure-01-home.webp")) throw new Error("Maison Élise preview file missing");
}

console.log("Maison Élise smoke contract passed.");
