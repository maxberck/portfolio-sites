import Image from "next/image";

import { PageHero } from "@/src/templates/garage-03/components/PageHero";
import { relais24Site } from "@/src/templates/garage-03/src/data/site";

export function DiagnosticPage() {
  return (
    <>
      <PageHero
        code="02"
        eyebrow="CONTRÔLE / ORIENTATION"
        title="DIAGNOSTIC"
        intro="Un diagnostic routier sert à décider de la prochaine action. Il ne transforme pas chaque panne en réparation immédiate au bord de la route."
      />

      <section className="r24-section r24-section--night r24-diagnostic-layout">
        <div className="r24-diagnostic-layout__media">
          <Image
            src={relais24Site.images.diagnostic.src}
            alt={relais24Site.images.diagnostic.alt}
            width={relais24Site.images.diagnostic.width}
            height={relais24Site.images.diagnostic.height}
          />
          <span className="r24-photo-label">CTRL / 02</span>
        </div>
        <div className="r24-diagnostic-layout__steps">
          {relais24Site.diagnosticSteps.map((step) => (
            <article className="r24-diag-step" key={step.code}>
              <span>{step.code}</span>
              <div>
                <h2>{step.label}</h2>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="r24-decision-panel">
        <span className="r24-kicker">DÉCISION / PAS PROMESSE</span>
        <h2>Le contrôle doit réduire l’incertitude, pas masquer la panne.</h2>
        <p>Si les vérifications sur place ne permettent pas de conclure proprement, le véhicule reste immobilisé et la suite se fait en atelier. C’est plus utile qu’un remplacement de pièce au hasard.</p>
      </section>
    </>
  );
}
