import type { Metadata } from "next";

import { silexSite } from "../src/data/site";

export function createSilexMetadata(title: string, description: string): Metadata {
  const fullTitle = `${title} | ${silexSite.business.name}`;

  return {
    title: fullTitle,
    description,
    robots: { index: false, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
    },
  };
}
