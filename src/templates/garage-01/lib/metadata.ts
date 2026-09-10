import type { Metadata } from "next";

import { atelierNoirSite } from "../src/data/site";

export function createAtelierNoirMetadata(title: string, description: string): Metadata {
  const fullTitle = `${title} | ${atelierNoirSite.business.name}`;

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
