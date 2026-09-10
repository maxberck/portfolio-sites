import type { Metadata } from "next";

import { CategoryPage } from "@/src/portfolio/components/CategoryPage";

export const metadata: Metadata = {
  title: "Tatoueurs",
  description: "Quatre directions de sites vitrines pour studios de tatouage, de l'underground à la galerie contemporaine.",
};

export default function TattooCategoryPage() {
  return <CategoryPage category="tatoueur" />;
}
