import { ProjectsPage } from "@/src/templates/garage-01/pages/ProjectsPage";
import { createAtelierNoirMetadata } from "@/src/templates/garage-01/lib/metadata";

export const metadata = createAtelierNoirMetadata("Réalisations", "Cas d’intervention fictifs illustrant la présentation du travail d’un atelier automobile.");

export default function Page() { return <ProjectsPage />; }
