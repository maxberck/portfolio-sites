export type SilexNavItem = {
  label: string;
  href: string;
};

export type SilexHoursRow = {
  days: string;
  hours: string;
};

export type SilexImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type SilexMenuItem = {
  name: string;
  description: string;
  price?: string;
};

export type SilexMenuSection = {
  title: string;
  intro?: string;
  items: SilexMenuItem[];
};

export type SilexSiteConfig = {
  business: {
    name: string;
    descriptor: string;
  };
  colors: {
    ink: string;
    wine: string;
    paper: string;
    surface: string;
    butter: string;
    muted: string;
    white: string;
  };
  navigation: SilexNavItem[];
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    image: SilexImage;
  };
  season: {
    eyebrow: string;
    title: string;
    body: string;
    ingredients: string[];
  };
  chef: {
    name: string;
    role: string;
    quote: string;
    biography: string;
    image: SilexImage;
  };
  maison: {
    intro: string;
    philosophy: string;
    room: string;
    sourcing: string;
    service: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    access: string;
  };
  hours: SilexHoursRow[];
  social: {
    instagram: string;
  };
  gallery: SilexImage[];
  demoDisclosure: string;
  seo: {
    title: string;
    description: string;
  };
};
