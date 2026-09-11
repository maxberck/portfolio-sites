import { lineGalleryHours, lineGallerySite } from "../data/site";

export function VisitPage() {
  return (
    <div className="line-visit-page">
      <header className="line-page-intro">
        <p className="line-kicker">PRACTICAL / BRUSSELS</p>
        <h1>VISIT</h1>
        <p className="line-page-intro__lede">The studio is fictional; the information below exists only to complete this portfolio template.</p>
      </header>

      <section className="line-visit-layout" aria-label="Visit information">
        <aside className="line-visit-panel">
          <div className="line-visit-panel__copy">
            <p className="line-kicker">ADDRESS</p>
            <h2>Come with time, not a queue.</h2>
            <address>{lineGallerySite.contact.address}</address>
            <p>{lineGallerySite.access}</p>
          </div>
        </aside>

        <div className="line-visit-details">
          <section aria-labelledby="line-hours-title">
            <p className="line-kicker">HOURS</p>
            <h2 id="line-hours-title">Studio hours</h2>
            <div className="line-hours-list">
              {lineGalleryHours.map((row) => (
                <div key={row.days}>
                  <span>{row.days}</span>
                  <span>{row.hours}</span>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="line-contact-title">
            <p className="line-kicker">CONTACT</p>
            <h2 id="line-contact-title">Start with context.</h2>
            <p>{lineGallerySite.contact.email}</p>
            <p>{lineGallerySite.contact.phone}</p>
            <p>Include placement, approximate size and a few references that explain the direction you want to explore.</p>
          </section>

          <section aria-labelledby="line-demo-title">
            <p className="line-kicker">DEMO NOTE</p>
            <h2 id="line-demo-title">Portfolio only.</h2>
            <p>{lineGallerySite.contact.note}</p>
          </section>
        </div>
      </section>
    </div>
  );
}
