type SectionIndexProps = {
  index: string;
  label: string;
};

export function SectionIndex({ index, label }: SectionIndexProps) {
  return (
    <div className="form-section-index" aria-label={`${index} ${label}`}>
      <span>{index}</span>
      <strong>{label}</strong>
    </div>
  );
}
