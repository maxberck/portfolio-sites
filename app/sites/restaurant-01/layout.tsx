import type { Metadata } from "next";

import { SilexFooter } from "@/src/templates/restaurant-01/components/SilexFooter";
import { SilexHeader } from "@/src/templates/restaurant-01/components/SilexHeader";
import { silexThemeStyle } from "@/src/templates/restaurant-01/lib/theme";
import { silexSite } from "@/src/templates/restaurant-01/src/data/site";
import "@/src/templates/restaurant-01/styles/silex.css";

export const metadata: Metadata = {
  title: silexSite.seo.title,
  description: silexSite.seo.description,
  robots: { index: false, follow: true },
};

export default function SilexLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="silex-site" style={silexThemeStyle}>
      <SilexHeader />
      <main>{children}</main>
      <SilexFooter />
    </div>
  );
}
