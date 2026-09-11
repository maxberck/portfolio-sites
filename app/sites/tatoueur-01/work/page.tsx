import type { Metadata } from "next";

import { blackRitualSite } from "@/src/templates/tatoueur-01/data/site";
import { WorkPage } from "@/src/templates/tatoueur-01/pages/WorkPage";

export const metadata: Metadata = {
  title: "Work Index",
  description: blackRitualSite.seo.work.description,
};

export default function Page() {
  return <WorkPage />;
}
