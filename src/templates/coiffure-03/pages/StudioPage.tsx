import { FormImage } from "../components/FormImage";
import { SectionIndex } from "../components/SectionIndex";
import { formStudioSite } from "../src/data/site";

export function StudioPage() {
  const { studio, images } = formStudioSite;
  return (
    <div className="form-page">
      <header className="form-page-header form-page-header-grid">
        <SectionIndex index="02" label="STUDIO" />
        <h1>STUDIO</h1>
        <p>{studio.intro}</p>
      </header>
      <section className="form-studio-layout">
        <FormImage image={images.interior} className="form-studio-main-image" priority sizes="(max-width: 760px) 100vw, 66vw" />
        <div className="form-studio-side">
          <h2>{studio.lead}</h2>
          <FormImage image={images.consult} className="form-studio-side-image" sizes="(max-width: 760px) 100vw, 28vw" />
        </div>
      </section>
      <section className="form-principles" aria-label="Méthode de travail">
        {studio.principles.map((principle) => (
          <article key={principle.index}>
            <span>{principle.index}</span>
            <h2>{principle.title}</h2>
            <p>{principle.text}</p>
          </article>
        ))}
      </section>
      <FormImage image={images.prep} className="form-studio-bottom-image" sizes="100vw" />
    </div>
  );
}
