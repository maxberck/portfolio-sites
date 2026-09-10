import type { Metadata } from "next";

import { CategoryPage } from "@/src/portfolio/components/CategoryPage";

export const metadata: Metadata = {
  title: "Garages",
  description: "Quatre directions de sites vitrines pour garages et professionnels de l'automobile.",
};

export default function GarageCategoryPage() {
  return <CategoryPage category="garage" />;
}
