import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Accueil" },
  { href: "/templates", label: "Templates" },
  { href: "/contact", label: "Contact" },
] as const;

export function PortfolioFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="portfolio-footer__inner">
        <p className="portfolio-footer__title">Sites vitrines</p>

        <nav className="portfolio-footer__links" aria-label="Liens de pied de page">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="portfolio-footer__meta">
          <a href="mailto:maxence@ipn.be">Me contacter</a>
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  );
}
