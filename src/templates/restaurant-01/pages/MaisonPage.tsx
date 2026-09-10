import Link from "next/link";

import { EditorialImage } from "../components/EditorialImage";
import { silexSite } from "../src/data/site";

export function MaisonPage() {
  return (
    <div className="silex-maison-page" data-silex-page="maison-story">
      <section className="silex-story-stage">
        <EditorialImage image={silexSite.gallery[2]} className="silex-story-stage__image" preload sizes="100vw" />
        <div className="silex-story-stage__veil" aria-hidden="true" />
        <div className="silex-story-stage__copy">
          <span>Maison Silex · Bruxelles</span>
          <h1>La Maison</h1>
        </div>
      </section>

      <section className="silex-story-intro">
        <span>01</span>
        <div>
          <p className="silex-story-intro__lead">{silexSite.maison.intro}</p>
          <p>{silexSite.maison.philosophy}</p>
        </div>
      </section>

      <section className="silex-story-chef">
        <EditorialImage image={silexSite.chef.image} className="silex-story-chef__image" sizes="(max-width: 767px) 100vw, 46vw" />
        <div className="silex-story-chef__copy">
          <span>02 · La cheffe</span>
          <h2>{silexSite.chef.name}</h2>
          <blockquote>« {silexSite.chef.quote} »</blockquote>
          <p>{silexSite.chef.biography}</p>
        </div>
      </section>

      <section className="silex-story-quote">
        <span>03</span>
        <blockquote>Une salle pensée pour que la lumière, le service et l’assiette avancent au même rythme.</blockquote>
      </section>

      <section className="silex-story-source">
        <div className="silex-story-source__copy">
          <span>04 · Produit</span>
          <h2>Choisir avant de composer.</h2>
          <p>{silexSite.maison.sourcing}</p>
          <p>{silexSite.maison.service}</p>
        </div>
        <EditorialImage image={silexSite.gallery[3]} className="silex-story-source__image" sizes="(max-width: 767px) 100vw, 55vw" />
      </section>

      <section className="silex-story-links">
        <Link href="/sites/restaurant-01/menu">Voir le menu <span>↗</span></Link>
        <Link href="/sites/restaurant-01/contact">Venir à la Maison <span>↗</span></Link>
      </section>
    </div>
  );
}
