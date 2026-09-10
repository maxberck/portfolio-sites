import Link from "next/link";

import { CatalogueGrid } from "@/src/portfolio/components/CatalogueGrid";
import { CategoryNavigation } from "@/src/portfolio/components/CategoryNavigation";
import { PortfolioFooter } from "@/src/portfolio/components/PortfolioFooter";
import { PortfolioHeader } from "@/src/portfolio/components/PortfolioHeader";
import { portfolioSites, siteCategories } from "@/src/portfolio/data/sites";

export default function HomePage() {
  const availableCount = portfolioSites.filter((site) => site.status === "available").length;
  const catalogueSites = [...portfolioSites].sort((a, b) => {
    if (a.status === b.status) {
      return 0;
    }

    return a.status === "available" ? -1 : 1;
  });

  return (
    <>
      <PortfolioHeader />

      <main>
        <section className="portfolio-hero">
          <div className="portfolio-container portfolio-hero__grid">
            <div className="portfolio-hero__copy">
              <p className="portfolio-kicker">Sites vitrines pour indépendants et petites entreprises</p>
              <h1>Des sites qui ressemblent à de vraies marques.</h1>
            </div>

            <div className="portfolio-hero__aside">
              <p>Choisissez une direction, explorez la démo, adaptez-la à votre activité.</p>
              <div className="portfolio-hero__actions">
                <a className="button button--dark" href="#catalogue">Voir les sites</a>
                <a className="button button--text" href="#contact">Créer mon site →</a>
              </div>
            </div>

            <div className="portfolio-hero__status" aria-label={`${availableCount} démo disponible sur 16`}>
              <strong>{String(availableCount).padStart(2, "0")}</strong>
              <span>/ 16 live</span>
            </div>
          </div>
        </section>

        <section className="catalogue-section" id="catalogue">
          <div className="portfolio-container">
            <div className="catalogue-toolbar">
              <div>
                <p className="portfolio-kicker">Sélection</p>
                <h2>Choisir un style de site</h2>
              </div>
              <p className="catalogue-toolbar__note">16 directions · 4 métiers</p>
            </div>

            <CategoryNavigation />
            <CatalogueGrid sites={catalogueSites} />
          </div>
        </section>

        <section className="category-directory" aria-labelledby="category-directory-title">
          <div className="portfolio-container">
            <div className="category-directory__head">
              <p className="portfolio-kicker">Par métier</p>
              <h2 id="category-directory-title">Allez directement à votre catégorie.</h2>
            </div>

            <ol className="category-directory__list">
              {siteCategories.map((category, index) => (
                <li key={category.id}>
                  <Link href={category.href} className="category-directory__link">
                    <span className="category-directory__index">0{index + 1}</span>
                    <strong>{category.id === "tatoueur" ? "Tattoo" : category.label}</strong>
                    <span>{category.description}</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="adaptation-section" aria-labelledby="adaptation-title">
          <div className="portfolio-container adaptation-section__grid">
            <div>
              <p className="portfolio-kicker">Comment ça marche</p>
              <h2 id="adaptation-title">Une base forte. Puis votre identité.</h2>
            </div>

            <ol className="adaptation-steps">
              <li>
                <span>01</span>
                <div>
                  <strong>Choisissez</strong>
                  <p>Ouvrez une démo et trouvez la direction qui correspond le mieux à votre activité.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Adaptez</strong>
                  <p>Nom, couleurs, textes, images, services et pages deviennent les vôtres.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Publiez</strong>
                  <p>La démo devient un site autonome prêt à représenter votre entreprise.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="sales-cta" id="contact">
          <div className="portfolio-container sales-cta__grid">
            <p className="portfolio-kicker">Votre prochain site</p>
            <h2>Vous aimez une direction ? Faisons-en la vôtre.</h2>
            <div className="sales-cta__action">
              <p>Partez d’un modèle ou utilisez-le simplement comme référence pour votre propre site.</p>
              <a className="button button--light" href="https://github.com/maxberck" target="_blank" rel="noreferrer">
                Créer mon site →
              </a>
            </div>
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </>
  );
}
