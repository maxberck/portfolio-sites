import Link from "next/link";

import { silexSite } from "../src/data/site";

export function SilexFooter() {
  return (
    <footer className="silex-footer">
      <div className="silex-footer__brand">
        <p>{silexSite.business.name}</p>
        <span>{silexSite.business.descriptor}</span>
      </div>

      <div className="silex-footer__contact">
        <a href={`mailto:${silexSite.contact.email}`}>{silexSite.contact.email}</a>
        <a href={`tel:${silexSite.contact.phone.replace(/\s/g, "")}`}>{silexSite.contact.phone}</a>
      </div>

      <div className="silex-footer__meta">
        <p>{silexSite.demoDisclosure}</p>
        <Link href="/categories/restaurant">← Retour au portfolio</Link>
      </div>
    </footer>
  );
}
