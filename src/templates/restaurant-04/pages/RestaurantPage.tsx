import { EditorialImage } from "../components/EditorialImage";
import { SectionIntro } from "../components/SectionIntro";
import { kuroSite } from "../src/data/site";

export function RestaurantPage() {
  return (
    <div className="kuro-page">
      <section className="kuro-page-hero">
        <div className="kuro-shell kuro-page-hero__grid">
          <SectionIntro
            eyebrow="Restaurant"
            title="La table"
            body="Kuro imagine une table japonaise contemporaine où chaque geste reste lisible : une coupe nette, un bouillon précis, un feu maîtrisé et une assiette qui laisse respirer le produit."
            as="h1"
          />
          <p className="kuro-page-hero__aside">
            Cette page décrit une direction de restaurant fictive : aucune récompense, provenance exclusive ou identité de chef réel n’est revendiquée.
          </p>
        </div>
      </section>

      <section className="kuro-section kuro-section--rule">
        <div className="kuro-shell kuro-story-lead">
          <EditorialImage image={kuroSite.gallery[1]} className="kuro-story-lead__image" />
          <div className="kuro-story-lead__copy">
            <p className="kuro-eyebrow">L’approche</p>
            <p>
              La cuisine part d’ingrédients de saison et d’une idée simple : intervenir suffisamment pour révéler une texture, jamais pour la dissimuler. Cru, vapeur, fermentation, braise et riz structurent le service sans imposer un parcours rigide.
            </p>
            <p>
              L’expérience reste calme et directe. Les assiettes arrivent par séquences courtes, avec des explications utiles uniquement lorsqu’elles éclairent le produit ou la technique.
            </p>
          </div>
        </div>
      </section>

      <section className="kuro-section kuro-section--rule kuro-section--compact">
        <div className="kuro-shell kuro-story-blocks">
          <article className="kuro-story-block">
            <h2>La saison</h2>
            <p>
              Le menu évolue selon les arrivages et les produits disponibles. Les garnitures changent plus vite que la structure : acidité, température et texture restent les repères du service.
            </p>
          </article>
          <article className="kuro-story-block">
            <h2>Le geste</h2>
            <p>
              La précision vient de gestes simples répétés avec constance : couteau, cuisson, bouillon, assaisonnement. L’esthétique suit la technique au lieu de la remplacer.
            </p>
          </article>
          <article className="kuro-story-block">
            <h2>L’espace</h2>
            <p>
              Bois sombre, pierre mate, textiles naturels et lumière retenue composent un intérieur fictif pensé pour laisser la cuisine et la conversation occuper le premier plan.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
