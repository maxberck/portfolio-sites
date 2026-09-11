import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ChromaticFooter } from "@/src/templates/coiffure-04/components/ChromaticFooter";
import { ChromaticHeader } from "@/src/templates/coiffure-04/components/ChromaticHeader";
import { chromaticSite } from "@/src/templates/coiffure-04/data/site";
import { chromaticThemeStyle } from "@/src/templates/coiffure-04/lib/theme";
import "@/src/templates/coiffure-04/styles/chromatic.css";

const chromaticSans = Inter({ subsets: ["latin"], variable: "--font-chromatic", display: "swap" });

export const metadata: Metadata = {
  title: chromaticSite.seo.title,
  description: chromaticSite.seo.description,
  robots: { index: false, follow: true },
};

export default function ChromaticLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`chromatic-site ${chromaticSans.variable}`} style={chromaticThemeStyle}>
      <ChromaticHeader />
      <main>{children}</main>
      <ChromaticFooter />
    </div>
  );
}
