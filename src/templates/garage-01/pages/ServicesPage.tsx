import Link from "next/link";

import { PageHero } from "../components/PageHero";
import { atelierNoirSite } from "../src/data/site";

export function ServicesPage() {
  return (
    <div className="an-page">
      <PageHero eyebrow="Prestations · atelier multimarque" title="SERVICES" intro="Entretien courant, diagnostic et réparation présentés comme un tableau d’atelier : une zone, une intervention, une raison concrète de contrôler." />

      <section className="an-section an-section--tight an-services-page">
        <div className="an-shell an-inspection-board">
          <div className="an-inspection-board__head" aria-hidden="true">
            <span>POSTE</span><span>INTERVENTION</span><span>CE QUI EST CONTRÔLÉ</span><span>STATUT</span>
          </div>
          {atelierNoirSite.services.map((service) => (
            <article key={service.code} className="an-inspection-row">
              <span className="an-inspection-row__bay">{service.code}</span>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
              <span className="an-inspection-row__status">CONTRÔLE</span>
            </article>
          ))}
        </div>
      </section>

      <section className="an-service-note">
        <div className="an-shell an-service-note__grid">
          <div><span>PROCÉDURE / 01</span><h2>Une pièce n’est pas un diagnostic.</h2></div>
          <p>Le site reste volontairement vitrine : aucun faux devis, aucune réservation simulée. Dans un vrai atelier, les opérations sont adaptées au véhicule et au constat réalisé sur place.</p>
          <Link className="an-button an-button--signal" href="/sites/garage-01/contact">CONTACT & HORAIRES</Link>
        </div>
      </section>
    </div>
  );
}
