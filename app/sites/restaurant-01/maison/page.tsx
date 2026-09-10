import { createSilexMetadata } from "@/src/templates/restaurant-01/lib/metadata";
import { MaisonPage } from "@/src/templates/restaurant-01/pages/MaisonPage";

export const metadata = createSilexMetadata(
  "La Maison",
  "La philosophie fictive de Maison Silex, sa cheffe, sa salle et son approche du produit et du service."
);

export default function Page() {
  return <MaisonPage />;
}
