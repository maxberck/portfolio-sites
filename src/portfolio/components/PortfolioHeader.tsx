import Link from "next/link";

export function PortfolioHeader() {
  return (
    <header className="portfolio-header">
      <div className="portfolio-header__inner">
        <Link className="portfolio-brand" href="/" aria-label="Accueil du portfolio">
          <span className="portfolio-brand__eyebrow">Portfolio</span>
          <span className="portfolio-brand__name">Sites vitrines</span>
        </Link>

        <nav className="portfolio-header__nav" aria-label="Navigation principale">
          <Link href="/#catalogue">Catalogue</Link>
          <Link href="/#categories">Catégories</Link>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
