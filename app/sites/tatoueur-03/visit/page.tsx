import type { Metadata } from "next";

import { luckySite } from "@/src/templates/tatoueur-03/data/site";
import { VisitPage } from "@/src/templates/tatoueur-03/pages/VisitPage";

export const metadata: Metadata = {
  title: "Visit",
  description: luckySite.seo.visit.description,
};

export default function Page() {
  return <VisitPage />;
}
