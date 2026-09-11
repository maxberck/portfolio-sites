import type { Metadata } from "next";

import { blackRitualSite } from "@/src/templates/tatoueur-01/data/site";
import { VisitPage } from "@/src/templates/tatoueur-01/pages/VisitPage";

export const metadata: Metadata = {
  title: "Visit",
  description: blackRitualSite.seo.visit.description,
};

export default function Page() {
  return <VisitPage />;
}
