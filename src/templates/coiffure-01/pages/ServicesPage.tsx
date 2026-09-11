import { EditorialHeading } from "../components/EditorialHeading";
import { EditorialImage } from "../components/EditorialImage";
import { maisonEliseSite } from "../src/data/site";

export function ServicesPage() {
  return (
    <>
      <EditorialHeading
        eyebrow="Maison Élise · services"
        title="Prestations"
        intro="Des prestations courtes à lire, construites autour du besoin réel. Les tarifs affichés sont illustratifs et servent uniquement cette démonstration portfolio."
      />

      <section className="elise-services-page">
        {maisonEliseSite.services.map((group, groupIndex) => (
          <article className="elise-services-group" key={group.title}>
            <div className="elise-services-group__intro">
              <span>0{groupIndex + 1}</span>
              <h2>{group.title}</h2>
              <p>{group.intro}</p>
            </div>
            <div className="elise-services-group__list">
              {group.items.map((service) => (
                <div className="elise-service-row" key={service.name}>
                  <div>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                  {service.price ? <strong>{service.price}</strong> : null}
                </div>
              ))}
            </div>
          </article>
        ))}
        <p className="elise-demo-price-note">Tarifs illustratifs — démonstration portfolio. Le besoin réel détermine la prestation.</p>
      </section>

      <section className="elise-services-feature">
        <EditorialImage image={maisonEliseSite.images.highlights} sizes="(max-width: 767px) 100vw, 46vw" />
        <div>
          <p className="elise-label">Couleur & nuance</p>
          <h2>La lumière se place, elle ne se plaque pas.</h2>
          <p>Le contraste, la base existante et la fréquence d’entretien guident le choix de la technique. Cette démo ne simule ni diagnostic automatisé ni résultat garanti.</p>
        </div>
      </section>
    </>
  );
}
