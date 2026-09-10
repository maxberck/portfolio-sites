import Link from "next/link";

import { silexSite } from "../src/data/site";

export function VisitPanel() {
  return (
    <section className="silex-visit-poster" data-silex-chapter="visit-poster" aria-labelledby="silex-visit-title">
      <div className="silex-visit-poster__number">06</div>
      <div className="silex-visit-poster__title">
        <span>Le soir,</span>
        <h2 id="silex-visit-title">Bruxelles</h2>
      </div>

      <div className="silex-visit-poster__details">
        <div>
          <p>Adresse de démonstration</p>
          <strong>{silexSite.contact.location}</strong>
          <span>{silexSite.contact.access}</span>
        </div>
        <div className="silex-visit-poster__hours">
          {silexSite.hours.map((row) => (
            <p key={row.days}>
              <span>{row.days}</span>
              <strong>{row.hours}</strong>
            </p>
          ))}
        </div>
        <div className="silex-visit-poster__contact">
          <a href={`tel:${silexSite.contact.phone.replace(/\s/g, "")}`}>{silexSite.contact.phone}</a>
          <a href={`mailto:${silexSite.contact.email}`}>{silexSite.contact.email}</a>
          <Link href="/sites/restaurant-01/contact">Contact ↗</Link>
        </div>
      </div>
    </section>
  );
}
