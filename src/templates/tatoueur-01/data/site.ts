import type { RitualHoursRow, RitualNavItem, TattooArtist, TattooWork } from "../types";

export const blackRitualNavigation: RitualNavItem[] = [
  { index: "00", label: "Index", href: "/sites/tatoueur-01" },
  { index: "01", label: "Work", href: "/sites/tatoueur-01/work" },
  { index: "02", label: "Artists", href: "/sites/tatoueur-01/artists" },
  { index: "03", label: "Studio", href: "/sites/tatoueur-01/studio" },
  { index: "04", label: "Visit", href: "/sites/tatoueur-01/visit" },
];

export const tattooWorks: TattooWork[] = [
  {
    id: "thorn-field",
    number: "01",
    title: "Thorn Field",
    style: "Blackwork",
    artist: "Mara Voss",
    caption: "Dense botanical blackwork built around the shoulder line with deliberate negative space.",
    image: { src: "https://images.unsplash.com/photo-1590246814883-57c511941f43?auto=format&fit=crop&w=1200&q=85", alt: "Tattoo detail in deep black ink on an arm", width: 1200, height: 1500 },
    secondaryImage: { src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1000&q=85", alt: "Close view of a black ink tattoo session", width: 1000, height: 1200 },
  },
  {
    id: "black-sun",
    number: "02",
    title: "Black Sun",
    style: "Ornamental",
    artist: "Ilya Kern",
    caption: "A radial ornamental piece reduced to hard black fields and thin breathing lines.",
    image: { src: "https://images.unsplash.com/photo-1612459284970-e8f027596582?auto=format&fit=crop&w=1200&q=85", alt: "Black ornamental tattoo photographed in studio light", width: 1200, height: 1500 },
  },
  {
    id: "nocturne",
    number: "03",
    title: "Nocturne",
    style: "Abstract",
    artist: "Mara Voss",
    caption: "A gestural composition that follows the torso rather than sitting inside a fixed frame.",
    image: { src: "https://images.unsplash.com/photo-1560707854-fb9a10eeaace?auto=format&fit=crop&w=1200&q=85", alt: "Large abstract black tattoo on skin", width: 1200, height: 1500 },
  },
  {
    id: "vow",
    number: "04",
    title: "Vow",
    style: "Lettering",
    artist: "Niko Vale",
    caption: "Custom lettering drawn for the body first, then tightened into a compact black composition.",
    image: { src: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=85", alt: "Fine black lettering tattoo in close-up", width: 1200, height: 1500 },
  },
  {
    id: "relic",
    number: "05",
    title: "Relic",
    style: "Blackwork",
    artist: "Ilya Kern",
    caption: "Solid black geometry interrupted by rough hand-drawn marks and open skin.",
    image: { src: "https://images.unsplash.com/photo-1574540440621-48fbf0f60f9a?auto=format&fit=crop&w=1200&q=85", alt: "Geometric blackwork tattoo photographed from the side", width: 1200, height: 1500 },
  },
  {
    id: "afterimage",
    number: "06",
    title: "Afterimage",
    style: "Abstract",
    artist: "Niko Vale",
    caption: "Loose marks and sharp black interruptions arranged as a moving, unfinished-looking sequence.",
    image: { src: "https://images.unsplash.com/photo-1542727365-19732a80dcfd?auto=format&fit=crop&w=1200&q=85", alt: "Abstract black tattoo photographed against a dark background", width: 1200, height: 1500 },
  },
];

export const tattooArtists: TattooArtist[] = [
  {
    slug: "mara-voss",
    name: "Mara Voss",
    specialty: "Botanical blackwork · large scale",
    bio: "Mara builds high-contrast pieces from hand-drawn botanical forms, heavy black fields and deliberate areas of untouched skin.",
    portrait: { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1000&q=85", alt: "Tattoo artist working in a dark studio", width: 1000, height: 1250 },
    workIds: ["thorn-field", "nocturne"],
  },
  {
    slug: "ilya-kern",
    name: "Ilya Kern",
    specialty: "Ornamental · geometric blackwork",
    bio: "Ilya works from body landmarks and repetition, reducing ornamental references to precise black rhythm without decorative excess.",
    portrait: { src: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=1000&q=85", alt: "Tattoo artist preparing equipment at a studio station", width: 1000, height: 1250 },
    workIds: ["black-sun", "relic"],
  },
  {
    slug: "niko-vale",
    name: "Niko Vale",
    specialty: "Lettering · abstract marks",
    bio: "Niko combines custom lettering with rough gestural marks, treating each placement as a one-off composition rather than a repeatable flash.",
    portrait: { src: "https://images.unsplash.com/photo-1598371839873-8c5fd12c6b1c?auto=format&fit=crop&w=1000&q=85", alt: "Portrait of a tattoo artist in a monochrome studio setting", width: 1000, height: 1250 },
    workIds: ["vow", "afterimage"],
  },
];

export const ritualHours: RitualHoursRow[] = [
  { days: "Tue — Fri", hours: "11:00 — 19:00" },
  { days: "Saturday", hours: "10:00 — 18:00" },
  { days: "Sun — Mon", hours: "Closed" },
];

export const blackRitualSite = {
  business: { name: "Black Ritual", descriptor: "Blackwork Tattoo Studio", city: "Brussels" },
  navigation: blackRitualNavigation,
  contact: {
    address: "Rue de l’Encre 17 · 1000 Bruxelles · adresse fictive",
    phone: "+32 2 000 01 17",
    email: "hello@blackritual.example",
    note: "Coordonnées créées uniquement pour cette démonstration portfolio.",
  },
  manifesto: "We draw for bodies, not feeds. Every project begins with placement, movement and the amount of skin that should remain untouched.",
  process: [
    ["01", "Direction", "Send the placement, approximate scale and references that explain intent rather than a design to copy."],
    ["02", "Drawing", "The artist develops a custom composition for the selected body area and adjusts it around movement and anatomy."],
    ["03", "Session", "Placement is checked in person before tattooing. Larger pieces may be divided into several sessions."],
  ],
  seo: {
    home: { description: "Black Ritual, concept de studio de tatouage blackwork à Bruxelles : travaux sélectionnés, artistes et approche éditoriale." },
    work: { description: "Archive de tatouages Black Ritual : blackwork, ornamental, lettering et compositions abstraites." },
    artists: { description: "Découvrez les trois artistes fictifs de Black Ritual et leurs spécialités en blackwork, ornamental et lettering." },
    studio: { description: "Philosophie, processus de création et engagement d'hygiène du studio fictif Black Ritual à Bruxelles." },
    visit: { description: "Informations pratiques, horaires et coordonnées fictives du studio démo Black Ritual à Bruxelles." },
  },
} as const;
