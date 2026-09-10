type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body?: string;
  as?: "h1" | "h2";
};

export function SectionIntro({ eyebrow, title, body, as = "h2" }: SectionIntroProps) {
  const Heading = as;

  return (
    <div className="kuro-section-intro">
      <p className="kuro-eyebrow">{eyebrow}</p>
      <Heading>{title}</Heading>
      {body ? <p className="kuro-section-intro__body">{body}</p> : null}
    </div>
  );
}
