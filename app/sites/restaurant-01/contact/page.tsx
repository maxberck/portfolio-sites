import { createSilexMetadata } from "@/src/templates/restaurant-01/lib/metadata";
import { ContactPage } from "@/src/templates/restaurant-01/pages/ContactPage";

export const metadata = createSilexMetadata(
  "Contact",
  "Informations pratiques fictives de Maison Silex : adresse de démonstration, horaires, téléphone et contact."
);

export default function Page() {
  return <ContactPage />;
}
