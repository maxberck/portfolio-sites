import Link from "next/link";

import { silexSite } from "../src/data/site";

export function SilexFooter() {
  return (
    <footer className="silex-footer">
      <div className="silex-footer__brand">Maison <em>Silex</em></div>

      <nav className="silex-footer__nav" aria-label="Navigation de pied de page">
        {silexSite.navigation.slice(1).map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </nav>

      <div className="silex-footer__meta">
        <div>
          <a href={`mailto:${silexSite.contact.email}`}>{silexSite.contact.email}</a>
          <a href={`tel:${silexSite.contact.phone.replace(/\s/g, "")}`}>{silexSite.contact.phone}</a>
        </div>
        <p>{silexSite.demoDisclosure}</p>
        <Link href="/categories/restaurant">Retour aux restaurants ↗</Link>
      </div>
    </footer>
  );
}
