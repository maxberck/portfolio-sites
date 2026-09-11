import Image from "next/image";
import Link from "next/link";

import { PortfolioFooter } from "@/src/portfolio/components/PortfolioFooter";
import { PortfolioHeader } from "@/src/portfolio/components/PortfolioHeader";
import { PortfolioHeroCarousel } from "@/src/portfolio/components/PortfolioHeroCarousel";
import { portfolioSites, siteCategories } from "@/src/portfolio/data/sites";
import type { PortfolioSite } from "@/src/portfolio/types";

const heroSiteIds = [
  "restaurant-04",
  "garage-01",
  "coiffure-02",
  "tatoueur-03",
  "restaurant-01",
  "garage-04",
  "coiffure-04",
  "tatoueur-04",
] as const;

export default function HomePage() {
  const heroSites = heroSiteIds
    .map((id) => portfolioSites.find((site) => site.id === id))
    .filter((site): site is PortfolioSite => Boolean(site));

  const categoryPreviews = siteCategories
    .map((category) => {
      const site = portfolioSites.find(
        (candidate) => candidate.category === category.id && candidate.status === "available" && candidate.preview,
      );
      return site ? { category, site } : null;
    })
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

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
              <Link className="portfolio-text-link" href="/templates">
                Voir tous les templates ↗
              </Link>
            </div>

            <PortfolioHeroCarousel sites={heroSites} />
          </div>
        </section>

        <section
          className="portfolio-selection portfolio-home-categories"
          id="selection"
          data-home-selection="curated"
          aria-labelledby="selection-title"
        >
          <div className="portfolio-container">
            <div className="portfolio-section-heading">
              <div>
                <p className="portfolio-label">PAR MÉTIER</p>
                <h2 id="selection-title">Quatre univers.</h2>
              </div>
              <p>Un aperçu par catégorie. Tous les sites sont regroupés dans la page Templates.</p>
            </div>

            <div className="home-category-grid">
              {categoryPreviews.map(({ category, site }) => {
                const label = category.id === "tatoueur" ? "Tattoo" : category.label;
                const preview = site.preview;
                if (!preview) return null;

                return (
                  <Link
                    className="home-category-preview"
                    href={`/templates?category=${category.id}`}
                    data-home-category={category.id}
                    key={category.id}
                  >
                    <div className="home-category-preview__image">
                      <Image
                        src={preview.src}
                        alt={preview.alt}
                        width={preview.width}
                        height={preview.height}
                        sizes="(max-width: 760px) 100vw, 50vw"
                        style={{ objectPosition: preview.focalPosition ?? "center top" }}
                      />
                    </div>
                    <div className="home-category-preview__content">
                      <div>
                        <p className="portfolio-label">{label}</p>
                        <h3>{site.name}</h3>
                      </div>
                      <p>{category.description}</p>
                      <span className="home-category-preview__link">Voir les templates ↗</span>
                    </div>
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
