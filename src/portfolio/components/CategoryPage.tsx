import Link from "next/link";

import { CatalogueGrid } from "@/src/portfolio/components/CatalogueGrid";
import { CategoryNavigation } from "@/src/portfolio/components/CategoryNavigation";
import { PortfolioFooter } from "@/src/portfolio/components/PortfolioFooter";
import { PortfolioHeader } from "@/src/portfolio/components/PortfolioHeader";
import { siteCategories } from "@/src/portfolio/data/sites";
import { getSitesByCategory } from "@/src/portfolio/lib/catalog";
import type { SiteCategory } from "@/src/portfolio/types";

type CategoryPageProps = {
  category: SiteCategory;
};

export function CategoryPage({ category }: CategoryPageProps) {
  const definition = siteCategories.find((item) => item.id === category);
  const sites = getSitesByCategory(category);

  if (!definition) {
    return null;
  }

  const displayLabel = definition.id === "tatoueur" ? "Tattoo" : definition.label;

  return (
    <>
      <PortfolioHeader />

      <main>
        <section className="category-hero" data-category={category}>
          <div className="portfolio-container category-hero__grid">
            <div>
              <p className="portfolio-label">COLLECTION</p>
              <h1>{displayLabel}</h1>
            </div>
            <p className="category-hero__description">{definition.description}</p>
          </div>
        </section>

        <section className="category-page__catalogue" id="catalogue">
          <div className="portfolio-container">
            <CategoryNavigation activeCategory={category} />
            <CatalogueGrid sites={sites} variant="category" />
          </div>
        </section>

        <div className="portfolio-container category-page__return-wrap">
          <Link className="portfolio-text-link category-page__return" href="/">
            ← Retour à la sélection
          </Link>
        </div>
      </main>

      <PortfolioFooter />
    </>
  );
}
