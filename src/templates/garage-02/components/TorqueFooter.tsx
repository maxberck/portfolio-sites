import Link from "next/link";

import { torqueWorksSite } from "../src/data/site";

export function TorqueFooter() {
  return (
    <footer className="tw-footer">
      <div className="tw-shell tw-footer__grid">
        <div>
          <p className="tw-footer__brand">TORQUE / WORKS</p>
          <p className="tw-footer__disclosure">{torqueWorksSite.demoDisclosure}</p>
        </div>
        <nav className="tw-footer__nav" aria-label="Navigation de pied de page">
          {torqueWorksSite.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="tw-footer__meta">
          <span>{torqueWorksSite.contact.location}</span>
          <Link href="/">Retour au portfolio ↗</Link>
        </div>
      </div>
    </footer>
  );
}
