import { createTerraMetadata } from "@/src/templates/restaurant-03/lib/metadata";
import { GalleryPage } from "@/src/templates/restaurant-03/pages/GalleryPage";

export const metadata = createTerraMetadata("Galerie", "Autour de la table Terra : plats, gestes, produits et lumière méditerranéenne.");

export default function Page() {
  return <GalleryPage />;
}
