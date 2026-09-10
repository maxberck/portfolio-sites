import type { Metadata } from "next";

import { kuroSite } from "../src/data/site";

export function createKuroMetadata(title: string, description: string): Metadata {
  const fullTitle = `${title} | ${kuroSite.business.name}`;

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
