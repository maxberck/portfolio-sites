import { createSilexMetadata } from "@/src/templates/restaurant-01/lib/metadata";
import { GalleryPage } from "@/src/templates/restaurant-01/pages/GalleryPage";

export const metadata = createSilexMetadata(
  "Galerie",
  "Galerie éditoriale fictive de Maison Silex : assiettes, matières, produits et atmosphère de salle."
);

export default function Page() {
  return <GalleryPage />;
}
