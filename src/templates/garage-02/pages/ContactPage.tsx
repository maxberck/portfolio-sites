import { PageHero } from "../components/PageHero";
import { torqueWorksSite } from "../src/data/site";

export function ContactPage() {
  return (
    <div className="tw-page">
      <PageHero
        eyebrow="Coordonnées de démonstration"
        title="CONTACT ATELIER"
        intro="Cette page montre la façon dont un garage peut rendre ses coordonnées, horaires et accès immédiatement lisibles, sans faux formulaire ni fausse prise de rendez-vous."
        code="CONTACT"
      />
      <section className="tw-section tw-contact-page">
        <div className="tw-shell tw-contact-grid">
          <div className="tw-contact-block">
            <span>ADRESSE</span>
            <h2>{torqueWorksSite.contact.location}</h2>
            <p>{torqueWorksSite.contact.access}</p>
          </div>
          <div className="tw-contact-block">
            <span>TÉLÉPHONE</span>
            <a href={`tel:${torqueWorksSite.contact.phone.replace(/\s/g, "")}`}>{torqueWorksSite.contact.phone}</a>
            <span>E-MAIL</span>
            <a href={`mailto:${torqueWorksSite.contact.email}`}>{torqueWorksSite.contact.email}</a>
          </div>
          <div className="tw-hours">
            <span>HORAIRES</span>
            {torqueWorksSite.hours.map((row) => (
              <p key={row.days}><b>{row.days}</b><span>{row.hours}</span></p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
