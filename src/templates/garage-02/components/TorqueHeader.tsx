"use client";

import Link from "next/link";
import { useState } from "react";

import { torqueWorksSite } from "../src/data/site";

export function TorqueHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="tw-header">
      <div className="tw-header__rule" aria-hidden="true">
        <span>MÉCANIQUE GÉNÉRALE</span>
        <span>DIAGNOSTIC AVANT REMPLACEMENT</span>
      </div>
      <div className="tw-shell tw-header__inner">
        <Link className="tw-wordmark" href="/sites/garage-02" aria-label="Torque Works, accueil">
          <span className="tw-wordmark__mark">{torqueWorksSite.business.mark}</span>
          <span className="tw-wordmark__copy"><b>TORQUE</b><span>WORKS</span></span>
        </Link>

        <nav className="tw-nav tw-nav--desktop" aria-label="Navigation Torque Works">
          {torqueWorksSite.navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <button
          type="button"
          className="tw-menu-toggle"
          aria-expanded={open}
          aria-controls="tw-mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="tw-mobile-nav" className={`tw-mobile-nav ${open ? "is-open" : ""}`}>
        <nav className="tw-shell" aria-label="Navigation Torque Works mobile">
          {torqueWorksSite.navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
