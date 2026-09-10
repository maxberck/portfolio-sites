import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Portfolio — Sites vitrines",
    template: "%s | Portfolio",
  },
  description:
    "Catalogue de sites vitrines web conçus comme de véritables expériences navigables.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
