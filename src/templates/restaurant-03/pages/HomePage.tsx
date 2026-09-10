import Link from "next/link";

import { EditorialImage } from "@/src/templates/restaurant-03/components/EditorialImage";
import { MenuExcerpt } from "@/src/templates/restaurant-03/components/MenuExcerpt";
import { PracticalPanel } from "@/src/templates/restaurant-03/components/PracticalPanel";
import { SeasonStrip } from "@/src/templates/restaurant-03/components/SeasonStrip";
import { SharedPlateRow } from "@/src/templates/restaurant-03/components/SharedPlateRow";
import { terraSite } from "@/src/templates/restaurant-03/src/data/site";

export function HomePage() {
  return (
    <>
      <section className="terra-hero">
        <div className="terra-hero__copy">
          <p className="terra-hero__descriptor">{terraSite.business.descriptor}</p>
          <h1 aria-label={terraSite.hero.headline}>
            <span>À TABLE,</span>
            <span>AU SOLEIL.</span>
          </h1>
          <p className="terra-hero__intro">{terraSite.hero.copy}</p>
          <Link className="terra-text-link terra-hero__link" href="/sites/restaurant-03/menu">
            Voir le menu →
          </Link>
        </div>

        <EditorialImage
          image={terraSite.hero.primaryImage}
          className="terra-hero__primary"
          priority
          sizes="(max-width: 768px) 100vw, 62vw"
        />
        <EditorialImage image={terraSite.hero.portraitImage} className="terra-hero__portrait" priority />
        <EditorialImage image={terraSite.hero.detailImage} className="terra-hero__detail" />
      </section>

      <SeasonStrip />

      <section className="terra-shared" aria-labelledby="terra-shared-title">
        <div className="terra-section-heading terra-section-heading--shared">
          <p>Au centre</p>
          <h2 id="terra-shared-title">DES ASSIETTES QUI CIRCULENT.</h2>
        </div>
        <div className="terra-shared__rows">
          {terraSite.sharedPlates.map((plate, index) => (
            <SharedPlateRow key={plate.name} plate={plate} index={index} />
          ))}
        </div>
      </section>

      <section className="terra-market" aria-labelledby="terra-market-title">
        <EditorialImage image={terraSite.market.image} className="terra-market__image" sizes="(max-width: 768px) 100vw, 48vw" />
        <div className="terra-market__copy">
          <p>Produit / saison</p>
          <h2 id="terra-market-title">{terraSite.market.title}</h2>
          <p className="terra-market__body">{terraSite.market.body}</p>
          <ul className="terra-market__ingredients" aria-label="Produits de la maison">
            {terraSite.market.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </section>

      <MenuExcerpt />

      <section className="terra-room" aria-labelledby="terra-room-title">
        <div className="terra-section-heading terra-section-heading--room">
          <p>La salle</p>
          <h2 id="terra-room-title">RESTER UN PEU PLUS LONGTEMPS.</h2>
        </div>
        <div className="terra-room__mosaic">
          {terraSite.roomImages.map((image, index) => (
            <EditorialImage key={image.src} image={image} className={`terra-room__image terra-room__image--${index + 1}`} />
          ))}
        </div>
      </section>

      <PracticalPanel />
    </>
  );
}
