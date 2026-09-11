import { blackRitualSite, ritualHours } from "../data/site";

export function VisitPage() {
  return (
    <div className="ritual-subpage ritual-visit-page">
      <header className="ritual-visit-hero">
        <p className="ritual-kicker">BRUSSELS / INFORMATION</p>
        <h1>VISIT</h1>
        <p>
          This is a fictional studio created for a portfolio demonstration. The contact details below are not a real booking channel.
        </p>
      </header>

      <section className="ritual-visit-grid" aria-label="Visit information">
        <div className="ritual-visit-grid__address">
          <p className="ritual-kicker">ADDRESS / 01</p>
          <address>
            <strong>BLACK RITUAL</strong>
            <span>{blackRitualSite.contact.address}</span>
            <a href={`mailto:${blackRitualSite.contact.email}`}>{blackRitualSite.contact.email}</a>
            <a href={`tel:${blackRitualSite.contact.phone.replace(/\s/g, "")}`}>{blackRitualSite.contact.phone}</a>
          </address>
        </div>

        <div className="ritual-visit-grid__hours">
          <p className="ritual-kicker">HOURS / 02</p>
          <dl>
            {ritualHours.map((row) => (
              <div key={row.days}>
                <dt>{row.days}</dt>
                <dd>{row.hours}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="ritual-visit-grid__access">
          <p className="ritual-kicker">ACCESS / 03</p>
          <h2>ARRIVE WITH TIME.</h2>
          <p>
            The fictional studio is presented as central Brussels, reachable by tram, metro and bicycle. Allow time for placement checks before a session.
          </p>
        </div>

        <div className="ritual-visit-grid__inquiry">
          <p className="ritual-kicker">INQUIRIES / 04</p>
          <h2>START WITH CONTEXT.</h2>
          <p>
            A useful inquiry includes body placement, approximate size, scheduling constraints and a few references that explain the intended mood.
          </p>
          <p className="ritual-demo-note">{blackRitualSite.contact.note}</p>
        </div>
      </section>
    </div>
  );
}
