import type { SilexSiteConfig } from "../../types";

export const silexSite: SilexSiteConfig = {
  business: {
    name: "Maison Silex",
    descriptor: "Cuisine gastronomique de saison",
  },
  colors: {
    ink: "#1f1415",
    wine: "#761f2c",
    paper: "#f1e7e1",
    surface: "#fff9f5",
    butter: "#e5c76f",
    muted: "#9b817e",
    white: "#fffdf9",
  },
  navigation: [
    { label: "Accueil", href: "/sites/restaurant-01" },
    { label: "Menu", href: "/sites/restaurant-01/menu" },
    { label: "La Maison", href: "/sites/restaurant-01/maison" },
    { label: "Galerie", href: "/sites/restaurant-01/galerie" },
    { label: "Contact", href: "/sites/restaurant-01/contact" },
  ],
  hero: {
    eyebrow: "Bruxelles · Cuisine gastronomique",
    title: "Une cuisine de saison, précise et sensible.",
    body: "Une table intime où le produit, la cuisson et le geste composent une expérience sans surcharge.",
    image: {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=88",
      alt: "Assiette gastronomique dressée avec précision sur une table claire",
      width: 1800,
      height: 2250,
      caption: "Menu du soir · composition de saison",
    },
  },
  season: {
    eyebrow: "Saison actuelle",
    title: "L’automne comme matière première.",
    body: "La carte évolue autour des récoltes, des maturités et des arrivages. Chaque service conserve peu d’éléments pour laisser les produits parler.",
    ingredients: ["Céleri-rave", "Poire", "Truite", "Canard", "Noisette", "Cassis"],
  },
  chef: {
    name: "Élise Marot",
    role: "Cheffe · personnage fictif",
    quote: "Chercher la justesse avant l’effet.",
    biography: "Élise Marot imagine Maison Silex comme une table courte et attentive. Sa cuisine fictive privilégie les jus nets, les cuissons précises et une lecture immédiate du produit.",
    image: {
      src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1400&q=86",
      alt: "Cheffe en veste de cuisine dans un environnement de restaurant",
      width: 1400,
      height: 1750,
      caption: "Élise Marot · cheffe fictive de Maison Silex",
    },
  },
  maison: {
    intro: "Maison Silex est pensée comme une salle à taille humaine où cuisine, lumière et service avancent au même rythme.",
    philosophy: "La cuisine part d’un nombre volontairement réduit de produits. Les assiettes privilégient la profondeur, l’acidité, la texture et la saison plutôt que l’accumulation.",
    room: "La salle associe pierre claire, bois mat, textiles naturels et lumière basse. Le décor reste en retrait pour conserver l’attention sur la table.",
    sourcing: "Le récit d’approvisionnement met en avant maraîchers, pêche raisonnée et producteurs locaux sans revendiquer de fournisseurs réels dans cette démonstration.",
    service: "Le service se veut précis, chaleureux et discret, avec un rythme pensé pour laisser chaque séquence respirer.",
  },
  contact: {
    email: "bonjour@maisonsilex.example",
    phone: "+32 2 000 01 01",
    location: "Quartier Sainte-Catherine · 1000 Bruxelles · Adresse de démonstration",
    access: "À proximité de Sainte-Catherine. Donnée d’accès fictive pour cette démonstration.",
  },
  hours: [
    { days: "Mardi — jeudi", hours: "19:00 — 23:00" },
    { days: "Vendredi — samedi", hours: "19:00 — 23:30" },
    { days: "Dimanche — lundi", hours: "Fermé" },
  ],
  social: {
    instagram: "https://www.instagram.com/",
  },
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=86",
      alt: "Table gastronomique composée de plusieurs assiettes de saison",
      width: 1600,
      height: 1100,
      caption: "Le rythme d’un service",
    },
    {
      src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=86",
      alt: "Plat coloré dressé dans une assiette artisanale",
      width: 1400,
      height: 1750,
      caption: "Produit, jus, texture",
    },
    {
      src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=84",
      alt: "Salle de restaurant intime avec tables en bois et lumière chaude",
      width: 1600,
      height: 1067,
      caption: "Une salle volontairement intime",
    },
    {
      src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=84",
      alt: "Sélection de légumes frais préparés pour une cuisine de saison",
      width: 1400,
      height: 1750,
      caption: "La saison avant la recette",
    },
    {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5ed0c?auto=format&fit=crop&w=1600&q=84",
      alt: "Détail d’une salle de restaurant contemporaine et chaleureuse",
      width: 1600,
      height: 1067,
      caption: "Matières calmes, lumière basse",
    },
  ],
  demoDisclosure: "Maison Silex est un restaurant fictif créé comme démonstration de portfolio. Les coordonnées, horaires, équipe et contenus sont illustratifs.",
  seo: {
    title: "Maison Silex — Cuisine gastronomique de saison",
    description: "Démonstration d’un site vitrine pour une table gastronomique contemporaine à Bruxelles, centrée sur la saison, le produit et une direction éditoriale chaleureuse.",
  },
};
