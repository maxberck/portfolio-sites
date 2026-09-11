import type { Metadata } from "next";

import { PortfolioFooter } from "@/src/portfolio/components/PortfolioFooter";
import { PortfolioHeader } from "@/src/portfolio/components/PortfolioHeader";
import { TemplatesCatalogue } from "@/src/portfolio/components/TemplatesCatalogue";
import { portfolioSites, siteCategories } from "@/src/portfolio/data/sites";

export const metadata: Metadata = {
  title: "Templates",
  description: "Tous les templates de sites vitrines du portfolio, classés par restaurant, garage, coiffure et tattoo.",
};

export default function TemplatesPage() {
  return (
    <>
      <PortfolioHeader />

      <main>
        <section className="category-hero templates-hero" aria-labelledby="templates-title">
          <div className="portfolio-container category-hero__grid">
            <div>
              <p className="portfolio-label">CATALOGUE</p>
              <h1 id="templates-title">TEMPLATES</h1>
            </div>
            <p className="category-hero__description">
              Tous les sites vitrines au même endroit. Filtrez par métier puis ouvrez chaque démo dans un nouvel onglet.
            </p>
          </div>
        </section>

        <section className="templates-page__catalogue" aria-labelledby="templates-catalogue-title">
          <div className="portfolio-container">
            <div className="portfolio-section-heading">
              <div>
                <p className="portfolio-label">COLLECTION</p>
                <h2 id="templates-catalogue-title">Tous les projets.</h2>
              </div>
              <p>Des structures et directions différentes, regroupées ici pour comparer facilement.</p>
            </div>

            <TemplatesCatalogue sites={portfolioSites} categories={siteCategories} />
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </>
  );
}
