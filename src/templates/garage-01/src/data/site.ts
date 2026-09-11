export const atelierNoirSite = {
  business: {
    name: "Atelier Noir",
    descriptor: "Garage multimarque",
    mark: "AN",
  },
  navigation: [
    { label: "Accueil", href: "/sites/garage-01" },
    { label: "Services", href: "/sites/garage-01/services" },
    { label: "Atelier", href: "/sites/garage-01/atelier" },
    { label: "Réalisations", href: "/sites/garage-01/realisations" },
    { label: "Contact", href: "/sites/garage-01/contact" },
  ],
  hero: {
    eyebrow: "Garage multimarque · Bruxelles",
    title: "Entretien, diagnostic et réparation multimarque.",
    body: "Une prise en charge claire pour les voitures de tous les jours : révision, freinage, pneumatiques, climatisation, diagnostic et mécanique courante.",
    image: {
      src: "https://images.unsplash.com/photo-1723099971299-3789db53604c?auto=format&fit=crop&w=1900&q=86",
      alt: "Véhicule installé sur un pont élévateur dans un atelier automobile",
      width: 1900,
      height: 1267,
    },
  },
  services: [
    { code: "BAIE 01", title: "Entretien & révision", text: "Vidange, filtres, niveaux et points de contrôle selon le plan d’entretien du véhicule." },
    { code: "BAIE 02", title: "Diagnostic", text: "Lecture des défauts, contrôle des valeurs et recherche de panne avant remplacement de pièces." },
    { code: "BAIE 03", title: "Freinage", text: "Contrôle de l’usure, disques, plaquettes, liquide de frein et vérification du comportement." },
    { code: "BAIE 04", title: "Pneumatiques", text: "Montage, équilibrage, pression, usure et contrôle visuel du train roulant." },
    { code: "BAIE 05", title: "Climatisation", text: "Contrôle de fonctionnement, température de soufflage et entretien du circuit selon besoin." },
    { code: "BAIE 06", title: "Mécanique courante", text: "Batterie, refroidissement, courroies et organes courants contrôlés à partir du symptôme constaté." },
  ],
  contact: {
    phone: "+32 2 000 00 00",
    email: "atelier@ateliernoir.example",
    location: "Bruxelles Ouest · 1070 Bruxelles · Adresse de démonstration",
    access: "Accès atelier illustratif. Les coordonnées sont fictives et servent uniquement à cette démonstration de portfolio.",
  },
  hours: [
    { days: "Lundi — vendredi", hours: "08:00 — 18:00" },
    { days: "Samedi", hours: "09:00 — 13:00" },
    { days: "Dimanche", hours: "Fermé" },
  ],
  images: {
    workshop: {
      src: "https://images.unsplash.com/photo-1766650189458-bb0e7969ba5d?auto=format&fit=crop&w=1600&q=84",
      alt: "Techniciens travaillant au milieu d’outils et de pièces dans un atelier automobile",
      width: 1600,
      height: 1067,
    },
    engine: {
      src: "https://images.unsplash.com/photo-1760317890359-4e6bb111e501?auto=format&fit=crop&w=1500&q=84",
      alt: "Train avant d’une voiture démonté pour contrôle dans un atelier automobile",
      width: 1500,
      height: 1000,
    },
    car: {
      src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=84",
      alt: "Automobile sombre photographiée de profil",
      width: 1600,
      height: 1067,
    },
    detail: {
      src: "https://images.unsplash.com/photo-1760317890314-e964ffd7e6a6?auto=format&fit=crop&w=1400&q=84",
      alt: "Disque et étrier de frein automobile vus de près",
      width: 1400,
      height: 933,
    },
  },
  demoDisclosure: "Atelier Noir est un garage fictif créé pour une démonstration de portfolio. Prestations, coordonnées et cas présentés sont illustratifs.",
  seo: {
    title: "Atelier Noir — Garage multimarque à Bruxelles",
    description: "Démonstration d’un site vitrine de garage multimarque : entretien, diagnostic, freinage, pneumatiques, climatisation et mécanique courante.",
  },
} as const;
