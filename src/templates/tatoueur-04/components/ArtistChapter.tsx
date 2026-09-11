import Link from "next/link";

import { MatiereImage } from "./MatiereImage";
import type { MatiereArtist } from "../types";

export function ArtistChapter({ artist, index }: { artist: MatiereArtist; index: number }) {
  return (
    <article className={`matiere-artist matiere-artist--${artist.variant}`}>
      <div className="matiere-artist__portrait">
        <MatiereImage image={artist.portrait} sizes="(max-width: 760px) 100vw, 38vw" />
      </div>
      <div className="matiere-artist__copy" data-overlap-group={`artist-${artist.id}`}>
        <p className="matiere-folio">Chapter {String(index + 1).padStart(2, "0")}</p>
        <h2 data-display-heading data-overlap-check>{artist.name}</h2>
        <p className="matiere-artist__focus">{artist.focus}</p>
        <p data-overlap-check>{artist.bio}</p>
        <blockquote>{artist.statement}</blockquote>
        <Link href="/sites/tatoueur-04/work">Related works →</Link>
      </div>
      <div className="matiere-artist__work">
        <MatiereImage image={artist.work} sizes="(max-width: 760px) 80vw, 30vw" />
      </div>
    </article>
  );
}
