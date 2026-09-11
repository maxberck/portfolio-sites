import Link from "next/link";

import { PageHero } from "@/src/templates/garage-03/components/PageHero";
import { relais24Site } from "@/src/templates/garage-03/src/data/site";

export function BreakdownPage() {
  return (
    <>
      <PageHero
        code="01"
        eyebrow="INTERVENTION ROUTIÈRE"
        title="DÉPANNAGE"
        intro="Le bon réflexe n’est pas d’essayer tout au hasard. On vérifie ce qui bloque le véhicule, puis on choisit entre une action simple sur place et un remorquage."
      />

      <section className="r24-section r24-section--cream">
        <div className="r24-breakdown-list">
          {relais24Site.breakdownTypes.map((item, index) => (
            <article className="r24-breakdown-row" key={item.code}>
              <div className="r24-breakdown-row__index">{String(index + 1).padStart(2, "0")}</div>
              <div className="r24-breakdown-row__main">
                <span className="r24-kicker">{item.code}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
              <div className="r24-breakdown-row__outcome">
                <span>SUITE POSSIBLE</span>
                <strong>{item.outcome}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="r24-split-note">
        <div className="r24-split-note__primary">
          <span className="r24-kicker">SUR PLACE</span>
          <h2>Quand l’action est simple et raisonnable.</h2>
          <p>Une batterie faible, un problème de démarrage identifié ou certains incidents de roue peuvent parfois être traités sans déplacer le véhicule.</p>
        </div>
        <div className="r24-split-note__secondary">
          <span className="r24-kicker">REMORQUAGE NÉCESSAIRE</span>
          <h2>Quand repartir n’est pas une bonne idée.</h2>
          <p>Un symptôme moteur incertain, un dommage qui touche la sécurité ou une panne persistante doit mener vers un atelier plutôt que vers une remise en route forcée.</p>
          <Link className="r24-text-link" href="/sites/garage-03/remorquage">Voir le remorquage →</Link>
        </div>
      </section>
    </>
  );
}
