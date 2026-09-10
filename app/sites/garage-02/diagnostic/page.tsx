import { createTorqueMetadata } from "@/src/templates/garage-02/lib/metadata";
import { DiagnosticPage } from "@/src/templates/garage-02/pages/DiagnosticPage";

export const metadata = createTorqueMetadata(
  "Diagnostic",
  "Recherche de panne et diagnostic automobile : symptôme, mesure, cause et intervention.",
);

export default function Page() {
  return <DiagnosticPage />;
}
