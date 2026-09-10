"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { silexSite } from "../src/data/site";

export function SilexHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="silex-header">
      <div className="silex-header__bar">
        <Link className="silex-wordmark" href="/sites/restaurant-01" onClick={() => setOpen(false)}>
          {silexSite.business.name}
        </Link>

        <nav className="silex-nav silex-nav--desktop" aria-label="Navigation Maison Silex">
          {silexSite.navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="silex-menu-trigger"
          type="button"
          aria-expanded={open}
          aria-controls="silex-mobile-panel"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>

      <div
        id="silex-mobile-panel"
        className={`silex-menu-panel${open ? " silex-menu-panel--open" : ""}`}
        aria-hidden={!open}
      >
        <div className="silex-menu-panel__top">
          <span>{silexSite.business.name}</span>
          <button type="button" onClick={() => setOpen(false)} aria-label="Fermer la navigation">
            Fermer
          </button>
        </div>

        <nav className="silex-menu-panel__nav" aria-label="Navigation mobile Maison Silex">
          {silexSite.navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="silex-menu-panel__contact">
          <span>{silexSite.contact.location}</span>
          <a href={`mailto:${silexSite.contact.email}`}>{silexSite.contact.email}</a>
        </div>
      </div>
    </header>
  );
}
