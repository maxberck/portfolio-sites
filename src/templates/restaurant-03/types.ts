export type TerraImage = {
  src: string;
  alt: string;
  caption?: string;
  aspect: "landscape" | "portrait" | "square";
  focalPosition?: string;
};

export type TerraNavigationItem = {
  label: string;
  href: string;
};

export type TerraMenuItem = {
  name: string;
  description: string;
  price: string;
  marker?: string;
};

export type TerraMenuCategory = {
  name: string;
  items: TerraMenuItem[];
};

export type TerraSiteData = {
  business: {
    name: string;
    descriptor: string;
    city: string;
  };
  colors: {
    stone: string;
    ink: string;
    terracotta: string;
    olive: string;
    sun: string;
    cream: string;
    muted: string;
  };
  seo: {
    title: string;
    description: string;
  };
  contact: {
    address: string;
    phone: string;
    email: string;
    access: string;
  };
  hours: Array<{ days: string; hours: string }>;
  social: { instagram: string };
  navigation: TerraNavigationItem[];
  hero: {
    headline: string;
    copy: string;
    primaryImage: TerraImage;
    portraitImage: TerraImage;
    detailImage: TerraImage;
  };
  season: {
    note: string;
    ingredients: string[];
  };
  sharedPlates: Array<{
    name: string;
    description: string;
    price: string;
    image: TerraImage;
  }>;
  market: {
    title: string;
    body: string;
    ingredients: string[];
    image: TerraImage;
  };
  roomImages: TerraImage[];
  table: {
    intro: string;
    principles: Array<{ title: string; text: string }>;
    heroImage: TerraImage;
    detailImages: TerraImage[];
    note: string;
  };
  gallery: TerraImage[];
  contactImage: TerraImage;
  demoDisclosure: string;
};
