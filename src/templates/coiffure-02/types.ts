export type DistrictImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
  label?: string;
  position?: string;
};

export type DistrictService = {
  code: string;
  name: string;
  description: string;
  price: string;
};

export type DistrictNavItem = {
  label: string;
  href: string;
};
