import Link from "next/link";

import { siteCategories } from "@/src/portfolio/data/sites";

function categoryLabel(id: string, label: string) {
  return id === "tatoueur" ? "Tattoo" : label;
}

export function PortfolioHeader() {
  return (
    <header className="portfolio-header">
      <div className="portfolio-header__inner">
        <Link className="portfolio-brand" href="/" aria-label="Accueil du portfolio de sites vitrines">
          <span className="portfolio-brand__mark" aria-hidden="true">
            <span />
          </span>
          <span className="portfolio-brand__name">Sites vitrines</span>
        </Link>

        <nav className="portfolio-header__nav" aria-label="Catégories du portfolio">
          <Link href="/">Tous</Link>
          {siteCategories.map((category) => (
            <Link key={category.id} href={category.href}>
              {categoryLabel(category.id, category.label)}
            </Link>
          ))}
        </nav>

        <a
          className="portfolio-header__utility"
          href="https://github.com/maxberck"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

        <details className="portfolio-header__mobile">
          <summary>Menu</summary>
          <nav className="portfolio-header__mobile-panel" aria-label="Catégories du portfolio sur mobile">
            <Link href="/">Tous</Link>
            {siteCategories.map((category) => (
              <Link key={category.id} href={category.href}>
                {categoryLabel(category.id, category.label)}
              </Link>
            ))}
            <a href="https://github.com/maxberck" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
