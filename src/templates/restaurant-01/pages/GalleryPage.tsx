import { EditorialImage } from "../components/EditorialImage";
import { silexSite } from "../src/data/site";

export function GalleryPage() {
  return (
    <div className="silex-gallery-page" data-silex-page="gallery-sequence">
      <section className="silex-gallery-stage">
        <EditorialImage image={silexSite.gallery[0]} className="silex-gallery-stage__image" preload sizes="100vw" />
        <div className="silex-gallery-stage__veil" aria-hidden="true" />
        <div className="silex-gallery-stage__copy">
          <span>Assiettes · matières · salle</span>
          <h1>Galerie</h1>
        </div>
      </section>

      <section className="silex-gallery-pair" aria-label="Séquence photographique Maison Silex">
        <EditorialImage image={silexSite.gallery[2]} className="silex-gallery-pair__landscape" sizes="(max-width: 767px) 100vw, 62vw" />
        <EditorialImage image={silexSite.gallery[1]} className="silex-gallery-pair__portrait" sizes="(max-width: 767px) 100vw, 31vw" />
      </section>

      <section className="silex-contact-sheet" aria-label="Détails de la Maison">
        <EditorialImage image={silexSite.gallery[3]} className="silex-contact-sheet__item" sizes="(max-width: 767px) 100vw, 33vw" />
        <EditorialImage image={silexSite.gallery[4]} className="silex-contact-sheet__item" sizes="(max-width: 767px) 100vw, 33vw" />
        <EditorialImage image={silexSite.chef.image} className="silex-contact-sheet__item" sizes="(max-width: 767px) 100vw, 33vw" />
      </section>

      <section className="silex-gallery-isolated">
        <p>Une cuisine qui préfère la matière au décor.</p>
        <EditorialImage image={silexSite.hero.image} className="silex-gallery-isolated__image" sizes="(max-width: 767px) 100vw, 42vw" />
      </section>
    </div>
  );
}
