export type RitualNavItem = {
  index: string;
  label: string;
  href: string;
};

export type RitualImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type TattooWork = {
  id: string;
  number: string;
  title: string;
  style: "Blackwork" | "Ornamental" | "Lettering" | "Abstract";
  artist: string;
  caption: string;
  image: RitualImage;
  secondaryImage?: RitualImage;
};

export type TattooArtist = {
  slug: string;
  name: string;
  specialty: string;
  bio: string;
  portrait: RitualImage;
  workIds: string[];
};

export type RitualHoursRow = {
  days: string;
  hours: string;
};
