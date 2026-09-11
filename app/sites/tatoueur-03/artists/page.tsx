import type { Metadata } from "next";

import { luckySite } from "@/src/templates/tatoueur-03/data/site";
import { ArtistsPage } from "@/src/templates/tatoueur-03/pages/ArtistsPage";

export const metadata: Metadata = {
  title: "Artists",
  description: luckySite.seo.artists.description,
};

export default function Page() {
  return <ArtistsPage />;
}
