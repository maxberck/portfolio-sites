import Link from "next/link";

import { PageHero } from "../components/PageHero";
import { atelierNoirSite } from "../src/data/site";

export function ContactPage() {
  return (
    <div className="an-page">
      <PageHero eyebrow="Contact · données fictives" title="NOUS TROUVER" intro="Une page de contact volontairement simple : coordonnées, horaires et accès. Aucun faux formulaire ni fausse prise de rendez-vous." />
      <section className="an-section an-section--tight">
        <div className="an-shell an-contact-grid">
          <div className="an-contact-block"><span>ADRESSE</span><h2>{atelierNoirSite.contact.location}</h2><p>{atelierNoirSite.contact.access}</p></div>
          <div className="an-contact-block"><span>CONTACT</span><p><a href={`tel:${atelierNoirSite.contact.phone.replace(/\s/g, "")}`}>{atelierNoirSite.contact.phone}</a></p><p><a href={`mailto:${atelierNoirSite.contact.email}`}>{atelierNoirSite.contact.email}</a></p></div>
          <div className="an-contact-block"><span>HORAIRES</span>{atelierNoirSite.hours.map((row) => <p className="an-hours" key={row.days}><b>{row.days}</b><em>{row.hours}</em></p>)}</div>
          <div className="an-contact-block an-contact-block--signal"><span>PORTFOLIO DEMO</span><p>{atelierNoirSite.demoDisclosure}</p><Link href="/">Retour au portfolio ↗</Link></div>
        </div>
      </section>
    </div>
  );
}
