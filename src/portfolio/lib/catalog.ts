import { portfolioSites } from "@/src/portfolio/data/sites";
import type { SiteCategory } from "@/src/portfolio/types";

export function getSitesByCategory(category: SiteCategory) {
  return portfolioSites.filter((site) => site.category === category);
}

export function getSiteById(id: string) {
  return portfolioSites.find((site) => site.id === id);
}
