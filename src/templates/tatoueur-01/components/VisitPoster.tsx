import Link from "next/link";

import { blackRitualSite, ritualHours } from "../data/site";

export function VisitPoster() {
  return (
    <section className="ritual-visit-poster" aria-labelledby="visit-poster-title">
      <p className="ritual-kicker">BRUSSELS / VISIT</p>
      <h2 id="visit-poster-title">COME BY.<br />DON&apos;T RUSH.</h2>
      <address>
        <span>{blackRitualSite.contact.address}</span>
        <a href={`mailto:${blackRitualSite.contact.email}`}>{blackRitualSite.contact.email}</a>
      </address>
      <dl>
        {ritualHours.map((row) => (
          <div key={row.days}>
            <dt>{row.days}</dt>
            <dd>{row.hours}</dd>
          </div>
        ))}
      </dl>
      <p className="ritual-demo-note">{blackRitualSite.contact.note}</p>
      <Link className="ritual-text-link ritual-text-link--bone" href="/sites/tatoueur-01/visit">Full visit information ↗</Link>
    </section>
  );
}
