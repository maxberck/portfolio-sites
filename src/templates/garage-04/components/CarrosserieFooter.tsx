import Link from "next/link";

import { carrosserie42Site } from "@/src/templates/garage-04/src/data/site";

export function CarrosserieFooter() {
  return (
    <footer className="c42-footer">
      <div className="c42-footer__stamp">C42 / CONTRÔLE DE FINITION</div>
      <div className="c42-footer__grid">
        <div>
          <span className="c42-kicker">ATELIER FICTIF</span>
          <strong className="c42-footer__title">CARROSSERIE<br />42</strong>
        </div>
        <nav aria-label="Navigation pied de page Carrosserie 42">
          {carrosserie42Site.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="c42-footer__contact">
          <a href={`tel:${carrosserie42Site.contact.phone.replace(/\s/g, "")}`}>{carrosserie42Site.contact.phone}</a>
          <a href={`mailto:${carrosserie42Site.contact.email}`}>{carrosserie42Site.contact.email}</a>
          <span>{carrosserie42Site.contact.location}</span>
        </div>
      </div>
      <div className="c42-footer__bottom">
        <p>{carrosserie42Site.demoDisclosure}</p>
        <Link href="/categories/garage">← Retour aux garages du portfolio</Link>
      </div>
    </footer>
  );
}
