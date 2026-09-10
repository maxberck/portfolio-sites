import { createTerraMetadata } from "@/src/templates/restaurant-03/lib/metadata";
import { TablePage } from "@/src/templates/restaurant-03/pages/TablePage";

export const metadata = createTerraMetadata("La table", "La façon de manger chez Terra : partage, saison, feu et table vivante.");

export default function Page() {
  return <TablePage />;
}
