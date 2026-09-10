import { PageHero } from "../components/PageHero";
import { torqueWorksSite } from "../src/data/site";

export function DiagnosticPage() {
  return (
    <div className="tw-page">
      <PageHero
        eyebrow="Recherche de panne"
        title="DIAGNOSTIC"
        intro="Chercher une cause demande plus qu’un code défaut. Le site met en scène une méthode simple : écouter le symptôme, mesurer, confirmer, puis intervenir."
        code="DIAG"
      />
      <section className="tw-section">
        <div className="tw-shell tw-diagnostic-page__grid">
          <div className="tw-diagnostic-sequence tw-diagnostic-sequence--large">
            {torqueWorksSite.diagnosticSteps.map((step) => (
              <article key={step.label}>
                <b>{step.label}</b>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <figure className="tw-photo tw-photo--portrait">
            <img src={torqueWorksSite.images.engine.src} alt={torqueWorksSite.images.engine.alt} width={torqueWorksSite.images.engine.width} height={torqueWorksSite.images.engine.height} />
            <figcaption>MESURE / CONTRÔLE / CONFIRMATION</figcaption>
          </figure>
        </div>
      </section>
      <section className="tw-section tw-symptoms">
        <div className="tw-shell">
          <div className="tw-section-head">
            <p className="tw-kicker">Exemples de départ</p>
            <h2>Le problème arrive rarement avec son diagnostic écrit dessus.</h2>
          </div>
          <div className="tw-symptom-grid">
            <article><span>BRUIT</span><h3>Claquement sur route dégradée</h3><p>Jeu, fixation, suspension ou train roulant à contrôler avant de désigner un organe.</p></article>
            <article><span>VOYANT</span><h3>Défaut moteur intermittent</h3><p>Lecture des données, contrôle des connectiques et mesures ciblées selon les conditions d’apparition.</p></article>
            <article><span>VIBRATION</span><h3>Vibration à l’accélération</h3><p>Transmission, supports, roues ou autre origine mécanique : le symptôme guide les premiers contrôles.</p></article>
          </div>
        </div>
      </section>
    </div>
  );
}
