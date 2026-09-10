import { PosterImage } from "@/src/templates/restaurant-02/components/PosterImage";
import { district88Site } from "@/src/templates/restaurant-02/src/data/site";

export function ConceptPage() {
  return (
    <div className="d88-page d88-concept-page" data-d88-page="concept-manifesto">
      <header className="d88-concept-hero">
        <div>
          <p className="d88-kicker">THE IDEA / ZERO CEREMONY</p>
          <h1>NO QUIET FOOD.</h1>
        </div>
        <p className="d88-concept-hero__intro">{district88Site.concept.intro}</p>
      </header>

      <section className="d88-principles" aria-label="Principes District 88">
        {district88Site.concept.principles.map((principle, index) => (
          <article key={principle.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{principle.title}</h2>
            <p>{principle.text}</p>
          </article>
        ))}
      </section>

      <section className="d88-concept-spread">
        <PosterImage image={district88Site.concept.kitchenImage} sizes="(max-width: 768px) 100vw, 60vw" />
        <div className="d88-rule-card">
          <p className="d88-kicker">HOUSE RULE</p>
          <h2>THE 88 RULE</h2>
          <p>{district88Site.concept.rule}</p>
          <span>NO HOLDING / NO STAGING / SERVE HOT</span>
        </div>
      </section>

      <section className="d88-concept-end">
        <strong>HEAT.</strong>
        <strong>TEXTURE.</strong>
        <strong>SAUCE.</strong>
      </section>
    </div>
  );
}
