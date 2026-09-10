import { EditorialImage } from "@/src/templates/restaurant-03/components/EditorialImage";
import { terraSite } from "@/src/templates/restaurant-03/src/data/site";

export function GalleryPage() {
  return (
    <div className="terra-page terra-gallery-page">
      <header className="terra-page-intro terra-gallery-page__intro">
        <p>Plats / gestes / lumière</p>
        <h1>AUTOUR DE LA TABLE</h1>
        <p>Une galerie courte : le produit, la salle, les mains et les assiettes plutôt qu’une accumulation d’images décoratives.</p>
      </header>

      <section className="terra-gallery" aria-label="Galerie Terra">
        {terraSite.gallery.map((image, index) => (
          <EditorialImage
            key={`${image.src}-${index}`}
            image={image}
            className={`terra-gallery__item terra-gallery__item--${index + 1}`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ))}
      </section>
    </div>
  );
}
