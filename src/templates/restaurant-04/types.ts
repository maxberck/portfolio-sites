export type KuroNavItem = {
  label: string;
  href: string;
};

export type KuroHoursRow = {
  days: string;
  hours: string;
};

export type KuroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type KuroMenuItem = {
  name: string;
  description: string;
  price: string;
  note?: string;
};

export type KuroMenuSection = {
  title: string;
  intro?: string;
  items: KuroMenuItem[];
};

export type KuroSiteConfig = {
  business: {
    name: string;
    descriptor: string;
    mark: string;
  };
  colors: {
    background: string;
    surface: string;
    text: string;
    muted: string;
    primary: string;
    accent: string;
    line: string;
  };
  navigation: KuroNavItem[];
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    image: KuroImage;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    access: string;
  };
  hours: KuroHoursRow[];
  social: {
    instagram: string;
  };
  gallery: KuroImage[];
  demoDisclosure: string;
  seo: {
    title: string;
    description: string;
  };
};
