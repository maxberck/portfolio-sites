import Link from "next/link";

import { maisonEliseSite } from "../src/data/site";

export function MaisonEliseFooter() {
  return (
    <footer className="elise-footer">
      <div className="elise-footer__brand">
        <span>Maison</span>
        <strong>Élise</strong>
        <p>{maisonEliseSite.business.descriptor}</p>
      </div>
      <div className="elise-footer__nav">
        <p className="elise-label">Navigation</p>
        {maisonEliseSite.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </div>
      <div className="elise-footer__contact">
        <p className="elise-label">Contact fictif</p>
        <a href={`tel:${maisonEliseSite.contact.phone.replace(/\s/g, "")}`}>{maisonEliseSite.contact.phone}</a>
        <a href={`mailto:${maisonEliseSite.contact.email}`}>{maisonEliseSite.contact.email}</a>
        <span>{maisonEliseSite.contact.location}</span>
      </div>
      <div className="elise-footer__bottom">
        <p>{maisonEliseSite.demoDisclosure}</p>
        <Link href="/categories/coiffure">Retour aux sites coiffure ↗</Link>
      </div>
    </footer>
  );
}
