import type { Metadata } from "next";

import { matiereSite } from "@/src/templates/tatoueur-04/data/site";
import { ArtistsPage } from "@/src/templates/tatoueur-04/pages/ArtistsPage";

export const metadata: Metadata = {
  title: matiereSite.seo.artists.title,
  description: matiereSite.seo.artists.description,
};

export default function Page() {
  return <ArtistsPage />;
}
