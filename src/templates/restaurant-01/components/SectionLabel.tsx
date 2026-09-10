type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return <p className="silex-section-label">{children}</p>;
}
