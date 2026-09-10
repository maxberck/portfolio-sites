import { createKuroMetadata } from "@/src/templates/restaurant-04/lib/metadata";
import { MenuPage } from "@/src/templates/restaurant-04/pages/MenuPage";

export const metadata = createKuroMetadata(
  "Menu",
  "Menu de démonstration Kuro : omakase, petites assiettes, sushi, plats, desserts, saké, thé et boissons sans alcool.",
);

export default function Page() {
  return <MenuPage />;
}
