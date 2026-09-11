import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import { LineGalleryShell } from "@/src/templates/tatoueur-02/components/LineGalleryShell";
import { lineGallerySite } from "@/src/templates/tatoueur-02/data/site";
import { lineGalleryThemeStyle } from "@/src/templates/tatoueur-02/lib/theme";
import "@/src/templates/tatoueur-02/styles/line-gallery.css";

const lineSerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-line-serif",
  display: "swap",
  weight: ["400", "500"],
});

const lineSans = Inter({
  subsets: ["latin"],
  variable: "--font-line-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Line Gallery — Fine Line Tattoo Studio",
    template: "%s — Line Gallery",
  },
  description: lineGallerySite.seo.home.description,
  robots: { index: false, follow: true },
};

export default function LineGalleryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`line-site ${lineSerif.variable} ${lineSans.variable}`} style={lineGalleryThemeStyle}>
      <LineGalleryShell>{children}</LineGalleryShell>
    </div>
  );
}
