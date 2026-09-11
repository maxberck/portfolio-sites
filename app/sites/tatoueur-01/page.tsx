import type { Metadata } from "next";

import { blackRitualSite } from "@/src/templates/tatoueur-01/data/site";
import { HomePage } from "@/src/templates/tatoueur-01/pages/HomePage";

export const metadata: Metadata = {
  description: blackRitualSite.seo.home.description,
};

export default function Page() {
  return <HomePage />;
}
