import type { Metadata } from "next";

import { KuroFooter } from "@/src/templates/restaurant-04/components/KuroFooter";
import { KuroHeader } from "@/src/templates/restaurant-04/components/KuroHeader";
import { kuroThemeStyle } from "@/src/templates/restaurant-04/lib/theme";
import { kuroSite } from "@/src/templates/restaurant-04/src/data/site";
import "@/src/templates/restaurant-04/styles/kuro.css";

export const metadata: Metadata = {
  title: kuroSite.seo.title,
  description: kuroSite.seo.description,
  robots: { index: false, follow: true },
};

export default function KuroLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="kuro-site" style={kuroThemeStyle}>
      <KuroHeader />
      <main className="kuro-main">{children}</main>
      <KuroFooter />
    </div>
  );
}
