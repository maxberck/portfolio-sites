import { SiteCard } from "@/src/portfolio/components/SiteCard";
import type { PortfolioSite } from "@/src/portfolio/types";

type CatalogueGridProps = {
  sites: PortfolioSite[];
};

const spanPattern = ["wide", "narrow", "half", "half", "narrow", "wide"] as const;

type LayoutVariant = (typeof spanPattern)[number];

function getLayoutVariant(index: number): LayoutVariant {
  return spanPattern[index % spanPattern.length];
}

export function CatalogueGrid({ sites }: CatalogueGridProps) {
  return (
    <ul className="catalogue-grid">
      {sites.map((site, index) => {
        const variant = getLayoutVariant(index);

        return (
          <li className={`catalogue-grid__item catalogue-grid__item--${variant}`} key={site.id}>
            <SiteCard site={site} />
          </li>
        );
      })}
    </ul>
  );
}
