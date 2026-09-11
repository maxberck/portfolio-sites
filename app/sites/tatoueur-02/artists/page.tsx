import type { Metadata } from "next";

import { lineGallerySite } from "@/src/templates/tatoueur-02/data/site";
import { ArtistsPage } from "@/src/templates/tatoueur-02/pages/ArtistsPage";

export const metadata: Metadata = {
  title: "Artists",
  description: lineGallerySite.seo.artists.description,
};

export default function Page() {
  return <ArtistsPage />;
}
