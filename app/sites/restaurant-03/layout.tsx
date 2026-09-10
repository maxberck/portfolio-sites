import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

import { PortfolioReturnLink } from "@/src/templates/restaurant-03/components/PortfolioReturnLink";
import { TerraFooter } from "@/src/templates/restaurant-03/components/TerraFooter";
import { TerraHeader } from "@/src/templates/restaurant-03/components/TerraHeader";
import { terraThemeStyle } from "@/src/templates/restaurant-03/lib/theme";
import { terraSite } from "@/src/templates/restaurant-03/src/data/site";

const terraDisplay = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-terra-display",
  display: "swap",
});

const terraBody = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-terra-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: terraSite.seo.title,
  description: terraSite.seo.description,
  robots: { index: false, follow: true },
};

export default function TerraLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`terra-site ${terraDisplay.variable} ${terraBody.variable}`} style={terraThemeStyle}>
      <TerraHeader />
      <main className="terra-main">{children}</main>
      <TerraFooter />
      <PortfolioReturnLink />
    </div>
  );
}
