import { BlackRitualImage } from "./BlackRitualImage";
import { tattooWorks } from "../data/site";

const layoutVariants = ["wide", "offset", "tall", "split", "offset", "wide"] as const;

export function WorkIndex() {
  return (
    <div className="ritual-work-index">
      {tattooWorks.map((work, index) => (
        <article key={work.id} id={work.id} className={`ritual-index-item ritual-index-item--${layoutVariants[index]}`}>
          <div className="ritual-index-item__number">{work.number}</div>
          <div className="ritual-index-item__image">
            <BlackRitualImage image={work.image} sizes="(max-width: 760px) 100vw, 58vw" />
          </div>
          <div className="ritual-index-item__copy">
            <p>{work.style} / {work.artist}</p>
            <h2>{work.title}</h2>
            <p>{work.caption}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
