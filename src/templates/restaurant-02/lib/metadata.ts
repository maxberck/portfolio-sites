import type { Metadata } from "next";

import { district88Site } from "@/src/templates/restaurant-02/src/data/site";

export function createDistrict88Metadata(pageTitle: string, description: string): Metadata {
  return {
    title: `${pageTitle} — ${district88Site.business.name}`,
    description,
    robots: { index: false, follow: true },
  };
}
