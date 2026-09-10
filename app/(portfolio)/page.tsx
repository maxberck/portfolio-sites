import Link from "next/link";

import { CatalogueGrid } from "@/src/portfolio/components/CatalogueGrid";
import { CategoryNavigation } from "@/src/portfolio/components/CategoryNavigation";
import { PortfolioFooter } from "@/src/portfolio/components/PortfolioFooter";
import { PortfolioHeader } from "@/src/portfolio/components/PortfolioHeader";
import { portfolioSites, siteCategories } from "@/src/portfolio/data/sites";

export default function HomePage() {
  const availableSites = portfolioSites
    .filter((site) => site.status === "available")
    .sort((a, b) => {
      if (a.id === "restaurant-04") return -1;
      if (b.id === "restaurant-04") return 1;
      return a.id.localeCompare(b.id);
    });
  const plannedSites = portfolioSites.filter((site) => site.status === "planned");
  const catalogueSites = [...availableSites, ...plannedSites];

  return (
    <>
      <PortfolioHeader />

      <main>
        <section className="portfolio-hero" aria-labelledby="portfolio-title">
          <div className="portfolio-container portfolio-hero__grid">
            <p className="portfolio-hero__label">Portfolio</p>
            <h1 id="portfolio-title">Sites vitrines.</h1>
            <div className="portfolio-hero__foot">
              <p className="portfolio-hero__categories">Garage, restaurant, coiffure, tattoo.</p>
              <p className="portfolio-hero__intro">
                Des démos navigables, chacune avec sa propre direction visuelle.
              </p>
            </div>
          </div>
        </section>

        <section className="catalogue-section" id="catalogue" aria-labelledby="catalogue-title">
          <div className="portfolio-container">
            <div className="catalogue-toolbar">
              <h2 id="catalogue-title">Projets</h2>
              <p>Démos disponibles et directions en préparation.</p>
            </div>

            <CategoryNavigation />
            <CatalogueGrid sites={catalogueSites} />
          </div>
        </section>

        <section className="category-directory" aria-labelledby="category-directory-title">
          <div className="portfolio-container">
            <div className="category-directory__head">
              <h2 id="category-directory-title">Par catégorie</h2>
              <p>Quatre univers, chacun avec ses propres codes visuels.</p>
            </div>

            <ul className="category-directory__list">
              {siteCategories.map((category) => {
                const label = category.id === "tatoueur" ? "Tattoo" : category.label;

                return (
                  <li key={category.id}>
                    <Link href={category.href} className="category-directory__link">
                      <strong>{label}</strong>
                      <span className="category-directory__arrow" aria-hidden="true">↗</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </>
  );
}
