import Link from "next/link";

import { EditorialImage } from "../components/EditorialImage";
import { VisitPanel } from "../components/VisitPanel";
import { silexMenu, silexMenuPrice } from "../src/data/menu";
import { silexSite } from "../src/data/site";

export function HomePage() {
  const signatures = silexMenu[0].items.slice(1, 4);

  return (
    <>
      <section className="silex-stage" data-silex-hero="full-bleed">
        <EditorialImage
          image={silexSite.hero.image}
          className="silex-stage__image"
          preload
          sizes="100vw"
        />
        <div className="silex-stage__veil" aria-hidden="true" />
        <div className="silex-stage__meta">
          <span>01</span>
          <p>{silexSite.hero.eyebrow}</p>
        </div>
        <div className="silex-stage__copy">
          <h1>{silexSite.hero.title}</h1>
          <div>
            <p>{silexSite.hero.body}</p>
            <Link href="/sites/restaurant-01/menu">Voir le menu ↗</Link>
          </div>
        </div>
      </section>

      <section className="silex-manifesto" data-silex-chapter="manifesto">
        <span className="silex-chapter-number">02</span>
        <div className="silex-manifesto__statement">
          <p>{silexSite.season.eyebrow}</p>
          <h2>{silexSite.season.title}</h2>
          <p>{silexSite.season.body}</p>
        </div>
        <ul aria-label="Produits de la saison">
          {silexSite.season.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
        </ul>
      </section>

      <section className="silex-spread" data-silex-chapter="photographic-spread" aria-labelledby="silex-spread-title">
        <div className="silex-spread__heading">
          <span className="silex-chapter-number">03</span>
          <h2 id="silex-spread-title">Le produit <em>d’abord.</em></h2>
        </div>

        <EditorialImage
          image={silexSite.gallery[0]}
          className="silex-spread__landscape"
          sizes="(max-width: 767px) 100vw, 72vw"
        />
        <EditorialImage
          image={silexSite.gallery[1]}
          className="silex-spread__portrait"
          sizes="(max-width: 767px) 100vw, 30vw"
        />

        <div className="silex-spread__captions">
          {signatures.map((dish, index) => (
            <div key={dish.name}>
              <span>0{index + 1}</span>
              <strong>{dish.name}</strong>
              <p>{dish.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="silex-chef-spread" data-silex-chapter="chef">
        <EditorialImage
          image={silexSite.chef.image}
          className="silex-chef-spread__image"
          sizes="(max-width: 767px) 100vw, 48vw"
        />
        <div className="silex-chef-spread__copy">
          <span className="silex-chapter-number">04</span>
          <p className="silex-chef-spread__role">{silexSite.chef.role}</p>
          <h2>{silexSite.chef.name}</h2>
          <blockquote>« {silexSite.chef.quote} »</blockquote>
          <p>{silexSite.chef.biography}</p>
          <Link href="/sites/restaurant-01/maison">La Maison ↗</Link>
        </div>
      </section>

      <section className="silex-folio" data-silex-chapter="menu-folio" aria-labelledby="silex-folio-title">
        <div className="silex-folio__intro">
          <span className="silex-chapter-number">05</span>
          <h2 id="silex-folio-title">Le menu comme <em>un récit.</em></h2>
        </div>
        <div className="silex-folio__paper">
          <div className="silex-folio__paper-head">
            <span>Maison Silex · Bruxelles</span>
            <strong>{silexMenuPrice}</strong>
          </div>
          {silexMenu[0].items.slice(0, 5).map((item) => (
            <p className="silex-folio__dish" key={item.name}>
              <strong>{item.name}</strong>
              <span>{item.description}</span>
            </p>
          ))}
          <Link href="/sites/restaurant-01/menu">Menu complet ↗</Link>
        </div>
      </section>

      <VisitPanel />
    </>
  );
}
