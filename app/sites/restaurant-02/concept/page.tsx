import { createDistrict88Metadata } from "@/src/templates/restaurant-02/lib/metadata";
import { ConceptPage } from "@/src/templates/restaurant-02/pages/ConceptPage";

export const metadata = createDistrict88Metadata("Concept", "Le manifeste fictif District 88 autour du feu, de la texture et de la sauce.");

export default function Page() {
  return <ConceptPage />;
}
