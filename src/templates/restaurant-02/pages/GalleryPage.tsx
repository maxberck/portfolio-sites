import { PosterImage } from "@/src/templates/restaurant-02/components/PosterImage";
import { district88Site } from "@/src/templates/restaurant-02/src/data/site";

export function GalleryPage() {
  return (
    <div className="d88-page d88-gallery-page" data-d88-page="contact-sheet">
      <header className="d88-gallery-hero">
        <p className="d88-kicker">SERVICE / FOOD / AFTER DARK</p>
        <h1>CONTACT SHEET</h1>
        <p>Neuf images. Pas de galerie infinie. Le service, les mains, la chaleur et ce qui reste sur le plateau.</p>
      </header>

      <section className="d88-contact-sheet" aria-label="Galerie District 88">
        {district88Site.gallery.map((image, index) => (
          <div className={`d88-contact-sheet__item d88-contact-sheet__item--${index + 1}`} key={`${image.src}-${image.caption}`}>
            <span className="d88-contact-sheet__index">FRAME {String(index + 1).padStart(2, "0")}</span>
            <PosterImage image={image} sizes="(max-width: 768px) 100vw, 42vw" />
          </div>
        ))}
        <div className="d88-contact-sheet__acid" aria-hidden="true">HOT / FAST / MESSY / GOOD</div>
      </section>
    </div>
  );
}
