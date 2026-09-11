import type { Metadata } from "next";

import { lineGallerySite } from "@/src/templates/tatoueur-02/data/site";
import { HomePage } from "@/src/templates/tatoueur-02/pages/HomePage";

export const metadata: Metadata = {
  title: "Line Gallery — Fine Line Tattoo Studio",
  description: lineGallerySite.seo.home.description,
};

export default function Page() {
  return <HomePage />;
}
