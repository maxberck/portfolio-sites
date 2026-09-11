import type { CSSProperties } from "react";

import { maisonEliseSite } from "../src/data/site";

export const maisonEliseThemeStyle = {
  "--elise-ivory": maisonEliseSite.colors.ivory,
  "--elise-espresso": maisonEliseSite.colors.espresso,
  "--elise-beige": maisonEliseSite.colors.beige,
  "--elise-burgundy": maisonEliseSite.colors.burgundy,
  "--elise-white": maisonEliseSite.colors.white,
  "--elise-muted": maisonEliseSite.colors.muted,
} as CSSProperties;
