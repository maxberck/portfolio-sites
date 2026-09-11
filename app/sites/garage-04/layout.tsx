import type { Metadata } from "next";

import { CarrosserieFooter } from "@/src/templates/garage-04/components/CarrosserieFooter";
import { CarrosserieHeader } from "@/src/templates/garage-04/components/CarrosserieHeader";
import { carrosserie42ThemeStyle } from "@/src/templates/garage-04/lib/theme";
import { carrosserie42Site } from "@/src/templates/garage-04/src/data/site";
import "@/src/templates/garage-04/styles/carrosserie-42.css";

export const metadata: Metadata = {
  title: carrosserie42Site.seo.title,
  description: carrosserie42Site.seo.description,
  robots: { index: false, follow: true },
};

export default function Carrosserie42Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="carrosserie-42-site" style={carrosserie42ThemeStyle}>
      <CarrosserieHeader />
      <main className="c42-main">{children}</main>
      <CarrosserieFooter />
    </div>
  );
}
