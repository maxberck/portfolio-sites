import { FormImage } from "../components/FormImage";
import { SectionIndex } from "../components/SectionIndex";
import { formStudioSite } from "../src/data/site";

export function WorkPage() {
  const { images } = formStudioSite;
  return (
    <div className="form-page">
      <header className="form-page-header">
        <SectionIndex index="03" label="WORK" />
        <h1>WORK</h1>
        <p>Un book de démonstration centré sur la forme, la texture, la couleur et le geste de salon.</p>
      </header>
      <div className="form-work-book">
        <div className="form-work-row wide-left">
          <FormImage image={images.hero} className="form-book-wide" priority sizes="(max-width: 760px) 100vw, 65vw" />
          <FormImage image={images.texture} className="form-book-narrow" sizes="(max-width: 760px) 100vw, 30vw" />
        </div>
        <div className="form-work-row wide-right">
          <FormImage image={images.color} className="form-book-narrow" sizes="(max-width: 760px) 100vw, 30vw" />
          <FormImage image={images.consult} className="form-book-wide" sizes="(max-width: 760px) 100vw, 65vw" />
        </div>
        <div className="form-work-row wide-left">
          <FormImage image={images.interior} className="form-book-wide" sizes="(max-width: 760px) 100vw, 65vw" />
          <FormImage image={images.prep} className="form-book-narrow" sizes="(max-width: 760px) 100vw, 30vw" />
        </div>
      </div>
      <p className="form-demo-note">Photographies illustratives utilisées pour cette démonstration de site.</p>
    </div>
  );
}
