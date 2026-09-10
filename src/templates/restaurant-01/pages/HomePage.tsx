import Link from "next/link";

import { EditorialImage } from "../components/EditorialImage";
import { SectionLabel } from "../components/SectionLabel";
import { VisitPanel } from "../components/VisitPanel";
import { silexMenu, silexMenuPrice } from "../src/data/menu";
import { silexSite } from "../src/data/site";

export function HomePage() {
  const signatures = silexMenu[0].items.slice(1, 4);

  return (
    <>
      <section className="silex-hero">
        <div className="silex-hero__copy">
          <SectionLabel>{silexSite.hero.eyebrow}</SectionLabel>
          <h1>{silexSite.hero.title}</h1>
          <p className="silex-hero__body">{silexSite.hero.body}</p>
          <Link className="silex-text-link" href="/sites/restaurant-01/menu">
            Découvrir le menu <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <EditorialImage
          image={silexSite.hero.image}
          className="silex-hero__image"
          preload
          sizes="(max-width: 900px) 100vw, 58vw"
        />
        <p className="silex-hero__index" aria-hidden="true">01 — Maison Silex</p>
      </section>

      <section className="silex-season">
        <div>
          <SectionLabel>{silexSite.season.eyebrow}</SectionLabel>
          <h2>{silexSite.season.title}</h2>
        </div>
        <div className="silex-season__copy">
          <p>{silexSite.season.body}</p>
          <ul aria-label="Produits de la saison">
            {silexSite.season.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="silex-signatures" aria-labelledby="silex-signatures-title">
        <div className="silex-signatures__heading">
          <SectionLabel>Quelques assiettes</SectionLabel>
          <h2 id="silex-signatures-title">Le produit d’abord.</h2>
        </div>

        <div className="silex-signatures__grid">
          {signatures.map((dish, index) => (
            <article className={`silex-signature silex-signature--${index + 1}`} key={dish.name}>
              <EditorialImage
                image={silexSite.gallery[index]}
                className="silex-signature__image"
                sizes="(max-width: 760px) 100vw, 34vw"
              />
              <div className="silex-signature__caption">
                <span>0{index + 1}</span>
                <div>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="silex-chef-fragment">
        <EditorialImage
          image={silexSite.chef.image}
          className="silex-chef-fragment__image"
          sizes="(max-width: 800px) 100vw, 42vw"
        />
        <div className="silex-chef-fragment__copy">
          <SectionLabel>La Maison</SectionLabel>
          <blockquote>« {silexSite.chef.quote} »</blockquote>
          <p>{silexSite.chef.biography}</p>
          <Link className="silex-text-link" href="/sites/restaurant-01/maison">
            Rencontrer la Maison <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="silex-menu-preview" aria-labelledby="silex-menu-preview-title">
        <div>
          <SectionLabel>Le soir</SectionLabel>
          <h2 id="silex-menu-preview-title">Six temps, une seule saison.</h2>
        </div>
        <div className="silex-menu-preview__list">
          {silexMenu[0].items.slice(0, 5).map((item) => (
            <p key={item.name}>
              <span>{item.name}</span>
              <span>{item.description}</span>
            </p>
          ))}
          <div className="silex-menu-preview__price">
            <span>Menu dégustation</span>
            <strong>{silexMenuPrice}</strong>
          </div>
          <Link className="silex-text-link" href="/sites/restaurant-01/menu">
            Voir le menu complet <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <VisitPanel />
    </>
  );
}
