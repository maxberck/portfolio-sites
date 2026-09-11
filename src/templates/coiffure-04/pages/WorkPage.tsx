import { ContactSheet } from "../components/ContactSheet";
import { chromaticSite } from "../data/site";

export function WorkPage() {
  const first = chromaticSite.work.slice(0, 4);
  const second = [chromaticSite.work[4], chromaticSite.work[1], chromaticSite.work[5], chromaticSite.work[2]];

  return (
    <div className="chrom-page chrom-work-page">
      <header className="chrom-page-hero chrom-page-hero-orange">
        <span>03 / WORK</span>
        <h1>WORK<br />INDEX</h1>
        <p>Un lookbook fictif construit comme une feuille de références plutôt qu’une galerie de résultats clients.</p>
      </header>
      <section className="chrom-work-chapter">
        <div className="chrom-work-chapter-label"><span>A / 01</span><strong>LIGHT + WARM</strong></div>
        <ContactSheet entries={first} />
      </section>
      <section className="chrom-work-chapter chrom-work-chapter-blue">
        <div className="chrom-work-chapter-label"><span>B / 02</span><strong>PROCESS + VIVID</strong></div>
        <ContactSheet entries={second} featureFirst={false} />
      </section>
      <p className="chrom-demo-note">Images et références de couleur utilisées uniquement pour cette démonstration de portfolio.</p>
    </div>
  );
}
