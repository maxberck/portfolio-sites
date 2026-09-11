import type { ReactNode } from "react";

import { BlackRitualNav } from "./BlackRitualNav";

export function BlackRitualShell({ children }: { children: ReactNode }) {
  return (
    <div className="ritual-shell">
      <BlackRitualNav />
      <div className="ritual-canvas">
        <main>{children}</main>
        <div className="ritual-legal" aria-label="Demo disclosure">
          <span>BLACK RITUAL / PORTFOLIO DEMO</span>
          <span>FICTIONAL STUDIO · BRUSSELS</span>
        </div>
      </div>
    </div>
  );
}
