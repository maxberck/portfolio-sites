export type ChromaticNavItem = {
  index: string;
  label: string;
  href: string;
};

export type ChromaticImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
  ref: string;
};

export type ChromaticFamily = {
  code: "01" | "02" | "03" | "04";
  slug: "blonde" | "copper" | "vivid" | "correction";
  name: string;
  accent: "paper" | "tangerine" | "fuchsia" | "blue";
  description: string;
  services: string[];
  note: string;
  image: ChromaticImageData;
};

export type ChromaticMapStage = {
  index: string;
  name: "DIAGNOSIS" | "BASE" | "TONE" | "CARE";
  code: string;
  description: string;
  swatches: { label: string; value: string }[];
};

export type ChromaticWorkEntry = {
  ref: string;
  family: string;
  shade: string;
  image: ChromaticImageData;
};

export type ChromaticHoursRow = {
  days: string;
  hours: string;
};
