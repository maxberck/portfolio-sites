"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { formStudioSite } from "../src/data/site";

export function FormHeader() {
  const pathname = usePathname();

  const links = formStudioSite.navigation.map((item) => {
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
      <header className="form-header">
        <Link className="form-wordmark" href="/sites/coiffure-03" aria-label="Form Studio — accueil">FORM STUDIO</Link>
        <nav className="form-desktop-nav" aria-label="Navigation Form Studio">{links}</nav>
      </header>
      <header className="form-mobile-header">
        <Link className="form-wordmark" href="/sites/coiffure-03">FORM STUDIO</Link>
        <details>
          <summary>MENU / 05</summary>
          <nav aria-label="Navigation mobile Form Studio">{links}</nav>
        </details>
      </header>
    </>
  );
}
