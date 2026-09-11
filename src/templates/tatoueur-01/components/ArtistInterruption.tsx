import Link from "next/link";

import type { TattooArtist } from "../types";
import { BlackRitualImage } from "./BlackRitualImage";

export function ArtistInterruption({ artist }: { artist: TattooArtist }) {
  return (
    <section className="ritual-artist-break" aria-labelledby="featured-artist-title">
      <div className="ritual-artist-break__label">ARTIST INTERRUPTION / 01</div>
      <div className="ritual-artist-break__portrait">
        <BlackRitualImage image={artist.portrait} sizes="(max-width: 760px) 100vw, 34vw" />
      </div>
      <div className="ritual-artist-break__copy">
        <p className="ritual-kicker">{artist.specialty}</p>
        <h2 id="featured-artist-title">{artist.name}</h2>
        <p>{artist.bio}</p>
        <Link className="ritual-text-link ritual-text-link--dark" href="/sites/tatoueur-01/artists">Meet the artists ↗</Link>
      </div>
    </section>
  );
}
