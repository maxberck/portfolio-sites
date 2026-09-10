import Link from "next/link";

import { CatalogueGrid } from "@/src/portfolio/components/CatalogueGrid";
import { CategoryNavigation } from "@/src/portfolio/components/CategoryNavigation";
import { PortfolioFooter } from "@/src/portfolio/components/PortfolioFooter";
import { PortfolioHeader } from "@/src/portfolio/components/PortfolioHeader";
import { portfolioSites, siteCategories } from "@/src/portfolio/data/sites";

export default function HomePage() {
  return (
    <>
      <PortfolioHeader />

      <main>
        <section className="hero">
          <div className="hero__inner">
            <div className="hero__copy">
              <p className="hero__eyebrow">Portfolio web / sélection 2026</p>
              <h1 className="hero__title">Des sites vitrines pensés comme de vrais sites clients.</h1>
            </div>

            <div className="hero__bottom">
              <p className="hero__lead">
                Un catalogue de directions web complètes pour l&apos;automobile, la restauration,
                la coiffure et le tatouage. Chaque modèle est conçu pour devenir un site réel,
                pas une simple image de présentation.
              </p>

              <ul className="hero__meta" aria-label="Résumé du catalogue">
                <li>
                  <strong>16</strong>
                  <span>directions prévues</span>
                </li>
                <li>
                  <strong>04</strong>
                  <span>univers métiers</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="categories-section" id="categories">
          <div className="portfolio-container">
            <p className="section-kicker">Parcourir</p>
            <div className="section-heading-row">
              <h2 className="section-title">Quatre métiers, quatre façons de raconter une activité.</h2>
              <p className="section-copy">
                Les modèles ne partagent pas une mise en page simplement recolorée. Chaque
                collection explore des rythmes, des typographies et des compositions différents.
              </p>
            </div>

            <ol className="category-index">
              {siteCategories.map((category, index) => (
                <li className="category-index__item" key={category.id}>
                  <Link className="category-index__link" href={category.href}>
                    <span className="category-index__number">0{index + 1}</span>
                    <strong className="category-index__name">{category.label}</strong>
                    <span className="category-index__description">{category.description}</span>
                    <span className="category-index__arrow" aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="catalogue-section" id="catalogue">
          <div className="portfolio-container">
            <div className="catalogue-head">
              <div>
                <p className="section-kicker">Catalogue</p>
                <h2 className="catalogue-head__title">Les modèles</h2>
              </div>
              <p className="catalogue-head__count">16 directions enregistrées</p>
            </div>

            <CategoryNavigation />
            <CatalogueGrid sites={portfolioSites} />
          </div>
        </section>

        <section className="process-section">
          <div className="portfolio-container process-grid">
            <div className="process-grid__intro">
              <p className="section-kicker">Approche</p>
              <h2>Une base exploitable, pas une maquette jetable.</h2>
              <p>
                Chaque démo est pensée pour être navigable, responsive, structurée pour le SEO
                et suffisamment indépendante pour servir ensuite de point de départ à un client.
              </p>
            </div>

            <ol className="process-list">
              <li>
                <span>01</span>
                <div>
                  <strong>Direction propre</strong>
                  <p>Chaque modèle possède sa composition, son rythme et son langage visuel.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Navigation réelle</strong>
                  <p>Les démos deviennent de vrais mini-sites, jamais des iframes ou des captures.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Réutilisation simple</strong>
                  <p>Contenu, couleurs et médias seront centralisés pour accélérer l&apos;adaptation client.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </>
  );
}
