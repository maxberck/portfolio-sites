import type { Metadata } from "next";

import { lineGallerySite } from "@/src/templates/tatoueur-02/data/site";
import { WorkPage } from "@/src/templates/tatoueur-02/pages/WorkPage";

export const metadata: Metadata = {
  title: "Work Catalogue",
  description: lineGallerySite.seo.work.description,
};

export default function Page() {
  return <WorkPage />;
}
