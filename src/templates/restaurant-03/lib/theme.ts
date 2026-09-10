import type { CSSProperties } from "react";

import { terraSite } from "@/src/templates/restaurant-03/src/data/site";

export const terraThemeStyle = {
  "--terra-stone": terraSite.colors.stone,
  "--terra-ink": terraSite.colors.ink,
  "--terra-terracotta": terraSite.colors.terracotta,
  "--terra-olive": terraSite.colors.olive,
  "--terra-sun": terraSite.colors.sun,
  "--terra-cream": terraSite.colors.cream,
  "--terra-muted": terraSite.colors.muted,
} as CSSProperties;
