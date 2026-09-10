import Link from "next/link";

import { district88Site } from "@/src/templates/restaurant-02/src/data/site";

export function D88Header() {
  return (
    <header className="d88-header">
      <div className="d88-header__brand-row">
        <Link className="d88-wordmark" href="/sites/restaurant-02" aria-label="District 88 — accueil">
          <span>DISTRICT</span>
          <strong>88</strong>
        </Link>
        <p className="d88-header__descriptor">{district88Site.business.descriptor}</p>

        <nav className="d88-nav d88-nav--desktop" aria-label="Navigation District 88">
          {district88Site.navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <details className="d88-mobile-nav">
          <summary>MENU</summary>
          <div className="d88-mobile-nav__panel">
            <div className="d88-mobile-nav__top">
              <span>DISTRICT 88</span>
              <span>BRUXELLES</span>
            </div>
            <nav aria-label="Navigation mobile District 88">
              {district88Site.navigation.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
            </nav>
            <p>{district88Site.demoDisclosure}</p>
          </div>
        </details>
      </div>
    </header>
  );
}
