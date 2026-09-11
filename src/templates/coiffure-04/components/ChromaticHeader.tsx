"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { chromaticSite } from "../data/site";

export function ChromaticHeader() {
  const pathname = usePathname();
  const links = chromaticSite.navigation.map((item) => {
    const active = pathname === item.href;
    return (
      <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={active ? "is-active" : undefined}>
        <span>{item.index}</span>
        <strong>{item.label}</strong>
      </Link>
    );
  });

  return (
    <>
      <header className="chrom-header">
        <Link className="chrom-wordmark" href="/sites/coiffure-04" aria-label="Chromatic — accueil">CHROMATIC</Link>
        <span className="chrom-header-descriptor">CREATIVE COLOR STUDIO / DEMO</span>
        <nav className="chrom-desktop-nav" aria-label="Navigation Chromatic">{links}</nav>
      </header>
      <header className="chrom-mobile-header">
        <Link className="chrom-wordmark" href="/sites/coiffure-04">CHROMATIC</Link>
        <details>
          <summary>MENU / 05</summary>
          <nav aria-label="Navigation mobile Chromatic">{links}</nav>
        </details>
      </header>
    </>
  );
}
