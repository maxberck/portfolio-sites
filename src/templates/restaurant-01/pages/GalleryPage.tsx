import { EditorialImage } from "../components/EditorialImage";
import { SectionLabel } from "../components/SectionLabel";
import { silexSite } from "../src/data/site";

export function GalleryPage() {
  return (
    <>
      <section className="silex-page-intro silex-page-intro--gallery">
        <SectionLabel>Assiettes · matières · salle</SectionLabel>
        <h1>Galerie</h1>
        <p className="silex-page-intro__statement">
          Une sélection d’images pensée comme un carnet de service, entre gestes, produits et atmosphère.
        </p>
      </section>

      <section className="silex-gallery" aria-label="Galerie Maison Silex">
        {silexSite.gallery.map((image, index) => (
          <EditorialImage
            key={image.src}
            image={image}
            className={`silex-gallery__item silex-gallery__item--${index + 1}`}
            sizes={index === 0 ? "(max-width: 820px) 100vw, 62vw" : "(max-width: 820px) 100vw, 38vw"}
          />
        ))}
      </section>
    </>
  );
}
