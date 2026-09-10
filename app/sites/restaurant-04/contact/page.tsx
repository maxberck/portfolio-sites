import { createKuroMetadata } from "@/src/templates/restaurant-04/lib/metadata";
import { ContactPage } from "@/src/templates/restaurant-04/pages/ContactPage";

export const metadata = createKuroMetadata(
  "Contact",
  "Coordonnées, accès et horaires fictifs de Kuro, site vitrine de démonstration pour une table japonaise contemporaine à Bruxelles.",
);

export default function Page() {
  return <ContactPage />;
}
