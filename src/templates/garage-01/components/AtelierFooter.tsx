import Link from "next/link";

import { atelierNoirSite } from "../src/data/site";

export function AtelierFooter() {
  return (
    <footer className="an-footer">
      <div className="an-footer__signal" aria-hidden="true">ATELIER NOIR · ENTRETIEN · DIAGNOSTIC · RÉPARATION</div>
      <div className="an-shell an-footer__grid">
        <div className="an-footer__identity">
          <p className="an-footer__brand">ATELIER<br />NOIR</p>
          <span>GARAGE MULTIMARQUE · BRUXELLES</span>
        </div>
        <nav className="an-footer__nav" aria-label="Navigation de pied de page">
          {atelierNoirSite.navigation.map((item, index) => (
            <Link key={item.href} href={item.href}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</Link>
          ))}
        </nav>
        <div className="an-footer__contact">
          <span>CONTACT</span>
          <a href="tel:+3220000000">{atelierNoirSite.contact.phone}</a>
          <a href={`mailto:${atelierNoirSite.contact.email}`}>{atelierNoirSite.contact.email}</a>
          <p>{atelierNoirSite.contact.location}</p>
        </div>
        <div className="an-footer__meta">
          <p>{atelierNoirSite.demoDisclosure}</p>
          <Link href="/">Retour au portfolio ↗</Link>
        </div>
      </div>
    </footer>
  );
}
