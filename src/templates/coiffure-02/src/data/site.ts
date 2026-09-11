import type { DistrictImageData, DistrictNavItem, DistrictService } from "../../types";

const image = (src: string, alt: string, width: number, height: number, label?: string, position?: string): DistrictImageData => ({
  src,
  alt,
  width,
  height,
  label,
  position,
});

export const districtCutSite = {
  seo: {
    title: "District Cut — Barber shop urbain",
    description: "Démo de barber shop urbain : coupe, fade, barbe et entretien dans un univers graphique sombre et direct.",
  },
  business: {
    name: "District Cut",
    descriptor: "Barber · fade · beard",
  },
  navigation: [
    { label: "Home", href: "/sites/coiffure-02" },
    { label: "Services", href: "/sites/coiffure-02/services" },
    { label: "Shop", href: "/sites/coiffure-02/shop" },
    { label: "Cuts", href: "/sites/coiffure-02/cuts" },
    { label: "Contact", href: "/sites/coiffure-02/contact" },
  ] satisfies DistrictNavItem[],
  contact: {
    phone: "+32 2 000 02 02",
    phoneHref: "tel:+3220000202",
    email: "hello@districtcut.example",
    emailHref: "mailto:hello@districtcut.example",
    address: "Rue du Canal 88 · Bruxelles — adresse fictive",
    shortLocation: "Canal · Bruxelles",
  },
  hours: [
    ["Mar — Ven", "10:00 — 19:00"],
    ["Sam", "09:00 — 18:00"],
    ["Dim — Lun", "Fermé"],
  ],
  hero: {
    eyebrow: "BRUSSELS BARBER / 02",
    title: "CUT CLEAN. STAY SHARP.",
    copy: "Coupes nettes, fades précis et barbe travaillée. Un shop direct, sans cérémonial inutile.",
  },
  services: [
    { code: "01", name: "FADE", description: "Dégradé progressif, contours et finition.", price: "à partir de 28 €*" },
    { code: "02", name: "BARBE", description: "Taille, lignes, finition et entretien.", price: "à partir de 18 €*" },
    { code: "03", name: "COUPE + BARBE", description: "Coupe complète et travail de barbe coordonné.", price: "à partir de 42 €*" },
    { code: "04", name: "CONTOURS", description: "Nuque, tempes, lignes et rafraîchissement rapide.", price: "à partir de 14 €*" },
    { code: "05", name: "COUPE ENFANT", description: "Coupe simple et propre, adaptée au rythme du plus jeune.", price: "à partir de 22 €*" },
  ] satisfies DistrictService[],
  demoDisclosure: "* Tarifs, coordonnées et horaires fictifs — contenu de démonstration pour portfolio.",
  shop: {
    intro: "Un barber shop de quartier pensé autour du geste : observer la matière, poser la ligne, contrôler les volumes, finir proprement.",
    expectations: ["Consultation courte avant la coupe", "Travail précis des contours", "Conseils d’entretien simples", "Ambiance directe et sans survente"],
  },
  contactNote: "Passage libre selon l’affluence. Pour cette démo, le téléphone et l’e-mail sont fictifs et aucun rendez-vous réel n’est traité.",
  images: {
    hero: image(
      "https://images.unsplash.com/photo-1653875700322-cf550d9a52ff?auto=format&fit=crop&w=1800&q=88",
      "Barbier utilisant une tondeuse pendant une coupe",
      1200,
      1600,
      "FADE / DETAIL",
      "50% 45%",
    ),
    shop: image(
      "https://images.unsplash.com/photo-1776850476481-2bccba2e35c7?auto=format&fit=crop&w=1800&q=86",
      "Barbiers travaillant dans un salon contemporain",
      1600,
      1100,
      "SHOP FLOOR",
      "50% 55%",
    ),
    craft: image(
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1600&q=86",
      "Barbier coiffant les cheveux d’un client dans le salon",
      1200,
      1500,
      "TEXTURE",
      "50% 40%",
    ),
    night: image(
      "https://images.unsplash.com/photo-1768678218016-6bed23a35116?auto=format&fit=crop&w=1800&q=86",
      "Intérieur de barber shop avec fauteuils et clients",
      1600,
      1100,
      "AFTER HOURS",
      "50% 50%",
    ),
    front: image(
      "https://images.unsplash.com/photo-1678356164573-9a534fe43958?auto=format&fit=crop&w=1800&q=86",
      "Devanture urbaine d’un barber shop",
      1600,
      1100,
      "STREET LEVEL",
      "50% 50%",
    ),
  },
  cuts: [
    { label: "LOW FADE", imageKey: "hero" as const, note: "Dégradé bas, ligne propre et volume conservé sur le dessus." },
    { label: "TEXTURED", imageKey: "craft" as const, note: "Texture travaillée, finition naturelle et mouvement contrôlé." },
    { label: "BEARD", imageKey: "shop" as const, note: "Contours de barbe nets et volumes équilibrés." },
    { label: "CROP", imageKey: "night" as const, note: "Coupe courte structurée, facile à entretenir." },
    { label: "BUZZ", imageKey: "front" as const, note: "Longueur uniforme et contours graphiques." },
  ],
} as const;
