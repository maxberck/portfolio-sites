import { PageHero } from "@/src/templates/garage-04/components/PageHero";
import { carrosserie42Site } from "@/src/templates/garage-04/src/data/site";

export function ContactPage() {
  return (
    <>
      <PageHero index="05" eyebrow="CONTACT / ACCÈS" title="CONTACT" body="Un premier échange sert à comprendre le type de dommage. La décision de réparation vient après inspection réelle de la pièce ou du véhicule." />
      <section className="c42-contact-layout">
        <div className="c42-contact-panel c42-contact-panel--dark">
          <span className="c42-kicker">APPELER L’ATELIER</span>
          <a className="c42-contact-phone" href={`tel:${carrosserie42Site.contact.phone.replace(/\s/g, "")}`}>{carrosserie42Site.contact.phone}</a>
          <a href={`mailto:${carrosserie42Site.contact.email}`}>{carrosserie42Site.contact.email}</a>
        </div>
        <div className="c42-contact-panel">
          <span className="c42-kicker">LOCALISATION</span>
          <h2>{carrosserie42Site.contact.location}</h2>
          <p>Zone fictive de Bruxelles utilisée pour la démonstration. Aucun plan interactif ou service de localisation en direct n’est intégré.</p>
        </div>
        <div className="c42-hours">
          <span className="c42-kicker">HORAIRES</span>
          {carrosserie42Site.hours.map((item) => <div key={item.days}><span>{item.days}</span><strong>{item.hours}</strong></div>)}
        </div>
        <div className="c42-contact-panel c42-contact-panel--oxide">
          <span className="c42-kicker">SITE DE DÉMONSTRATION</span>
          <p>{carrosserie42Site.contact.note}</p>
          <p>Aucun devis, rendez-vous, dépôt de dossier ou upload de photo n’est envoyé depuis ce site.</p>
        </div>
      </section>
    </>
  );
}
