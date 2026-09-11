"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { lineGalleryNavigation } from "../data/site";

export function LineGalleryNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="line-desktop-nav" aria-label="Line Gallery navigation">
        <Link className="line-wordmark" href="/sites/tatoueur-02">LINE GALLERY</Link>
        <div className="line-desktop-nav__links">
          {lineGalleryNavigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <nav className="line-mobile-nav" aria-label="Line Gallery mobile navigation">
        <Link className="line-wordmark" href="/sites/tatoueur-02" onClick={() => setOpen(false)}>LINE GALLERY</Link>
        <button
          type="button"
          className="line-menu-button"
          aria-expanded={open}
          aria-controls="line-mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <div id="line-mobile-menu" className="line-mobile-menu" data-open={open ? "true" : "false"}>
          <div className="line-mobile-menu__inner">
            {lineGalleryNavigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                <span>{String(index).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
