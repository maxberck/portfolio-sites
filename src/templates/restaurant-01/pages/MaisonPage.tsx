import { EditorialImage } from "../components/EditorialImage";
import { SectionLabel } from "../components/SectionLabel";
import { silexSite } from "../src/data/site";

export function MaisonPage() {
  return (
    <>
      <section className="silex-page-intro silex-page-intro--maison">
        <SectionLabel>Notre manière de recevoir</SectionLabel>
        <h1>La Maison</h1>
        <p className="silex-page-intro__statement">{silexSite.maison.intro}</p>
      </section>

      <section className="silex-maison-story silex-maison-story--philosophy">
        <div>
          <SectionLabel>01 · Philosophie</SectionLabel>
          <h2>Peu d’éléments, beaucoup de profondeur.</h2>
          <p>{silexSite.maison.philosophy}</p>
        </div>
        <EditorialImage
          image={silexSite.gallery[1]}
          className="silex-maison-story__image"
          sizes="(max-width: 820px) 100vw, 48vw"
        />
      </section>

      <section className="silex-chef-profile">
        <EditorialImage
          image={silexSite.chef.image}
          className="silex-chef-profile__image"
          sizes="(max-width: 820px) 100vw, 38vw"
        />
        <div className="silex-chef-profile__copy">
          <SectionLabel>02 · La cheffe</SectionLabel>
          <h2>{silexSite.chef.name}</h2>
          <p className="silex-chef-profile__role">{silexSite.chef.role}</p>
          <blockquote>« {silexSite.chef.quote} »</blockquote>
          <p>{silexSite.chef.biography}</p>
        </div>
      </section>

      <section className="silex-maison-story silex-maison-story--room">
        <EditorialImage
          image={silexSite.gallery[2]}
          className="silex-maison-story__image"
          sizes="(max-width: 820px) 100vw, 52vw"
        />
        <div>
          <SectionLabel>03 · La salle</SectionLabel>
          <h2>Une présence discrète autour de la table.</h2>
          <p>{silexSite.maison.room}</p>
        </div>
      </section>

      <section className="silex-principles">
        <article>
          <SectionLabel>04 · Produit</SectionLabel>
          <h2>Choisir avant de composer.</h2>
          <p>{silexSite.maison.sourcing}</p>
        </article>
        <article>
          <SectionLabel>05 · Service</SectionLabel>
          <h2>Laisser le temps faire partie du repas.</h2>
          <p>{silexSite.maison.service}</p>
        </article>
      </section>
    </>
  );
}
