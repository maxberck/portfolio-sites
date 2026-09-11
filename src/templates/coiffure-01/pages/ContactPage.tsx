import Link from "next/link";

import { EditorialHeading } from "../components/EditorialHeading";
import { maisonEliseSite } from "../src/data/site";

export function ContactPage() {
  return (
    <>
      <EditorialHeading
        eyebrow="Maison Élise · Bruxelles"
        title="Contact"
        intro="Une page volontairement simple : téléphone, email, horaires et adresse fictive. Aucun calendrier ou formulaire ne simule une disponibilité réelle."
      />

      <section className="elise-contact-page">
        <div className="elise-contact-page__primary">
          <p className="elise-label">Parler au salon</p>
          <a className="elise-contact-page__phone" href={`tel:${maisonEliseSite.contact.phone.replace(/\s/g, "")}`}>
            {maisonEliseSite.contact.phone}
          </a>
          <a href={`mailto:${maisonEliseSite.contact.email}`}>{maisonEliseSite.contact.email}</a>
          <p>{maisonEliseSite.contact.location}</p>
        </div>
        <div className="elise-contact-page__hours">
          <p className="elise-label">Horaires illustratifs</p>
          {maisonEliseSite.hours.map((row) => (
            <div key={row.days}><span>{row.days}</span><strong>{row.hours}</strong></div>
          ))}
        </div>
        <aside className="elise-contact-page__demo">
          <p className="elise-label">Démonstration</p>
          <p>{maisonEliseSite.demoDisclosure}</p>
          <p>{maisonEliseSite.contact.access}</p>
          <Link href="/categories/coiffure">Voir les autres directions coiffure ↗</Link>
        </aside>
      </section>
    </>
  );
}
