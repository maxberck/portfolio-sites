import type { Metadata } from "next";

import { AtelierFooter } from "@/src/templates/garage-01/components/AtelierFooter";
import { AtelierHeader } from "@/src/templates/garage-01/components/AtelierHeader";
import { atelierNoirThemeStyle } from "@/src/templates/garage-01/lib/theme";
import { atelierNoirSite } from "@/src/templates/garage-01/src/data/site";
import "@/src/templates/garage-01/styles/atelier-noir.css";

export const metadata: Metadata = {
  title: atelierNoirSite.seo.title,
  description: atelierNoirSite.seo.description,
  robots: { index: false, follow: true },
};

export default function AtelierNoirLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="atelier-noir-site" style={atelierNoirThemeStyle}>
      <AtelierHeader />
      <main className="an-main">{children}</main>
      <AtelierFooter />
    </div>
  );
}
