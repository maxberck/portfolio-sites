import { createTorqueMetadata } from "@/src/templates/garage-02/lib/metadata";
import { WorkshopPage } from "@/src/templates/garage-02/pages/WorkshopPage";

export const metadata = createTorqueMetadata(
  "Atelier",
  "Méthode et environnement de travail du garage fictif Torque Works.",
);

export default function Page() {
  return <WorkshopPage />;
}
