export const torqueWorksSite = {
  business: {
    name: "Torque Works",
    descriptor: "Mécanique générale & diagnostic",
    mark: "TW",
  },
  navigation: [
    { label: "Accueil", href: "/sites/garage-02" },
    { label: "Interventions", href: "/sites/garage-02/interventions" },
    { label: "Diagnostic", href: "/sites/garage-02/diagnostic" },
    { label: "Atelier", href: "/sites/garage-02/atelier" },
    { label: "Contact", href: "/sites/garage-02/contact" },
  ],
  hero: {
    eyebrow: "Bruxelles · Atelier de mécanique générale",
    title: "On répare ce qui doit l’être.",
    body: "Distribution, embrayage, suspension, échappement et recherche de panne. Ici, le diagnostic sert à trouver la cause avant de commander des pièces.",
    image: {
      src: "https://images.unsplash.com/photo-1727893119356-1702fe921cf9?auto=format&fit=crop&w=1800&q=88",
      alt: "Mécaniciens travaillant sur des véhicules dans un atelier automobile lumineux",
      width: 1800,
      height: 1200,
    },
  },
  interventions: [
    {
      code: "MEC / DIST",
      title: "Distribution",
      text: "Contrôle des échéances, remplacement de courroie ou kit selon préconisation, inspection des galets et de la pompe à eau quand le montage l’exige.",
    },
    {
      code: "MEC / EMB",
      title: "Embrayage",
      text: "Diagnostic du patinage, des vibrations ou des bruits avant intervention sur embrayage, butée ou volant moteur.",
    },
    {
      code: "TRAIN / SUS",
      title: "Suspension",
      text: "Amortisseurs, ressorts, rotules, silentblocs et éléments de train roulant contrôlés à partir du symptôme et de l’usure constatée.",
    },
    {
      code: "MOT / ECH",
      title: "Échappement",
      text: "Recherche de fuite, contrôle des fixations, silencieux et éléments du système d’échappement avant remplacement ciblé.",
    },
    {
      code: "DIAG / PANNE",
      title: "Recherche de panne",
      text: "Lecture des défauts, mesures électriques ou mécaniques et contrôle des organes concernés pour remonter à la cause réelle.",
    },
    {
      code: "MEC / REF",
      title: "Refroidissement",
      text: "Contrôle du circuit, durites, thermostat, radiateur et fuites quand une surchauffe ou une perte de liquide apparaît.",
    },
  ],
  diagnosticSteps: [
    { label: "Symptôme", text: "On part de ce que le véhicule fait réellement : bruit, voyant, perte de puissance, vibration ou démarrage difficile." },
    { label: "Mesure", text: "Lecture défaut, tension, pression, jeu, température ou contrôle visuel selon le problème rencontré." },
    { label: "Cause", text: "La pièce n’est proposée qu’une fois la cause suffisamment isolée pour éviter le remplacement au hasard." },
    { label: "Action", text: "L’intervention est expliquée avec les éléments concernés et les contrôles à refaire après remontage." },
  ],
  contact: {
    phone: "+32 2 000 02 02",
    email: "atelier@torqueworks.example",
    location: "Bruxelles Nord · 1030 Bruxelles · Adresse de démonstration",
    access: "Accès atelier fictif, prévu uniquement pour cette démonstration de portfolio.",
  },
  hours: [
    { days: "Lundi — vendredi", hours: "07:30 — 18:00" },
    { days: "Samedi", hours: "08:30 — 13:00" },
    { days: "Dimanche", hours: "Fermé" },
  ],
  images: {
    diagnostic: {
      src: "https://images.unsplash.com/photo-1771340012319-0b4fca008b54?auto=format&fit=crop&w=1600&q=86",
      alt: "Mécanicien intervenant sur un moteur dans un atelier automobile",
      width: 1600,
      height: 1100,
    },
    workshop: {
      src: "https://images.unsplash.com/photo-1702146713922-613313be011d?auto=format&fit=crop&w=1600&q=86",
      alt: "Roue, outils et activité d’un atelier de réparation automobile",
      width: 1600,
      height: 1100,
    },
    engine: {
      src: "https://images.unsplash.com/photo-1570762574105-907bd9e42571?auto=format&fit=crop&w=1600&q=84",
      alt: "Détail mécanique d’un moteur automobile",
      width: 1600,
      height: 1100,
    },
  },
  demoDisclosure: "Torque Works est un garage fictif créé comme démonstration de portfolio. Les prestations, coordonnées et exemples sont illustratifs.",
  seo: {
    title: "Torque Works — Mécanique générale & diagnostic",
    description: "Démonstration d’un site vitrine pour un atelier de mécanique générale à Bruxelles : distribution, embrayage, suspension, échappement et recherche de panne.",
  },
} as const;
