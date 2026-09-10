import type { Metadata } from "next";

import { CategoryPage } from "@/src/portfolio/components/CategoryPage";

export const metadata: Metadata = {
  title: "Restaurants",
  description: "Quatre directions de sites vitrines pour restaurants, de la table gastronomique au concept japonais minimal.",
};

export default function RestaurantCategoryPage() {
  return <CategoryPage category="restaurant" />;
}
