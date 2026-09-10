import type { CSSProperties } from "react";

import { silexSite } from "../src/data/site";

export const silexThemeStyle = {
  "--silex-background": silexSite.colors.background,
  "--silex-surface": silexSite.colors.surface,
  "--silex-text": silexSite.colors.text,
  "--silex-muted": silexSite.colors.muted,
  "--silex-accent": silexSite.colors.accent,
  "--silex-line": silexSite.colors.line,
} as CSSProperties;
