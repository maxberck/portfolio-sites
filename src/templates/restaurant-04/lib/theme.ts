import type { CSSProperties } from "react";

import { kuroSite } from "../src/data/site";

export const kuroThemeStyle = {
  "--site-background": kuroSite.colors.background,
  "--site-surface": kuroSite.colors.surface,
  "--site-text": kuroSite.colors.text,
  "--site-muted": kuroSite.colors.muted,
  "--site-primary": kuroSite.colors.primary,
  "--site-accent": kuroSite.colors.accent,
  "--site-line": kuroSite.colors.line,
} as CSSProperties;
