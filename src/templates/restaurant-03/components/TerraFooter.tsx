import Link from "next/link";

import { terraSite } from "@/src/templates/restaurant-03/src/data/site";

export function TerraFooter() {
  return (
    <footer className="terra-footer">
      <div className="terra-footer__brand">
        <p className="terra-footer__wordmark">Terra</p>
        <p>{terraSite.business.descriptor}</p>
      </div>

      <div className="terra-footer__info">
        <p>{terraSite.contact.address}</p>
        <p>{terraSite.contact.phone}</p>
        <a href={`mailto:${terraSite.contact.email}`}>{terraSite.contact.email}</a>
      </div>

      <nav className="terra-footer__nav" aria-label="Navigation de pied de page Terra">
        {terraSite.navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="terra-footer__meta">
        <p>{terraSite.demoDisclosure}</p>
        <p>{terraSite.social.instagram}</p>
      </div>
    </footer>
  );
}
