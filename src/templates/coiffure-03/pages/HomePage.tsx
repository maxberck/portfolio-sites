import Link from "next/link";

import { FormImage } from "../components/FormImage";
import { SectionIndex } from "../components/SectionIndex";
import { ServiceRow } from "../components/ServiceRow";
import { formStudioSite } from "../src/data/site";

export function HomePage() {
  const { hero, featuredServices, images, studio, contact } = formStudioSite;

  return (
    <div className="form-home">
      <section className="form-hero">
        <h1>{hero.title}</h1>
        <div className="form-hero-intro">
          <span className="form-accent-chip">03 / HAIR SYSTEM</span>
          <p>{hero.intro}</p>
          <div className="form-inline-links">
            <Link href="/sites/coiffure-03/services">SERVICES ↗</Link>
            <Link href="/sites/coiffure-03/contact">CONTACT ↗</Link>
          </div>
        </div>
        <div className="form-hero-meta" aria-label="Informations studio">
          {hero.meta.map((item) => <span key={item}>{item}</span>)}
        </div>
        <FormImage image={images.hero} className="form-hero-image" priority sizes="(max-width: 760px) 100vw, 40vw" />
      </section>

      <section className="form-section form-services-preview" aria-labelledby="home-services-title">
        <SectionIndex index="01" label="SERVICES" />
        <div className="form-section-title-wrap">
          <h2 id="home-services-title">SERVICES / SYSTEM</h2>
          <p>Quatre familles lisibles, organisées comme une fiche de travail plutôt qu’une série de cartes.</p>
        </div>
        <div className="form-service-table">
          {featuredServices.map((service) => <ServiceRow key={service.code} service={service} />)}
        </div>
        <p className="form-demo-note">{formStudioSite.demoDisclosure}</p>
      </section>

      <section className="form-section form-studio-preview">
        <SectionIndex index="02" label="STUDIO" />
        <FormImage image={images.interior} className="form-studio-wide" sizes="(max-width: 760px) 100vw, 58vw" />
        <div className="form-studio-copy">
          <h2>{studio.lead}</h2>
          <p>{studio.intro}</p>
          <Link className="form-arrow-link" href="/sites/coiffure-03/studio">STUDIO ↗</Link>
        </div>
      </section>

      <section className="form-section form-work-preview" aria-labelledby="work-preview-title">
        <SectionIndex index="03" label="WORK" />
        <h2 id="work-preview-title">SHAPE / TEXTURE / COLOR</h2>
        <div className="form-work-grid">
          <FormImage image={images.texture} className="form-work-wide" sizes="(max-width: 760px) 100vw, 64vw" />
          <FormImage image={images.color} className="form-work-narrow" sizes="(max-width: 760px) 100vw, 30vw" />
          <FormImage image={images.consult} className="form-work-narrow" sizes="(max-width: 760px) 100vw, 30vw" />
          <FormImage image={images.prep} className="form-work-wide" sizes="(max-width: 760px) 100vw, 64vw" />
        </div>
        <Link className="form-arrow-link" href="/sites/coiffure-03/work">OPEN WORK ↗</Link>
      </section>

      <section className="form-contact-sheet">
        <SectionIndex index="04" label="CONTACT" />
        <h2>FORM / INFO</h2>
        <p>{contact.address}</p>
        <div>
          <span>{contact.phone}</span>
          <span>{contact.email}</span>
        </div>
        <Link href="/sites/coiffure-03/contact">FULL CONTACT ↗</Link>
      </section>
    </div>
  );
}
