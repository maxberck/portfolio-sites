import { createDistrict88Metadata } from "@/src/templates/restaurant-02/lib/metadata";
import { GalleryPage } from "@/src/templates/restaurant-02/pages/GalleryPage";

export const metadata = createDistrict88Metadata("Galerie", "Contact sheet fictive District 88 : food, service et cuisine au flash.");

export default function Page() {
  return <GalleryPage />;
}
