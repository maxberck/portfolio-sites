import type { ReactNode } from "react";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

import "@/src/portfolio/styles/portfolio.css";

const portfolioDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-portfolio-display",
  display: "swap",
});

const portfolioMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-portfolio-mono",
  display: "swap",
});

export default function PortfolioLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div
      className={`${portfolioDisplay.variable} ${portfolioMono.variable} portfolio-shell`}
      data-portfolio-design="technical-minimalist"
    >
      {children}
    </div>
  );
}
