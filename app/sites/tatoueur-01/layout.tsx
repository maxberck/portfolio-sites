import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";

import { BlackRitualShell } from "@/src/templates/tatoueur-01/components/BlackRitualShell";
import { blackRitualSite } from "@/src/templates/tatoueur-01/data/site";
import { blackRitualThemeStyle } from "@/src/templates/tatoueur-01/lib/theme";
import "@/src/templates/tatoueur-01/styles/black-ritual.css";
import "@/src/templates/tatoueur-01/styles/black-ritual-legibility.css";

const ritualDisplay = Oswald({ subsets: ["latin"], variable: "--font-ritual-display", display: "swap" });
const ritualSans = Inter({ subsets: ["latin"], variable: "--font-ritual-sans", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Black Ritual — Blackwork Tattoo Studio",
    template: "%s — Black Ritual",
  },
  description: blackRitualSite.seo.home.description,
  robots: { index: false, follow: true },
};

export default function BlackRitualLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`ritual-site ${ritualDisplay.variable} ${ritualSans.variable}`} style={blackRitualThemeStyle}>
      <BlackRitualShell>{children}</BlackRitualShell>
    </div>
  );
}
