import type { FormHoursRow, FormImageData, FormNavItem, FormService, FormServiceGroup } from "../../types";

const image = (src: string, alt: string, width: number, height: number, ref?: string): FormImageData => ({
  src,
  alt,
  width,
  height,
  ref,
});

export const formStudioSite = {
  business: {
    name: "Form Studio",
    descriptor: "Cut · Color · Style · Care",
  },
  navigation: [
    { index: "00", label: "Home", href: "/sites/coiffure-03" },
    { index: "01", label: "Services", href: "/sites/coiffure-03/services" },
    { index: "02", label: "Studio", href: "/sites/coiffure-03/studio" },
    { index: "03", label: "Work", href: "/sites/coiffure-03/work" },
    { index: "04", label: "Contact", href: "/sites/coiffure-03/contact" },
  ] satisfies FormNavItem[],
  hero: {
    title: "FORM / STUDIO",
    intro: "Un salon contemporain construit autour de la forme, de la matière et d’un entretien lisible au quotidien.",
    meta: ["BRUXELLES / DEMO", "CUT · COLOR", "SYSTEM 03"],
  },
  featuredServices: [
    { code: "01 / CUT", name: "CUT", description: "Forme, structure et mouvement selon la matière.", duration: "45–60 min · démo" },
    { code: "02 / COLOR", name: "COLOR", description: "Nuance, contraste et lumière construits avec la coupe.", duration: "60–150 min · démo" },
    { code: "03 / STYLE", name: "STYLE", description: "Coiffage précis, souple ou graphique selon le besoin.", duration: "30–50 min · démo" },
    { code: "04 / CARE", name: "CARE", description: "Soin ciblé selon l’état et le toucher de la fibre.", duration: "20–40 min · démo" },
  ] satisfies FormService[],
  serviceGroups: [
    {
      index: "01",
      title: "CUT",
      note: "Construire une ligne portable et cohérente avec la texture naturelle.",
      items: [
        { code: "C01", name: "CUT / LONG", description: "Consultation, coupe et finition.", duration: "60 min · indicatif" },
        { code: "C02", name: "CUT / SHORT", description: "Ligne courte, structure et contours.", duration: "45 min · indicatif" },
        { code: "C03", name: "RESHAPE", description: "Reconstruction de forme et équilibre des volumes.", duration: "75 min · indicatif" },
      ],
    },
    {
      index: "02",
      title: "COLOR",
      note: "Travailler le contraste et le reflet avec un entretien réaliste.",
      items: [
        { code: "K01", name: "GLOSS", description: "Reflet, neutralisation et brillance.", duration: "45 min · indicatif" },
        { code: "K02", name: "COLOR", description: "Travail de base et homogénéité.", duration: "90 min · indicatif" },
        { code: "K03", name: "LIGHT", description: "Éclaircissement placé selon la coupe.", duration: "150 min · indicatif" },
      ],
    },
    {
      index: "03",
      title: "STYLE",
      note: "Mettre en forme sans masquer le mouvement du cheveu.",
      items: [
        { code: "S01", name: "DRY / STYLE", description: "Séchage et mise en forme.", duration: "40 min · indicatif" },
        { code: "S02", name: "FINISH", description: "Finition ciblée pour un événement ou une image.", duration: "50 min · indicatif" },
      ],
    },
    {
      index: "04",
      title: "CARE",
      note: "Choisir un soin en fonction de la fibre, pas comme un automatisme.",
      items: [
        { code: "R01", name: "CARE", description: "Soin ciblé et finition.", duration: "30 min · indicatif" },
        { code: "R02", name: "RESET", description: "Diagnostic matière, soin et conseils d’entretien.", duration: "45 min · indicatif" },
      ],
    },
  ] satisfies FormServiceGroup[],
  studio: {
    lead: "La précision ne signifie pas rigidité.",
    intro: "Form Studio imagine le salon comme un espace de travail clair : observer, choisir une direction, exécuter proprement puis expliquer l’entretien.",
    principles: [
      { index: "01", title: "CONSULT", text: "Lire la densité, le mouvement, l’historique technique et les habitudes." },
      { index: "02", title: "FORM", text: "Définir une ligne qui fonctionne avec la matière et les proportions." },
      { index: "03", title: "MAINTAIN", text: "Prévoir la repousse, le coiffage quotidien et le prochain ajustement." },
    ],
  },
  contact: {
    address: "Rue du Module 21 · 1000 Bruxelles · adresse fictive",
    phone: "+32 2 000 03 03",
    email: "hello@form-studio.example",
    access: "Coordonnées et horaires créés uniquement pour cette démonstration portfolio.",
  },
  hours: [
    { days: "MARDI–VENDREDI", hours: "09:30–19:00" },
    { days: "SAMEDI", hours: "09:00–17:00" },
    { days: "DIMANCHE–LUNDI", hours: "FERMÉ" },
  ] satisfies FormHoursRow[],
  images: {
    hero: image(
      "https://images.unsplash.com/photo-1768363530219-2db2db454b46?auto=format&fit=crop&w=1600&q=85",
      "Coupe précise aux ciseaux dans un salon contemporain",
      1600,
      1800,
      "01 / FORM",
    ),
    interior: image(
      "https://images.unsplash.com/photo-1781450090585-1a511b7066d9?auto=format&fit=crop&w=1800&q=85",
      "Intérieur lumineux de salon avec fauteuils et miroirs",
      1800,
      1200,
      "02 / SPACE",
    ),
    texture: image(
      "https://images.unsplash.com/photo-1707979577466-2d6109c68a45?auto=format&fit=crop&w=1400&q=85",
      "Travail précis de texture et de finition sur les cheveux",
      1400,
      1800,
      "03 / TEXTURE",
    ),
    color: image(
      "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=1600&q=85",
      "Travail de mèches et de couleur dans un salon",
      1600,
      1800,
      "04 / COLOR",
    ),
    consult: image(
      "https://images.unsplash.com/photo-1750263147685-1bee1cdb8c44?auto=format&fit=crop&w=1600&q=85",
      "Consultation entre une cliente et une professionnelle de la coiffure",
      1600,
      1200,
      "05 / CONSULT",
    ),
    prep: image(
      "https://images.unsplash.com/photo-1761839256791-6a93f89fb8b0?auto=format&fit=crop&w=1600&q=85",
      "Préparation d’une cliente avant un service de coiffure",
      1600,
      1800,
      "06 / PROCESS",
    ),
  },
  demoDisclosure: "Form Studio est un salon fictif créé comme démonstration de design. Coordonnées, horaires et durées sont illustratifs.",
  seo: {
    title: "Form Studio — Salon contemporain · Démo portfolio",
    description: "Démonstration d’un site en grille suisse fonctionnelle pour un salon de coiffure contemporain fictif.",
  },
};
