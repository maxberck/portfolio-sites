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

  return (
    <>
      <PortfolioHeader />

      <main>
        <section className="category-hero">
          <div className="category-hero__inner">
            <p className="category-hero__eyebrow">Collection / {definition.label}</p>
            <h1>{definition.label}</h1>
            <p className="category-hero__description">{definition.description}</p>
          </div>
        </section>

        <section className="category-page__catalogue" id="catalogue">
          <div className="portfolio-container">
            <div className="catalogue-head">
              <h2 className="catalogue-head__title">Quatre directions</h2>
              <p className="catalogue-head__count">04 modèles enregistrés</p>
            </div>

            <CategoryNavigation activeCategory={category} />
            <CatalogueGrid sites={sites} />

            <Link className="category-page__return" href="/">
              ← Revenir à toutes les catégories
            </Link>
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </>
  );
}
