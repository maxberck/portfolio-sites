import type { ChromaticMapStage } from "../types";
import { ColorSwatch } from "./ColorSwatch";

type ColorMapProps = {
  stages: ChromaticMapStage[];
};

export function ColorMap({ stages }: ColorMapProps) {
  return (
    <section className="chrom-color-map" aria-labelledby="chrom-color-map-title">
      <div className="chrom-color-map-head">
        <span>PROCESS / 04</span>
        <h2 id="chrom-color-map-title">COLOR MAP</h2>
        <span className="chrom-scroll-cue" aria-hidden="true">SCROLL →</span>
      </div>
      <div className="chrom-color-map-track">
        {stages.map((stage) => (
          <article key={stage.name} className="chrom-map-stage">
            <div className="chrom-map-stage-top">
              <span>{stage.index}</span>
              <strong>{stage.name}</strong>
              <small>{stage.code}</small>
            </div>
            <p>{stage.description}</p>
            <div className="chrom-map-swatches">
              {stage.swatches.map((swatch) => <ColorSwatch key={swatch.label} {...swatch} />)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
