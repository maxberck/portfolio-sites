const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";

const pages = [
  ["/sites/garage-03", "ASSISTANCE ROUTIÈRE"],
  ["/sites/garage-03/depannage", "DÉPANNAGE"],
  ["/sites/garage-03/diagnostic", "DIAGNOSTIC"],
  ["/sites/garage-03/remorquage", "REMORQUAGE"],
  ["/sites/garage-03/contact", "CONTACT"],
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

const home = await (await fetch(`${base}/sites/garage-03`)).text();
for (const href of [
  "/sites/garage-03/depannage",
  "/sites/garage-03/diagnostic",
  "/sites/garage-03/remorquage",
  "/sites/garage-03/contact",
]) {
  if (!home.includes(`href="${href}"`)) throw new Error(`home missing ${href}`);
}

for (const marker of ["Batterie", "Panne moteur", "Remorquage", "Diagnostic rapide"]) {
  if (!home.includes(marker)) throw new Error(`home missing service marker ${marker}`);
}

const category = await (await fetch(`${base}/categories/garage`)).text();
if (!category.includes('data-site-card="garage-03"')) throw new Error("garage category missing Relais 24 card");

const requireAvailable = process.env.GARAGE03_REQUIRE_AVAILABLE === "1";
if (requireAvailable) {
  if (!category.includes("garage-03-home.webp")) throw new Error("Relais 24 preview missing from garage category");
  const fs = await import("node:fs");
  if (!fs.existsSync("public/previews/garage-03-home.webp")) throw new Error("Relais 24 preview file missing");
}

console.log("Relais 24 smoke contract passed.");
