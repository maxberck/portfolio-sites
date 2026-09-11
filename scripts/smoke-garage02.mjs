const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";

const pages = [
  ["/sites/garage-02", "On répare ce qui doit l’être."],
  ["/sites/garage-02/interventions", "INTERVENTIONS"],
  ["/sites/garage-02/diagnostic", "DIAGNOSTIC"],
  ["/sites/garage-02/atelier", "L’ATELIER"],
  ["/sites/garage-02/contact", "CONTACT ATELIER"],
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

const home = await (await fetch(`${base}/sites/garage-02`)).text();
for (const href of [
  "/sites/garage-02/interventions",
  "/sites/garage-02/diagnostic",
  "/sites/garage-02/atelier",
  "/sites/garage-02/contact",
]) {
  if (!home.includes(`href="${href}"`)) throw new Error(`home missing ${href}`);
}

for (const marker of ["Distribution", "Embrayage", "Suspension", "Échappement", "Recherche de panne"]) {
  if (!home.includes(marker)) throw new Error(`home missing service marker ${marker}`);
}

const category = await (await fetch(`${base}/categories/garage`)).text();
if (!category.includes('data-site-card="garage-02"')) throw new Error("garage category missing Torque Works card");

const requireAvailable = process.env.GARAGE02_REQUIRE_AVAILABLE === "1";
if (requireAvailable) {
  if (!category.includes('garage-02-home.webp')) throw new Error("Torque Works preview missing from garage category");
  const fs = await import("node:fs");
  if (!fs.existsSync("public/previews/garage-02-home.webp")) throw new Error("Torque Works preview file missing");
}

console.log("Torque Works smoke contract passed.");
