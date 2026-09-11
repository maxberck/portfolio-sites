"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { luckyNavigation, luckySite } from "../data/site";

function isActive(pathname: string, href: string) {
  if (href === "/sites/tatoueur-03") return pathname === href;
  return pathname.startsWith(href);
}

export function LuckyNav() {
  const pathname = usePathname();

  return (
    <>
      <header className="lucky-desktop-nav" aria-label="Lucky XIII storefront navigation">
        <div className="lucky-desktop-nav__meta">
          <span>{luckySite.business.city}</span>
          <span>Traditional tattoo</span>
          <span>Est. fiction</span>
        </div>
        <Link className="lucky-desktop-nav__brand" href="/sites/tatoueur-03">
          <span className="lucky-desktop-nav__stars" aria-hidden="true">★</span>
          <strong>LUCKY XIII</strong>
          <span className="lucky-desktop-nav__stars" aria-hidden="true">★</span>
          <small>Traditional Tattoo &amp; Flash Shop</small>
        </Link>
        <nav className="lucky-desktop-nav__tabs" aria-label="Main navigation">
          {luckyNavigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(pathname, item.href) ? "is-active" : undefined}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <header className="lucky-mobile-nav" aria-label="Lucky XIII mobile navigation">
        <div className="lucky-mobile-nav__topline">
          <Link href="/sites/tatoueur-03" className="lucky-mobile-nav__brand">LUCKY XIII</Link>
          <span>Brussels · XIII</span>
        </div>
        <nav className="lucky-mobile-nav__tabs" aria-label="Mobile navigation">
          {luckyNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(pathname, item.href) ? "is-active" : undefined}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
