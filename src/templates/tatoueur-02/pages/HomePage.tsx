import Link from "next/link";

import { ArtistNotation } from "../components/ArtistNotation";
import { LineGalleryImage } from "../components/LineGalleryImage";
import { VisitPanel } from "../components/VisitPanel";
import { WorkPlate } from "../components/WorkPlate";
import { galleryArtists, galleryWorks, lineGallerySite } from "../data/site";

export function HomePage() {
  return (
    <div className="line-home">
      <section className="line-opening" aria-labelledby="line-home-title">
        <div className="line-opening__meta">
          <span>BRUSSELS</span>
          <span>FINE LINE</span>
          <span>PRIVATE STUDIO</span>
        </div>
        <h1 id="line-home-title" className="line-opening__title">LINE GALLERY</h1>
        <div className="line-opening__image">
          <LineGalleryImage image={galleryWorks[1].image} priority sizes="(max-width: 760px) 78vw, 28vw" />
        </div>
        <div className="line-opening__statement">
          <p>{lineGallerySite.statement}</p>
          <Link className="line-text-link" href="/sites/tatoueur-02/work">View the catalogue ↗</Link>
        </div>
      </section>

      <WorkPlate work={galleryWorks[0]} variant="plate-left" />

      <section className="line-curator-note" aria-label="Curator note">
        <p className="line-kicker">CATALOGUE NOTE / 01</p>
        <blockquote>{lineGallerySite.curatorNote}</blockquote>
      </section>

      <section className="line-diptych" aria-labelledby="line-diptych-title">
        <div className="line-diptych__first">
          <LineGalleryImage image={galleryWorks[2].image} sizes="(max-width: 760px) 100vw, 39vw" />
        </div>
        <div className="line-diptych__second">
          <LineGalleryImage image={galleryWorks[0].detailImage ?? galleryWorks[0].image} sizes="(max-width: 760px) 74vw, 25vw" />
        </div>
        <div className="line-diptych__caption">
          <p className="line-kicker">DIPTYCH / 02–03</p>
          <h2 id="line-diptych-title">Scale changes the drawing.</h2>
          <p>Small work depends on proportion and distance. The same line cannot simply be reduced until it fits.</p>
        </div>
      </section>

      <ArtistNotation artist={galleryArtists[0]} />
      <WorkPlate work={galleryWorks[4]} variant="plate-edge" />

      <section className="line-studio-note" aria-labelledby="line-studio-note-title">
        <p className="line-kicker">STUDIO / METHOD</p>
        <h2 id="line-studio-note-title">Less drawing. More placement.</h2>
        <p>{lineGallerySite.studioNote}</p>
        <Link className="line-text-link" href="/sites/tatoueur-02/studio">Studio method ↗</Link>
      </section>

      <VisitPanel />
    </div>
  );
}
