import Link from "next/link";

import { Colophon } from "../components/Colophon";
import { MatiereImage } from "../components/MatiereImage";
import { matiereSite } from "../data/site";

export function StudioPage() {
  const processImage = matiereSite.works[2].detailImage ?? matiereSite.works[2].image;
  const studioImage = matiereSite.artists[1].portrait;

  return (
    <main className="matiere-main matiere-practice-page">
      <header className="matiere-page-intro matiere-page-intro--practice" data-overlap-group="practice-intro">
        <p className="matiere-kicker">Method / 04</p>
        <h1 data-display-heading data-overlap-check>PRACTICE</h1>
        <p className="matiere-page-intro__lede" data-overlap-check>Observation comes before drawing. Placement comes before permanence.</p>
      </header>

      <section className="matiere-practice-thesis">
        <p className="matiere-folio">Studio note</p>
        <h2 data-display-heading>Draw for the body that is actually in front of us.</h2>
        <p>We work from movement, scale and negative space. A design is adapted at placement rather than treated as a fixed sheet.</p>
      </section>

      <section className="matiere-practice-steps" aria-label="Matière process">
        {matiereSite.practice.map((step) => (
          <article key={step.number} data-overlap-group={`practice-${step.number}`}>
            <p className="matiere-folio">{step.number}</p>
            <h2 data-display-heading data-overlap-check>{step.title}</h2>
            <p data-overlap-check>{step.copy}</p>
          </article>
        ))}
      </section>

      <section className="matiere-practice-images">
        <div className="matiere-practice-images__wide"><MatiereImage image={processImage} sizes="(max-width: 760px) 100vw, 65vw" /></div>
        <div className="matiere-practice-images__narrow"><MatiereImage image={studioImage} sizes="(max-width: 760px) 72vw, 28vw" /></div>
      </section>

      <section className="matiere-practical-notes">
        <article>
          <p className="matiere-folio">Preparation</p>
          <h2 data-display-heading>Before the session</h2>
          <p>Arrive rested, hydrated and with the placement accessible. Specific preparation is discussed directly for each project.</p>
        </article>
        <article>
          <p className="matiere-folio">Care</p>
          <h2 data-display-heading>After the session</h2>
          <p>General care guidance is provided after the appointment. This demo does not make medical claims or replace professional medical advice.</p>
        </article>
        <article>
          <p className="matiere-folio">Studio</p>
          <h2 data-display-heading>Hygiene</h2>
          <p>The fictional studio copy describes a clean professional working routine without claiming certifications or guarantees that cannot be verified.</p>
        </article>
      </section>

      <p className="matiere-next-chapter"><Link href="/sites/tatoueur-04/visit">Next chapter: Visit →</Link></p>
      <Colophon compact />
    </main>
  );
}
