import { WorkIndex } from "../components/WorkIndex";

export function WorkPage() {
  return (
    <div className="ritual-subpage ritual-work-page">
      <header className="ritual-page-intro ritual-page-intro--work">
        <p className="ritual-kicker">ARCHIVE / 2026</p>
        <h1>WORK INDEX</h1>
        <p className="ritual-page-intro__lede">
          Six fictional projects arranged as an editorial index. Every piece is custom to placement, scale and movement.
        </p>
        <ul className="ritual-style-index" aria-label="Styles represented">
          <li>Blackwork</li>
          <li>Ornamental</li>
          <li>Lettering</li>
          <li>Abstract</li>
        </ul>
      </header>
      <WorkIndex />
    </div>
  );
}
