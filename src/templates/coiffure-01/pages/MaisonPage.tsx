import { EditorialHeading } from "../components/EditorialHeading";
import { EditorialImage } from "../components/EditorialImage";
import { maisonEliseSite } from "../src/data/site";

export function MaisonPage() {
  return (
    <>
      <EditorialHeading
        eyebrow="Maison Élise · approche"
        title="La Maison"
        intro="Un salon fictif imaginé comme une maison de coiffure calme : le conseil, le geste et l’atmosphère prennent plus de place que les codes du luxe."
      />

      <section className="elise-maison-story">
        <EditorialImage image={maisonEliseSite.images.consultation} className="elise-maison-story__lead" sizes="(max-width: 767px) 100vw, 55vw" />
        <div className="elise-maison-story__copy">
          <p className="elise-label">01 · Consultation</p>
          <h2>Commencer par ce qui existe déjà.</h2>
          <p>{maisonEliseSite.philosophy.consultation}</p>
        </div>
      </section>

      <section className="elise-maison-chapters">
        <article>
          <p className="elise-label">02 · Geste</p>
          <h2>Une technique lisible.</h2>
          <p>{maisonEliseSite.philosophy.craft}</p>
        </article>
        <EditorialImage image={maisonEliseSite.images.precision} className="elise-maison-chapters__portrait" sizes="(max-width: 767px) 75vw, 30vw" />
        <article className="elise-maison-chapters__atmosphere">
          <p className="elise-label">03 · Atmosphère</p>
          <h2>De l’espace pour regarder.</h2>
          <p>{maisonEliseSite.philosophy.atmosphere}</p>
        </article>
      </section>

      <section className="elise-maison-interior">
        <EditorialImage image={maisonEliseSite.images.interior} sizes="100vw" />
        <div>
          <p>Maison Élise · concept fictif</p>
          <span>Bruxelles</span>
        </div>
      </section>
    </>
  );
}
