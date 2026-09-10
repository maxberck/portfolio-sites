import Link from "next/link";

import { atelierNoirSite } from "../src/data/site";

export function AtelierFooter() {
  return (
    <footer className="an-footer">
      <div className="an-shell an-footer__grid">
        <div>
          <p className="an-footer__brand">ATELIER NOIR</p>
          <p className="an-footer__disclosure">{atelierNoirSite.demoDisclosure}</p>
        </div>
        <nav className="an-footer__nav" aria-label="Navigation de pied de page">
          {atelierNoirSite.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="an-footer__meta">
          <span>{atelierNoirSite.contact.location}</span>
          <Link href="/">Retour au portfolio ↗</Link>
        </div>
      </div>
    </footer>
  );
}
