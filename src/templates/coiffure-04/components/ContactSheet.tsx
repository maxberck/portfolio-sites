import type { ChromaticWorkEntry } from "../types";
import { ChromaticImage } from "./ChromaticImage";

type ContactSheetProps = {
  entries: ChromaticWorkEntry[];
  featureFirst?: boolean;
};

export function ContactSheet({ entries, featureFirst = true }: ContactSheetProps) {
  const [feature, ...rest] = entries;
  if (!feature) return null;

  return (
    <div className={`chrom-contact-sheet ${featureFirst ? "feature-first" : "feature-last"}`}>
      <div className="chrom-contact-feature">
        <ChromaticImage image={feature.image} sizes="(max-width: 800px) 100vw, 65vw" />
        <div className="chrom-work-caption"><strong>{feature.ref}</strong><span>{feature.family}</span><span>{feature.shade}</span></div>
      </div>
      <div className="chrom-contact-crops">
        {rest.map((entry) => (
          <article key={`${entry.ref}-${entry.shade}`}>
            <ChromaticImage image={entry.image} showRef={false} sizes="(max-width: 800px) 50vw, 20vw" />
            <div className="chrom-work-caption"><strong>{entry.ref}</strong><span>{entry.family}</span><span>{entry.shade}</span></div>
          </article>
        ))}
      </div>
    </div>
  );
}
