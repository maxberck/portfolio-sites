import Link from "next/link";

import { ArtistChapter } from "../components/ArtistChapter";
import { Colophon } from "../components/Colophon";
import { MatiereImage } from "../components/MatiereImage";
import { StudySpread } from "../components/StudySpread";
import { matiereSite } from "../data/site";

export function HomePage() {
  const [surface, , trace, , motion] = matiereSite.works;
  const artist = matiereSite.artists[0];

  return (
    <main className="matiere-main matiere-home">
      <section className="matiere-cover" data-overlap-group="home-cover">
        <p className="matiere-cover__meta">ISSUE 04 / BRUSSELS / 2026</p>
        <div className="matiere-cover__title-block">
          <h1 data-display-heading data-overlap-check>MATIÈRE</h1>
          <p className="matiere-cover__descriptor" data-overlap-check>CONTEMPORARY TATTOO PRACTICE</p>
        </div>
        <div className="matiere-cover__image">
          <MatiereImage image={surface.image} priority sizes="(max-width: 760px) 100vw, 54vw" />
        </div>
        <p className="matiere-cover__statement">Surface, gesture and placement studied as one composition.</p>
        <Link className="matiere-text-link" href="/sites/tatoueur-04/work">ENTER WORKS →</Link>
      </section>

      <section className="matiere-material-study">
        <div className="matiere-material-study__image"><MatiereImage image={trace.image} sizes="(max-width: 760px) 100vw, 56vw" /></div>
        <div className="matiere-material-study__note" data-overlap-group="material-study">
          <p className="matiere-folio">Material study / 03</p>
          <h2 data-display-heading data-overlap-check>Skin is not paper.</h2>
          <p data-overlap-check>Placement changes when the arm turns. The drawing has to survive that movement.</p>
        </div>
      </section>

      <section className="matiere-thesis" data-overlap-group="thesis">
        <p className="matiere-folio">Thesis / 01</p>
        <h2 data-display-heading data-overlap-check>We leave room for the body to remain visible.</h2>
        <p data-overlap-check>Every project begins with scale, direction and empty skin before it becomes a tattoo.</p>
      </section>

      <section className="matiere-diptych">
        <div className="matiere-diptych__large"><MatiereImage image={motion.image} sizes="(max-width: 760px) 100vw, 62vw" /></div>
        <div className="matiere-diptych__small"><MatiereImage image={trace.detailImage ?? trace.image} sizes="(max-width: 760px) 72vw, 28vw" /></div>
        <p className="matiere-diptych__caption">Body / gesture — finished mark beside the act of making.</p>
      </section>

      <section className="matiere-artist-fragment">
        <ArtistChapter artist={artist} index={0} />
      </section>

      <section className="matiere-process-strip">
        <p className="matiere-folio">Practice sequence</p>
        <div>{matiereSite.practice.map((step) => <p key={step.number}><span>{step.number}</span>{step.title}</p>)}</div>
        <Link href="/sites/tatoueur-04/studio">Read the practice →</Link>
      </section>

      <StudySpread work={surface} />
      <Colophon />
    </main>
  );
}
