import Link from "next/link";

import type { GalleryArtist } from "../types";
import { LineGalleryImage } from "./LineGalleryImage";

export function ArtistNotation({ artist }: { artist: GalleryArtist }) {
  return (
    <section className="line-artist-note" aria-labelledby={`line-artist-note-${artist.slug}`}>
      <div className="line-artist-note__portrait">
        <LineGalleryImage image={artist.portrait} sizes="(max-width: 760px) 72vw, 22vw" />
      </div>
      <div className="line-artist-note__copy">
        <p className="line-kicker">ARTIST NOTE / 01</p>
        <h2 id={`line-artist-note-${artist.slug}`}>{artist.name}</h2>
        <p className="line-artist-note__specialty">{artist.specialty}</p>
        <p>{artist.bio}</p>
        <Link className="line-text-link" href="/sites/tatoueur-02/artists">Artist dossiers ↗</Link>
      </div>
    </section>
  );
}
