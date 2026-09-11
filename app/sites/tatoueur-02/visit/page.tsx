import type { Metadata } from "next";

import { lineGallerySite } from "@/src/templates/tatoueur-02/data/site";
import { VisitPage } from "@/src/templates/tatoueur-02/pages/VisitPage";

export const metadata: Metadata = {
  title: "Visit",
  description: lineGallerySite.seo.visit.description,
};

export default function Page() {
  return <VisitPage />;
}
