import type { CSSProperties } from "react";

import { district88Site } from "@/src/templates/restaurant-02/src/data/site";

export const district88ThemeStyle = {
  "--d88-ink": district88Site.colors.ink,
  "--d88-paper": district88Site.colors.paper,
  "--d88-acid": district88Site.colors.acid,
  "--d88-red": district88Site.colors.red,
  "--d88-white": district88Site.colors.white,
  "--d88-muted": district88Site.colors.muted,
} as CSSProperties;
