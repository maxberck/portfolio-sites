import Link from "next/link";

import { siteCategories } from "@/src/portfolio/data/sites";

export function PortfolioFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="portfolio-footer__inner">
        <div>
          <p className="portfolio-footer__label">Sites vitrines · Belgique</p>
          <p className="portfolio-footer__title">Choisissez une direction. On l’adapte à votre activité.</p>
        </div>

        <nav className="portfolio-footer__links" aria-label="Liens de pied de page">
          {siteCategories.map((category) => (
            <Link key={category.id} href={category.href}>
              {category.id === "tatoueur" ? "Tattoo" : category.label}
            </Link>
          ))}
          <a href="https://github.com/maxberck" target="_blank" rel="noreferrer">GitHub</a>
        </nav>

        <p className="portfolio-footer__copyright">© {year}</p>
      </div>
    </footer>
  );
}
