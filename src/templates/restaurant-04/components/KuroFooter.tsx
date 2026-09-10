import Link from "next/link";

import { kuroSite } from "../src/data/site";
import { PortfolioReturnLink } from "./PortfolioReturnLink";

export function KuroFooter() {
  return (
    <footer className="kuro-footer">
      <div className="kuro-shell kuro-footer__grid">
        <div className="kuro-footer__brand">
          <div className="kuro-footer__mark" aria-hidden="true">{kuroSite.business.mark}</div>
          <p className="kuro-footer__name">{kuroSite.business.name}</p>
          <p>{kuroSite.business.descriptor}</p>
        </div>

        <nav className="kuro-footer__nav" aria-label="Navigation secondaire Kuro">
          {kuroSite.navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="kuro-footer__contact">
          <p>{kuroSite.contact.location}</p>
          <a href={`mailto:${kuroSite.contact.email}`}>{kuroSite.contact.email}</a>
          <a href={`tel:${kuroSite.contact.phone.replace(/\s/g, "")}`}>{kuroSite.contact.phone}</a>
        </div>
      </div>

      <div className="kuro-shell kuro-footer__bottom">
        <p>{kuroSite.demoDisclosure}</p>
        <PortfolioReturnLink />
      </div>
    </footer>
  );
}
