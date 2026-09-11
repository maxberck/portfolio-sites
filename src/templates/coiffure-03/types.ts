export type FormImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
  ref?: string;
};

export type FormService = {
  code: string;
  name: string;
  description: string;
  duration?: string;
};

export type FormServiceGroup = {
  index: string;
  title: string;
  note: string;
  items: FormService[];
};

export type FormNavItem = {
  index: string;
  label: string;
  href: string;
};

export type FormHoursRow = {
  days: string;
  hours: string;
};
