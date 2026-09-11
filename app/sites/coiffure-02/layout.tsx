import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";

import { DistrictFooter } from "@/src/templates/coiffure-02/components/DistrictFooter";
import { DistrictRail } from "@/src/templates/coiffure-02/components/DistrictRail";
import { districtCutThemeStyle } from "@/src/templates/coiffure-02/lib/theme";
import { districtCutSite } from "@/src/templates/coiffure-02/src/data/site";
import "@/src/templates/coiffure-02/styles/district-cut.css";

const districtDisplay = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-district-display",
  display: "swap",
});

const districtBody = Manrope({
  subsets: ["latin"],
  variable: "--font-district-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: districtCutSite.seo.title,
  description: districtCutSite.seo.description,
  robots: { index: false, follow: true },
};

export default function DistrictCutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`district-cut-site ${districtDisplay.variable} ${districtBody.variable}`} style={districtCutThemeStyle}>
      <div className="district-shell">
        <DistrictRail />
        <div className="district-main">
          <main>{children}</main>
          <DistrictFooter />
        </div>
      </div>
    </div>
  );
}
