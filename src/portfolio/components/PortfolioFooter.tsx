import Link from "next/link";

import { siteCategories } from "@/src/portfolio/data/sites";

export function PortfolioFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="portfolio-footer__inner">
        <p className="portfolio-footer__title">Sites vitrines</p>

        <nav className="portfolio-footer__links" aria-label="Liens de pied de page">
          {siteCategories.map((category) => (
            <Link key={category.id} href={category.href}>
              {category.id === "tatoueur" ? "Tattoo" : category.label}
            </Link>
          ))}
        </nav>

        <div className="portfolio-footer__meta">
          <a href="https://github.com/maxberck" target="_blank" rel="noreferrer">GitHub ↗</a>
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  );
}
