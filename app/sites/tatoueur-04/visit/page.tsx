import type { Metadata } from "next";

import { matiereSite } from "@/src/templates/tatoueur-04/data/site";
import { VisitPage } from "@/src/templates/tatoueur-04/pages/VisitPage";

export const metadata: Metadata = {
  title: matiereSite.seo.visit.title,
  description: matiereSite.seo.visit.description,
};

export default function Page() {
  return <VisitPage />;
}
