import { createKuroMetadata } from "@/src/templates/restaurant-04/lib/metadata";
import { GalleryPage } from "@/src/templates/restaurant-04/pages/GalleryPage";

export const metadata = createKuroMetadata(
  "Galerie",
  "Galerie éditoriale de démonstration Kuro : cuisine, matières, lumière et atmosphère d'une table japonaise contemporaine.",
);

export default function Page() {
  return <GalleryPage />;
}
