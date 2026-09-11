import type { Metadata } from "next";

import { luckySite } from "@/src/templates/tatoueur-03/data/site";
import { StudioPage } from "@/src/templates/tatoueur-03/pages/StudioPage";

export const metadata: Metadata = {
  title: "Shop Story",
  description: luckySite.seo.studio.description,
};

export default function Page() {
  return <StudioPage />;
}
