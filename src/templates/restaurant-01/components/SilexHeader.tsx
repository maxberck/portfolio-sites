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
      <div className="silex-header__inner">
        <Link className="silex-wordmark" href="/sites/restaurant-01" onClick={() => setOpen(false)}>
          <span>{silexSite.business.name}</span>
          <small>{silexSite.business.descriptor}</small>
        </Link>

        <button
          className="silex-menu-trigger"
          type="button"
          aria-expanded={open}
          aria-controls="silex-navigation"
          aria-label={open ? "Fermer la navigation" : "Ouvrir la navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? "Fermer" : "Menu"}</span>
        </button>

        <nav
          id="silex-navigation"
          className={`silex-nav${open ? " silex-nav--open" : ""}`}
          aria-label="Navigation Maison Silex"
        >
          {silexSite.navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
