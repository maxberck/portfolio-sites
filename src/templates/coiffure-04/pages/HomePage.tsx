import Link from "next/link";

import { ChromaticImage } from "../components/ChromaticImage";
import { ColorFamilyPanel, type ColorFamilyVariant } from "../components/ColorFamilyPanel";
import { ColorMap } from "../components/ColorMap";
import { ContactSheet } from "../components/ContactSheet";
import { chromaticSite } from "../data/site";

const variants: ColorFamilyVariant[] = ["portrait-right", "texture-full", "layered", "technical"];

export function HomePage() {
  return (
    <>
      <section className="chrom-hero" aria-labelledby="chromatic-home-title">
        <div className="chrom-hero-blue" aria-hidden="true" />
        <div className="chrom-hero-orange" aria-hidden="true">COLOR / 04</div>
        <h1 id="chromatic-home-title"><span>CHRO</span><span>MATIC</span></h1>
        <ChromaticImage image={chromaticSite.images.vivid} className="chrom-hero-image chrom-hero-image-a" priority sizes="(max-width: 800px) 72vw, 30vw" />
        <ChromaticImage image={chromaticSite.images.blonde} className="chrom-hero-image chrom-hero-image-b" priority sizes="(max-width: 800px) 45vw, 20vw" />
        <ChromaticImage image={chromaticSite.images.copper} className="chrom-hero-image chrom-hero-image-c" sizes="(max-width: 800px) 40vw, 18vw" />
        <div className="chrom-hero-copy">
          <span className="chrom-kicker">CREATIVE COLOR STUDIO / DEMO</span>
          <p>{chromaticSite.hero.intro}</p>
          <div className="chrom-inline-links">
            <Link href="/sites/coiffure-04/color">Explore color →</Link>
            <Link href="/sites/coiffure-04/work">View work →</Link>
          </div>
        </div>
        <div className="chrom-hero-meta">{chromaticSite.hero.meta.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <section className="chrom-family-intro">
        <span>COLOR FAMILIES / 01—04</span>
        <h2>FOUR DIRECTIONS.<br />FOUR DIFFERENT RHYTHMS.</h2>
        <p>Chaque famille change de placement, de densité et de couleur dominante plutôt que de répéter une carte.</p>
      </section>

      <div className="chrom-family-stack">
        {chromaticSite.families.map((family, index) => (
          <ColorFamilyPanel key={family.slug} family={family} variant={variants[index]} />
        ))}
      </div>

      <ColorMap stages={chromaticSite.colorMap} />

      <section className="chrom-work-teaser" aria-labelledby="work-teaser-title">
        <div className="chrom-section-head">
          <span>WORK / CONTACT SHEET</span>
          <h2 id="work-teaser-title">COLOR AS<br />REFERENCE.</h2>
          <Link href="/sites/coiffure-04/work">Open work →</Link>
        </div>
        <ContactSheet entries={chromaticSite.work.slice(0, 5)} />
      </section>

      <section className="chrom-colophon">
        <div className="chrom-colophon-pink"><span>STUDIO / BRUXELLES</span><strong>COLOR<br />LAB</strong></div>
        <div className="chrom-colophon-copy">
          <p>{chromaticSite.studio.intro}</p>
          <Link href="/sites/coiffure-04/studio">Inside studio →</Link>
        </div>
        <div className="chrom-colophon-contact">
          <span>{chromaticSite.contact.address}</span>
          <a href={`tel:${chromaticSite.contact.phone.replace(/\s/g, "")}`}>{chromaticSite.contact.phone}</a>
          <a href={`mailto:${chromaticSite.contact.email}`}>{chromaticSite.contact.email}</a>
          <Link href="/sites/coiffure-04/contact">CONTACT →</Link>
        </div>
      </section>
    </>
  );
}
