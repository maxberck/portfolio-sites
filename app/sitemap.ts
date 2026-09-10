import type { MetadataRoute } from "next";

import { getPublicSiteUrl, portfolioIndexablePaths } from "@/src/portfolio/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getPublicSiteUrl();

  if (!siteUrl) {
    return [];
  }

  return portfolioIndexablePaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
