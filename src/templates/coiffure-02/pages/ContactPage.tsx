import { DistrictImage } from "../components/DistrictImage";
import { PageIntro } from "../components/PageIntro";
import { districtCutSite } from "../src/data/site";

export function ContactPage() {
  return (
    <div className="district-page district-contact-page">
      <PageIntro index="04 / CONTACT" title="Contact" copy="Adresse, horaires et coordonnées statiques pour cette démonstration de barber shop." />
      <section className="district-contact-grid">
        <div className="district-contact-info">
          <span>SHOP INFO</span>
          <h2>{districtCutSite.contact.shortLocation}</h2>
          <p>{districtCutSite.contact.address}</p>
          <a href={districtCutSite.contact.phoneHref}>{districtCutSite.contact.phone}</a>
          <a href={districtCutSite.contact.emailHref}>{districtCutSite.contact.email}</a>
          <p className="district-contact-note">{districtCutSite.contactNote}</p>
        </div>
        <DistrictImage image={districtCutSite.images.front} className="district-contact-image" priority sizes="(max-width: 900px) 100vw, 55vw" />
        <div className="district-hours-board">
          <span>OPEN / CLOSE</span>
          {districtCutSite.hours.map(([day, hours]) => (
            <div key={day}><strong>{day}</strong><span>{hours}</span></div>
          ))}
          <small>{districtCutSite.demoDisclosure}</small>
        </div>
      </section>
    </div>
  );
}
