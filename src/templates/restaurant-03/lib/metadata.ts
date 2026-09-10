import type { Metadata } from "next";

import { terraSite } from "@/src/templates/restaurant-03/src/data/site";

export function createTerraMetadata(pageTitle: string, description: string): Metadata {
  return {
    title: pageTitle === "Accueil" ? terraSite.seo.title : `${pageTitle} — ${terraSite.business.name}`,
    description,
    robots: { index: false, follow: true },
  };
}
