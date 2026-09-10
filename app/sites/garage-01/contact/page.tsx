import { ContactPage } from "@/src/templates/garage-01/pages/ContactPage";
import { createAtelierNoirMetadata } from "@/src/templates/garage-01/lib/metadata";

export const metadata = createAtelierNoirMetadata("Contact", "Coordonnées et horaires fictifs d’Atelier Noir à Bruxelles.");

export default function Page() { return <ContactPage />; }
