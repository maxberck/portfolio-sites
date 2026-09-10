import { portfolioSites } from "@/src/portfolio/data/sites";
import type { PortfolioSite, SiteCategory } from "@/src/portfolio/types";

export function getSitesByCategory(category: SiteCategory) {
  return portfolioSites.filter((site) => site.category === category);
}

export function getSiteById(id: string) {
  return portfolioSites.find((site) => site.id === id);
}

export function hasPublishablePreview(site: PortfolioSite) {
  return site.status !== "available" || Boolean(site.preview);
}
