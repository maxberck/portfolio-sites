import { ArtistChapter } from "../components/ArtistChapter";
import { Colophon } from "../components/Colophon";
import { matiereSite } from "../data/site";

export function ArtistsPage() {
  return (
    <main className="matiere-main matiere-artists-page">
      <header className="matiere-page-intro matiere-page-intro--artists" data-overlap-group="artists-intro">
        <p className="matiere-kicker">People / 03</p>
        <h1 data-display-heading data-overlap-check>ARTIST CHAPTERS</h1>
        <p className="matiere-page-intro__lede" data-overlap-check>Three fictional practices, each presented as a chapter rather than a profile card.</p>
      </header>

      <section className="matiere-artist-chapters" aria-label="Matière artists">
        {matiereSite.artists.map((artist, index) => <ArtistChapter key={artist.id} artist={artist} index={index} />)}
      </section>

      <Colophon compact />
    </main>
  );
}
