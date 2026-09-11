import Link from "next/link";

import { relais24Site } from "@/src/templates/garage-03/src/data/site";

export function RelaisFooter() {
  return (
    <footer className="r24-footer">
      <div className="r24-footer__signal" aria-hidden="true" />
      <div className="r24-footer__grid">
        <div className="r24-footer__brand">
          <span className="r24-kicker">ASSISTANCE ROUTIÈRE</span>
          <strong>RELAIS 24</strong>
          <p>{relais24Site.demoDisclosure}</p>
        </div>

        <nav aria-label="Navigation pied de page Relais 24">
          {relais24Site.navigation.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="r24-footer__contact">
          <span className="r24-kicker">CONTACT DÉMO</span>
          <a href={`tel:${relais24Site.contact.phone.replace(/\s/g, "")}`}>{relais24Site.contact.phone}</a>
          <a href={`mailto:${relais24Site.contact.email}`}>{relais24Site.contact.email}</a>
          <span>{relais24Site.contact.location}</span>
        </div>
      </div>
      <div className="r24-footer__bottom">
        <span>R24 / PORTFOLIO DEMO</span>
        <Link href="/categories/garage">← Retour aux garages</Link>
      </div>
    </footer>
  );
}
