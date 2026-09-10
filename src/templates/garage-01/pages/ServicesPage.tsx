import { PageHero } from "../components/PageHero";
import { atelierNoirSite } from "../src/data/site";

export function ServicesPage() {
  return (
    <div className="an-page">
      <PageHero eyebrow="Prestations" title="SERVICES" intro="Une sélection d’interventions d’entretien et de diagnostic présentées sans forfaits artificiels ni promesse de panne résolue avant contrôle." />
      <section className="an-section an-section--tight">
        <div className="an-shell an-service-list">
          {atelierNoirSite.services.map((service) => (
            <article key={service.code} className="an-service-row">
              <span className="an-service-row__code">{service.code}</span>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="an-callout">
        <div className="an-shell an-callout__grid"><p>UNE PIÈCE N’EST PAS UN DIAGNOSTIC.</p><p>Le site reste volontairement vitrine : pas de faux devis, pas de réservation simulée. Un vrai atelier adapterait cette page à ses prestations et méthodes réelles.</p></div>
      </section>
    </div>
  );
}
