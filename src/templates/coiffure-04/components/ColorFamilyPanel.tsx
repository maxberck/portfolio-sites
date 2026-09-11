import Link from "next/link";

import type { ChromaticFamily } from "../types";
import { ChromaticImage } from "./ChromaticImage";

export type ColorFamilyVariant = "portrait-right" | "texture-full" | "layered" | "technical";

type ColorFamilyPanelProps = {
  family: ChromaticFamily;
  variant: ColorFamilyVariant;
  expanded?: boolean;
};

export function ColorFamilyPanel({ family, variant, expanded = false }: ColorFamilyPanelProps) {
  const label = `${family.code} ${family.name}`;

  return (
    <section className={`chrom-family chrom-family-${family.slug} chrom-family-${variant}`} aria-labelledby={`family-${family.slug}`}>
      <div className="chrom-family-label">
        <span>{family.code}</span>
        <h2 id={`family-${family.slug}`}>{label}</h2>
      </div>
      <ChromaticImage image={family.image} className="chrom-family-image" sizes="(max-width: 800px) 100vw, 60vw" />
      <div className="chrom-family-copy">
        <p>{family.description}</p>
        <ul>{family.services.map((service) => <li key={service}>{service}</li>)}</ul>
        <small>{family.note}</small>
        {!expanded ? <Link href="/sites/coiffure-04/color">Explore color →</Link> : null}
      </div>
      <div className="chrom-family-code" aria-hidden="true">{family.slug.toUpperCase().slice(0, 2)} / {family.code}</div>
    </section>
  );
}
