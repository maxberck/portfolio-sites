import type { Metadata } from "next";

import { blackRitualSite } from "@/src/templates/tatoueur-01/data/site";
import { StudioPage } from "@/src/templates/tatoueur-01/pages/StudioPage";

export const metadata: Metadata = {
  title: "Studio",
  description: blackRitualSite.seo.studio.description,
};

export default function Page() {
  return <StudioPage />;
}
