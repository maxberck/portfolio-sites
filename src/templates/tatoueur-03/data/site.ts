import type { LuckyArtist, LuckyFlashSheet, LuckyHoursRow, LuckyNavItem } from "../types";

export const luckyNavigation: LuckyNavItem[] = [
  { label: "Shop", href: "/sites/tatoueur-03" },
  { label: "Flash", href: "/sites/tatoueur-03/work" },
  { label: "Artists", href: "/sites/tatoueur-03/artists" },
  { label: "Story", href: "/sites/tatoueur-03/studio" },
  { label: "Visit", href: "/sites/tatoueur-03/visit" },
];

export const luckyFlashSheets: LuckyFlashSheet[] = [
  {
    id: "hearts-daggers",
    number: "01",
    title: "Hearts & Daggers",
    artist: "Rosa Kane",
    note: "Bold hearts, banners and dagger silhouettes redrawn for placement rather than copied as fixed stock flash.",
    availability: "Demo flash · custom variation",
    image: {
      src: "https://images.unsplash.com/photo-1746703509788-20c3fd0efedd?auto=format&fit=crop&w=1400&q=85",
      alt: "Tattooed person standing in front of tattoo flash art",
      width: 1400,
      height: 1750,
    },
    detailImage: {
      src: "https://images.unsplash.com/photo-1753260814170-9f77d48c016e?auto=format&fit=crop&w=1200&q=85",
      alt: "Tattooed hand cutting a stencil from a sheet of flash designs",
      width: 1200,
      height: 900,
    },
  },
  {
    id: "rose-club",
    number: "02",
    title: "Rose Club",
    artist: "Milo Hart",
    note: "Traditional rose references with open leaves, dark outlines and enough breathing room for the body to stay part of the drawing.",
    availability: "Reference only",
    image: {
      src: "https://images.unsplash.com/photo-1694216427949-5a7d32627183?auto=format&fit=crop&w=1400&q=85",
      alt: "Rose tattoo on a person's back",
      width: 1400,
      height: 1750,
    },
  },
  {
    id: "shop-tools",
    number: "03",
    title: "Needles & Noise",
    artist: "June Mercer",
    note: "A working-shop series built around hands, machines and the small rituals that happen before the needle touches skin.",
    availability: "Studio reference",
    image: {
      src: "https://images.unsplash.com/photo-1761276297688-bc67f27c2577?auto=format&fit=crop&w=1400&q=85",
      alt: "Tattoo artist preparing a tattoo machine with gloved hands",
      width: 1400,
      height: 1100,
    },
    detailImage: {
      src: "https://images.unsplash.com/photo-1761276297561-2d1ebcc94a39?auto=format&fit=crop&w=1200&q=85",
      alt: "Tattoo artist preparing tools and equipment before a session",
      width: 1200,
      height: 900,
    },
  },
  {
    id: "mom-heart",
    number: "04",
    title: "Lucky Hearts",
    artist: "Rosa Kane",
    note: "Hearts, names and short lettering treated as a loose family of references rather than a fixed one-click catalogue.",
    availability: "Demo flash · reference only",
    image: {
      src: "https://images.unsplash.com/photo-1632747888102-0f1b8520c81c?auto=format&fit=crop&w=1400&q=85",
      alt: "Traditional tattoo on an arm with a heartbeat line",
      width: 1400,
      height: 900,
    },
  },
  {
    id: "working-line",
    number: "05",
    title: "Shop Floor",
    artist: "Milo Hart",
    note: "Process photographs and bold placement studies from a fictional day on the shop floor.",
    availability: "Process archive",
    image: {
      src: "https://images.unsplash.com/photo-1761277461562-a05cb891bf17?auto=format&fit=crop&w=1400&q=85",
      alt: "Tattoo artist working on a client's arm with a tattoo machine",
      width: 1400,
      height: 1100,
    },
  },
  {
    id: "ink-glove",
    number: "06",
    title: "Black Gloves",
    artist: "June Mercer",
    note: "A compact sheet about the act of tattooing itself: machine, ink, glove and skin, arranged like a clipped shop diary.",
    availability: "Studio reference",
    image: {
      src: "https://images.unsplash.com/photo-1761276297653-00549dc7263f?auto=format&fit=crop&w=1400&q=85",
      alt: "Tattoo artist working on skin with black gloves and a tattoo machine",
      width: 1400,
      height: 1100,
    },
  },
];

