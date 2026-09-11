import { DistrictImage } from "../components/DistrictImage";
import { PageIntro } from "../components/PageIntro";
import { districtCutSite } from "../src/data/site";

export function CutsPage() {
  return (
    <div className="district-page district-cuts-page">
      <PageIntro index="03 / CUTS" title="Cuts" copy="Une galerie de références visuelles : formes courtes, dégradés, texture et travail de barbe." />
      <p className="district-gallery-note">IMAGES ILLUSTRATIVES — elles ne sont pas présentées comme des réalisations documentées sur des clients District Cut.</p>
      <section className="district-gallery" aria-label="Galerie de styles de coupe">
        {districtCutSite.cuts.map((cut, index) => {
          const image = districtCutSite.images[cut.imageKey];
          return (
            <article className={`district-gallery-item district-gallery-item-${index + 1}`} key={cut.label}>
              <DistrictImage image={{ ...image, label: cut.label }} sizes="(max-width: 700px) 100vw, 45vw" />
              <p>{cut.note}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
}
