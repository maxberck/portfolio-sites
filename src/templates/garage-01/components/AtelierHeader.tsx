"use client";

import Link from "next/link";
import { useState } from "react";

import { atelierNoirSite } from "../src/data/site";

export function AtelierHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="an-header">
      <div className="an-shell an-header__inner">
        <Link className="an-wordmark" href="/sites/garage-01" aria-label="Atelier Noir, accueil">
          <span className="an-wordmark__mark" aria-hidden="true">{atelierNoirSite.business.mark}</span>
          <span>
            <strong>{atelierNoirSite.business.name}</strong>
            <small>{atelierNoirSite.business.descriptor}</small>
          </span>
        </Link>

        <nav className="an-nav an-nav--desktop" aria-label="Navigation Atelier Noir">
          {atelierNoirSite.navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

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
          {atelierNoirSite.navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
