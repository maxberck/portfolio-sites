import Link from "next/link";

import { relais24Site } from "@/src/templates/garage-03/src/data/site";

export function RelaisHeader() {
  return (
    <header className="r24-header">
      <div className="r24-signal-rail">
        <span>ASSISTANCE ROUTIÈRE · SITE DÉMO</span>
        <span>BRUXELLES / R24</span>
      </div>
      <div className="r24-header__inner">
        <Link className="r24-brand" href="/sites/garage-03" aria-label="Relais 24 — accueil">
          <span className="r24-brand__mark" aria-hidden="true">R24</span>
          <span className="r24-brand__copy">
            <strong>RELAIS 24</strong>
            <small>Assistance routière</small>
          </span>
        </Link>

        <nav className="r24-nav r24-nav--desktop" aria-label="Navigation principale Relais 24">
          {relais24Site.navigation.map((item, index) => (
            <Link href={item.href} key={item.href}>
              <span>{String(index).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="r24-call r24-call--desktop" href={`tel:${relais24Site.contact.phone.replace(/\s/g, "")}`}>
          <span>APPELER</span>
          <strong>{relais24Site.contact.phone}</strong>
        </a>

        <details className="r24-menu">
          <summary aria-label="Ouvrir la navigation Relais 24">MENU</summary>
          <nav aria-label="Navigation mobile Relais 24">
            {relais24Site.navigation.map((item, index) => (
              <Link href={item.href} key={item.href}>
                <span>{String(index).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
            <a href={`tel:${relais24Site.contact.phone.replace(/\s/g, "")}`}>Appeler · {relais24Site.contact.phone}</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
