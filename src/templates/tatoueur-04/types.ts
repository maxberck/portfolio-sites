export type StudyVariant = "edge-crop" | "quiet-page" | "split-study" | "text-led";
export type ArtistVariant = "portrait-led" | "statement-led" | "work-led";

export type MatiereImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
};

export type MatiereNavItem = {
  label: string;
  href: string;
  folio: string;
};

export type MatiereWork = {
  id: string;
  number: string;
  title: string;
  artist: string;
  focus: string;
  placement: string;
  note: string;
  variant: StudyVariant;
  image: MatiereImage;
  detailImage?: MatiereImage;
};

export type MatiereArtist = {
  id: string;
  name: string;
  focus: string;
  bio: string;
  statement: string;
  variant: ArtistVariant;
  portrait: MatiereImage;
  work: MatiereImage;
};

export type PracticeStep = {
  number: string;
  title: string;
  copy: string;
};

export type OpeningHour = {
  day: string;
  hours: string;
};

export type MatiereSeo = Record<"home" | "work" | "artists" | "studio" | "visit", {
  title: string;
  description: string;
}>;

export type MatiereSite = {
  name: string;
  descriptor: string;
  location: string;
  email: string;
  phone: string;
  address: string[];
  nav: MatiereNavItem[];
  hours: OpeningHour[];
  works: MatiereWork[];
  artists: MatiereArtist[];
  practice: PracticeStep[];
  seo: MatiereSeo;
};
