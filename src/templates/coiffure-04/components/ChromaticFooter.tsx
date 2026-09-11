import Link from "next/link";

import { chromaticSite } from "../data/site";

export function ChromaticFooter() {
  return (
    <footer className="chrom-footer">
      <div>
        <strong>CHROMATIC / 04</strong>
        <span>{chromaticSite.business.descriptor}</span>
      </div>
      <nav aria-label="Liens de fin de page">
        <Link href="/sites/coiffure-04/color">Color</Link>
        <Link href="/sites/coiffure-04/work">Work</Link>
        <Link href="/sites/coiffure-04/contact">Contact</Link>
      </nav>
      <p>{chromaticSite.demoDisclosure}</p>
    </footer>
  );
}
