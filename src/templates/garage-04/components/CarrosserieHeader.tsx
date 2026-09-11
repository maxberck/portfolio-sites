import Link from "next/link";

import { carrosserie42Site } from "@/src/templates/garage-04/src/data/site";

export function CarrosserieHeader() {
  return (
    <header className="c42-header">
      <div className="c42-header__rail">
        <span>CARROSSERIE / PEINTURE / REMISE EN ÉTAT</span>
        <span>BRUXELLES · SITE DÉMO</span>
      </div>
      <div className="c42-header__inner">
        <Link className="c42-brand" href="/sites/garage-04" aria-label="Carrosserie 42 — accueil">
          <span className="c42-brand__mark" aria-hidden="true">42</span>
          <span className="c42-brand__copy">
            <strong>CARROSSERIE 42</strong>
            <small>Carrosserie & peinture</small>
          </span>
        </Link>

        <nav className="c42-nav c42-nav--desktop" aria-label="Navigation principale Carrosserie 42">
          {carrosserie42Site.navigation.map((item, index) => (
            <Link href={item.href} key={item.href}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="c42-call c42-call--desktop" href={`tel:${carrosserie42Site.contact.phone.replace(/\s/g, "")}`}>
          <span>CONTACT</span>
          <strong>{carrosserie42Site.contact.phone}</strong>
        </a>

        <details className="c42-menu">
          <summary aria-label="Ouvrir la navigation Carrosserie 42">MENU</summary>
          <nav aria-label="Navigation mobile Carrosserie 42">
            {carrosserie42Site.navigation.map((item, index) => (
              <Link href={item.href} key={item.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
            <a href={`tel:${carrosserie42Site.contact.phone.replace(/\s/g, "")}`}>Appeler · {carrosserie42Site.contact.phone}</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
