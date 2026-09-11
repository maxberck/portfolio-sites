type PageHeroProps = {
  code: string;
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageHero({ code, eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="r24-page-hero">
      <div className="r24-page-hero__code" aria-hidden="true">{code}</div>
      <div className="r24-page-hero__copy">
        <span className="r24-kicker">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <div className="r24-road-line" aria-hidden="true"><span /></div>
    </section>
  );
}
