const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";

const pages = [
  ["/sites/garage-01", "Entretien, diagnostic et réparation multimarque."],
  ["/sites/garage-01/services", "SERVICES"],
  ["/sites/garage-01/atelier", "L’ATELIER"],
  ["/sites/garage-01/realisations", "RÉALISATIONS"],
  ["/sites/garage-01/contact", "NOUS TROUVER"],
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

const home = await (await fetch(`${base}/sites/garage-01`)).text();
for (const href of [
  "/sites/garage-01/services",
  "/sites/garage-01/atelier",
  "/sites/garage-01/realisations",
  "/sites/garage-01/contact",
]) {
  if (!home.includes(`href="${href}"`)) throw new Error(`home missing ${href}`);
}

for (const marker of ["BAIE 01", "Garage multimarque", "VOIR LES SERVICES"]) {
  if (!home.includes(marker)) throw new Error(`home missing industrial marker ${marker}`);
}

const category = await (await fetch(`${base}/categories/garage`)).text();
if (!category.includes('data-site-card="garage-01"')) throw new Error("garage category missing Atelier Noir card");

const requireAvailable = process.env.GARAGE01_REQUIRE_AVAILABLE === "1";
if (requireAvailable) {
  if (!category.includes('garage-01-home.webp')) throw new Error("Atelier Noir preview missing from garage category");
  const fs = await import("node:fs");
  if (!fs.existsSync("public/previews/garage-01-home.webp")) throw new Error("Atelier Noir preview file missing");
}

console.log("Atelier Noir industrial smoke contract passed.");
