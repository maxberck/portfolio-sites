import { PageHero } from "@/src/templates/garage-04/components/PageHero";
import { carrosserie42Site } from "@/src/templates/garage-04/src/data/site";

export function BodyworkPage() {
  return (
    <>
      <PageHero index="02" eyebrow="ATELIER / TÔLERIE LÉGÈRE" title="CARROSSERIE" body="Une bosse, une rayure ou un pare-chocs marqué ne se traite pas de la même manière. On commence par voir le support, l’accès et l’étendue réelle du dommage." />
      <section className="c42-damage-grid">
        {carrosserie42Site.bodyworkTypes.map((item) => (
          <article key={item.code}><span>{item.code}</span><h2>{item.title}</h2><p>{item.text}</p></article>
        ))}
      </section>
      <section className="c42-sequence">
        <div className="c42-sequence__intro">
          <span className="c42-kicker">SÉQUENCE ATELIER</span>
          <h2>Du choc à une surface prête pour la finition.</h2>
          <p>Le chemin peut se raccourcir ou s’allonger selon la pièce. Une déformation accessible et une pièce fissurée n’imposent pas le même travail.</p>
        </div>
        <div className="c42-sequence__steps">
          {carrosserie42Site.bodyworkSequence.map((step) => (
            <article key={step.code}><span>{step.code}</span><div><strong>{step.label}</strong><p>{step.text}</p></div></article>
          ))}
        </div>
      </section>
      <section className="c42-split-photo">
        <figure><img src={carrosserie42Site.images.detail.src} alt={carrosserie42Site.images.detail.alt} /><figcaption>ZONE / CARROSSERIE</figcaption></figure>
        <div><span className="c42-kicker">NOTE DE CONTRÔLE</span><h2>La méthode dépend du panneau, pas du nom du dommage.</h2><p>Accès, matière, fixations, profondeur de la marque et état de la finition déterminent si l’on redresse, répare, prépare plus largement ou remplace l’élément.</p></div>
      </section>
    </>
  );
}
