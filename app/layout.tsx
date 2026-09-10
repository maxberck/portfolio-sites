import type { Metadata } from "next";
import type { ReactNode } from "react";

import { getPublicSiteUrl } from "@/src/portfolio/lib/seo";

import "./globals.css";

const siteUrl = getPublicSiteUrl();

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Portfolio — Sites vitrines",
    template: "%s | Portfolio",
  },
  description:
    "Catalogue de sites vitrines web conçus comme de véritables expériences navigables.",
  openGraph: {
    type: "website",
    locale: "fr_BE",
    title: "Portfolio — Sites vitrines",
    description:
      "Catalogue de sites vitrines web conçus comme de véritables expériences navigables.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
