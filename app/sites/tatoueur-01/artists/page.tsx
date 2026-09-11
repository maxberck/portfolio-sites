import type { Metadata } from "next";

import { blackRitualSite } from "@/src/templates/tatoueur-01/data/site";
import { ArtistsPage } from "@/src/templates/tatoueur-01/pages/ArtistsPage";

export const metadata: Metadata = {
  title: "Artists",
  description: blackRitualSite.seo.artists.description,
};

export default function Page() {
  return <ArtistsPage />;
}
