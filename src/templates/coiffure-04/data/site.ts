import type {
  ChromaticFamily,
  ChromaticHoursRow,
  ChromaticImageData,
  ChromaticMapStage,
  ChromaticNavItem,
  ChromaticWorkEntry,
} from "../types";

const image = (src: string, alt: string, width: number, height: number, ref: string): ChromaticImageData => ({
  src,
  alt,
  width,
  height,
  ref,
});

const images = {
  blonde: image(
    "https://images.unsplash.com/photo-1768363530219-2db2db454b46?auto=format&fit=crop&w=1800&q=88",
    "Travail précis sur une chevelure claire dans un salon contemporain",
    1800,
    2200,
    "BL-01",
  ),
  copper: image(
    "https://images.unsplash.com/photo-1707979577466-2d6109c68a45?auto=format&fit=crop&w=1800&q=88",
    "Texture et finition brillante sur une chevelure travaillée",
    1800,
    2200,
    "CP-02",
  ),
  vivid: image(
    "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=1800&q=88",
    "Travail de mèches et de couleur sur une chevelure en salon",
    1800,
    2200,
    "VV-03",
  ),
  correction: image(
    "https://images.unsplash.com/photo-1750263147685-1bee1cdb8c44?auto=format&fit=crop&w=1800&q=88",
    "Consultation couleur entre une cliente et une professionnelle de la coiffure",
    1800,
    1400,
    "CR-04",
  ),
  process: image(
    "https://images.unsplash.com/photo-1761839256791-6a93f89fb8b0?auto=format&fit=crop&w=1800&q=88",
    "Préparation technique avant un service de couleur",
    1800,
    2200,
    "PX-05",
  ),
  studio: image(
    "https://images.unsplash.com/photo-1781450090585-1a511b7066d9?auto=format&fit=crop&w=2000&q=88",
    "Intérieur lumineux d'un salon contemporain avec fauteuils et miroirs",
    2000,
    1400,
    "ST-06",
  ),
};

