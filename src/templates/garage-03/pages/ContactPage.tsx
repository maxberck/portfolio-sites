import { PageHero } from "@/src/templates/garage-03/components/PageHero";
import { relais24Site } from "@/src/templates/garage-03/src/data/site";

export function ContactPage() {
  return (
    <>
      <PageHero
        code="04"
        eyebrow="CONTACT / ZONE DÉMO"
        title="CONTACT"
        intro="Un site d’assistance doit rendre le contact évident. Ici, pas de faux formulaire ni de carte en direct : seulement les informations utiles de cette démonstration."
      />

      <section className="r24-contact-grid">
        <div className="r24-contact-grid__primary">
          <span className="r24-kicker">APPEL</span>
          <a className="r24-contact-phone" href={`tel:${relais24Site.contact.phone.replace(/\s/g, "")}`}>{relais24Site.contact.phone}</a>
          <p>Pour cette démonstration, l’appel est le point d’entrée principal avant toute intervention.</p>
          <a className="r24-btn r24-btn--signal" href={`mailto:${relais24Site.contact.email}`}>Écrire par e-mail</a>
        </div>

        <div className="r24-contact-grid__info">
          <div>
            <span className="r24-kicker">ZONE</span>
            <h2>Bruxelles & proche périphérie</h2>
            <p>{relais24Site.contact.location}</p>
            <small>{relais24Site.contact.note}</small>
          </div>
          <div>
            <span className="r24-kicker">HORAIRES DÉMO</span>
            <div className="r24-hours">
              {relais24Site.hours.map((entry) => (
                <div key={entry.days}>
                  <span>{entry.days}</span>
                  <strong>{entry.hours}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="r24-service-zone" aria-label="Représentation graphique de la zone de service fictive">
          <div className="r24-service-zone__route" aria-hidden="true">
            <span>R24</span>
            <i />
            <b>BRUXELLES</b>
            <i />
            <small>ZONE DÉMO</small>
          </div>
          <p>{relais24Site.demoDisclosure}</p>
        </aside>
      </section>
    </>
  );
}
