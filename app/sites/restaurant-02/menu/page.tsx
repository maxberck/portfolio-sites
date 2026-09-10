import { createDistrict88Metadata } from "@/src/templates/restaurant-02/lib/metadata";
import { MenuPage } from "@/src/templates/restaurant-02/pages/MenuPage";

export const metadata = createDistrict88Metadata("Menu", "Le menu mural fictif de District 88 : smash burgers, fried, sides, sauces et drinks.");

export default function Page() {
  return <MenuPage />;
}
