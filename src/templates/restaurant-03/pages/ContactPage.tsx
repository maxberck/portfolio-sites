import { EditorialImage } from "@/src/templates/restaurant-03/components/EditorialImage";
import { terraSite } from "@/src/templates/restaurant-03/src/data/site";

export function ContactPage() {
  return (
    <div className="terra-page terra-contact-page">
      <header className="terra-page-intro terra-contact-page__intro">
        <p>Ixelles / Bruxelles</p>
        <h1>VENIR CHEZ TERRA</h1>
        <p>Une table fictive de quartier, accessible à pied et pensée pour les longues fins de repas.</p>
      </header>

      <div className="terra-contact-page__layout">
        <EditorialImage image={terraSite.contactImage} className="terra-contact-page__image" priority sizes="(max-width: 768px) 100vw, 58vw" />

        <section className="terra-contact-card" aria-label="Informations pratiques Terra">
          <div>
            <p className="terra-contact-card__label">Adresse</p>
            <p>{terraSite.contact.address}</p>
            <p>{terraSite.contact.access}</p>
          </div>

          <div>
            <p className="terra-contact-card__label">Horaires</p>
            {terraSite.hours.map((row) => (
              <p className="terra-contact-card__hours" key={row.days}>
                <span>{row.days}</span>
                <span>{row.hours}</span>
              </p>
            ))}
          </div>

          <div>
            <p className="terra-contact-card__label">Contact</p>
            <a href={`tel:${terraSite.contact.phone.replace(/\s/g, "")}`}>{terraSite.contact.phone}</a>
            <a href={`mailto:${terraSite.contact.email}`}>{terraSite.contact.email}</a>
            <p>{terraSite.social.instagram}</p>
          </div>

          <p className="terra-contact-card__disclosure">{terraSite.demoDisclosure}</p>
        </section>
      </div>
    </div>
  );
}
