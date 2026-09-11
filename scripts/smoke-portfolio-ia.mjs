const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";

const routes = [
  "/",
  "/templates",
  "/contact",
  "/categories/garage",
  "/categories/restaurant",
  "/categories/coiffure",
  "/categories/tatoueur",
];

const fetchHtml = async (route) => {
  const response = await fetch(`${base}${route}`);
  if (!response.ok) {
    throw new Error(`${route}: expected 200, received ${response.status}`);
  }
  return response.text();
};

const pages = new Map();
for (const route of routes) {
  pages.set(route, await fetchHtml(route));
}

const home = pages.get("/") ?? "";
const templates = pages.get("/templates") ?? "";
const contact = pages.get("/contact") ?? "";

for (const label of ["Accueil", "Templates", "Contact"]) {
  if (!home.includes(`>${label}<`)) {
    throw new Error(`Home navigation is missing ${label}`);
  }
}

if (!home.includes('data-hero-carousel="true"')) {
  throw new Error("Home hero carousel hook is missing");
}

for (const category of ["garage", "restaurant", "coiffure", "tatoueur"]) {
  if (!home.includes(`data-home-category="${category}"`)) {
    throw new Error(`Home category preview missing: ${category}`);
  }
  if (!home.includes(`/templates?category=${category}`)) {
    throw new Error(`Home category link missing: ${category}`);
  }
}

const homeCategoryCount = (home.match(/data-home-category="/g) ?? []).length;
if (homeCategoryCount !== 4) {
  throw new Error(`Expected 4 home category previews, received ${homeCategoryCount}`);
}

if (!templates.includes('data-templates-catalogue="true"')) {
  throw new Error("Templates catalogue hook is missing");
}

for (const category of ["all", "restaurant", "garage", "coiffure", "tatoueur"]) {
  if (!templates.includes(`data-template-tab="${category}"`)) {
    throw new Error(`Templates tab missing: ${category}`);
  }
}

const templateCardCount = (templates.match(/data-site-card="/g) ?? []).length;
if (templateCardCount !== 16) {
  throw new Error(`Expected 16 template cards in server HTML, received ${templateCardCount}`);
}

if (!contact.includes('data-contact-page="true"')) {
  throw new Error("Contact page hook is missing");
}

if (!contact.includes('href="mailto:maxence@ipn.be"')) {
  throw new Error("Contact page should expose the maxence@ipn.be mailto link");
}

if (!contact.includes("Me contacter")) {
  throw new Error("Contact page should label the email CTA Me contacter");
}

if (contact.includes("GitHub")) {
  throw new Error("Contact page should no longer expose GitHub as the contact path");
}

console.log("Portfolio IA smoke contract passed.");
