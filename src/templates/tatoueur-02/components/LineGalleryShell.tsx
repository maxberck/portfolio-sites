import type { ReactNode } from "react";

import { LineGalleryNav } from "./LineGalleryNav";

export function LineGalleryShell({ children }: { children: ReactNode }) {
  return (
    <div className="line-shell">
      <LineGalleryNav />
      <main className="line-main">{children}</main>
      <div className="line-legal" aria-label="Demo notice">
        <span>LINE GALLERY / BRUSSELS</span>
        <span>FICTIONAL PORTFOLIO DEMO</span>
      </div>
    </div>
  );
}
