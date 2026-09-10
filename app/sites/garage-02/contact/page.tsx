import { createTorqueMetadata } from "@/src/templates/garage-02/lib/metadata";
import { ContactPage } from "@/src/templates/garage-02/pages/ContactPage";

export const metadata = createTorqueMetadata(
  "Contact",
  "Coordonnées et horaires de démonstration du garage fictif Torque Works à Bruxelles.",
);

export default function Page() {
  return <ContactPage />;
}
