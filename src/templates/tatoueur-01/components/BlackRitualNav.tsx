"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { blackRitualNavigation } from "../data/site";

function isActive(pathname: string, href: string) {
  if (href === "/sites/tatoueur-01") return pathname === href;
  return pathname.startsWith(href);
}

export function BlackRitualNav() {
  const pathname = usePathname();

  return (
    <>
      <aside className="ritual-rail" aria-label="Black Ritual navigation">
        <Link className="ritual-rail__brand" href="/sites/tatoueur-01" aria-label="Black Ritual — home">
          <span>BLACK</span>
          <span>RITUAL</span>
        </Link>
        <nav className="ritual-rail__nav" aria-label="Studio sections">
          {blackRitualNavigation.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link key={item.href} href={item.href} className="ritual-rail__link" aria-current={active ? "page" : undefined}>
                <span>{item.index}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <p className="ritual-rail__meta">BRUSSELS · 50.8503° N</p>
      </aside>

      <nav className="ritual-mobile-nav" aria-label="Black Ritual mobile navigation">
        {blackRitualNavigation.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>
              <span>{item.index}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
