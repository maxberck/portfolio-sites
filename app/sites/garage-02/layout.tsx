import type { Metadata } from "next";

import { TorqueFooter } from "@/src/templates/garage-02/components/TorqueFooter";
import { TorqueHeader } from "@/src/templates/garage-02/components/TorqueHeader";
import { torqueWorksThemeStyle } from "@/src/templates/garage-02/lib/theme";
import { torqueWorksSite } from "@/src/templates/garage-02/src/data/site";
import "@/src/templates/garage-02/styles/torque-works.css";

export const metadata: Metadata = {
  title: torqueWorksSite.seo.title,
  description: torqueWorksSite.seo.description,
  robots: { index: false, follow: true },
};

export default function TorqueWorksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="torque-works-site" style={torqueWorksThemeStyle}>
      <TorqueHeader />
      <main className="tw-main">{children}</main>
      <TorqueFooter />
    </div>
  );
}
