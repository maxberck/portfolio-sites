import type { Metadata } from "next";

import { luckySite } from "@/src/templates/tatoueur-03/data/site";
import { WorkPage } from "@/src/templates/tatoueur-03/pages/WorkPage";

export const metadata: Metadata = {
  title: "Flash Book",
  description: luckySite.seo.work.description,
};

export default function Page() {
  return <WorkPage />;
}
