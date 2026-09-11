import { ChromaticImage } from "../components/ChromaticImage";
import { ColorMap } from "../components/ColorMap";
import { chromaticSite } from "../data/site";

export function StudioPage() {
  return (
    <div className="chrom-page">
      <header className="chrom-page-hero chrom-page-hero-blue">
        <span>02 / STUDIO</span>
        <h1>STUDIO</h1>
        <p>{chromaticSite.studio.intro}</p>
      </header>

      <section className="chrom-studio-editorial">
        <ChromaticImage image={chromaticSite.images.process} className="chrom-studio-process" sizes="(max-width: 800px) 100vw, 58vw" />
        <div className="chrom-studio-notes">
          <span>PROCESS NOTES / DEMO</span>
          <h2>READ.<br />PLACE.<br />TONE.</h2>
          <p>La page évite le récit de fondateur fictif : elle montre plutôt comment un coloriste pourrait structurer une consultation et une direction.</p>
        </div>
        <ChromaticImage image={chromaticSite.images.studio} className="chrom-studio-space" sizes="(max-width: 800px) 100vw, 42vw" />
      </section>

      <section className="chrom-principles">
        {chromaticSite.studio.principles.map((item) => (
          <article key={item.index}>
            <span>{item.index}</span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <ColorMap stages={chromaticSite.colorMap} />
    </div>
  );
}
