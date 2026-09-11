import Link from "next/link";

import { PageHero } from "../components/PageHero";
import { atelierNoirSite } from "../src/data/site";

export function ContactPage() {
  return (
    <div className="an-page">
      <PageHero eyebrow="Contact · données fictives" title="NOUS TROUVER" intro="Téléphone, horaires et accès : juste ce qu’il faut pour une vitrine de garage. Aucun faux formulaire, devis instantané ou calendrier de réservation." />

      <section className="an-section an-section--tight an-contact-page">
        <div className="an-shell an-contact-layout">
          <div className="an-contact-info">
            <article className="an-contact-panel an-contact-panel--phone"><span>TÉLÉPHONE / 01</span><a href="tel:+3220000000">{atelierNoirSite.contact.phone}</a><p>Pour cette démonstration, le numéro est fictif.</p></article>
            <article className="an-contact-panel"><span>ADRESSE / 02</span><h2>{atelierNoirSite.contact.location}</h2><p>{atelierNoirSite.contact.access}</p></article>
            <article className="an-contact-panel"><span>HORAIRES / 03</span>{atelierNoirSite.hours.map((row) => <p className="an-hours" key={row.days}><b>{row.days}</b><em>{row.hours}</em></p>)}</article>
            <article className="an-contact-panel an-contact-panel--demo"><span>PORTFOLIO / DÉMO</span><p>{atelierNoirSite.demoDisclosure}</p><Link href="/">RETOUR AU PORTFOLIO ↗</Link></article>
          </div>

          <aside className="an-location-panel" aria-label="Schéma d’accès illustratif">
            <div className="an-location-panel__grid" aria-hidden="true"><span className="an-location-panel__road an-location-panel__road--x" /><span className="an-location-panel__road an-location-panel__road--y" /><span className="an-location-panel__marker">AN</span></div>
            <div className="an-location-panel__copy"><span>ZONE / BRUXELLES OUEST</span><strong>ATELIER NOIR</strong><p>Schéma purement illustratif — aucune carte temps réel n’est intégrée.</p></div>
          </aside>
        </div>
      </section>
    </div>
  );
}
