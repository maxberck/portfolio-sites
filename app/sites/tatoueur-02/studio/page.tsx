import type { Metadata } from "next";

import { lineGallerySite } from "@/src/templates/tatoueur-02/data/site";
import { StudioPage } from "@/src/templates/tatoueur-02/pages/StudioPage";

export const metadata: Metadata = {
  title: "Studio",
  description: lineGallerySite.seo.studio.description,
};

export default function Page() {
  return <StudioPage />;
}
