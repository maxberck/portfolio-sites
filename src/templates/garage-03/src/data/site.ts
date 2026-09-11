export const relais24Site = {
  business: {
    name: "Relais 24",
    descriptor: "Assistance routière & diagnostic rapide",
    mark: "R24",
  },
  navigation: [
    { label: "Accueil", href: "/sites/garage-03" },
    { label: "Dépannage", href: "/sites/garage-03/depannage" },
    { label: "Diagnostic", href: "/sites/garage-03/diagnostic" },
    { label: "Remorquage", href: "/sites/garage-03/remorquage" },
    { label: "Contact", href: "/sites/garage-03/contact" },
  ],
  hero: {
    eyebrow: "Bruxelles · Assistance routière",
    title: "Bloqué sur la route ? On commence par comprendre la panne.",
    body: "Batterie, démarrage, panne moteur, incident de roue ou véhicule immobilisé : Relais 24 organise une intervention claire, puis le remorquage quand la réparation sur place n’est pas réaliste.",
    image: {
      src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2000&q=88",
      alt: "Technicien automobile intervenant sur un véhicule",
      width: 2000,
      height: 1333,
    },
  },
  services: [
    {
      code: "INT / 01",
      title: "Batterie",
      text: "Contrôle de tension, aide au démarrage et première vérification du circuit de charge avant de décider de la suite.",
      status: "SUR PLACE",
    },
    {
      code: "INT / 02",
      title: "Panne moteur",
      text: "Lecture du symptôme, contrôles simples et décision rapide entre dépannage possible, immobilisation ou transfert vers un atelier.",
      status: "DIAGNOSTIC",
    },
    {
      code: "INT / 03",
      title: "Incident roue",
      text: "Crevaison, roue endommagée ou impossibilité de repartir : sécurisation et solution adaptée à la situation réelle du véhicule.",
      status: "SUR PLACE",
    },
    {
      code: "INT / 04",
      title: "Remorquage",
      text: "Prise en charge d’un véhicule immobilisé et transport vers un atelier ou un lieu de dépôt défini avec le conducteur.",
      status: "TRANSPORT",
    },
    {
      code: "INT / 05",
      title: "Diagnostic rapide",
      text: "Un contrôle orienté par le symptôme pour déterminer la prochaine action sans promettre une réparation complète au bord de la route.",
      status: "CONTRÔLE",
    },
  ],
  process: [
    { code: "01", label: "Appel", text: "On identifie le véhicule, le symptôme et les conditions autour de l’immobilisation." },
    { code: "02", label: "Localisation", text: "La zone et l’accès servent à choisir le type d’intervention adapté, sans faux suivi GPS." },
    { code: "03", label: "Diagnostic", text: "Sur place, les contrôles cherchent à comprendre si le véhicule peut repartir de manière raisonnable." },
    { code: "04", label: "Action", text: "Dépannage simple si possible, sinon sécurisation et remorquage vers la suite la plus logique." },
  ],
  breakdownTypes: [
    {
      code: "D01",
      title: "Démarrage & batterie",
      text: "Batterie faible, véhicule qui ne lance plus ou démarrage irrégulier. Le contrôle évite de confondre batterie, alternateur et autre défaut électrique.",
      outcome: "Intervention sur place possible selon le contrôle.",
    },
    {
      code: "D02",
      title: "Incident pneumatique",
      text: "Crevaison, valve ou roue endommagée. L’objectif est d’abord de sécuriser la situation et de vérifier si une remise en route simple est possible.",
      outcome: "Sur place si le véhicule et l’équipement le permettent.",
    },
    {
      code: "D03",
      title: "Voyant & panne moteur",
      text: "Voyant, perte de puissance, calage ou bruit inhabituel : quelques contrôles orientent la décision sans remplacer un diagnostic d’atelier complet.",
      outcome: "Remorquage si continuer présente un risque ou si la cause reste incertaine.",
    },
    {
      code: "D04",
      title: "Véhicule immobilisé",
      text: "Quand la remise en route n’est pas réaliste, on passe directement à une prise en charge propre plutôt que de multiplier les essais inutiles.",
      outcome: "Remorquage vers un atelier ou point de dépôt convenu.",
    },
  ],
  diagnosticSteps: [
    { code: "01", label: "Symptôme", text: "Ce que le conducteur observe : voyant, bruit, calage, perte de puissance, démarrage difficile ou vibration." },
    { code: "02", label: "Contrôle", text: "Vérifications visuelles, électriques ou électroniques choisies selon le symptôme et le contexte." },
    { code: "03", label: "Décision", text: "Repartir, effectuer une action simple sur place, ou immobiliser le véhicule pour éviter d’aggraver la panne." },
    { code: "04", label: "Suite", text: "Si nécessaire, le véhicule est orienté vers un atelier pour un diagnostic plus poussé et une réparation durable." },
  ],
  towingCases: [
    "Panne moteur qui ne permet pas une remise en route sûre",
    "Dommage de roue ou de train roulant incompatible avec la circulation",
    "Défaut électrique persistant après les contrôles de base",
    "Véhicule immobilisé après incident ou panne inconnue",
  ],
  contact: {
    phone: "+32 2 000 24 24",
    email: "assistance@relais24.example",
    location: "Zone de démonstration · Bruxelles et proche périphérie",
    note: "Coordonnées fictives utilisées uniquement pour cette démonstration de portfolio.",
  },
  hours: [
    { days: "Lundi — vendredi", hours: "07:00 — 21:00" },
    { days: "Samedi", hours: "08:00 — 20:00" },
    { days: "Dimanche", hours: "09:00 — 18:00" },
  ],
  images: {
    roadside: {
      src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1800&q=86",
      alt: "Intervention mécanique sur un véhicule automobile",
      width: 1800,
      height: 1200,
    },
    diagnostic: {
      src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1800&q=86",
      alt: "Mécanicien contrôlant un véhicule",
      width: 1800,
      height: 1200,
    },
    transport: {
      src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=86",
      alt: "Véhicule automobile prêt à être pris en charge",
      width: 1800,
      height: 1200,
    },
  },
  demoDisclosure: "Relais 24 est un service fictif créé comme démonstration de portfolio. Les coordonnées, zones d’intervention et exemples sont illustratifs.",
  seo: {
    title: "Relais 24 — Assistance routière & diagnostic rapide",
    description: "Démonstration d’un site vitrine d’assistance routière à Bruxelles : batterie, panne moteur, diagnostic rapide et remorquage.",
  },
} as const;
