import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";

import { D88Footer } from "@/src/templates/restaurant-02/components/D88Footer";
import { D88Header } from "@/src/templates/restaurant-02/components/D88Header";
import { PortfolioReturnLink } from "@/src/templates/restaurant-02/components/PortfolioReturnLink";
import { district88ThemeStyle } from "@/src/templates/restaurant-02/lib/theme";
import { district88Site } from "@/src/templates/restaurant-02/src/data/site";
import "@/src/templates/restaurant-02/styles/district88.css";
import "@/src/templates/restaurant-02/styles/district88-gallery-fixes.css";

const d88Display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["800", "900"],
  variable: "--font-d88-display",
  display: "swap",
});

const d88Body = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-d88-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: district88Site.seo.title,
  description: district88Site.seo.description,
  robots: { index: false, follow: true },
};

export default function District88Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`d88-site ${d88Display.variable} ${d88Body.variable}`} style={district88ThemeStyle}>
      <D88Header />
      <main className="d88-main">{children}</main>
      <D88Footer />
      <PortfolioReturnLink />
    </div>
  );
}
