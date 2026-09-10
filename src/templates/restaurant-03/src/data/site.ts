import type { TerraImage, TerraSiteData } from "@/src/templates/restaurant-03/types";

const image = (
  id: string,
  alt: string,
  aspect: TerraImage["aspect"],
  caption?: string,
  focalPosition = "center",
): TerraImage => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=88`,
  alt,
  aspect,
  caption,
  focalPosition,
});

export const terraSite: TerraSiteData = {
  business: {
    name: "Terra",
    descriptor: "Table méditerranéenne / Bruxelles",
    city: "Bruxelles",
  },
  colors: {
    stone: "#F2EBDD",
    ink: "#25241F",
    terracotta: "#B85C3D",
    olive: "#667044",
    sun: "#D7A33D",
    cream: "#FFF9EE",
    muted: "#80796D",
  },
  seo: {
    title: "Terra — Table méditerranéenne / Bruxelles",
    description: "Démo fictive d’une table méditerranéenne contemporaine à Bruxelles, pensée autour des assiettes à partager et des produits de saison.",
  },
  contact: {
    address: "31 Rue des Saisons, 1050 Bruxelles — Adresse de démonstration",
    phone: "+32 2 555 31 03",
    email: "bonjour@terra-table.example",
    access: "Tram 81 · arrêt fictif Jardin · 4 min à pied",
  },
  hours: [
    { days: "Mar — Jeu", hours: "18:00 — 23:00" },
    { days: "Ven — Sam", hours: "12:00 — 14:30 / 18:00 — 23:30" },
    { days: "Dim", hours: "12:00 — 16:00" },
  ],
  social: {
    instagram: "@terra.table.demo",
  },
  navigation: [
    { label: "Menu", href: "/sites/restaurant-03/menu" },
    { label: "La table", href: "/sites/restaurant-03/table" },
    { label: "Galerie", href: "/sites/restaurant-03/galerie" },
    { label: "Contact", href: "/sites/restaurant-03/contact" },
  ],
  hero: {
    headline: "À TABLE, AU SOLEIL.",
    copy: "Une cuisine méditerranéenne de saison, faite pour circuler au milieu de la table et se partager sans cérémonie.",
    primaryImage: image(
      "photo-1504674900247-0877df9cc836",
      "Grande table couverte de plats colorés à partager",
      "landscape",
      "LA TABLE",
      "center 58%",
    ),
    portraitImage: image(
      "photo-1540189549336-e6e99c3679fe",
      "Assiette généreuse de légumes, herbes et feuilles fraîches",
      "portrait",
      "VERT / ACIDE",
      "center 52%",
    ),
    detailImage: image(
      "photo-1498579397066-22750a3cb424",
      "Agrumes frais disposés sur une table claire",
      "square",
      "CITRON / SAISON",
      "center 48%",
    ),
  },
  season: {
    note: "En ce moment, la cuisine tourne autour de l’acidité, des herbes fraîches et des cuissons franches.",
    ingredients: ["tomate", "fenouil", "citron", "herbes"],
  },
  sharedPlates: [
    {
      name: "Aubergine brûlée",
      description: "Tahini citronné, herbes fraîches, sésame grillé.",
      price: "13 €",
      image: image(
        "photo-1547592180-85f173990554",
        "Assiette méditerranéenne de légumes rôtis et sauce crémeuse",
        "landscape",
        "FEU DOUX",
        "center 55%",
      ),
    },
    {
      name: "Poisson, citron, fenouil",
      description: "Poisson du jour, fenouil croquant, jus d’agrumes.",
      price: "24 €",
      image: image(
        "photo-1515003197210-e0cd71810b5f",
        "Plat de poisson servi avec légumes et herbes",
        "portrait",
        "MER / ACIDE",
        "center 50%",
      ),
    },
    {
      name: "Tomates & brebis",
      description: "Tomates mûres, fromage de brebis, huile d’olive, basilic.",
      price: "14 €",
      image: image(
        "photo-1769481614068-47cfb4d1f125",
        "Salade méditerranéenne de tomates, concombre, olives et fromage de brebis",
        "square",
        "À PARTAGER",
        "center 50%",
      ),
    },
  ],
  market: {
    title: "DU MARCHÉ À LA TABLE.",
    body: "La carte reste courte pour laisser de la place aux légumes, aux agrumes, aux herbes, à l’huile d’olive et aux cuissons du jour. Ici, le produit mène la composition de l’assiette.",
    ingredients: ["tomate", "fenouil", "citron", "origan", "huile d’olive"],
    image: image(
      "photo-1771659753573-e8498a262168",
      "Étal de marché rempli de légumes, herbes et produits frais",
      "portrait",
      "MARCHÉ / MATIN",
      "center 48%",
    ),
  },
  roomImages: [
    image(
      "photo-1754197529997-7775b1034632",
      "Tables de restaurant baignées dans une lumière chaude de fin de journée",
      "landscape",
      "LUMIÈRE",
      "center 52%",
    ),
    image(
      "photo-1777502286448-35389817f504",
      "Salle de restaurant aux tables et accents de bois chaleureux",
      "portrait",
      "LA SALLE",
      "center 50%",
    ),
    image(
      "photo-1528712306091-ed0763094c98",
      "Mains terminant le dressage d’un plat dans une cuisine",
      "square",
      "GESTE",
      "center 42%",
    ),
  ],
  table: {
    intro: "Terra est pensée comme une grande table : les plats arrivent quand ils sont prêts, se posent au centre et se partagent naturellement.",
    principles: [
      { title: "Partager", text: "Des assiettes de formats différents qui peuvent circuler entre tous les convives." },
      { title: "Saison", text: "Une carte courte qui change avec les légumes, les herbes et les arrivages du moment." },
      { title: "Feu", text: "Gril, four et poêle donnent du contraste sans masquer le goût du produit." },
    ],
    heroImage: image(
      "photo-1544148103-0773bf10d330",
      "Longue table conviviale dressée dans une lumière chaude",
      "landscape",
      "ENSEMBLE",
      "center 58%",
    ),
    detailImages: [
      image(
        "photo-1594195921911-f4aa05946d88",
        "Assiette estivale composée de légumes, œuf, herbes et fromage",
        "portrait",
        "ASSIETTE",
        "center 50%",
      ),
      image(
        "photo-1498579397066-22750a3cb424",
        "Agrumes et ingrédients frais sur une surface claire",
        "square",
        "SAISON",
        "center 48%",
      ),
    ],
    note: "Le service reste simple : des plats francs, une table vivante et assez d’espace pour rester longtemps.",
  },
  gallery: [
    image("photo-1504674900247-0877df9cc836", "Table remplie de plats à partager", "landscape", "TABLE / MIDI", "center 58%"),
    image("photo-1540189549336-e6e99c3679fe", "Assiette de légumes et herbes fraîches", "portrait", "VERT", "center 50%"),
    image("photo-1771659753573-e8498a262168", "Étal de marché de légumes et herbes fraîches", "square", "MARCHÉ", "center 48%"),
    image("photo-1769481614068-47cfb4d1f125", "Salade méditerranéenne de tomates, concombre, olives et fromage", "landscape", "TOMATE", "center 50%"),
    image("photo-1777502286448-35389817f504", "Salle de restaurant avec tables et bois chaleureux", "portrait", "LA SALLE", "center 50%"),
    image("photo-1754197529997-7775b1034632", "Tables de restaurant dans une lumière chaude", "square", "LUMIÈRE", "center 52%"),
    image("photo-1528712306091-ed0763094c98", "Mains au travail autour d’un plat", "landscape", "GESTE", "center 42%"),
    image("photo-1547592180-85f173990554", "Plat méditerranéen de légumes rôtis", "portrait", "FEU", "center 55%"),
    image("photo-1515003197210-e0cd71810b5f", "Assiette de poisson et légumes", "landscape", "MER", "center 50%"),
  ],
  contactImage: image(
    "photo-1552566626-52f8b828add9",
    "Intérieur de restaurant chaleureux avec tables en bois et lumière naturelle",
    "landscape",
    "TERRA / BRUXELLES",
    "center 54%",
  ),
  demoDisclosure: "Terra est une marque fictive créée pour cette démonstration de portfolio.",
};
