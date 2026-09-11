import Link from "next/link";

import { LuckyImage } from "../components/LuckyImage";
import { luckyArtists } from "../data/site";

export function ArtistsPage() {
  return (
    <>
      <header className="lucky-page-intro lucky-page-intro--artists">
        <span>Shop hands / XIII</span>
        <h1>SHOP ROSTER</h1>
        <p className="lucky-page-intro__lede">Three fictional artists, each presented with a different printed-bio rhythm rather than identical profile cards.</p>
      </header>

      <section className="lucky-artists-stack" aria-label="Lucky XIII artists">
        {luckyArtists.map((artist, index) => (
          <article key={artist.slug} className={`lucky-artist-section lucky-artist-section--${index + 1}`}>
            <div className="lucky-artist-section__portrait">
              <LuckyImage asset={artist.portrait} sizes="(max-width: 760px) 100vw, 42vw" />
            </div>
            <div className="lucky-artist-section__copy">
              <span>{artist.specialty}</span>
              <h2>{artist.name}</h2>
              <p className="lucky-artist-section__bio">{artist.bio}</p>
              <p className="lucky-artist-section__sheets">Sheets: {artist.sheetIds.map((id) => `#${id}`).join(" · ")}</p>
              <Link href="/sites/tatoueur-03/work">See the flash book →</Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
