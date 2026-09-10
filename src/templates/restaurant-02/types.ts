export type District88ColorKey = "ink" | "paper" | "acid" | "red" | "white" | "muted";

export interface District88NavItem {
  label: string;
  href: string;
}

export interface District88Hours {
  days: string;
  hours: string;
}

export interface District88GalleryImage {
  src: string;
  alt: string;
  caption: string;
  aspect: "square" | "landscape" | "portrait";
  focalPosition?: string;
}

export interface District88Principle {
  title: string;
  text: string;
}

export interface District88SiteData {
  business: {
    name: string;
    descriptor: string;
    city: string;
  };
  colors: Record<District88ColorKey, string>;
  contact: {
    address: string;
    phone: string;
    email: string;
    access: string;
  };
  hours: District88Hours[];
  social: {
    instagram: string;
  };
  seo: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    image: District88GalleryImage;
    ticket: string;
  };
  navigation: District88NavItem[];
  manifesto: {
    strapline: string;
    lines: string[];
  };
  gallery: District88GalleryImage[];
  concept: {
    intro: string;
    principles: District88Principle[];
    rule: string;
    kitchenImage: District88GalleryImage;
  };
  demoDisclosure: string;
}

export interface District88MenuItem {
  name: string;
  description: string;
  price: string;
  signature?: boolean;
}

export interface District88MenuSection {
  id: string;
  label: string;
  items: District88MenuItem[];
}
