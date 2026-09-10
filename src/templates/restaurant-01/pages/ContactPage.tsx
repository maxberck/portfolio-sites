import { SectionLabel } from "../components/SectionLabel";
import { VisitPanel } from "../components/VisitPanel";
import { silexSite } from "../src/data/site";

export function ContactPage() {
  return (
    <>
      <section className="silex-page-intro silex-page-intro--contact">
        <SectionLabel>Adresse de démonstration</SectionLabel>
        <h1>Nous trouver</h1>
        <p className="silex-page-intro__statement">
          Maison Silex reçoit uniquement le soir dans cette démonstration fictive. Toutes les coordonnées ci-dessous sont illustratives.
        </p>
      </section>

      <VisitPanel />

      <section className="silex-contact-notes">
        <article>
          <SectionLabel>Contact</SectionLabel>
          <a href={`mailto:${silexSite.contact.email}`}>{silexSite.contact.email}</a>
          <a href={`tel:${silexSite.contact.phone.replace(/\s/g, "")}`}>{silexSite.contact.phone}</a>
        </article>
        <article>
          <SectionLabel>Accès</SectionLabel>
          <p>{silexSite.contact.access}</p>
        </article>
        <article>
          <SectionLabel>Démonstration</SectionLabel>
          <p>{silexSite.demoDisclosure}</p>
        </article>
      </section>
    </>
  );
}
