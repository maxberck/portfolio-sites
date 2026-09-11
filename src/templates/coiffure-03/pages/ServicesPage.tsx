import { SectionIndex } from "../components/SectionIndex";
import { ServiceRow } from "../components/ServiceRow";
import { formStudioSite } from "../src/data/site";

export function ServicesPage() {
  return (
    <div className="form-page">
      <header className="form-page-header">
        <SectionIndex index="01" label="SERVICES" />
        <h1>SERVICES</h1>
        <p>Une lecture directe des gestes proposés : forme, couleur, coiffage et soin. Les durées affichées sont illustratives.</p>
      </header>
      <div className="form-service-groups">
        {formStudioSite.serviceGroups.map((group) => (
          <section className="form-service-group" key={group.title}>
            <div className="form-service-group-head">
              <span>{group.index}</span>
              <h2>{group.title}</h2>
              <p>{group.note}</p>
            </div>
            <div className="form-service-table">
              {group.items.map((service) => <ServiceRow key={service.code} service={service} />)}
            </div>
          </section>
        ))}
      </div>
      <p className="form-demo-note">{formStudioSite.demoDisclosure}</p>
    </div>
  );
}
