export type GalleryNavItem = {
  label: string;
  href: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GalleryWork = {
  id: string;
  number: string;
  title: string;
  style: "Fine Line" | "Botanical" | "Micro" | "Ornamental";
  artist: string;
  caption: string;
  image: GalleryImage;
  detailImage?: GalleryImage;
};

export type GalleryArtist = {
  slug: string;
  name: string;
  specialty: string;
  bio: string;
  portrait: GalleryImage;
  workId: string;
};

export type GalleryHoursRow = {
  days: string;
  hours: string;
};
