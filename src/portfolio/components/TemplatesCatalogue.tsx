"use client";

import { useState } from "react";

import { CatalogueGrid } from "@/src/portfolio/components/CatalogueGrid";
import type { PortfolioSite, SiteCategory, SiteCategoryDefinition } from "@/src/portfolio/types";

export type TemplateFilter = "all" | SiteCategory;

type TemplatesCatalogueProps = {
  sites: PortfolioSite[];
  categories: SiteCategoryDefinition[];
  initialCategory?: TemplateFilter;
};

export function TemplatesCatalogue({
  sites,
  categories,
  initialCategory = "all",
}: TemplatesCatalogueProps) {
  const [active, setActive] = useState<TemplateFilter>(initialCategory);

  const selectCategory = (category: TemplateFilter) => {
    setActive(category);
    const url = new URL(window.location.href);
    if (category === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", category);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  };

  const visibleSites = active === "all" ? sites : sites.filter((site) => site.category === active);
  const tabs: Array<{ id: TemplateFilter; label: string }> = [
    { id: "all", label: "Tous" },
    ...categories.map((category) => ({
      id: category.id,
      label: category.id === "tatoueur" ? "Tattoo" : category.label,
    })),
  ];

  return (
    <div data-templates-catalogue="true">
      <div className="category-nav templates-tabs" role="tablist" aria-label="Filtrer les templates par métier">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className="category-nav__link templates-tabs__button"
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            data-template-tab={tab.id}
            onClick={() => selectCategory(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <CatalogueGrid sites={visibleSites} variant="templates" />
    </div>
  );
}
