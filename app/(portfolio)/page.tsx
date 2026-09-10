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
  const availableCount = availableSites.length;

  return (
    <>
      <PortfolioHeader />

      <main>
        <section className="portfolio-hero" aria-labelledby="portfolio-title">
          <div className="portfolio-container portfolio-hero__grid">
            <div className="portfolio-hero__copy">
              <p className="portfolio-kicker">PORTFOLIO / SITES VITRINES</p>
              <h1 id="portfolio-title">16 projets. 4 catégories.</h1>
            </div>

            <div className="portfolio-hero__aside">
              <p>Garage, restaurant, coiffure et tattoo — des directions visuelles volontairement différentes.</p>
              <div className="portfolio-hero__status" aria-label={`${availableCount} démos disponibles sur 16`}>
                <strong>{String(availableCount).padStart(2, "0")}</strong>
                <span>/ 16 disponibles</span>
              </div>
              <a className="portfolio-hero__explore" href="#catalogue">Explorer ↓</a>
            </div>
          </div>
        </section>

        <section className="catalogue-section" id="catalogue" aria-labelledby="catalogue-title">
          <div className="portfolio-container">
            <div className="catalogue-toolbar">
              <div>
                <p className="portfolio-kicker">INDEX / PROJETS</p>
                <h2 id="catalogue-title">Sélection complète</h2>
              </div>
              <p className="catalogue-toolbar__note">16 projets / 04 catégories</p>
            </div>

            <CategoryNavigation />
            <CatalogueGrid sites={catalogueSites} />
          </div>
        </section>

        <section className="category-directory" aria-labelledby="category-directory-title">
          <div className="portfolio-container">
            <div className="category-directory__head">
              <p className="portfolio-kicker">INDEX / CATÉGORIES</p>
              <h2 id="category-directory-title">Quatre univers.</h2>
            </div>

            <ol className="category-directory__list">
              {siteCategories.map((category, index) => {
                const label = category.id === "tatoueur" ? "Tattoo" : category.label;

                return (
                  <li key={category.id}>
                    <Link href={category.href} className="category-directory__link">
                      <span className="category-directory__index">0{index + 1}</span>
                      <strong>{label.toUpperCase()}</strong>
                      <span className="category-directory__count">04 projets</span>
                      <span className="category-directory__arrow" aria-hidden="true">↗</span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </>
  );
}
