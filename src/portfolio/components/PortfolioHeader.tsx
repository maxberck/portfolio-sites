import Link from "next/link";

import { siteCategories } from "@/src/portfolio/data/sites";

function categoryLabel(id: string, label: string) {
  return id === "tatoueur" ? "Tattoo" : label;
}

export function PortfolioHeader() {
  return (
    <header className="portfolio-header" data-portfolio-header="swiss-brutalist">
      <div className="portfolio-header__inner">
        <Link className="portfolio-brand" href="/" aria-label="Accueil du portfolio de sites vitrines">
          <span className="portfolio-brand__name">Sites vitrines</span>
          <span className="portfolio-brand__meta">16 projets / 4 catégories</span>
        </Link>

        <nav className="portfolio-header__nav portfolio-header__nav--desktop" aria-label="Catégories du portfolio">
          <Link href="/">Tous</Link>
          {siteCategories.map((category) => (
            <Link key={category.id} href={category.href}>
              {categoryLabel(category.id, category.label)}
            </Link>
          ))}
        </nav>

        <details className="portfolio-header__mobile">
          <summary>Menu</summary>
          <nav className="portfolio-header__mobile-panel" aria-label="Catégories du portfolio sur mobile">
            <Link href="/">
              <span>00</span>
              <strong>Tous</strong>
            </Link>
            {siteCategories.map((category, index) => (
              <Link key={category.id} href={category.href}>
                <span>0{index + 1}</span>
                <strong>{categoryLabel(category.id, category.label)}</strong>
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
