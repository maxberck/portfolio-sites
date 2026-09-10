import { createTorqueMetadata } from "@/src/templates/garage-02/lib/metadata";
import { HomePage } from "@/src/templates/garage-02/pages/HomePage";

export const metadata = createTorqueMetadata(
  "Accueil",
  "Torque Works, démonstration d’un atelier de mécanique générale et diagnostic à Bruxelles.",
);

export default function Page() {
  return <HomePage />;
}
