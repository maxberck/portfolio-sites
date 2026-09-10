import { WorkshopPage } from "@/src/templates/garage-01/pages/WorkshopPage";
import { createAtelierNoirMetadata } from "@/src/templates/garage-01/lib/metadata";

export const metadata = createAtelierNoirMetadata("Atelier", "Méthode, environnement de travail et principes de diagnostic d’Atelier Noir.");

export default function Page() { return <WorkshopPage />; }
