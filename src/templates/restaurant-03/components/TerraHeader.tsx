"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { terraSite } from "@/src/templates/restaurant-03/src/data/site";

export function TerraHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="terra-header">
      <Link className="terra-wordmark" href="/sites/restaurant-03" aria-label="Terra — accueil">
        Terra
      </Link>

      <nav className="terra-desktop-nav" aria-label="Navigation Terra">
        {terraSite.navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <p className="terra-header-note">Bruxelles · table méditerranéenne</p>

      <button
        className="terra-menu-trigger"
        type="button"
        aria-expanded={open}
        aria-controls="terra-mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Fermer" : "Menu"}
      </button>

      <div id="terra-mobile-menu" className="terra-mobile-menu" data-open={open ? "true" : "false"} aria-hidden={!open}>
        <nav aria-label="Navigation mobile Terra">
          {terraSite.navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="terra-mobile-menu__meta">
          <p>{terraSite.business.descriptor}</p>
          <p>{terraSite.contact.address}</p>
        </div>
      </div>
    </header>
  );
}
