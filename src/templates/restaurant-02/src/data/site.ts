import type { District88SiteData } from "@/src/templates/restaurant-02/types";

const image = (id: string, alt: string, caption: string, aspect: "square" | "landscape" | "portrait", focalPosition = "center") => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=88`,
  alt,
  caption,
  aspect,
  focalPosition,
});

export const district88Site: District88SiteData = {
  business: {
    name: "District 88",
    descriptor: "Street kitchen / Bruxelles",
    city: "Bruxelles",
  },
  colors: {
    ink: "#090909",
    paper: "#F1EFE6",
    acid: "#EFFF00",
    red: "#FF3B30",
    white: "#FFFFFF",
    muted: "#77736B",
  },
  contact: {
    address: "88 Rue du Canal, 1000 Bruxelles — Adresse de démonstration",
    phone: "+32 2 555 08 88",
    email: "eat@district88.example",
    access: "Métro Yser · 6 min à pied · accès fictif",
  },
  hours: [
    { days: "Lun — Jeu", hours: "12:00 — 22:30" },
    { days: "Ven — Sam", hours: "12:00 — 00:00" },
    { days: "Dim", hours: "13:00 — 21:30" },
  ],
  social: {
    instagram: "@district88.demo",
  },
  seo: {
    title: "District 88 — Street kitchen / Bruxelles",
    description: "Démo fictive d’une street kitchen bruxelloise au langage graphique Poster Riot.",
  },
  hero: {
    headline: "EAT LOUD.",
    image: image(
      "photo-1785304968074-c04e671ed7d6",
      "Burger généreux tenu à la main au-dessus d’une table métallique, photographié au flash",
      "SMASH / AFTER DARK",
      "portrait",
      "center 45%",
    ),
    ticket: "OPEN LATE / NO QUIET FOOD",
  },
  navigation: [
    { label: "01 Menu", href: "/sites/restaurant-02/menu" },
    { label: "02 Concept", href: "/sites/restaurant-02/concept" },
    { label: "03 Galerie", href: "/sites/restaurant-02/galerie" },
    { label: "04 Contact", href: "/sites/restaurant-02/contact" },
  ],
  manifesto: {
    strapline: "HOT. FAST. MESSY. GOOD.",
    lines: [
      "Feu fort. Croûte nette. Centre juteux.",
      "Sauces montées chaque jour, pas de demi-mesure.",
      "À manger avec les mains. Les serviettes sont là pour une raison.",
    ],
  },
  gallery: [
    image("photo-1568901346375-23c9450c58cd", "Cheeseburger serré en gros plan", "DOUBLE / 22:14", "square"),
    image("photo-1541592106381-b31e9677c0e5", "Frites dorées servies très chaudes", "FRIES / SALT", "portrait"),
    image("photo-1550547660-d9450f859349", "Burger et accompagnement sur une table de diner", "TABLE 08", "landscape"),
    image("photo-1576107232684-1279f390859f", "Poulet frit croustillant servi en street food", "FRIED / CRUNCH", "portrait"),
    image("photo-1594212699903-ec8a3eca50f5", "Burger empilé avec fromage fondu", "STACK / 88", "square"),
    image("photo-1565299624946-b28f40a0ae38", "Plat chaud partagé sur une table de restauration rapide", "PASS / HOT", "landscape"),
    image("photo-1771308457742-a8a609a2fdde", "Cuisinier en plein service dans une cuisine professionnelle", "KITCHEN / 23:02", "landscape", "center 48%"),
    image("photo-1571805618149-3a772570ebcd", "Deux burgers et des frites servis sur un plateau", "NIGHT / SERVICE", "square", "center 50%"),
    image("photo-1644940733241-d2512327ed2b", "Burger au poulet frit tenu à la main", "LAST CALL", "portrait", "center 42%"),
  ],
  concept: {
    intro: "Une cuisine courte, construite autour du feu, du croustillant et de sauces franches. Pas de folklore : juste du goût et du rythme.",
    principles: [
      { title: "HEAT", text: "Plaque très chaude, saisie rapide et service immédiat." },
      { title: "TEXTURE", text: "Toujours un contraste : croûte, pickles, slaw ou friture." },
      { title: "SAUCE", text: "Une sauce doit avoir une raison d’être. Acidité, gras ou épice — jamais du décor." },
    ],
    rule: "Chaque commande quitte le pass quand le dernier élément est prêt. Personne n’attend qu’une photo soit prise.",
    kitchenImage: image("photo-1771308457742-a8a609a2fdde", "Cuisinier en plein service dans une cuisine professionnelle", "THE PASS", "landscape", "center 48%"),
  },
  demoDisclosure: "District 88 est une marque fictive créée pour cette démonstration de portfolio.",
};
