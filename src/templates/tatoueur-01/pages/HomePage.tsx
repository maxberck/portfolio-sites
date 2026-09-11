import Link from "next/link";

import { ArtistInterruption } from "../components/ArtistInterruption";
import { BlackRitualImage } from "../components/BlackRitualImage";
import { SelectedWorkSpread } from "../components/SelectedWorkSpread";
import { VisitPoster } from "../components/VisitPoster";
import { blackRitualSite, tattooArtists, tattooWorks } from "../data/site";

export function HomePage() {
  return (
    <div className="ritual-home">
      <section className="ritual-opening" aria-labelledby="ritual-home-title">
        <div className="ritual-opening__meta" aria-label="Studio descriptors">
          <span>BRUSSELS</span>
          <span>BLACKWORK</span>
          <span>CUSTOM PIECES</span>
          <span>EST. 2019 / FICTIONAL</span>
        </div>

        <h1 id="ritual-home-title" className="ritual-opening__title">
          <span>BLACK</span>
          <span>RITUAL</span>
        </h1>

        <div className="ritual-opening__image">
          <BlackRitualImage image={tattooWorks[4].image} priority sizes="(max-width: 760px) 88vw, 36vw" />
        </div>

        <div className="ritual-opening__statement">
          <p>{blackRitualSite.manifesto}</p>
          <Link className="ritual-text-link" href="/sites/tatoueur-01/work">
            Enter work index ↗
          </Link>
        </div>
      </section>

      <section className="ritual-selected" aria-label="Selected tattoo work">
        <SelectedWorkSpread work={tattooWorks[0]} variant="double" />
        <SelectedWorkSpread work={tattooWorks[1]} variant="image-right" />
        <ArtistInterruption artist={tattooArtists[0]} />
        <SelectedWorkSpread work={tattooWorks[2]} variant="image-left" />
      </section>

      <section className="ritual-statement" aria-labelledby="ritual-statement-title">
        <div className="ritual-statement__copy">
          <p className="ritual-kicker">STUDIO / METHOD</p>
          <h2 id="ritual-statement-title">THE BODY IS THE GRID.</h2>
          <p>
            We start with placement and movement, then decide what should be ink and what should remain skin.
            References are useful for intent; the final drawing is made for one person and one body area.
          </p>
          <Link className="ritual-text-link" href="/sites/tatoueur-01/studio">
            Read the studio approach ↗
          </Link>
        </div>
        <div className="ritual-statement__image">
          <BlackRitualImage image={tattooArtists[1].portrait} sizes="(max-width: 760px) 100vw, 42vw" />
        </div>
      </section>

      <VisitPoster />
    </div>
  );
}
