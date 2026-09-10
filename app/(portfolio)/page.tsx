import Image from "next/image";
import Link from "next/link";

import { CatalogueGrid } from "@/src/portfolio/components/CatalogueGrid";
import { PortfolioFooter } from "@/src/portfolio/components/PortfolioFooter";
import { PortfolioHeader } from "@/src/portfolio/components/PortfolioHeader";
import { portfolioSites, siteCategories } from "@/src/portfolio/data/sites";
import type { PortfolioSite } from "@/src/portfolio/types";

const featuredIds = ["restaurant-04", "restaurant-01", "garage-01", "coiffure-02"] as const;

export default function HomePage() {
  const featuredSites = featuredIds
    .map((id) => portfolioSites.find((site) => site.id === id))
    .filter((site): site is PortfolioSite => Boolean(site));

  const kuro = portfolioSites.find((site) => site.id === "restaurant-04");

  return (
    <>
      <PortfolioHeader />

      <main>
        <section className="portfolio-hero" aria-labelledby="portfolio-title">
          <div className="portfolio-container portfolio-hero__grid">
            <div className="portfolio-hero__copy">
              <p className="portfolio-label">DÉMOS NAVIGABLES / 2026</p>
              <h1 id="portfolio-title">SITES VITRINES</h1>
              <p className="portfolio-hero__intro">
                Restaurants, garages, salons et studios tattoo. Chaque démo suit sa propre structure,
                sa propre typographie et son propre rythme.
              </p>
              <a className="portfolio-text-link" href="#selection">
                Voir la sélection ↓
              </a>
            </div>

            {kuro?.preview ? (
              <figure className="portfolio-hero__frame">
                <div className="portfolio-hero__image-wrap">
                  <Image
                    src={kuro.preview.src}
                    alt={kuro.preview.alt}
                    width={kuro.preview.width}
                    height={kuro.preview.height}
                    sizes="(max-width: 760px) 100vw, 46vw"
                    priority
                    style={{ objectPosition: kuro.preview.focalPosition ?? "center top" }}
                  />
                  <span className="portfolio-hero__orbit" aria-hidden="true" />
                  <span className="portfolio-corner portfolio-corner--tl" aria-hidden="true" />
                  <span className="portfolio-corner portfolio-corner--br" aria-hidden="true" />
                </div>
                <figcaption>
                  <span>Kuro / Restaurant japonais</span>
                  <span>Démo navigable</span>
                </figcaption>
              </figure>
            ) : null}
          </div>
        </section>

        <section className="portfolio-selection" id="selection" data-home-selection="curated" aria-labelledby="selection-title">
          <div className="portfolio-container">
            <div className="portfolio-section-heading">
              <div>
                <p className="portfolio-label">Sélection</p>
                <h2 id="selection-title">Quatre directions.</h2>
              </div>
              <p>Les autres projets sont classés par métier.</p>
            </div>

            <CatalogueGrid sites={featuredSites} variant="showcase" />
          </div>
        </section>

        <section className="category-directory" aria-labelledby="category-directory-title">
          <div className="portfolio-container">
            <div className="portfolio-section-heading portfolio-section-heading--compact">
              <div>
                <p className="portfolio-label">PAR MÉTIER</p>
                <h2 id="category-directory-title">Explorer les collections.</h2>
              </div>
            </div>

            <div className="category-directory__grid">
              {siteCategories.map((category) => {
                const label = category.id === "tatoueur" ? "Tattoo" : category.label;

                return (
                  <Link
                    href={category.href}
                    className="category-directory__link"
                    data-category={category.id}
                    key={category.id}
                  >
                    <strong>{label}</strong>
                    <span>{category.description}</span>
                    <span className="category-directory__arrow" aria-hidden="true">↗</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </>
  );
}
