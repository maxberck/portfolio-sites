import { ServicesPage } from "@/src/templates/garage-01/pages/ServicesPage";
import { createAtelierNoirMetadata } from "@/src/templates/garage-01/lib/metadata";

export const metadata = createAtelierNoirMetadata("Services", "Entretien, diagnostic, freinage, pneumatiques et contrôles présentés par Atelier Noir.");

export default function Page() { return <ServicesPage />; }
