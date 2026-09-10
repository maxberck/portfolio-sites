import { EditorialImage } from "../components/EditorialImage";
import { SectionIntro } from "../components/SectionIntro";
import { kuroSite } from "../src/data/site";

export function GalleryPage() {
  return (
    <div className="kuro-page">
      <section className="kuro-page-hero">
        <div className="kuro-shell kuro-page-hero__grid">
          <SectionIntro
            eyebrow="Images"
            title="Galerie"
            body="Cuisine, matière et lumière composées comme une suite éditoriale. Les images servent de contenu de démonstration et restent remplaçables depuis la configuration du template."
            as="h1"
          />
          <p className="kuro-page-hero__aside">
            Pas de carousel ni de modal : la photographie garde sa place dans le rythme naturel de la page.
          </p>
        </div>
      </section>

      <section className="kuro-shell kuro-gallery-grid" aria-label="Galerie Kuro">
        {kuroSite.gallery.map((image) => (
          <EditorialImage image={image} key={image.src} />
        ))}
      </section>
    </div>
  );
}
