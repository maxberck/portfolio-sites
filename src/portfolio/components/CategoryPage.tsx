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

const categoryNouns: Record<SiteCategory, string> = {
  garage: "garage",
  restaurant: "restaurant",
  coiffure: "salon",
  tatoueur: "studio tattoo",
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
          <div className="portfolio-container category-hero__grid">
            <p className="portfolio-kicker">Collection / {definition.label}</p>
            <h1>4 directions pour votre {categoryNouns[category]}.</h1>
            <div className="category-hero__aside">
              <p>{definition.description}</p>
              <p>Chaque démo peut servir de base puis être adaptée à votre identité, vos services et vos contenus.</p>
            </div>
          </div>
        </section>

        <section className="category-page__catalogue" id="catalogue">
          <div className="portfolio-container">
            <CategoryNavigation activeCategory={category} />
            <CatalogueGrid sites={sites} />
          </div>
        </section>

        <section className="category-sales">
          <div className="portfolio-container category-sales__grid">
            <div>
              <p className="portfolio-kicker">Adaptation</p>
              <h2>Vous aimez une direction ? Elle peut être adaptée à votre activité.</h2>
            </div>
            <div className="category-sales__action">
              <p>On garde ce qui fonctionne dans la démo et on remplace le reste par votre marque, vos images, vos services et vos informations.</p>
              <Link className="button button--dark" href="/#contact">Créer mon site</Link>
            </div>
          </div>
        </section>

        <div className="portfolio-container category-page__return-wrap">
          <Link className="category-page__return" href="/">← Voir toutes les catégories</Link>
        </div>
      </main>

      <PortfolioFooter />
    </>
  );
}
