import { LineGalleryImage } from "../components/LineGalleryImage";
import { galleryArtists, galleryWorks, lineGallerySite } from "../data/site";

export function StudioPage() {
  return (
    <div className="line-studio-page">
      <header className="line-page-intro">
        <p className="line-kicker">METHOD / PRIVATE STUDIO</p>
        <h1>STUDIO</h1>
        <p className="line-page-intro__lede">A quiet process for custom small-scale work, from context to placement.</p>
      </header>

      <section className="line-studio-statement" aria-labelledby="line-studio-statement-title">
        <div>
          <p className="line-kicker">PHILOSOPHY</p>
          <h2 id="line-studio-statement-title">Restraint is part of the drawing.</h2>
        </div>
        <div className="line-studio-statement__copy">
          <p>{lineGallerySite.studioNote}</p>
          <p>References help explain intent. They are not treated as finished tattoo designs to be copied one-to-one.</p>
        </div>
      </section>

      <section className="line-process" aria-labelledby="line-process-title">
        <div className="line-process__intro">
          <p className="line-kicker">WORKING METHOD</p>
          <h2 id="line-process-title">Three quiet decisions.</h2>
        </div>
        <ol>
          {lineGallerySite.process.map(([number, title, copy]) => (
            <li key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="line-studio-images" aria-label="Studio imagery">
        <div>
          <LineGalleryImage image={galleryArtists[0].portrait} sizes="(max-width: 760px) 100vw, 48vw" />
        </div>
        <div>
          <LineGalleryImage image={galleryWorks[3].image} sizes="(max-width: 760px) 76vw, 27vw" />
        </div>
      </section>

      <section className="line-studio-practical" aria-label="Studio practical notes">
        <div>
          <p className="line-kicker">CARE / PREPARATION</p>
          <h2>Clean work, clear expectations.</h2>
        </div>
        <div>
          <p>Workspaces and reusable surfaces are prepared between appointments, and single-use items are handled conservatively.</p>
          <p>Arrive rested, wear clothing that gives easy access to the placement, and follow the artist’s aftercare guidance for your session.</p>
          <p>This portfolio demo does not make medical claims or represent a real licensed studio.</p>
        </div>
      </section>
    </div>
  );
}
