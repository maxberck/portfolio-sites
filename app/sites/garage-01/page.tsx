import { HomePage } from "@/src/templates/garage-01/pages/HomePage";
import { createAtelierNoirMetadata } from "@/src/templates/garage-01/lib/metadata";
import { atelierNoirSite } from "@/src/templates/garage-01/src/data/site";

export const metadata = createAtelierNoirMetadata("Accueil", atelierNoirSite.seo.description);

export default function Page() { return <HomePage />; }
