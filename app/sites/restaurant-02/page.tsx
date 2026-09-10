import { createDistrict88Metadata } from "@/src/templates/restaurant-02/lib/metadata";
import { HomePage } from "@/src/templates/restaurant-02/pages/HomePage";
import { district88Site } from "@/src/templates/restaurant-02/src/data/site";

export const metadata = createDistrict88Metadata("Accueil", district88Site.seo.description);

export default function Page() {
  return <HomePage />;
}
