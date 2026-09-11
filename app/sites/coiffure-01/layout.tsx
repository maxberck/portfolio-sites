import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { MaisonEliseFooter } from "@/src/templates/coiffure-01/components/MaisonEliseFooter";
import { MaisonEliseHeader } from "@/src/templates/coiffure-01/components/MaisonEliseHeader";
import { maisonEliseThemeStyle } from "@/src/templates/coiffure-01/lib/theme";
import { maisonEliseSite } from "@/src/templates/coiffure-01/src/data/site";
import "@/src/templates/coiffure-01/styles/maison-elise.css";

const eliseDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-elise-display",
  display: "swap",
});

const eliseBody = Manrope({
  subsets: ["latin"],
  variable: "--font-elise-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: maisonEliseSite.seo.title,
  description: maisonEliseSite.seo.description,
  robots: { index: false, follow: true },
};

export default function MaisonEliseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`maison-elise-site ${eliseDisplay.variable} ${eliseBody.variable}`} style={maisonEliseThemeStyle}>
      <MaisonEliseHeader />
      <main>{children}</main>
      <MaisonEliseFooter />
    </div>
  );
}
