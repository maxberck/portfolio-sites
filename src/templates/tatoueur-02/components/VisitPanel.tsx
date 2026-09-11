import Link from "next/link";

import { lineGalleryHours, lineGallerySite } from "../data/site";

export function VisitPanel() {
  return (
    <section className="line-visit-panel" aria-labelledby="line-visit-panel-title">
      <div className="line-visit-panel__copy">
        <p className="line-kicker">VISIT / BRUSSELS</p>
        <h2 id="line-visit-panel-title">A quiet studio, by agreed time.</h2>
        <address>{lineGallerySite.contact.address}</address>
        <div className="line-visit-panel__hours">
          {lineGalleryHours.map((row) => (
            <div key={row.days}>
              <span>{row.days}</span>
              <span>{row.hours}</span>
            </div>
          ))}
        </div>
        <p>{lineGallerySite.contact.email}</p>
        <Link className="line-text-link" href="/sites/tatoueur-02/visit">Practical information ↗</Link>
      </div>
      <div className="line-visit-panel__space" aria-hidden="true" />
    </section>
  );
}
