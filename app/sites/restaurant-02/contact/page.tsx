import { createDistrict88Metadata } from "@/src/templates/restaurant-02/lib/metadata";
import { ContactPage } from "@/src/templates/restaurant-02/pages/ContactPage";

export const metadata = createDistrict88Metadata("Contact", "Adresse, horaires et coordonnées fictives de District 88 à Bruxelles.");

export default function Page() {
  return <ContactPage />;
}
