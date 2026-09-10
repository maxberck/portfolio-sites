import type { Metadata } from "next";

import { CategoryPage } from "@/src/portfolio/components/CategoryPage";

export const metadata: Metadata = {
  title: "Coiffure",
  description: "Quatre directions de sites vitrines pour salons de coiffure et barbers, du premium au studio artistique.",
};

export default function HairCategoryPage() {
  return <CategoryPage category="coiffure" />;
}
