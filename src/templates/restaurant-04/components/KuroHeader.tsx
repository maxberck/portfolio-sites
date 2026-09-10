"use client";

import Link from "next/link";
import { useState } from "react";

import { kuroSite } from "../src/data/site";

export function KuroHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="kuro-header">
      <div className="kuro-shell kuro-header__inner">
        <Link className="kuro-wordmark" href="/sites/restaurant-04" aria-label="Kuro, accueil">
          <span className="kuro-wordmark__mark" aria-hidden="true">{kuroSite.business.mark}</span>
          <span className="kuro-wordmark__name">{kuroSite.business.name}</span>
        </Link>

        <nav className="kuro-nav kuro-nav--desktop" aria-label="Navigation Kuro">
          {kuroSite.navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <button
          className="kuro-menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="kuro-mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="kuro-mobile-nav" className={`kuro-mobile-nav ${open ? "is-open" : ""}`}>
        <nav className="kuro-shell" aria-label="Navigation Kuro mobile">
          {kuroSite.navigation.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span aria-hidden="true">0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
