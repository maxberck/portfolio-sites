import type { ReactNode } from "react";

import { LuckyNav } from "./LuckyNav";

export function LuckyShell({ children }: { children: ReactNode }) {
  return (
    <div className="lucky-site-shell">
      <LuckyNav />
      <main className="lucky-site-shell__main">{children}</main>
    </div>
  );
}
