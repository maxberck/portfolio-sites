"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { matiereSite } from "../data/site";

function NavItems() {
  const pathname = usePathname();

  return matiereSite.nav.map((item) => {
    const active = pathname === item.href;
    return (
      <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>
        <span className="matiere-folio-nav__number">{item.folio}</span>
        <span>{item.label}</span>
      </Link>
    );
  });
}

export function FolioNav() {
  return (
    <>
      <nav className="matiere-folio-nav matiere-folio-nav--desktop" data-folio-nav="desktop" aria-label="Matière index">
        <NavItems />
      </nav>
      <nav className="matiere-folio-nav matiere-folio-nav--inline" data-folio-nav="inline" aria-label="Matière contents">
        <p className="matiere-folio-nav__label">Contents</p>
        <div className="matiere-folio-nav__inline-grid"><NavItems /></div>
      </nav>
    </>
  );
}
