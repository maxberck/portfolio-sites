import { Colophon } from "../components/Colophon";
import { StudySpread } from "../components/StudySpread";
import { matiereSite } from "../data/site";

export function WorkPage() {
  return (
    <main className="matiere-main matiere-work-page">
      <header className="matiere-page-intro" data-overlap-group="work-intro">
        <p className="matiere-kicker">Archive / 02</p>
        <h1 data-display-heading data-overlap-check>WORK STUDIES</h1>
        <p className="matiere-page-intro__lede" data-overlap-check>Six studies in line, density, placement and movement. Each spread keeps its own rhythm rather than collapsing into a gallery grid.</p>
      </header>

      <section className="matiere-work-archive" aria-label="Selected work studies">
        {matiereSite.works.map((work) => <StudySpread key={work.id} work={work} />)}
      </section>

      <Colophon compact />
    </main>
  );
}
