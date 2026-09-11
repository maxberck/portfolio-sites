type EditorialHeadingProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function EditorialHeading({ eyebrow, title, intro }: EditorialHeadingProps) {
  return (
    <section className="elise-page-heading">
      <p className="elise-label">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="elise-page-heading__intro">{intro}</p>
    </section>
  );
}
