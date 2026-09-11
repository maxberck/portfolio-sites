import Link from "next/link";

import { BarberMenuRow } from "../components/BarberMenuRow";
import { PageIntro } from "../components/PageIntro";
import { districtCutSite } from "../src/data/site";

export function ServicesPage() {
  return (
    <div className="district-page district-services-page">
      <PageIntro index="01 / SERVICES" title="Services" copy="Une carte courte : coupe, fade, barbe et entretien. Chaque ligne décrit le geste, sans pack ni formule artificielle." />
      <section className="barber-menu barber-menu-full" aria-label="Menu des services">
        {districtCutSite.services.map((service) => <BarberMenuRow key={service.code} service={service} />)}
      </section>
      <p className="district-disclosure">{districtCutSite.demoDisclosure}</p>
      <section className="district-page-cta">
        <span>UNE QUESTION SUR UNE COUPE ?</span>
        <Link className="district-btn district-btn-light" href="/sites/coiffure-02/contact">CONTACTER LE SHOP</Link>
      </section>
    </div>
  );
}
