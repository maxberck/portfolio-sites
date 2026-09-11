import { PageHero } from "@/src/templates/garage-04/components/PageHero";
import { carrosserie42Site } from "@/src/templates/garage-04/src/data/site";

export function PaintPage() {
  return (
    <>
      <PageHero index="03" eyebrow="PRÉPARATION / FINITION" title="PEINTURE" body="La peinture n’est que la partie visible du travail. Le support, le masquage, l’apprêt et le contrôle final comptent autant que l’application elle-même." />
      <section className="c42-paint-board">
        <div className="c42-paint-board__swatches" aria-hidden="true"><span /><span /><span /><span /><span /></div>
        <div className="c42-paint-board__list">
          {carrosserie42Site.paintSteps.map((step) => (
            <article key={step.code}><span>{step.code}</span><h2>{step.title}</h2><p>{step.text}</p></article>
          ))}
        </div>
      </section>
      <section className="c42-paint-photo">
        <figure><img src={carrosserie42Site.images.finish.src} alt={carrosserie42Site.images.finish.alt} /><figcaption>FINITION / CONTRÔLE VISUEL</figcaption></figure>
        <div>
          <span className="c42-kicker">TRAITEMENT SUR MESURE</span>
          <h2>La zone et l’état du support fixent l’étendue du travail.</h2>
          <p>Une reprise de peinture est définie après inspection. Cette démonstration ne simule ni configurateur de teinte, ni correspondance parfaite automatisée, ni technologie propriétaire.</p>
        </div>
      </section>
    </>
  );
}
