type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <header className="an-page-hero an-shell">
      <p className="an-kicker">{eyebrow}</p>
      <div className="an-page-hero__grid">
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </header>
  );
}
