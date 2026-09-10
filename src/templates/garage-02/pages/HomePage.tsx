import Link from "next/link";

import { WorkOrder } from "../components/WorkOrder";
import { torqueWorksSite } from "../src/data/site";

export function HomePage() {
  return (
    <div className="tw-page">
      <section className="tw-hero">
        <div className="tw-shell tw-hero__grid">
          <div className="tw-hero__copy">
            <p className="tw-kicker">{torqueWorksSite.hero.eyebrow}</p>
            <h1>{torqueWorksSite.hero.title}</h1>
            <p className="tw-hero__body">{torqueWorksSite.hero.body}</p>
            <div className="tw-actions">
              <Link className="tw-link" href="/sites/garage-02/interventions">Voir les interventions <span>↗</span></Link>
              <Link className="tw-link tw-link--quiet" href="/sites/garage-02/diagnostic">Notre diagnostic</Link>
            </div>
          </div>

          <aside className="tw-ticket" aria-label="Fiche atelier Torque Works">
            <div className="tw-ticket__head">
              <span>FICHE ATELIER</span>
              <b>OUVERTE</b>
            </div>
            <WorkOrder label="TYPE" value="MÉCANIQUE GÉNÉRALE" />
            <WorkOrder label="MÉTHODE" value="CONTRÔLER → MESURER → INTERVENIR" />
            <WorkOrder label="ZONE" value="BRUXELLES" tone="amber" />
            <p>Le devis suit le diagnostic. Cette démonstration ne simule ni prise de rendez-vous ni promesse de réparation.</p>
          </aside>
        </div>

        <div className="tw-shell tw-hero__media">
          <figure className="tw-photo tw-photo--hero">
            <img src={torqueWorksSite.hero.image.src} alt={torqueWorksSite.hero.image.alt} width={torqueWorksSite.hero.image.width} height={torqueWorksSite.hero.image.height} />
            <figcaption><span>ATELIER / MÉCANIQUE</span><span>CONTRÔLE AVANT PIÈCE</span></figcaption>
          </figure>
        </div>
      </section>

      <div className="tw-scope-strip" aria-label="Interventions principales">
        <div className="tw-shell">
          {torqueWorksSite.interventions.slice(0, 5).map((item) => <span key={item.code}>{item.title}</span>)}
        </div>
      </div>

      <section className="tw-section tw-interventions-home">
        <div className="tw-shell">
          <div className="tw-section-head">
            <p className="tw-kicker">Interventions</p>
            <h2>Une mécanique générale, pas un catalogue de pièces.</h2>
            <p>Chaque ligne part d’un problème concret et d’un contrôle. Le remplacement vient après, pas avant.</p>
          </div>

          <div className="tw-service-ledger">
            {torqueWorksSite.interventions.map((item) => (
              <article key={item.code} className="tw-service-line">
                <span className="tw-service-line__code">{item.code}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="tw-service-line__status">CONTRÔLE</span>
              </article>
            ))}
          </div>
          <Link className="tw-link" href="/sites/garage-02/interventions">Détail des interventions <span>↗</span></Link>
        </div>
      </section>

      <section className="tw-section tw-diagnostic-home">
        <div className="tw-shell tw-diagnostic-home__grid">
          <figure className="tw-photo tw-photo--square">
            <img src={torqueWorksSite.images.diagnostic.src} alt={torqueWorksSite.images.diagnostic.alt} width={torqueWorksSite.images.diagnostic.width} height={torqueWorksSite.images.diagnostic.height} />
          </figure>
          <div className="tw-diagnostic-home__copy">
            <p className="tw-kicker">Recherche de panne</p>
            <h2>Un voyant indique une piste. Pas une pièce.</h2>
            <p>La lecture électronique est un point de départ. Les mesures, le contrôle du faisceau et l’état mécanique servent ensuite à isoler la cause.</p>
            <div className="tw-diagnostic-sequence">
              {torqueWorksSite.diagnosticSteps.map((step) => (
                <div key={step.label}><b>{step.label}</b><span>{step.text}</span></div>
              ))}
            </div>
            <Link className="tw-link" href="/sites/garage-02/diagnostic">Voir la méthode <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="tw-section tw-workshop-callout">
        <div className="tw-shell tw-workshop-callout__grid">
          <div>
            <p className="tw-kicker">L’atelier</p>
            <h2>Le travail est visible. Les explications aussi.</h2>
          </div>
          <p>Torque Works présente un atelier fictif où les opérations sont nommées simplement : ce qui est contrôlé, ce qui est usé, ce qui est remplacé et ce qui reste en état.</p>
          <Link className="tw-link" href="/sites/garage-02/atelier">Entrer dans l’atelier <span>↗</span></Link>
        </div>
      </section>
    </div>
  );
}
