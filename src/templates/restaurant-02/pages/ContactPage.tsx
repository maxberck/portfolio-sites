import { district88Site } from "@/src/templates/restaurant-02/src/data/site";

export function ContactPage() {
  return (
    <div className="d88-page d88-contact-page" data-d88-page="find-us">
      <header className="d88-contact-hero">
        <div>
          <p className="d88-kicker">BRUSSELS / LATE SERVICE</p>
          <h1>FIND US.</h1>
        </div>
        <div className="d88-contact-hero__red" aria-hidden="true">88</div>
      </header>

      <section className="d88-contact-grid">
        <article>
          <span>ADDRESS</span>
          <h2>{district88Site.contact.address}</h2>
          <p>{district88Site.contact.access}</p>
        </article>
        <article>
          <span>HOURS</span>
          {district88Site.hours.map((row) => (
            <p className="d88-contact-hours" key={row.days}><strong>{row.days}</strong><span>{row.hours}</span></p>
          ))}
        </article>
        <article>
          <span>CALL / MAIL</span>
          <a href={`tel:${district88Site.contact.phone.replace(/\s/g, "")}`}>{district88Site.contact.phone}</a>
          <a href={`mailto:${district88Site.contact.email}`}>{district88Site.contact.email}</a>
          <p>{district88Site.social.instagram}</p>
        </article>
      </section>

      <section className="d88-contact-statement">
        <strong>WALK IN.</strong>
        <p>Pas de formulaire. Pas de réservation en ligne. Cette page est une démonstration graphique et les coordonnées sont fictives.</p>
      </section>
    </div>
  );
}
