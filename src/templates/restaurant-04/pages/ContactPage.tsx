import { SectionIntro } from "../components/SectionIntro";
import { VisitDetails } from "../components/VisitDetails";
import { kuroSite } from "../src/data/site";

export function ContactPage() {
  return (
    <div className="kuro-page">
      <section className="kuro-page-hero">
        <div className="kuro-shell kuro-page-hero__grid">
          <SectionIntro
            eyebrow="Venir"
            title="Contact"
            body="Toutes les informations utiles pour situer cette démonstration Kuro. Aucun module de réservation ou formulaire factice n’est utilisé."
            as="h1"
          />
          <p className="kuro-page-hero__aside">
            Les coordonnées affichées sont volontairement fictives et ne correspondent pas à un établissement réel.
          </p>
        </div>
      </section>

      <section className="kuro-shell kuro-contact-grid">
        <div>
          <VisitDetails />
        </div>
        <aside className="kuro-contact-note">
          <p className="kuro-eyebrow">Démonstration</p>
          <h2>Adresse de démonstration</h2>
          <p>{kuroSite.contact.location}</p>
          <p>{kuroSite.demoDisclosure}</p>
        </aside>
      </section>
    </div>
  );
}
