import Link from "next/link";

import type { TattooWork } from "../types";
import { BlackRitualImage } from "./BlackRitualImage";

type SelectedWorkSpreadProps = {
  work: TattooWork;
  variant: "image-left" | "image-right" | "double";
};

export function SelectedWorkSpread({ work, variant }: SelectedWorkSpreadProps) {
  return (
    <article className={`ritual-work-spread ritual-work-spread--${variant}`}>
      <div className="ritual-work-spread__number">{work.number} /</div>
      <div className="ritual-work-spread__media">
        <BlackRitualImage image={work.image} sizes="(max-width: 760px) 100vw, 62vw" />
        {variant === "double" && work.secondaryImage ? (
          <BlackRitualImage image={work.secondaryImage} className="ritual-work-spread__secondary" sizes="(max-width: 760px) 45vw, 24vw" />
        ) : null}
      </div>
      <div className="ritual-work-spread__copy">
        <p className="ritual-kicker">{work.style} · {work.artist}</p>
        <h2>{work.title}</h2>
        <p>{work.caption}</p>
        <Link className="ritual-text-link" href="/sites/tatoueur-01/work">View in archive ↗</Link>
      </div>
    </article>
  );
}
