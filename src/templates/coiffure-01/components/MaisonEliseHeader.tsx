"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { maisonEliseSite } from "../src/data/site";

export function MaisonEliseHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="elise-header">
      <div className="elise-utility">
        <span>Bruxelles · salon fictif</span>
        <span>{maisonEliseSite.business.descriptor}</span>
      </div>
      <div className="elise-header__bar">
        <Link className="elise-wordmark" href="/sites/coiffure-01" onClick={() => setOpen(false)}>
          Maison Élise
        </Link>
        <nav className="elise-nav elise-nav--desktop" aria-label="Navigation Maison Élise">
          {maisonEliseSite.navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="elise-contact-link" href="/sites/coiffure-01/contact">Contact</Link>
        <button
          className="elise-menu-trigger"
          type="button"
          aria-expanded={open}
          aria-controls="elise-mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Fermer" : "Menu"}
        </button>
      </div>
      <div id="elise-mobile-nav" className={`elise-mobile-nav${open ? " elise-mobile-nav--open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Navigation mobile Maison Élise">
          {maisonEliseSite.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="elise-mobile-nav__meta">
          <a href={`tel:${maisonEliseSite.contact.phone.replace(/\s/g, "")}`}>{maisonEliseSite.contact.phone}</a>
          <span>{maisonEliseSite.contact.location}</span>
        </div>
      </div>
    </header>
  );
}
