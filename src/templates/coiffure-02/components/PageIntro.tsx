type PageIntroProps = {
  index: string;
  title: string;
  copy: string;
};

export function PageIntro({ index, title, copy }: PageIntroProps) {
  return (
    <header className="district-page-intro">
      <span>{index}</span>
      <h1>{title}</h1>
      <p>{copy}</p>
    </header>
  );
}
