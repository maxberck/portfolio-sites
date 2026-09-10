import type { CSSProperties } from "react";

import { silexSite } from "../src/data/site";

export const silexThemeStyle = {
  "--silex-ink": silexSite.colors.ink,
  "--silex-wine": silexSite.colors.wine,
  "--silex-paper": silexSite.colors.paper,
  "--silex-surface": silexSite.colors.surface,
  "--silex-butter": silexSite.colors.butter,
  "--silex-muted": silexSite.colors.muted,
  "--silex-white": silexSite.colors.white,
} as CSSProperties;
