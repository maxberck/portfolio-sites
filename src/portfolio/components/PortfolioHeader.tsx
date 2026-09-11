import Link from "next/link";

const primaryLinks = [
  { href: "/", label: "Accueil" },
  { href: "/templates", label: "Templates" },
  { href: "/contact", label: "Contact" },
] as const;

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

        <nav className="portfolio-header__nav" aria-label="Navigation principale du portfolio">
          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
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
          <nav className="portfolio-header__mobile-panel" aria-label="Navigation principale du portfolio sur mobile">
            {primaryLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
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
