import type { Metadata } from "next";

import { luckySite } from "@/src/templates/tatoueur-03/data/site";
import { HomePage } from "@/src/templates/tatoueur-03/pages/HomePage";

export const metadata: Metadata = {
  title: "Shop",
  description: luckySite.seo.home.description,
};

export default function Page() {
  return <HomePage />;
}
