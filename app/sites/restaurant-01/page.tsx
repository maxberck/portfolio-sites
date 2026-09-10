import { createSilexMetadata } from "@/src/templates/restaurant-01/lib/metadata";
import { HomePage } from "@/src/templates/restaurant-01/pages/HomePage";

export const metadata = createSilexMetadata(
  "Accueil",
  "Maison Silex, démonstration d'une table gastronomique bruxelloise centrée sur la saison, le produit et une hospitalité précise."
);

export default function Page() {
  return <HomePage />;
}
