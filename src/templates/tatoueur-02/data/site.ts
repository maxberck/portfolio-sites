import type { GalleryArtist, GalleryHoursRow, GalleryNavItem, GalleryWork } from "../types";

export const lineGalleryNavigation: GalleryNavItem[] = [
  { label: "Index", href: "/sites/tatoueur-02" },
  { label: "Work", href: "/sites/tatoueur-02/work" },
  { label: "Artists", href: "/sites/tatoueur-02/artists" },
  { label: "Studio", href: "/sites/tatoueur-02/studio" },
  { label: "Visit", href: "/sites/tatoueur-02/visit" },
];

export const galleryWorks: GalleryWork[] = [
  {
    id: "quiet-stem",
    number: "01",
    title: "Quiet Stem",
    style: "Botanical",
    artist: "Elise Rowan",
    caption: "A single botanical line following the inside of the forearm, drawn to stay light around the wrist.",
    image: { src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1200&q=85", alt: "Fine tattoo work photographed close to the skin", width: 1200, height: 1500 },
    detailImage: { src: "https://images.unsplash.com/photo-1612459284970-e8f027596582?auto=format&fit=crop&w=1000&q=85", alt: "Close detail of precise black tattoo lines", width: 1000, height: 1200 },
  },
  {
    id: "orbit",
    number: "02",
    title: "Orbit",
    style: "Fine Line",
    artist: "Noa Verne",
    caption: "A restrained circular composition placed above the elbow with thin line weight and open skin.",
    image: { src: "https://images.unsplash.com/photo-1560707854-fb9a10eeaace?auto=format&fit=crop&w=1200&q=85", alt: "Minimal black tattoo photographed against skin", width: 1200, height: 1500 },
  },
  {
    id: "small-vow",
    number: "03",
    title: "Small Vow",
    style: "Micro",
    artist: "Mina Sol",
    caption: "Compact custom lettering kept deliberately small and quiet beside the collarbone.",
    image: { src: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=85", alt: "Small black lettering tattoo photographed in close-up", width: 1200, height: 1500 },
  },
  {
    id: "thread",
    number: "04",
    title: "Thread",
    style: "Ornamental",
    artist: "Noa Verne",
    caption: "A narrow ornamental rhythm built around the natural center line rather than a fixed rectangle.",
    image: { src: "https://images.unsplash.com/photo-1574540440621-48fbf0f60f9a?auto=format&fit=crop&w=1200&q=85", alt: "Geometric black tattoo photographed from the side", width: 1200, height: 1500 },
  },
  {
    id: "after-rain",
    number: "05",
    title: "After Rain",
    style: "Botanical",
    artist: "Elise Rowan",
    caption: "Two fine stems designed around the shoulder line with most of the composition left intentionally open.",
    image: { src: "https://images.unsplash.com/photo-1542727365-19732a80dcfd?auto=format&fit=crop&w=1200&q=85", alt: "Delicate black tattoo in a dark photographic crop", width: 1200, height: 1500 },
  },
  {
    id: "mark-06",
    number: "06",
    title: "Mark 06",
    style: "Fine Line",
    artist: "Mina Sol",
    caption: "A small abstract mark refined from hand-drawn gestures and scaled for the chosen placement.",
    image: { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=85", alt: "Tattoo artist working carefully in a studio", width: 1200, height: 1500 },
  },
];

export const galleryArtists: GalleryArtist[] = [
  {
    slug: "elise-rowan",
    name: "Elise Rowan",
    specialty: "Botanical · fine line",
    bio: "Elise works with sparse botanical references, adapting stems and leaves to the direction of the body rather than tracing a fixed drawing.",
    portrait: { src: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=1000&q=85", alt: "Tattoo artist preparing a quiet studio station", width: 1000, height: 1250 },
    workId: "quiet-stem",
  },
  {
    slug: "noa-verne",
    name: "Noa Verne",
    specialty: "Fine line · ornamental",
    bio: "Noa reduces ornamental references to measured lines, small repetitions and negative space with careful attention to placement.",
    portrait: { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1000&q=85", alt: "Tattoo artist focused on a detailed tattoo session", width: 1000, height: 1250 },
    workId: "orbit",
  },
  {
    slug: "mina-sol",
    name: "Mina Sol",
    specialty: "Micro · lettering",
    bio: "Mina develops small custom marks and lettering where scale, spacing and the amount of untouched skin matter as much as the ink.",
    portrait: { src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1000&q=85", alt: "Tattoo artist working on a small black tattoo", width: 1000, height: 1250 },
    workId: "small-vow",
  },
];

export const lineGalleryHours: GalleryHoursRow[] = [
  { days: "Tuesday — Friday", hours: "11:00 — 18:30" },
  { days: "Saturday", hours: "10:00 — 17:00" },
  { days: "Sunday — Monday", hours: "Closed" },
];

export const lineGallerySite = {
  business: {
    name: "Line Gallery",
    descriptor: "Fine Line Tattoo Studio",
    city: "Brussels",
  },
  navigation: lineGalleryNavigation,
  contact: {
    address: "Rue du Trait 24 · 1000 Bruxelles · adresse fictive",
    phone: "+32 2 000 02 24",
    email: "studio@linegallery.example",
    note: "Coordonnées créées uniquement pour cette démonstration portfolio.",
  },
  statement: "Fine-line tattooing treated with the pace, spacing and attention of a small exhibition.",
  curatorNote: "A good small tattoo does not need to fill the available space. Placement, distance and line quality decide what stays in the drawing — and what is removed.",
  studioNote: "We work slowly, keep references concise and draw each piece for one placement. The result should feel resolved before it feels decorated.",
  process: [
    ["01", "Context", "Share placement, approximate scale and references that explain the feeling or subject you want to keep."],
    ["02", "Edit", "We reduce the idea until the line weight, spacing and silhouette remain clear at the chosen size."],
    ["03", "Place", "The drawing is checked on the body before tattooing and adjusted for movement, balance and negative space."],
  ],
  access: "Private studio visits are by agreed time only. This demo does not provide a live booking service.",
  seo: {
    home: { description: "Line Gallery, concept de studio de tatouage fine line à Bruxelles présenté comme une galerie blanche et un catalogue d’œuvres." },
    work: { description: "Catalogue fictif Line Gallery : fine line, botanique, micro tattoo et compositions ornementales minimalistes." },
    artists: { description: "Découvrez les trois artistes fictifs de Line Gallery et leurs approches du fine line, du botanique et du micro tattoo." },
    studio: { description: "Méthode de création, placement et approche sobre du studio fictif Line Gallery à Bruxelles." },
    visit: { description: "Horaires et coordonnées fictives du studio démo Line Gallery à Bruxelles." },
  },
} as const;
