import type { ReactNode } from "react";

import "@/src/portfolio/styles/portfolio.css";

export default function PortfolioLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="portfolio-shell">{children}</div>;
}
