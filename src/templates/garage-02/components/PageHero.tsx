type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  code: string;
};

export function PageHero({ eyebrow, title, intro, code }: PageHeroProps) {
  return (
    <section className="tw-page-hero">
      <div className="tw-shell tw-page-hero__grid">
        <div className="tw-page-hero__code" aria-hidden="true">{code}</div>
        <div>
          <p className="tw-kicker">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <p className="tw-page-hero__intro">{intro}</p>
      </div>
    </section>
  );
}
