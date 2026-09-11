import { EditorialHeading } from "../components/EditorialHeading";
import { EditorialImage } from "../components/EditorialImage";
import { maisonEliseSite } from "../src/data/site";

const gallery = [
  [maisonEliseSite.images.hero, "elise-gallery-grid__tall"],
  [maisonEliseSite.images.detail, "elise-gallery-grid__small"],
  [maisonEliseSite.images.highlights, "elise-gallery-grid__medium"],
  [maisonEliseSite.images.interior, "elise-gallery-grid__wide"],
  [maisonEliseSite.images.cape, "elise-gallery-grid__portrait"],
  [maisonEliseSite.images.precision, "elise-gallery-grid__small-alt"],
  [maisonEliseSite.images.consultation, "elise-gallery-grid__landscape"],
] as const;

export function GalleryPage() {
  return (
    <>
      <EditorialHeading
        eyebrow="Maison Élise · images"
        title="Galerie"
        intro="Des gestes, des textures et un espace de travail. Les images documentent l’univers du salon sans faux avant/après ni témoignage client."
      />
      <section className="elise-gallery-grid" aria-label="Galerie Maison Élise">
        {gallery.map(([image, className], index) => (
          <EditorialImage
            key={`${image.src}-${index}`}
            image={image}
            className={className}
            sizes="(max-width: 767px) 100vw, 46vw"
          />
        ))}
      </section>
    </>
  );
}
