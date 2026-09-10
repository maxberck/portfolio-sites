import { HomePage } from "@/src/templates/restaurant-04/pages/HomePage";
import { createKuroMetadata } from "@/src/templates/restaurant-04/lib/metadata";
import { kuroSite } from "@/src/templates/restaurant-04/src/data/site";

export const metadata = createKuroMetadata("Accueil", kuroSite.seo.description);

export default function Page() {
  return <HomePage />;
}
