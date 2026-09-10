import Link from "next/link";

import { EditorialImage } from "../components/EditorialImage";
import { SectionIntro } from "../components/SectionIntro";
import { VisitDetails } from "../components/VisitDetails";
import { kuroMenu } from "../src/data/menu";
import { kuroSite } from "../src/data/site";

const signatureDishes = [
  kuroMenu[2].items[0],
  kuroMenu[3].items[0],
  kuroMenu[4].items[1],
];

export function HomePage() {
  return (
    <div className="kuro-page">
      <section className="kuro-hero">
        <div className="kuro-shell kuro-hero__grid">
          <div className="kuro-hero__copy">
            <p className="kuro-eyebrow">{kuroSite.hero.eyebrow}</p>
            <h1>{kuroSite.hero.title}</h1>
            <p className="kuro-hero__body">{kuroSite.hero.body}</p>
            <div className="kuro-hero__actions">
              <Link className="kuro-text-link" href="/sites/restaurant-04/menu">
                Découvrir le menu <span aria-hidden="true">↗</span>
              </Link>
              <Link className="kuro-text-link" href="/sites/restaurant-04/contact">
                Nous trouver
              </Link>
            </div>
          </div>
          <EditorialImage image={kuroSite.hero.image} className="kuro-hero__media" eager />
        </div>
      </section>

      <section className="kuro-section kuro-section--rule">
        <div className="kuro-shell kuro-intro-grid">
          <p className="kuro-eyebrow">La table</p>
          <p className="kuro-intro-grid__statement">
            Peu d’éléments. Beaucoup d’attention. Une cuisine japonaise précise, saisonnière et sans décor superflu.
          </p>
        </div>
      </section>

      <section className="kuro-section kuro-section--rule">
        <div className="kuro-shell">
          <SectionIntro
            eyebrow="À la carte"
            title="Trois gestes, trois textures"
            body="Des assiettes courtes construites autour de la fraîcheur, de la coupe et de cuissons nettes."
          />
          <div className="kuro-signatures">
            {signatureDishes.map((dish, index) => (
              <article className="kuro-signature" key={dish.name}>
                <span className="kuro-signature__index">0{index + 1}</span>
                <div>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </div>
                <span className="kuro-signature__price">{dish.price}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="kuro-section kuro-section--rule">
        <div className="kuro-shell kuro-seasonal">
          <EditorialImage image={kuroSite.gallery[0]} className="kuro-seasonal__image" />
          <div className="kuro-seasonal__copy">
            <p className="kuro-eyebrow">Le menu du moment</p>
            <h2>Une saison ne se répète pas.</h2>
            <p>
              Les poissons, légumes et garnitures évoluent avec les arrivages. La ligne reste la même : respecter le produit, travailler le feu avec précision et ne jamais masquer une texture juste.
            </p>
            <Link className="kuro-text-link" href="/sites/restaurant-04/menu">
              Voir le menu complet <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="kuro-section kuro-section--rule">
        <div className="kuro-shell">
          <SectionIntro
            eyebrow="Atmosphère"
            title="Lumière basse. Matières calmes."
            body="Un aperçu photographique de l’univers Kuro, traité comme une suite éditoriale plutôt qu’une galerie décorative."
          />
          <div className="kuro-gallery-fragment">
            {kuroSite.gallery.slice(1, 4).map((image) => (
              <EditorialImage image={image} key={image.src} />
            ))}
          </div>
        </div>
      </section>

      <section className="kuro-section kuro-section--rule">
        <div className="kuro-shell kuro-visit-section">
          <SectionIntro eyebrow="Visiter" title="Le soir, à Bruxelles." />
          <VisitDetails />
        </div>
      </section>
    </div>
  );
}
