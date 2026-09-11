import type { Metadata } from "next";

import { torqueWorksSite } from "../src/data/site";

export function createTorqueMetadata(title: string, description: string): Metadata {
  const fullTitle = `${title} | ${torqueWorksSite.business.name}`;

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
