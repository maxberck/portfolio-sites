import Link from "next/link";

import { SectionIndex } from "../components/SectionIndex";
import { formStudioSite } from "../src/data/site";

export function ContactPage() {
  const { contact, hours } = formStudioSite;
  return (
    <div className="form-page form-contact-page">
      <header className="form-page-header">
        <SectionIndex index="04" label="CONTACT" />
        <h1>CONTACT</h1>
        <p>Informations pratiques de démonstration. Aucun agenda ou système de réservation n’est connecté.</p>
      </header>
      <section className="form-contact-grid">
        <div className="form-contact-block">
          <span>01 / ADDRESS</span>
          <h2>STUDIO</h2>
          <p>{contact.address}</p>
          <p>{contact.access}</p>
        </div>
        <div className="form-contact-block">
          <span>02 / DIRECT</span>
          <h2>CONTACT</h2>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
        <div className="form-contact-block form-hours-block">
          <span>03 / HOURS</span>
          <h2>OPEN</h2>
          {hours.map((row) => (
            <div key={row.days}><strong>{row.days}</strong><span>{row.hours}</span></div>
          ))}
        </div>
        <div className="form-contact-block">
          <span>04 / NEXT</span>
          <h2>EXPLORE</h2>
          <Link href="/sites/coiffure-03/services">SERVICES ↗</Link>
          <Link href="/sites/coiffure-03/work">WORK ↗</Link>
        </div>
      </section>
    </div>
  );
}
