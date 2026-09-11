import { MatiereImage } from "./MatiereImage";
import type { MatiereWork } from "../types";

export function StudySpread({ work }: { work: MatiereWork }) {
  return (
    <article className={`matiere-study matiere-study--${work.variant}`}>
      <div className="matiere-study__image-main">
        <MatiereImage image={work.image} sizes="(max-width: 760px) 100vw, 72vw" />
      </div>

      {work.detailImage ? (
        <div className="matiere-study__image-detail">
          <MatiereImage image={work.detailImage} sizes="(max-width: 760px) 70vw, 34vw" />
        </div>
      ) : null}

      <div className="matiere-study__copy" data-overlap-group={`study-${work.id}`}>
        <p className="matiere-folio">Study {work.number}</p>
        <h2 data-display-heading data-overlap-check>{work.title}</h2>
        <p className="matiere-study__note" data-overlap-check>{work.note}</p>
        <dl>
          <div><dt>Artist</dt><dd>{work.artist}</dd></div>
          <div><dt>Focus</dt><dd>{work.focus}</dd></div>
          <div><dt>Placement</dt><dd>{work.placement}</dd></div>
        </dl>
      </div>
    </article>
  );
}
