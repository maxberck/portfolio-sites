export const atelierNoirSite = {
  business: {
    name: "Atelier Noir",
    descriptor: "Entretien & diagnostic automobile",
    mark: "AN.",
  },
  navigation: [
    { label: "Accueil", href: "/sites/garage-01" },
    { label: "Services", href: "/sites/garage-01/services" },
    { label: "Atelier", href: "/sites/garage-01/atelier" },
    { label: "Réalisations", href: "/sites/garage-01/realisations" },
    { label: "Contact", href: "/sites/garage-01/contact" },
  ],
  hero: {
    eyebrow: "Bruxelles · Atelier automobile indépendant",
    title: "L’entretien sans décor.",
    body: "Entretien constructeur, diagnostic, freinage et pneumatiques. Une approche lisible : contrôler, expliquer, intervenir uniquement quand c’est nécessaire.",
    image: {
      src: "https://images.unsplash.com/photo-1756575527484-2839c593ed84?auto=format&fit=crop&w=1800&q=88",
      alt: "Mécanicien travaillant dans un garage automobile sombre",
      width: 1800,
      height: 1200,
    },
  },
  services: [
    { code: "M-01", title: "Entretien constructeur", text: "Vidange, filtres, niveaux et points de contrôle selon le plan d’entretien du véhicule." },
    { code: "D-02", title: "Diagnostic électronique", text: "Lecture des défauts, contrôle des valeurs et recherche de panne avant remplacement de pièces." },
    { code: "F-03", title: "Freinage", text: "Contrôle de l’usure, disques, plaquettes, liquide de frein et vérification du comportement." },
    { code: "P-04", title: "Pneumatiques", text: "Montage, équilibrage, pression, usure et contrôle visuel du train roulant." },
    { code: "C-05", title: "Climatisation", text: "Contrôle de fonctionnement, température de soufflage et entretien du circuit selon besoin." },
    { code: "V-06", title: "Pré-contrôle", text: "Inspection des points essentiels avant contrôle technique, sans promettre un résultat artificiel." },
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
      src: "https://images.unsplash.com/photo-1772233912621-f39626211d60?auto=format&fit=crop&w=1600&q=86",
      alt: "Atelier mécanique avec outils et véhicule en intervention",
      width: 1600,
      height: 1100,
    },
    engine: {
      src: "https://images.unsplash.com/photo-1570762574105-907bd9e42571?auto=format&fit=crop&w=1400&q=86",
      alt: "Détail mécanique d’un moteur automobile",
      width: 1400,
      height: 1050,
    },
    car: {
      src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=84",
      alt: "Automobile sombre photographiée de profil",
      width: 1600,
      height: 1067,
    },
    detail: {
      src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=84",
      alt: "Détail d’un véhicule dans un environnement d’atelier",
      width: 1400,
      height: 1000,
    },
  },
  demoDisclosure: "Atelier Noir est un garage fictif créé pour une démonstration de portfolio. Prestations, coordonnées et cas présentés sont illustratifs.",
  seo: {
    title: "Atelier Noir — Entretien & diagnostic automobile",
    description: "Démonstration d’un site vitrine pour un atelier automobile bruxellois spécialisé en entretien, diagnostic, freinage et pneumatiques.",
  },
} as const;
