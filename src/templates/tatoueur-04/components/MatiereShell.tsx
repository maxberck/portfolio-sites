import type { ReactNode } from "react";

import { FolioNav } from "./FolioNav";

export function MatiereShell({ children }: { children: ReactNode }) {
  return (
    <div className="matiere-shell">
      <div className="matiere-shell__mark" aria-hidden="true">M/04</div>
      <FolioNav />
      <div className="matiere-shell__content">{children}</div>
    </div>
  );
}