export const luckyArtists: LuckyArtist[] = [
  {
    slug: "rosa-kane",
    name: "Rosa Kane",
    specialty: "Traditional · roses · lettering",
    bio: "Rosa builds bold traditional pieces from a small set of readable shapes, then redraws proportion and spacing for the exact placement.",
    portrait: {
      src: "https://images.unsplash.com/photo-1746703509788-20c3fd0efedd?auto=format&fit=crop&w=1000&q=85",
      alt: "Tattooed artist standing in front of tattoo flash art",
      width: 1000,
      height: 1250,
    },
    sheetIds: ["hearts-daggers", "mom-heart"],
  },
  {
    slug: "milo-hart",
    name: "Milo Hart",
    specialty: "Traditional · black & red · placement",
    bio: "Milo works from classic tattoo language but keeps the layouts loose enough to fit shoulders, calves and forearms without forcing the body into a rectangle.",
    portrait: {
      src: "https://images.unsplash.com/photo-1761277461562-a05cb891bf17?auto=format&fit=crop&w=1000&q=85",
      alt: "Tattoo artist working on a client's arm",
      width: 1000,
      height: 1250,
    },
    sheetIds: ["rose-club", "working-line"],
  },
  {
    slug: "june-mercer",
    name: "June Mercer",
    specialty: "Flash · small traditional · lettering",
    bio: "June likes compact flash, short lettering and simple motifs that stay readable when they are scaled down for smaller placements.",
    portrait: {
      src: "https://images.unsplash.com/photo-1761276297688-bc67f27c2577?auto=format&fit=crop&w=1000&q=85",
      alt: "Tattoo artist preparing a machine with gloved hands",
      width: 1000,
      height: 1250,
    },
    sheetIds: ["shop-tools", "ink-glove"],
  },
];

export const luckyHours: LuckyHoursRow[] = [
  { days: "Tuesday — Thursday", hours: "12:00 — 19:00" },
  { days: "Friday — Saturday", hours: "11:00 — 20:00" },
  { days: "Sunday — Monday", hours: "Closed" },
];

export const luckySite = {
  business: {
    name: "Lucky XIII",
    descriptor: "Traditional Tattoo & Flash Shop",
    city: "Brussels",
  },
  navigation: luckyNavigation,
  contact: {
    address: "Rue du Trèfle 13 · 1000 Bruxelles · adresse fictive",
    phone: "+32 2 000 13 13",
    email: "hello@luckyxiii.example",
    note: "Coordonnées fictives créées uniquement pour cette démonstration portfolio.",
  },
  opening: {
    kicker: "Brussels · Traditional tattoo",
    statement: "Bold flash, redrawn for the body. A fictional neighborhood tattoo shop built around traditional references and a working flash wall.",
    note: "Walk-ins are shown here as a visual shop convention only. This demo has no live booking or availability system.",
  },
  shopStory: "Lucky XIII is imagined as the kind of shop where the walls do most of the talking: flash pinned high, machines on the bench, names painted by hand and every drawing adjusted before it becomes a tattoo.",
  process: [
    ["01", "Pick a direction", "Bring a motif, placement and rough scale. Existing flash is treated as a starting language, not a one-click product."],
    ["02", "Redraw for placement", "Proportion, banners, leaves and lettering are adjusted so the design sits naturally on the chosen part of the body."],
    ["03", "Check the stencil", "The stencil is placed and moved until scale and orientation make sense before tattooing begins."],
    ["04", "Tattoo & aftercare", "The session follows standard studio hygiene practices and ends with general aftercare guidance appropriate to the final placement."],
  ],
  hygiene: "This fictional studio describes conservative professional hygiene practices but does not claim certifications, medical guarantees or regulatory endorsements.",
  access: "General inquiries are handled by phone or email in this demo. No appointment form or live booking service is connected.",
  seo: {
    home: { description: "Lucky XIII, concept de tattoo shop old-school à Bruxelles avec flash sheets, enseigne vintage et ambiance de boutique traditionnelle." },
    work: { description: "Flash Book fictif de Lucky XIII : roses, cœurs, dagues, lettering et références old-school présentées comme des planches imprimées." },
    artists: { description: "Découvrez les trois artistes fictifs de Lucky XIII et leurs approches du tattoo traditionnel, du flash et du lettering." },
    studio: { description: "Histoire, méthode de travail et approche du flash traditionnel du tattoo shop fictif Lucky XIII à Bruxelles." },
    visit: { description: "Horaires, adresse fictive et informations de visite du tattoo shop démo Lucky XIII à Bruxelles." },
  },
} as const;
