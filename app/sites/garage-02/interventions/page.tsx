import { createTorqueMetadata } from "@/src/templates/garage-02/lib/metadata";
import { InterventionsPage } from "@/src/templates/garage-02/pages/InterventionsPage";

export const metadata = createTorqueMetadata(
  "Interventions",
  "Distribution, embrayage, suspension, échappement, refroidissement et mécanique générale chez Torque Works.",
);

export default function Page() {
  return <InterventionsPage />;
}
