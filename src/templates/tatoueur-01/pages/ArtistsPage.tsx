import Link from "next/link";

import { BlackRitualImage } from "../components/BlackRitualImage";
import { tattooArtists, tattooWorks } from "../data/site";

const variants = ["left", "wide", "type"] as const;

export function ArtistsPage() {
  return (
    <div className="ritual-subpage ritual-artists-page">
      <header className="ritual-page-intro ritual-page-intro--artists">
        <p className="ritual-kicker">THREE HANDS / ONE ROOM</p>
        <h1>ARTISTS</h1>
        <p className="ritual-page-intro__lede">
          Three fictional practices sharing a preference for custom drawing, strong placement and black ink.
        </p>
      </header>

      <div className="ritual-artist-posters">
        {tattooArtists.map((artist, index) => {
          const representative = tattooWorks.find((work) => artist.workIds.includes(work.id)) ?? tattooWorks[0];
          return (
            <section key={artist.slug} className={`ritual-artist-poster ritual-artist-poster--${variants[index]}`} aria-labelledby={`${artist.slug}-title`}>
              <div className="ritual-artist-poster__portrait">
                <BlackRitualImage image={artist.portrait} sizes="(max-width: 760px) 100vw, 42vw" />
              </div>
              <div className="ritual-artist-poster__copy">
                <p className="ritual-kicker">0{index + 1} / {artist.specialty}</p>
                <h2 id={`${artist.slug}-title`}>{artist.name}</h2>
                <p>{artist.bio}</p>
                <Link className="ritual-text-link" href={`/sites/tatoueur-01/work#${representative.id}`}>
                  Representative work — {representative.title} ↗
                </Link>
              </div>
              <div className="ritual-artist-poster__work">
                <BlackRitualImage image={representative.image} sizes="(max-width: 760px) 55vw, 24vw" />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
