import Link from "next/link";

import { district88Site } from "@/src/templates/restaurant-02/src/data/site";

export function D88Footer() {
  return (
    <footer className="d88-footer">
      <div className="d88-footer__mark">D88</div>
      <div className="d88-footer__grid">
        <div>
          <p className="d88-kicker">FIND / EAT / REPEAT</p>
          <p>{district88Site.contact.address}</p>
          <p>{district88Site.contact.phone}</p>
        </div>
        <div>
          {district88Site.hours.map((row) => (
            <p key={row.days}><span>{row.days}</span><strong>{row.hours}</strong></p>
          ))}
        </div>
        <nav aria-label="Navigation de pied de page District 88">
          {district88Site.navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label.replace(/^\d+\s/, "")}</Link>
          ))}
          <Link href="/categories/restaurant">Portfolio ↗</Link>
        </nav>
      </div>
      <div className="d88-footer__legal">
        <span>{district88Site.social.instagram}</span>
        <span>{district88Site.demoDisclosure}</span>
      </div>
    </footer>
  );
}
