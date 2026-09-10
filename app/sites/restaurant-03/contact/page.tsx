import { createTerraMetadata } from "@/src/templates/restaurant-03/lib/metadata";
import { ContactPage } from "@/src/templates/restaurant-03/pages/ContactPage";

export const metadata = createTerraMetadata("Contact", "Adresse de démonstration, horaires et contact de Terra à Bruxelles.");

export default function Page() {
  return <ContactPage />;
}
