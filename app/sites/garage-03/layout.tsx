import type { Metadata } from "next";

import { RelaisFooter } from "@/src/templates/garage-03/components/RelaisFooter";
import { RelaisHeader } from "@/src/templates/garage-03/components/RelaisHeader";
import { relais24ThemeStyle } from "@/src/templates/garage-03/lib/theme";
import { relais24Site } from "@/src/templates/garage-03/src/data/site";
import "@/src/templates/garage-03/styles/relais-24.css";

export const metadata: Metadata = {
  title: relais24Site.seo.title,
  description: relais24Site.seo.description,
  robots: { index: false, follow: true },
};

export default function Relais24Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relais-24-site" style={relais24ThemeStyle}>
      <RelaisHeader />
      <main className="r24-main">{children}</main>
      <RelaisFooter />
    </div>
  );
}
