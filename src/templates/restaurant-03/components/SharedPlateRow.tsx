import { EditorialImage } from "@/src/templates/restaurant-03/components/EditorialImage";
import type { TerraSiteData } from "@/src/templates/restaurant-03/types";

type SharedPlate = TerraSiteData["sharedPlates"][number];

type SharedPlateRowProps = {
  plate: SharedPlate;
  index: number;
};

export function SharedPlateRow({ plate, index }: SharedPlateRowProps) {
  return (
    <article className="terra-plate" data-layout={index % 2 === 0 ? "forward" : "reverse"}>
      <div className="terra-plate__copy">
        <p className="terra-plate__kicker">À partager</p>
        <h3>{plate.name}</h3>
        <p>{plate.description}</p>
        <span className="terra-plate__price">{plate.price}</span>
      </div>
      <EditorialImage image={plate.image} className="terra-plate__image" />
    </article>
  );
}
