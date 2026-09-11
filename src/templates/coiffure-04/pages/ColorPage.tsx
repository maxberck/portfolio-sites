import { ColorFamilyPanel, type ColorFamilyVariant } from "../components/ColorFamilyPanel";
import { ColorMap } from "../components/ColorMap";
import { chromaticSite } from "../data/site";

const variants: ColorFamilyVariant[] = ["portrait-right", "texture-full", "layered", "technical"];

export function ColorPage() {
  return (
    <div className="chrom-page chrom-color-page">
      <header className="chrom-page-hero chrom-page-hero-pink">
        <span>01 / COLOR</span>
        <h1>COLOR<br />ATLAS</h1>
        <p>Quatre familles fictives pour montrer différentes façons d’organiser lumière, reflet, saturation et correction.</p>
      </header>
      <div className="chrom-expanded-families">
        {chromaticSite.families.map((family, index) => (
          <ColorFamilyPanel key={family.slug} family={family} variant={variants[index]} expanded />
        ))}
      </div>
      <p className="chrom-demo-note">Services, durées et indications d’entretien présentés à titre illustratif pour cette démonstration.</p>
      <ColorMap stages={chromaticSite.colorMap} />
    </div>
  );
}
