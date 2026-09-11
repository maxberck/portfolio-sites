import Link from "next/link";

import { luckyArtists } from "../data/site";

export function ArtistRoster() {
  return (
    <section className="lucky-artist-roster" aria-labelledby="lucky-roster-title">
      <div className="lucky-artist-roster__label">
        <span>Shop roster</span>
        <h2 id="lucky-roster-title">Three hands, one wall of flash.</h2>
      </div>
      <div className="lucky-artist-roster__names">
        {luckyArtists.map((artist, index) => (
          <Link key={artist.slug} href="/sites/tatoueur-03/artists" className="lucky-artist-roster__row">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{artist.name}</strong>
            <em>{artist.specialty}</em>
          </Link>
        ))}
      </div>
    </section>
  );
}