export const chromaticSite = {
  business: {
    name: "Chromatic",
    descriptor: "Creative Color Studio",
  },
  navigation: [
    { index: "00", label: "Home", href: "/sites/coiffure-04" },
    { index: "01", label: "Color", href: "/sites/coiffure-04/color" },
    { index: "02", label: "Studio", href: "/sites/coiffure-04/studio" },
    { index: "03", label: "Work", href: "/sites/coiffure-04/work" },
    { index: "04", label: "Contact", href: "/sites/coiffure-04/contact" },
  ] satisfies ChromaticNavItem[],
  hero: {
    words: ["CHRO", "MATIC"],
    intro: "Un studio couleur fictif où la nuance, le placement et la matière deviennent un langage graphique.",
    meta: ["BRUXELLES / DEMO", "COLOR LAB / 04", "TONE · PLACEMENT · CARE"],
  },
  families: [
    {
      code: "01",
      slug: "blonde",
      name: "BLONDE",
      accent: "paper",
      description: "Éclaircir sans effacer la matière : contraste, lumière et tonalité construits selon la base.",
      services: ["Tonal blonde", "Lived-in blonde", "Face light"],
      note: "Entretien indicatif · diagnostic avant tout éclaircissement.",
      image: images.blonde,
    },
    {
      code: "02",
      slug: "copper",
      name: "COPPER",
      accent: "tangerine",
      description: "Rouges, cuivres et tons chauds pensés pour garder profondeur et vibration.",
      services: ["Copper refresh", "Dimensional copper", "Gloss chaud"],
      note: "Reflet et fréquence d'entretien présentés à titre illustratif.",
      image: images.copper,
    },
    {
      code: "03",
      slug: "vivid",
      name: "VIVID",
      accent: "fuchsia",
      description: "Placement créatif, panneaux et contrastes francs pour une couleur construite comme une composition.",
      services: ["Vivid placement", "Creative panels", "Tone overlay"],
      note: "Projet créatif fictif · faisabilité dépendante de la base réelle.",
      image: images.vivid,
    },
    {
      code: "04",
      slug: "correction",
      name: "CORRECTION",
      accent: "blue",
      description: "Lire l'historique, stabiliser la base et définir une trajectoire plutôt que promettre un résultat instantané.",
      services: ["Color consultation", "Tonal reset", "Correction plan"],
      note: "Aucune promesse de transformation : contenu de démonstration uniquement.",
      image: images.correction,
    },
  ] satisfies ChromaticFamily[],
  colorMap: [
    {
      index: "01",
      name: "DIAGNOSIS",
      code: "D / READ",
      description: "Observer historique, porosité, profondeur et objectif avant de définir le travail.",
      swatches: [
        { label: "BASE 05", value: "#725444" },
        { label: "BASE 07", value: "#B18A64" },
      ],
    },
    {
      index: "02",
      name: "BASE",
      code: "B / BUILD",
      description: "Choisir ce qui doit être conservé, éclairci, neutralisé ou reconstruit.",
      swatches: [
        { label: "NATURAL", value: "#D3B28D" },
        { label: "LIFT", value: "#E8D4A5" },
      ],
    },
    {
      index: "03",
      name: "TONE",
      code: "T / SHIFT",
      description: "Régler température, saturation et contraste pour donner la direction finale.",
      swatches: [
        { label: "PINK 04", value: "#FF3EA5" },
        { label: "BLUE 06", value: "#2F5BFF" },
      ],
    },
    {
      index: "04",
      name: "CARE",
      code: "C / HOLD",
      description: "Prévoir lavage, chaleur, protection et rythme de rafraîchissement de la nuance.",
      swatches: [
        { label: "CARE 01", value: "#C8FF36" },
        { label: "RESET", value: "#F4F0E8" },
      ],
    },
  ] satisfies ChromaticMapStage[],
  studio: {
    intro: "Le studio est imaginé comme un laboratoire visuel : références, lecture de la base, placement, saturation puis entretien.",
    principles: [
      { index: "01", title: "REFERENCE", text: "Définir une direction visuelle et ce qui compte réellement dans l'image de départ." },
      { index: "02", title: "UNDERTONE", text: "Lire la chaleur, la profondeur et les traces d'anciens services avant de choisir une trajectoire." },
      { index: "03", title: "PLACEMENT", text: "Distribuer lumière et couleur selon la coupe, le mouvement et la repousse attendue." },
      { index: "04", title: "MAINTAIN", text: "Expliquer ce qui bougera avec le temps et comment préserver le reflet sans surpromesse." },
    ],
  },
  work: [
    { ref: "W-01", family: "BLONDE", shade: "SAND / 08", image: images.blonde },
    { ref: "W-02", family: "COPPER", shade: "EMBER / 06", image: images.copper },
    { ref: "W-03", family: "VIVID", shade: "PINK / 04", image: images.vivid },
    { ref: "W-04", family: "CORRECTION", shade: "RESET / 05", image: images.correction },
    { ref: "W-05", family: "PROCESS", shade: "BASE / READ", image: images.process },
    { ref: "W-06", family: "STUDIO", shade: "SPACE / 01", image: images.studio },
  ] satisfies ChromaticWorkEntry[],
  contact: {
    address: "Rue Pigment 24 · 1000 Bruxelles · adresse fictive",
    phone: "+32 2 000 04 04",
    email: "hello@chromatic-studio.example",
    access: "Coordonnées et horaires créés uniquement pour cette démonstration portfolio.",
  },
  hours: [
    { days: "MARDI–VENDREDI", hours: "10:00–19:00" },
    { days: "SAMEDI", hours: "09:30–17:30" },
    { days: "DIMANCHE–LUNDI", hours: "FERMÉ" },
  ] satisfies ChromaticHoursRow[],
  images,
  demoDisclosure: "Chromatic est un studio fictif créé comme démonstration de design. Images, services, horaires et coordonnées sont illustratifs.",
  seo: {
    title: "Chromatic — Creative Color Studio · Démo portfolio",
    description: "Démonstration d'un site Color Lab éditorial pour un studio de coloration créative fictif.",
  },
};
