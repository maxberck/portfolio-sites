import { PageHero } from "../components/PageHero";
import { torqueWorksSite } from "../src/data/site";

export function InterventionsPage() {
  return (
    <div className="tw-page">
      <PageHero
        eyebrow="Mécanique générale"
        title="INTERVENTIONS"
        intro="Les opérations les plus courantes d’un atelier indépendant, présentées par organe et par symptôme — sans transformer le garage en boutique de pièces."
        code="MEC"
      />
      <section className="tw-section tw-ledger-page">
        <div className="tw-shell">
          <div className="tw-service-ledger tw-service-ledger--full">
            {torqueWorksSite.interventions.map((item) => (
              <article key={item.code} className="tw-service-line">
                <span className="tw-service-line__code">{item.code}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <span className="tw-service-line__status">SUR CONTRÔLE</span>
              </article>
            ))}
          </div>
          <div className="tw-note-block">
            <span>NOTE ATELIER</span>
            <p>Les intitulés sont volontairement concrets. Les opérations exactes dépendent toujours du véhicule, de son montage et du diagnostic constaté.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
