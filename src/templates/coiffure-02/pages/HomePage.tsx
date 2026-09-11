import Link from "next/link";

import { BarberMenuRow } from "../components/BarberMenuRow";
import { DistrictImage } from "../components/DistrictImage";
import { districtCutSite } from "../src/data/site";

export function HomePage() {
  const { hero, images, services, shop } = districtCutSite;

  return (
    <div className="district-home">
      <section className="district-hero">
        <DistrictImage image={images.hero} className="district-hero-image" priority sizes="(max-width: 900px) 100vw, 46vw" />
        <div className="district-hero-copy">
          <span className="district-kicker">{hero.eyebrow}</span>
          <h1>{hero.title}</h1>
          <p>{hero.copy}</p>
          <div className="district-hero-actions">
            <Link className="district-btn district-btn-primary" href="/sites/coiffure-02/services">VOIR LES SERVICES</Link>
            <Link className="district-text-link" href="/sites/coiffure-02/contact">CANAL · BRUXELLES ↗</Link>
          </div>
          <span className="district-side-note">WALK-IN / CONTACT</span>
        </div>
      </section>

      <section className="district-section district-services-preview" aria-labelledby="services-title">
        <div className="district-section-heading">
          <span>01 / MENU</span>
          <h2 id="services-title">CUT / FADE / BEARD</h2>
        </div>
        <div className="barber-menu">
          {services.slice(0, 4).map((service) => <BarberMenuRow key={service.code} service={service} />)}
        </div>
        <p className="district-disclosure">{districtCutSite.demoDisclosure}</p>
      </section>

      <section className="district-shop-statement">
        <div className="district-shop-copy">
          <span>02 / THE SHOP</span>
          <h2>Le geste avant le décor.</h2>
          <p>{shop.intro}</p>
          <Link className="district-text-link" href="/sites/coiffure-02/shop">ENTRER DANS LE SHOP ↗</Link>
        </div>
        <DistrictImage image={images.shop} className="district-shop-image" sizes="(max-width: 900px) 100vw, 58vw" />
      </section>

      <section className="district-cuts-teaser" aria-labelledby="cuts-title">
        <div className="district-section-heading">
          <span>03 / CUTS</span>
          <h2 id="cuts-title">DETAILS. LINES. TEXTURE.</h2>
        </div>
        <div className="district-cuts-strip">
          <DistrictImage image={images.craft} className="cut-strip-a" sizes="(max-width: 700px) 100vw, 28vw" />
          <DistrictImage image={images.hero} className="cut-strip-b" sizes="(max-width: 700px) 100vw, 38vw" />
          <DistrictImage image={images.night} className="cut-strip-c" sizes="(max-width: 700px) 100vw, 26vw" />
        </div>
        <Link className="district-btn" href="/sites/coiffure-02/cuts">VOIR LES CUTS</Link>
      </section>

      <section className="district-contact-close">
        <span>04 / CONTACT</span>
        <div>
          <h2>PASSER AU SHOP.</h2>
          <p>{districtCutSite.contact.address}</p>
        </div>
        <Link className="district-btn district-btn-light" href="/sites/coiffure-02/contact">INFOS & HORAIRES</Link>
      </section>
    </div>
  );
}
