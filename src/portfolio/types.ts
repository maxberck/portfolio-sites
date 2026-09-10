export type SiteCategory = "garage" | "restaurant" | "coiffure" | "tatoueur";
export type SiteStatus = "planned" | "available";

export type PortfolioSite = {
  id: string;
  name: string;
  category: SiteCategory;
  direction: string;
  summary: string;
  href: `/sites/${string}`;
  status: SiteStatus;
  preview?: string;
};

export type SiteCategoryDefinition = {
  id: SiteCategory;
  label: string;
  href: `/categories/${SiteCategory}`;
  description: string;
};
