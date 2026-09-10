import { SiteCard } from "@/src/portfolio/components/SiteCard";
import type { PortfolioSite } from "@/src/portfolio/types";

type CatalogueGridProps = {
  sites: PortfolioSite[];
};

function getLayoutVariant(site: PortfolioSite, index: number) {
  if (site.status === "available") {
    return "feature";
  }

  if (index % 4 === 1) {
    return "compact";
  }

  return "standard";
}

export function CatalogueGrid({ sites }: CatalogueGridProps) {
  return (
    <ul className="catalogue-grid">
      {sites.map((site, index) => {
        const variant = getLayoutVariant(site, index);

        return (
          <li className={`catalogue-grid__item catalogue-grid__item--${variant}`} key={site.id}>
            <SiteCard site={site} />
          </li>
        );
      })}
    </ul>
  );
}
