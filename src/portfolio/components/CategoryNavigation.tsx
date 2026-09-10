import Link from "next/link";

import { siteCategories } from "@/src/portfolio/data/sites";
import type { SiteCategory } from "@/src/portfolio/types";

type CategoryNavigationProps = {
  activeCategory?: SiteCategory;
};

export function CategoryNavigation({ activeCategory }: CategoryNavigationProps) {
  return (
    <nav className="category-nav" aria-label="Parcourir les sites par métier">
      <Link
        href="/"
        className="category-nav__link"
        aria-current={activeCategory ? undefined : "page"}
      >
        Tous
      </Link>

      {siteCategories.map((category) => (
        <Link
          key={category.id}
          href={category.href}
          className="category-nav__link"
          aria-current={activeCategory === category.id ? "page" : undefined}
        >
          {category.id === "tatoueur" ? "Tattoo" : `${category.label}s`}
        </Link>
      ))}
    </nav>
  );
}
