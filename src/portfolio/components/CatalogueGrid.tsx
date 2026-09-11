import { SiteCard, type SiteCardPlacement } from "@/src/portfolio/components/SiteCard";
import type { PortfolioSite } from "@/src/portfolio/types";

type CatalogueGridProps = {
  sites: PortfolioSite[];
  variant?: "showcase" | "category" | "templates";
};

const showcasePlacements: SiteCardPlacement[] = ["anchor", "tall", "compact", "wide"];
const categoryPlacements: SiteCardPlacement[] = ["wide", "standard", "standard", "wide"];

export function CatalogueGrid({ sites, variant = "category" }: CatalogueGridProps) {
  const placements = variant === "showcase" ? showcasePlacements : categoryPlacements;

  return (
    <ul className={`catalogue-grid catalogue-grid--${variant}`}>
      {sites.map((site, index) => {
        const placement = variant === "templates" ? "standard" : placements[index % placements.length];

        return (
          <li
            className={`catalogue-grid__item catalogue-grid__item--${placement}`}
            key={site.id}
          >
            <SiteCard site={site} placement={placement} />
          </li>
        );
      })}
    </ul>
  );
}
