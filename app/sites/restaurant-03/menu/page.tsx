import { createTerraMetadata } from "@/src/templates/restaurant-03/lib/metadata";
import { MenuPage } from "@/src/templates/restaurant-03/pages/MenuPage";

export const metadata = createTerraMetadata("Menu", "Carte de saison de Terra : assiettes à partager, légumes, feu, mer, desserts et boissons.");

export default function Page() {
  return <MenuPage />;
}
