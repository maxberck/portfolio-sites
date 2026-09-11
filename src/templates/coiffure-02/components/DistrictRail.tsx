"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { districtCutSite } from "../src/data/site";

export function DistrictRail() {
  const pathname = usePathname();

  const links = districtCutSite.navigation.map((item) => (
    <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
      <span>{item.label}</span>
      <span aria-hidden="true">↗</span>
    </Link>
  ));

  return (
    <>
      <aside className="district-rail" aria-label="Navigation District Cut">
        <Link className="district-wordmark" href="/sites/coiffure-02" aria-label="District Cut — accueil">
          <strong>DISTRICT</strong>
          <strong>CUT</strong>
          <small>BARBER / 02</small>
        </Link>
        <nav className="district-rail-nav">{links}</nav>
        <div className="district-rail-bottom">
          <span>{districtCutSite.contact.shortLocation}</span>
          <Link href="/sites/coiffure-02/contact">CONTACT</Link>
        </div>
      </aside>

      <header className="district-mobile-header">
        <Link className="district-mobile-wordmark" href="/sites/coiffure-02">DISTRICT CUT</Link>
        <details className="district-mobile-menu">
          <summary>MENU</summary>
          <nav aria-label="Navigation mobile District Cut">{links}</nav>
        </details>
      </header>
    </>
  );
}
