import type { Metadata } from "next";
import { Bodoni_Moda, DM_Sans } from "next/font/google";

import { SilexFooter } from "@/src/templates/restaurant-01/components/SilexFooter";
import { SilexHeader } from "@/src/templates/restaurant-01/components/SilexHeader";
import { silexThemeStyle } from "@/src/templates/restaurant-01/lib/theme";
import { silexSite } from "@/src/templates/restaurant-01/src/data/site";
import "@/src/templates/restaurant-01/styles/silex.css";

const silexDisplay = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-silex-display",
  display: "swap",
});

const silexBody = DM_Sans({
  subsets: ["latin"],
  variable: "--font-silex-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: silexSite.seo.title,
  description: silexSite.seo.description,
  robots: { index: false, follow: true },
};

export default function SilexLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`silex-site ${silexDisplay.variable} ${silexBody.variable}`}
      style={silexThemeStyle}
    >
      <SilexHeader />
      <main>{children}</main>
      <SilexFooter />
    </div>
  );
}
