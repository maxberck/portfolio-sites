export type LuckyImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type LuckyNavItem = {
  label: string;
  href: string;
};

export type LuckyFlashSheet = {
  id: string;
  number: string;
  title: string;
  artist: string;
  note: string;
  availability: string;
  image: LuckyImageAsset;
  detailImage?: LuckyImageAsset;
};

export type LuckyArtist = {
  slug: string;
  name: string;
  specialty: string;
  bio: string;
  portrait: LuckyImageAsset;
  sheetIds: string[];
};

export type LuckyHoursRow = {
  days: string;
  hours: string;
};
