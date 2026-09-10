import { SiteCard } from "@/src/portfolio/components/SiteCard";
import type { PortfolioSite } from "@/src/portfolio/types";

type CatalogueGridProps = {
  sites: PortfolioSite[];
};

export function CatalogueGrid({ sites }: CatalogueGridProps) {
  return (
    <ul className="catalogue-grid">
      {sites.map((site) => (
        <li key={site.id}>
          <SiteCard site={site} />
        </li>
      ))}
    </ul>
  );
}
