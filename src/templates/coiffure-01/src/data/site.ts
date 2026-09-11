import type {
  MaisonEliseHoursRow,
  MaisonEliseImage,
  MaisonEliseNavItem,
  MaisonEliseServiceGroup,
} from "../../types";

const image = (
  src: string,
  alt: string,
  width: number,
  height: number,
  caption?: string,
): MaisonEliseImage => ({ src, alt, width, height, caption });

export const maisonEliseSite = {
  business: {
    name: "Maison Élise",
    descriptor: "Coiffure · couleur · soin",
  },
  colors: {
    ivory: "#F3EEE7",
    espresso: "#2B211D",
    beige: "#D7C3B6",
    burgundy: "#6A2F3C",
    white: "#FCFAF7",
    muted: "#7B716C",
  },
  navigation: [
    { label: "Accueil", href: "/sites/coiffure-01" },
    { label: "Prestations", href: "/sites/coiffure-01/prestations" },
    { label: "Maison", href: "/sites/coiffure-01/maison" },
    { label: "Galerie", href: "/sites/coiffure-01/galerie" },
    { label: "Contact", href: "/sites/coiffure-01/contact" },
  ] satisfies MaisonEliseNavItem[],
  hero: {
    eyebrow: "Maison Élise · Bruxelles",
    title: "La coupe commence par l’écoute.",
    body: "Une maison de coiffure pensée autour de la matière, du mouvement et du quotidien. Chaque rendez-vous commence par comprendre le cheveu avant de choisir le geste.",
  },
  introduction: {
    eyebrow: "Une approche sur mesure",
    title: "Chercher la ligne juste, pas une formule.",
    body: "Coupe, couleur et soin se construisent à partir de la texture, des habitudes et du résultat souhaité. Le conseil reste lisible, sans promesse spectaculaire ni protocole imposé.",
  },
  process: [
    { label: "Écouter", text: "Comprendre les habitudes, la matière et l’envie." },
    { label: "Construire", text: "Définir une ligne et une technique adaptées." },
    { label: "Travailler", text: "Couper, nuancer ou soigner avec précision." },
    { label: "Finaliser", text: "Ajuster le mouvement et expliquer l’entretien." },
  ],
  services: [
    {
      title: "Coupe & coiffage",
      intro: "La forme se pense avec le mouvement naturel du cheveu et le temps disponible au quotidien.",
      items: [
        { name: "Coupe signature", description: "Consultation, coupe et coiffage.", price: "à partir de 64 €" },
        { name: "Coupe courte", description: "Travail de ligne et finitions précises.", price: "à partir de 48 €" },
        { name: "Brushing / coiffage", description: "Mise en forme souple ou structurée.", price: "à partir de 36 €" },
      ],
    },
    {
      title: "Couleur & nuances",
      intro: "La couleur part de la base existante, du contraste recherché et de l’entretien souhaité.",
      items: [
        { name: "Patine / gloss", description: "Reflet, neutralisation et brillance.", price: "à partir de 46 €" },
        { name: "Couleur racines", description: "Reprise ciblée et homogénéité de la base.", price: "à partir de 58 €" },
        { name: "Balayage / lumière", description: "Éclaircissement placé selon la coupe et la matière.", price: "à partir de 92 €" },
      ],
    },
    {
      title: "Soin & matière",
      intro: "Des soins choisis selon la fibre et l’objectif de toucher, jamais comme une étape automatique.",
      items: [
        { name: "Soin profond", description: "Hydratation et souplesse de la fibre.", price: "à partir de 28 €" },
        { name: "Rituel matière", description: "Diagnostic, soin ciblé et finition.", price: "à partir de 38 €" },
      ],
    },
    {
      title: "Occasion / mise en beauté",
      intro: "Une construction légère qui respecte la personne, la tenue et le mouvement attendu.",
      items: [
        { name: "Attache / mise en beauté", description: "Préparation, structure et finition.", price: "à partir de 68 €" },
      ],
    },
  ] satisfies MaisonEliseServiceGroup[],
  philosophy: {
    consultation: "La consultation sert à observer la densité, le mouvement, les habitudes de coiffage et l’historique technique avant toute proposition.",
    craft: "Le geste reste au service de la matière : construire une forme portable, une nuance lisible et un entretien réaliste.",
    atmosphere: "Le salon est imaginé comme un espace calme, lumineux et précis, sans accumulation de codes luxe ou de démonstration commerciale.",
  },
  contact: {
    phone: "+32 2 000 01 01",
    email: "bonjour@maisonelise.example",
    location: "Bruxelles · adresse fictive",
    access: "Adresse et coordonnées créées pour cette démonstration portfolio.",
  },
  hours: [
    { days: "Lun–Ven", hours: "09:00–19:00" },
    { days: "Sam", hours: "09:00–17:00" },
    { days: "Dim", hours: "Fermé" },
  ] satisfies MaisonEliseHoursRow[],
  images: {
    hero: image(
      "https://images.unsplash.com/photo-1631451497670-c7fc917197cd?auto=format&fit=crop&w=1800&q=85",
      "Coiffeuse coupant les cheveux d’une cliente dans un salon",
      1600,
      2000,
      "Coupe · travail de ligne",
    ),
    detail: image(
      "https://images.unsplash.com/photo-1707979577466-2d6109c68a45?auto=format&fit=crop&w=1400&q=85",
      "Coiffeuse travaillant la matière et la texture des cheveux",
      1400,
      1800,
      "Matière · finition",
    ),
    consultation: image(
      "https://images.unsplash.com/photo-1750263147685-1bee1cdb8c44?auto=format&fit=crop&w=1600&q=85",
      "Cliente et coiffeuse échangeant avant une séance de coiffage",
      1600,
      1200,
      "Consultation · écoute",
    ),
    highlights: image(
      "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=1600&q=85",
      "Coiffeuse travaillant des mèches sur les cheveux d’une cliente",
      1600,
      1800,
      "Couleur · nuance",
    ),
    interior: image(
      "https://images.unsplash.com/photo-1781450090585-1a511b7066d9?auto=format&fit=crop&w=1800&q=85",
      "Intérieur lumineux d’un salon de coiffure avec fauteuils et miroirs",
      1800,
      1200,
      "Maison Élise · atmosphère",
    ),
    cape: image(
      "https://images.unsplash.com/photo-1761839256791-6a93f89fb8b0?auto=format&fit=crop&w=1600&q=85",
      "Coiffeuse préparant une cliente avec une cape de salon",
      1600,
      1800,
      "Préparation · service",
    ),
    precision: image(
      "https://images.unsplash.com/photo-1768363530219-2db2db454b46?auto=format&fit=crop&w=1600&q=85",
      "Coiffeur réalisant une coupe précise aux ciseaux",
      1600,
      1800,
      "Coupe · précision",
    ),
  },
  demoDisclosure: "Maison Élise est un salon fictif créé comme démonstration de design pour ce portfolio. Les coordonnées, horaires et tarifs sont illustratifs.",
  seo: {
    title: "Maison Élise — Salon de coiffure · Démo portfolio",
    description: "Démonstration d’un site éditorial pour un salon de coiffure premium fictif à Bruxelles.",
  },
};
