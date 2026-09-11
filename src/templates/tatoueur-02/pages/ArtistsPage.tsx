import { LineGalleryImage } from "../components/LineGalleryImage";
import { galleryArtists, galleryWorks } from "../data/site";

const variants = ["left", "split", "margin"] as const;

export function ArtistsPage() {
  return (
    <div className="line-artists-page">
      <header className="line-page-intro">
        <p className="line-kicker">DOSSIERS / 03 ARTISTS</p>
        <h1>ARTISTS</h1>
        <p className="line-page-intro__lede">Three fictional practices, each built around placement, restraint and small-scale drawing.</p>
      </header>

      <section className="line-artist-dossiers" aria-label="Line Gallery artists">
        {galleryArtists.map((artist, index) => {
          const work = galleryWorks.find((item) => item.id === artist.workId) ?? galleryWorks[0];
          return (
            <article key={artist.slug} className={`line-artist-dossier line-artist-dossier--${variants[index]}`}>
              <div className="line-artist-dossier__portrait">
                <LineGalleryImage image={artist.portrait} sizes="(max-width: 760px) 100vw, 34vw" />
              </div>
              <div className="line-artist-dossier__copy">
                <p className="line-kicker">DOSSIER / 0{index + 1}</p>
                <h2>{artist.name}</h2>
                <p className="line-artist-dossier__specialty">{artist.specialty}</p>
                <p className="line-artist-dossier__bio">{artist.bio}</p>
              </div>
              <figure className="line-artist-dossier__work">
                <LineGalleryImage image={work.image} sizes="(max-width: 760px) 72vw, 22vw" />
                <figcaption>{work.number} / {work.title}</figcaption>
              </figure>
            </article>
          );
        })}
      </section>
    </div>
  );
}
