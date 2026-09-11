import type { Metadata } from "next";

import { matiereSite } from "@/src/templates/tatoueur-04/data/site";
import { WorkPage } from "@/src/templates/tatoueur-04/pages/WorkPage";

export const metadata: Metadata = {
  title: matiereSite.seo.work.title,
  description: matiereSite.seo.work.description,
};

export default function Page() {
  return <WorkPage />;
}
