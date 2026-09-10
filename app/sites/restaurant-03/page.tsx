import { createTerraMetadata } from "@/src/templates/restaurant-03/lib/metadata";
import { HomePage } from "@/src/templates/restaurant-03/pages/HomePage";
import { terraSite } from "@/src/templates/restaurant-03/src/data/site";

export const metadata = createTerraMetadata("Accueil", terraSite.seo.description);

export default function Page() {
  return <HomePage />;
}
