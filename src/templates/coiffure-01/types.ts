export type MaisonEliseNavItem = {
  label: string;
  href: string;
};

export type MaisonEliseImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type MaisonEliseService = {
  name: string;
  description: string;
  price?: string;
};

export type MaisonEliseServiceGroup = {
  title: string;
  intro: string;
  items: MaisonEliseService[];
};

export type MaisonEliseHoursRow = {
  days: string;
  hours: string;
};
