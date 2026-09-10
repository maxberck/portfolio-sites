import { kuroSite } from "../src/data/site";

export function VisitDetails() {
  return (
    <div className="kuro-visit-details">
      <div className="kuro-visit-details__block">
        <p className="kuro-meta-label">Adresse</p>
        <p>{kuroSite.contact.location}</p>
        <p className="kuro-muted">{kuroSite.contact.access}</p>
      </div>

      <div className="kuro-visit-details__block">
        <p className="kuro-meta-label">Horaires</p>
        <dl className="kuro-hours">
          {kuroSite.hours.map((row) => (
            <div key={row.days}>
              <dt>{row.days}</dt>
              <dd>{row.hours}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="kuro-visit-details__block">
        <p className="kuro-meta-label">Contact</p>
        <p><a href={`tel:${kuroSite.contact.phone.replace(/\s/g, "")}`}>{kuroSite.contact.phone}</a></p>
        <p><a href={`mailto:${kuroSite.contact.email}`}>{kuroSite.contact.email}</a></p>
      </div>
    </div>
  );
}
