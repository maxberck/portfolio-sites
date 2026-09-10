import { createSilexMetadata } from "@/src/templates/restaurant-01/lib/metadata";
import { MenuPage } from "@/src/templates/restaurant-01/pages/MenuPage";

export const metadata = createSilexMetadata(
  "Menu dégustation",
  "Découvrez le menu dégustation fictif de Maison Silex, construit autour de six temps et de produits de saison."
);

export default function Page() {
  return <MenuPage />;
}
