import type { GalleryWork } from "../types";
import { LineGalleryImage } from "./LineGalleryImage";

type WorkPlateProps = {
  work: GalleryWork;
  variant: "plate-left" | "plate-center" | "plate-edge";
};

export function WorkPlate({ work, variant }: WorkPlateProps) {
  return (
    <article className={`line-plate line-plate--${variant}`} id={work.id}>
      <div className="line-plate__image">
        <LineGalleryImage image={work.image} sizes="(max-width: 760px) 100vw, 52vw" />
      </div>
      <div className="line-plate__meta">
        <span>{work.number}</span>
        <span>{work.style}</span>
        <span>{work.artist}</span>
      </div>
      <div className="line-plate__caption">
        <h2>{work.title}</h2>
        <p>{work.caption}</p>
      </div>
    </article>
  );
}
