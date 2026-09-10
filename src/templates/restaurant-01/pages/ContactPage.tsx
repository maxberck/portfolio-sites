import Link from "next/link";

import { silexSite } from "../src/data/site";

export function ContactPage() {
  return (
    <div className="silex-contact-page" data-silex-page="contact-poster">
      <section className="silex-contact-poster">
        <div className="silex-contact-poster__top">
          <span>Adresse de démonstration</span>
          <p>Maison Silex · Bruxelles</p>
        </div>

        <h1>Bruxelles</h1>

        <div className="silex-contact-poster__grid">
          <div className="silex-contact-poster__address">
            <span>Nous trouver</span>
            <strong>{silexSite.contact.location}</strong>
            <p>{silexSite.contact.access}</p>
          </div>

          <div className="silex-contact-poster__hours">
            <span>Horaires</span>
            {silexSite.hours.map((row) => (
              <p key={row.days}><strong>{row.days}</strong><span>{row.hours}</span></p>
            ))}
          </div>

          <div className="silex-contact-poster__links">
            <a href={`mailto:${silexSite.contact.email}`}>{silexSite.contact.email}</a>
            <a href={`tel:${silexSite.contact.phone.replace(/\s/g, "")}`}>{silexSite.contact.phone}</a>
          </div>
        </div>

        <p className="silex-contact-poster__demo">{silexSite.demoDisclosure}</p>
      </section>

      <section className="silex-contact-next">
        <Link href="/sites/restaurant-01/menu">Menu <span>↗</span></Link>
        <Link href="/sites/restaurant-01/maison">La Maison <span>↗</span></Link>
      </section>
    </div>
  );
}
