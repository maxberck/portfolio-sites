import type { Metadata } from "next";

import { matiereSite } from "@/src/templates/tatoueur-04/data/site";
import { StudioPage } from "@/src/templates/tatoueur-04/pages/StudioPage";

export const metadata: Metadata = {
  title: matiereSite.seo.studio.title,
  description: matiereSite.seo.studio.description,
};

export default function Page() {
  return <StudioPage />;
}
