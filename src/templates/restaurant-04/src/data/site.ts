import type { KuroSiteConfig } from "../../types";

export const kuroSite: KuroSiteConfig = {
  business: {
    name: "Kuro",
    descriptor: "Table japonaise contemporaine",
    mark: "黒",
  },
  colors: {
    background: "#f2eee6",
    surface: "#e7e0d4",
    text: "#171512",
    muted: "#6f685f",
    primary: "#171512",
    accent: "#8f1d16",
    line: "#cfc6b8",
  },
  navigation: [
    { label: "Accueil", href: "/sites/restaurant-04" },
    { label: "Menu", href: "/sites/restaurant-04/menu" },
    { label: "Restaurant", href: "/sites/restaurant-04/restaurant" },
    { label: "Galerie", href: "/sites/restaurant-04/galerie" },
    { label: "Contact", href: "/sites/restaurant-04/contact" },
  ],
  hero: {
    eyebrow: "Bruxelles · Table japonaise contemporaine",
    title: "Précision. Saison. Silence.",
    body: "Une cuisine japonaise lisible et calme, construite autour du produit, du feu et du temps plutôt que de l'effet.",
    image: {
      src: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1600&q=88",
      alt: "Assortiment de sushi présenté avec sobriété",
      width: 1600,
      height: 2000,
    },
  },
  contact: {
    email: "bonjour@kuro.example",
    phone: "+32 2 000 00 00",
    location: "Quartier du Sablon · 1000 Bruxelles · Adresse de démonstration",
    access: "À quelques minutes à pied de l'arrêt Petit Sablon. Donnée d'accès fictive pour cette démonstration.",
  },
  hours: [
    { days: "Mardi — jeudi", hours: "18:30 — 22:30" },
    { days: "Vendredi — samedi", hours: "18:30 — 23:00" },
    { days: "Dimanche — lundi", hours: "Fermé" },
  ],
  social: {
    instagram: "https://www.instagram.com/",
  },
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=86",
      alt: "Plat japonais dressé avec des ingrédients de saison",
      width: 1400,
      height: 1750,
    },
    {
      src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=84",
      alt: "Salle de restaurant chaleureuse avec bois sombre",
      width: 1600,
      height: 1100,
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=84",
      alt: "Table dressée avec plusieurs petites assiettes",
      width: 1400,
      height: 1200,
    },
    {
      src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=84",
      alt: "Produits frais préparés en cuisine",
      width: 1400,
      height: 1750,
    },
    {
      src: "https://images.unsplash.com/photo-1516211697506-8360dbcfe9a4?auto=format&fit=crop&w=1400&q=84",
      alt: "Détail d'une préparation servie dans une vaisselle sobre",
      width: 1400,
      height: 1050,
    },
  ],
  demoDisclosure: "Kuro est un restaurant fictif créé comme démonstration de portfolio. Les coordonnées et horaires sont illustratifs.",
  seo: {
    title: "Kuro — Table japonaise contemporaine",
    description: "Démonstration d'un site vitrine pour une table japonaise contemporaine à Bruxelles, pensée autour de la saison, de la précision et d'une direction éditoriale minimale.",
  },
};
