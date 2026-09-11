import { LineGalleryImage } from "../components/LineGalleryImage";
import { galleryWorks } from "../data/site";

const variants = ["wide", "margin", "narrow", "wide", "narrow", "margin"] as const;

export function WorkPage() {
  return (
    <div className="line-work-page">
      <header className="line-page-intro">
        <p className="line-kicker">ARCHIVE / 2026</p>
        <h1>WORK CATALOGUE</h1>
        <p className="line-page-intro__lede">Six fictional studies arranged as a catalogue rather than a gallery grid.</p>
      </header>

      <nav className="line-style-index" aria-label="Work styles">
        <span>Fine Line</span><span>Botanical</span><span>Micro</span><span>Ornamental</span>
      </nav>

      <section className="line-catalogue" aria-label="Tattoo work catalogue">
        {galleryWorks.map((work, index) => (
          <article key={work.id} className={`line-catalogue-item line-catalogue-item--${variants[index]}`}>
            <div className="line-catalogue-item__image">
              <LineGalleryImage image={work.image} sizes="(max-width: 760px) 100vw, 52vw" />
            </div>
            <div className="line-catalogue-item__number">{work.number}</div>
            <div className="line-catalogue-item__copy">
              <p className="line-kicker">{work.style} / {work.artist}</p>
              <h2>{work.title}</h2>
              <p>{work.caption}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
