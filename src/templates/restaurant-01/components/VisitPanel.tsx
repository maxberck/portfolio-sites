import { silexSite } from "../src/data/site";

export function VisitPanel() {
  return (
    <section className="silex-visit" aria-labelledby="silex-visit-title">
      <div className="silex-visit__lead">
        <p className="silex-section-label">Venir à la Maison</p>
        <h2 id="silex-visit-title">Une table du soir, au cœur de Bruxelles.</h2>
        <p>{silexSite.contact.location}</p>
        <p>{silexSite.contact.access}</p>
      </div>

      <div className="silex-visit__hours">
        {silexSite.hours.map((row) => (
          <div className="silex-hours-row" key={row.days}>
            <span>{row.days}</span>
            <strong>{row.hours}</strong>
          </div>
        ))}
      </div>

      <div className="silex-visit__contact">
        <a href={`tel:${silexSite.contact.phone.replace(/\s/g, "")}`}>{silexSite.contact.phone}</a>
        <a href={`mailto:${silexSite.contact.email}`}>{silexSite.contact.email}</a>
      </div>
    </section>
  );
}
