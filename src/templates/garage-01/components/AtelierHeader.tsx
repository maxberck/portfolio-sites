"use client";

import Link from "next/link";
import { useState } from "react";

import { atelierNoirSite } from "../src/data/site";

export function AtelierHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="an-header">
      <div className="an-header__signal" aria-hidden="true">
        <span>ATELIER NOIR / GARAGE MULTIMARQUE</span>
        <span>BRUXELLES / SITE DÉMO</span>
      </div>
      <div className="an-shell an-header__inner">
        <Link className="an-wordmark" href="/sites/garage-01" aria-label="Atelier Noir, accueil">
          <span className="an-wordmark__mark" aria-hidden="true">{atelierNoirSite.business.mark}</span>
          <span className="an-wordmark__copy">
            <strong>{atelierNoirSite.business.name}</strong>
            <small>{atelierNoirSite.business.descriptor}</small>
          </span>
        </Link>
        <nav className="an-nav an-nav--desktop" aria-label="Navigation Atelier Noir">
          {atelierNoirSite.navigation.map((item, index) => (
            <Link key={item.href} href={item.href}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</Link>
          ))}
        </nav>
        <a className="an-header__phone" href="tel:+3220000000">{atelierNoirSite.contact.phone}</a>
        <button
          className="an-menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="an-mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
      <div id="an-mobile-nav" className={`an-mobile-nav ${open ? "is-open" : ""}`}>
        <nav className="an-shell" aria-label="Navigation Atelier Noir mobile">
          {atelierNoirSite.navigation.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</Link>
          ))}
          <a href="tel:+3220000000">{atelierNoirSite.contact.phone}</a>
        </nav>
      </div>
    </header>
  );
}
