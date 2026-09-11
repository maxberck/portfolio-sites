import type { Metadata } from "next";
import { Bebas_Neue, Libre_Baskerville, Oswald } from "next/font/google";

import { LuckyShell } from "@/src/templates/tatoueur-03/components/LuckyShell";
import { luckySite } from "@/src/templates/tatoueur-03/data/site";
import { luckyThemeStyle } from "@/src/templates/tatoueur-03/lib/theme";
import "@/src/templates/tatoueur-03/styles/lucky-xiii.css";

const luckyDisplay = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-lucky-display",
  display: "swap",
  weight: "400",
});

const luckySerif = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-lucky-serif",
  display: "swap",
  weight: ["400", "700"],
});

const luckyUtility = Oswald({
  subsets: ["latin"],
  variable: "--font-lucky-utility",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Lucky XIII — Traditional Tattoo & Flash Shop",
    template: "%s — Lucky XIII",
  },
  description: luckySite.seo.home.description,
  robots: { index: false, follow: true },
};

export default function LuckyXiiiLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`lucky-site ${luckyDisplay.variable} ${luckySerif.variable} ${luckyUtility.variable}`}
      style={luckyThemeStyle}
    >
      <LuckyShell>{children}</LuckyShell>
    </div>
  );
}
