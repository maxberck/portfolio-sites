import type { Metadata } from "next";

import { matiereSite } from "@/src/templates/tatoueur-04/data/site";
import { HomePage } from "@/src/templates/tatoueur-04/pages/HomePage";

export const metadata: Metadata = {
  title: "Index",
  description: matiereSite.seo.home.description,
};

export default function Page() {
  return <HomePage />;
}
