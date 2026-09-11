import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import { MatiereShell } from "@/src/templates/tatoueur-04/components/MatiereShell";
import { matiereSite } from "@/src/templates/tatoueur-04/data/site";
import { matiereThemeStyle } from "@/src/templates/tatoueur-04/lib/theme";
import "@/src/templates/tatoueur-04/styles/matiere.css";

const matiereSerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-matiere-serif",
  display: "swap",
  weight: ["400", "500", "600"],
});

const matiereSans = Inter({
  subsets: ["latin"],
  variable: "--font-matiere-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: matiereSite.seo.home.title,
    template: "%s — Matière",
  },
  description: matiereSite.seo.home.description,
  robots: { index: false, follow: true },
};

export default function MatiereLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`matiere-site ${matiereSerif.variable} ${matiereSans.variable}`}
      style={matiereThemeStyle}
    >
      <MatiereShell>{children}</MatiereShell>
    </div>
  );
}
