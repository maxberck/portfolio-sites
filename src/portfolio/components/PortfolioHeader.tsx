import Link from "next/link";

import { siteCategories } from "@/src/portfolio/data/sites";

export function PortfolioHeader() {
  return (
    <header className="portfolio-header">
      <div className="portfolio-header__inner">
        <Link className="portfolio-brand" href="/" aria-label="Accueil du portfolio de sites vitrines">
          <span className="portfolio-brand__name">Sites vitrines</span>
          <span className="portfolio-brand__meta">Portfolio 2026</span>
        </Link>

        <nav className="portfolio-header__nav" aria-label="Catégories du portfolio">
          <Link href="/">Tous</Link>
          {siteCategories.map((category) => (
            <Link key={category.id} href={category.href}>
              {category.id === "tatoueur" ? "Tattoo" : category.label}
            </Link>
          ))}
        </nav>

        <Link className="portfolio-header__cta" href="/#contact">
          Créer mon site
        </Link>
      </div>
    </header>
  );
}
