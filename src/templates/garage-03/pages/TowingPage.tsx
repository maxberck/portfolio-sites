import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/src/templates/garage-03/components/PageHero";
import { relais24Site } from "@/src/templates/garage-03/src/data/site";

export function TowingPage() {
  return (
    <>
      <PageHero
        code="03"
        eyebrow="TRANSPORT / SÉCURITÉ"
        title="REMORQUAGE"
        intro="Quand le véhicule ne doit pas repartir, la bonne intervention consiste à le transporter proprement vers l’étape suivante."
      />

      <section className="r24-section r24-section--cream r24-towing-grid">
        <div className="r24-towing-grid__media">
          <Image
            src={relais24Site.images.transport.src}
            alt={relais24Site.images.transport.alt}
            width={relais24Site.images.transport.width}
            height={relais24Site.images.transport.height}
          />
          <div className="r24-route-badge r24-route-badge--light" aria-hidden="true">
            <span>R24</span>
            <strong>TRANSPORT</strong>
            <small>VÉHICULE IMMOBILISÉ</small>
          </div>
        </div>
        <div className="r24-towing-grid__content">
          <span className="r24-kicker">CAS DE PRISE EN CHARGE</span>
          <h2>Remorquer quand continuer n’est pas raisonnable.</h2>
          <div className="r24-towing-cases">
            {relais24Site.towingCases.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <p className="r24-towing-grid__note">Le lieu de dépôt ou l’atelier est défini avec le conducteur. Cette démonstration n’inclut ni suivi GPS, ni statut de véhicule en direct.</p>
          <Link className="r24-btn r24-btn--dark" href="/sites/garage-03/contact">Contact</Link>
        </div>
      </section>
    </>
  );
}
