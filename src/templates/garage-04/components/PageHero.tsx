type PageHeroProps = {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
};

export function PageHero({ index, eyebrow, title, body }: PageHeroProps) {
  return (
    <section className="c42-page-hero">
      <div className="c42-page-hero__index">{index}</div>
      <div className="c42-page-hero__copy">
        <span className="c42-kicker">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <div className="c42-register" aria-hidden="true"><span /><span /></div>
    </section>
  );
}
